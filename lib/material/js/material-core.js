/**
 * Rence Material Framework Core JS
 * Author: David Abalaku
 * Version: 1.0.0
 * Adds Material Design 3 interactive functionalities (Ripples) to Bootstrap 5.
 */

(function () {
  'use strict';

  const RippleEngine = {
    init() {
      // Elements that should naturally have the ripple effect
      const rippleSelectors = [
        '.btn', 
        '.nav-link', 
        '.dropdown-item', 
        '.page-link',
        '.list-group-item[href]', 
        '.list-group-item[action]',
        '.card-body.ripple',
        '.ripple' // Manual opt-in class
      ].join(', ');

      document.body.addEventListener('mousedown', function (e) {
        const target = e.target.closest(rippleSelectors);
        if (!target || target.disabled || target.classList.contains('disabled')) return;

        // Force parent to contain the absolute positioned ripple
        const computedStyle = window.getComputedStyle(target);
        if (computedStyle.position === 'static') {
            target.style.position = 'relative';
        }
        target.style.overflow = 'hidden';

        // Create ripple element
        const ripple = document.createElement('span');
        ripple.classList.add('rence-material-ripple');

        // Calculate size based on the largest dimension of the element
        const rect = target.getBoundingClientRect();
        const diameter = Math.max(rect.width, rect.height);
        const radius = diameter / 2;
        
        // Calculate the exact click coordinate relative to the target element
        const x = e.clientX - rect.left - radius;
        const y = e.clientY - rect.top - radius;

        ripple.style.width = `${diameter}px`;
        ripple.style.height = `${diameter}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        target.appendChild(ripple);

        // Clean up the DOM after the CSS animation completes
        setTimeout(() => {
          if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
          }
        }, 600); // 600ms matches the CSS animation duration
      });
    }
  };

  // Initialize the framework when the DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', RippleEngine.init);
  } else {
    RippleEngine.init();
  }

})();
