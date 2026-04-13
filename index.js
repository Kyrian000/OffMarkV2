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

    menuBtn.addEventListener("click", () => {
        menu.style.display = "flex";
        menuBtn.style.display = "none";
        closeBtn.style.display = "inline-block";
    });

    closeBtn.addEventListener("click", () => {
        menu.style.display = "none";
        menuBtn.style.display = "inline-block";
        closeBtn.style.display = "none";
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