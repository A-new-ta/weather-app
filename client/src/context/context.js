import React, { createContext, useCallback, useState, useEffect } from 'react';
import axios from 'axios';

export const AppContext = createContext();

const Context = ({ children }) => {
    const [data, setData] = useState('')
    const [temperatureUnit, setTemperatureUnit] = useState('°C')
    const [search, setSearch] = useState('')
    const [city, setCity] = useState(window.localStorage.getItem('city'))
    const [refreshings, setRefreshings] = useState([false, '', ''])
    const [isZipCode, setIsZipCode] = useState(false);
    const [cards, setCards] = useState([]);
    const [count, setCount] = useState(0);
    const [isLogin, setIsLogin] = useState(localStorage.getItem('email') ? true : false);
    // add weather card
    const addNewCard = () => {
        setCount(count + 1)
        setCards((cards) => [...cards, { id: count}])
    }
    
    // delete weather card
    const deleteCard = (id) => {
        setCards(cards.filter(obj => obj.id != id));
    }
    
    // data from api weather
    const getData = useCallback( async() => {
        const body = {};
        body.data = city;
        setRefreshings([true, 'Loading...'])
        try {
            const response = await axios.post('http://localhost:5000/api/weather/current', body);
            if (response.data.address) {
                setData(response.data)
            }
            window.localStorage.setItem('city', String(`${response.data.address}`))
            setRefreshings([false, '', ''])
        } catch (err) {
            setRefreshings([
                true, 'Network/API error, change the city name you entered.', 'red'
              ])
        } 
    }, [city])

    const handleSubmit = (e) => {
        e.preventDefault()
        let patternOne = /^[a-zA-Z]+$/;
        let patternTwo = /\d*\.\d*/;
        let patternThree = /^[0-9 ]+$/;
        if (search.length > 0 && (!isZipCode)) {
            if (patternOne.test(search) || patternTwo.test(search)) {
                setCity(search)
                setSearch('')
            } else {
                setRefreshings([true, 'Enter correct city or coordinates, please', 'red'])
            }
        }
        if (search.length > 0 && (isZipCode)) {
            if (patternThree.test(search)) {
                setCity(search)
                setSearch('')
            } else {
                setRefreshings([true, 'Enter correct zipcode, please', 'red'])
            }
        }
    }
    // search button
    // const handleResultClick = (e) => {
    //     setSearch(e)
    // }

    // change data whenever city name changes to a valid name
    useEffect(() => {
        getData()
    }, [city])
    
    //for local storage
    useEffect(() =>{
        if (!window.localStorage.getItem('°F')) {
            window.localStorage.setItem('°F', '°C')
            window.localStorage.setItem('city', 'Minsk')
        } else {
            setTemperatureUnit(window.localStorage.getItem('°F'))
            setCity(window.localStorage.getItem('city'))
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem('°F', temperatureUnit)
    }, [temperatureUnit])
    
    return (
        <AppContext.Provider value={{
            data,
            temperatureUnit,
            setTemperatureUnit,
            search,
            setSearch,
            // handleResultClick,
            handleSubmit,
            refreshings,
            setRefreshings, 
            isZipCode,
            setIsZipCode,
            cards,
            setCards,
            addNewCard,
            deleteCard,
            isLogin,
            setIsLogin
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default Context
