/**
 * AL-IRTIQA-26 (الارتقاء ٢٦) — MAIN APPLICATION ORCHESTRATOR
 * Coordinates global modules, telemetry, and interactive component states
 */

(function () {
  'use strict';

  function initApp() {
    console.log(
      '%c AL-IRTIQA-26 %c Official Brand System: Royal Blue (#1F5BA9) & Emerald Green (#11AF83) Active %c',
      'background: #1F5BA9; color: #FFFFFF; font-weight: bold; padding: 4px 8px; border-radius: 4px;',
      'background: #11AF83; color: #FFFFFF; padding: 4px 8px;',
      'background: transparent;'
    );

    // Setup interactive swatches click-to-copy in the foundation showcase
    const swatches = document.querySelectorAll('.palette-swatch');
    swatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        const hex = swatch.getAttribute('data-hex');
        if (hex && navigator.clipboard) {
          navigator.clipboard.writeText(hex).then(() => {
            const label = swatch.querySelector('.swatch-hex');
            if (label) {
              const original = label.textContent;
              label.textContent = 'Copied!';
              setTimeout(() => {
                label.textContent = original;
              }, 1400);
            }
          }).catch(() => {});
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }
})();
