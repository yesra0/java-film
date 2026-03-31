import { Link } from 'react-router-dom';
import { filmVerisi } from '../data'; // Veriyi doğru çektik

const BlogList = () => {
  return (
    <div>
      <h2 style={{ marginBottom: '3rem', fontSize: '2rem' }}>Vizyondaki Filmler</h2>
      {
        // POSTS yerine filmVerisi kullanıyoruz
        filmVerisi.map(film => (
          <article key={film.id} className='post-card'>
            {/* data.js içindeki değişken isimlerini kullandık (puan, ad, ozet) */}
            <span className='post-date'>IMDB: {film.puan}</span>
            <h3 className='post-title'>{film.ad}</h3>
            <p className='post-excerpt'>{film.ozet}</p>
            
            {/* Link yapısını slug'a göre kurduk */}
            <Link to={`/yazi/${film.slug}`} className='read-more'>
              Film Detayı →
            </Link>
          </article>
        ))
      }
    </div>
  );
};

export default BlogList;