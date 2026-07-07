# Brew Craft: AI Coffee Alchemy & Kiosk Platform

Brew Craft adalah platform kustomisasi racikan kopi berbasis self-order kiosk yang ditenagai oleh AI mix-and-match engine dan sistem retensi CRM berbasis nomor telepon tanpa memerlukan aplikasi tambahan. Sistem ini mengubah input bahan fisik menjadi profil rasa terkalibrasi, menghasilkan nama produk yang personal, dan mengunci HPP secara presisi.

## Fitur Utama

* **AI Mix-and-Match Engine:** Mengevaluasi keseimbangan rasa dari kombinasi biji kopi, base, modifikator, dan topping secara real-time untuk mencegah cacat rasa.


* **Alchemical Naming Generator:** Memproduksi nama unik yang dinamis untuk setiap racikan baru konsumen berdasarkan komponen yang dipilih.


* **CRM Retensi Otomatis:** Menyimpan resep ke dalam nomor telepon pelanggan dan mengirimkan pengingat cerdas via WhatsApp Business API berdasarkan pola kunjungan.


* **Kontrol HPP Modular:** Mengunci pilihan ke dalam struktur kombinasi pasti (3 Origin x 4 Base x 5 Topping) dengan takaran baku pump/scoop untuk menjamin kecepatan layanan kurang dari 90 detik.



## Arsitektur Pohon Keputusan (Decision Tree)

Sistem memproses pesanan melalui logika bertingkat untuk memastikan konsistensi rasa:

1. **Node 1: Base Selection** -> Menentukan framework tekstur dan suhu (Espresso, Cold Brew, Milk, atau Oatmilk Based).


2. **Node 2: Origin Matching** -> Mewarisi profil rasa utama biji kopi (Sumatra, Toraja, Gayo).


3. **Node 3: Modifier Validation** -> Memeriksa kecocokan rasa dan memicu *Sensory Warning* jika terjadi risiko koagulasi atau ketidakseimbangan rasa.


4. **Node 4: Topping Matrix** -> Penyesuaian akhir untuk kemanisan dan tekstur.


5. **Node 5: Alchemical Naming Engine** -> Pembuatan string nama unik produk.



## Panduan Desain Antarmuka (UI Style Guide)

Antarmuka kiosk mengusung tema *simplistic elegant modern-retro* dengan basis tipografi font **Poppins**.

### Palet Warna

* **Primary Background:** Warm Cream (`#FDFBF7`)


* **Accent & CTA:** Modern Terracotta Orange (`#E06A3B`)


* **Typography Text:** Deep Charcoal Espresso (`#1C1A19`)


* **Secondary Container:** Soft Clay Beige (`#F3EDE4`)



## Skema Payload Integrasi (CRM API)

Ketika transaksi berhasil, sistem mengirimkan struktur data berikut ke gateway CRM untuk disimpan:

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

## Alur Kerja Barista (Barista Ticket)

Setiap pesanan menghasilkan cetakan instruksi perakitan terukur tanpa interpretasi bebas:

* **Langkah 1:** Isi Es Batu skala penuh pada Ice Cup 12oz.


* **Langkah 2:** Tuang Milk Base hingga garis batas 150ml.


* **Langkah 3:** Ekstrak 1 shot Espresso menggunakan biji kopi pilihan (Sumatra).


* **Langkah 4:** Tambahkan 1 scoop Sea Salt Foam.


* **Langkah 5:** Tempel label nama unik dari AI Engine.