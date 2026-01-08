import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/home';
import Login from '../pages/Login';
import Cart from '../pages/Cart';
import SearchProduct from '../pages/SearchProduct';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "cart", element: <Cart /> },
      { path: "search", element: <SearchProduct /> }
    ]
  }
]);

export default router;
