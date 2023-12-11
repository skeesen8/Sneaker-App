import { useNavigate } from "react-router-dom"

function ShoeCard({price,description,image,brand,favorite,shoeName,id}){

    const navigate=useNavigate()

    function handleClick(){
    console.log(`clicked ${id}`)
    navigate(`/listings/${id}`)
}

    return(
        <div onClick = {handleClick}>
            <div>
            {shoeName}
            </div>
            <div>
            {price}
            </div>
            <div>
            {brand}
            </div>
            <img src={image}/>
            {favorite}

        </div>
    )
}

export default ShoeCard