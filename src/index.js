import React from 'react';
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import {ThemeProvider} from './Context'
import Home from './pages/Home';
import Projects from './pages/Projects';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[
      {path: "/",
      element: <Home></Home>
      },
      {path: "/projects",
      element: <Projects></Projects>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
     <ThemeProvider>
    <RouterProvider router={router} />
   </ThemeProvider>
  </React.StrictMode>
);
// ReactDOM.render(
//   <ThemeProvider>
   
//   </ThemeProvider>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
