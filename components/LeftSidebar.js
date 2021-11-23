// import the library
import { library } from '@fortawesome/fontawesome-svg-core';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faChevronRight, faChevronLeft, faCogs, faSignOutAlt, faChartLine, faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import Link from 'next/link'

export default function LeftSidebar({ maxOpened }){
  const[leftMaxOpen, setLeftMaxOpen] = React.useState(false);
  const[dark, setDark] = React.useState(false);
  const[sub, setSub] = React.useState(false);

  const[menus, setMenus] = React.useState([
    {
      id : 1,
      name : 'Home',
      icon : faHome,
      path : '/'
    },{
      id : 2,
      name : 'Component',
      icon : faBoxOpen,
      path : '/page-component'
    },{
      id : 3,
      name : 'Chart',
      icon : faChartLine,
      path : '/page-chart'
    },{
      id : 4,
      name : 'Setting',
      icon : faCogs,
      path : '/page-setting'
    },{
      id : 5,
      name : 'Signout',
      icon : faSignOutAlt,
      path : '/page-signout'
    }
  ])
  
  function setNavigation(){
      setLeftMaxOpen(!leftMaxOpen);
      maxOpened(!leftMaxOpen)
  }

  return (
    <>
    <aside className = {`${!leftMaxOpen ? "translate-x-0" : "-translate-x-full"} flex-grow translate-x-0 transform top-0 left-0 w-16 bg-gray-800 fixed h-full z-30 `}>
      {/* {leftMinOpen && ( */}
        {/* <div onClick= {() => {setLeftMinOpen(false); setLeftMaxOpen(true);}} className={`fixed top-1/3 -right-2 bg-gray-700 w-2 h-24 rounded-r-xl`}/> */}
      {/* )} */}

      {/* logo */}
      <div className =  "relative py-3 px-6 group bg-white rounded-l-3xl">
      <img className = "object-cover object-left h-7" src="https://kerjaholic.com/images/ic_logo.png"/>
          <div className = "bg-white h-6 absolute -bottom-6 right-0 w-6"/>
          <div className = "bg-gray-800 h-6 absolute -bottom-6 right-0 w-6 rounded-tr-full"/>
      </div>

      {/* toolbar */}
      <div onClick= {() => setNavigation()} className = "relative z-20">
        <div className = "absolute right-2 -bottom-10 bg-white shadow-lg w-12 h-8 rounded-r-2xl rounded-bl-3xl text-center">
          <FontAwesomeIcon icon={faChevronRight}/>
        </div>
      </div>
      
      {/* menu bar */}
      <div className = "mt-6 pt-6 hover h-4/5 overflow-y-scroll scrollbar-hide">
        {menus.map((menu) => 
        <Link key={menu.id} href={menu.path}>

          <div className =  "relative text-white py-3 px-6 group hover:bg-white rounded-l-3xl hover:text-gray-700 z-10">
            <FontAwesomeIcon icon={menu.icon}/>
            {/* top shape roundout */}
            <div className = "group-hover:bg-white h-6 absolute -top-6 right-0 w-6"/>
            <div className = "group-hover:bg-gray-800 h-6 absolute -top-6 right-0 w-6 rounded-br-full"/>
            {/* bottom shape roundout */}
            <div className = "group-hover:bg-white h-6 absolute -bottom-6 right-0 w-6"/>
            <div className = "group-hover:bg-gray-800 h-6 absolute -bottom-6 right-0 w-6 rounded-tr-full"/>
          </div>
        </Link>
        )}
        
        
      </div>
    </aside>
    
    <aside className = {`${leftMaxOpen ? "translate-x-0" : "-translate-x-full"} flex-grow translate-x-0 transform top-0 left-0 w-64 bg-gray-800 fixed h-full z-40`}>
      
      {/* {leftMaxOpen && ( */}
         {/* <div onClick= {() => {setLeftMinOpen(true); setLeftMaxOpen(false);}} className={`fixed top-1/3 -right-2 bg-gray-700 w-2 h-24 rounded-r-xl animate-pulse`}/> */}
      {/* )} */}

      {/* logo */}
      <div className =  "relative py-3 px-6 group bg-white rounded-l-3xl">
      <img className = "object-cover object-center h-7" src="https://kerjaholic.com/images/ic_logo.png"/>
          <div className = "bg-white h-6 absolute -bottom-6 right-0 w-6"/>
          <div className = "bg-gray-800 h-6 absolute -bottom-6 right-0 w-6 rounded-tr-full"/>
      </div>
      
      {/* toolbar */}
      <div onClick= {() => setNavigation()} className = "relative z-10">
        <div className = "absolute right-2 -bottom-10 bg-white shadow-lg w-12 h-8 rounded-r-2xl rounded-bl-3xl text-center">
          <FontAwesomeIcon icon={faChevronLeft}/>
        </div>
      </div>

      {/* menu bar */}
      <div className = "mt-6 pt-6 hover h-4/5 overflow-y-scroll scrollbar-hide">
      {menus.map((menu) => 
      <Link key={menu.id} href={menu.path}>
        <div className =  "relative text-white py-3 px-6 group hover:bg-white rounded-l-3xl hover:text-gray-700">
          <div className = "flex">
            <div className= "mr-3">
              <FontAwesomeIcon icon={menu.icon}/>
            </div>
            <div>
              {menu.name}
            </div>
          </div>
          {/* top shape roundout */}
          <div className = "group-hover:bg-white h-6 absolute -top-6 right-0 w-6"/>
          <div className = "group-hover:bg-gray-800 h-6 absolute -top-6 right-0 w-6 rounded-br-full"/>
          {/* bottom shape roundout */}
          <div className = "group-hover:bg-white h-6 absolute -bottom-6 right-0 w-6"/>
          <div className = "group-hover:bg-gray-800 h-6 absolute -bottom-6 right-0 w-6 rounded-tr-full"/>
        </div>
      </Link>
      )}
      </div>
      
    </aside>
    </>
    );
}