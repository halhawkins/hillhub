import { FC } from "react";
import "./TopNavigation.css";
import { useDispatch } from "react-redux";
import { setView } from "./TopNavSlice";
const TopNavigation:FC = () => {
    const dispatch = useDispatch();
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        console.log('Clicked on: ', target.dataset.itemId);
        dispatch(setView(target.dataset.itemId));
        // Implement the logic to dispatch an action to update the viewSelection state
    }
    // Implement your TopNavigation component here
    return (
        <nav className="top-nav-container">
            <div className="nav-link" data-item-id={'Bills'} onClick={handleClick}>Bills</div>
            <div className="nav-link" data-item-id={'House'} onClick={handleClick}>House</div>
            <div className="nav-link" data-item-id={'Senate'} onClick={handleClick}>Senate</div>
            <div className="nav-link" data-item-id={'News'} onClick={handleClick}>Political News</div>
        </nav>
    );
}

export default TopNavigation;