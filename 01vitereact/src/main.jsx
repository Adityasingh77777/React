import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return (
        <div>
            <h1>
                Custom App!
            </h1>
        </div>
    )
}

// const reactElement ={
//     type:'a',// different tags in the html
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'Click me to visit google'
// }

// now we are going to make reactElement 
// according to react not for custom

const anotherUser= "chai aur code" 

const reactElement=React.createElement(
    'a',
    {href:'https://google.com',target:'_blank'},
    'click me to visit google',
   anotherUser
)

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

ReactDOM.createRoot(document.getElementById('root')).
render(
    // <MyApp /> 
     //anotherElement  
    reactElement

    // <App/>
)


// reactElement ka syntax sahi nahi h kyuki iske liye humlog ne custom render 
// banae the