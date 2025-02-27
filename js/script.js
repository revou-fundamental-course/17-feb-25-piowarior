
        let index = 0;
        const totalSlides = 7;
        const slidesToShow = 4;
        const slider = document.getElementById('slider');
        const slideWidth = 275; 

        function updateSlide() {
            slider.style.transform = `translateX(${-index * slideWidth}px)`;
        }

        let slideTimer = setInterval(nextSlide, 6000);

        function resetTimer() {
            clearInterval(slideTimer);
            slideTimer = setInterval(nextSlide, 6000);
        }

        function nextSlide() {
            if (index < totalSlides - slidesToShow) {
                index++;
            } else {
                index = 0;
            }
            updateSlide();
            resetTimer();
        }

        function prevSlide() {
            if (index > 0) {
                index--;
            } else {
                index = totalSlides - slidesToShow;
            }
            updateSlide();
            resetTimer();
        }


        document.addEventListener("DOMContentLoaded", () => {
            const banner = document.querySelector('.banner');
        
            const checkBannerVisibility = () => {
                const rect = banner.getBoundingClientRect();
                if (rect.top < window.innerHeight - 100) {
                    banner.classList.add('show');
                }
            };
        
            window.addEventListener('scroll', checkBannerVisibility);
            checkBannerVisibility(); // Biar langsung ngecek waktu pertama load
        });
        


function validasi() {
    
    let nama = document.getElementById("text").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(nama == ""){
        document.getElementById("text_w").innerHTML="masukkan nama kamu !!"
    }
    else{
        document.getElementById("text_w").innerHTML=""
    }

    if(email == ""){
        document.getElementById("email_w").innerHTML="masukkan email kamu !!"
        
    } else{
        document.getElementById("email_w").innerHTML=""
    }

    if(password == ""){
        document.getElementById("password_w").innerHTML="masukkan password kamu !!"
        
    } else{
        document.getElementById("password_w").innerHTML=""
    }

    if(nama == "revoU" && email == "revoU@gmail.com" && password == "revoU123"){
        // window.location.href = "index.html";
        document.getElementById("password_w").innerHTML="Anda Berhasil Validasi!!"
        document.getElementById("password_w").style.color = "green";
    }else{
        document.getElementById("password_w").innerHTML="Anda Salah Memasukkan inputan di Nama atau Email atau Password!!"
        document.getElementById("password_w").style.color = "red";
    }
}



document.getElementById("submit").addEventListener("click", function(){
    validasi();
    event.preventDefault();
})

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const target = document.querySelector('.penjelasan_web');

    const handleScroll = () => {
        const rect = target.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            target.classList.add('show');
        } else {
            target.classList.remove('show'); // Bisa dihapus kalau gak mau animasi ulang pas scroll balik
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Buat langsung aktif kalau udah keliatan saat page load
});


document.addEventListener("DOMContentLoaded", () => {
    const h1 = document.querySelector('.home h1');

    const handleScroll = () => {
        const rect = h1.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            h1.classList.add('show');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Panggil langsung buat cek kalau udah kelihatan pas load
});


document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.our_package');
    const items = document.querySelectorAll('.package1-utama1');
    const h1 = document.querySelector('.our_package_main h1');

    const handleScroll = () => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('show');
            h1.classList.add('show');

            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 150); // delay bertahap biar muncul satu-satu
            });
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Langsung cek pas pertama load
});


function openValidasi() {
    document.getElementById('validasiPopup').classList.add('show');
}

function closeValidasi() {
    document.getElementById('validasiPopup').classList.remove('show');
}


document.getElementById("validasiLink").addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah reload halaman
    document.getElementById("validasiPopup").classList.add("active");
});

function closeValidasi() {
    document.getElementById("validasiPopup").classList.remove("active");
}

document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll(".row");

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        rows.forEach(row => {
            const rowTop = row.getBoundingClientRect().top;

            if (rowTop < triggerBottom) {
                row.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll(); // Jalankan saat halaman dimuat
});
