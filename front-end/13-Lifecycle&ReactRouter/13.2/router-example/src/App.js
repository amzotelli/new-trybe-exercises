import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Profile from './Profile';


function App() {
  return (
    <BrowserRouter>
      {/* Componente raiz = nessa caso o Home, filho de Browser Router */}
      <Route path="/about" component={ About } />
      <Route path="/profile/:noob" render={(props) => <Profile {...props} name="Eu mesma " />} />
      <Route path="/contact"><Contact /></Route>
      <Route exact path="/"><Home /></Route>
    </BrowserRouter>
  );
}

export default App;
