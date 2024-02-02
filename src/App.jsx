import React from "react";
import './index.css'
import Card from "./Card";
import Sdata from "./Sdata";

const App=()=>{
    return(<>
        <h1 className="heading">Top 3 Netflix Series</h1>
     
        <div>
            {Sdata.map((val)=> {
            return(
            <Card  key={val.id} imgsrc={val.imgSrc} title={val.title} link={val.link} category={val.category}
            />
            );
            })}
         </div>
         </>);
} 

export default App;