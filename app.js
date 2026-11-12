(function () {
  // Reveal on scroll
  var els = document.querySelectorAll('.reveal, .bars, .cols, .donut-wrap');
  var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.15 }) : null;
  els.forEach(function (el) { io ? io.observe(el) : el.classList.add('in'); });

  // Count-up numbers
  function fmt(n, d) { return n.toLocaleString('en-US', { minimumFractionDigits: d, maximumFractionDigits: d }); }
  var counters = document.querySelectorAll('[data-count]');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var co = 'IntersectionObserver' in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target, end = parseFloat(el.dataset.count), d = parseInt(el.dataset.dec || '0', 10);
      var pre = el.dataset.pre || '', suf = el.dataset.suf || '';
      co.unobserve(el);
      if (reduce) { el.textContent = pre + fmt(end, d) + suf; return; }
      var t0 = performance.now(), dur = 1400;
      (function tick(t) {
        var p = Math.min((t - t0) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
        el.textContent = pre + fmt(end * eased, d) + suf;
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: 0.4 }) : null;
  counters.forEach(function (el) {
    el.textContent = (el.dataset.pre || '') + fmt(parseFloat(el.dataset.count), parseInt(el.dataset.dec || '0', 10)) + (el.dataset.suf || '');
    if (co) { el.textContent = (el.dataset.pre || '') + fmt(0, parseInt(el.dataset.dec || '0', 10)) + (el.dataset.suf || ''); co.observe(el); }
  });

  // Mobile menu
  var mb = document.querySelector('.menu-btn'), nav = document.querySelector('.nav');
  if (mb) mb.addEventListener('click', function () {
    var o = nav.classList.toggle('open'); mb.setAttribute('aria-expanded', o);
  });

  // Page leave transition for internal links
  document.querySelectorAll('a[href$=".html"]').forEach(function (a) {
    a.addEventListener('click', function (ev) {
      if (ev.metaKey || ev.ctrlKey || a.target === '_blank') return;
      ev.preventDefault();
      document.body.classList.add('leaving');
      setTimeout(function () { location.href = a.href; }, 220);
    });
  });

  // Proof preview (view only, no download)
  var proofBtns = document.querySelectorAll('[data-proof]');
  if (proofBtns.length) {
    var pm = document.createElement('div');
    pm.className = 'modal'; pm.id = 'proof-modal';
    pm.setAttribute('role', 'dialog'); pm.setAttribute('aria-modal', 'true'); pm.setAttribute('aria-label', 'Proof preview');
    pm.innerHTML = '<div class="modal-box"><div class="modal-bar"><b></b>' +
      '<button type="button" class="btn btn-primary btn-sm close">Close</button></div>' +
      '<div class="proof-view"><img alt="" draggable="false"></div><div class="modal-note"></div></div>';
    document.body.appendChild(pm);
    var pImg = pm.querySelector('img'), pTitle = pm.querySelector('.modal-bar b'),
        pNote = pm.querySelector('.modal-note'), pClose = pm.querySelector('.close'), pLast;
    function closeProof() { pm.classList.remove('open'); pImg.removeAttribute('src'); if (pLast) pLast.focus(); }
    proofBtns.forEach(function (b) {
      b.addEventListener('click', function () {
        pLast = b;
        pImg.src = b.dataset.proof; pImg.alt = b.dataset.alt || b.dataset.title;
        pTitle.textContent = b.dataset.title; pNote.textContent = b.dataset.note || '';
        pm.classList.add('open'); pClose.focus();
      });
    });
    pClose.addEventListener('click', closeProof);
    pm.addEventListener('click', function (e) { if (e.target === pm) closeProof(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && pm.classList.contains('open')) closeProof(); });
  }

  // Letter preview modal
  var modal = document.getElementById('preview-modal');
  if (modal) {
    var frame = modal.querySelector('iframe'), title = modal.querySelector('.modal-bar b'), dl = modal.querySelector('.dl');
    var last;
    function close() { modal.classList.remove('open'); frame.src = 'about:blank'; if (last) last.focus(); }
    document.querySelectorAll('[data-preview]').forEach(function (b) {
      b.addEventListener('click', function () {
        last = b; frame.src = b.dataset.preview; title.textContent = b.dataset.title;
        dl.href = b.dataset.preview; modal.classList.add('open'); modal.querySelector('.close').focus();
      });
    });
    modal.querySelector('.close').addEventListener('click', close);
    modal.addEventListener('click', function (e) { if (e.target === modal) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && modal.classList.contains('open')) close(); });
  }
})();
