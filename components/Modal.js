import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faExclamation } from '@fortawesome/free-solid-svg-icons';

export default function Modal({isModalClosed, showModal, title, description}) {
    return (
        // <div className={`fixed inset-x-0 shadow-xl px-8 pt-8 bg-gray-700 mx-10 lg:mx-24 h-48 rounded-b-3xl z-50 transition transform ease-out duration-300 translate-y-0 ${!showModal && "-translate-y-full" }`}>
        <div className={`fixed inset-x-0 shadow-xl px-8 pt-8 bg-gray-700 mx-2 md:mx-24 lg:mx-24 xl:mx-24 h-48 rounded-t-3xl z-50 transition transform ease-out duration-300 bottom-0 translate-y-0 ${!showModal && "translate-y-full" }`}>
            <div className = "flex">
                <div className = "rounded-full h-16 w-16 bg-red-200 px-3 pt-3 shadow-xl text-3xl text-red-500 text-center">
                <FontAwesomeIcon icon={faExclamation}/>
                </div>
                <div className = "ml-10 text-xl text-white">
                {title}
                <div className = "text-sm text-gray-300 mt-1">{description}</div>
                </div>
            </div>
            <div className = "flex flex-row-reverse w-full p-1 mt-5 ">
                <button onClick = { () => { isModalClosed(false)} } className = "bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg text-white mr-2">Nope</button>
                <button className = "bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg text-white mr-2">Yeah, Sure</button>
            </div>
        
        </div>
    );
}
