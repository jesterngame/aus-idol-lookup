import Body from './Body.jsx'

import React, {useState, createContext} from 'react';

import { Route, NavLink, createBrowserRouter, createRoutesFromElements, RouterContextProvider, RouterProvider, Link } from 'react-router-dom';
import BodyEvent from './BodyEvent.jsx'
import BodyGroup from './BodyGroup.jsx'
import RootLayout from './RootLayout.jsx'
export const PageContext = createContext();

// const router = createBrowserRouter([
//   // createRoutesFromElements(
//   //   <Route path="aus-idol-lookup" element={RootLayout}>
//   //     <Route path="" element={<BodyEvent />} />
//   //     <Route path="aus-idol-lookup/groups" element={<BodyGroup />} />
//   //   </Route>
//   // )
//   {path:"aus-idol-lookup", element:<BodyEvent /> }
// ]);

function App() {

    const [page, SetPage] = useState("Events");
    const [currentGroup, SetGroup] = useState();
    const [currentEvent, SetEvent] = useState();

    const resetScroll = () => {
      window.scrollTo(0, 0);
    };

    const updatePageGroup = () => {
      SetPage("Group");
      SetGroup(0);
      SetEvent(0);
      resetScroll();
    }
    const updatePageIdol = () => {
      SetPage("Idol");
      SetGroup(0);
      SetEvent(0);
      resetScroll();
    }
    const updatePageGroupSolo = (id) => {
      SetPage("GroupSolo");
      SetGroup(id);
      SetEvent(0);
      resetScroll();
    }
    const updatePageEvents = () => {
      SetPage("Events");
      SetGroup(0);
      SetEvent(0);
      resetScroll();
    }

    const updatePageEventSingle = (id) => {
      SetPage("Event");
      SetGroup(0);
      SetEvent(id);
      resetScroll();
    }

    const updatePageCalendar = () => {
      SetPage("Calendar");
      SetGroup(0);
      SetEvent(0);
      resetScroll();
    }

    const updatePageShare = () => {
      SetPage("Share");
      SetGroup(0);
      SetEvent(0);
      resetScroll();
    }



    return(
      <div className="site-container">
        <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"></link>
        </div>
        <div className="nav-bar">
            <NavLink to="/">
              <div className="nav-button" onClick={updatePageEvents}>
                <i className="fa-solid fa-ticket"></i>
                <label>Events</label>
              </div>
            </NavLink>
            
            <NavLink to="/aus-idol-lookup">
              <div className="nav-button" onClick={updatePageCalendar}>
                <i className="fa-solid fa-calendar"></i>
                <label>Calendar</label>
              </div>
            </NavLink>
            <div className="nav-button" onClick={updatePageGroup}>
              <i className="fa-solid fa-music"></i>
              <label>Groups</label>
            </div>
            <div className="nav-button" onClick={updatePageShare}>
              <i className="fa-solid fa-share"></i>
              <label>Share</label>
            </div>
        </div>
        <div className="main-body">
          {/* <PageContext.Provider value={{page, updatePageGroupSolo, updatePageEventSingle}}>
            <Body page={page} groupid={currentGroup} eventid={currentEvent} />
          </PageContext.Provider> */}
        </div>
      </div>
    );
}

export default App
