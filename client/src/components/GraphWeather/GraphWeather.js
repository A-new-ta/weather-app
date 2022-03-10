import React, {useContext, useState} from 'react';
import { Button, ButtonGroup } from '@material-ui/core';
import { LineChart, XAxis, CartesianGrid, Line, ResponsiveContainer, YAxis, Legend } from 'recharts';
import { useStyles } from './styles';
import { dateTransform } from '../../utils/dateTransform';
import { AppContext } from '../../context/context';
import Typography from '@material-ui/core/Typography';
const SHORT_DAY_DATE_FORMAT = 'ddd';
const NUMBER_OF_DAYS = 7;



// const graphDataKeysType = 'temp' | 'humidity' | 'windspeed';

const GraphWeather = () => {
    const { data, fahrenheit } = useContext(AppContext);
    const { cartWrapper, setting, settingBtn } = useStyles();
    const [dataKey, setDataKey] = useState ('temp');
    const onButtonDataKeyClick = (dataKey) => {
        setDataKey(dataKey)
    }
    
    if (!data) {
        return (
            <Typography variant="h5">
                    Loading...
            </Typography>
        )
    }
    
    const labelYAxis = () => {
        if (dataKey === 'temp') {
            return fahrenheit
        }
        if (dataKey === 'humidity') {
            return '%'
        }
        return 'km/h'
    }
    // const dayData = data.days
    
    const newDataDays = [];
    for (let i = 0; i < NUMBER_OF_DAYS; i++) {
        const { temp } = data.days[i];
        newDataDays.push({ temp })
    }
    console.log(newDataDays)
        
    const transformForecastForGraph = (data, timezone, dataKey) => {
                
        return newDataDays.map(({ datetimeEpoch, temp, humidity, icon, windspeed }) => {
            const dayForecast = {
                name: dateTransform(
                    datetimeEpoch,
                    data.timezone,
                    SHORT_DAY_DATE_FORMAT
                ),
                // hun: humidity,
                // Selected: dayData[dataKey],
            }
            // const dayData = favouriteLocationData[index]
            // dayForecast[dayData.location || ind] = dayData[dataKey]
            return dayForecast
        })
    }

    const somedata = [{name: 'Page A', uv: 400}, {name: 'Page B', uv: 300}, {name: 'Page C', uv: 300}, {name: 'Page D', uv: 200}];
    return (
        <>
            <div className={cartWrapper}>
                <ResponsiveContainer>
                    <LineChart
                        // data={transformForecastForGraph(
                        //     newDataDays,
                        //     data.timezone,
                        //     // favouritesForecastData,
                        //     dataKey
                        // )}
                        width={800}
                        height={200}
                        data={somedata}
                        margin={{
                            top: 5,
                            right: 20,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <Line
                            type="monotone"
                            dataKey="uv"
                            stroke="#8884d8"
                        />
                        <CartesianGrid strokeDasharray='3 3' />
                        <XAxis dataKey='name' />
                        {/* <YAxis label={{ value: labelYAxis(), angle: -90 }} /> */}
                        <YAxis></YAxis>
                        
                        {/* {shownOnGraphLocations.map(({ location, color }) => {
                            return (
                                <Line
                                    key={location}
                                    type="monotone"
                                    dataKey={location}
                                    stroke={color}
                                />
                            )
                        })} */}
                        <Legend />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            {/* <ButtonGroup
                className={setting}
                size="small"
                aria-label="small outlined button group"
            >
                <Button
                    variant={dataKey === 'temp' ? 'contained' : 'outlined'}
                    onClick={() => {
                        onButtonDataKeyClick('temp')
                    }}
                    className={settingBtn}
                >
                    Temp
                </Button>
                <Button
                    variant={dataKey === 'windspeed' ? 'contained' : 'outlined'}
                    onClick={() => {
                        onButtonDataKeyClick('windspeed')
                    }}
                    className={settingBtn}
                >
                    Wind
                </Button>
                <Button
                    variant={dataKey === 'humidity' ? 'contained' : 'outlined'}
                    onClick={() => {
                        onButtonDataKeyClick('humidity')
                    }}
                    className={settingBtn}
                >
                    Hum
                </Button>
            </ButtonGroup> */}
        </>
    )
}

export default GraphWeather


