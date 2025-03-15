import React from "react";
import ReactDOM from "react-dom/client";

//React Elements

const heading = React.createElement("h1",{id:"heading1",class:"heading1"},"Namaste React");
console.log(heading);
const jsxHeading=<h1 id="heading" class="heading">Hello this is Arundhati💕</h1>
console.log(jsxHeading);
const root = ReactDOM.createRoot(document.getElementById("root"));

//React functional component
const Title = ()=> (
        <h1>
            Namaste React
        </h1>
);
const spanElement = <span>React span element</span>
const NewComponent = ()=>{
    <div>
        <h1>
            This is Arundhati💕
        </h1>
    </div>
}
const HeadingComponent = ()=>(
    <div>
       <h1> {100+400}</h1>
        {/* {title} */}
        <Title /> 
        <h1>Namaste React functional component</h1>
    </div>
);

const title = (
    <h1>
        {spanElement}
        <HeadingComponent />
        React Element
    </h1>
)


const HeadingComponent1 = ()=><h1>This is React functional component</h1>;


root.render(title);