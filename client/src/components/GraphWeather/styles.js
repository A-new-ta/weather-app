import { createStyles, makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() =>
    createStyles({
        cartWrapper: {
            width: '85%',
            height: 200,
            marginRight: 10,
            fontSize: '1rem'
        },
        setting: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: 5,
        },
        settingBtn: {
            width: 50,
        },
    })
)
