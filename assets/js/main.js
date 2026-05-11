/**
* Template Name: UpConstruction - v1.3.0
* Template URL: https://bootstrapmade.com/upconstruction-bootstrap-construction-website-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Mobile nav toggle
   */

  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    if (mobileNavShow) mobileNavShow.classList.toggle('d-none');
    if (mobileNavHide) mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Sticky header — add solid background on scroll
   */
  const siteHeader = document.querySelector('#header');
  if (siteHeader) {
    const toggleHeaderScrolled = () => {
      window.scrollY > 80
        ? siteHeader.classList.add('header-scrolled')
        : siteHeader.classList.remove('header-scrolled');
    };
    window.addEventListener('load', toggleHeaderScrolled);
    document.addEventListener('scroll', toggleHeaderScrolled);
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

      window.location.href = `mailto:mandoxmech@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    });
  }

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', event => {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

});
