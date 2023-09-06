import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import ProjectPage from "./Pages/ProjectPage"
import StudentPage from "./Pages/StudentPage"
import NotFoundPage from "./Pages/NotFoundPage"

function App() {

  return (
    <div className="font-petch">
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/projects" element={<ProjectPage/>}/>
          <Route path="/students" element={<StudentPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </Router>
      <Footer/>
    </div>
  )
}

export default App
