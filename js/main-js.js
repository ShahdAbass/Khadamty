/*!
 * Entsher advertising  page v 1.2
 * Version: 1.2
 * Author: Entsher Company
 * Author URL: entsher.com
 * Copyright 2016 . Entsher Company.
 */
$(document).ready(function() {
    $("#turbo").Turbo({
        items: 1,
        slideSpeed: 1500,
        timeout: 2500,
        autoPlay: "true",
        fixWidth: "false",
        hasNav: true,
        dotsClass: 'buy'
    });
    $("#turbo2").Turbo({
        items: 1,
        slideSpeed: 1500,
        timeout: 2500,
        autoPlay: "true",
        fixWidth: "false"
    });
    $('.navbar-nav li a').smoothScroll();
    $('.anibtn').smoothScroll();

    $(".h2").fitText(1.2, {
        minFontSize: '20px',
        maxFontSize: '45px'
    });
    $(".h3").fitText(1.8, {
        minFontSize: '18px',
        maxFontSize: '30px'
    });
});