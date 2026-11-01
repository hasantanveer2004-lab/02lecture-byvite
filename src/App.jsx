import Chai from "./chai"
 
function MyApp(){

  // {} agar koi variable curly bracket may lekhay tou wo string may add hou jata ha
  // is ko "evaluated expression" boltay ha or expression b i.e., {username}
  // or ya final outcome hou ga
  
  const username = "chai or code"

return (
  <div>
    <Chai/>
    
    <h2>we rap three or more elements in 1 element like a single div </h2>

    <p>According to jsx rule {username}</p>

    /* <></> is tarha ka Element may b rap kar saktay ha
     1 say zayada elements ko like div or is ko fragment kahtay ha */
     
  </div>
 

)}
export default MyApp
