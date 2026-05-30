import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Root from './pages/Root'
import Admission from './pages/Admission'
import StudentLife from './pages/StudentLife'
import Contact from './pages/Contact'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "academics",
          element: <Academics />,
        },
        {
          path: "admission",
          element: <Admission />,
        },
        {
          path: "student-life",
          element: <StudentLife />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
      ],
    },
  ],
  {
    basename: "/task-3",
  }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
