import RestroCard,{withVegLabel} from "./RestroCard";
import resObject,{resObject2} from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body=()=>{

//State variable - Super powerful variable
const [listOfRestuarants,setlistOfResturants]=useState( []);
const [searchText,setsearchText]= useState('');
const [filterResturants,setfilterResturants]=useState([]);

const RestaurantCardVegLabel= withVegLabel(RestroCard);

useEffect(()=>{
fetchData();
},[])


const fetchData = async () =>{
 const data =await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

const json =await data.json();

//Optional chaining
setlistOfResturants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
setfilterResturants(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

};
/*
// I don't have swiggy Api so i waited to call new restro object so i will have all data
 setTimeout(() => {
        console.log("sleeping for loading resturants");
        if(data)
            setlistOfResturants(resObject2)
            setfilterResturants(resObject2)
    }, 3000);
};
*/


const onlineStatus=useOnlineStatus();
if (onlineStatus===false){
  return (
    <h1>Please Check your internet. Seems like you are Offline</h1>
  )
}

// conditional rendering 
//if (listOfRestuarants.length == 0){
  //  return <Shimmer></Shimmer>
//}

//Normal JS variable
let listOfRestuarantsJS=[
    {
      "id": 1,
      "resName": "McDonald's",
      "cuisine": "Fast Food",
      "rating": "3.8",
      "delivery": "25 Mins",
      "imageSrc": "https://1000logos.net/wp-content/uploads/2017/03/McDonalds-logo.png"
    },
    {
      "id": 2,
      "resName": "Pizza Hut",
      "cuisine": "Pizza",
      "rating": "3.7",
      "delivery": "30 Mins",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/1088px-Pizza_Hut_logo.svg.png"
    },
    {
      "id": 3,
      "resName": "Subway",
      "cuisine": "Sandwiches",
      "rating": "4.5",
      "delivery": "14 Mins",
      "imageSrc": "https://1000logos.net/wp-content/uploads/2017/06/Subway-logo.png"
    },
    {
      "id": 4,
      "resName": "Starbucks",
      "cuisine": "Coffee",
      "rating": "4.1",
      "delivery": "40 Mins",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
    },
    {
      "id": 5,
      "resName": "KFC",
      "cuisine": "Chicken",
      "rating": "3.9",
      "delivery": "20 Mins",
      "imageSrc": "https://1000logos.net/wp-content/uploads/2017/03/KFC-Logo.png"
    },
    {
      "id": 6,
      "resName": "Burger King",
      "cuisine": "Burgers",
      "rating": "3.8",
      "delivery": "35 Mins",
      "imageSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSeNtH7fj06x_cOrcDlaA-R5cJp7LQObpR6vorV0LU3g&s"
    },
    {
      "id": 7,
      "resName": "Domino's Pizza",
      "cuisine": "Pizza",
      "rating": "3.6",
      "delivery": "28 Mins",
      "imageSrc": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png"
    }

];
    return listOfRestuarants.length == 0 ? 
    <Shimmer/> 
    :(
        <div className="body">
           <div className="filter flex">
              <div className="search m-4 p-4">
              <input type='text' 
              data-testid="searchInput"
              className="border border-black border-solid" value={searchText} 
              onChange={(e)=>{
                setsearchText(e.target.value);
                
             } 
            }>
              
            </input>
              <button className="px-4 py-1 bg-orange-300 m-4 rounded-lg" 
            onClick={() => {
                const filteredList = searchText.length > 0
                    ? listOfRestuarants.filter(res => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    : listOfRestuarants;
                setfilterResturants(filteredList);
            }}
>
                Search</button>
              </div>
              <div className="search m-3 p-3 flex items-center">
              <button className="px-3 py-1 bg-gray-300 rounded-lg" onClick={
                ()=>{
                    const filterList=listOfRestuarants.filter(
                        (res)=>parseFloat(res.info.avgRating)>4.4
                    ); 
                    
                    setfilterResturants(filterList)

                }}
              >Top Rated Resturants</button>
           </div>
           </div>
            <div className='flex flex-wrap rounded-lg'>
                {      
                
                filterResturants.map(resturant=>(
                <Link key={resturant.info.id} to={"/restaurants/"+resturant.info.id} >
                  {/**if Resturant offers Veg then we add Veg label to restro card */}
                  {resturant.info.veg ?(
                    <RestaurantCardVegLabel resData={resturant}></RestaurantCardVegLabel>
                  ):(
                  <RestroCard  resData={resturant}></RestroCard>)}
                </Link>
                  ))
            }
                
            </div>
        </div>
    )
}
export default Body;