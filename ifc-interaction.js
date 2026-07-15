(() => {
  if (window.ifcInteractionInitialized) return;
  window.ifcInteractionInitialized = true;

  document.querySelectorAll('[data-ifc-interaction]').forEach((frame) => {
    const surface = frame.querySelector('.ifc-interaction-surface');
    const iframe = frame.querySelector('iframe');

    if (!surface || !iframe) return;

    let fitTimer = null;

    const clickFitButton = () => {
      try {
        const fitButton = iframe.contentDocument?.getElementById('fit-model');
        if (!fitButton) return false;
        fitButton.click();
        return true;
      } catch {
        return false;
      }
    };

    const fitWhenReady = () => {
      window.clearInterval(fitTimer);
      let attempts = 0;

      fitTimer = window.setInterval(() => {
        attempts += 1;
        const loadingPanel = iframe.contentDocument?.getElementById('viewer-loading');
        const modelIsReady = loadingPanel?.classList.contains('is-hidden');

        if (modelIsReady && clickFitButton()) {
          window.clearInterval(fitTimer);
        } else if (attempts >= 120) {
          window.clearInterval(fitTimer);
        }
      }, 250);
    };

    const setActive = (active) => {
      frame.classList.toggle('is-active', active);
      surface.setAttribute('aria-pressed', String(active));
      surface.setAttribute(
        'aria-label',
        active
          ? 'Release model and resume page scrolling'
          : 'Activate interactive 3D model'
      );
      surface.textContent = active ? 'Release Scroll' : '';
      iframe.setAttribute('tabindex', active ? '0' : '-1');

      if (active) {
        iframe.focus();
        window.setTimeout(clickFitButton, 80);
      }
    };

    surface.addEventListener('click', () => {
      setActive(!frame.classList.contains('is-active'));
    });

    iframe.addEventListener('load', fitWhenReady);

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && frame.classList.contains('is-active')) {
        setActive(false);
        surface.focus({ preventScroll: true });
      }
    });

    document.addEventListener('pointerdown', (event) => {
      if (frame.classList.contains('is-active') && !frame.contains(event.target)) {
        setActive(false);
      }
    });

    if (iframe.contentDocument?.readyState === 'complete') fitWhenReady();
  });
})();
