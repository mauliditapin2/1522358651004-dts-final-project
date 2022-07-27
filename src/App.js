import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DetailPage from './pages/DetailPage';
import ProfilPage from './pages/ProfilPage';
import MyComponent from './containers/CardWithSearch';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/detail/:BeritaID/:BeritaID2/:BeritaID3/:BeritaID4' element={<DetailPage/>}/>
        <Route path='/search' element={<MyComponent/>}/>
        <Route path='/profil' element={<ProfilPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
