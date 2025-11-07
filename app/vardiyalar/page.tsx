// TypeScript tiplerimizi tanımlayalım
type Schedule = {
    id: number;
    date: string;
    user: string;
    shift: string;
  };
  
  // Backend API'dan (Aşama 1'de yaptığımız) veriyi çek
  async function getSchedules(): Promise<Schedule[]> {
    try {
      // Backend API'mızdaki schedules endpoint'ine istek atıyoruz
      const res = await fetch('http://localhost:3001/api/v1/schedules', { 
        cache: 'no-store' // Verilerin hep taze gelmesi için
      });
      
      if (!res.ok) {
         console.error("API'dan vardiya verisi çekilemedi.");
         return [];
      }
      
      return res.json();
  
    } catch (error) {
      if (error instanceof Error) {
        console.error("Fetch hatası:", error.message);
      } else {
        console.error("Bilinmeyen bir fetch hatası oluştu:", error);
      }
      return []; // Hata olursa boş dizi döndür
    }
  }
  
  // Vardiyalar Sayfası Komponenti
  export default async function VardiyalarPage() {
    
    // Fonksiyonu çağırıp verileri alıyoruz
    const schedules = await getSchedules();
  
    return (
      <main style={{ padding: '2rem' }}>
        <h1>Vardiya Çizelgesi</h1>
        
        {/* Bu 'ul' ve 'li' elementleri, 
          daha önce yazdığımız 'vardiya.feature' testinin 
          başarıyla geçmesini (YEŞİL olmasını) sağlayacak.
        */}
        <ul> 
          {schedules.length > 0 ? (
            schedules.map((schedule) => (
              <li key={schedule.id}>
                <strong>Tarih: {schedule.date}</strong> | 
                <span> Çalışan: {schedule.user}</span> | 
                <span> Vardiya: {schedule.shift}</span>
              </li>
            ))
          ) : (
            <li>Gösterilecek vardiya kaydı bulunamadı. (Rails API'n çalışıyor mu?)</li>
          )}
        </ul>
      </main>
    );
  }