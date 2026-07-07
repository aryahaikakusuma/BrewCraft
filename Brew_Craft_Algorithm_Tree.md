# Brew Craft: Mix-and-Match Algorithm Tree Specification
## Modul Alkimia Kopi & Personalisasi Rasa Kiosk

---

## 1. Tujuan Sistem (System Objectives)
* **Standardisasi Rasa Otomatis:** Menggantikan peran intuisi subjektif barista dengan matriks keputusan logis, memastikan kombinasi kustomisasi tetap seimbang dan layak minum.
* **Pengendalian Operasional & HPP:** Mengunci pilihan pengguna ke dalam struktur modular (3x4x5) sautu takaran baku (pump/scoop) untuk mencegah pemborosan bahan baku dan penurunan kecepatan layanan.
* **Diferensiasi Retensi Pelanggan:** Mengubah data pilihan fisik menu menjadi output emosional berupa nama unik dan profil rasa terkalibrasi yang langsung disimpan ke basis data nomor telepon pelanggan.

---

## 2. Ekspektasi Hasil (Expected Outputs)
* **User Interface UI Kiosk:** Alur pemesanan linier berorientasi pohon keputusan yang mendikte langkah demi langkah konsumen tanpa memicu kelumpuhan pilihan (choice paralysis).
* **Alchemical Naming Engine:** Output nama minuman kustom yang dinamis, relevan dengan kombinasi bahan, dan memiliki daya tarik pemasaran personal.
* **Barista Ticket Printout:** Manifest resep presisi dalam satuan pump/scoop mutlak yang siap dieksekusi kurang dari 90 detik per cangkir.
* **Sensory Warning Trigger:** Notifikasi real-time jika pengguna memilih kombinasi bahan yang berpotensi merusak tekstur atau menghasilkan rasa tidak lazim (cacat rasa).

---

## 3. Logika & Arsitektur Algorithm Tree

Arsitektur ini menggunakan pendekatan logika pohon keputusan berjenjang (nested conditional logic) berbasis parameter sensoris kopi riil.

### Visualisasi Alur Pohon Keputusan (Decision Tree)

```
[START: Kiosk Order]
        │
        ▼
[NODE 1: BASE SELECTION] ───► Determines Texture & Temperature Framework
        │
        ├──► Espresso Based (High Intensity, Hot/Ice)
        ├──► Cold Brew Based (Low Acidity, Light Body, Ice)
        ├──► Milk Based (Dairy-Heavy, Creamy, Hot/Ice)
        └──► Oatmilk Based (Nutty, Plant-Based, Hot/Ice)
        │
        ▼
[NODE 2: ORIGIN MATCHING] ───► Inherits Primary Flavor Profiles
        │
        ├──► Sumatra ───► [Profile: Bold, Earthy, Low Acid]
        ├──► Toraja  ───► [Profile: Spicy, Medium Body, Balanced]
        └──► Gayo    ───► [Profile: Fruity, Floral, High Acid]
        │
        ▼
[NODE 3: MODIFIER VALIDATION] ───► Flavor Harmonization Engine (Syrup & Fruits)
        │
        ├──► Check Compatibility Matrix (Base x Origin x Modifier)
        ├──► PASS ───► Proceed to Node 4
        └──► FAIL ───► Trigger Sensory Warning Box & Suggest Alternative
        │
        ▼
[NODE 4: TOPPING MATRIX] ───► Final Texture & Sweetness Adjustment
        │
        └──► Whipped / Sea Salt / Oat Foam / Choco Drizzle / Spice Mix
        │
        ▼
[NODE 5: ALCHEMICAL NAMING ENGINE]
        │
        ▼
[OUTPUT: Resep Barista (HPP) + Nama Unik + Save to CRM Phone Number]
```

---

## 4. Matriks Aturan Gabungan (Pairing & Rule Engine)

Algoritma memeriksa keselarasan rasa berdasarkan data preferensi barista profesional menggunakan aturan berikut:

### Aturan 1: Pembatasan Koagulasi Asam (Acidity vs Dairy Rule)
* **Kondisi:** Jika Pengguna memilih `Base: Milk Based` ATAU `Oatmilk Based` DAN `Modifier: Infused Fruit (Citrus/Orange/Lemon)`.
* **Logika Algoritma:** TRIGGER WARNING. Bahan asam tinggi dicampur susu susu/nabati hangat berisiko pecah tekstur dan merusak penampilan.
* **Solusi Otomatis Sistem:** Menyarankan pengalihan ke `Base: Cold Brew Based` atau mengganti buah dengan `Syrup: Caramel/Vanilla`.

