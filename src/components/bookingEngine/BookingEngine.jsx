import { useEffect } from "react";

const BookingEngine = ({ containerId, dataTypeId, dataBrandId, dataBtnColor }) => {
    useEffect(() => {
        // Dynamically load the CSS for the booking engine
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/be/static/css/main.5a8b9a96.css"; // Updated path
        document.head.appendChild(link);

        // Dynamically load the JS for the booking engine
        const script = document.createElement("script");
        script.src = "/be/static/js/main.caa69fb1.js"; // Updated path
        script.async = true;
        document.body.appendChild(script);

        // Cleanup: remove the dynamically added script and CSS when the component unmounts
        return () => {
            if (document.head.contains(link)) {
                document.head.removeChild(link);
            }
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, [dataBrandId]);

    return (
        <div className="booking-patch-harsha" id={containerId}>
            <div
                className="harsha-inside-patch"
                id="booking-engine-root"
                data-typeid={dataTypeId}
                data-brandid={dataBrandId}
                data-btncolor={dataBtnColor}
            >
                {/* The script and CSS will dynamically load here */}
            </div>
        </div>
    );
};

export default BookingEngine;
