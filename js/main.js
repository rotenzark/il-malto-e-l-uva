/* Il Malto e l'Uva — main.js
   PLUMBING_V 1 (da Agenzia/Toolkit/boilerplate) + codice-firma: il malto e l'uva
   che entrano dai due lati e si incontrano nel «&» allo scroll. GSAP SUBITO;
   reveal once; watchdog 1,5s; orari a doppia finestra, sab+dom chiusi. */

(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) root.classList.add('reduced-motion');

  /* ══════════ CONFIG PER-SITO (PLUMBING_V 1) ══════════ */
  var SITE = {
    slug: 'il-malto-e-l-uva',
    hours: {
      0: [],
      1: [['10:00', '13:00'], ['16:30', '21:30']],
      2: [['10:00', '13:00'], ['16:30', '22:00']],
      3: [['10:00', '13:00'], ['16:30', '22:00']],
      4: [['10:00', '13:00'], ['16:30', '22:00']],
      5: [['10:00', '13:00'], ['16:30', '22:00']],
      6: [],
    },
    hoursStatusId: 'orarioStato',
    hoursTableSelector: '#orariTable tr[data-day]',
    todayClass: 'is-today',
    introId: 'intro',
    introDuration: 2000,
    inViewClass: 'in-view',
    breakpointMenu: 920,
    EN: {
      'nav.nome': 'The name', 'nav.bancone': 'At the counter', 'nav.calice': 'By the glass', 'nav.dove': 'Where & hours', 'nav.chiama': 'Call',
      'hero.rec': '104 reviews',
      'hero.kicker': 'Wine bar & whisky bar · steps from Conciliazione',
      'hero.sub': 'Two raw materials, one counter: <strong>around 200 wines</strong> and <strong>100 whiskies</strong>, craft beers, aperitivi and platters. The human side of good drinking.',
      'hero.cta1': 'Call: 02 3653 7698', 'hero.cta2': 'The malt & the grape',
      'tk.1': '~200 wines', 'tk.2': '~100 whiskies', 'tk.3': 'craft beers', 'tk.4': 'tasting counter', 'tk.5': 'aperitivi & platters', 'tk.6': 'at the right temperature',
      'tk.1b': '~200 wines', 'tk.2b': '~100 whiskies', 'tk.3b': 'craft beers', 'tk.4b': 'tasting counter', 'tk.5b': 'aperitivi & platters', 'tk.6b': 'at the right temperature',
      'nome.kicker': 'The name, explained', 'nome.t1': 'Two raw materials,', 'nome.t2': 'one counter',
      'malto.eti': 'the malt', 'malto.t': 'Whisky & beer', 'malto.p': 'Malt is the root of beer and whisky. Around a hundred whisky labels, always at the right temperature, and a list of craft beers chosen one by one.',
      'uva.eti': 'the grape', 'uva.t': 'Wine', 'uva.p': 'The grape is wine: around 200 labels, often outside the big distribution. A flood of bottles filling the walls, from the everyday glass to the gem to discover.',
      'banc.kicker': 'At the counter', 'banc.t1': 'The human side', 'banc.t2': 'of good drinking',
      'banc.p1': 'Leaning on the big counter you’ll find lovers of fine wines and rare whiskies, but also anyone after just a <em>proper</em>, refined aperitivo. With two owners who put the right label in your hand.',
      'banc.p2': 'Guided tastings, quality platters, and the wish to bring back the value of good advice — the thing online sales have made us lose sight of.',
      'cal.kicker': 'Wines by the glass', 'cal.t1': 'From the', 'cal.t2': 'chalkboard',
      'cal.v1': 'Prosecco', 'cal.v2': 'Nas-cetta', 'cal.v3': 'Nebbiolo', 'cal.v4': 'Chardonnay', 'cal.v5': 'Spritz', 'cal.v6': 'Platter',
      'cal.nota': 'A few labels by the glass, from their chalkboard. The list changes often: just ask at the counter.',
      'gal.kicker': 'A flood of bottles', 'gal.t1': 'A look', 'gal.t2': 'inside',
      'rec.kicker': 'What people say', 'rec.t2': 'from 104 reviews',
      'rec.r1': '«A great selection of wines outside the big distribution; a very pleasant setting and kind, competent staff. An excellent spot in a lovely part of Milan.»',
      'rec.r2': '«We had a great time, the food is worth its price! The guys who run it are formal and smiling, a rare thing among the places around here.»',
      'rec.r3': '«Great wine bar. Wide choice of wines and beers. A lovely place for a good glass and a quality platter: a “proper”, refined aperitivo.»',
      'rec.r4': '«You can taste excellent wines and beers in a truly welcoming setting. The two owners are friendly and knowledgeable.»',
      'dove.kicker': 'Where & hours', 'dove.t1': 'On Via da Giussano,', 'dove.t2': 'at Conciliazione',
      'dove.metro': 'Via Alberto da Giussano 1, 20145 Milan · steps from Piazzale Baracca and Conciliazione station (M1)',
      'dove.chiama': 'Call 02 3653 7698', 'dove.apri': 'Open in Maps',
      'giorni.lun': 'Monday', 'giorni.mar': 'Tuesday', 'giorni.mer': 'Wednesday', 'giorni.gio': 'Thursday', 'giorni.ven': 'Friday', 'giorni.sab': 'Saturday', 'giorni.dom': 'Sunday', 'giorni.chiuso': 'Closed', 'giorni.chiuso2': 'Closed',
      'faq.kicker': 'Frequently asked questions',
      'faq.q1': 'Are you a wine bar or a whisky bar?', 'faq.a1': 'Both: the name says it. The grape is the wines (around 200 labels, often outside the big distribution), the malt is the whiskies (around a hundred) and the craft beers. All at the right temperature, at the big counter.',
      'faq.q2': 'Do you do aperitivo and tastings?', 'faq.a2': 'Yes: a proper, refined aperitivo, guided tastings and quality platters. Two owners who suggest the right label for you.',
      'faq.q3': 'What are your opening hours?', 'faq.a3': 'Monday 10am–1pm and 4:30–9:30pm; Tuesday to Friday 10am–1pm and 4:30–10pm. We’re closed on Saturday and Sunday.',
      'faq.q4': 'Can I buy bottles to take away?', 'faq.a4': 'Yes: besides drinks and aperitivo on site, we sell wine, whisky and beer to take away.',
      'faq.q5': 'Where are you?', 'faq.a5': 'At Via Alberto da Giussano 1 in Milan, steps from Piazzale Baracca and Conciliazione station. For info call 02 3653 7698.',
      'foot.dove': 'Via Alberto da Giussano 1, 20145 Milan · <a href="tel:+390236537698">02 3653 7698</a>',
      'foot.demo': 'Demo website (concept) by Bespoke Studio, built from public data and photos — this is not the official website of the business.',
      'bar.chiama': 'Call', 'bar.orari': 'Hours', 'bar.mappa': 'Directions'
    },
  };
  /* ═══════════════════════════════════════════════════ */

  var hasGsap = typeof gsap !== 'undefined';
  var hasST = hasGsap && typeof ScrollTrigger !== 'undefined';
  if (hasST) gsap.registerPlugin(ScrollTrigger);

  function showAllReveals() {
    var els = document.querySelectorAll('.reveal, .reveal-hero');
    els.forEach(function (el) { el.classList.add(SITE.inViewClass); });
    if (hasGsap) { gsap.set(els, { opacity: 1, x: 0, y: 0 }); }
    else { els.forEach(function (el) { el.style.opacity = 1; }); }
  }
  setTimeout(function () { if (!hasGsap || reducedMotion) showAllReveals(); }, 1500);

  if (hasGsap && !reducedMotion) {
    gsap.utils.toArray('.reveal').forEach(function (el) {
      if (el.classList.contains('lato')) return;
      gsap.fromTo(el, { opacity: 0, y: 26 }, { opacity: 1, y: 0, duration: .7, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 88%', once: true } });
    });
    gsap.to('#heroPhoto', { yPercent: 8, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    /* GESTO-FIRMA: malto da sinistra, uva da destra, si incontrano nel & */
    var malto = document.querySelector('.lato-malto'), uva = document.querySelector('.lato-uva'), amp = document.querySelector('.amp');
    if (malto && uva) {
      var tl = gsap.timeline({ scrollTrigger: { trigger: '#nome', start: 'top 72%', once: true } });
      tl.fromTo(malto, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: .8, ease: 'power3.out' }, 0)
        .fromTo(uva, { opacity: 0, x: 50 }, { opacity: 1, x: 0, duration: .8, ease: 'power3.out' }, 0);
      if (amp) tl.fromTo(amp, { opacity: 0, scale: .5 }, { opacity: 1, scale: 1, duration: .5, ease: 'back.out(2)' }, .5);
    }
  } else {
    document.querySelectorAll('.reveal, .reveal-hero').forEach(function (el) { el.classList.add(SITE.inViewClass); el.style.opacity = 1; });
  }

  /* hero entrance */
  function heroEntrance() {
    if (!hasGsap || reducedMotion) { document.querySelectorAll('.reveal-hero').forEach(function (el) { el.style.opacity = 1; }); return; }
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .to('.hero-badge', { opacity: 1, y: 0, duration: .5 }, .05)
      .to('.hero-kicker', { opacity: 1, y: 0, duration: .5 }, .15)
      .fromTo('.hero-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: .8 }, .25)
      .to('.hero-sub', { opacity: 1, y: 0, duration: .6 }, .55)
      .to('.hero-cta', { opacity: 1, y: 0, duration: .6 }, .75);
  }
  var intro = document.getElementById(SITE.introId);
  function hideIntro() { if (!intro) return; var el = intro; intro = null; el.classList.add('hide'); setTimeout(function () { el.remove(); }, 700); heroEntrance(); }
  if (reducedMotion || !intro) { if (intro) { intro.remove(); intro = null; } heroEntrance(); }
  else { setTimeout(hideIntro, SITE.introDuration); setTimeout(hideIntro, 6000); intro.addEventListener('click', hideIntro); }

  /* burger */
  var burger = document.getElementById('burger'); var nav = document.getElementById('mainNav');
  if (burger && nav) {
    var lastFocus = null;
    var closeNav = function () { nav.classList.remove('nav-open'); burger.setAttribute('aria-expanded', 'false'); if (lastFocus) { lastFocus.focus(); lastFocus = null; } };
    var openNav = function () { lastFocus = document.activeElement; nav.classList.add('nav-open'); burger.setAttribute('aria-expanded', 'true'); var f = nav.querySelector('a'); if (f) f.focus(); };
    burger.addEventListener('click', function () { nav.classList.contains('nav-open') ? closeNav() : openNav(); });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('nav-open')) closeNav(); });
    window.addEventListener('resize', function () { if (window.innerWidth > SITE.breakpointMenu) closeNav(); });
  }

  /* lightbox */
  var lightbox = document.getElementById('lightbox'), lightboxImg = document.getElementById('lightboxImg'), lightboxClose = document.getElementById('lightboxClose');
  if (lightbox && lightboxImg) {
    var opener = null;
    var openLb = function (src, alt) { lightboxImg.src = src; lightboxImg.alt = alt || ''; lightbox.hidden = false; document.body.style.overflow = 'hidden'; if (lightboxClose) lightboxClose.focus(); };
    var closeLb = function () { lightbox.hidden = true; lightboxImg.src = ''; document.body.style.overflow = ''; if (opener) { opener.focus(); opener = null; } };
    document.querySelectorAll('[data-full]').forEach(function (fig) {
      fig.setAttribute('tabindex', '0'); fig.setAttribute('role', 'button');
      var img = fig.querySelector('img');
      var go = function () { opener = fig; openLb(fig.getAttribute('data-full'), img ? img.alt : ''); };
      fig.addEventListener('click', go);
      fig.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } });
    });
    if (lightboxClose) lightboxClose.addEventListener('click', closeLb);
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLb(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !lightbox.hidden) closeLb(); });
  }

  /* orari dinamici Europe/Rome (PLUMBING_V 1) */
  function romeNow() {
    try {
      var f = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false });
      var p = f.formatToParts(new Date());
      var map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      var g = function (t) { return p.find(function (x) { return x.type === t; }).value; };
      return { day: map[g('weekday')], mins: parseInt(g('hour'), 10) * 60 + parseInt(g('minute'), 10) };
    } catch (e) { var d = new Date(); return { day: d.getDay(), mins: d.getHours() * 60 + d.getMinutes() }; }
  }
  var toMin = function (hm) { var a = hm.split(':'); return parseInt(a[0], 10) * 60 + parseInt(a[1], 10); };
  var fmt = function (m) { m = m % 1440; return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + (m % 60)).slice(-2); };
  var DIT = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  var DEN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  function hoursState() {
    var now = romeNow(), w = SITE.hours[now.day] || [];
    for (var i = 0; i < w.length; i++) { var s = toMin(w[i][0]), e = toMin(w[i][1]); if (now.mins >= s && now.mins < Math.min(e, 1440)) return { open: true, day: now.day, closesAt: fmt(e) }; }
    for (var k = 0; k < w.length; k++) { if (now.mins < toMin(w[k][0])) return { open: false, day: now.day, opensToday: fmt(toMin(w[k][0])) }; }
    for (var d = 1; d <= 7; d++) { var nd = (now.day + d) % 7, nw = SITE.hours[nd] || []; if (nw.length) return { open: false, day: now.day, opensDay: nd, opensAt: fmt(toMin(nw[0][0])) }; }
    return { open: false, day: now.day };
  }
  function renderHours() {
    var el = document.getElementById(SITE.hoursStatusId), st = hoursState();
    document.querySelectorAll(SITE.hoursTableSelector).forEach(function (row) { row.classList.toggle(SITE.todayClass, parseInt(row.getAttribute('data-day'), 10) === st.day); });
    if (!el) return;
    var en = root.lang === 'en', txt;
    if (st.open) txt = (en ? 'Open now' : 'Aperto ora') + ' · ' + (en ? 'closes at ' : 'chiude alle ') + st.closesAt;
    else if (st.opensToday) txt = (en ? 'Closed · opens today at ' : 'Chiuso · apre oggi alle ') + st.opensToday;
    else if (st.opensAt !== undefined) txt = (en ? 'Closed · opens ' + DEN[st.opensDay] + ' at ' : 'Chiuso · apre ' + DIT[st.opensDay] + ' alle ') + st.opensAt;
    else txt = en ? 'Closed' : 'Chiuso';
    el.textContent = txt;
  }
  renderHours(); setInterval(renderHours, 60000);

  /* i18n overlay (innerHTML per <strong>/<em>/<a>) */
  var originals = {};
  var I18N_ATTRS = [['data-i18n', null], ['data-i18n-aria', 'aria-label'], ['data-i18n-alt', 'alt']];
  function setLang(lang) {
    root.lang = lang === 'en' ? 'en' : 'it';
    I18N_ATTRS.forEach(function (pair) {
      var dattr = pair[0], target = pair[1];
      if (!originals[dattr]) originals[dattr] = {};
      document.querySelectorAll('[' + dattr + ']').forEach(function (el) {
        var key = el.getAttribute(dattr), store = originals[dattr];
        if (!(key in store)) store[key] = target ? el.getAttribute(target) : el.innerHTML;
        var val = lang === 'en' && SITE.EN[key] !== undefined ? SITE.EN[key] : store[key];
        if (target) el.setAttribute(target, val); else el.innerHTML = val;
      });
    });
    renderHours();
    var t = document.getElementById('langToggle'); if (t) t.textContent = lang === 'en' ? 'IT' : 'EN';
    try { localStorage.setItem(SITE.slug + '-lang', lang); } catch (e) {}
  }
  var langToggle = document.getElementById('langToggle');
  if (langToggle) langToggle.addEventListener('click', function () { setLang(root.lang === 'en' ? 'it' : 'en'); });
  try { if (localStorage.getItem(SITE.slug + '-lang') === 'en') setLang('en'); } catch (e) {}

  /* action-bar mobile */
  var actionBar = document.getElementById('actionBar');
  if (actionBar) {
    var onScroll = function () { actionBar.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.6); };
    window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  }
})();
