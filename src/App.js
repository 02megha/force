import React ,{useState} from "react";
import './App.css';


const ArrayComponent = () => {
  const [toggle , settoggle] = useState (true);

const [ fruits ,setfruits] =useState (["orange", "lichi", "pear", "plum" ,"banana"])
 const handleUpdateFruits = () => {
  if (toggle) setfruits ([ "pear", "orange", "lichi" , "plum" , "papaya"]);
   else setfruits (["mango" , "guava" , "grapes" , "berry", "kiwi"]);
settoggle(!toggle);
 };

 const handleEmptyFruits =()=>{
setfruits ([]);
 }

 const handleAddFruits =() =>{
let oldFruits = [...fruits];
oldFruits.push("mango");
oldFruits.push("kiwi");
setfruits(oldFruits);

 }
   const handleRemoveFruits =() => {
    
     
    let oldFruits = [...fruits];
    oldFruits.pop(["plum"]);
    oldFruits.pop(["banana"]);
    setfruits(oldFruits);
   

   }

 return (
  <>
<p>The fruits list</p>
<ul>

  <li> {fruits[0]}</li>
  <li>{fruits[1]}</li>
  <li>{fruits[2]}</li>
  <li>{fruits[3]}</li>
  <li>{fruits[4]}</li>
  <li>{fruits[5]}</li>
  <li>{fruits[6]}</li>

</ul>

<button onClick ={() =>handleUpdateFruits() }type ="button">
UPDATE fruits 
</button>
<button onClick = {() =>handleEmptyFruits()} type ="button">
  EMPTY fruits
</button>
 <button onClick ={() => handleAddFruits()} type ="button">
  ADD fruits
 </button>
 <button onClick ={() => handleRemoveFruits()} type= "button">  
 REMOVE fruits</button>
  </>
 );
};

export default ArrayComponent;
