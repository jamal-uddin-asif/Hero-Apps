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
    if(storedApps.includes(id)){
        alert('Already added')
        return;
    }
    const updated = [...storedApps, id]
    saveAppsToLS(updated)

}

const saveAppsToLS = (array) =>{
    const appsJson = JSON.stringify(array)
    localStorage.setItem('apps', appsJson)
}

export {getAppsFromLS,addAppsToLs,saveAppsToLS}