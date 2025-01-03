document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".element");

    const isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const handleScroll = () => {
        if (window.scrollY === 0) {
            elements.forEach((el) => el.classList.remove("active"));
        } else {
            elements.forEach((el) => {
                if (isInViewport(el)) {
                    el.classList.add("active");
                }
            });
        }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();
});


document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".element2");

    const isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    };

    const handleScroll = () => {
        if (window.scrollY === 0) {
            elements.forEach((el) => el.classList.remove("active"));
        } else {
            elements.forEach((el) => {
                if (isInViewport(el)) {
                    el.classList.add("active");
                }
            });
        }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        const targetPosition = targetElement.offsetTop;
        const startPosition = window.pageYOffset;
        const duration = 1500;
        let start = null;

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        function animationScrollStep(timestamp) {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            const ease = easeInOutQuad(progress / duration);
            const distance = ease * (targetPosition - startPosition);

            window.scrollTo(0, startPosition + distance);

            if (progress < duration) {
                requestAnimationFrame(animationScrollStep);
            } else {
                window.scrollTo(0, targetPosition);
            }
        }

        requestAnimationFrame(animationScrollStep);
    });
});