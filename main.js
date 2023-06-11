
window.addEventListener("DOMContentLoaded", (event) => {
    overflowHandler()


});
window.addEventListener('resize', () => {
    console.log('resize')
    overflowHandler()
})





const overflowHandler = () => {
    const cards = document.querySelectorAll('.card-body');
    cards.forEach((item) => {
        const textBlock = item.getElementsByClassName('card-text')[0];
        if (textBlock.scrollHeight > 290) {
            const buttonElement = item.getElementsByClassName('show-all')[0];

            textBlock.classList.add('card-text-overflow');

            if (buttonElement) {
                buttonElement.classList.add('show')
            }

        } else {
            const buttonElement = item.getElementsByClassName('show-all')[0];

            textBlock.classList.remove('card-text-overflow');
            if (buttonElement) {
                buttonElement.classList.remove('show')
            }
        }
    })
}

document.addEventListener("DOMContentLoaded", function() {
    var cookiePopup = document.getElementById("cookie-popup");
    var acceptButton = document.getElementById("accept-cookie");

    acceptButton.addEventListener("click", function() {
        cookiePopup.style.display = "none";
        setCookie("cookieAccepted", "true", 365); // Установка куки на 365 дней
    });

    // Проверка, была ли уже принята политика использования файлов cookie
    var cookieAccepted = getCookie("cookieAccepted");
    if (!cookieAccepted) {
        cookiePopup.style.display = "block";
    }
});

// Функция для установки куки
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Функция для получения значения куки
function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}




