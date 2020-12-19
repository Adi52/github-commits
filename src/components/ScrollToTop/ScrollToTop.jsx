import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// copy from docs

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}