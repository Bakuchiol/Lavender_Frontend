import './App.css';
import { useRoutes, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Layout from './pages/Layout';
import Home from './pages/Home'
import JournalEntry from './pages/JournalEntry';
import Signup from './pages/Signup'
import Login from './pages/Login'

const App = () => {
  // youtube, reactrouter docs, stackoverflow
  const { user } = useAuthContext()
  const elements = useRoutes([
    {path: '/', 
      element: <Layout />, // every time path is / layout is displayed! no wrapping like before
      children: [
        // ternary navigates if authenticated or not
        {path: '/', element: user ? <Home /> : <Navigate to="/api/login" />},
        {path: '/api/journal/:id', element: user ? <JournalEntry /> : <Navigate to="/api/login" />},
        {path: '/api/signup', element: !user ? <Signup /> : <Navigate to="/" />},
        {path: '/api/login', element: !user ? <Login /> : <Navigate to="/" />}
      ]
    } 
  ])
    return elements
}

export default App;
