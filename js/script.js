var feedbackOpen = document.querySelector(".feedback-modal-open");
var feedback = document.querySelector(".modal-feedback");
var mapOpen = document.querySelector(".map");
var map = document.querySelector(".map-popup");
var cartOpen = document.querySelectorAll(".buy-btn");
var cart = document.querySelector(".modal-cart")
var close = document.querySelectorAll(".modal-close");
var modal = document.querySelectorAll(".modal");


if (feedback) {
    var feedbackForm = feedback.querySelector(".feedback-form");
    var username = feedback.querySelector(".name-field");
    var email = feedback.querySelector(".email-field");
    var comment = feedback.querySelector(".comment-field");
    var nameStorage = localStorage.getItem("username");
    var emailStorage = localStorage.getItem("email");

    feedbackOpen.addEventListener("click", function (event) {
        event.preventDefault();
        feedback.classList.add("modal-show");
        if (nameStorage && emailStorage) {
            username.value = nameStorage;
            email.value = emailStorage;
            comment.focus();
        } else {
            username.focus();
        }
    });

    feedbackForm.addEventListener("submit", function(event) {
        event.preventDefault();
        if (!username.value || !email.value || !comment.value) {
            console.log ("Заполните поля формы!");
        } else {
            localStorage.setItem("username", username.value);
            localStorage.setItem("email", email.value);
        }
    });
}


if (map) {
    mapOpen.addEventListener("click", function (event) {
        event.preventDefault();
        map.classList.add("modal-show");
    });
}


for (var i = 0; i < cartOpen.length; i++) {
    cartOpen[i].addEventListener("click", function (event) {
        event.preventDefault();
        cart.classList.add("modal-show");
    });
}


for (i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function (event) {
        event.preventDefault();
        for (var y = 0; y < modal.length; y++) {
            modal[y].classList.remove("modal-show");
        }
    });
}

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27 ) {
        event.preventDefault();
        for (var y = 0; y < modal.length; y++) {
            modal[y].classList.remove("modal-show");
        }
    }
});


var deliveryTab = document.querySelector("#delivery + label");
var warantyTab = document.querySelector("#waranty + label");
var creditTab = document.querySelector("#credit + label");
var servicesSlider = document.querySelectorAll(".services-slider-item");
var servicesSliderDelivery = document.querySelector(".services-slider-delivery");
var servicesSliderWaranty = document.querySelector(".services-slider-waranty");
var servicesSliderCredit = document.querySelector(".services-slider-credit");

if (deliveryTab) {
    deliveryTab.addEventListener("click", function(event) {
        for (i = 0; i < servicesSlider.length; i++) {
            servicesSlider[i].classList.remove("services-slider-active");
        }
        servicesSliderDelivery.classList.add("services-slider-active");
    });
}

if (warantyTab) {
    warantyTab.addEventListener("click", function(event) {
        for (i = 0; i < servicesSlider.length; i++) {
            servicesSlider[i].classList.remove("services-slider-active");
        }
        servicesSliderWaranty.classList.add("services-slider-active");
    });
}

if (creditTab) {
    creditTab.addEventListener("click", function(event) {
        for (i = 0; i < servicesSlider.length; i++) {
            servicesSlider[i].classList.remove("services-slider-active");
        }
        servicesSliderCredit.classList.add("services-slider-active");
    });
}


var promoSlider = document.querySelectorAll(".promo-slider-item");
var promoControl = document.querySelectorAll(".promo-control");

if (promoSlider) {
    for (i = 0; i < promoControl.length; i++) {
        promoControl[i].addEventListener("click", function(event) {
            event.preventDefault();
            for (y = 0; y < promoSlider.length; y++) {
                promoSlider[y].classList.toggle("promo-slider-active");
            }
        });
    }
}





