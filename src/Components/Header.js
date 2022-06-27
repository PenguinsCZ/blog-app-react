import "./headerstyles.css"
import logo from "../Assets/logo.svg"
import { useState } from "react"
function Header(props) {
    

    return (
         <div className="App-header">
            <div className="Logodiv"></div>
            <img src={logo} className="App-logo"></img>
            <div className="Bloggit">Bloggit</div>
            <input className="Searchbar" placeholder="Search.." value={props.searched} onInput={(e) => props.searchfunc(e.target.value)}></input>
        </div> 
    );
}

export default Header;