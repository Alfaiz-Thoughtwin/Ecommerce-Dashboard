import './App.css';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <>    
      <div className="App">
        <BrowserRouter>
          <Header />
          <Route path="/add">
            <AddProduct />
          </Route>
          <Route path="/update">
            <UpdateProduct />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
