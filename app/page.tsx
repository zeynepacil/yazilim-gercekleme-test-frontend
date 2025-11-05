// TypeScript'e 'post' objesinin neye benzediğini anlatalım
type Post = {
  id: number;
  title: string;
  body: string; // <-- HATA 1 BURADAYDI: 'content' idi, 'body' olarak DÜZELTİLDİ
};

// Ruby on Rails API'mızdan veriyi çekecek async fonksiyon
async function getPosts(): Promise<Post[]> {
  
  try {
    const res = await fetch('http://localhost:3001/api/v1/posts', { 
      cache: 'no-store' 
    }); 

    if (!res.ok) {
      console.error("API'dan veri çekilemedi. Durum:", res.status);
      return [];
    }
    
    const data = await res.json();
    return data;

  } catch (error) {
    if (error instanceof Error) {
      console.error("Fetch hatası:", error.message);
    } else {
      console.error("Bilinmeyen bir fetch hatası oluştu:", error);
    }
    return [];
  }
}

// Ana Sayfa Komponentimiz
export default async function HomePage() {
  
  const posts = await getPosts();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Blog Yazılarım (Next.js Frontend)</h1>
      
      <ul className="blog-listesi"> 
        
        {posts.length > 0 ? (
          posts.map((post) => ( 
            <li key={post.id}>
              <h3>{post.title}</h3>
              
              <p>{post.body}</p> 
            </li>
          ))
        ) : (
          <li>Yüklenecek blog yazısı bulunamadı. (Rails API'n çalışıyor mu?)</li>
        )}

      </ul>
      
    </main>
  );
}