### Aturan 2: Penyeimbang Rasa Pahit Pekat (Bitterness Balancing Rule)
* **Kondisi:** Jika Pengguna memilih `Origin: Sumatra` DAN `Base: Espresso Based` DAN `Topping: Spice Mix`.
* **Logika Algoritma:** EVALUASI "Overly Bitter & Earthy". Kombinasi ini terlalu berat untuk konsumen awam.
* **Solusi Otomatis Sistem:** Mewajibkan penambahan minimal 1 pump `Syrup: Vanilla` atau `Topping: Whipped cream` sebagai pelunak rasa pahit. Nama minuman akan diarahkan ke klaster rasa "Gahar/Bold".

### Aturan 3: Optimalisasi Karakter Buah (Fruity Optimization Rule)
* **Kondisi:** Jika Pengguna memilih `Origin: Gayo` DAN `Base: Cold Brew Based` DAN `Modifier: Infused Fruit Fruit`.
* **Logika Algoritma:** EXCELLENT MATCH. Karakter floral Gayo berpadu sempurna dengan metode ekstraksi dingin dan buah segar.
* **Solusi Otomatis Sistem:** Memberikan rekomendasi badge "Barista Choice Pick" di layar kiosk untuk memvalidasi pilihan konsumen.

---

## 5. Logika Penamaan Alkimia (Alchemical Naming Matrix)

Nama unik dihasilkan melalui penggabungan string dinamis berdasarkan klaster komponen yang dipilih. Rumus dasarnya adalah:

`[Kata Sifat Karakter Origin/Base] + [Subjek Alkimia/Mistik] + [Identitas Rasa Dominan]`

### Tabel Komponen Penamaan (Naming Database Matrix)

| Komponen Terpilih | Kata Sifat (Prefix) | Subjek (Core) | Identitas Akhir (Suffix) |
| :--- | :--- | :--- | :--- |
| **Origin: Sumatra** | Gahar, Jiwa, Semesta | Eliksir, Mantra | Hitam, Pekat, Jagad |
| **Origin: Gayo** | Senja, Flora, Riang | Sulingan, Ramuan | Molekul, Tropis, Kasturi |
| **Origin: Toraja** | Rempah, Mistis, Mulia | Artefak, Serum | Khatulistiwa, Karat |
| **Base: Cold Brew** | Beku, Teduh, Senyap | Kristal, Aliran | Lab, Fajar, Esensi |
| **Topping: Sea Salt Foam** | Asin, Ombak, Badai | Puncak, Mahkota | Swara, Segara |
| **Topping: Choco Drizzle** | Manis, Legit, Beludru | Karunia, Nebula | Pekat, Arang |

### Contoh Kasus Output Algoritma Penamaan:

1. **Kasus A (Menu Segar & Floral):**
   * Pilihan: Gayo + Cold Brew Based + Infused Fruit Berry.
   * Proses String Engine: `Senja` (Gayo Prefix) + `Sulingan` (Cold Brew Core) + `Tropis` (Fruit Suffix).
   * **Nama Hasil Al: "Senja Sulingan Tropis"**
   * Deskripsi di Layar: *"Sulingan kopi dingin Gayo berkarakter buah segar dengan tingkat keasaman cerah terkalibrasi."*

2. **Kasus B (Menu Berat & Creamy):**
   * Pilihan: Sumatra + Espresso Based + Milk Based + Sea Salt Foam.
   * Proses String Engine: `Semesta` (Sumatra Prefix) + `Eliksir` (Espresso Core) + `Segara` (Sea Salt Suffix).
   * **Nama Hasil Al: "Semesta Eliksir Segara"**
   * Deskripsi di Layar: *"Ekstraksi espresso Sumatra pekat berpadu sapuan krim gurih ombak laut selatan."*

---

## 6. Integrasi CRM & Sistem Tiket Barista

Setelah pohon keputusan mencapai ujung daun (`[NODE 5]`), sistem melakukan dua aksi paralel:

### Aksi 1: Registrasi Database Pelanggan (CRM Gateway)
Sistem menyimpan array data berikut ke nomor WhatsApp pengguna:
```json
{
  "customer_phone": "081234567890",
  "saved_recipe": {
    "recipe_id": "BC-2026-X99",
    "ai_name": "Semesta Eliksir Segara",
    "components": ["Sumatra", "Espresso", "Milk", "Sea Salt Foam"],
    "metrics": {"bitterness": 8, "acidity": 2, "sweetness": 5}
  }
}
```

