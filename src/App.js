import './App.css';
import SearchIngredient from './SearchIngredient';

const App = () => {

  return (
    <div className="App">
      <div className="container-fluid hero">
      <h1>
        THE RANDOM RECIPE GENERATOR
      </h1>
      <p>
        Got a random ingredient? Want to make something unusual?
        <br />
        Enter it into the Random Recipe Generator to find 10 weird and wonderful random recipes featuring your ingredient!
      </p>
      </div>
      <SearchIngredient defaultKeyword="Banana"/>
    </div>
  );
}

export default App;
