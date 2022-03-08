import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import 'moment-timezone'

const Clock = ({ timezone }) => {
    const [hourState, setHourState] = useState('')

    useEffect(() => {
        if (timezone) {
            setHourState(moment().tz(timezone).format('dddd | h:mmA'))
        }
        const interval = setInterval(() => {
            if (timezone) {
                setHourState(moment().tz(timezone).format('dddd | h:mmA'))
            }
        }, 60000)
        return () => {
            clearInterval(interval)
        }
    }, [timezone])
    return <Typography variant='h5'>{ hourState }</Typography>
}

export default Clock