import { useLocation } from "react-router-dom";

export default function Map() {
    const { locationInfo, locationError } = useLocation();

    console.log({ locationInfo, locationError });

    return <>

        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.138352942402!2d9.96698602271711!3d57.04835859484329!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464932b69856edb3%3A0xe12d94d82c0b02c7!2sTECHCOLLEGE!5e0!3m2!1sda!2sdk!4v1713358548324!5m2!1sda!2sdk"
            className="w-full h-screen"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </>
}
