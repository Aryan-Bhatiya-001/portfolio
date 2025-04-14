import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './main-page/Home';
import About from './about-page/About';
import Projects from './projects-page/Projects';
import Contact from './contact-page/Contact';
import styles from './App.module.css';

function App() {
  return (
    <Router>
      <div className={styles.app}>

        {/* Navigation section */}
        <Navbar />

        {/* Main content section */}
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 route */}
            <Route path="*" element={<div>Page not found!</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
