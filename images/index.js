
$(function () {
   
    const headerNav = $('header nav');
    const hamburgerMenu = $('#hamburger-menu');
    const search = $('#search');
    const searchContainerHide = $('#search-container-hide');
    const searchContainer = $('#search-container');
    
    $('#home-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnFocus: false,
      pauseOnHover: false,
      fade: true,
      speed: 1000,
      cssEase: 'linear'
    });

    hamburgerMenu.on('click', () => {
      headerNav.toggle();
    });

    search.on('click', () => {
      searchContainer.css({
        'opacity': '1',
        'visibility': 'visible',
        'z-index': '100'
      });
    });

    searchContainerHide.on('click', () => {
      searchContainer.css({
        'opacity': '0',
        'visibility': 'hidden',
        'z-index': '0'
      });
    });
});