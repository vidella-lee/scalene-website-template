/* eslint-disable jsx-a11y/anchor-is-valid */
export default function BlogNavbar({ textColor }) {
  return (
    <nav className={`nav d-flex flex-row`}>
      <a
        className={`nav-link ${textColor ? textColor : ""} text-white active `}
        aria-current="page"
        href="#"
      >
        Blog Topic 1
      </a>
      <a className={`nav-link ${textColor ? textColor : ""} `} href="#">
        Blog Topic 2
      </a>
      <a className={`nav-link ${textColor ? textColor : ""} `} href="#">
        Blog Topic 3
      </a>
      <a className={`nav-link ${textColor ? textColor : ""} `} href="#">
        Blog Topic 4
      </a>
    </nav>
  );
}


// export default function Navbar({ textColor }) {

//   return (
//     <nav class="navbar navbar-expand-lg navbar-dark p-5 bg-dark">
//       <div class="container-fluid">

//         <button class="" type="button" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <i class="bi bi-search"></i>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul class="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
//             <li class="nav-item">
//               <Link class="nav-link" to="/about-us">About Us</Link>
//             </li>
//             <li class="nav-item">
//               <Link class="nav-link" to="/pricing">Pricing</Link>
//             </li>
//             <li class="nav-item dropdown">
//               <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                 Pages
//               </Link>
//               <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
//                 <li><Link class="dropdown-item" to="#">Action</Link></li>
//                 <li><Link class="dropdown-item" to="#">Another action</Link></li>
//                 <li><hr class="dropdown-divider" /></li>
//                 <li><Link class="dropdown-item" to="#">Something else here</Link></li>
//               </ul>
//             </li>
//             <li class="nav-item">
//               <Link class="nav-link" to="/blog" tabindex="-1">Blog</Link>
//             </li>
//           </ul>

//           <ul class="navbar-nav ms-5">
//             <li class="nav-item ">
//               <Link class="nav-link" to="login" tabindex="-1"><b>Login</b></Link>
//             </li>
//           </ul>
//         </div>

//       </div>
//     </nav>
//   )


// }
