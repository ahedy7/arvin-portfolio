(() => {
  document.getElementById('copyright').textContent = `© ${new Date().getFullYear()} Arvin Hedayat — Built for the web`;

  const rail = document.getElementById('rail');
  if (!rail) return;

  rail.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
      rail.scrollLeft += e.deltaY;
      e.preventDefault();
    }
  }, { passive: false });

  let down = false, startX = 0, startScroll = 0, moved = false;
  rail.addEventListener('pointerdown', (e) => {
    down = true; moved = false; startX = e.clientX; startScroll = rail.scrollLeft; rail.style.cursor = 'grabbing';
  });
  window.addEventListener('pointermove', (e) => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 4) moved = true;
    rail.scrollLeft = startScroll - dx;
  });
  window.addEventListener('pointerup', () => { down = false; rail.style.cursor = 'grab'; });
  rail.addEventListener('click', (e) => { if (moved) { e.preventDefault(); e.stopPropagation(); } }, true);
})();
