import {Link, useNavigate, useParams} from 'react-router-dom';
import { filmVerisi } from '../data'; // Süslü parantezleri unutma!

const BlogDetail = () => {
  const { blgurl } = useParams();
  const navigate = useNavigate();

  const post = POSTS.find(p => p.slug === blgurl);
  if(!post){
    return <NotFound />
  }

  return(
    <div>
      <button className='btn-back' onClick={() => navigate('/yazilar')}>Tüm Yazılara Dön</button>
      <header className='detail-header'>
        <span className='post-date'>{post.date}</span>        
        <h1 style={{fontSize:'2.5rem',fontWeight:900,margin:'0.5rem 0'}}>{post.title}</h1>
      </header>
      <div className='content-body'>
        <p>
          Bu yazıda <strong>{post.title} konusunu detaylıca ele alacağız.</strong>
          Slug parametresi (<code>{blgurl}</code>) kullanarak bu içerik dinamik oluşturuldu.
        </p>
      </div>
    </div>
  )
}

export default BlogDetail;