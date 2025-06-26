import './styles/Pages.css';
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";

import ChatbotComponent from './components/Chatbot/ChatbotComponent';
import AdmissionsPage from './pages/AdmissionPage';





const App = () => {
  return(
    <div>
      <Router>
        <Routes>
         
          <Route path="/" element={<HomePage/>}/>
         
       
          <Route path="/about" element={<AboutPage/>}/>

          <Route path="/courses" element={<CoursesPage/>}/>

          <Route path="/contact" element={<ContactPage/>}/>

          <Route path="/admissions" element={<AdmissionsPage/>}/>
        </Routes>
        <ChatbotComponent/>
        </Router>
   
    </div>
  )
}
export default App;