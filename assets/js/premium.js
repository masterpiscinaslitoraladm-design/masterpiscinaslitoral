(function () {
    var revealTargets = document.querySelectorAll('.reveal');

    if ('IntersectionObserver' in window) {
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -24px 0px' });

        revealTargets.forEach(function (node) {
            observer.observe(node);
        });
    } else {
        revealTargets.forEach(function (node) {
            node.classList.add('is-visible');
        });
    }
})();
