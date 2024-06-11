
import './App.css';
import AddStudent from './components/AddStudent';
import SearchStudent from './components/SearchStudent';
import DeleteStudent from './components/DeleteStudent';
import ViewAll from './components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddStudent/>}/>
      <Route path='/d' element={<DeleteStudent/>}/>
      <Route path='/s' element={<SearchStudent/>}/>
      <Route path='/v' element={<ViewAll/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
