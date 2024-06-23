import { plantList } from '../datas/plantList'

function ShoppingList() {
    return (
        <ul>
            {plantList.map( (plant) => ( <li key={`${plant.id}`}> {plant.name} {'--->'} {plant.category} </li> ) )
            }
        </ul>
    )
   /*
        const categories = plantList.reduce(
            (acc, plant) =>
                acc.includes(plant.category) ? acc : acc.concat(plant.category),
            []
        )
    
        return (
            <div>
                <ul>
                    {categories.map((cat) => (
                        <li key={cat}>{cat}</li>
                        
                        <ul>
                        {plantList.map((plant) => (
                            <li key={plant.id}>{plant.name}</li>
                        ))}
                        </ul>
                    ))}
                </ul>
            </div>
        )
            */
}

export default ShoppingList