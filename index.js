  // Scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

  // Waitlist form
  const btn = document.querySelector('.waitlist-form button');
  const input = document.querySelector('.waitlist-form input');

  btn.addEventListener('click', () => {
    const email = input.value.trim();
    if (!email || !email.includes('@')) {
      input.style.background = 'rgba(200,0,0,0.2)';
      setTimeout(() => input.style.background = '', 800);
      return;
    }
    btn.textContent = '✓ You\'re in!';
    btn.style.background = '#1a1a1a';
    input.value = '';
    input.placeholder = 'Welcome to Offmark.';
    setTimeout(() => {
      btn.textContent = 'Join Now';
      input.placeholder = 'Enter your email address';
    }, 4000);
  });

  // Nav active state
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });
    navLinks.forEach(link => {
      link.style.color = link.getAttribute('href') === '#' + current ? 'var(--orange)' : '';
    });
  });


  // Solidify navbar on scroll
window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})



// toogle menu

document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".nav-links");
    const menuBtn = document.querySelector("#open-menu-btn");
    const closeBtn = document.querySelector("#close-menu-btn");

    // Reusable close function
    const closeMenu = () => {
        menu.classList.add('hidden');

        // Wait for animation to finish before hiding
        menu.addEventListener('animationend', () => {
            menu.style.display = "none";
            menu.classList.remove('hidden');
            menuBtn.style.display = "inline-block";
            closeBtn.style.display = "none";
        }, { once: true }); // 'once' auto-removes listener after it fires
    };

    menuBtn.addEventListener("click", () => {
        menu.style.display = "flex";
        menuBtn.style.display = "none";
        closeBtn.style.display = "inline-block";
    });

    closeBtn.addEventListener("click", closeMenu);

    // Scroll listener
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50 && menu.style.display === "flex") {
            closeMenu();
        }
    });
});



// custom cursor
 const cursor = document.getElementById('custom-cursor');
  let visible = false;

  document.addEventListener('mousemove', e => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    if (!visible) { cursor.style.opacity = '1'; visible = true; }
  });

  document.addEventListener('mouseleave', () => {
    cursor.style.opacity = '0';
    visible = false;
  });

  document.addEventListener('mouseenter', () => {
    cursor.style.opacity = '1';
    visible = true;
  });




  // curtain 
 /* Swipe UP on load — reveal the page */
    window.addEventListener('DOMContentLoaded', () => {
      requestAnimationFrame(() => {
        document.getElementById('curtain').classList.add('up');
      });
    });
 
    /* Call this for every link/button instead of href */
    function navigateTo(url) {
      const curtain = document.getElementById('curtain');
      curtain.classList.remove('up');
      curtain.classList.add('down');          // swipe DOWN to cover page
 
      setTimeout(() => {
        window.location.href = url;           // go to new page (swipe UP fires on load there)
      }, 800);                                // wait for animation to finish
    }




const HERO_IMGS = [
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=75',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=75',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=75',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=75',
  'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1600&q=75',
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=75',
];

const ABOUT_IMGS = [
  'https://images.unsplash.com/photo-1590492214734-5e7a15e16f59?w=1400&q=75',
  'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1400&q=75',
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1400&q=75',
  'https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?w=1400&q=75',
  'https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=1400&q=75',
];

const ANNOUNCE_IMGS = [
  'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1600&q=75',
  'https://images.unsplash.com/photo-1521577352947-9bb58764b69a?w=1600&q=75',
  'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1600&q=75',
  'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1600&q=75',
  'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1600&q=75',
];

const PLATFORM_IMGS = [
  'Images/White/one.png',
  'Images/White/two.png',
  'Images/White/three.png',
  'Images/White/four.jpg',
  'Images/White/five.png',
  'Images/Black/six.jpg',
  'Images/Black/seven.png',
  'Images/Black/eight.png',
];

