var feedbackOpen = document.querySelector(".feedback-modal-open");
var feedback = document.querySelector(".modal-feedback");
var mapOpen = document.querySelector(".map");
var map = document.querySelector(".map-popup");
var cartOpen = document.querySelectorAll(".buy-btn");
var cart = document.querySelector(".modal-cart")
var close = document.querySelectorAll(".modal-close");
var modal = document.querySelectorAll(".modal");
var overlay = document.querySelector(".overlay");

var modalOpen = function(modalName) {
        modalName.classList.add("modal-show");
        overlay.classList.add("overlay-show");
};

var modalClose = function() {
    for (var j = 0; j < modal.length; j++) {
            modal[j].classList.remove("modal-show");
            modal[j].classList.remove("modal-error");
        }
    overlay.classList.remove("overlay-show");
};

if (feedback) {
    var feedbackForm = feedback.querySelector(".feedback-form");
    var username = feedback.querySelector(".name-field");
    var email = feedback.querySelector(".email-field");
    var comment = feedback.querySelector(".comment-field");
    var isStorageSupport = true;
    var nameStorage = "";
    var emailStorage = "";
    try {
        nameStorage = localStorage.getItem("username");
        emailStorage = localStorage.getItem("email");
    } catch (err) {
    isStorageSupport = false;
    }

    feedbackOpen.addEventListener("click", function (event) {
        event.preventDefault();
        modalOpen(feedback);
        if (nameStorage && emailStorage) {
            username.value = nameStorage;
            email.value = emailStorage;
            comment.focus();
        } else {
            username.focus();
        }
    });

    feedbackForm.addEventListener("submit", function(event) {
        if (!username.value || !email.value || !comment.value) {
            event.preventDefault();
            feedback.classList.remove("modal-error");
            feedback.offsetWidth = feedback.offsetWidth;
            feedback.classList.add("modal-error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("username", username.value);
                localStorage.setItem("email", email.value);
            }
            overlay.classList.remove("overlay-show");
        }
    });
}


if (map) {
    mapOpen.addEventListener("click", function (event) {
        event.preventDefault();
        modalOpen(map);
    });
}


for (var i = 0; i < cartOpen.length; i++) {
    cartOpen[i].addEventListener("click", function (event) {
        event.preventDefault();
        modalOpen(cart);
    });
}


for (i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function (event) {
        event.preventDefault();
        modalClose();
    });
}

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27 ) {
        for (var j = 0; j < modal.length; j++) {
            if (modal[j].classList.contains("modal-show")) {
                event.preventDefault();
                modal[j].classList.remove("modal-show");
            }
            modal[j].classList.remove("modal-error");
        }
        overlay.classList.remove("overlay-show");
    }
});

overlay.addEventListener("click", function (event) {
    event.preventDefault();
    modalClose();
});


var deliveryTab = document.querySelector("#delivery + label");
var warantyTab = document.querySelector("#waranty + label");
var creditTab = document.querySelector("#credit + label");
var servicesSlider = document.querySelectorAll(".services-slider-item");
var servicesSliderDelivery = document.querySelector(".services-slider-delivery");
var servicesSliderWaranty = document.querySelector(".services-slider-waranty");
var servicesSliderCredit = document.querySelector(".services-slider-credit");

var clickTab = function(tabName) {
    if (tabName === deliveryTab) {
        var servicesSliderName = servicesSliderDelivery;
    }
    if (tabName === warantyTab) {
        servicesSliderName = servicesSliderWaranty;
    }
    if (tabName === creditTab) {
        servicesSliderName = servicesSliderCredit;
    }
    tabName.addEventListener("click", function(event) {
        for (i = 0; i < servicesSlider.length; i++) {
            servicesSlider[i].classList.remove("services-slider-active");
        }
        servicesSliderName.classList.add("services-slider-active");
    });
};


if (deliveryTab) {
    clickTab(deliveryTab);
}

if (warantyTab) {
    clickTab(warantyTab);
}

if (creditTab) {
    clickTab(creditTab);
}


var promoSlider = document.querySelectorAll(".promo-slider-item");
var promoControl = document.querySelectorAll(".promo-control");
var promoDrillsBtn = document.querySelector(".promo-slider-drills .circle-control:first-of-type");
var promoPerfoBtn = document.querySelector(".promo-slider-perforators .circle-control:last-of-type");

if (promoSlider) {
    for (i = 0; i < promoControl.length; i++) {
        promoControl[i].addEventListener("click", function(event) {
            event.preventDefault();
            for (j = 0; j < promoSlider.length; j++) {
                promoSlider[j].classList.toggle("promo-slider-active");
            }
        });
    }
    var promoSliderBtn = function (circleBtn) {
        circleBtn.addEventListener("click", function(event) {
            event.preventDefault();
            for (j = 0; j < promoSlider.length; j++) {
                promoSlider[j].classList.toggle("promo-slider-active");
            }
        });
    };

    promoSliderBtn(promoDrillsBtn);
    promoSliderBtn(promoPerfoBtn);
}





