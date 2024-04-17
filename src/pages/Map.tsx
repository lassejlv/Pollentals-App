
import ReactMapGl, { Marker } from 'react-map-gl';
import { useGeolocation } from '../hooks/useLocation';
import { FaMapPin } from "react-icons/fa";
import { BarLoader } from 'react-spinners';



export default function Map() {
    let longitude = 9.921747;
    let latitude = 57.048820;

    const { locationInfo, locationError } = useGeolocation();

    if (locationError) {
        return <div>Error: {locationError}</div>
    }

    if (!locationInfo) {
        return <div className='flex items-center justify-center h-[75vh]'>
            <BarLoader color='#4ba598' />
        </div>
    }

    if (locationInfo) {
        longitude = locationInfo.coords.longitude;
        latitude = locationInfo.coords.latitude;
    }


    return (
        <ReactMapGl
            mapLib={import('mapbox-gl')}
            initialViewState={{
                //Aalborg, Denmark
                longitude: longitude,
                latitude: latitude,
                zoom: 8
            }}
            style={{ width: 600, height: 1000 }}
            mapboxAccessToken='<token>'
            mapStyle="mapbox://styles/mapbox/streets-v11"
        >

            {/* Marker where the user is */}
            <Marker
                latitude={latitude}
                longitude={longitude}
                anchor='bottom'
            >
                <FaMapPin color="red" size={30} />
            </Marker>

        </ReactMapGl>
    )
}
