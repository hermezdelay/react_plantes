import Banner from './Banner'
import Cart from './Cart'
import ShoppingList from './ShoppingList'

function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}

function App() {
    return (
       
        <div>
             <form onSubmit={handleSubmit}>
            <input type='text' name='my_input' defaultValue='Tapez votre texte' />
            <button type='submit'>Entrer</button>
            </form>
        <Banner /><Cart /> <ShoppingList/></div>
    );
}

export default App