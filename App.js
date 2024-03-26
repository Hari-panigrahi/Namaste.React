import React from "react";
import ReactDOM from "react-dom/client";


// {/* <div id="parent">
//     <div id="child">
//         <h1> I'm a h1 tag!</h1>
//         <h2>I'm a h2 tag!</h2>
//     </div>
// </div>


// ReactElement(Object) => HTML(Browser Understands) */}

// const parent = react.createElement(
//     "div",
//     {id:"parent"},
//     react.createElement(
//         "div",
//         {id:"child"},[
//         react.createElement("h1",{},"I'm a h1 tag!"),
//         react.createElement("h2",{},"I'm a h2 tag!"),
//     ]
//     )
// );


console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);