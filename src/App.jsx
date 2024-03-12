import './App.css'
import { React } from 'react';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { RouterLayout } from './components/RouterLayout';
import { Home } from './components/Home';
import UseStateDemo from './components/UseStateDemo';
import UseEffectDemos from './components/UseEffectDemos';
import UseRefDemo from './components/UseRefDemo';
import UseReducerDemo from './components/UseReducerDemo';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<RouterLayout/>}>
            <Route path="/" element={<Home />} />
            <Route path="/useState" element={<UseStateDemo />} />
            <Route path="/useEffect" element={<UseEffectDemos />} />
            <Route path="/useRef" element={<UseRefDemo />} />
            <Route path="/useReducer" element={<UseReducerDemo />} />
            <Route path="*" element={<div>Page inexistante</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;