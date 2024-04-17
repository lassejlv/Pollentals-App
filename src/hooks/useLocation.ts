import { useState } from "react";


export const useGeolocation = () => {
 const [locationInfo, setLocationInfo] =
   useState<GeolocationPosition | null>();
 const [locationError, setLocationError] = useState<string | null>();


 const { geolocation } = navigator;


 const successFn = (res: GeolocationPosition) => {
   console.log({ res });
   setLocationInfo(res);
 };


 const errorFn = (res: GeolocationPositionError) => {
   console.log({ res });
   setLocationError(res.message);
 };


 if (!locationError && !locationInfo) {
   geolocation.getCurrentPosition(successFn, errorFn);
 }


 return { locationError, locationInfo };
};
