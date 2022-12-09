import logo from './logo.svg';
import './App.css';
import Nabvar from './Components/navbar/navbar';
import ItemListContainer from './Components/Itemlistcontainer/ItemListContaines';
import ItemCounter from './Components/ItemCounter/ItemCounter';
import ProductsContainer from './Components/ProductsContainer/ProductsContainer';



function App() {



  const handleOnAdd = (quantity) => {
    console.log('Se agrego al carrito ' + quantity)
  }

  return (
    <div className="App">
      <Nabvar />
      <ItemListContainer greeting = 'Pasión de mi tierra'/>
      <ItemCounter initial={0} stock={10} onAdd={handleOnAdd}/>
      <ProductsContainer/>
    </div>
    
  );
}

export default App;
