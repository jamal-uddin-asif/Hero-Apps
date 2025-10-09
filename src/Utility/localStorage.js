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
    // if(storedApps.includes(id)){
    //     alert('Already added')
    //     return;
    // }
    const updated = [...storedApps, id]
    saveAppsToLS(updated)

}

const saveAppsToLS = (array) =>{
    const appsJson = JSON.stringify(array)
    localStorage.setItem('apps', appsJson)
}

const removeAppFromLS = id =>{
    console.log(id)
    const storedApps = getAppsFromLS()
    console.log(storedApps)
    if(storedApps){
        const remining = storedApps.filter(app=> app !== id)
        saveAppsToLS(remining)
        // saveAppsToLS(remining)

    }
}

export {getAppsFromLS,addAppsToLs,saveAppsToLS,removeAppFromLS}