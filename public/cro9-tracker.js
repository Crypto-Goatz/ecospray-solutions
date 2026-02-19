/**
 * CRO9 Behavioral Analytics Tracker v1.0.0
 * Privacy-Compliant Universal Tracking Script
 *
 * INSTALLATION:
 * Add this script to any page you want to track:
 * <script src="https://cro9.com/cro9-tracker.js"
 *         data-api-key="YOUR_API_KEY"
 *         data-endpoint="https://cro9.com/api/track/collect"
 *         data-consent-mode="gdpr"></script>
 *
 * CONSENT MODES:
 * - "gdpr"     : Strictest - no tracking until explicit accept (EU)
 * - "ccpa"     : Track by default, honor opt-out (California)
 * - "essential": Track anonymous aggregates only, no consent needed
 * - "disabled" : No consent banner, full tracking (use only where legal)
 */

(function(window, document) {
  'use strict';

  // ═══════════════════════════════════════════════════════════════════════════
  // CONFIGURATION
  // ═══════════════════════════════════════════════════════════════════════════

  const CONFIG = {
    version: '1.0.0',
    apiKey: document.currentScript?.getAttribute('data-api-key') || '',
    endpoint: document.currentScript?.getAttribute('data-endpoint') || 'https://cro9.com/api/track/collect',
    consentMode: document.currentScript?.getAttribute('data-consent-mode') || 'gdpr',
    sessionTimeout: 30 * 60 * 1000, // 30 minutes
    batchSize: 10,
    flushInterval: 5000, // 5 seconds
    idleThreshold: 30000, // 30 seconds
    debug: document.currentScript?.getAttribute('data-debug') === 'true'
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // CONSENT MANAGEMENT
  // ═══════════════════════════════════════════════════════════════════════════

  const Consent = {
    STORAGE_KEY: 'cro9_consent',

    status: null, // 'granted', 'denied', 'pending'

    init() {
      const stored = this.getStoredConsent();
      if (stored) {
        this.status = stored.status;
        return stored.status;
      }

      // Check consent mode
      if (CONFIG.consentMode === 'disabled') {
        this.status = 'granted';
        return 'granted';
      }

      if (CONFIG.consentMode === 'essential') {
        this.status = 'essential'; // Limited tracking mode
        return 'essential';
      }

      if (CONFIG.consentMode === 'ccpa') {
        // CCPA: Track by default, respect GPC signal
        if (navigator.globalPrivacyControl) {
          this.status = 'denied';
          return 'denied';
        }
        this.status = 'granted';
        return 'granted';
      }

      // GDPR: Must wait for consent
      this.status = 'pending';
      this.showBanner();
      return 'pending';
    },

    getStoredConsent() {
      try {
        const data = localStorage.getItem(this.STORAGE_KEY);
        if (data) {
          const parsed = JSON.parse(data);
          // Check if consent is still valid (12 months)
          if (Date.now() - parsed.timestamp < 365 * 24 * 60 * 60 * 1000) {
            return parsed;
          }
        }
      } catch (e) {}
      return null;
    },

    setConsent(status) {
      this.status = status;
      try {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify({
          status,
          timestamp: Date.now(),
          version: CONFIG.version
        }));
      } catch (e) {}

      this.hideBanner();

      // Dispatch event for the tracker
      window.dispatchEvent(new CustomEvent('cro9:consent', { detail: { status } }));

      // If granted, initialize full tracking
      if (status === 'granted') {
        CRO9.initFullTracking();
      }
    },

    showBanner() {
      if (document.getElementById('cro9-consent-banner')) return;

      const banner = document.createElement('div');
      banner.id = 'cro9-consent-banner';
      banner.innerHTML = `
        <style>
          #cro9-consent-banner {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
            color: #fff;
            padding: 20px;
            z-index: 999999;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            box-shadow: 0 -4px 20px rgba(0,0,0,0.3);
            animation: cro9SlideUp 0.3s ease-out;
          }
          @keyframes cro9SlideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
          .cro9-consent-inner {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 20px;
          }
          .cro9-consent-text {
            flex: 1;
            min-width: 300px;
          }
          .cro9-consent-text h4 {
            margin: 0 0 8px 0;
            font-size: 16px;
            color: #06b6d4;
          }
          .cro9-consent-text p {
            margin: 0;
            font-size: 14px;
            color: #94a3b8;
            line-height: 1.5;
          }
          .cro9-consent-text a {
            color: #06b6d4;
            text-decoration: underline;
          }
          .cro9-consent-buttons {
            display: flex;
            gap: 12px;
            flex-wrap: wrap;
          }
          .cro9-consent-btn {
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
          }
          .cro9-consent-accept {
            background: linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%);
            color: #fff;
          }
          .cro9-consent-accept:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(6, 182, 212, 0.4);
          }
          .cro9-consent-decline {
            background: transparent;
            color: #94a3b8;
            border: 1px solid #334155;
          }
          .cro9-consent-decline:hover {
            background: #334155;
            color: #fff;
          }
          .cro9-consent-settings {
            background: transparent;
            color: #06b6d4;
            padding: 12px 16px;
          }
          .cro9-consent-settings:hover {
            text-decoration: underline;
          }
        </style>
        <div class="cro9-consent-inner">
          <div class="cro9-consent-text">
            <h4>🍪 We value your privacy</h4>
            <p>
              We use cookies and similar technologies to analyze site usage and improve your experience.
              By clicking "Accept", you consent to our use of cookies.
              <a href="/privacy-policy" target="_blank">Learn more</a>
            </p>
          </div>
          <div class="cro9-consent-buttons">
            <button class="cro9-consent-btn cro9-consent-accept" id="cro9-accept">
              Accept All
            </button>
            <button class="cro9-consent-btn cro9-consent-decline" id="cro9-decline">
              Decline
            </button>
            <button class="cro9-consent-btn cro9-consent-settings" id="cro9-settings">
              Cookie Settings
            </button>
          </div>
        </div>
      `;

      document.body.appendChild(banner);

      document.getElementById('cro9-accept').addEventListener('click', () => {
        this.setConsent('granted');
      });

      document.getElementById('cro9-decline').addEventListener('click', () => {
        this.setConsent('denied');
      });

      document.getElementById('cro9-settings').addEventListener('click', () => {
        this.showSettingsModal();
      });
    },

    hideBanner() {
      const banner = document.getElementById('cro9-consent-banner');
      if (banner) {
        banner.style.animation = 'cro9SlideDown 0.3s ease-out forwards';
        setTimeout(() => banner.remove(), 300);
      }
    },

    showSettingsModal() {
      // Granular consent settings - implement as needed
      console.log('Cookie settings modal - implement granular controls');
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // DATA STORAGE & SYNC
  // ═══════════════════════════════════════════════════════════════════════════

  const DataStore = {
    queue: [],

    add(event) {
      this.queue.push({
        ...event,
        timestamp: Date.now(),
        url: window.location.href,
        pageTitle: document.title
      });

      if (this.queue.length >= CONFIG.batchSize) {
        this.flush();
      }
    },

    async flush() {
      if (this.queue.length === 0) return;

      const batch = this.queue.splice(0, CONFIG.batchSize);

      const payload = {
        apiKey: CONFIG.apiKey,
        visitorId: Identity.visitorId,
        sessionId: Identity.sessionId,
        consentStatus: Consent.status,
        events: batch,
        context: {
          userAgent: navigator.userAgent,
          language: navigator.language,
          referrer: document.referrer,
          screenWidth: screen.width,
          screenHeight: screen.height,
          viewportWidth: window.innerWidth,
          viewportHeight: window.innerHeight,
          devicePixelRatio: window.devicePixelRatio,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        }
      };

      try {
        // Use sendBeacon for reliability (works even on page unload)
        if (navigator.sendBeacon) {
          navigator.sendBeacon(CONFIG.endpoint, JSON.stringify(payload));
        } else {
          fetch(CONFIG.endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            keepalive: true
          });
        }

        if (CONFIG.debug) {
          console.log('[CRO9] Flushed', batch.length, 'events', batch);
        }
      } catch (e) {
        // Re-queue on failure
        this.queue.unshift(...batch);
        if (CONFIG.debug) console.error('[CRO9] Flush failed', e);
      }
    },

    startAutoFlush() {
      setInterval(() => this.flush(), CONFIG.flushInterval);

      // Flush on page unload
      window.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          this.flush();
        }
      });

      window.addEventListener('beforeunload', () => this.flush());
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // IDENTITY MANAGEMENT
  // ═══════════════════════════════════════════════════════════════════════════

  const Identity = {
    visitorId: null,
    sessionId: null,
    isAnonymous: true,

    init(consentStatus) {
      if (consentStatus === 'granted') {
        this.initIdentified();
      } else {
        this.initAnonymous();
      }
    },

    initIdentified() {
      this.isAnonymous = false;

      // Persistent visitor ID
      this.visitorId = localStorage.getItem('cro9_vid');
      if (!this.visitorId) {
        this.visitorId = this.generateId('v');
        localStorage.setItem('cro9_vid', this.visitorId);
      }

      // Session ID with timeout
      this.sessionId = sessionStorage.getItem('cro9_sid');
      const lastActivity = sessionStorage.getItem('cro9_last');

      if (!this.sessionId || (lastActivity && Date.now() - parseInt(lastActivity) > CONFIG.sessionTimeout)) {
        this.sessionId = this.generateId('s');
        sessionStorage.setItem('cro9_sid', this.sessionId);
      }

      this.updateLastActivity();

      // Cross-tab sync
      window.addEventListener('storage', (e) => {
        if (e.key === 'cro9_vid') {
          this.visitorId = e.newValue;
        }
      });
    },

    initAnonymous() {
      // No persistent storage - generate ephemeral IDs
      this.isAnonymous = true;
      this.visitorId = 'anon_' + Math.random().toString(36).substr(2, 9);
      this.sessionId = 'anon_' + Math.random().toString(36).substr(2, 9);
    },

    generateId(prefix) {
      if (crypto.randomUUID) {
        return prefix + '_' + crypto.randomUUID();
      }
      return prefix + '_' + 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
    },

    updateLastActivity() {
      sessionStorage.setItem('cro9_last', Date.now().toString());
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // CORE TRACKERS (Always available - essential/anonymous)
  // ═══════════════════════════════════════════════════════════════════════════

  const CoreTrackers = {
    init() {
      this.trackPageView();
      this.trackWebVitals();
      this.trackErrors();
    },

    trackPageView() {
      DataStore.add({
        type: 'page_view',
        data: {
          path: window.location.pathname,
          query: window.location.search,
          hash: window.location.hash
        }
      });
    },

    trackWebVitals() {
      // LCP
      if ('PerformanceObserver' in window) {
        try {
          new PerformanceObserver((list) => {
            const entries = list.getEntries();
            const lastEntry = entries[entries.length - 1];
            DataStore.add({
              type: 'web_vital',
              data: { metric: 'LCP', value: lastEntry.startTime }
            });
          }).observe({ type: 'largest-contentful-paint', buffered: true });
        } catch (e) {}

        // FID / INP
        try {
          new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              DataStore.add({
                type: 'web_vital',
                data: { metric: 'INP', value: entry.duration }
              });
            });
          }).observe({ type: 'first-input', buffered: true });
        } catch (e) {}

        // CLS
        let clsValue = 0;
        try {
          new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (!entry.hadRecentInput) {
                clsValue += entry.value;
              }
            });
            DataStore.add({
              type: 'web_vital',
              data: { metric: 'CLS', value: clsValue }
            });
          }).observe({ type: 'layout-shift', buffered: true });
        } catch (e) {}
      }

      // Navigation timing
      window.addEventListener('load', () => {
        setTimeout(() => {
          const timing = performance.getEntriesByType('navigation')[0];
          if (timing) {
            DataStore.add({
              type: 'performance',
              data: {
                ttfb: timing.responseStart - timing.requestStart,
                fcp: timing.domContentLoadedEventEnd - timing.navigationStart,
                domLoad: timing.domComplete - timing.navigationStart,
                fullLoad: timing.loadEventEnd - timing.navigationStart
              }
            });
          }
        }, 0);
      });
    },

    trackErrors() {
      window.addEventListener('error', (e) => {
        DataStore.add({
          type: 'js_error',
          data: {
            message: e.message,
            filename: e.filename,
            lineno: e.lineno,
            colno: e.colno
          }
        });
      });

      window.addEventListener('unhandledrejection', (e) => {
        DataStore.add({
          type: 'promise_rejection',
          data: { reason: e.reason?.toString() }
        });
      });
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // BEHAVIORAL TRACKERS (Requires consent)
  // ═══════════════════════════════════════════════════════════════════════════

  const BehavioralTrackers = {
    scrollDepths: new Set(),
    lastScrollTime: 0,
    scrollVelocities: [],
    clickHistory: [],
    formStates: new Map(),

    init() {
      this.trackClicks();
      this.trackScroll();
      this.trackForms();
      this.trackEngagement();
      this.trackExitIntent();
      this.trackCopyPaste();
      this.trackAttribution();
    },

    // ─────────────────────────────────────────────────────────────────────────
    // CLICK TRACKING
    // ─────────────────────────────────────────────────────────────────────────

    trackClicks() {
      document.addEventListener('click', (e) => {
        const target = e.target.closest('a, button, input[type="submit"], [role="button"], [data-cro9-track]');
        const now = Date.now();

        // Basic click data
        const clickData = {
          type: 'click',
          data: {
            x: e.clientX,
            y: e.clientY,
            pageX: e.pageX,
            pageY: e.pageY,
            target: this.getElementSelector(e.target),
            tagName: e.target.tagName,
            text: e.target.innerText?.substring(0, 100),
            href: target?.href || null,
            isInteractive: !!target
          }
        };

        DataStore.add(clickData);

        // Rage click detection (3+ clicks within 750ms in 20px radius)
        this.clickHistory.push({ x: e.clientX, y: e.clientY, time: now });
        this.clickHistory = this.clickHistory.filter(c => now - c.time < 750);

        const nearbyClicks = this.clickHistory.filter(c =>
          Math.hypot(c.x - e.clientX, c.y - e.clientY) < 20
        );

        if (nearbyClicks.length >= 3) {
          DataStore.add({
            type: 'rage_click',
            data: {
              x: e.clientX,
              y: e.clientY,
              clickCount: nearbyClicks.length,
              target: this.getElementSelector(e.target)
            }
          });
          this.clickHistory = []; // Reset after detection
        }

        // Dead click detection
        if (!target) {
          const originalHTML = e.target.outerHTML;
          setTimeout(() => {
            if (e.target.outerHTML === originalHTML) {
              DataStore.add({
                type: 'dead_click',
                data: {
                  x: e.clientX,
                  y: e.clientY,
                  target: this.getElementSelector(e.target)
                }
              });
            }
          }, 500);
        }

        Identity.updateLastActivity();
      }, { passive: true });
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SCROLL TRACKING
    // ─────────────────────────────────────────────────────────────────────────

    trackScroll() {
      const milestones = [25, 50, 75, 90, 100];

      const handleScroll = () => {
        const now = Date.now();
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = Math.round((scrollTop / docHeight) * 100);

        // Milestone tracking
        milestones.forEach(milestone => {
          if (scrollPercent >= milestone && !this.scrollDepths.has(milestone)) {
            this.scrollDepths.add(milestone);
            DataStore.add({
              type: 'scroll_depth',
              data: { depth: milestone, timeToReach: now - performance.timing.navigationStart }
            });
          }
        });

        // Rage scroll detection (rapid direction changes)
        if (this.lastScrollTime) {
          const timeDelta = now - this.lastScrollTime;
          const velocity = Math.abs(scrollTop - this.lastScrollY) / timeDelta;

          this.scrollVelocities.push({ velocity, time: now });
          this.scrollVelocities = this.scrollVelocities.filter(v => now - v.time < 2000);

          const highVelocityCount = this.scrollVelocities.filter(v => v.velocity > 1.6).length;

          if (highVelocityCount >= 5) {
            DataStore.add({
              type: 'rage_scroll',
              data: { velocityCount: highVelocityCount, scrollPosition: scrollPercent }
            });
            this.scrollVelocities = [];
          }
        }

        this.lastScrollTime = now;
        this.lastScrollY = scrollTop;
        Identity.updateLastActivity();
      };

      // Throttle scroll events
      let scrollTimeout;
      window.addEventListener('scroll', () => {
        if (!scrollTimeout) {
          scrollTimeout = setTimeout(() => {
            handleScroll();
            scrollTimeout = null;
          }, 100);
        }
      }, { passive: true });
    },

    // ─────────────────────────────────────────────────────────────────────────
    // FORM TRACKING
    // ─────────────────────────────────────────────────────────────────────────

    trackForms() {
      // Auto-detect forms
      document.querySelectorAll('form').forEach(form => this.attachFormTracking(form));

      // Watch for dynamically added forms
      new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
          mutation.addedNodes.forEach(node => {
            if (node.tagName === 'FORM') {
              this.attachFormTracking(node);
            }
            if (node.querySelectorAll) {
              node.querySelectorAll('form').forEach(form => this.attachFormTracking(form));
            }
          });
        });
      }).observe(document.body, { childList: true, subtree: true });
    },

    attachFormTracking(form) {
      if (form.dataset.cro9Tracked) return;
      form.dataset.cro9Tracked = 'true';

      const formId = form.id || form.name || this.getElementSelector(form);
      const formState = {
        startTime: null,
        fieldsInteracted: new Set(),
        fieldTimes: {},
        lastField: null
      };

      this.formStates.set(formId, formState);

      // Form view (when visible)
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            DataStore.add({ type: 'form_view', data: { formId } });
            observer.disconnect();
          }
        });
      }, { threshold: 0.5 });
      observer.observe(form);

      // Field interactions
      form.querySelectorAll('input, select, textarea').forEach(field => {
        const fieldId = field.name || field.id || field.type;

        field.addEventListener('focus', () => {
          if (!formState.startTime) {
            formState.startTime = Date.now();
            DataStore.add({
              type: 'form_start',
              data: { formId, firstField: fieldId }
            });
          }

          formState.fieldTimes[fieldId] = { start: Date.now() };
          formState.lastField = fieldId;
        });

        field.addEventListener('blur', () => {
          if (formState.fieldTimes[fieldId]) {
            const dwellTime = Date.now() - formState.fieldTimes[fieldId].start;
            formState.fieldsInteracted.add(fieldId);

            DataStore.add({
              type: 'field_interaction',
              data: {
                formId,
                fieldId,
                fieldType: field.type,
                dwellTime,
                hasValue: !!field.value
              }
            });

            // Hesitation detection (>5s without input)
            if (dwellTime > 5000 && !field.value) {
              DataStore.add({
                type: 'field_hesitation',
                data: { formId, fieldId, hesitationTime: dwellTime }
              });
            }
          }
        });
      });

      // Form submission
      form.addEventListener('submit', () => {
        DataStore.add({
          type: 'form_complete',
          data: {
            formId,
            timeToComplete: Date.now() - formState.startTime,
            fieldsInteracted: formState.fieldsInteracted.size,
            totalFields: form.querySelectorAll('input, select, textarea').length
          }
        });
      });

      // Form abandonment (on page leave)
      window.addEventListener('beforeunload', () => {
        if (formState.startTime && formState.fieldsInteracted.size > 0) {
          DataStore.add({
            type: 'form_abandon',
            data: {
              formId,
              lastField: formState.lastField,
              fieldsCompleted: formState.fieldsInteracted.size,
              timeSpent: Date.now() - formState.startTime
            }
          });
        }
      });
    },

    // ─────────────────────────────────────────────────────────────────────────
    // ENGAGEMENT TRACKING
    // ─────────────────────────────────────────────────────────────────────────

    trackEngagement() {
      let activeTime = 0;
      let idleTime = 0;
      let lastActivity = Date.now();
      let isIdle = false;
      let tabVisible = true;

      const checkIdle = () => {
        const now = Date.now();
        const timeSinceActivity = now - lastActivity;

        if (timeSinceActivity > CONFIG.idleThreshold && !isIdle) {
          isIdle = true;
          DataStore.add({ type: 'idle_start', data: { afterMs: timeSinceActivity } });
        }
      };

      const activity = () => {
        const now = Date.now();
        if (isIdle) {
          idleTime += now - lastActivity;
          isIdle = false;
          DataStore.add({ type: 'idle_end', data: { idleDuration: now - lastActivity } });
        } else if (tabVisible) {
          activeTime += now - lastActivity;
        }
        lastActivity = now;
      };

      ['mousemove', 'keydown', 'scroll', 'click', 'touchstart'].forEach(event => {
        document.addEventListener(event, activity, { passive: true });
      });

      setInterval(checkIdle, 5000);

      // Tab visibility
      document.addEventListener('visibilitychange', () => {
        tabVisible = document.visibilityState === 'visible';
        DataStore.add({
          type: 'tab_visibility',
          data: { visible: tabVisible }
        });
      });

      // Report engagement on unload
      window.addEventListener('beforeunload', () => {
        DataStore.add({
          type: 'engagement_summary',
          data: {
            activeTime,
            idleTime,
            totalTime: Date.now() - performance.timing.navigationStart
          }
        });
      });
    },

    // ─────────────────────────────────────────────────────────────────────────
    // EXIT INTENT
    // ─────────────────────────────────────────────────────────────────────────

    trackExitIntent() {
      let exitIntentFired = false;

      document.addEventListener('mouseout', (e) => {
        if (exitIntentFired) return;

        // Check if mouse left toward top of viewport (close/back button area)
        if (e.clientY < 10 && e.relatedTarget === null) {
          exitIntentFired = true;
          DataStore.add({
            type: 'exit_intent',
            data: {
              scrollDepth: Math.round((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100),
              timeOnPage: Date.now() - performance.timing.navigationStart
            }
          });

          // Dispatch event for exit popup hooks
          window.dispatchEvent(new CustomEvent('cro9:exitIntent'));

          // Reset after 10s to allow re-trigger
          setTimeout(() => { exitIntentFired = false; }, 10000);
        }
      });
    },

    // ─────────────────────────────────────────────────────────────────────────
    // COPY/PASTE TRACKING
    // ─────────────────────────────────────────────────────────────────────────

    trackCopyPaste() {
      document.addEventListener('copy', () => {
        const selection = window.getSelection()?.toString();
        if (selection) {
          DataStore.add({
            type: 'copy',
            data: {
              textLength: selection.length,
              preview: selection.substring(0, 50)
            }
          });
        }
      });

      document.addEventListener('paste', (e) => {
        const target = e.target;
        if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
          DataStore.add({
            type: 'paste',
            data: {
              targetField: target.name || target.id || target.type
            }
          });
        }
      });
    },

    // ─────────────────────────────────────────────────────────────────────────
    // ATTRIBUTION
    // ─────────────────────────────────────────────────────────────────────────

    trackAttribution() {
      const params = new URLSearchParams(window.location.search);

      const attribution = {
        utm_source: params.get('utm_source'),
        utm_medium: params.get('utm_medium'),
        utm_campaign: params.get('utm_campaign'),
        utm_term: params.get('utm_term'),
        utm_content: params.get('utm_content'),
        gclid: params.get('gclid'),
        fbclid: params.get('fbclid'),
        referrer: document.referrer,
        landingPage: window.location.pathname
      };

      // Only track if there's attribution data
      if (Object.values(attribution).some(v => v)) {
        DataStore.add({
          type: 'attribution',
          data: attribution
        });

        // Store for session
        try {
          sessionStorage.setItem('cro9_attribution', JSON.stringify(attribution));
        } catch (e) {}
      }
    },

    // ─────────────────────────────────────────────────────────────────────────
    // UTILITIES
    // ─────────────────────────────────────────────────────────────────────────

    getElementSelector(el) {
      if (!el) return '';

      let selector = el.tagName.toLowerCase();
      if (el.id) selector += `#${el.id}`;
      if (el.className && typeof el.className === 'string') {
        selector += '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.');
      }

      return selector;
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // MAIN CRO9 OBJECT
  // ═══════════════════════════════════════════════════════════════════════════

  const CRO9 = {
    version: CONFIG.version,
    consent: Consent,

    init() {
      if (CONFIG.debug) console.log('[CRO9] Initializing...');

      // Initialize consent
      const consentStatus = Consent.init();

      // Initialize identity based on consent
      Identity.init(consentStatus);

      // Start data sync
      DataStore.startAutoFlush();

      // Core tracking (always runs - anonymous/aggregate)
      if (consentStatus !== 'pending') {
        CoreTrackers.init();
      }

      // Full behavioral tracking (only with consent)
      if (consentStatus === 'granted') {
        this.initFullTracking();
      }

      // Listen for consent changes
      window.addEventListener('cro9:consent', (e) => {
        Identity.init(e.detail.status);
        if (e.detail.status === 'granted' || e.detail.status === 'essential') {
          CoreTrackers.init();
        }
      });

      if (CONFIG.debug) console.log('[CRO9] Initialized with consent:', consentStatus);
    },

    initFullTracking() {
      if (CONFIG.debug) console.log('[CRO9] Enabling full behavioral tracking');
      BehavioralTrackers.init();
    },

    // Public API
    track(eventName, data = {}) {
      DataStore.add({
        type: 'custom',
        data: { eventName, ...data }
      });
    },

    identify(userId, traits = {}) {
      if (Consent.status !== 'granted') {
        console.warn('[CRO9] Cannot identify user without consent');
        return;
      }
      DataStore.add({
        type: 'identify',
        data: { userId, traits }
      });
    },

    showConsentBanner() {
      Consent.showBanner();
    },

    getConsentStatus() {
      return Consent.status;
    },

    debug(enabled = true) {
      CONFIG.debug = enabled;
    }
  };

  // ═══════════════════════════════════════════════════════════════════════════
  // AUTO-INITIALIZE
  // ═══════════════════════════════════════════════════════════════════════════

  // Expose globally
  window.CRO9 = CRO9;

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => CRO9.init());
  } else {
    CRO9.init();
  }

})(window, document);
