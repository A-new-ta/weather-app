import React, { createContext, useCallback, useState, useEffect, useMemo } from 'react';
import axios from 'axios';


export const AppContext = createContext();

const Context = ({ children }) => {
    const [data, setData] = useState('')
    const [temperatureUnit, setTemperatureUnit] = useState('°C')
    const [search, setSearch] = useState('')
    const [city, setCity] = useState(window.localStorage.getItem('city'))
    const [refreshings, setRefreshings] = useState([false, '', ''])
    const [isZipCode, setIsZipCode] = useState(false);
    
    
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
        if (search.length > 0) {
            setCity(search)
            setSearch('')
        }
    }
    
    // search button
    const handleResultClick = (e) => {
        setSearch(e)
    }

    // change data whenever city name changes to a valid name
    useEffect(() => {
        getData()
    }, [city])
    
    //for local storage
    useEffect(() =>{
        if (!window.localStorage.getItem('°F')) {
            window.localStorage.setItem('°F', '°C')
            window.localStorage.setItem('city', 'Minsk')
            window.localStorage.setItem('zipCode', 'false')
        } else {
            setTemperatureUnit(window.localStorage.getItem('°F'))
            setCity(window.localStorage.getItem('city'))
            setIsZipCode(window.localStorage.getItem('zipCode'))
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem('°F', temperatureUnit)
    }, [temperatureUnit])
    
    useEffect(() => {
        window.localStorage.setItem('zipCode', isZipCode)
    }, [isZipCode])

    return (
        <AppContext.Provider value={{
            data,
            temperatureUnit,
            setTemperatureUnit,
            search,
            setSearch,
            handleResultClick,
            handleSubmit,
            refreshings,
            setRefreshings, 
            isZipCode,
            setIsZipCode
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default Context

