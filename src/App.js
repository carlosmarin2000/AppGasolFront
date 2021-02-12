import './App.css';
import Login from './usuario/Login';
import CrearUsuario from './usuario/CrearUsuario';
import MapView from './MapView';
import MainView from './MainView';
import CrearEstaciones from './Estaciones/CrearEstaciones';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
	return (
	  	<Router>
		    <div className="App">
		    	<Switch>
		    		<Route path="/" exact component={Home}/>
		    		<Route path="/MapView" exact component={MapView}/>
					<Route path="/Login" exact component={Login}/>
					<Route path="/CrearUsuario" exact component={CrearUsuario}/>
					<Route path="/CrearEstaciones" exact component={CrearEstaciones}/>
				</Switch>
		    </div>
	    </Router>
	  );
}

const Home = () => (
	<MainView />
);

export default App;
