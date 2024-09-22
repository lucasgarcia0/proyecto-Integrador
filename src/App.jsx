import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home';
import TopRated from './pages/TopRated';
import Favorites from './pages/Favorites';
import Recent from './pages/Recent';
import Errors from './pages/Errors';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import SearchResults from './pages/SearchResults';
import Detalle from './pages/Detalle';
function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/favorites" component={Favorites} />
        <Route path="/topRated" component={TopRated} />
        <Route path="/search" component={SearchResults} />
        <Route path="/movie/id/:id" component={Detalle} />

        <Route path="/recent" component={Recent} />

        <Route component={Errors} />
      </Switch>
      <Footer/>
    </>
  );
}


export default App;
