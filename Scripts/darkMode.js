function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=Lax";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function loadSite() {
    const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    var dark = getCookie("darkmode");
    if (dark == "True") {
        toggleDarkMode();
        var elements = document.getElementsByClassName("darktoggle");
        for (let item of elements) {
            item.checked = true;
        }
    }

    if (dark == "" && isDarkMode) {
        toggleDarkMode();
        var elements = document.getElementsByClassName("darktoggle");
        for (let item of elements) {
            item.checked = true;
        }
    }

    // Make show menu button checked on page load (on mobile checked will be false)
    var menuToggle = document.getElementById("menuToggle");
    menuToggle.checked = true;
}

function toggleDarkMode(fromClick = false) {
    var element = document.body;
    if (fromClick) element.style.transition = 'all 0.2s ease-in';
    element.classList.toggle("dark");
    if (element.classList.contains("dark")) {
        setCookie("darkmode", "True", 30)
    }
    else {
        setCookie("darkmode", "False", 30)
    }
}

document.addEventListener("DOMContentLoaded", loadSite);