const FOUNDER_TOOL_IMGS = [
  { src: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&q=70', top: '4%',  left: '1%',   rot: -5  },
  { src: 'https://images.unsplash.com/photo-1584859600292-9cb72a2f1a41?w=300&q=70', top: '6%',  left: '17%',  rot:  4  },
  { src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300&q=70', top: '2%',  left: '33%',  rot: -3  },
  { src: 'https://images.unsplash.com/photo-1504507926084-34cf0b939964?w=300&q=70', top: '5%',  left: '50%',  rot:  6  },
  { src: 'https://images.unsplash.com/photo-1545315003-c5ad6226c272?w=300&q=70', top: '3%',  left: '67%',  rot: -7  },
  { src: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&q=70', top: '4%',  left: '84%',  rot:  3  },
  { src: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&q=70', top: '62%', left: '2%',   rot:  5  },
  { src: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300&q=70', top: '65%', left: '19%',  rot: -4  },
  { src: 'https://images.unsplash.com/photo-1504507926084-34cf0b939964?w=300&q=70', top: '60%', left: '36%',  rot:  7  },
  { src: 'https://images.unsplash.com/photo-1545315003-c5ad6226c272?w=300&q=70', top: '63%', left: '53%',  rot: -6  },
  { src: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&q=70', top: '61%', left: '70%',  rot:  4  },
  { src: 'https://images.unsplash.com/photo-1584859600292-9cb72a2f1a41?w=300&q=70', top: '64%', left: '86%',  rot: -5  },
];

const WAITLIST_IMGS = [
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1600&q=75',
  'https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=1600&q=75',
  'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1600&q=75',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=1600&q=75',
];

// ── HERO SLIDESHOW ──────────────────────────────────────
(function() {
  const container = document.getElementById('heroSlides');
  const dotsEl    = document.getElementById('heroDots');
  let current = 0;

  HERO_IMGS.forEach((src, i) => {
    const s = document.createElement('div');
    s.className = 'hero-slide' + (i===0?' active':'');
    s.style.backgroundImage = `url(${src})`;
    container.appendChild(s);

    const d = document.createElement('button');
    d.className = 'hero-dot' + (i===0?' active':'');
    d.addEventListener('click', () => { goTo(i); });
    dotsEl.appendChild(d);
  });

  function goTo(idx) {
    container.children[current].classList.remove('active');
    dotsEl.children[current].classList.remove('active');
    current = idx;
    container.children[current].classList.add('active');
    dotsEl.children[current].classList.add('active');
  }

  setInterval(() => goTo((current+1) % HERO_IMGS.length), 4200);
})();

// ── ABOUT SLIDESHOW ─────────────────────────────────────
(function() {
  const container = document.getElementById('aboutSlides');
  let current = 0;

  ABOUT_IMGS.forEach((src, i) => {
    const s = document.createElement('div');
    s.className = 'about-slide' + (i===0?' active':'');
    s.style.backgroundImage = `url(${src})`;
    container.appendChild(s);
  });

  setInterval(() => {
    container.children[current].classList.remove('active');
    current = (current+1) % ABOUT_IMGS.length;
    container.children[current].classList.add('active');
  }, 5500);
})();


// ── ANNOUNCEMENTS CAROUSEL (3s delay) ───────────────────
(function() {
  const strip = document.getElementById('announceBgStrip');
  let current = 0;

  [...ANNOUNCE_IMGS, ...ANNOUNCE_IMGS].forEach(src => {
    const f = document.createElement('div');
    f.className = 'announce-bg-frame';
    f.style.backgroundImage = `url(${src})`;
    strip.appendChild(f);
  });

  setInterval(() => {
    current = (current + 1) % ANNOUNCE_IMGS.length;
    strip.style.transform = `translateX(-${current * 100}%)`;
  }, 3000);
})();




// ── PLATFORM PHONE SCROLL ───────────────────────────────
(function() {
  const track = document.getElementById('phonesTrack');
  [...PLATFORM_IMGS, ...PLATFORM_IMGS].forEach(src => {
    const p = document.createElement('div');
    p.className = 'platform-phone';
    p.style.backgroundImage = `url(${src})`;
    track.appendChild(p);
  });
})();

// ── FOUNDERS BG TOOLS ───────────────────────────────────
(function() {
  const bg = document.getElementById('foundersBg');
  FOUNDER_TOOL_IMGS.forEach(item => {
    const el = document.createElement('div');
    el.className = 'founders-bg-img';
    el.style.cssText = `background-image:url(${item.src});top:${item.top};left:${item.left};transform:rotate(${item.rot}deg);`;
    bg.appendChild(el);
  });
})();

// ── FOUNDERS CAROUSEL (auto-loop + drag/swipe) ──────────
(function() {
  const wrap  = document.getElementById('foundersCarousel');
  const track = document.getElementById('foundersTrack');
  const dotsEl = document.getElementById('founderDots');
  const cards = Array.from(track.children);
  const total = cards.length;
  let current = 0, autoTimer, startX = 0, startTx = 0, dragging = false;

  // Build dots
  cards.forEach((_, i) => {
    const d = document.createElement('button');
    d.className = 'carousel-dot' + (i===0?' active':'');
    d.addEventListener('click', () => { goTo(i); resetAuto(); });
    dotsEl.appendChild(d);
  });

  function cardW() { return cards[0].offsetWidth + 24; }

  function goTo(idx) {
    current = Math.max(0, Math.min(idx, total-1));
    track.style.transform = `translateX(-${current * cardW()}px)`;
    Array.from(dotsEl.children).forEach((d,i) => d.classList.toggle('active', i===current));
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(() => goTo((current+1) % total), 4000);
  }
  resetAuto();

  // Mouse drag
  wrap.addEventListener('mousedown', e => {
    dragging = true; startX = e.clientX; startTx = -current * cardW();
    wrap.classList.add('dragging'); resetAuto();
  });
  wrap.addEventListener('mousemove', e => {
    if (!dragging) return;
    track.style.transition = 'none';
    track.style.transform = `translateX(${startTx + e.clientX - startX}px)`;
  });
  function endDrag(clientX) {
    if (!dragging) return;
    dragging = false; wrap.classList.remove('dragging');
    track.style.transition = '';
    const delta = clientX - startX;
    if (delta < -50 && current < total-1) goTo(current+1);
    else if (delta > 50 && current > 0) goTo(current-1);
    else goTo(current);
  }
  wrap.addEventListener('mouseup', e => endDrag(e.clientX));
  wrap.addEventListener('mouseleave', e => endDrag(e.clientX));

  // Touch swipe
  wrap.addEventListener('touchstart', e => { startX = e.touches[0].clientX; startTx = -current * cardW(); resetAuto(); }, {passive:true});
  wrap.addEventListener('touchmove', e => {
    track.style.transition = 'none';
    track.style.transform = `translateX(${startTx + e.touches[0].clientX - startX}px)`;
  }, {passive:true});
  wrap.addEventListener('touchend', e => {
    track.style.transition = '';
    const delta = e.changedTouches[0].clientX - startX;
    if (delta < -50 && current < total-1) goTo(current+1);
    else if (delta > 50 && current > 0) goTo(current-1);
    else goTo(current);
  });

  window.addEventListener('resize', () => goTo(current));
})();

// ── WAITLIST SLIDESHOW ──────────────────────────────────
(function() {
  const container = document.getElementById('waitlistSlides');
  let current = 0;

  WAITLIST_IMGS.forEach((src, i) => {
    const s = document.createElement('div');
    s.className = 'waitlist-slide' + (i===0?' active':'');
    s.style.backgroundImage = `url(${src})`;
    container.appendChild(s);
  });

  setInterval(() => {
    container.children[current].classList.remove('active');
    current = (current+1) % WAITLIST_IMGS.length;
    container.children[current].classList.add('active');
  }, 4500);
})();
