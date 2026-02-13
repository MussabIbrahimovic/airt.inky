(function () {
  const body = document.body;
  const toggle = document.getElementById('theme-toggle');

  function applyMode(mode) {
    body.classList.toggle('theme-light', mode === 'light');
    body.classList.toggle('theme-dark', mode !== 'light');
    if (toggle) toggle.textContent = mode === 'light' ? '☀' : '☾';
  }

  const saved = localStorage.getItem('airt-theme') || 'dark';
  applyMode(saved);

  if (toggle) {
    toggle.addEventListener('click', () => {
      const next = body.classList.contains('theme-dark') ? 'light' : 'dark';
      localStorage.setItem('airt-theme', next);
      applyMode(next);
    });
  }

  if (body.classList.contains('results-page')) {
    const params = new URLSearchParams(window.location.search);
    const query = params.get('q') || '';
    const display = document.getElementById('query-display');
    const searchInput = document.getElementById('results-query');
    const google = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    const link = document.getElementById('google-link');
    const same = document.getElementById('google-link-same');

    if (display) display.textContent = query ? `“${query}”` : 'your query';
    if (searchInput) searchInput.value = query;
    if (link) link.href = google;
    if (same) same.href = google;
  }
})();
