function init_global() {
  window.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
    threshold: window.innerWidth < 768 ? 400 : 700
  });

  const open_buttons = document.querySelectorAll('.-open-popup');
  const close_buttons = document.querySelectorAll('.-close-popup');

  open_buttons.forEach(function (button) {
    button.onclick = function (event) {
      event.preventDefault();

      const target = this.getAttribute('data-target');
      const popup = document.getElementById(target);
      if (popup) { popup.classList.add('-open'); }
    }
  });

  close_buttons.forEach(function (button) {
    button.onclick = function () {
      const popup = this.closest('.popup');
      if (popup) { popup.classList.remove('-open'); }
    }
  });

  function open_popup(popup_id) {
    const popup = document.getElementById(popup_id);
    if (popup) { popup.classList.add('-open'); }
  }

  function close_popup(popup_id) {
    const popup = document.getElementById(popup_id);
    if (popup) { popup.classList.remove('-open'); }
  }

  window.open_popup = open_popup;
  window.close_popup = close_popup;
}

function init_welcome() {
  const swiper_highlight = document.querySelector('[swiper-highlight] .swiper');

  if (swiper_highlight) {
    const swiper = new Swiper(swiper_highlight, {
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
      },
      watchOverflow: true,
      watchSlidesProgress: true,
      watchVisibility: true,
      navigation: {
        nextEl: '[swiper-highlight] .swiper-button-next',
        prevEl: '[swiper-highlight] .swiper-button-prev',
      },
      pagination: {
        clickable: true,
        el: '[swiper-highlight] .swiper-pagination',
      },
      slidesPerView: 2,
      spaceBetween: 8,
      speed: 1000
    });
  }
}

function init_generate_order() {
  const filters = document.querySelectorAll('.filter');

  filters.forEach(filter => {
    filter.querySelectorAll('.filter-top').forEach(elem => {
      elem.addEventListener('click', () => {
        filter.classList.toggle('-show');
      });
    });
  });
}

function init_detailing() {
  const swiper_thumb = document.querySelector('[swiper-thumb] .swiper');

  if (swiper_thumb) {
    const swiper = new Swiper(swiper_thumb, {
      direction: 'vertical',
      slidesPerView: 4,
      spaceBetween: 8
    });
  }

  const swiper_gallery = document.querySelector('[swiper-gallery] .swiper');

  if (swiper_gallery) {
    const swiper = new Swiper(swiper_gallery, {
      watchOverflow: true,
      watchSlidesProgress: true,
      watchVisibility: true,
      navigation: {
        nextEl: '[swiper-gallery] .swiper-button-next',
        prevEl: '[swiper-gallery] .swiper-button-prev',
      },
      pagination: {
        clickable: true,
        el: '[swiper-gallery] .swiper-pagination',
      },
      speed: 1000,
      thumbs: {
        swiper: swiper_thumb,
      },
    });
  }

  const swiper_related = document.querySelector('[swiper-related] .swiper');

  if (swiper_related) {
    const swiper = new Swiper(swiper_related, {
      autoplay: {
        delay: 5000,
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
      },
      watchOverflow: true,
      watchSlidesProgress: true,
      watchVisibility: true,
      navigation: {
        nextEl: '[swiper-related] .swiper-button-next',
        prevEl: '[swiper-related] .swiper-button-prev',
      },
      pagination: {
        clickable: true,
        el: '[swiper-related] .swiper-pagination',
      },
      slidesPerView: 2,
      spaceBetween: 8,
      speed: 1000
    });
  }
}

function init_analysis() {
  const items = document.querySelectorAll(".list-tab .item");
  const contents = document.querySelectorAll(".tab-container .tab-content");

  if (items.length === 0 || contents.length === 0) return;

  function show_content(index) {
    contents.forEach((content, i) => {
      content.style.display = i === index ? "flex" : "none";
    });
  }

  items.forEach((item, index) => {
    item.addEventListener("click", function () {
      items.forEach(i => i.classList.remove("-active"));
      item.classList.add("-active");
      
      show_content(index);
    });
  });

  if (items.length > 0) {
    items[0].classList.add("-active");
    
    show_content(0);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  init_global();

  const page = document.body.dataset.page;
  if (page === 'welcome') {
    init_welcome();
  } else if (page === 'generate-order') {
    init_generate_order();
  } else if (page === 'detailing') {
    init_detailing();
  } else if (page === 'analysis') {
    init_analysis();
  } else {
  }
});