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




