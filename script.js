// Data lengkap pakaian adat dari Indonesia bagian Timur
// Berisi informasi nama, asal daerah, deskripsi, filosofi, & gambar
const pakaianAdatData = [
    {
        id: 1,
        name: "Laku Tepu",
        origin: "Sulawesi Utara",
        category: "Sulawesi",
        description: "Pakaian adat suku Minahasa yang elegan dengan hiasan emas dan motif khas. Laku Tepu digunakan dalam upacara adat dan pernikahan tradisional Minahasa.",
        philosophy: "Laku Tepu melambangkan keanggunan dan kehormatan dalam budaya Minahasa. Warna cerah dan hiasan emas mencerminkan kemakmuran serta status sosial tinggi pemakainya dalam masyarakat.",
        image: "images/Sulawesi Utara - Laku Tepu.jpg"
    },
    {
        id: 2,
        name: "Baju Kofo",
        origin: "Sulawesi Utara",
        category: "Sulawesi",
        description: "Pakaian adat Sangihe dengan warna cerah dan bordiran khas. Baju Kofo mencerminkan kekayaan budaya kepulauan Sangihe Talaud.",
        philosophy: "Baju Kofo melambangkan identitas maritim masyarakat Sangihe. Motif dan warna yang digunakan merepresentasikan keberanian pelaut dan kekayaan laut Sangihe Talaud.",
        image: "images/Sulawesi Utara - Baju Kofo.jpg"
    },
    {
        id: 3,
        name: "Nggembe",
        origin: "Sulawesi Tengah",
        category: "Sulawesi",
        description: "Pakaian adat wanita suku Kaili dengan kain tenun khas dan aksesoris tradisional. Nggembe melambangkan keanggunan wanita Kaili.",
        philosophy: "Nggembe melambangkan kesucian dan keanggunan wanita Kaili. Setiap motif tenun mengandung makna spiritual yang terkait dengan kepercayaan leluhur dan keseimbangan alam.",
        image: "images/Sulawesi Tengah - Nggembe.jpg"
    },
    {
        id: 4,
        name: "Baju Sabe",
        origin: "Sulawesi Tengah",
        category: "Sulawesi",
        description: "Pakaian adat pria suku Kaili dengan hiasan khas dan warna-warna natural. Baju Sabe menunjukkan kejantanan dan kehormatan pria Kaili.",
        philosophy: "Baju Sabe melambangkan keperkasaan dan tanggung jawab pria sebagai pelindung keluarga. Warna natural mencerminkan kedekatan dengan alam dan kebijaksanaan.",
        image: "images/Sulawesi Tengah - Baju Sabe.jpg"
    },
    {
        id: 5,
        name: "Baju Bodo",
        origin: "Sulawesi Selatan",
        category: "Sulawesi",
        description: "Pakaian adat suku Bugis-Makassar yang simpel namun elegan. Warna Baju Bodo menunjukkan tingkatan usia dan status sosial pemakainya dalam masyarakat.",
        philosophy: "Baju Bodo melambangkan kesederhanaan dan ketulusan hati wanita Bugis-Makassar. Setiap warna memiliki makna: oranye untuk bangsawan, merah untuk pejuang, putih untuk kesucian, hijau untuk kesuburan.",
        image: "images/Sulawesi Selatan - Baju Bodo.jpg"
    },
    {
        id: 6,
        name: "Baju Pokko",
        origin: "Sulawesi Selatan",
        category: "Sulawesi",
        description: "Pakaian adat Toraja dengan hiasan manik-manik dan aksesoris emas. Digunakan dalam upacara Rambu Solo dan Rambu Tuka yang sakral.",
        philosophy: "Baju Pokko melambangkan penghormatan terhadap leluhur dan siklus kehidupan. Hiasan manik-manik mencerminkan perjalanan roh menuju puya (alam baka) dalam kepercayaan Aluk Todolo.",
        image: "images/Sulawesi Selatan - Baju Pokko.jpg"
    },
    {
        id: 7,
        name: "Babu Nggawi",
        origin: "Sulawesi Tenggara",
        category: "Sulawesi",
        description: "Pakaian adat suku Tolaki dengan tenun ikat yang indah dan motif geometris khas. Babu Nggawi adalah warisan budaya Tolaki yang berharga.",
        philosophy: "Babu Nggawi melambangkan keselarasan antara manusia dengan alam. Motif geometris mencerminkan filosofi hidup masyarakat Tolaki tentang keseimbangan dan harmoni sosial.",
        image: "images/Sulawesi Tenggara - Babu Nggawi.jpg"
    },
    {
        id: 8,
        name: "Baju Keraton Buton",
        origin: "Sulawesi Tenggara",
        category: "Sulawesi",
        description: "Pakaian kerajaan Buton yang mewah dengan sulaman emas dan sutra. Mencerminkan kejayaan Kesultanan Buton di masa lampau.",
        philosophy: "Baju Keraton Buton melambangkan kekuasaan dan kebijaksanaan sultan. Sulaman emas mencerminkan kemakmuran kerajaan dan pengaruh Islam yang kuat dalam tata pemerintahan Buton.",
        image: "images/Sulawesi Tenggara - Baju Keraton Buton.jpg"
    },
    {
        id: 9,
        name: "Pattenun Mandar",
        origin: "Sulawesi Barat",
        category: "Sulawesi",
        description: "Pakaian adat Mandar dengan kain tenun sutra khas. Pattenun Mandar terkenal dengan motif kotak-kotak dan warna-warna cerah yang memukau.",
        philosophy: "Pattenun Mandar melambangkan keterampilan dan kesabaran. Proses menenun yang rumit mencerminkan nilai-nilai ketekunan dan ketelitian yang diajarkan turun-temurun dalam keluarga Mandar.",
        image: "images/Sulawesi Barat - Pattenun Mandar.jpg"
    },
    {
        id: 10,
        name: "Bili'u",
        origin: "Gorontalo",
        category: "Gorontalo",
        description: "Pakaian adat wanita Gorontalo dengan sulaman emas yang halus dan elegan. Bili'u mencerminkan kemewahan dan keanggunan budaya Gorontalo.",
        philosophy: "Bili'u melambangkan kehormatan dan martabat wanita Gorontalo. Sulaman emas yang detail mencerminkan kesabaran dan ketekunan wanita dalam menjaga tradisi dan nilai-nilai budaya.",
        image: "images/Gorontalo - Bili'u.jpg"
    },
    {
        id: 11,
        name: "Paluwala",
        origin: "Gorontalo",
        category: "Gorontalo",
        description: "Pakaian adat pria Gorontalo dengan aksesoris keris dan ikat kepala khas. Paluwala melambangkan keberanian dan keperkasaan pria Gorontalo.",
        philosophy: "Paluwala melambangkan keberanian dan kepemimpinan. Keris yang dikenakan bukan hanya senjata, tetapi simbol kehormatan dan tanggung jawab melindungi keluarga serta masyarakat.",
        image: "images/Gorontalo - Paluwala.jpg"
    },
    {
        id: 12,
        name: "Baju Cele",
        origin: "Maluku",
        category: "Maluku",
        description: "Pakaian adat Maluku yang elegan dengan motif garis-garis merah khas. Baju Cele mencerminkan kekayaan budaya maritim kepulauan Maluku.",
        philosophy: "Baju Cele melambangkan persatuan dalam keberagaman. Garis-garis merah mencerminkan keberanian pelaut Maluku yang mengarungi lautan luas dan semangat persaudaraan lintas pulau.",
        image: "images/Maluku - Baju Cele.jpg"
    },
    {
        id: 13,
        name: "Kimun Gia",
        origin: "Maluku Utara",
        category: "Maluku",
        description: "Pakaian adat kesultanan Ternate-Tidore yang mewah dengan kain songket emas. Kimun Gia adalah simbol kejayaan kesultanan Maluku Utara.",
        philosophy: "Kimun Gia melambangkan kejayaan dan kedaulatan kesultanan. Songket emas mencerminkan kekayaan rempah-rempah yang menjadikan Maluku Utara pusat perdagangan dunia di masa lampau.",
        image: "images/Maluku Utara - Kimun Gia.jpg"
    },
    {
        id: 14,
        name: "Tenun Ikat Flores",
        origin: "Nusa Tenggara Timur",
        category: "NTT",
        description: "Pakaian adat Flores dengan tenun ikat khas yang rumit dan penuh makna filosofis. Setiap motif menceritakan kehidupan dan kepercayaan masyarakat Flores.",
        philosophy: "Tenun Ikat Flores melambangkan perjalanan kehidupan dan spiritualitas. Setiap motif seperti naga, pohon kehidupan, dan manusia mencerminkan kosmologi masyarakat tentang hubungan dunia atas dan bawah.",
        image: "images/Nusa Tenggara Timur - Tenun Ikat Flores.jpg"
    },
    {
        id: 15,
        name: "Tenun Ikat Timor",
        origin: "Nusa Tenggara Timur",
        category: "NTT",
        description: "Pakaian adat Timor dengan motif geometris dan warna-warna alami. Tenun ikat Timor mencerminkan identitas suku-suku di pulau Timor.",
        philosophy: "Tenun Ikat Timor melambangkan identitas dan kearifan lokal. Motif geometris mencerminkan tatanan sosial dan hubungan kekerabatan yang kompleks dalam sistem adat Timor.",
        image: "images/Nusa Tenggara Timur - Tenun Ikat Timor.jpg"
    },
    {
        id: 16,
        name: "Tenun Ikat Sumba",
        origin: "Nusa Tenggara Timur",
        category: "NTT",
        description: "Pakaian adat Sumba dengan tenun ikat berkualitas tinggi. Motif Sumba terkenal dengan gambar kuda, tengkorak, dan simbol kehidupan yang unik.",
        philosophy: "Tenun Ikat Sumba melambangkan status sosial dan kepercayaan Marapu. Motif kuda melambangkan kekuatan dan kemakmuran, sedangkan tengkorak merepresentasikan penghormatan pada leluhur.",
        image: "images/Nusa Tenggara Timur - Tenun Ikat Sumba.jpg"
    },
    {
        id: 17,
        name: "Tenun Ikat Alor",
        origin: "Nusa Tenggara Timur",
        category: "NTT",
        description: "Pakaian adat Alor dengan tenun ikat dan motif yang berbeda dari daerah lain di NTT. Mencerminkan keberagaman budaya kepulauan Alor.",
        philosophy: "Tenun Ikat Alor melambangkan keberagaman dan harmoni. Setiap motif mencerminkan identitas suku dan klan tertentu, menunjukkan sistem sosial yang kompleks dan terorganisir.",
        image: "images/Nusa Tenggara Timur - Tenun Ikat Alor.jpg"
    },
    {
        id: 18,
        name: "Lambung",
        origin: "Nusa Tenggara Barat",
        category: "NTB",
        description: "Pakaian adat wanita suku Sasak dari Lombok dengan songket emas yang indah. Lambung adalah simbol keanggunan dan kemewahan budaya Sasak.",
        philosophy: "Lambung melambangkan kesucian dan kehormatan wanita Sasak. Songket emas mencerminkan nilai-nilai Islam yang kuat dan penghargaan terhadap kesederhanaan yang elegan.",
        image: "images/Nusa Tenggara Barat - Lambung.jpg"
    },
    {
        id: 19,
        name: "Pegon",
        origin: "Nusa Tenggara Barat",
        category: "NTB",
        description: "Pakaian adat pria Sasak dengan kain tenun dan destar khas. Pegon menggambarkan keberanian, kehormatan, dan keperkasaan pria Sasak.",
        philosophy: "Pegon melambangkan kejantanan dan tanggung jawab. Destar (ikat kepala) mencerminkan kedewasaan dan kesiapan pria Sasak dalam memimpin keluarga dan masyarakat.",
        image: "images/Nusa Tenggara Barat - Pegon.jpg"
    },
    {
        id: 20,
        name: "Koteka",
        origin: "Papua",
        category: "Papua",
        description: "Pakaian adat pria Papua yang terbuat dari labu kuning kering. Koteka melambangkan kejantanan dan merupakan pakaian tradisional suku Dani dan suku-suku Papua lainnya.",
        philosophy: "Koteka melambangkan kejantanan, kesuburan, dan kedewasaan pria Papua. Ukuran dan bentuk koteka menunjukkan status sosial dan peran dalam masyarakat adat.",
        image: "images/Papua - Koteka.jpg"
    },
    {
        id: 21,
        name: "Rok Rumbai Papua",
        origin: "Papua",
        category: "Papua",
        description: "Pakaian adat wanita Papua dari serat tumbuhan alami. Rok rumbai dilengkapi dengan hiasan kepala dari bulu burung kasuari yang indah.",
        philosophy: "Rok Rumbai melambangkan kesuburan dan peran wanita sebagai pemberi kehidupan. Bulu kasuari mencerminkan kekuatan spiritual dan hubungan sakral dengan alam Papua.",
        image: "images/Papua - Rok Rumbai Papua.jpg"
    },
    {
        id: 22,
        name: "Holim",
        origin: "Papua Barat",
        category: "Papua",
        description: "Pakaian adat suku Arfak berupa koteka khas Papua Barat. Holim dikenakan dengan berbagai aksesoris tradisional dari alam Papua.",
        philosophy: "Holim melambangkan kesederhanaan dan keharmonisan dengan alam. Penggunaan bahan alami mencerminkan kebijaksanaan ekologis suku Arfak dalam menjaga hutan Papua.",
        image: "images/Papua Barat - Holim.jpg"
    },
    {
        id: 23,
        name: "Sali",
        origin: "Papua Barat",
        category: "Papua",
        description: "Rok dari kulit kayu khas suku Arfak. Sali dibuat dengan teknik tradisional dan digunakan oleh wanita dalam berbagai upacara adat.",
        philosophy: "Sali melambangkan kearifan dan kreativitas wanita Papua. Proses pembuatan dari kulit kayu mencerminkan pengetahuan tradisional tentang pemanfaatan sumber daya alam secara berkelanjutan.",
        image: "images/Papua Barat - Sali.jpg"
    },
    {
        id: 24,
        name: "Pakaian Kasuar",
        origin: "Papua Selatan",
        category: "Papua",
        description: "Pakaian adat Papua Selatan dengan aksesoris kerang dan bulu burung kasuar. Mencerminkan hubungan erat masyarakat Papua dengan alam.",
        philosophy: "Pakaian Kasuar melambangkan kekuatan dan keberanian. Bulu kasuar dianggap sakral dan hanya dikenakan oleh kepala suku atau pejuang yang telah membuktikan keberaniannya.",
        image: "images/Papua Selatan - Pakaian Kasuar.jpg"
    },
    {
        id: 25,
        name: "Koteka Dani",
        origin: "Papua Tengah",
        category: "Papua",
        description: "Pakaian adat suku Dani dengan koteka, cat tubuh, dan gelang manik-manik. Setiap warna cat memiliki makna simbolis dalam budaya Dani.",
        philosophy: "Koteka Dani melambangkan identitas dan status dalam masyarakat. Cat tubuh berwarna putih untuk duka, hitam untuk perang, dan merah untuk perayaan, mencerminkan siklus kehidupan.",
        image: "images/Papua Tengah - Koteka Dani.jpg"
    },
    {
        id: 26,
        name: "Koteka Pegunungan",
        origin: "Papua Pegunungan",
        category: "Papua",
        description: "Variasi koteka khas Papua Pegunungan dengan hiasan manik dan bulu cendrawasih. Digunakan dalam upacara adat dan tarian perang.",
        philosophy: "Koteka Pegunungan melambangkan ketahanan dan adaptasi. Bulu cendrawasih yang langka menunjukkan status tinggi dan dihormati dalam masyarakat pegunungan Papua.",
        image: "images/Papua Pegunungan - Koteka Pegunungan.jpg"
    },
    {
        id: 27,
        name: "Rok Rumbai Pegunungan",
        origin: "Papua Pegunungan",
        category: "Papua",
        description: "Rok rumbai wanita Papua Pegunungan dengan hiasan manik dan bulu cendrawasih yang sangat berharga dan langka.",
        philosophy: "Rok Rumbai Pegunungan melambangkan keindahan dan kesucian. Hiasan bulu cendrawasih mencerminkan status sosial tinggi dan peran penting wanita dalam ritual adat.",
        image: "images/Papua Pegunungan - Rok Rumbai Pegunungan.jpg"
    },
    {
        id: 28,
        name: "Pakaian Adat Suku Moi",
        origin: "Papua Barat Daya",
        category: "Papua",
        description: "Pakaian adat suku Moi dengan rok rumbai dan aksesoris dari kerang laut. Mencerminkan kehidupan pesisir masyarakat Sorong Raya.",
        philosophy: "Pakaian Suku Moi melambangkan ketergantungan pada laut dan penghormatan terhadap roh laut. Kerang yang digunakan dipercaya membawa perlindungan dan rezeki.",
        image: "images/Papua Barat Daya - Pakaian Adat Suku Moi.jpg"
    },
    {
        id: 29,
        name: "Rok Rumbai Sorong",
        origin: "Papua Barat Daya",
        category: "Papua",
        description: "Rok rumbai khas Sorong Raya dengan aksesoris kerang dan daun sagu. Pakaian ini menunjukkan kearifan lokal dalam memanfaatkan sumber daya alam.",
        philosophy: "Rok Rumbai Sorong melambangkan kemandirian dan kreativitas. Penggunaan daun sagu mencerminkan penghargaan terhadap pohon sagu sebagai sumber kehidupan utama masyarakat pesisir.",
        image: "images/Papua Barat Daya - Rok Rumbai Sorong.jpg"
    }
];

