document.addEventListener("DOMContentLoaded", () => {
// fadein
  const scrollAnimationElm = document.querySelectorAll('.fadein-up, .fadein');

  const scrollAnimationFunc = () => {
    const triggerMargin = 100;
    scrollAnimationElm.forEach((elm) => {
      if (window.innerHeight > elm.getBoundingClientRect().top + triggerMargin) {
        elm.classList.add('on');
      }
    });
  };

  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);

  // FAQ accordion
  const switches = document.querySelectorAll(".accordion-switch");
  const toggles = document.querySelectorAll(".accordion-toggle");
  const accoOpenClass = 'accordion-toggle--open'

  switches.forEach((switchEl, index) => {
    console.log("page has acco");
    switchEl.addEventListener("click", () => {
      const isOpen = switchEl.classList.contains(accoOpenClass);

      // all close
      switches.forEach(el => {
        el.classList.remove(accoOpenClass);
        el.setAttribute("data-icon", "plus");
        console.log("icn plus");
      });
      toggles.forEach(el => {
        el.classList.remove(accoOpenClass);
        el.style.height = 0;
      });

      // clicked open
      if (!isOpen) {
        switchEl.classList.add(accoOpenClass);
        switchEl.setAttribute("data-icon", "minus");

        const toggle = toggles[index];
        toggle.classList.add(accoOpenClass);

        const tmpHeight = toggle.scrollHeight + "px";
        toggle.style.height = tmpHeight;
      }
    });
  });
});