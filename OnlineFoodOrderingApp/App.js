
import React from "react";
import ReactDOM from "react-dom/client";


//React Element

const heading=React.createElement("h1",{id:"heading"},"Hello World! Santhosh");

// when we render this to DOM it becomes HTML element 


//JSX - is not Html of jS , its jSX
const jsxHeading=(<h1 id="Heading">
    Hello World from JSX</h1>
);


const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading);

// so we don't need react.createElement as we use JSX

//React Component
// - Class Based components - OLD way of creation
// - functional components - New way of creation

const thala=7;
const Title=()=>(<h1 className="Title" id='heading'>Hello From Santhosh {thala}</h1>);
//functional componnent
const HeadingComponent=()=>{
    return (<div id='container'>
        <Title/>
 <h1>React functional components</h1>
</div>);
}

// Cmponent Composition : having component inside component is component composition here we have title iside headingComponent
root.render(<HeadingComponent/>);