// Array utk menyimpan item favorit yg dipilih user
let favoritItems = [];

// Array utk menyimpan data yg sudah difilter berdasarkan kategori/pencarian
let filteredData = [...pakaianAdatData];

// Menyimpan kategori filter yg sedang aktif
let currentFilter = 'semua';

// Mengambil elemen-elemen HTML yg akan digunakan
 // Container utk card koleksi
const cardGrid = document.getElementById('cardGrid');

 // Container utk card favorit
const favoritGrid = document.getElementById('favoritGrid');

// Input pencarian
const searchInput = document.getElementById('searchInput');

// Tombol pencarian
const searchBtn = document.getElementById('searchBtn');

 // Semua tombol filter
const filterButtons = document.querySelectorAll('.btn-filter');

// Modal pop-up detail
const modal = document.getElementById('detailModal');

// Tombol tutup modal
const closeModal = document.querySelector('.close-modal');

// Counter jumlah favorit
const totalFavoritSpan = document.getElementById('totalFavorit');

 // Counter total pakaian
const totalPakaianSpan = document.getElementById('totalPakaian');

// Fungsi utk menampilkan card pakaian adat ke dalam grid
function renderCards(data) {
    cardGrid.innerHTML = '';
    const noResult = document.getElementById('noResult');
    
    // kalau data nya a ada, tampilkan pesan "tidak ditemukan"
    if (data.length === 0) {
        noResult.style.display = 'block';
        return;
    }
    
    noResult.style.display = 'none'; // Sembunyikan pesan kalau data nya ada
    
    // Loop setiap item data utk membuat card
    data.forEach(item => {
        // Cek apakah item ini sudah ada di favorit
        const isFavorit = favoritItems.some(fav => fav.id === item.id);
        
        // Buat elemen card baru
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-provinsi">📍 ${item.origin}</p>
                <p class="card-description">${item.description.substring(0, 100)}...</p>
                <div class="card-actions">
                    <button class="btn-detail" data-id="${item.id}">👁 Detail</button>
                    <button class="btn-favorit ${isFavorit ? 'active' : ''}" data-id="${item.id}">
                        ${isFavorit ? '❤ Favorit' : '🤍 Favorit'}
                    </button>
                </div>
            </div>
        `;
        
        cardGrid.appendChild(card); // Tambahkan card ke grid
    });
    
    attachCardEvents(); // Pasang event listener ke semua card
}

// Fungsi utk menampilkan card favorit
function renderFavorit() {
    // kalau ga ada favorit, tampilkan pesan kosong
    if (favoritItems.length === 0) {
        favoritGrid.innerHTML = '<p class="empty-message">Belum ada pakaian adat yang ditandai sebagai favorit</p>';
        return;
    }
    
    favoritGrid.innerHTML = ''; // Kosongkan grid favorit
    
    // Loop setiap item favorit utk membuat card
    favoritItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-provinsi">📍 ${item.origin}</p>
                <p class="card-description">${item.description.substring(0, 100)}...</p>
                <div class="card-actions">
                    <button class="btn-detail" data-id="${item.id}">👁 Detail</button>
                    <button class="btn-favorit active" data-id="${item.id}">❤ Hapus</button>
                </div>
            </div>
        `;
        
        favoritGrid.appendChild(card); // Tambahkan card ke grid favorit
    });
    
    attachCardEvents(); // Pasang event listener
    updateFavoritCounter(); // Update angka counter favorit
}

