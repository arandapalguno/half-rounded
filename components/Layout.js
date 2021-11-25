import LeftSidebar from "./LeftSidebar";
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCogs, faPowerOff, faSun, faMoon, faTimes } from '@fortawesome/free-solid-svg-icons';


export default function Layout({children}) {
    const [leftMaxOpen, setLeftMaxOpen] = React.useState(false)
    const [dark, setDark] = React.useState(false);
    const [openToolbar, setOpenToolbar] = React.useState(false)
    const [openNotif, setOpenNotif] = React.useState(true)
    
    return (
        <main className = 'flex'>
            {/* notification list bar */}
            <div className={`absolute h-3/4 overflow-y-scroll scrollbar-hide  px-8 w-full shadow-xl md:w-3/5 md:right-44 lg:right-20 lg:w-2/4 pt-5 bg-gray-700 bg-opacity-80 lg:mx-24 rounded-b-3xl z-50 transition transform ease-out duration-300 translate-y-0 ${!openNotif && "-translate-y-full" }`}>
                <div className = "flex w-full p-3 shadow-lg rounded-xl bg-white mb-3">
                    <div className = "rounded-full h-10 w-10 bg-red-200 px-3 pt-2 shadow-xl">
                    <FontAwesomeIcon icon={faBell}/>
                    </div>
                    <div className = " ml-10">
                    New Income
                    <div className = "text-sm text-gray-500">You got $10.000 from Ariana Grande</div>
                    </div>
                </div>
                <div className = "flex w-full p-3 shadow-lg rounded-xl bg-red-100 mb-3">
                    <div className = "rounded-full h-10 w-10 bg-red-200 px-3 pt-2 shadow-xl">
                    <FontAwesomeIcon icon={faBell}/>
                    </div>
                    <div className = " ml-10">
                    New Product Added
                    <div className = "text-sm text-gray-500">Aranda add new product recently. Check it out</div>
                    </div>
                </div>
                <div className = "flex w-full p-3 shadow-lg rounded-xl bg-red-100 mb-3">
                    <div className = "rounded-full h-10 w-10 bg-red-200 px-3 pt-2 shadow-xl">
                    <FontAwesomeIcon icon={faBell}/>
                    </div>
                    <div className = " ml-10">
                    New Product Added
                    <div className = "text-sm text-gray-500">Josh add new product recently. Check it out</div>
                    </div>
                </div>
                <div className = "flex w-full p-3 shadow-lg rounded-xl bg-red-100 mb-3">
                    <div className = "rounded-full h-10 w-10 bg-red-200 px-3 pt-2 shadow-xl">
                    <FontAwesomeIcon icon={faBell}/>
                    </div>
                    <div className = " ml-10">
                    New Product Added
                    <div className = "text-sm text-gray-500">Josh add new product recently. Check it out</div>
                    </div>
                </div>
                <div className = "flex w-full p-3 shadow-lg rounded-xl bg-red-100 mb-3">
                    <div className = "rounded-full h-10 w-10 bg-red-200 px-3 pt-2 shadow-xl">
                    <FontAwesomeIcon icon={faBell}/>
                    </div>
                    <div className = " ml-10">
                    New Product Added
                    <div className = "text-sm text-gray-500">Josh add new product recently. Check it out</div>
                    </div>
                </div>
                <div className = "flex w-full p-3 shadow-lg rounded-xl bg-red-100 mb-3">
                    <div className = "rounded-full h-10 w-10 bg-red-200 px-3 pt-2 shadow-xl">
                    <FontAwesomeIcon icon={faBell}/>
                    </div>
                    <div className = " ml-10">
                    New Product Added
                    <div className = "text-sm text-gray-500">Josh add new product recently. Check it out</div>
                    </div>
                </div>
                <div className = "flex w-full p-3 shadow-lg rounded-xl bg-red-100 mb-3">
                    <div className = "rounded-full h-10 w-10 bg-red-200 px-3 pt-2 shadow-xl">
                    <FontAwesomeIcon icon={faBell}/>
                    </div>
                    <div className = " ml-10">
                    New Product Added
                    <div className = "text-sm text-gray-500">Josh add new product recently. Check it out</div>
                    </div>
                </div>
            </div>
            
            <LeftSidebar maxOpened={ (data) => setLeftMaxOpen(data) }/>
            {/* right top toolbar */}
            <div className = {`fixed top-0 right-0 py-4 pl-4 shadow-xl bg-gray-800 text-white w-40 rounded-l-full transition transform ease-out duration-300 translate-x-28 ${openToolbar && "-translate-x-0"}`}>
                    <FontAwesomeIcon onClick = {() => setOpenToolbar(!openToolbar)} className = "mr-10" icon={openToolbar ? faTimes : faCogs}/>
                    <FontAwesomeIcon onClick = {() => setOpenNotif(!openNotif)} className = "mr-3 hover:text-red-600" icon={faBell}/>
                    <FontAwesomeIcon className = "mr-3 hover:text-red-600" icon={dark ? faSun : faMoon}/>
                    <FontAwesomeIcon className = "mr-3 hover:text-red-600" icon={faPowerOff}/>
            </div>
            {/* content*/}
            <div className = {`${leftMaxOpen && "ml-16 md:ml-64 lg:ml-64 xl:ml-64"} ${!leftMaxOpen && "ml-16"} flex-shrink w-full`}>
                {/* Your content here*/}
                <div className = "mx-10 mt-12">
                    {children}
                </div>
            </div>
            
        </main>       
    );
}
