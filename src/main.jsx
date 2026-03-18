import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import BodyEvent from './BodyEvent.jsx'
import BodyGroup from './BodyGroup.jsx'
import GroupPage from './GroupPage.jsx'
import BodyCalendar from './BodyCalendar.jsx'
import BodyEventSingle from './BodyEventSingle.jsx'
import SharePage from './SharePage.jsx'

const router = createHashRouter([
  {path:"", element:<BodyEvent /> },
  {path:"/calendar", element:<BodyCalendar />},
  {path:"/group", element:<BodyGroup />},
  {path:"/group/:groupid", element:<GroupPage />},
  {path:"/event/:eventid", element:<BodyEventSingle />},
  {path:"/share", element:<SharePage />}
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <div className="site-container">
        <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"></link>
        </div>
        <RouterProvider router={router} />
      </div>
  </StrictMode>,
)
