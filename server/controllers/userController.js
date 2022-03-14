import User from '../models/userModel.js'
import bcrypt from 'bcrypt';
import nodemailer from 'nodemailer';
// import { v4 as uuidv4 } from 'uuid';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import {SECRET_KEY, JWT_TOKEN_LIFE_TIME, SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, API_URL, CLIENT_URL} from '../config/config.js'
// import MailService from '../service/mailService.js';


const generateAccessToken = (id) => {
    const payload = {
        id,
    }
    return jwt.sign(payload, SECRET_KEY, {expiresIn: JWT_TOKEN_LIFE_TIME})
}

const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: false,
    auth: {
        user: SMTP_USER,
        pass: SMTP_PASSWORD
    }
})

const sendActivationMail = async function(to, link) {
        
    await transporter.sendMail({
        from: SMTP_USER,
        to: to,
        subject: 'Account activation on ' + API_URL,
        text: '',
        html:
            `
            <div>
                <h1>To activate your account follow the link</h1>
                <a href='${link}'>${link}</a>
            </div>
            `
    })
}



class UserController {
    
    // registration new user
    async registrationUser (req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors, message: 'Registration error' })
            }
            const { email, password } = req.body;
            const candidate = await User.findOne({ email });
            if (candidate) {
                return res.status(400).json({message: 'An account with this email already exists'})
            }
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            // const activationLink = uuidv4();
            const user = await User.create({
                email: email,
                password: hashedPassword,
                // activationLink
            });
            
            // await sendActivationMail(email, `${API_URL}/api/activate/${activationLink}`);
            res.status(201).json({ message: 'User has been created. Sign in, please' });
            
        } catch (err) {
            res.status(500).json({message: 'Registration error'})
        }
    }

    async loginUser(req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({ message: `${email} not found` })
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({ message: 'wrong password' })
            }
            const token = generateAccessToken(user._id);
            return res.json({ token, email: user.email, cities: user.cities, message: 'SignIn is successfull' })
            
        } catch (err) {
            res.status(400).json({message: 'Login error'})
        }
    }

    
    //find all users
    async getAll (req, res) {
        try {
            const users = await User.find();
            return res.json(users)
        } catch (err) {
            res.status(500).json(err)
        }
    }


    // find user by id
    async getUser (req, res) {
        try {
            const id = req.params.id;
            if (!id) {
                res.status(400).json({message: 'no id'})
            }
            const user = await User.findById(id);
            return res.json(user)
        } catch (err) {
            res.status(500).json(err)
        }
    }

    //delete user
    async deleteUser (req, res) {
        try {
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) {
                return res.status(404).json({ message: `${email} not found` })
            }
            const validPassword = bcrypt.compareSync(password, user.password)
            if (!validPassword) {
                return res.status(400).json({ message: 'wrong password' })
            }
            await User.deleteOne({email})
            return res.json({message: `user ${email} has been deleted`})
        } catch (err) {
            res.status(400).json(err)
        }
    }


// update user and cities
  async updateUser (req, res) {
      try {
          const { email, password, cities } = req.body;
        
          const user = await User.findOne({ email });
        
          if (!user) {
              return res.status(404).json({ message: `${email} not found` })
          }
          const saltRounds = 10;
          const hashedPassword = await bcrypt.hash(password, saltRounds);
          const newPassword = { password: hashedPassword };
                
        await User.updateMany({ email }, {$set: newPassword,  $push: { cities: cities }} );
          
        return res.json({message: `user ${email} has been updated`})
        } catch (err) {
            res.status(400).json('error')
        }
    }
    

// remove cities
  async removeCities (req, res) {
    try {
        const { email, cities } = req.body;
      
        const user = await User.findOne({ email });
      
        if (!user) {
            return res.status(404).json({ message: `${email} not found` })
        }

      await User.updateOne({ email }, { $pull: { cities: cities } } );
        
      return res.json({message: `user ${email} has been updated`})
      } catch (err) {
          res.status(400).json('error')
      }
    }

//mail activation
    async activate(req, res) {
        try {
            const activationLink = req.params.link;

            const user = await User.findOne({ activationLink });
            if (!user) {
                return res.status(404).json({ message: `${email} not found` })
            }
            user.isActivated = true;
            await user.save();
            return res.redirect(CLIENT_URL);
        } catch(err) {
            res.status(400).json({message: 'Activation error'})
        }
    }
}

export default new UserController();

