import Sobre from './componentes/Sobre/sobre';
import Main from './componentes/Main/main';
import Projeto from './componentes/Projeto/projeto.js';
import Cs from './componentes/Cs/cs';
import Habilidades from './componentes/Habilidades/habilidades';
import Jav from './componentes/jav/jav';
import { createBrowserRouter,RouterProvider} from 'react-router-dom';
import React from './componentes/reactjs/react';
import './App.css';
import Nodejs from './componentes/Nodejs/Nodejs';

const router=createBrowserRouter([
  {
    path:"/",
    element:<Main/>
  },
  {
    path:"sobremim",
    element:<Sobre/>
  },
  {
    path:"meuprojeto",
    element:<Projeto/>
  },
  {
    path:"habilidades",
    element:<Habilidades/>
  },
  {
    path:"cs",
    element:<Cs/>
  },
  {
    path:"jav",
    element:<Jav/>
  },
  {
    path:"react",
    element:<React/>
  },
 {
  path:"node",
    element:<Nodejs/>
 }
  

]) 
 
function App() {
  return (
   <>
   <RouterProvider router={router}/>
   </>
  
  );
}

export default App;
