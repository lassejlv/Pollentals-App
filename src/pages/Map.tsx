import ReactMapGl, { Marker } from "react-map-gl";
import { useGeolocation } from "../hooks/useLocation";
import { FaMapPin } from "react-icons/fa";
import { BarLoader } from "react-spinners";
import { toast } from "sonner";

export default function Map() {
  let longitude = 9.921747;
  let latitude = 57.04882;
  const MapBoxToken = import.meta.env.VITE_MAPBOX_TOKEN;

  const { locationInfo, locationError } = useGeolocation();

  if (!MapBoxToken) {
    return toast.error("Mapbox Token returned undefined");
  }

  if (locationError) {
    return <div>Error: {locationError}</div>;
  }

  if (!locationInfo) {
    return (
      <div className="flex h-[75vh] items-center justify-center">
        <BarLoader color="#4ba598" />
      </div>
    );
  }

  if (locationInfo) {
    longitude = locationInfo.coords.longitude;
    latitude = locationInfo.coords.latitude;
  }

  return (
    <>
      <ReactMapGl
        mapLib={import("mapbox-gl")}
        initialViewState={{
          //Aalborg, Denmark
          longitude: longitude,
          latitude: latitude,
          zoom: 8,
        }}
        style={{ width: 600, height: 1000 }}
        mapboxAccessToken={MapBoxToken}
        mapStyle="mapbox://styles/mapbox/standard"
      >
        {/* Marker where the user is */}
        <Marker latitude={latitude} longitude={longitude}>
          <h1 className="text-red-500">You are here</h1>
          <FaMapPin color="red" size={30} />
        </Marker>
      </ReactMapGl>
    </>
  );
}
