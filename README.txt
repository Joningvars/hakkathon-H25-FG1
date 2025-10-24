 ** SLIDER **
---------------------------

    1. Byrja á að linka stylesheet í HEAD:  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css" />
 

    2. Bæta þessum kóða við í BODY:

        <Section class="img-wrap">
            <div class="swiper mySwiper">
                <div class="swiper-wrapper"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
        </Section>


    3. Bæta þessu scripti við neðst í BODY:
    <script>
        window.swiper = new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    </script>

---------------------------

