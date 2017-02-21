/**
 * 
 */

$(document).ready(function () {
    var scrollorama = $.scrollorama({blocks : '.animacao'});
    
    scrollorama.animate('#fly-in',{ delay: 400, duration: 300, property:'left', start:-1400, end:0 })
})






