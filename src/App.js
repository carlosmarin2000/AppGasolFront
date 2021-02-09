import logo from './logo.svg';
import './App.css';
import Login from './usuario/Login';
import CrearUsuario from './usuario/CrearUsuario';
import MapView from './MapView'
import CrearEstaciones from './Estaciones/CrearEstaciones'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
	return (
	  	<Router>
		    <div className="App">
		    	<Switch>
					<Route path="/" exact component={Home}/>
					<Route path="/CrearUsuario" exact component={CrearUsuario}/>
					<Route path="/MapView" exact component={MapView}/>
					<Route path="/CrearEstaciones" exact component={CrearEstaciones}/>
				</Switch>
		    </div>
	    </Router>
	  );
}

const Home = () => (
	<Login />
);

export default App;
