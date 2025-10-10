const getAppsFromLS = () =>{
    const storedApps = localStorage.getItem('apps')
    if(storedApps){
        const parseApps = JSON.parse(storedApps)
        return parseApps;
    }
    return []
}

const addAppsToLs = (id)=>{
    const storedApps = getAppsFromLS()

    const updated = [...storedApps, id]
    saveAppsToLS(updated)

}

const saveAppsToLS = (array) =>{
    const appsJson = JSON.stringify(array)
    localStorage.setItem('apps', appsJson)
}

const removeAppFromLS = id =>{

    const storedApps = getAppsFromLS()

    if(storedApps){
        const remining = storedApps.filter(app=> app !== id)
        saveAppsToLS(remining)

    }
}

export {getAppsFromLS,addAppsToLs,saveAppsToLS,removeAppFromLS}