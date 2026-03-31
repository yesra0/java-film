import {Link } from 'react-router-dom';


const NotFound = () => (
  <div style={{textAlign:'center',padding:'5rem 0'}}>
    <h1 style={{fontSize:'4rem',color:'#e2e8f0'}}>404</h1>
    <p>Aradığınız sayfa veya yazı bulunamadı</p>
    <Link to="/" className='read-more'>Ana Sayfaya Dön</Link>
  </div>
)


export default NotFound;