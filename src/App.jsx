import './App.css';
import { useRoutes } from 'react-router-dom';
import Layout from './pages/Layout';

const App = () => {
  // youtube, reactrouter docs, stackoverflow
  const elements = useRoutes([
    {path: '/', element: <Layout />} // everytime path is / layout is displayed! no wrapping like before
  ])
  return (
    <div className="App">
      <h1>LAVENDER JOURNAL</h1>
    </div>
  );
}

export default App;
