import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import BooksPage from './components/BooksPage';
import About from './components/About';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';
import SearchPage from './components/SearchPage';


function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/search/:query" element={<SearchPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<BooksPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Toaster />
      </main>
      <Footer />
    </>
  )
}

export default App
