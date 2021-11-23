import LeftSidebar from "./LeftSidebar";
import React from 'react'


export default function Layout({children}) {
    const [leftMaxOpen, setLeftMaxOpen] = React.useState(false)

    // return view
    return (
        <main className = 'flex'>
            <LeftSidebar maxOpened={ (data) => setLeftMaxOpen(data) }/>
            {/* content*/}
            <div className = {`${leftMaxOpen && "ml-64"} ${!leftMaxOpen && "ml-16"} flex-shrink w-full`}>
                {/* Your content here*/}
                <div className = "mx-10 mt-12">
                    {children}
                </div>
            </div>
            
        </main>       
    );
}
