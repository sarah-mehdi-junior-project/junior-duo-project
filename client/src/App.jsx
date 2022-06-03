import React,{ useState, useEffect } from "react";
import Form from "./components/Form/Form.jsx";
import List from "./components/List/List.jsx";
import {getMyGames} from "./api/api.js"
function App() {
  const [data, setData] = useState({
    mydata:[]
})

useEffect(()=>{
  getMyGames().then((result)=>{
    setData(result.data)
  
  })
},[]) 
return (
    <div style={{backgroundImage:'client\src\images\snes.webp'  }}>
      {data.length&&console.log(data)}
      Hello
      {/* <div><Form /></div> */}
      <div><List /></div>
     
    </div>
  );
}

export default App;
