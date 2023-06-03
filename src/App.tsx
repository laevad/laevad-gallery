import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.tsx";
import {Signup} from "./pages/Signup.tsx";
import {AuthProvider} from "./context/auth.tsx";

function App() {

  return (
  <AuthProvider>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/signup" element={<Signup/>} />
      </Routes>
  </AuthProvider>
  )
}

export default App
