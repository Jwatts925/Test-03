const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
    document.body.classList.toggle('menu-open', isOpen);
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Open navigation');
      document.body.classList.remove('menu-open');
    });
  });
}

const revealElements = document.querySelectorAll('.reveal');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reducedMotion || !('IntersectionObserver' in window)) {
  revealElements.forEach((element) => element.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver(
    (entries, revealObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealElements.forEach((element) => observer.observe(element));
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();


// Open portfolio sections when their navigation link is used.
const portfolioSections = Array.from(document.querySelectorAll('.portfolio-section'));

const closeOtherPortfolioSections = (activeSection) => {
  portfolioSections.forEach((section) => {
    if (section !== activeSection && section.open) section.open = false;
  });
};

const scrollPortfolioSectionToTop = (section) => {
  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(() => {
      section.scrollIntoView({ behavior: reducedMotion ? 'auto' : 'smooth', block: 'start' });
    });
  });
};

const openPortfolioSection = (section, shouldScroll = false) => {
  if (!section) return;

  closeOtherPortfolioSections(section);
  section.open = true;

  if (shouldScroll) {
    scrollPortfolioSectionToTop(section);
  }
};

portfolioSections.forEach((section) => {
  const trigger = section.querySelector(':scope > .portfolio-section-trigger');

  trigger?.addEventListener('click', () => {
    if (!section.open) scrollPortfolioSectionToTop(section);
  });

  section.addEventListener('toggle', () => {
    if (section.open) closeOtherPortfolioSections(section);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href')?.slice(1);
    if (!targetId) return;

    const targetSection = document.getElementById(targetId);
    if (targetSection?.classList.contains('portfolio-section')) {
      event.preventDefault();
      openPortfolioSection(targetSection, true);
      window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    }
  });
});

document.querySelectorAll('a[href="#top"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    window.scrollTo({ top: 0, left: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  });
});

if (window.location.hash) {
  const initialSection = document.querySelector(window.location.hash);
  if (initialSection?.classList.contains('portfolio-section')) {
    openPortfolioSection(initialSection, true);
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
  }
}


// Update the portfolio page indicator as the reader scrolls.
const portfolioReader = document.querySelector('[data-portfolio-reader]');
const portfolioPages = Array.from(document.querySelectorAll('[data-portfolio-page]'));
const portfolioCurrentPage = document.querySelector('#portfolio-current-page');

if (portfolioReader && portfolioPages.length && portfolioCurrentPage) {
  let portfolioTicking = false;

  const updatePortfolioPage = () => {
    const viewportCenter = window.innerHeight * 0.5;
    let closestPage = portfolioPages[0];
    let closestDistance = Number.POSITIVE_INFINITY;

    portfolioPages.forEach((page) => {
      const rect = page.getBoundingClientRect();
      const pageCenter = rect.top + rect.height * 0.5;
      const distance = Math.abs(pageCenter - viewportCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestPage = page;
      }
    });

    const current = Number(closestPage.dataset.portfolioPage || 1);
    portfolioCurrentPage.textContent = String(current).padStart(2, '0');
    portfolioTicking = false;
  };

  const requestPortfolioUpdate = () => {
    if (!portfolioTicking) {
      window.requestAnimationFrame(updatePortfolioPage);
      portfolioTicking = true;
    }
  };

  updatePortfolioPage();
  window.addEventListener('scroll', requestPortfolioUpdate, { passive: true });
  window.addEventListener('resize', requestPortfolioUpdate);
}


// Click the model itself to activate it. A second stationary click releases it.
document.querySelectorAll('[data-ifc-interaction]').forEach((frame) => {
  const surface = frame.querySelector('.ifc-interaction-surface');
  const iframe = frame.querySelector('iframe');

  if (!surface || !iframe) return;

  let iframeEventsAttached = false;
  let pointerStart = null;
  let fitTimer = null;

  const clickFitButton = () => {
    try {
      const iframeDocument = iframe.contentDocument;
      const fitButton = iframeDocument?.getElementById('fit-model');

      if (fitButton) {
        fitButton.click();
        return true;
      }
    } catch (error) {
      console.warn('Unable to access IFC fit control yet.', error);
    }

    return false;
  };

  const fitWhenReady = () => {
    window.clearInterval(fitTimer);

    let attempts = 0;
    fitTimer = window.setInterval(() => {
      attempts += 1;

      try {
        const iframeDocument = iframe.contentDocument;
        const loadingPanel = iframeDocument?.getElementById('viewer-loading');
        const modelIsReady =
          loadingPanel &&
          loadingPanel.classList.contains('is-hidden');

        if (modelIsReady && clickFitButton()) {
          window.clearInterval(fitTimer);
        } else if (attempts >= 120) {
          // Stop polling after roughly 30 seconds.
          window.clearInterval(fitTimer);
        }
      } catch (error) {
        if (attempts >= 120) {
          window.clearInterval(fitTimer);
        }
      }
    }, 250);
  };

  const setActive = (active) => {
    frame.classList.toggle('is-active', active);
    surface.setAttribute('aria-pressed', String(active));
    iframe.setAttribute('tabindex', active ? '0' : '-1');

    if (active) {
      iframe.focus();
      window.setTimeout(clickFitButton, 80);
    }
  };

  const attachIframeEvents = () => {
    if (iframeEventsAttached) return;

    try {
      const iframeDocument = iframe.contentDocument;
      if (!iframeDocument) return;

      iframeEventsAttached = true;

      iframeDocument.addEventListener(
        'pointerdown',
        (event) => {
          pointerStart = {
            x: event.clientX,
            y: event.clientY,
            target: event.target,
          };
        },
        true
      );

      iframeDocument.addEventListener(
        'pointerup',
        (event) => {
          if (!frame.classList.contains('is-active') || !pointerStart) return;

          const distance = Math.hypot(
            event.clientX - pointerStart.x,
            event.clientY - pointerStart.y
          );

          const target =
            event.target instanceof Element ? event.target : null;
          const clickedViewerControl = target?.closest('button');

          // A normal click releases the viewer. Dragging still orbits normally.
          if (distance < 6 && !clickedViewerControl) {
            setActive(false);
          }

          pointerStart = null;
        },
        true
      );

      iframeDocument.addEventListener('fullscreenchange', () => {
        window.setTimeout(clickFitButton, 250);
      });
    } catch (error) {
      console.warn('Unable to attach IFC interaction events.', error);
    }
  };

  surface.addEventListener('click', () => {
    setActive(true);
  });

  iframe.addEventListener('load', () => {
    attachIframeEvents();
    fitWhenReady();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && frame.classList.contains('is-active')) {
      setActive(false);
      surface.focus();
    }
  });

  document.addEventListener('pointerdown', (event) => {
    if (
      frame.classList.contains('is-active') &&
      !frame.contains(event.target)
    ) {
      setActive(false);
    }
  });

  // Keep the model framed correctly when the page or device size changes.
  let resizeTimeout = null;
  window.addEventListener(
    'resize',
    () => {
      window.clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(clickFitButton, 180);
    },
    { passive: true }
  );

  // Handle an iframe that may already be loaded from browser cache.
  if (iframe.contentDocument?.readyState === 'complete') {
    attachIframeEvents();
    fitWhenReady();
  }
});
