import Layout from '../components/Layout'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen, faExclamation } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import Modal from '../components/Modal';

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
      <Modal 
        isModalClosed={(data) => setShowModal(data) } 
        showModal = {showModal} 
        title="Peringatan" 
        description="Apakah anda yakin ingin menghapusnya ?"
      />
            
    </Layout>
  )
}
