import { NavLink, Outlet } from "react-router-dom";

function RootBack(){
    return <div className="nav-bar-back">
            <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="nav-button">
                    <i className="fa-solid fa-angle-left"></i>
                </div>
            </NavLink>
        </div>
}

export default RootBack;