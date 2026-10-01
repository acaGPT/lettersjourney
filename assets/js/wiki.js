/* 教学 Wiki 交互脚本
 * 用途：主题切换、课次搜索、标签页切换、字母演化链、词族分层筛选。
 * 使用方法：页面底部引入本文件即可，无需任何依赖或构建步骤。
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var THEME_KEY = 'wiki-theme';

  /* ---------- 主题切换（记忆偏好，默认跟随系统） ---------- */
  var saved = null;
  try { saved = localStorage.getItem(THEME_KEY); } catch (e) { saved = null; }
  if (saved) {
    root.setAttribute('data-theme', saved);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.setAttribute('data-theme', 'dark');
  }

  var themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) { /* 忽略隐私模式写入失败 */ }
    });
  }

  /* ---------- 课次搜索 ---------- */
  var searchBar = document.getElementById('search-bar');
  var searchInput = document.getElementById('site-search');
  var searchCount = document.getElementById('search-count');
  var searchToggle = document.getElementById('search-toggle');
  var cards = [].slice.call(document.querySelectorAll('.lesson-card'));

  if (searchToggle && searchBar) {
    searchToggle.addEventListener('click', function () {
      searchBar.hidden = !searchBar.hidden;
      if (!searchBar.hidden && searchInput) { searchInput.focus(); }
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', function () {
      var q = searchInput.value.trim().toLowerCase();
      var hits = 0;
      cards.forEach(function (card) {
        var hay = (card.getAttribute('data-search') || '') + ' ' + card.textContent;
        var hit = !q || hay.toLowerCase().indexOf(q) > -1;
        card.classList.toggle('hide', !hit);
        if (hit) { hits++; }
      });
      if (searchCount) {
        searchCount.textContent = q ? ('命中 ' + hits + ' 课') : '';
      }
    });
  }

  /* ---------- 标签页切换 ---------- */
  var tabs = [].slice.call(document.querySelectorAll('.tab'));
  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.toggle('on', t === tab); });
      var scope = tab.closest('[data-tabs]');
      if (!scope) { return; }
      var want = tab.getAttribute('data-tab');
      scope.querySelectorAll('.panel').forEach(function (panel) {
        panel.hidden = (panel.getAttribute('data-panel') !== want);
      });
    });
  });

  /* ---------- 字母演化链（点选阶段，下方显示释义） ---------- */
  var steps = [].slice.call(document.querySelectorAll('.chain-step'));
  var chainDetail = document.getElementById('chain-detail');
  if (steps.length && chainDetail) {
    steps.forEach(function (step) {
      step.addEventListener('click', function () {
        steps.forEach(function (s) { s.classList.remove('on'); });
        step.classList.add('on');
        chainDetail.textContent = step.getAttribute('data-detail') || '';
      });
    });
    // 默认点亮第一阶段
    if (steps[0]) { steps[0].classList.add('on'); }
  }

  /* ---------- 词族分层筛选（低龄 / 高龄 / 全部） ---------- */
  var vocabFilter = document.getElementById('vocab-filter');
  if (vocabFilter) {
    vocabFilter.addEventListener('click', function (e) {
      var btn = e.target.closest('[data-tier]');
      if (!btn) { return; }
      var tier = btn.getAttribute('data-tier');
      vocabFilter.querySelectorAll('[data-tier]').forEach(function (b) {
        b.classList.toggle('on', b === btn);
      });
      document.querySelectorAll('.vocab-row').forEach(function (row) {
        var ok = (tier === 'all') || (row.getAttribute('data-tier') === tier);
        row.classList.toggle('hide', !ok);
      });
    });
  }

  /* ---------- 侧栏当前位置高亮 ---------- */
  var links = [].slice.call(document.querySelectorAll('.sidebar a[href^="#"]'));
  if (links.length && 'IntersectionObserver' in window) {
    var targets = links.map(function (a) {
      return document.querySelector(a.getAttribute('href'));
    }).filter(Boolean);
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) { return; }
        links.forEach(function (a) {
          a.classList.toggle('on', a.getAttribute('href') === '#' + en.target.id);
        });
      });
    }, { rootMargin: '-90px 0px -70% 0px' });
    targets.forEach(function (t) { io.observe(t); });
  }
})();
