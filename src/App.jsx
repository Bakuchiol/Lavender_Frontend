import './App.css';
import { useRoutes } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home'
import JournalEntry from './pages/JournalEntry';

const App = () => {
  // youtube, reactrouter docs, stackoverflow
  const elements = useRoutes([
    {path: '/', 
      element: <Layout />, // every time path is / layout is displayed! no wrapping like before
      children: [
        {path: '/', element: <Home />},
        {path: '/api/journal/:id', element: <JournalEntry />}
      ]
    } 
  ])
    return elements
}

export default App;
