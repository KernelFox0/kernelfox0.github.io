document.addEventListener("DOMContentLoaded", resetFilters);

function resetFilters() {
    let checkboxes = document.getElementsByClassName("checkbox");
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
        checkboxes[i].addEventListener("click", applyFilters);
    }
}

function applyFilters() {
    validateFilters()
}

function validateFilters() {
    let others = document.getElementById("byOthers");
    let me = document.getElementById("byMe");
    if (others.checked && !me.checked) {
        let showKernel = document.getElementById("containsMe");
        if (!showKernel.checked) {
            showKernel.checked = true;
        }
    }
}