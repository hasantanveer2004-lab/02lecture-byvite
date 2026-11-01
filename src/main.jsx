import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MyApp from './App.jsx'

// function App(){
//   return(
//     <div>
//       {/* <MyApp /> */}
//       <h1>Custom App</h1>
//     </div>
//   )
// } 
// 1st element
// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com/',
//         target: '_blank'
//     },
//     children : 'click me to visit google'
//   }

// 2nd element
// const anotherElement = (
//   <a href="https://www.google.com" target="_blank">visit google</a>
// )

// create another variable for evaluation expression
// jab hamara sara tree ban jata ha ous ka baad variables inject houtay ha
const anotherUser = "  muhammad"

// 3rd element
  const reactElement = React.createElement (
  'a',
  {href : 'https://google.com', target : '_blank'},
  'click me for google',
  // inject variable and evaluated expression
  anotherUser

)

createRoot(document.getElementById('root')).render(
  
  
  //  1st RactElement
  
  // 2nd anotherElement

  // 3rd 
  reactElement
  // <App />

  
)