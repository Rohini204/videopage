import React from 'react'
import "./sidefit.css"
export const Sidefit = () => {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT US</span><br></br>
        <div className="sideimg1"><img src="https://images.pexels.com/photos/6443482/pexels-photo-6443482.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" /></div>
        <div className="sidepara"><center>Here, wellness is for all. Whether you are working toward a specific fitness goal or just hope to feel better and have more energy, our team of writers, editors, personal trainers, and wellness enthusiasts aims to provide wellness challenge with confidence and enthusiasm.</center></div>
    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Beauty</li>
            <li className="sidebarListItem">Food</li>
            <li className="sidebarListItem">Fitness</li>
            <li className="sidebarListItem">Wellness</li>
            <li className="sidebarListItem">Health</li>
            <li className="sidebarListItem">Nutrition</li>
        </ul>
    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        
        <i className="icon fa-brands fa-square-facebook"></i>
        <i className="icon fa-brands fa-square-instagram"></i>
        <i className="icon fa-brands fa-linkedin-in"></i>
        <i className="icon fa-brands fa-pinterest"></i>
        </div>
    </div>
    </div>
  )
}

export default Sidefit
