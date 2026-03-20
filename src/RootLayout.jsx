import { NavLink, Outlet } from "react-router-dom";
import idolicon from './assets/mic-icon-square.svg';

// const MyIcon = ({ color = "#00eaff", size = 28 }) => (
//   <svg
//     viewBox="0 0 291.9447 291.9447"
//     width={size}
//     height={size}
//     style={{ color }}
//   >
//     <g transform="translate(1051.2818,410.54726)">
      
//       <path
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="7.9375"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="m -903.64283,-325.44596 c -30.65905,45.31705 -55.33676,68.37075 -79.81482,91.10029 -6.09394,6.88572 -14.02834,11.38967 -18.24655,20.70281 0.9592,13.13956 21.47095,30.64598 32.37008,30.70331 5.98937,-1.74441 12.0377,-9.26851 17.80793,-15.61482 30.21969,-27.24235 49.54542,-56.91633 92.68036,-82.48902"
//       />

//       <path
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="7.9375"
//         strokeLinecap="round"
//         d="m -903.4937,-325.74562 c 0,0 23.57143,11.78572 44.53759,43.79323"
//       />

//       <path
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="7.9375"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="m -851.61941,-148.84935 c 2.03879,-21.37471 8.318,-40.66478 -6.36232,-55.35675 -14.6884,-14.70006 -33.99462,-7.93363 -48.92645,6.51911 l -48.33581,50.44118 c -14.92354,14.44512 -36.21442,23.73817 -50.91591,9.06711 -14.6711,-14.70148 -10.2906,-28.62357 4.1546,-43.54711 l 0.1661,-0.16672 11.93043,-12.10588"
//       />

//       <path
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="7.9375"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="m -886.57318,-381.88916 c 35.27147,22.87256 58.29747,51.11829 81.4021,79.32947 l -13.22043,12.19328 c -23.91399,-28.27506 -45.35946,-54.82653 -78.78219,-77.69202 z"
//       />

//       <path
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="7.9375"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         d="m -903.18952,-324.35044 c -0.96307,-4.02466 -1.2976,-7.43587 -1.2976,-11.75569 0,-11.30369 3.49201,-21.7918 9.45611,-30.44437 m 12.5321,-12.90082 c 8.8883,-6.51549 19.85484,-10.36303 31.72,-10.36303 29.66224,0 53.70823,24.04599 53.70823,53.70822 0,11.60386 -3.6799,22.3482 -9.9364,31.12972 m -12.86976,12.80339 c -8.73924,6.15841 -19.39828,9.77514 -30.90207,9.77514 -3.1617,0 -6.25957,-0.27319 -9.27134,-0.79728"
//       />

//       <rect
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="7.94005"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         width="18.666056"
//         height="30.255739"
//         x="-864.02356"
//         y="368.62289"
//         ry="9.3495378"
//         transform="matrix(0.75655263,0.65393281,-0.68065015,0.73260861,0,0)"
//       />

//     </g>
//   </svg>
// );

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
            <NavLink to="/glossary" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="nav-button" >
                {/* <i className="fa-solid fa-music"></i> */}
                <i className="fa-regular fa-circle-question"></i>
                <label>Glossary</label>
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