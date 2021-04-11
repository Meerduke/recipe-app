import './App.css';
import SearchIngredient from './SearchIngredient';

const App = () => {

  return (
    <div className="App">
      <h1>
        Recipe Search
      </h1>
      <p>
        Tired of not knowing what to cook?
      </p>
      <SearchIngredient defaultKeyword="Banana"/>
    </div>
  );
}

export default App;
