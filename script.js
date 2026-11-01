(function () {
  var b = document.querySelector('.burger');
  var n = document.querySelector('nav');
  if (b && n) {
    b.addEventListener('click', function () {
      var open = n.classList.toggle('open');
      b.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var els = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add('in'); });
  }

  var f = document.getElementById('cform');
  if (f) {
    f.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var d = new FormData(f);
      var text = 'Hi Noventra, I want to book a free consultation.\n' +
        'Name: ' + (d.get('name') || '') + '\n' +
        'Country of interest: ' + (d.get('country') || '') + '\n' +
        'I need help with: ' + (d.get('need') || '') + '\n' +
        (d.get('msg') ? 'Message: ' + d.get('msg') : '');
      window.open('https://wa.me/923708381189?text=' + encodeURIComponent(text), '_blank', 'noopener');
    });
  }
})();
