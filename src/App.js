import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home/Home';
import Hearder from './components/Pages/Sheard/Hearder';
import AddNewService from './components/Pages/AddNewService/AddNewService';
import SingleUser from './components/Pages/SingleUser/SingleUser';



function App() {
  return (
    <div className="App">
      <Hearder></Hearder>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/addNewService' element={<AddNewService></AddNewService>}></Route>
        <Route path='/singleUser/:id' element={<SingleUser></SingleUser>}></Route>
      </Routes>
    
      
    </div>
  );
}

export default App;
