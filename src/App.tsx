import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {Signup} from "./pages/Signup.tsx";

function App() {

  return (
   <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
   </Routes>
  )
}

export default App
