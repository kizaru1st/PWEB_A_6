# loki_A6
Anggota : 
1. Aini Izzathy Ispendi - 2011522025
2. Fadila Tri Afriani - 2011521011
3. Iqbal Fitrahul Ramadhan - 201152
4. Iqbal Manazil Yuni - 201152
5. Muhammad Reza Rizki Rahmadi - 2011523015

Buatlah sebuah aplikasi untuk mengelola Rencana Pembelajaran Semester (RPS). Codename untuk project ini adalah “LOKI”. Secara umum aplikasi ini digunakan untuk membuat, mengubah, mengubah dan menghapus RPS yang ada di Jurusan. Selain itu sistem ini mampu menampilkan laporan terkait kondisi kurikulum Jurusan. Ada 3 aktor yang menggunakan sistem ini yaitu admin, dosen dan mahasiswa.

Berikut kebutuhan fungsional sistem yang akan dibangun


<!-- TABLE OF CONTENTS -->
<details>
  <summary>Berikut kebutuhan fungsional sistem yang akan dibangun</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a> MySQL - ExpressJS</li>
      </ul>
    </li>
    <li><a href="#usage">Mampu memahami struktur database dan scope project</a></li>
    <li><a href="#roadmap">Mampu membuat web server dan merespon request pengguna dengan menggunakan ExpressJS</a></li>
    <li><a href="#contributing">Mampu mendesain RestFul API dan struktur data JSON yang digunakan untuk aplikasi</a></li>
    <li><a href="#license">Aplikasi sudah terkoneksi ke database</a></li>
    <li><a href="#contact">Aplikasi memiliki fitur login dan logou</a></li>
    <li><a href="#acknowledgments">Aplikasi telah mengimplementasikan seluruh API</a></li>
  </ol>
</details>


1. Pengguna (dosen/admin) dapat login ke dalam system

- Pengguna login ke dalam system dengan menggunakan username dan password

- NIP dosen/pegawai digunakan sebagai username

2. Pengguna (dosen/admin) dapat logout dari system

3. Admin dapat menentukan dosen yang akan membuat/memperbaharui RPS

- Sebuah RPS dalam dibuat oleh beberapa orang dosen dan dosen dapat membuat beberapa RPS.

4. Admin dapat melihat laporan terkait RPS yang ada.

- Peta CPL ke CPMK

- List RPS beserta jumlah revisinya

- Persentase RPS yang menggunakan metode Project Based/Case Based Method

5. Admin dapat mencetak laporan terkait.

- Fitur ini hanya dapat digunakan oleh admin yang telah login.

- Format cetakan dapat berupa printer atau berupa export file PDF.

6. Dosen dapat menambahkan RPS baru

- Fitur ini merupakan fitur yang hanya dapat digunakan oleh dosen yang telah login

- RPS baru dapat ditambahkan jika belum ada RPS untuk mata kuliah tersebut. Jika mata kuliah tersebut telah ada, maka dosen hanya dapat merevisi RPS yang telah ada.

7. Dosen dapat mengubah RPS yang ada

- Fitur ini hanya dapat digunakan oleh dosen yang telah login

- RPS yang dapat diubah oleh dosen hanyalah RPS miliknya sendiri.

8. Dosen dapat melakukan revisi RPS lama menjadi RPS versi berikutnya.

- Revisi hanya dapat dilakukan jika RPS sebelumnya sudah ada

- Revisi dilakukan dengan membuat RPS baru dengan kode revisi +1 dari RPS lama

9. Dosen dapat menambah CPMK mata kuliah

10. Dosen dapat mengubah CPMK mata kuliah

11. Dosen dapat menghapus CPMK mata kuliah

12. Dosen dapat menambah referensi

13. Dosen dapat mengubah referensi

14. Dosen dapat menghapus referensi

15. Dosen dapat menambah komponen penilaian

16. Dosen dapat mengubah komponen penilaian

17. Dosen dapat menghapus komponen penilaian

18. Dosen dapat menambah pertemuan mingguan RPS

19. Dosen dapat mengubah pertemuan mingguan yang ada dalam RPS.

20. Dosen dapat menghapus pertemuan mingguan yang ada dalam RPS

21. Mahasiswa dapat melakukan pencarian berdasarkan nama mata kuliah atau kode matakuliah terhadap RPS yang ada

22. Mahasiswa dapat melihat detail RPS.

23. Pengguna dapat mengeksport RPS matakuliah menjadi PDF

Berikut ini adalah kebutuhan non-fungsional sistem yang dibangun

1. Sistem dibangun dengan menggunakan bahasa pemograman javascript

2. Database yang digunakan untuk sistem ini bisa berupa MySQL atau PostreSQL. Struktur database yang digunakan dalam didowload pada link berikut ini.

3. Front-End menggunakan CSS framework (Bootstrap/Tailwind)

4. Front-End dilarang menggunakan library jQuery
