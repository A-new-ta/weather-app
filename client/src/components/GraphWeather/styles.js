import { createStyles, makeStyles } from '@material-ui/core'

export const useStyles = makeStyles(() =>
    createStyles({
        cartWrapper: {
            width: '80%',
            height: 200,
            marginRight: 20,
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
