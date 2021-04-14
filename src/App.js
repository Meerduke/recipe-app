import './App.css';
import SearchIngredient from './SearchIngredient';

const App = () => {

  return (
    <div className="App">
      <div className="container-fluid hero">
      <h1>
        THE RANDOM
        <br />
        RECIPE GENERATOR
      </h1>
      <p>
        Got a random ingredient? Want to make something unusual?
        <br />
        Enter it into the Random Recipe Generator to find 10 weird and wonderful random recipes featuring your ingredient!
      </p>
      </div>
      <SearchIngredient defaultKeyword="Banana"/>
      <footer>
        <p>
            <a href="https://github.com/Meerduke/recipe-app" class="text-decoration-none" target="_blank" title="Becca Murdoch's GitHub">Open-source code</a> by Becca Murdoch
        </p>
    </footer>
    </div>
  );
}

export default App;
