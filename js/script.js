$(function () {
  'use strict';

  // Set Slider height
  /*
  let windowH = $(window).innerHeight(),
    navH = $('nav').innerHeight(),
    headerH = $('header').innerHeight();
*/
  //$('#slider').height(windowH - navH - headerH);


  //$('.home2-panner').height(windowH - navH - headerH);

  $('#forget-pass').on('click', function (e) {
    e.preventDefault()
  })
});


// Search Overlay
var searchBtn = document.getElementsByClassName('search-btn')[0],
  searchOverlay = document.getElementsByClassName('search-overlay')[0],
  closeSearchOverlay = document.getElementsByClassName('close-search-overlay')[0];

searchBtn.onclick = () => {
  searchOverlay.classList.add('show-search-overlay');
};

closeSearchOverlay.onclick = () => {
  searchOverlay.classList.remove('show-search-overlay');
};
