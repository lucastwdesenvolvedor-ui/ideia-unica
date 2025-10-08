import { useState } from "react";

function home (){
    return(<div><h1>Home</h1>
    <Numero /></div>
    )

    function Numero (){
 const[contador , setContador] = useState(1);
 function contar (){
    setContador(contador+1)
 }
       return(
        <div>
        <div>
            {contador}
        </div>
        <button onClick ={contar}>adicionar</button>
        </div>
     )
   }

}
export default home;