/**
 * AL-IRTIQA-26 (الارتقاء ٢٦) — MULTILINGUAL & RTL ENGINE
 * Manages English (en), Malayalam (ml), and Arabic (ar)
 * True Bidirectional RTL switching, state persistence & dynamic attribute updates
 */

class LanguageManager {
  constructor() {
    this.storageKey = 'irtiqa_lang';
    this.supportedLanguages = ['en', 'ml', 'ar'];
    this.defaultLanguage = 'en';
    this.currentLanguage = this.getStoredLanguage();
    this.init();
  }

  getStoredLanguage() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      if (stored && this.supportedLanguages.includes(stored)) {
        return stored;
      }
    } catch (e) {
      console.warn('localStorage unavailable, using default language:', e);
    }
    return this.defaultLanguage;
  }

  setLanguage(lang) {
    if (!this.supportedLanguages.includes(lang)) {
      console.warn(`Language ${lang} is not supported.`);
      return;
    }

    this.currentLanguage = lang;

    try {
      localStorage.setItem(this.storageKey, lang);
    } catch (e) {
      console.warn('Could not store language preference:', e);
    }

    this.applyLanguage(lang);
  }

  applyLanguage(lang) {
    const html = document.documentElement;
    const isRtl = lang === 'ar';

    // Update document attributes
    html.lang = lang;
    html.dir = isRtl ? 'rtl' : 'ltr';

    if (isRtl) {
      html.classList.add('is-rtl');
    } else {
      html.classList.remove('is-rtl');
    }

    // Update active state on switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      const btnLang = btn.getAttribute('data-lang');
      if (btnLang === lang) {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
      } else {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
      }
    });

    // Translate DOM elements marked with data-i18n
    this.updateDomTranslations(lang);

    // Dispatch global event for other components if supported
    if (typeof window.dispatchEvent === 'function' && typeof CustomEvent !== 'undefined') {
      try {
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang, isRtl } }));
      } catch (e) {
        console.warn('CustomEvent dispatch warning:', e);
      }
    }
  }

  updateDomTranslations(lang) {
    const translations = window.IRTIQA_TRANSLATIONS && window.IRTIQA_TRANSLATIONS[lang];
    if (!translations) {
      console.warn(`Translations dictionary not loaded for: ${lang}`);
      return;
    }

    // Update Page Title if meta.siteTitle exists
    if (translations.meta && translations.meta.siteTitle) {
      document.title = translations.meta.siteTitle;
    }

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && translations.meta && translations.meta.siteDesc) {
      metaDesc.setAttribute('content', translations.meta.siteDesc);
    }

    // Find all elements with [data-i18n]
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const keyPath = el.getAttribute('data-i18n');
      const text = this.resolveKey(translations, keyPath);
      if (text !== undefined) {
        // If element is an input with placeholder
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.setAttribute('placeholder', text);
        } else {
          el.textContent = text;
        }
      }
    });

    // Update elements with [data-i18n-html] if any
    const htmlElements = document.querySelectorAll('[data-i18n-html]');
    htmlElements.forEach(el => {
      const keyPath = el.getAttribute('data-i18n-html');
      const htmlContent = this.resolveKey(translations, keyPath);
      if (htmlContent !== undefined) {
        el.innerHTML = htmlContent;
      }
    });
  }

  resolveKey(obj, path) {
    if (!obj || !path) return undefined;
    return path.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);
  }

  init() {
    // Bind click events on all language switchers
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('.lang-btn');
      if (btn) {
        const lang = btn.getAttribute('data-lang');
        if (lang) {
          this.setLanguage(lang);
        }
      }
    });

    // Initial application on DOM content loaded
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => {
        this.applyLanguage(this.currentLanguage);
      });
    } else {
      this.applyLanguage(this.currentLanguage);
    }
  }
}

// Instantiate globally
window.irtiqaLang = new LanguageManager();
