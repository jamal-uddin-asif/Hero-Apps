import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import ErrorPage from "../Pages/ErrorPage";
import LoadingPage from "../Pages/LoadingPage";
import AppNotFound from "../Pages/AppNotFound";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,

    children: [
      {
        index: true,
        Component: Home,
    
      },
      {
        path: "apps",
        Component: Apps,
      },
      {
        path: "installation",
        Component: Installation,
      },
      {
        path: "appDetails/:appId",
        Component: AppDetails,
      },
      {
        path: '/appNotFound',
        Component: AppNotFound
      },
      {
        path: '*',
        Component: ErrorPage
      }
   
    ],
  },
]);

export default router;