// Fungsi utk mengupdate angka counter jumlah favorit
function updateFavoritCounter() {
    totalFavoritSpan.textContent = favoritItems.length;
}

// Fungsi utk mengupdate angka total pakaian adat
function updateTotalPakaian() {
    totalPakaianSpan.textContent = pakaianAdatData.length;
}

// Fungsi utk memasang event listener ke tombol-tombol di card
function attachCardEvents() {
    // Event utk tombol "Detail" - menampilkan modal
    const detailButtons = document.querySelectorAll('.btn-detail');
    detailButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Utk mencegah event bubbling
            const id = parseInt(btn.dataset.id);
            showModal(id); // Tampilkan modal dgn id tersebut
        });
    });
    
    // Event utk tombol "Favorit" - toggle favorit
    const favoritButtons = document.querySelectorAll('.btn-favorit');
    favoritButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation(); // Utk mencegah event bubbling
            const id = parseInt(btn.dataset.id);
            toggleFavorit(id); // Toggle status favorit
        });
    });
    
    // Event utk klik di area card (selain tombol) - buka modal
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const detailBtn = card.querySelector('.btn-detail');
        const id = parseInt(detailBtn.dataset.id);
        
        card.addEventListener('click', () => {
            showModal(id); // Tampilkan modal
        });
    });
}

