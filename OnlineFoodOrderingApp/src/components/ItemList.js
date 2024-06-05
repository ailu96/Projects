import { useDispatch } from "react-redux";
import { IMAGE_URL } from "../utils/constants";
import { addItem } from "../redux/cartSlice";

const ItemList =({items})=>{

    const dispatch=useDispatch();

    const handleAddItem =(item)=>{
        //dispatch actions
        dispatch(addItem(item))
    }


    return (
        <div>
                {items.map((item) =>(
                    <div key={item.card.info.id} className="p-2 m-2 border-black-1 border-b-2 text-left flex">
                        <img src={IMAGE_URL + item.card.info.imageId} className="w-[90]"></img>
                       <div className="p-2">
                        <div className="py-2">
                        <span>{item.card.info.name} </span>
                        <span>- RS.{item.card.info.price? item.card.info.price/100: item.card.info.defaultPrice/100} </span>
                        
                        </div>
                      
                            <p className="text-xs">{item.card.info.description}</p>
                       </div>
                       <div className="ml-auto">
                        <button className="p-2 bg-green-400 rounded-lg text-white" 
                        onClick={()=>handleAddItem(item)}>ADD</button>
                        </div>
                        </div>
                ))}
           
        </div>
    );

};

export default ItemList;