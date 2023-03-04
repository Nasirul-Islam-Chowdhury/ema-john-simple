import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './App.css';
import About from './Components/about/About';
import Inventory from './Components/inventory/Inventory';
import Main from './Components/Layout/Main';
import Order from './Components/order/Order';
import Shop from './Components/Shop/Shop';
import Login from './Components/login/Login';
import Signup from './Components/signup/Signup';
import { ProductsAndCartLoader } from './loaders/ProductsAndCartLoader';
import Shipping from './Components/Shipping/Shipping';
import PrivateRoutes from './routes/PrivateRoutes';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[ 
        {
          path: '/',
          loader: ()=>{
            return fetch(`products.json`)
          },
          element: <Shop></Shop>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/order',
          loader:()=> ProductsAndCartLoader() ,
          element: <Order></Order>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/login',
          element: <Login></Login>
        },   {
          path: '/signup',
          element: <Signup></Signup>
        },
        {
          path: '/shipping',
          element: <PrivateRoutes><Shipping></Shipping></PrivateRoutes>
        }
      ]
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
