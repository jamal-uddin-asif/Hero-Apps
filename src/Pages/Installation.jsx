import React, { useEffect } from 'react';
import { getAppsFromLS } from '../Utility/localStorage';
import useAllApps from '../Hooks/useAllApps';

const Installation = () => {

    const {appsData} = useAllApps()
    console.log(appsData)

    useEffect(()=>{
       

            const findApps = []
            const storedApps = getAppsFromLS()
            console.log(storedApps)
            
            storedApps.forEach(id=>{
                const matchedApps = appsData.find(app=>app.id === id)
                findApps.push(matchedApps)
            })
            
            console.log(findApps)
        
    },[])


    return (
        <div>
            
        </div>
    );
};

export default Installation;