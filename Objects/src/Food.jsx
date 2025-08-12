import React,{useState} from 'react';

function Food(){

    const [foods,setFoods] = useState(["Apple","Orange","Banana"]);

    function handleAddFood(){
        const newFood= document.getElementById("foodInput").value;

        document.getElementById("foodInput").value="";

        setFoods(f => [...f,newFood]);

    }

    function handleRemoveFood(index){

        // const newFood=document.getElementById("foodInput").value;

        // document.getElementById("foodInput").value="";

        // const index=foods.indexOf(newFood);
        // if(index>-1) {
        //     foods.splice(index,1);
        // }
        // setFoods(f => [...f]);

        setFoods(foods.filter((_,i) => i!== index));
    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food,index) => <li key={index} 
                onClick={() => handleRemoveFood(index)}>
                    {food}
                    </li>)}
            </ul>

            <input type="text"  id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
            <button onClick={handleRemoveFood}>Remove Food</button>
        </div>
    )
}

export default Food