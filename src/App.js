import React,{useState,useEffect} from 'react';
import './App.css';
import Recipe from './Recipe';

function App() {
  const id="109c2502";
  const key="91ee8e8efdbcb4e79805e5288d735cd9";
  const [search,setSearch] = useState('');
  const [query,setQuery] = useState('');
  const [recipe,setRecipe] = useState([])
  useEffect(() => {
   const fetchData=async()=>{
      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${id}&app_key=${key}`);
      const data = await response.json();
      setRecipe(data.hits);
     
   }
   fetchData();
  }, [query])

  const handleChange = (e) => {
    setSearch(e.target.value);
  }
 
  const formSubmit = (e) =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
   <div className="design">
   <b className="as">RECIPE APP</b>
   </div>
      <form className="search-form" onSubmit={formSubmit}>
      
        <input type="search" className="search-bar" value={search} placeholder="Enter dish name" onChange={handleChange} />
      {(search=="")?<input  type="submit" className="search-button" disabled/>:<input  type="submit" className="search-button"/>}
      </form>
<div className="recipes"> 
      {
         recipe.map((obj,key)=>{
           return <Recipe key={key} 
           title={obj.recipe.label} 
           calories={obj.recipe.calories} 
           image={obj.recipe.image} 
           ingredients={obj.recipe.ingredients}
           />
         })
      }
      </div>
    </div>
  );
}

export default App;
