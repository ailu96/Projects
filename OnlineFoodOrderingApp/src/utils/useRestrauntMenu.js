import { useEffect, useState } from "react";

const useRestaurantMenu=(resId)=>{

    const [resInfo,setResInfo]=useState(null)
    //Fetch Data
    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId='+resId+'&catalog_qa=undefined');
        const json = await data.json();
        setResInfo(json.data)
    }

    return resInfo;
}
export default useRestaurantMenu;