import React, {useEffect, useState} from 'react';
import Recipe from './components/Recipe'
import './App.css';


function App() {

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  const api = {
    id: "6ebcb240",
    key: "f125051dc40077ff44c4cfafe2ad5e2d"
  }

  useEffect(()=>{
    fetchData();
  }, [query]);

  const fetchData = async () => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${api.id}&app_key=${api.key}`
  );
  const data = await response.json();
  setRecipes(data.hits);
  console.log(data)
}

const onSearch = (e) => {
  setSearch(e.target.value)
}

const getSearch = (e) => {
  e.preventDefault();
  setQuery(search);
  setSearch('');
}



  return (
    <div className="App">
      <div className="title">
      <h1> All Recipes are here..  </h1>
      </div>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" placeholder="Search a recipe.."  value={search} onChange={onSearch } />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {
        recipes.map((item)=>
         ( <Recipe key={item.recipe.calories} item={item}/>)
        )
      }
      </div>
    </div>
  );
}

export default App;
