/**
 * AL-IRTIQA-26 (الارتقاء ٢٦) — NAVIGATION & ACCESSIBILITY CONTROLLER
 * Responsive Header, Mobile Drawer, Keyboard Navigation & Scroll States
 */

class NavigationController {
  constructor() {
    this.header = document.querySelector('.site-header');
    this.toggleBtn = document.querySelector('.nav-toggle-btn');
    this.mobileDrawer = document.querySelector('.mobile-drawer');
    this.isOpen = false;
    this.init();
  }

  init() {
    this.bindScroll();
    this.bindMobileDrawer();
    this.bindKeyboard();
    this.highlightActivePage();
  }

  bindScroll() {
    if (!this.header) return;

    const onScroll = () => {
      if (window.scrollY > 40) {
        this.header.classList.add('header-scrolled');
      } else {
        this.header.classList.remove('header-scrolled');
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  bindMobileDrawer() {
    if (!this.toggleBtn || !this.mobileDrawer) return;

    this.toggleBtn.addEventListener('click', () => {
      this.toggleDrawer();
    });

    // Close when clicking mobile nav links
    this.mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        this.closeDrawer();
      });
    });

    // Close on backdrop click
    document.addEventListener('click', (e) => {
      if (
        this.isOpen &&
        !this.mobileDrawer.contains(e.target) &&
        !this.toggleBtn.contains(e.target)
      ) {
        this.closeDrawer();
      }
    });
  }

  toggleDrawer() {
    if (this.isOpen) {
      this.closeDrawer();
    } else {
      this.openDrawer();
    }
  }

  openDrawer() {
    this.isOpen = true;
    this.toggleBtn.classList.add('is-active');
    this.toggleBtn.setAttribute('aria-expanded', 'true');
    this.mobileDrawer.classList.add('is-open');
    this.mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  closeDrawer() {
    this.isOpen = false;
    this.toggleBtn.classList.remove('is-active');
    this.toggleBtn.setAttribute('aria-expanded', 'false');
    this.mobileDrawer.classList.remove('is-open');
    this.mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  bindKeyboard() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.closeDrawer();
        this.toggleBtn.focus();
      }
    });
  }

  highlightActivePage() {
    const currentPath = window.location.pathname;
    const currentFilename = currentPath.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link, .nav-dropdown-link, .mobile-sub-link');

    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;

      if (href.startsWith('#')) {
        if (currentFilename === '' || currentFilename === 'index.html') {
          // Allow in-page scroll highlighting if on home
          return;
        } else {
          link.classList.remove('active');
          link.removeAttribute('aria-current');
          return;
        }
      }

      const linkFilename = href.split('#')[0].split('/').pop();
      if (linkFilename && linkFilename === currentFilename) {
        link.classList.add('active');
        link.setAttribute('aria-current', 'page');

        const dropdownParent = link.closest('.nav-item-dropdown');
        if (dropdownParent) {
          const toggle = dropdownParent.querySelector('.nav-dropdown-toggle');
          if (toggle) toggle.classList.add('active');
        }
      } else {
        link.classList.remove('active');
        link.removeAttribute('aria-current');
      }
    });
  }
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.irtiqaNav = new NavigationController();
});
