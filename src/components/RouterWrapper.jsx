import { useEffect } from "react";

const RouteWrapper = ({ element: Element, title }) => {
    useEffect(() => {
        if (title) {
            document.title = title || "Clay Corner";  // Dynamically set the document title
        }
    }, [title]);

    return <Element />; // Render the specified component
};

export default RouteWrapper;
