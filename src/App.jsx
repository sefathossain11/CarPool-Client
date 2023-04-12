
import {BrowserRouter,Route, Routes} from "react-router-dom"
import SignIn from "./Components/Authentication/SignIn/SignIn"
import SignUp from "./Components/Authentication/SignUp/SignUp"
import Home from "./Components/Home/Home"
import Error from "./Components/Error/Error"
function App() {


  return (
    <div className="App">
     

    <BrowserRouter>
    <Routes>
    <Route path="*" element={<Error/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/SignIn" element={<SignIn/>}/>
      <Route path="/SignUp" element={<SignUp/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
