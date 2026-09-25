// ==========================================================
// ZAPMOR — Frontend interactions
// ==========================================================

// Auto-close the mobile navbar menu after tapping an anchor link
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('#zapNav .nav-link, #zapNav .dropdown-item');
  const navCollapseEl = document.getElementById('zapNav');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navCollapseEl.classList.contains('show')) {
        bootstrap.Collapse.getOrCreateInstance(navCollapseEl).hide();
      }
    });
  });
});

function showCategory(category) {
  const doctorsCards = document.getElementById('doctorsCards');
  const beautyCards = document.getElementById('beautyCards');
  const btnDoctors = document.getElementById('btnDoctors');
  const btnBeauty = document.getElementById('btnBeauty');

  if (category === 'doctors') {
    doctorsCards.classList.remove('d-none');
    beautyCards.classList.add('d-none');
    btnDoctors.classList.add('active');
    btnBeauty.classList.remove('active');
  } else {
    beautyCards.classList.remove('d-none');
    doctorsCards.classList.add('d-none');
    btnBeauty.classList.add('active');
    btnDoctors.classList.remove('active');
  }
}

// Link "Service Type" select in the booking form to enable "Specific Service"
document.addEventListener('DOMContentLoaded', function () {
  const bookForm = document.querySelector('#book form');
  if (!bookForm) return;

  const serviceType = bookForm.querySelector('select');
  const specificService = bookForm.querySelectorAll('select')[1];

  const doctorOptions = ['General Physician', 'Dentist', 'Dermatologist'];
  const beautyOptions = ['Haircut & Styling', 'Manicure & Pedicure', 'Facial & Spa'];

  serviceType.addEventListener('change', function () {
    const options = this.value === 'Doctor' ? doctorOptions : beautyOptions;
    specificService.innerHTML = '';
    specificService.disabled = false;
    options.forEach(function (opt) {
      const el = document.createElement('option');
      el.textContent = opt;
      specificService.appendChild(el);
    });
  });

  bookForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thanks! Your booking request has been received.');
    bookForm.reset();
  });

  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thanks for reaching out! We will get back to you soon.');
      contactForm.reset();
    });
  }
});