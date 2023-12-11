import ShoeById from "./ShoeById"
import AddBid from "./AddBid"

function ShoeByIdCard({ShoeById,setShoeById,image,brand,price,id}){
    console.log(brand)
return(
    <div>
        <img src={image}/>
        <h3>current price {price}</h3>

        <AddBid id={id} price={price}/>
        <h3>testetsetests {brand}</h3>


    </div>

)
}

export default ShoeByIdCard