var New = document.querySelector(".New");
    var nav = document.querySelector(".nav");
    var links = document.querySelector(".nav li");

    New.addEventListener("click", function () {
        this.classList.New("click");
        nav.classList.New("open");
    })


    var typed = new Typed(".input", {
        strings: ["Frontend Developer", "Youtuber", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop:true
    })


const links = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("section");

links.forEach(link => {
    link.addEventListener("click", e => {
    e.preventDefault();

    const target = link.dataset.target;

    sections.forEach(sec => {
        sec.classList.remove("active");
    });

    document.getElementById(target).classList.add("active");
    });
});


var typed = new Typed(".input", {
    strings: ["Frontend Developer", "Web Designer", "Student"],
    typeSpeed: 80,
    backSpeed: 80,
    loop: true
});

document.addEventListener("DOMContentLoaded", function () {

  var reveals = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    reveals.forEach(function (el) {
      el.classList.add("active");
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, {
    threshold: 0.2
  });

  reveals.forEach(function (el) {
    observer.observe(el);
  });

});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach(el => observer.observe(el));

/* ================= CERTIFICATE MODAL ================= */
const modal = document.getElementById("certModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".cert-item").forEach(item => {
  item.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = item.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});


const karyaBtn = document.querySelector(".btn-box");

if (karyaBtn) {
  karyaBtn.addEventListener("click", e => {
    e.preventDefault();
    document
      .querySelector("#portfolio")
      .scrollIntoView({ behavior: "smooth" });
  });
}

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    status.textContent = "Sending message...";
    status.style.color = "#95f0ef";

    setTimeout(() => {
        status.textContent = "Message sent successfully ✔";
        status.style.color = "#6dd5fa";
        form.reset();
    }, 1200);
});


document.addEventListener("DOMContentLoaded", () => {

    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        reveals.forEach(el => {
            const windowHeight = window.innerHeight;
            const revealTop = el.getBoundingClientRect().top;
            const revealPoint = 120;

            if (revealTop < windowHeight - revealPoint) {
                el.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

    document.querySelectorAll(".media-grid img").forEach(img => {
        img.addEventListener("click", () => {
            window.open(img.src, "_blank");
        });
    });

});

document.body.style.overflow = "hidden";

const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {
    intro.classList.add("hide");

    setTimeout(() => {
        document.body.style.overflow = "auto";
    }, 800);
});

