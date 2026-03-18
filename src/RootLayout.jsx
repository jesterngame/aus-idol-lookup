import { NavLink, Outlet } from "react-router-dom";


function RootLayout(){
    return <div className="nav-bar">
            <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="nav-button">
                <i className="fa-solid fa-ticket"></i>
                <label>Events</label>
                </div>
            </NavLink>
            <NavLink to="/calendar" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="nav-button" >
                <i className="fa-solid fa-calendar"></i>
                <label>Calendar</label>
                </div>
            </NavLink>
            <NavLink to="/group" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="nav-button" >
                <i className="fa-solid fa-music"></i>
                <label>Groups</label>
            </div>
            </NavLink>
            <NavLink to="/share" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="nav-button">
                <i className="fa-solid fa-share"></i>
                <label>Share</label>
            </div>
            </NavLink>
        </div>
}

export default RootLayout;