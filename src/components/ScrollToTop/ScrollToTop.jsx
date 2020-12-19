import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// copy from docs

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, [pathname]);

    return null;
}