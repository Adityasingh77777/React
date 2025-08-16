import PropTypes from "prop-types"

function List({items, category = "Category"}){

    const listItems = items.map(fruit => <li key={fruit.id}>{fruit.name}:&nbsp;<b>{fruit.calories}</b></li>);

    return (
    <div>
        <h2 className="list-category">{category}</h2>
        <ol className="list-items">{listItems}</ol> 
    </div> 
    );
}


List.propTypes ={
    category:PropTypes.string.isRequired,
    items:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired,
        calories:PropTypes.number.isRequired,
    })
    ).isRequired,
}

export default List