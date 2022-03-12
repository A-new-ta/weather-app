import React, {useContext, useState} from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { LineChart, XAxis, CartesianGrid, Line, ResponsiveContainer, YAxis, Legend, Tooltip } from 'recharts';
import { useStyles } from './styles';
import { dateTransform } from '../../utils/dateTransform';
import { AppContext } from '../../context/context';
import { celsiusToFahrenheit } from '../../utils/transformDegrees';
const NUMBER_OF_DAYS = 7;


const GraphWeather = () => {
    const { data, fahrenheit } = useContext(AppContext);
    const { cartWrapper, setting, settingBtn } = useStyles();
    const [dataKey, setDataKey] = useState ('temperature');
    const onButtonDataKeyClick = (dataKey) => {
        setDataKey(dataKey)
    }
    const changeTempUnits = (temp) => {
        if (fahrenheit === '°F') {
            return celsiusToFahrenheit(temp)
        }
        return temp
    }

    const labelYAxis = () => {
        if (dataKey === 'temperature') {
            return fahrenheit
        }
        if (dataKey === 'humidity') {
            return '%'
        }
        return 'km/h'
    }

    const newDataDays = [];
    for (let i = 0; i < NUMBER_OF_DAYS; i++) {
        const { datetimeEpoch, temp, humidity, icon, windspeed } = data.days[i];
        let newDate = dateTransform(datetimeEpoch, data.timezone, 'DD.MM')
        let temperature = changeTempUnits(temp)
        newDataDays.push({ newDate, temperature, humidity, icon, windspeed })
    }
    
    return (
        <>
            <div className={cartWrapper}>
                <ResponsiveContainer>
                    <LineChart
                        data={newDataDays}
                        margin={{
                            top: 10,
                            right: 5,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray='3 3'/>
                        <XAxis dataKey='newDate' />
                        <YAxis label={{ value: labelYAxis(), angle: -90 }} />
                        <Legend />
                        <Tooltip/>
                        <Line
                            type='monotone'
                            dataKey={dataKey}
                            stroke='#8884d8'
                        />
                    </LineChart>
                </ResponsiveContainer>
                <ButtonGroup
                    className={setting}
                    size="small"
                    aria-label="small outlined button group"
                >
                    <Button
                        variant={dataKey === 'temperature' ? 'contained' : 'outlined'}
                        onClick={() => { onButtonDataKeyClick('temperature') }}
                        className={settingBtn}
                    >
                        Temp
                    </Button>
                    <Button
                        variant={dataKey === 'windspeed' ? 'contained' : 'outlined'}
                        onClick={() => { onButtonDataKeyClick('windspeed') }}
                        className={settingBtn}
                    >
                        Wind
                    </Button>
                    <Button
                        variant={dataKey === 'humidity' ? 'contained' : 'outlined'}
                        onClick={() => { onButtonDataKeyClick('humidity') }}
                        className={settingBtn}
                    >
                        Hum
                    </Button>
                </ButtonGroup>
            </div>
        </>
    )
}

export default GraphWeather


