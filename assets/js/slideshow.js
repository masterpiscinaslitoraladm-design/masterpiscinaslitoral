(function () {
    var track = document.querySelector('[data-gallery]');
    if (!track) {
        return;
    }

    var isSmallScreen = function () {
        return window.matchMedia('(max-width: 640px)').matches;
    };

    var timerId = null;

    var startAutoScroll = function () {
        if (isSmallScreen()) {
            return;
        }

        if (timerId) {
            window.clearInterval(timerId);
        }

        timerId = window.setInterval(function () {
            var maxScroll = track.scrollWidth - track.clientWidth;
            if (maxScroll <= 0) {
                return;
            }

            var next = track.scrollLeft + 260;
            if (next >= maxScroll - 8) {
                next = 0;
            }

            track.scrollTo({ left: next, behavior: 'smooth' });
        }, 3500);
    };

    var stopAutoScroll = function () {
        if (timerId) {
            window.clearInterval(timerId);
            timerId = null;
        }
    };

    track.addEventListener('mouseenter', stopAutoScroll);
    track.addEventListener('mouseleave', startAutoScroll);
    window.addEventListener('resize', function () {
        stopAutoScroll();
        startAutoScroll();
    });

    startAutoScroll();
})();
