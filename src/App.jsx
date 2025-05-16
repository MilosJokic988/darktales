import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Encyclopedia from "./pages/Encyclopedia";
import Symbols from "./pages/Symbols";
import ForbiddenBooks from "./pages/ForbiddenBooks";
import DarkTales from "./pages/DarkTales";
import TaleDetail from "./pages/TaleDetail";
import TopicDetail from './pages/TopicDetail';
import "./App.css";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/encyclopedia" element={<Encyclopedia />} />
         <Route path="/encyclopedia/:topicId" element={<TopicDetail />} />
        <Route path="/symbols" element={<Symbols />} />
        <Route path="/forbidden-books" element={<ForbiddenBooks />} />
        <Route path="/dark-tales" element={<DarkTales />} />
      <Route path="/dark-tales/:taleId" element={<TaleDetail />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
