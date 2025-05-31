import style from './styles/App.module.css';
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import { BrowserRouter, Routes, Route} from "react-router-dom";



function App() {
  return (
    <div className={style.App}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />    
          <Route path="/home" element={<Home/>} />     
          <Route path="/projects" element={<Projects/>} />
          {/* <Route path="*" element={NoPage}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;