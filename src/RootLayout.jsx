import { NavLink, Outlet } from "react-router-dom";

const MicIcon = ({ color = "#00eaff", size = 27.2 }) => (
  <svg
    viewBox="0 0 332.63641 332.63647"
    width={size}
    height={size}
    style={{ color }}
  >
    <g transform="translate(1777.778,153.49462)">

      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="13.2292"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m -1618.8664,-45.191295 c -45.9749,67.940488 -82.9804,102.503191 -119.6867,136.579899 -9.1381,10.323246 -21.0361,17.075686 -27.3616,31.038186 1.4384,19.69917 32.1968,45.94524 48.5408,46.03119 8.9812,-2.61526 18.0511,-13.89559 26.7039,-23.41014 45.3161,-40.84243 74.296,-85.330426 138.9791,-123.669659"
      />

      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="13.2292"
        strokeLinecap="round"
        strokeLinejoin="miter"
        d="m -1618.6427,-45.640553 c 0,0 35.3466,17.669455 66.7866,65.655938"
      />

      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="13.2292"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m -1593.2695,-129.8124 c 52.8916,34.291137 87.4203,76.637863 122.0669,118.93279 l -19.8247,18.2804794 c -35.8603,-42.3906974 -68.019,-82.1973454 -118.1382,-116.4778794 z"
      />

      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="13.2292"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m -1618.1865,-43.548863 c -1.4443,-6.033874 -1.9458,-11.148048 -1.9458,-17.624433 0,-16.946783 5.2364,-32.670827 14.1799,-45.642984 m 18.7925,-19.34124 c 13.3286,-9.76819 29.7734,-15.53652 47.5659,-15.53652 44.4801,0 80.5384,36.05036 80.5384,80.520744 0,17.396805 -5.5182,33.504996 -14.9002,46.670477 m -19.2989,19.1951717 c -13.1049,9.2328473 -29.0887,14.6551423 -46.3393,14.6551423 -4.7411,0 -9.3866,-0.409574 -13.9029,-1.195303"
      />

      <rect
        fill="none"
        stroke="currentColor"
        strokeWidth="13.2335"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="27.988144"
        height="45.364788"
        x="-1187.3276"
        y="1060.5015"
        ry="14.018491"
        transform="matrix(0.75662354,0.65385076,-0.68073022,0.73253421,0,0)"
      />

    </g>
  </svg>
);

function RootLayout(){
    return <div className="nav-bar">
            <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="nav-button">
                <i className="fa-solid fa-house"></i>
                <label>Home</label>
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
                {/* <i className="fa-solid fa-music"></i> */}
                <MicIcon />
                <label>Idols</label>
            </div>
            </NavLink>
            {/* <NavLink to="/glossary" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="nav-button" >
                <i className="fa-regular fa-circle-question"></i>
                <label>Glossary</label>
            </div>
            </NavLink> */}
            <NavLink to="/about" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="nav-button" >
                <i className="fa-solid fa-circle-info"></i>
                <label>About</label>
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