// Fungsi utk menambah/menghapus item dari favorit
function toggleFavorit(id) {
    // Cari data pakaian berdasarkan id
    const item = pakaianAdatData.find(p => p.id === id);
    // Cek apakah sudah ada di array favorit
    const index = favoritItems.findIndex(f => f.id === id);
    
    if (index === -1) {
        // Kalau ga ada, tambahkan ke favorit
        favoritItems.push(item);
        showNotification(`${item.name} ditambahkan ke favorit!`);
    } else {
        // Kalau ada, hapus dari favorit
        favoritItems.splice(index, 1);
        showNotification(`${item.name} dihapus dari favorit`);
    }
    
    // Render ulang tampilan
    renderCards(filteredData);
    renderFavorit();
}

// Fungsi utk menampilkan modal detail pakaian adat
function showModal(id) {
    // Cari data berdasarkan id
    const item = pakaianAdatData.find(p => p.id === id);
    // Cek status favorit
    const isFavorit = favoritItems.some(fav => fav.id === item.id);
    
    // Isi konten modal dgn data item
    document.getElementById('modalImage').src = item.image;
    document.getElementById('modalNama').textContent = item.name;
    document.getElementById('modalProvinsi').textContent = `📍 ${item.origin}`;
    document.getElementById('modalDeskripsi').textContent = item.description;
    document.getElementById('modalFilosofi').textContent = item.philosophy;
    
    // Atur tombol favorit di modal
    const modalFavBtn = document.getElementById('modalFavoritBtn');
    modalFavBtn.textContent = isFavorit ? '❤ Hapus dari Favorit' : '🤍 Tambah ke Favorit';
    modalFavBtn.onclick = () => {
        toggleFavorit(id);
        showModal(id); // Refresh modal setelah toggle
    };
    
    // Tampilkan modal & cegah scroll body
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Fungsi utk menutup modal
function closeModalFunc() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Kembalikan scroll
}

