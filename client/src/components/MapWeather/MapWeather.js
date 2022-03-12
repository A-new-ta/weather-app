import React, {useEffect, useState, useContext} from 'react';
import { MapContainer, TileLayer, Popup, useMapEvents } from 'react-leaflet';
import { AppContext } from '../../context/context';
// import './MapWeather.scss';


const MapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const LocationMarker = () => {
    const { data, fahrenheit } = useContext(AppContext);
    const { latitude, longitude } = data;
    const temp = data.currentConditions.temp;
    const [position, setPosition] = useState(null)
    const [popupData, setPopupsData] = useState([])
    const map = useMapEvents({})

    useEffect(() => {
        map.setView([latitude, longitude])
    }, [])

    useEffect(() => {
        map.flyTo([latitude, longitude], map.getZoom())
        setPosition({ lat: latitude, lng: longitude })
        setPopupsData([
            ...popupData,
            {
                lat: latitude,
                lng: longitude,
                temp,
                fahrenheit,
            },
        ])
    }, [latitude, longitude, map])
    return position === null ? null : (
        <>
            {popupData.map(({ temp, lat, lng, fahrenheit }) => {
                const key = `${lat}${lng}`
                return (
                    <Popup key={key} position={[lat, lng]} autoClose={false}>
                        {temp} {fahrenheit}
                    </Popup>
                )
            })}
        </>
    )
}


const WeatherMap = React.memo(function WeatherMap() {
    return (
        <div className='map-container'
            contentEditable suppressContentEditableWarning
        >
            <MapContainer
                center={[0, 0]}
                zoom={10}
                zoomControl={false}
            >
                <TileLayer url={MapUrl} />
                <LocationMarker/>
            </MapContainer>
        </div>
    )
})

export default WeatherMap