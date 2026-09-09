document.addEventListener("DOMContentLoaded", function() {
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookie');

    // Cek apakah user sudah pernah klik 'Accept' sebelumnya
    if (!localStorage.getItem('cookieAccepted')) {
        cookieBanner.style.display = 'block';
    }

    // Kalau tombol Accept diklik, banner ketutup dan disimpan di memori browser
    acceptBtn.addEventListener('click', function() {
        localStorage.setItem('cookieAccepted', 'true');
        cookieBanner.style.display = 'none';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Efek jalan pas card muncul 15% di layar HP
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                // Kalau mau animasinya cuma sekali pas pertama kali di-scroll, biarin baris bawah aktif:
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Daftarin semua card yang punya kelas animasi
    document.querySelectorAll('.card-scroll-effect').forEach(card => {
        observer.observe(card);
    });
});