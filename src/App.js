import './App.css';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetails from './pages/RecipeDetails';
import Inventory from './pages/Inventory';
import NoPage from './pages/NoPage';
import Music from './pages/Music';
import More from './pages/More';
import Favourites from './pages/Favourites';
import Settings from './pages/Settings';
import AddItem from './pages/AddItem';
import Manual from './pages/Manual';

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
          <Route path='/recipes/favourites' element={<Favourites/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/inventory/add-item' element={<AddItem/>}/>
          <Route path='/manual' element={<Manual/>}/>
          <Route path='*' element={<NoPage/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
