import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetails from './pages/RecipeDetails';
import Inventory from './pages/Inventory';
import NoPage from './pages/NoPage';
import Music from './pages/Music';
import More from './pages/More';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='/' element={<Home/>}/>
          <Route path='/recipes' element={<Recipes/>}/>
          <Route path='/recipes/recipe-details' element={<RecipeDetails/>}/>
          <Route path='/inventory' element={<Inventory/>}/>
          <Route path='/music' element={<Music/>}/>
          <Route path='/more' element={<More/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
