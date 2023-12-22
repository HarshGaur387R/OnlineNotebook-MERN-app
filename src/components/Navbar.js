import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "../App.css"
import search_logo from '../assets/search-logo.svg'
import { useContext } from "react";
import chipContext from "../context/filter chips/chipContext";
import NoteContext from "../context/notes/noteContext";

function Navbar() {

    const [SearchInputFocus, updateSearchInputFocus] = useState('search-image-before-focus');

    const showSearchImage = (bool) => {
        if (bool) updateSearchInputFocus('search-image-after-focus');
        else if (!bool) updateSearchInputFocus('search-image-before-focus');
    }

    const {fetchNotes} = useContext(NoteContext);
    const { addChip } = useContext(chipContext);
    const location = useLocation();
    const [searchInputValue, updateSearchInputValue] = useState({ value: '' });

    return (
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-container">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">OnlineNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`} to="/profile">Profile</Link>
                            </li>
                        </ul>
                        <form className="d-flex search-input-container" onBlur={() => { showSearchImage(false) }} onFocus={() => { showSearchImage(true) }} >

                            <input id="searchInput" value={searchInputValue.value} onChange={(event) => { updateSearchInputValue({ value: event.target.value }) }} className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                            <button onClick={async (e) => { e.preventDefault(); addChip(searchInputValue.value); await fetchNotes(searchInputValue.value)}} className={`search-image ${SearchInputFocus}`}>
                                <img src={search_logo} alt="search-button" className={SearchInputFocus} />
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
