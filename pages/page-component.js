import Layout from '../components/Layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faExclamation } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
  
export default function PageComponent() {
  const [showModal, setShowModal] = React.useState(false)
  return(
    <Layout>
      <div className = "flex w-full p-3 shadow-lg rounded-xl">
        <div className = "rounded-full h-10 w-10 bg-red-200 px-3 pt-2 shadow-xl">
          <FontAwesomeIcon icon={faBoxOpen}/>
        </div>
        <div className = " ml-10">
          Component Page
          <div className = "text-sm text-gray-500">In this page you can show all component</div>
        </div>
      </div>
      <div className = "w-full p-9 mt-3 rounded-xl shadow-lg">
        <button onClick = {() => setShowModal(true)} className = "bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg text-white mr-2">Show Allert</button>
        <button className = "bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg text-white mr-2">Show Snackbar</button>
      </div>
      {/* modal */}
      {showModal && (
        <div class={`${!showModal ? "translate-y-0" : "-translate-y-full"} translate-y-full absolute bottom-0 inset-x-0 shadow-xl px-8 pt-8 bg-gray-700 mx-10 lg:mx-24 h-48 rounded-t-3xl z-50 ease-in-out transition-transform duration-500`}>
          <div className = "flex">
            <div className = "rounded-full h-16 w-16 bg-red-200 px-3 pt-3 shadow-xl text-3xl text-red-500 text-center">
              <FontAwesomeIcon icon={faExclamation}/>
            </div>
            <div className = "ml-10 text-xl text-white">
              Caution
              <div className = "text-sm text-gray-300 mt-1">Are you sure to delete this ?</div>
            </div>
          </div>
          <div className = "flex flex-row-reverse w-full p-1 mt-5 ">
            <button onClick = {() => setShowModal(false)} className = "bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg text-white mr-2">Nope</button>
            <button className = "bg-green-500 hover:bg-green-600 py-2 px-4 rounded-lg text-white mr-2">Yeah, Sure</button>
          </div>
          
        </div>
      )}
      
    </Layout>
  )
}
