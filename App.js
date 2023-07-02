const heading = React.createElement("h1", { id: "heading" }, "Hello World from React")
//now we need to inject this h1 tag inside the DOM, so for that we will use ReactDOM library's createRoot method

const parent = React.createElement("div", { id: "parent" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", { id: "heading" }, "hello from Heading1"),
        React.createElement("h1", { id: "heading" }, "hello from Heading2")]
    )
)

console.log(heading) //Heading is a react element. React Elements are nothing but objects.
const root = ReactDOM.createRoot(document.getElementById("root")) // creates root for React 

// this render function here takes react element 
// converts it into HTML tag and inject that tag inside the root(<div id="root"></div>)
root.render(parent)

// root.render(heading)


