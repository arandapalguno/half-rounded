import LeftSidebar from "./LeftSidebar";
import React from 'react'


export default function Layout(props) {

    const callback = React.useCallback((leftMaxOpen) => {
        console.log('callback')
      }, []);


    // return view
    return (
        <main className = 'flex'>
            <LeftSidebar sidebarClick={callback}/>

            
        </main>       
    );
}
