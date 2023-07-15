import React from "react";
import ReactDOM from "react-dom/client";

//React Element : JS object => HTML Element (using render)
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);

//JSX => React.createElement(using Babel) => React Element : JS object => HTML Element (using render)
const subHeading = <h1>Hellow WOrld</h1>; //this is how we can create react element using jsx

const Title = () => {
  <h1>Hi how are you</h1>;
};

//React Functional Components
const Header = () => (
  <>
  <div className="container">
    {100 + 200}
    <h1>Hi Namaste React</h1>
    {/* these below three are the way through which we can do component composition */}
    <Title />
    {Title()}
    <Title></Title>
  </div>
  <>
  </>
  </>
);

// //Component composition
// const Header = () => (
//   <div className="container">
//     <h1>Hi Namaste React</h1>
//     <SubHeading/>
//   </div>
// );

// //now we need to inject this h1 tag inside the DOM, so for that we will use ReactDOM library's createRoot method

// const parent = React.createElement("div", { id: "parent" },
//     React.createElement("div", { id: "child" },
//         [React.createElement("h1", { id: "heading" }, "hello from Heading1"),
//         React.createElement("h1", { id: "heading" }, "hello from Heading2")]
//     )
// )

// console.log(heading) //Heading is a react element. React Elements are nothing but objects.
const root = ReactDOM.createRoot(document.getElementById("root")); // creates root for React

// this render function here takes react element
// converts it into HTML tag and inject that tag inside the root(<div id="root"></div>)
// root.render(parent)
// root.render(heading)
root.render(<Header />);