### Aksi 2: Cetak Tiket Fisik Konstruksi Modular (Barista Ticket)
Barista menerima instruksi perakitan berbasis volume tetap, bukan deskripsi abstrak:
* **Ambil Gelas Saji: Ice Cup 12oz**
* **Langkah 1:** Isi Es Batu skala penuh.
* **Langkah 2:** Tuang Milk Base hingga garis batas 150ml.
* **Langkah 3:** Ekstrak 1 shot Espresso (Beans: Sumatra).
* **Langkah 4:** Tuang Topping: 1 scoop Sea Salt Foam (Preserved shift harian).
* **Tempel Label:** "Semesta Eliksir Segara - Racikan Rahasia Milik [Nama Pengguna]"

---

## 7. Spesifikasi Desain Antarmuka (UI Style Guide Kiosk)

Bagian ini mengatur implementasi visual pada layar kiosk untuk memastikan keselarasan dengan identitas brand Brew Craft yang modern-retro, simplistic, dan elegant.

### A. Palet Warna Resmi (Brand Color Palette)
* **Warna Latar Utama (Primary Background):** Warm Cream (`#FDFBF7`) - Memberikan kesan bersih, premium, dan nyaman di mata untuk penggunaan kiosk jangka panjang.
* **Warna Aksen & Aksi (Accent & Call-to-Action):** Modern Terracotta Orange (`#E06A3B`) - Digunakan eksklusif untuk elemen interaktif, tombol konfirmasi, status aktif, dan sorotan utama alkimia.
* **Warna Teks Utama (Typography/Neutral Dark):** Deep Charcoal Espresso (`#1C1A19`) - Menggantikan warna hitam pekat murni untuk menjaga kelembutan kontras pada layar digital.
* **Warna Elemen Sekunder (Secondary Neutral):** Soft Clay Beige (`#F3EDE4`) - Digunakan untuk latar belakang kartu pilihan yang belum dipilih (inactive state) atau pembatas kontainer.

### B. Sistem Tipografi Dasar (Typography System)
Seluruh antarmuka menggunakan keluarga font Poppins untuk menjaga kerapian struktural antar-halaman kiosk:
* **Header Utama (H1 - Judul Layar Utama):** Poppins SemiBold / 32px / Tracking -0.02em / Warna: Deep Charcoal Espresso.
* **Sub-Header (H2 - Nama Kategori / Keterangan Node):** Poppins Medium / 20px / Warna: Modern Terracotta Orange.
* **Teks Kartu Pilihan (Card Label):** Poppins SemiBold / 16px / Warna: Deep Charcoal Espresso (Aktif) atau Muted Grey (Inaktif).
* **Teks Deskripsi & Body:** Poppins Regular / 14px / Line-height 1.5 / Warna: Deep Charcoal Espresso.

### C. Komponen UI & Status Elemen (Component States)
1. **Kartu Pilihan Modular (Base/Origin/Topping Cards):**
   * *Default State:* Latar belakang Soft Clay Beige, tanpa border shadow, teks Poppins Regular. Clean dan minimalis.
   * *Active/Selected State:* Latar belakang Warm Cream, border garis tipis 2px Modern Terracotta Orange, teks beralih ke Poppins SemiBold. Memiliki indikator centang minimalis di sudut kanan atas kartu.
2. **Tombol Aksi Utama (Primary CTA Button - "Lanjut" / "Simpan Racikan"):**
   * Bentuk solid persegi dengan corner radius minimalis (8px) untuk mempertahankan estetika geometri klasik.
   * Warna dasar Modern Terracotta Orange dengan teks Poppins Bold berwarna Warm Cream. Tidak menggunakan gradasi warna atau efek 3D berlebihan untuk menjaga kesan premium.
3. **Kotak Peringatan Sensoris (Sensory Warning Box):**
   * Muncul secara pop-up halus saat aturan pembatasan rasa terpicu pada Node 3.
   * Desain: Kontainer flat berwarna Warm Cream dengan outline solid Terracotta Orange. Teks deskripsi kegagalan rasa ditulis menggunakan Poppins Medium berwarna Terracotta Orange pekat untuk memberikan peringatan yang komunikatif sekaligus estetik.
