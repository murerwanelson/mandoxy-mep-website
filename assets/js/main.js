/**
* Template Name: UpConstruction - v1.3.0
* Template URL: https://bootstrapmade.com/upconstruction-bootstrap-construction-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  const body = document.body;
  const siteHeader = document.querySelector('#header');

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', event => {
      event.preventDefault();
      mobileNavToggle();
    });
  });

  function mobileNavToggle() {
    body.classList.toggle('mobile-nav-active');
    if (siteHeader) siteHeader.classList.remove('header-hidden');
    if (mobileNavShow) mobileNavShow.classList.toggle('d-none');
    if (mobileNavHide) mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {
    if (!navbarlink.hash) return;

    const section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (body.classList.contains('mobile-nav-active')) {
        mobileNavToggle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (body.classList.contains('mobile-nav-active')) {
        event.preventDefault();
        const dropdownMenu = this.nextElementSibling;

        this.classList.toggle('active');
        if (dropdownMenu) dropdownMenu.classList.toggle('dropdown-active');

        const dropDownIndicator = this.querySelector('.dropdown-indicator');
        if (dropDownIndicator) {
          dropDownIndicator.classList.toggle('bi-chevron-up');
          dropDownIndicator.classList.toggle('bi-chevron-down');
        }
      }
    });
  });

  /**
   * Sticky header — add solid background on scroll
   */
  if (siteHeader) {
    let lastScrollY = window.scrollY;

    const toggleHeaderScrolled = () => {
      const currentScrollY = window.scrollY;
      const isMobileNavOpen = body.classList.contains('mobile-nav-active');

      currentScrollY > 80
        ? siteHeader.classList.add('header-scrolled')
        : siteHeader.classList.remove('header-scrolled');

      if (isMobileNavOpen || currentScrollY < 120 || currentScrollY < lastScrollY) {
        siteHeader.classList.remove('header-hidden');
      } else if (currentScrollY > lastScrollY) {
        siteHeader.classList.add('header-hidden');
      }

      lastScrollY = currentScrollY;
    };
    window.addEventListener('load', toggleHeaderScrolled);
    document.addEventListener('scroll', toggleHeaderScrolled, { passive: true });
  }

  /**
   * Project inquiry form
   */
  const inquiryForm = document.querySelector('.project-inquiry-form');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', event => {
      event.preventDefault();

      const formData = new FormData(inquiryForm);
      const name = formData.get('name') || '';
      const email = formData.get('email') || '';
      const subject = formData.get('subject') || 'Project Inquiry';
      const message = formData.get('message') || '';

      const emailSubject = `Project Inquiry - ${subject}`;
      const emailBody = [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        'Project details:',
        message
      ].join('\n');

      window.location.href = `mailto:info@mandoxyengineers.co.zw?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const toggleScrollTop = () => {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    };
    window.addEventListener('load', toggleScrollTop);
    document.addEventListener('scroll', toggleScrollTop, { passive: true });
    scrollTop.addEventListener('click', event => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
