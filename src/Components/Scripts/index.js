import React, { useEffect } from 'react';


const ImportScript = ({url,children}) => {


    useEffect(() => {
        if(typeof url !== 'string'){
            return;
        }
        
        const root =  document.getElementById('root');
        const ScriptTag =  document.createElement('script');
        ScriptTag.src = url;
        ScriptTag.async = true;
       
        
        if(root){
        root.appendChild(ScriptTag);
        }

    }, [url])

    return children;

}

export default ImportScript;