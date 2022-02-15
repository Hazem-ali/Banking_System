import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Route, Switch} from 'react-router-dom';
import Customers from './Components/Customers/Customers';
import CustomerProfile from './Components/Customers/CustomerProfile/CustomerProfile';

function App() {
  return (

    <div className="App">

      <Header></Header>
      <Switch>
        <Route path='/customers/:customerId' component={CustomerProfile}></Route>
        <Route path='/customers' component={Customers}></Route>
        <Route path='' exact component={Home}></Route>
      </Switch>
    </div>
  );
}

export default App;
