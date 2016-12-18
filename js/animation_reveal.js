(function() {

    var config = {
        viewFactor: 0.15,
        duration: 800,


        reset: true,

        distance: '90px',
        easing: 'ease-in-out',
        rotate: {
            z: 0
        },
        scale: 1.0
    };

    window.sr = ScrollReveal(config).reveal('.jumpIn', { duration: 300 }, 200);

    if (sr.isSupported()) {
        document.documentElement.classList.add('sr');
    }
})();
