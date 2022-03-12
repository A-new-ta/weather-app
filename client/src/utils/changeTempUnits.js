export const changeTempUnits = (temp, temperatureUnit) => {
    if (temperatureUnit === '°F') {
        return celsiusToFahrenheit(temp)
    }
    return temp
}

function celsiusToFahrenheit(temp) {
    return +((temp * 9) / 5 + 32).toFixed(3)
}