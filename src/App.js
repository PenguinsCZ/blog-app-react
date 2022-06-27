import Header from "./Components/Header"
import Posts from "./Components/Posts.js"
import Sidebar from "./Components/Sidebar.js"
import "./appstyles.css"
import Post from "./Components/Post";
import { useEffect, useState } from "react";

function App() {

  const [posts, addpost] = useState([{
    ptitle: "Hello there",
    ptext: "I need to change a tire. Anybody help?",
    likes: 5,
    key: 0
  },{
    ptitle: "Sup",
    ptext: "I'm single and I need your help guys",
    likes: 2,
    key: 1
  }])

  


  const[matchingposts, displaymatched] = useState([]);

  function searchfunc(input){

      const sorted = posts.filter((value) => {
        return value.ptitle.toLowerCase().includes(input.toLowerCase())
      })
      if(input === ""){
        displaymatched([])
      }
      else{displaymatched(<div>{sorted.map((x) => <Post key={posts.indexOf(x)} ptitle={x.ptitle} ptext={x.ptext} plikes={x.likes}/>)}</div>)}
      
  }
  



  function createpost(title, text){

    addpost([...posts,{
      ptitle: title,
      ptext: text,
      likes: 0
    }])
    
  }

  
  

  return (
    <div className="App">
      <Header searchfunc={searchfunc}/>
      <div className="Main">
        <Posts getpost={createpost} allposts={matchingposts.length === 0 ? <div>{posts.map((x) => <Post key={posts.indexOf(x)} ptitle={x.ptitle} ptext={x.ptext} plikes={x.likes}/>)}</div> : matchingposts}/>
          
        <Sidebar getpost = {createpost}/>
      </div>
    </div>
  );
}

export default App;
