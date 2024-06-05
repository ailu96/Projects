import { useEffect,useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestroMenu=()=>{

    const {resId} = useParams();
    
    const resInfo=useRestaurantMenu(resId)
    const [showIndex,setShowIndex]=useState(0)


if(!resInfo){
  return  <Shimmer />
}


const {name,cuisines,costForTwoMessage,sla}=resInfo?.cards[2]?.card?.card?.info
//const {itemCards}=resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
const categories=resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
    (c)=>
    c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
);


return ( 
       
<div className="text-center">
    <h1 className="font-bold my-10 text-2xl">{name}</h1>
    <h3 className="font-bold my-10 text-2xl">{cuisines.join(", ")}</h3>
    <h3>{costForTwoMessage} - Delivery in {sla?.deliveryTime} Minutes</h3>

    {
        categories.map((category,index)=>(
           //controlled Component
           <RestaurantCategory key={`${category.card.card.title}-${index}`} 
           data={category?.card?.card} 
            showItems={index == showIndex ? true:false}
            setShowIndex={()=>index!=showIndex?setShowIndex(index):setShowIndex()}>
           </RestaurantCategory>
        ))

    }


{/** 
    {menuCategories.map(item => {
        const itemCards = item.card.card.itemCards; // Access itemCards
        if (!itemCards) return null; // Skip rendering if itemCards is not available
        return (
            <div key={item.card.card.title}>
                <h2>{item.card.card.title}</h2>
                <ul>
                    {itemCards.map(items => (
                        <li key={items.card.info.id}>{items.card.info.name} - Rs. {items.card.info.price / 100}</li>
                    ))}
                </ul>
            </div>
        );
    })}

    */}
</div>





);
}

export default RestroMenu;