import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home';          
import Cart from '../pages/Cart';
import Search from '../pages/Search';       
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import SignUp from '../pages/SignUp'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div style={{padding: '5rem', textAlign: 'center'}}>404 - Page Not Found</div>,
    children: [
      { index: true, element: <Home /> },
      { path: "cart", element: <Cart /> },
      { path: "search", element: <Search /> },     
      { path: "login", element: <Login /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "signup", element: <SignUp /> },    
    ],
  },
], {
  future: {
    v7_startTransition: true,
    v7_fetcherPersist: true
  }
});

export default router;
