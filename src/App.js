import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main/Main';
import Computers from './components/Computers/Computers';
import AddComputer from './components/AddComputer/AddComputer';
import EditComputer from './components/EditComputer/EditComputer';
import RamTypes from './components/RamTypes';
import StorageTypes from './components/StorageTypes';
import Buildings from './components/Buildings';
import BuildingsTypes from './components/BuildingsTypes';
import Room from './components/Room';
import RoomTypes from './components/RoomTypes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='computers' element={<Computers />} />
            <Route path='computers/add_computer' element={<AddComputer />} />
            <Route path='computers/edit_computer/:id' element={<EditComputer />} />
            <Route path='ram_Types' element={<RamTypes />} />
            <Route path='storage_Types' element={<StorageTypes />} />
            <Route path='buildings' element={<Buildings />} />
            <Route path='buildings_Types' element={<BuildingsTypes />} />
            <Route path='room' element={<Room />} />
            <Route path='room_Types' element={<RoomTypes />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
