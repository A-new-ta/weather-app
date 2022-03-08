import React, { createContext, useCallback, useState, useEffect } from 'react';
import axios from 'axios';


export const AppContext = createContext();

const Context = ({ children }) => {
    const [data, changeData] = useState('')
    const [fahrenheit, toggleFahrenheit] = useState('°C')
    const [search, changeSearch] = useState('')
    const [city, changeCity] = useState(window.localStorage.getItem('city'))
    const [refreshing, changeRefreshing] = useState([false, "", ""])

    // data from api weather
    const getData = useCallback( async() => {
        const body = {};
        body.data = city;
        // console.log(city);
        changeRefreshing([true, "Loading...", "blue"])
        try {
            const response = await axios.post('http://localhost:5000/api/weather/current', body);
            // console.log(response.status)
            // console.log(response.data)
            if (response.data.address !== undefined)
            changeData(response.data)
            window.localStorage.setItem('city', String(`${response.data.address}`))
            changeRefreshing([false, "", ""])
        } catch (err) {
            console.log(err)
            changeRefreshing([
                true, "Network/API error, change the city name you entered.", "red"
              ])
        } 
    }, [city])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (search.length > 0) {
            console.log(search)
            changeCity(search)
            changeSearch("")
        }
    }
    
    // search button
    const handleResultClick = (e) => {
        changeSearch(e)
    }

    // change data whenever city name changes to a valid name
    useEffect(() => {
        getData()
    }, [city])
    
    //for local storage
    useEffect(() =>{
        if(!window.localStorage.getItem("°F")){
          window.localStorage.setItem("°F", "°C")
          window.localStorage.setItem("city", "minsk")
        } else {
          toggleFahrenheit(window.localStorage.getItem("°F"))
          changeCity(window.localStorage.getItem("city"))
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem("°F", fahrenheit)
      },[fahrenheit])
    
    return (
        <AppContext.Provider value={{
            data,
            fahrenheit,
            toggleFahrenheit,
            search,
            changeSearch,
            handleResultClick,
            handleSubmit,
            refreshing,
            changeRefreshing
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default Context

