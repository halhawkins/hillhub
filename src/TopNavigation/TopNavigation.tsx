import { FC } from "react";
import "./TopNavigation.css";
const TopNavigation:FC = () => {
    // Implement your TopNavigation component here
    return (
        <nav className="top-nav-container">
            <div className="nav-link">Bills</div>
            <div className="nav-link">House</div>
            <div className="nav-link">Senate</div>
            <div className="nav-link">Political News</div>
        </nav>
    );
}

export default TopNavigation;