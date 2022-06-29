import Sortbuttons from "./Sortbuttons";
import "../Styles/postsstyles.css"
function Posts(props) {
    

    
    return ( 
    <div className="postholder">
        <Sortbuttons/>
        {props.allposts}
    </div> 
    );
}

export default Posts;