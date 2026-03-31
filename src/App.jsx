import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Bileşenleri ve Sayfaları içe aktarıyoruz
// Önemli: Dosya isimlerin ile buradaki isimlerin aynı olduğundan emin ol!
import NavBar from './components/NavBar';
import AnaSayfa from './pages/AnaSayfa'; // 'Anasayfa' yerine 'AnaSayfa' yaptık
import BlogList from './pages/BlogList';
import BlogDetail from './pages/BlogDetail';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div className='blog-wrapper'>
        <NavBar />
        <main className='container'>
          <Routes>
            {/* Element isimlerini import edilenlerle aynı yaptık */}
            <Route path='/' element={<AnaSayfa />} />
            <Route path='/yazilar' element={<BlogList />} />
            <Route path='/yazi/:blgurl' element={<BlogDetail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;