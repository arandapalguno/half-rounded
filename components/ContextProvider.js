import React from 'react';
import ContextAuth from '../utils/ContextAuth';

function ContextProvider(props) {

    // my state for context provider
    const[auth, setAuth] = React.useState(false);   

    // return view
    return (
        <ContextAuth.Provider value={[auth, setAuth]}>
            {props.children}
        </ContextAuth.Provider>
    );
}

export default ContextProvider;
