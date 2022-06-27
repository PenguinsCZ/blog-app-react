
import { useState } from "react";
import "../Styles/sidebarstyles.css"

function Sidebar(props) {
    const[title, settitle] = useState("")
    const[description, setdesc] = useState("")

    function addpost(title, description){
        if(title === ""){
            alert("Posts need to have a title")
        }
        else if(description === ""){

        }
        else{props.getpost(title, description)
        settitle("")
        setdesc("")}
    }
    return ( 
    <div className="sidebar">
        <div className="sidebarform">
            <p className="basictext h2 margin10">Create a post!</p>
            <form>
                <label htmlFor="title" className="margin10" >Title:</label>
                <input className="margin10" value={title} onChange={(e) => settitle(e.target.value)} name="title" id="title"></input>
                <label htmlFor="description" className="margin10">Description:</label>
                <textarea className="margin10 textarea"  value={description} onChange={(e) => setdesc(e.target.value)} name="description" id="description"></textarea>
                <button className="buttoncreate basictext" type="button" onClick={() => addpost(title, description)}>Create</button>
            </form>
        </div>
    </div>
     );
}

export default Sidebar;