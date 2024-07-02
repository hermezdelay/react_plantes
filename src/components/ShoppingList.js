import { plantList } from '../datas/plantList'
import PlantItem from './PlantItem'
import '../styles/ShoppingList.css'

function handleClick(e) {
    alert(`Vous voulez acheter  ${e} ? Très bon choix 🌱✨`)
    console.log('✨ Ceci est mon event :', e)
}

function ShoppingList() {
    /*return (
        <ul>
            {plantList.map( (plant) => ( <li key={`${plant.id}`}> {plant.name} {'--->'} {plant.category} </li> ) )
            }
        </ul>
    )*/

        const categories = plantList.reduce(
            (acc, plant) =>
                acc.includes(plant.category) ? acc : acc.concat(plant.category),
            []
        )
        
        { const dalil = "dalil"; 
            console.log('le nom est  :', dalil);
            let namee = plantList.name;
            console.log('la plante est  :', namee);
        }
        /*{ let namee = plantList.name; }
            { const namee = plantList.name ;}
           {console.log('le nom est  :', dalil); }
       */
    return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list' onClick={  () => handleClick()}>
				{plantList.map(({ id, cover, name, water, light }) => (
					<PlantItem
						id={id}
						cover={cover}
						name={name}
						water={water}
						light={light}
					/>
				))}
			</ul>
		</div>
	)

}

export default ShoppingList