import React, {useEffect, useState, useContext} from 'react';
import { MapContainer, TileLayer, Popup, useMapEvents } from 'react-leaflet';
import { AppContext } from '../../context/context';

const MapUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const LocationMarker = () => {
    const { data, temperatureUnit } = useContext(AppContext);
    const { latitude, longitude } = data;
    const temp = data.currentConditions.temp;
    const [position, setPosition] = useState(null)
    const [popupDatas, setPopupsDatas] = useState([])
    const map = useMapEvents({})

    useEffect(() => {
        map.setView([latitude, longitude])
    }, [])

    useEffect(() => {
        map.flyTo([latitude, longitude], map.getZoom())
        setPosition({ lat: latitude, lng: longitude })
        setPopupsDatas([
            ...popupDatas,
            {
                lat: latitude,
                lng: longitude,
                temp,
                temperatureUnit,
            },
        ])
    }, [latitude, longitude, map])
    return position === null ? null : (
        <>
            {popupDatas.map(({ temp, lat, lng, temperatureUnit }) => {
                const key = `${lat}${lng}`
                return (
                    <Popup key={key} position={[lat, lng]} autoClose={false}>
                        {temp} {temperatureUnit}
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