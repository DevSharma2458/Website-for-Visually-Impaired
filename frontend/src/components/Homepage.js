import React, { useContext } from "react";
import Navbar from './navbar';
import Titles from "./Titles";
import Categories from "./Categories";
import "./Homepage.css";
import "./index.css";
import { SearchContext, ContrastContext, VoiceInputContext, VoicePopupContext } from "../App";

const categories = ["Shoes", "Electronics", "Food", "Clothes"];

function Homepage() {
    const { valueToBeSearched } = useContext(SearchContext);
    const { voiceInput } = useContext(VoiceInputContext);
    const { voicePopup } = useContext(VoicePopupContext);
    const { isHighContrast } = useContext(ContrastContext);

    return (
        <div className={`homepage ${isHighContrast ? 'dark' : 'light'}`}>
            <Navbar />
            <Titles />
            <div className="categories">
                <Categories name={categories[0]} />
                <Categories name={categories[1]} />
            </div>
            <div className="categories">
                <Categories name={categories[2]} />
                <Categories name={categories[3]} />
            </div>
        </div>
    );
}

export default Homepage;
