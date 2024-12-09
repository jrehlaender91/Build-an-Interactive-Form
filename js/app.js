/*
    GLOBAL VARIABLES
*/
const nameInput = document.querySelector('#name');
const jobRole = document.querySelector('#title');
const jobRoleInput = document.querySelector('#other');
const design = document.querySelector('#design');
const colors = document.querySelectorAll('#color option');
const checkboxes = document.querySelectorAll('input[type=checkbox]')
const activities = document.querySelector('.activities')

/*
    Focus on load.
*/
window.addEventListener("load", () => {
    nameInput.focus();
    jobRoleInput.style.display = "none";
  });

jobRole.addEventListener("change", () => {
    if(jobRole.value === "other") {
        jobRoleInput.style.display = "inherit";
    }
    else {
        jobRoleInput.style.display = "none";
    }
})

design.addEventListener("change", () => {

    if(design.value === "js puns") {
        colors.forEach(function(color) {
            if(color.text.toLowerCase().includes("js puns")) {
                color.style.display = "inherit";
            } else {
                color.style.display = "none";
            }
        });

    } else if (design.value === "heart js") {
        colors.forEach(function(color) {
            if(color.text.toLowerCase().includes("♥")) {
                color.style.display = "inherit";
            } else {
                color.style.display = "none";
            }
        });
    }
});

activities.addEventListener("change", (e) => {
    checkboxes.forEach(function(item) {
        if(e.target.checked == true) {
            if(e.target.getAttribute("data-day-and-time") === item.getAttribute("data-day-and-time")) {
                item.parentElement.style.color = 'gray'
                item.disabled = true;
                e.target.disabled =false;
            } else if(e.target.parentElement.textContent.toLowerCase().includes("main")) {
                item.disabled = true;
                e.target.parentElement.style.color = 'black'
                e.target.disabled =false;
            }
        } else {
            item.disabled = false;
            item.parentElement.style.color = 'black'
        }     
    })

});