// Fungsi utk filter pakaian berdasarkan provinsi/kategori
function filterByProvinsi(filterValue) {
    currentFilter = filterValue; // Simpan filter yg aktif
    
    // Filter data berdasarkan nilai yg dipilih
    if (filterValue === 'semua') {
        filteredData = [...pakaianAdatData]; // Tampilkan semua
    } else if (filterValue === 'sulawesi') {
        filteredData = pakaianAdatData.filter(item => item.category === 'Sulawesi');
    } else if (filterValue === 'gorontalo') {
        filteredData = pakaianAdatData.filter(item => item.category === 'Gorontalo');
    } else if (filterValue === 'maluku') {
        filteredData = pakaianAdatData.filter(item => item.category === 'Maluku');
    } else if (filterValue === 'ntt') {
        filteredData = pakaianAdatData.filter(item => item.category === 'NTT');
    } else if (filterValue === 'ntb') {
        filteredData = pakaianAdatData.filter(item => item.category === 'NTB');
    } else if (filterValue === 'papua') {
        filteredData = pakaianAdatData.filter(item => item.category === 'Papua');
    }
    
    renderCards(filteredData); // Tampilkan hasil filter
}

// Fungsi utk mencari pakaian adat berdasarkan keyword
function searchPakaian() {
    const keyword = searchInput.value.toLowerCase().trim(); // Ambil keyword & ubah ke huruf kecil
    
    if (keyword === '') {
        // Kalau kosong, kembalikan ke filter sebelumnya
        if (currentFilter === 'semua') {
            filteredData = [...pakaianAdatData];
        } else {
            filterByProvinsi(currentFilter);
            return;
        }
    } else {
        // Cari berdasarkan nama, provinsi, kategori, atau deskripsi
        filteredData = pakaianAdatData.filter(item => 
            item.name.toLowerCase().includes(keyword) ||
            item.origin.toLowerCase().includes(keyword) ||
            item.category.toLowerCase().includes(keyword) ||
            item.description.toLowerCase().includes(keyword)
        );
        
        // Kalau ada hasil, reset filter ke "Semua"
        if (filteredData.length > 0) {
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                if (btn.dataset.filter === 'semua') {
                    btn.classList.add('active');
                }
            });
            currentFilter = 'semua';
        }
    }
    
    renderCards(filteredData); // Tampilkan hasil pencarian
    
    // Auto-scroll ke hasil pencarian
    if (keyword !== '') {
        setTimeout(() => {
            const cardGrid = document.getElementById('cardGrid');
            if (cardGrid) {
                const headerHeight = document.querySelector('.header-batik')?.offsetHeight || 0;
                const filterSection = document.querySelector('.filter-container')?.offsetHeight || 0;
                const offset = 100;
                const elementPosition = cardGrid.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }, 100);
    }
}

