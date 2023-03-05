import React from 'react'
import filter from "../asserts/icons/filter.svg"
import search from "../asserts/icons/search.svg"
import liked from "../asserts/icons/liked.svg"
import notication from "../asserts/icons/notification.svg"
import settings from "../asserts/icons/setting.svg"
import img from "../asserts/icons/img.svg"
import "../style.css/nav.scss"
const Nav = () => {
    return (
        <>
        <nav>
            <div className="container">

                <div className="nav-left">

                    <h1>MORENT</h1>
                    <div className="inpt-c">
                        <img src={search} alt="logo" />
                        <input type="text" placeholder='Search something here ' />
                        <img src={filter} alt="logo" />
                    </div>
                </div>
                <div className="nav-right">
                    <span><img src={liked} alt="logo" /></span>
                    <span><img src={notication} alt="logo" /></span>
                    <span><img src={settings} alt="logo" /></span>
                    <span><img src={img} alt="img" /></span>
                </div>
            </div>
        </nav>
       
       </>
    )
}

export default Nav





// import React from 'react'
// import search from "../asserts/icons/search.svg"
// import filter from "../asserts/icons/filter.svg"
// import "../style.css/index.css"


// export default function Header() {
//   return (
//     <nav>
//         <div className='container'>
//           <div className='nav-left'>
//             <h1>MORENT</h1>
//             <div className='input-c'>
//              <img src={search} alt="logo" />
//               <input id="search" placeholder='Search something here' type="text" />
//              <img src={filter} alt="logo" />
             
//             </div>
//           </div>
//           <div className='nav-right'></div>
//         </div>
//     </nav>
    
   
//   )
// }
