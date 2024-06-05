import { IMAGE_URL } from "../utils/constants"

//inline styles
const StyleCard={
    backgroundColor:"#dfa888",
}
const cuisinesContainerStyle = {
    maxHeight: "100px", // Set the max height according to your requirement
    overflowY: "auto",  // Enable vertical scroll if content exceeds the height
};


const RestroCard=(props)=>{


    const {name,cuisines,avgRating,sla,cloudinaryImageId,costForTwo}=props.resData.info
    const restroLogo=`${IMAGE_URL}${cloudinaryImageId}`;
    return(
       <div  data-testid="resCard"
       className="m-4 p-4 w-[200px] h-[420px] bg-slate-100 rounded-lg">
        <img className='rounded-lg' alt='res-logo' src={restroLogo}></img>
        <h3 className="font-bold py-2 text-xl">{name}</h3>
        <div className="max-h-12 overflow-hidden">
                {/* Show a single line for cuisines */}
                <h5 className="overflow-hidden whitespace-nowrap">{cuisines.slice(0, 3).join(', ')}</h5>
                {/* Show full list of cuisines on hover */}
                <div className="absolute bg-white p-2 rounded-md shadow-md top-8 left-0 hidden group-hover:block">
                    {cuisines.join(', ')}
                </div>
            </div>
        <h5>{costForTwo}</h5>
        <h5>Rating: {avgRating} </h5> 
        <h5>{sla.deliveryTime} Minutes</h5>  
        </div>
    )
}

//High Order Component

//input-RestroCard and output will be Restrocard with Veg Label 


export const withVegLabel=(RestroCard)=>{
    return (props)=>{
        return(
            <div>
                <label className="absolute bg-green-400 text-white m-2 p-2 rounded-xl">Veg Offered</label>
                <RestroCard {...props}/>
            </div>
        )
    }
}
export default RestroCard;