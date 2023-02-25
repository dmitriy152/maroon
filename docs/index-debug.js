
if (document.querySelector(".main__content__page")){
    var laucnhWindow = document.querySelector(".launch__app__modal")
    var launchApp = document.querySelectorAll(".launch__modal")
    var ok = document.querySelector(".ok")
    var close = document.querySelector(".close__icon")
    var gamburger = document.querySelector(".header__gamburger")
    var popup = document.querySelector(".header__navigation__conteiner")
    var overtlay = document.querySelector(".overlay")
    var navItem = document.querySelectorAll(".nav__item")
    var connectButton = document.querySelector(".connect")
    var modalForm = document.querySelector(".connect__form")
    var closeButton = document.querySelector(".close_modal_form")
    var sendForm = document.querySelector(".send__form")

    if(document.querySelector(".overlay")){
        overtlay.addEventListener("click",function(){
            overtlay.classList.remove("overlay-active")
            if(document.querySelector(".launch__app__modal-active")){
                document.querySelector(".launch__app__modal-active").classList.remove("launch__app__modal-active")
            }
            else if(document.querySelector(".connect__form-active")){
                document.querySelector(".connect__form-active").classList.remove("connect__form-active")
            }
            else if(document.querySelector(".header__navigation__conteiner-active")){
                gamburger.classList.remove("header__gamburger-active")
                popup.classList.remove("header__navigation__conteiner-active")
            }
        })
    }

    if (document.querySelector(".header")){
        gamburger.addEventListener("click", function(){
            gamburger.classList.toggle("header__gamburger-active")
            popup.classList.toggle("header__navigation__conteiner-active")
            if(document.querySelector(".launch__app__modal-active")){
                document.querySelector(".launch__app__modal-active").classList.remove("launch__app__modal-active")
                overtlay.classList.remove("overlay-active")
            }
            if(document.querySelector(".connect__form-active")){
                overtlay.classList.remove("overlay-active")
                document.querySelector(".connect__form-active").classList.remove("connect__form-active")
            }
            overtlay.classList.toggle ("overlay-active")
        })
        function closePopup (){
            gamburger.classList.remove("header__gamburger-active")
            popup.classList.remove("header__navigation__conteiner-active")
            overtlay.classList.remove ("overlay-active")
        }
        for(i = 0; i < navItem.length; i++){
            navItem[i].addEventListener("click",function(event){
                event.preventDefault()
                let selectNavItem = this
                let overtlay = document.querySelector(".overlay")
                function clearModal (){
                    if(document.querySelector(".launch__app__modal-active")){
                        overtlay.classList.remove("overlay-active")
                        document.querySelector(".launch__app__modal-active").classList.remove("launch__app__modal-active")
                    }
                }
                if (selectNavItem.classList.contains("about_us")){
                    let scrollElem =  document.querySelector(".about").offsetTop
                    window.scrollTo({ top: scrollElem, behavior: 'smooth'});
                    closePopup();
                    clearModal();
                }
                else if(selectNavItem.classList.contains("how_it_works")){
                    let scrollElem =  document.querySelector(".steps__exchange").offsetTop
                    window.scrollTo({ top: scrollElem, behavior: 'smooth'});
                    closePopup();
                    clearModal();
                }
                else if(selectNavItem.classList.contains("where_we_work")){
                    let scrollElem =  document.querySelector(".map").offsetTop
                    window.scrollTo({ top: scrollElem, behavior: 'smooth'});
                    closePopup();
                    clearModal();
                }
                else if(selectNavItem.classList.contains("f_a_q")){
                    let scrollElem =  document.querySelector(".faq").offsetTop
                    window.scrollTo({ top: scrollElem, behavior: 'smooth'});
                    closePopup();
                    clearModal();
                }
                else if(selectNavItem.classList.contains("contact_navigation")){
                    let scrollElem =  document.querySelector(".footer").offsetTop
                    window.scrollTo({ top: scrollElem, behavior: 'smooth'});
                    closePopup();
                    clearModal();
                }
            })
        }
    }

    if(document.querySelector(".connect")){
        function clearModal (){
            if(document.querySelector(".launch__app__modal-active")){
                overtlay.classList.remove("overlay-active")
                document.querySelector(".launch__app__modal-active").classList.remove("launch__app__modal-active")
            }
        }
        function closePopup (){
            if(document.querySelector(".header__gamburger-active")){
                gamburger.classList.remove("header__gamburger-active")
            }
            if(document.querySelector(".header__navigation__conteiner-active")){
                popup.classList.remove("header__navigation__conteiner-active")
            }
            if(document.querySelector(".overlay-active")){
                overtlay.classList.remove ("overlay-active")
            }
        }
        connectButton.addEventListener("click",function(){
            closePopup()
            clearModal()
            if (window.matchMedia('screen and (min-width:728px)').matches) {
                sendForm.textContent = "Отправить заявку";
            }
            else {
                sendForm.textContent = "Отправить";
            }
            modalForm.classList.add("connect__form-active")
            overtlay.classList.add ("overlay-active")
        })
        closeButton.addEventListener("click",function(){
            closePopup()
            clearModal()
            modalForm.classList.remove("connect__form-active")
        })
        sendForm.addEventListener("click",function(evt){
            evt.preventDefault()
            closePopup()
            clearModal()
            modalForm.classList.remove("connect__form-active")
        })
    }

    if (document.querySelector(".faq")){
        tabFAQ = document.querySelectorAll(".title__faq")
        for (i = 0; i < tabFAQ.length; i++ ){
            tabFAQ[i].addEventListener("click", function(){
                let element = this.parentElement
                if (element.classList.contains("tab__item-active")){
                    element.classList.remove("tab__item-active")
                }
                else {
                    for(j = 0; j < tabFAQ.length; j++){
                        tabFAQ[j].parentElement.classList.remove("tab__item-active")
                    }
                    element.classList.add("tab__item-active")
                }
            })
        }
    }

    if(document.querySelector(".mySwiper")){
        var swiper = new Swiper(".mySwiper", {
            spaceBetween: 10,
            mousewheel: true,
            keyboard: true,
            freeMode: {
                enabled: true,
                sticky: true,
              },
            slidesPerView: "auto",
        });
        if (window.matchMedia('screen and (min-width:1440px)').matches) {
            document.querySelector('.swiper-wrapper').classList.add("disabled");
        }
    
        let sliderMap = document.querySelectorAll(".swiper-slide")
        let russianSVG = document.querySelector(".russia")
        let ukraineSVG = document.querySelector(".ukraine")
        let kazakhstanSVG = document.querySelector(".kazakhstan")
        let turkeySVG = document.querySelector(".turkey")
        let belarusSVG = document.querySelector(".belarus")
    
        for(let i = 0; i < sliderMap.length; i++){
            sliderMap[i].addEventListener("click", function(){
                let selectSlider = this
                for(let k = 0; k < sliderMap.length; k++){
                    sliderMap[k].classList.remove("swiper-slide-select")
                }
                let countrySVG = document.querySelectorAll(".country__svg")
    
                function clearFillSVG (){
                    for (let j = 0; j < countrySVG.length; j++){
                        countrySVG[j].classList.remove("country-active")
                    }
                }
    
                selectSlider.classList.add("swiper-slide-select")
    
                if (selectSlider.classList.contains("russian__country")){
                    clearFillSVG()
                    russianSVG.classList.add("country-active")
                }
                else if(selectSlider.classList.contains("ukraine__country")){
                    clearFillSVG()
                    ukraineSVG.classList.add("country-active")
                }
                else if(selectSlider.classList.contains("kazakhstan__country")){
                    clearFillSVG()
                    kazakhstanSVG.classList.add("country-active")
                }
                else if(selectSlider.classList.contains("turkey__country")){
                    clearFillSVG()
                    turkeySVG.classList.add("country-active")
                }
                else if(selectSlider.classList.contains("belarus__country")){
                    clearFillSVG()
                    belarusSVG.classList.add("country-active")
                }
            })
        }
    }

    if (document.querySelector(".button__duwn")){
        let buttonDuwn = document.querySelector(".button__duwn")
        let about = document.querySelector(".about")
        buttonDuwn.addEventListener("click", function(){
            about.scrollIntoView(
                {
                    behavior: 'smooth',
                    block: 'start'
                }
            );
        })
    }
    
    if (document.querySelector(".launch__app__modal")){
        for(let i = 0; i < launchApp.length; i++){
            launchApp[i].addEventListener("click", function(event){
                event.preventDefault()
                if(document.querySelector(".connect__form-active")){
                    overtlay.classList.remove("overlay-active")
                    document.querySelector(".connect__form-active").classList.remove("connect__form-active")
                }
                laucnhWindow.classList.add("launch__app__modal-active")
                overtlay.classList.add("overlay-active")
            })
            ok.addEventListener("click", function(){
                laucnhWindow.classList.remove("launch__app__modal-active")
                overtlay.classList.remove("overlay-active")
            })
            close.addEventListener("click", function(){
                laucnhWindow.classList.remove("launch__app__modal-active")
                overtlay.classList.remove("overlay-active")
            })
        }
    }
}