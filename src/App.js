import logo from './logo.svg';
import './App.css';
import Nabvar from './Components/navbar/navbar';
import ItemListContainer from './Components/Itemlistcontainer/ItemListContaines';

function App() {
  return (
    <div className="App">
      <Nabvar />
      <ItemListContainer greeting = 'Pasión de mi tierra'/>
    </div>
  );
}

export default App;
