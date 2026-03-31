import { Link } from 'react-router-dom';

// 1. ÖNEMLİ: Bileşen isminin baş harfi büyük olmalı (AnaSayfa)
const Anasayfa = () => {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 0' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 900, color: 'black' }}>
        Merhaba, Blog sayfama hoşgeldiniz!
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'gray', maxWidth: '500px', margin: '1.5rem auto' }}>
        Burada sinema ve teknoloji üzerine yazılarımı bulabilirsiniz.
      </p>
      
      {/* 2. DÜZELTME: padding değerinde '2 rem' arasındaki boşluğu sildik ('2rem') */}
      {/* Ayrıca buton gibi görünmesi için arka plan rengi ekledik */}
      <Link 
        to="/yazilar" 
        style={{ 
          display: 'inline-block', 
          textDecoration: 'none', 
          padding: '0.75rem 2rem', 
          marginTop: '1rem',
          backgroundColor: '#2563eb',
          color: 'white',
          borderRadius: '0.5rem',
          fontWeight: '600'
        }}
      >
        Yazıları Keşfet
      </Link>
    </div>
  );
}

export default Anasayfa;