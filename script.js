let invitationOpened = false;

function openInvitation() {

if (invitationOpened) return;

invitationOpened = true;

const container = document.getElementById("mainContainer");
const envelope = document.getElementById("envelopeWrapper");
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");

document.documentElement.classList.add("invitation-open");
document.body.classList.add("invitation-open");

// Memulai musik
toggleMusic(true);

// Animasi amplop
envelope.classList.add("opening");

// Efek cahaya
slide1.classList.add("cover-opening");

// Setelah animasi amplop berjalan
setTimeout(() => {

    // Membuka scroll setelah amplop terbuka
    container.classList.add("invitation-open");

    // Berpindah ke slide 2
    container.scrollTo({
        top: slide2.offsetTop,
        behavior: "smooth"
    });

    // Memunculkan kartu undangan
    slide2.classList.add("show-invitation");

}, 900);

}


/* =========================================
   MUSIC PLAYER
========================================= */

const bgMusic = document.getElementById("bgMusic");

const musicButton = document.getElementById("musicButton");

const musicIcon = document.getElementById("musicIcon");


function toggleMusic(forcePlay = false) {

    if (bgMusic.paused || forcePlay) {

        bgMusic.play().then(() => {

            musicButton.classList.add("playing");

            musicIcon.className = "fa-solid fa-compact-disc";

        }).catch(error => {

            console.log("Musik belum dapat diputar:", error);

        });

    } else {

        bgMusic.pause();

        musicButton.classList.remove("playing");

        musicIcon.className = "fa-solid fa-music";

    }

}



/* =========================================
   COUNTDOWN PERNIKAHAN
========================================= */

const weddingDate = new Date("2026-12-26T09:00:00+08:00").getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const distance = weddingDate - now;


    if (distance <= 0) {

        document.getElementById("days").textContent = "00";

        document.getElementById("hours").textContent = "00";

        document.getElementById("minutes").textContent = "00";

        document.getElementById("seconds").textContent = "00";

        return;

    }


    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );


    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;

}


updateCountdown();

setInterval(updateCountdown, 1000);



/* =========================================
   COPY REKENING
========================================= */

function copyRekening() {

    const rekening = "708001048088503";

    navigator.clipboard.writeText(rekening)

    .then(() => {

        alert("Nomor rekening berhasil disalin!");

    })

    .catch(() => {

        alert("Tidak dapat menyalin nomor rekening.");

    });

}



/* =========================================
   FALLING FLOWER PETALS
   BERJATUHAN DI SEMUA SLIDE
========================================= */

const slides = document.querySelectorAll(".slide");


slides.forEach((slide) => {
    if (slide.id === "slide1") return;

    for (let i = 0; i < 9; i++) {

        const petal = document.createElement("span");

        petal.classList.add("falling-petal");

        petal.style.left = Math.random() * 100 + "%";

        petal.style.animationDuration =
            (7 + Math.random() * 9) + "s";

        petal.style.animationDelay =
            (Math.random() * 10) + "s";

        petal.style.width =
            (8 + Math.random() * 7) + "px";

        petal.style.height =
            (12 + Math.random() * 9) + "px";

        slide.appendChild(petal);

    }

});
