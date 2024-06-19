import './App.css'
import { React } from 'react';
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import { RouterLayout } from './components/RouterLayout';
import { Home } from './components/Home';
import UseStateDemo from './components/useState/UseStateDemo';
import UseEffectDemos from './components/useEffect/UseEffectDemos';
import UseRefDemo from './components/useRef/UseRefDemo';
import UseReducerDemo from './components/useReducer/UseReducerDemo';
import { UseContextDemo } from './components/useContext/UseContextDemo';
import UseMemoDemo from "./components/useMemo/UseMemoDemo";
import UseCallbackDemo from './components/useCallBack/UseCallbackDemo';
import MemoDemo from './components/MemoDemo';
import FormWithUseRef from './components/forms/FormWithUseRef';
import FormWithUseState from './components/forms/FormWithUseState';
import FormWithUseForm from './components/forms/FormWithUseForm';
import FormWithUseFormAndZod from './components/forms/FormWithUseFormAndZod';
import { MyComponent } from './MyComponent';
import TestHoc from './components/hoc/TestHoc';
import UtilityFunctionDemo from './components/utilityFunction/UtilityFunctionDemo';
import ToggleDemo from './components/useCustomHooks/ToggleDemo';
import ArrayDemo from './components/useCustomHooks/ArrayDemo';

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
            <Route path="/useContext" element={<UseContextDemo />} />
            <Route path="/useMemo" element={<UseMemoDemo />} />
            <Route path="/useCallback" element={<UseCallbackDemo />} />
            <Route path="/memo" element={<MemoDemo />} />
            <Route path="/formsWithUseRef" element={<FormWithUseRef/>} />
            <Route path="/formsWithUseState" element={<FormWithUseState/>} />
            <Route path="/formsWithUseForm" element={<FormWithUseForm/>} />
            <Route path="/formsWithUseFormAndZod" element={<FormWithUseFormAndZod/>} />
            <Route path="/utilityFunction" element={<UtilityFunctionDemo/>} />
            <Route path="/hoc" element={<TestHoc/>} />
            <Route path="/customHooks" element={<ArrayDemo/>} />
            <Route path="/test" element={<MyComponent />} />
            <Route path="*" element={<div>Page inexistante</div>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
};

export default App;