// Fungsi utk menampilkan notifikasi pop-up
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #8B4513, #A0522D);
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3);
        z-index: 3000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
        border: 2px solid #DAA520;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Hapus notifikasi setelah 2.5 detik
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 2500);
}

// Event utk tombol filter (Semua, Sulawesi, Gorontalo, dll)
filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // Hapus class 'active' dari semua tombol
        filterButtons.forEach(b => b.classList.remove('active'));
        // Tambah class 'active' ke tombol yg diklik
        btn.classList.add('active');
        
        // Jalankan filter berdasarkan data-filter tombol
        const filter = btn.dataset.filter;
        filterByProvinsi(filter);
        searchInput.value = ''; // Kosongkan input pencarian
    });
});

// Event utk tombol search
searchBtn.addEventListener('click', searchPakaian);

// Event utk tekan Enter di input search
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchPakaian();
    }
});

// Event utk menghapus pencarian saat input kosong
searchInput.addEventListener('input', () => {
    if (searchInput.value === '') {
        searchPakaian();
    }
});

// Event utk tombol close modal
closeModal.addEventListener('click', closeModalFunc);

// Event utk klik di luar modal
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalFunc();
    }
});

// Event utk tekan tombol Escape utk tutup modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModalFunc();
    }
});

// Smooth scroll saat pencet "Mulai Menjelajah"
function initSmoothScroll() {
    const btn = document.getElementById('mulaiJelajah');
    if (!btn) return;

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Scroll ke section koleksi dgn animasi smooth
        const koleksiSection = document.getElementById('koleksi');
        if (koleksiSection) {
            const headerHeight = document.querySelector('.header-batik')?.offsetHeight || 0;
            const offset = 20;
            const elementPosition = koleksiSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // Tambahkan animasi bounce pd judul section
            const sectionTitle = koleksiSection.querySelector('.section-title');
            if (sectionTitle) {
                sectionTitle.style.animation = 'none';
                setTimeout(() => {
                    sectionTitle.style.animation = 'bounceIn 0.6s ease';
                }, 10);
            }
        }
    });

    console.log('✅ Smooth scroll initialized');
}

