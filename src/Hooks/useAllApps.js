import axios from "axios";
import { useEffect, useState } from "react";

const useAllApps = () => {
  const [appsData, setAppsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // fetch('/apps.json').then(res=>res.json()).then(data=>console.log(data))
    setLoading(true)
    axios("/apps.json")
      .then((data) => setAppsData(data.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return {appsData, loading, error}
};

export default useAllApps;
