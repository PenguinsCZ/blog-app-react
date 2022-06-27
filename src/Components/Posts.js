import { useState } from "react";
import "./postsstyles.css"
function Posts(props) {
    

    
    return ( 
    <div className="postholder">
        {props.allposts}
    </div> 
    );
}

export default Posts;