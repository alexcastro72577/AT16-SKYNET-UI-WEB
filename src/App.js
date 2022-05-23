
import SideBar from "./components/Sidebar/SideBar";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import WavToTxt from "./pages/WavToTxt";
import Metadata from "./pages/Metadata";
import Reporting from "./pages/Reporting";
import Image from "./pages/Image";
import Video from "./pages/Video";
import Audio from "./pages/Audio";
import ConvertOcr from "./pages/ConvertOcr";
import Translator from "./pages/Translator";
import ObjectRecognizer from "./pages/ObjectRecognizer";
import IrisRecognizer from "./pages/IrisRecognizer";
import FaceRecognizer from "./pages/FaceRecognizer";
import EmotionRecognizer from "./pages/EmotionRecognizer";
import Home from "./pages/Home"
import React, { useState } from "react";
import { GlobalStyle } from "./styles/globalStyles";
import { darkTheme, lightTheme } from "./styles/theme";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import BookingPage from "./pages/BookingPage";
import PersonPage from "./pages/Booking/PersonPage";
import ResourcePage from "./pages/Booking/ResourcesPage";
export const ThemeContext = React.createContext(null);
const AppLayout = () => (
  <SideBar>   
    <Outlet />   

  </SideBar>

  );
function App() {
  const [theme, setTheme] = useState("light");
  const themeStyle = theme === "light" ? darkTheme : lightTheme;
  return (
    <ThemeContext.Provider value={{ setTheme, theme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                <Helmet>
                    <title>Sidebar - Code Focus</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
                        rel="stylesheet"
                    />
                </Helmet>
                <>
                    
                    <Router>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<AppLayout />} >
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/booking/person" element={<PersonPage />} />
          <Route path="/booking/resources" element={<ResourcePage />} />
          <Route path="/reporting" element={<Reporting />} />
          <Route path="/convert-service/metadata" element={<Metadata />} />
          <Route path="/convert-service/image" element={<Image />} />
          <Route path="/convert-service/video" element={<Video />} />
          <Route path="/convert-service/audio" element={<Audio />} />
          <Route path="/convert-service/wav-to-txt" element={<WavToTxt />} />
          <Route path="/convert-service/convert-ocr" element={<ConvertOcr />} />
          <Route path="/convert-service/translator" element={<Translator />} />
          <Route path="/machine-learning/object-recognizer" element={<ObjectRecognizer />} />
          <Route path="/machine-learning/iris-recognition" element={<IrisRecognizer />} />
          <Route path="/machine-learning/face-recognizer" element={<FaceRecognizer />} />
          <Route path="/machine-learning/emotion-recognizer" element={<EmotionRecognizer />} />

          <Route path="*" element={<> 404-Not found</>} />
        </Route>
      </Routes>

  </Router>
                    
                </>
            </ThemeProvider>
        </ThemeContext.Provider>
    
  );
}

export default App;
