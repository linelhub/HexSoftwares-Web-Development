//SKILLORA COURSE SEARCH & FILTER 

const courseSearch = document.getElementById("courseSearch");
const searchButton = document.getElementById("searchButton");
const filterButtons = document.querySelectorAll(".filter-btn");
const courseCards = document.querySelectorAll(".courses-page .course-card");
const noCourses = document.getElementById("noCourses");

let selectedCategory = "all";


function filterCourses() {

    const searchText = courseSearch
        ? courseSearch.value.toLowerCase().trim()
        : "";

    let visibleCourses = 0;


    courseCards.forEach(function(card) {

        const category = card.dataset.category;

        const title = card
            .querySelector("h3")
            .textContent
            .toLowerCase();

        const description = card
            .querySelector(".course-content p")
            .textContent
            .toLowerCase();


        const matchesCategory =
            selectedCategory === "all" ||
            category === selectedCategory;


        const matchesSearch =
            title.includes(searchText) ||
            description.includes(searchText) ||
            category.toLowerCase().includes(searchText);


        if (matchesCategory && matchesSearch) {

            card.style.display = "block";
            visibleCourses++;

        } else {

            card.style.display = "none";

        }

    });


    if (noCourses) {

        if (visibleCourses === 0) {
            noCourses.style.display = "block";
        } else {
            noCourses.style.display = "none";
        }

    }

}


//CATEGORY FILTER

filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        this.classList.add("active");

        selectedCategory = this.dataset.category;

        filterCourses();

    });

});


//SEARCH

if (searchButton) {

    searchButton.addEventListener("click", function() {
        filterCourses();
    });

}


if (courseSearch) {

    courseSearch.addEventListener("keyup", function() {
        filterCourses();
    });

}


// COURSE ENROLLMENT


const enrollButtons = document.querySelectorAll(
    "#enrollButton, #ctaEnrollButton"
);

enrollButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        alert(
            "Thank you for choosing Skillora! " +
            "Enrollment is coming soon. " +
            "We will notify you when course enrollment is available."
        );

    });

});



// CONTACT FORM


const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert(
            "Thank you for contacting Skillora! " +
            "Your message has been received."
        );

        contactForm.reset();

    });

} 