// Smooth scroll utk link navigasi (Beranda, Koleksi, Favorit)
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const headerHeight = document.querySelector('.header-batik')?.offsetHeight || 0;
            const offset = 20;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        
        // Update active state link navigasi
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Fungsi utk inisialisasi aplikasi
function initApp() {
    // Render tampilan awal
    renderCards(pakaianAdatData);
    renderFavorit();
    updateFavoritCounter();
    updateTotalPakaian();
    
    // Tambahkan CSS animasi utk notifikasi
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
        
        @keyframes bounceIn {
            0%, 20%, 40%, 60%, 80%, 100% {
                transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
            }
            0% {
                opacity: 0;
                transform: scale3d(.3, .3, .3);
            }
            20% {
                transform: scale3d(1.1, 1.1, 1.1);
            }
            40% {
                transform: scale3d(.9, .9, .9);
            }
            60% {
                opacity: 1;
                transform: scale3d(1.03, 1.03, 1.03);
            }
            80% {
                transform: scale3d(.97, .97, .97);
            }
            100% {
                opacity: 1;
                transform: scale3d(1, 1, 1);
            }
        }
    `;
    document.head.appendChild(style);
    
    console.log('Aplikasi Pakaian Adat Indonesia Timur berhasil dimuat!');
    console.log(`Total pakaian adat: ${pakaianAdatData.length}`);
}

// Efek parallax saat mouse bergerak di hero section
function initHeroParallax() {
    const heroSection = document.querySelector('.hero-section');
    const heroContent = document.querySelector('.hero-content');
    
    if (!heroSection || !heroContent) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    // Tangkap pergerakan mouse
    heroSection.addEventListener('mousemove', (e) => {
        const rect = heroSection.getBoundingClientRect();
        // Konversi posisi mouse ke nilai -1 sampai 1
        mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    });

    // Fungsi animasi parallax (smooth follow)
    function animate() {
        // Smooth interpolation utk efek yg halus
        currentX += (mouseX - currentX) * 0.08;
        currentY += (mouseY - currentY) * 0.08;

        // Gerakkan bg
        const bgMoveX = currentX * 25;
        const bgMoveY = currentY * 25;
        heroSection.style.backgroundPosition = 
            `calc(50% + ${bgMoveX}px) calc(50% + ${bgMoveY}px)`;

        // Gerakkan konten dgn arah berlawanan
        const contentMoveX = currentX * -12;
        const contentMoveY = currentY * -12;
        heroContent.style.transform = 
            `translate(${contentMoveX}px, ${contentMoveY}px)`;

        requestAnimationFrame(animate);
    }

    animate();

    // Reset posisi saat mouse keluar
    heroSection.addEventListener('mouseleave', () => {
        mouseX = 0;
        mouseY = 0;
    });

    console.log('✅ Parallax mouse effect activated');
}

// Efek mengambang pd tombol "Mulai Menjelajah"
function initButtonFloat() {
    const btn = document.getElementById('mulaiJelajah');
    if (!btn) return;

    let floatPos = 0;
    let direction = 1;

    function floatAnimation() {
        floatPos += 0.03 * direction;
        
        // Balik arah kalau mencapai batas
        if (floatPos > 8) direction = -1;
        if (floatPos < -8) direction = 1;

        btn.style.transform = `translateY(${floatPos}px)`;
        requestAnimationFrame(floatAnimation);
    }

    floatAnimation();
    console.log('✅ Button float animation activated');
}

// Efek zoom in-out pd bg hero
function initBackgroundZoom() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    let scale = 1;
    let zoomDirection = 1;

    function zoomAnimation() {
        scale += 0.00008 * zoomDirection;
        
        // Balik arah zoom
        if (scale >= 1.05) zoomDirection = -1;
        if (scale <= 1) zoomDirection = 1;

        heroSection.style.backgroundSize = `${scale * 110}%`;
        requestAnimationFrame(zoomAnimation);
    }

    zoomAnimation();
    console.log('✅ Background zoom effect activated');
}

// Efek parallax saat scroll
function initScrollParallax() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    let ticking = false; // Utk optimasi performa

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                const scrolled = window.pageYOffset;
                const heroHeight = heroSection.offsetHeight;
                
                // Terapkan efek parallax & fade out saat scroll
                if (scrolled < heroHeight) {
                    const parallaxSpeed = 0.4;
                    const opacity = 1 - (scrolled / heroHeight);
                    heroSection.style.transform = 
                        `translateY(${scrolled * parallaxSpeed}px)`;
                    heroSection.style.opacity = Math.max(opacity, 0);
                } else {
                    heroSection.style.opacity = '0';
                }
                
                ticking = false;
            });
            ticking = true;
        }
    });

    console.log('✅ Scroll parallax activated');
}

// Efek kilau (sparkle) pd hero section
function initSparkleEffect() {
    const heroSection = document.querySelector('.hero-section');
    if (!heroSection) return;

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random size, posisi, & durasi
        const size = Math.random() * 4 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 2 + 1;
        
        sparkle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255, 215, 0, 0.8);
            border-radius: 50%;
            left: ${posX}%;
            top: ${posY}%;
            pointer-events: none;
            z-index: 3;
            animation: sparkleAnim ${duration}s ease-out forwards;
        `;
        
        heroSection.appendChild(sparkle);
        // Hapus elemen setelah animasi selesai
        setTimeout(() => sparkle.remove(), duration * 1000);
    }

    // Buat sparkle baru setiap 800ms
    setInterval(createSparkle, 800);
    
    // Tambahkan CSS animasi sparkle
    if (!document.getElementById('sparkleStyle')) {
        const style = document.createElement('style');
        style.id = 'sparkleStyle';
        style.textContent = `
            @keyframes sparkleAnim {
                0% {
                    opacity: 0;
                    transform: scale(0) translateY(0);
                }
                50% {
                    opacity: 1;
                }
                100% {
                    opacity: 0;
                    transform: scale(1.5) translateY(-50px);
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    console.log('✨ Sparkle effect activated');
}

// Inisialisasi semua efek hero
function initAllHeroEffects() {
    setTimeout(() => {
        initHeroParallax();
        initButtonFloat();
        initBackgroundZoom();
        initScrollParallax();
        initSparkleEffect();
        initSmoothScroll();
        
        console.log('🎨 All hero effects initialized successfully!');
    }, 100);
}

// Jalankan aplikasi saat DOM sudah siap
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        initApp();
        initAllHeroEffects();
    });
} else {
    // Kalau DOM sudah ready, langsung jalankan
    initApp();
    initAllHeroEffects();
}