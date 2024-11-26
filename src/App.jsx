import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SiteLayout from './Layout/SiteLayout';
import Main from './Pages/Home/Home';

const routes = createBrowserRouter([

    {path: '/' , element: <SiteLayout /> , children: [

        {path: '/' , element: <Main />},
        {path: '/Affilite' , element: <Main />},
        {path: '/Pricing' , element: <Main />},
        {path: '/Communities' , element: <Main />},

    ]},

]);

export default function App() {

    return <React.Fragment>

        <RouterProvider router={routes} />

    </React.Fragment>

}
