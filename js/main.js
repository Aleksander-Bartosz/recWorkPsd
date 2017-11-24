document.addEventListener('DOMContentLoaded', function () {
    window.onresize = function(event) {
        console.log($(this).innerWidth());
    };
});