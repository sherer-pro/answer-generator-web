import $ from 'jquery';
import 'what-input';
import 'slick-carousel';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';
$('#slick').slick({
    speed: 500,
    centerMode: true,
    infinite: false,
    slidesToShow: 4,
    responsive: [{
        breakpoint: 1024,
        settings: {
            centerMode: false,
            slidesToShow: 3,
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            dots: true
        }
    }, {
        breakpoint: 350,
        slidesToShow: 2,
        dots: true

    }]
});

$(document).foundation();
