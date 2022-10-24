import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Menu } from './components/Menu';
import { Sidebar } from './components/Sidebar';
import { Routes } from './routes';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Sidebar />
        <Menu />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
