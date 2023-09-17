import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import UseStates from "./Components/UseState";
import UseRefeg from './Components/UseRefeg';
import UseReducereg from './Components/UseReducereg';
import { Appcontext } from './Components/Context';
import Parent from './Components/Parent';
import Child from './Components/Child';
import Users from './Components/Users';
import Contextvaluedisplay from './Components/Contextvaluedisplay';
import Demo from './Redux/Demo';
import First from './Components/First';
import Eguselayouteffect from './Components/Eguselayouteffect';
import Eguseeffect from './Components/Eguseeffect';
import ReactOne from './Components/ReactOne';
import Amegbatch from './Components/Amegbatch';
import Taskref from './Task/Taskref';
import Reactbootstrap from './Task/Reactbootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Refeg1 from './Components/Refeg1';
import Hey from './Components/Hey';

function App() {

  const router=createBrowserRouter([
    {
      path:'/',
      element:<UseStates/>
    },
    {
      path:'ref',
      element:<UseRefeg/>
    },
    {
      path:'reducer',
      element:<UseReducereg/> 
    },
    {
      path:'parent',
      element:<Parent/>
    },
    {
      path:'child',
      element:<Child/>
    },
    {
      path:'users',
      element:<Users/>
    },
    {
      path:'contextvalue',
      element:<Contextvaluedisplay/>
    },
    {
      path:'demo',
      element:<Demo/>
    },
    {
      path:'first',
      element:<First/>
    } ,
    {
      path:'layout',
      element:<Eguselayouteffect/>
    } ,
    {
      path:'useeffect',
      element:<Eguseeffect/>
    } ,
    {
      path:'reactmemo',
      element:<ReactOne/>
    } ,
    {
      path:'reactmemo',
      element:<ReactOne/>
    } ,
    {
      path:'api',
      element:<Amegbatch/>
    } ,
    {
      path:'reftask',
      element:<Taskref/>
    } ,
    {
      path:'bootstrap',
      element:<Reactbootstrap/>
    } ,
    {
      path:'refeg',
      element:<Refeg1/>
    } ,
    {
      path:'hey',
      element:<Hey/>
    } ,
  ])


  return (
    <Appcontext.Provider  value={'Sreerag'} >
    <RouterProvider router={router}></RouterProvider>
    </Appcontext.Provider>
  );
}

export default App;
