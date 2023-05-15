import {Header} from "./componets/Header/Header"
import {Main} from "./componets/Main/Main"
import {Navigation} from "./componets/Navigation/Navigation"
import { Route, Routes } from "react-router-dom";
import{Cold} from "./componets/Navigation/Cold/Cold"
import { Hot } from "./componets/Navigation/Hot/Hot";
import { Meat } from "./componets/Navigation/Meat/Meat";
import { Soup } from "./componets/Navigation/Soup/Soup";
import { Fish } from "./componets/Navigation/Fish/Fish";
import {Gril} from "./componets/Navigation/Gril/Gril"
import{Firm} from "./componets/Navigation/Firm/Firm"
import{Drinks} from "./componets/Navigation/Drinks/Drinks"


function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <Navigation/>
        <Routes>
          <Route path="/cold" element={<Cold/>}/>
          <Route path="/hot" element={<Hot/>}/>
          <Route path="/meat" element={<Meat/>}/>
          <Route path="/soup" element={<Soup/>}/>
          <Route path="/fish" element={<Fish/>}/>
          <Route path="/gril" element={<Gril/>}/>
          <Route path="/firm" element={<Firm/>}/>
          <Route path="/drinks" element={<Drinks/>}/>
        </Routes>
      
    </div>
  );
}

export default App;
