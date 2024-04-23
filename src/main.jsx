// Importações do React
import React from 'react'
import ReactDOM from 'react-dom/client'

//components
import App from './App.jsx';
import Home from './pages/Home';
import SingleMovie from './pages/SingleMovie';
import Search from './pages/Search';


//CSS global
import './index.css'

//Importação do Router
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement: <ErrorPage />,
    children:[
      { 
        path:"/",
        element: <Home />
      },
     { 
      path:"/movie/:id",
      element: <SingleMovie />
    },
    { 
      path:"/search",
      element: <Search />
    }

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
