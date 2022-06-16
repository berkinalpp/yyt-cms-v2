import './App.css';
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import {Routes,Route} from 'react-router-dom'
import ContentTypeBuilder from './components/ContentTypeBuilder/ContentTypeBuilder';
import ContentTypeManager from './components/ContentTypeManager/ContentTypeManager';

function App() {
  return (
    <div className="App">
 
      <Header></Header>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/content-type-builder' element={<ContentTypeBuilder />} /> 
        <Route path='/content-type-manager' element={<ContentTypeManager />} /> 
      </Routes>
    </div>
  );
}

export default App;
