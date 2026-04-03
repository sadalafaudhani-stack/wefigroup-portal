document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                if (this.getAttribute('href').length > 1) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        const slides = document.querySelectorAll('.slide');
        let currentSlide = 0;

        function showNextSlide() {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }

        setInterval(showNextSlide, 6000);

        function openDiv(evt, divId) {
            const contents = document.querySelectorAll('.div-content');
            contents.forEach(content => content.classList.remove('active'));
            const items = document.querySelectorAll('.menu-item');
            items.forEach(item => item.classList.remove('active'));
            document.getElementById(divId).classList.add('active');
            evt.currentTarget.classList.add('active');
        }