import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetails from './pages/RecipeDetails';
import RecipeNutrition from './pages/RecipeNutrition';
import Inventory from './pages/Inventory';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/recipes' element={<Recipes/>}/>
          <Route path='/recipe-details' element={<RecipeDetails/>}/>
          <Route path='/recipe-nutrition' element={<RecipeNutrition/>}/>
          <Route path='/inventory' element={<Inventory/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
