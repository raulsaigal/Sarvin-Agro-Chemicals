import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import Preloader from './components/home/Preloader';
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  return (
    <div className="flex flex-col min-h-screen">
      <Preloader onComplete={() => setLoading(false)} />

      <div className={`${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100 transition-opacity duration-1000'} flex-grow flex flex-col`}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
