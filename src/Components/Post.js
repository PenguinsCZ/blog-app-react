import "../Styles/poststyles.css"

import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { useState } from "react";

function Post(props) {
    const[Thumb, changethumb] = useState(ThumbUpOffAltIcon)
    const[likescount, addlike] = useState(props.plikes)
    function likepost(){
        if(Thumb === ThumbUpAltIcon){
            changethumb(ThumbUpOffAltIcon)
            addlike(likescount - 1)
        }
        else{
            changethumb(ThumbUpAltIcon)
            addlike(likescount + 1)
        }
    }


    return ( <div className="post margin10">
        <div className="leftsidepost">
            
          <Thumb className="margin10" onClick={() => likepost()}/>
            <div className="margin10 likescount">{likescount}</div>
        </div>
        <div>
            <h2 className="margin10 basictext h2post">{props.ptitle}</h2>
            <p className="margin10 basictext parpost">{props.ptext}</p>
        </div>
    </div> );
}

export default Post;