import { Routes , Route } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
        <Route path='/auth' element={<AuthPage/>}/>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}

export default App
