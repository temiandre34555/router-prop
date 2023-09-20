import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../page/home/home";
import Contacts from "../page/contacts/contacts";
import Settings from "../page/settings/settings";
import ErrorPage from "../page/error-page";
import Count from "../page/count/count";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {index:true, element:<Home/>},
            {path: "/contacts", element: <Contacts />},
             {path: "/settings", element:<Settings/>},
             {path: "/Count", element:<Count/>},
             
             
        ],        
      },
      ]);