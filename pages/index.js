import { useState } from 'react';

export {useState} from 'react';

function home (){
    return (<div>
        <h1>Home</h1>
        <Contador />
        </div>
    )
    
}
function Contador (){

    const [contador , setContador] = useState(1);

     function addContador(){
  setContador(contador+1);
     }

     return (
     <div>
        <div>{contador}</div>
     <button onClick={addContador}>adicionar</button>
     </div>
     )
}

export default home;