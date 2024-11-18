var loader = document.getElementById('loader');
// loader.style.display = "none";
// Wait for the window to fully load
window.addEventListener('load', function () {
    // Set a timeout to hide the loader after 3 seconds
    setTimeout(function () {
        loader.style.top = "-100%"; // Add a class to apply the transition
    }, 3000);
});

// button back to top 
let bton = document.querySelector('#backTOtop');
window.addEventListener('scroll',()=>{
    if(window.pageYOffset > 50){
        bton.style.bottom="10%"
    }else{
        bton.style.bottom="-100%"
    }
})
bton.addEventListener('click', () => {
    const scrollDuration = 150; // Duration in milliseconds (1 second = 1000 ms)
    const scrollStep = -window.scrollY / (scrollDuration / 15); // Calculate the step size
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval); // Stop the interval when scrollY reaches 0
      }
    }, 15); // 15ms interval for smoother scrolling
  });
// button back to top 


// counter up
let count = document.querySelectorAll(".count")
let arr = Array.from(count)



arr.map(function (item) {
    let startnumber = 0

    function counterup() {
        startnumber++
        let parsent = `${startnumber}%`
        item.innerHTML = parsent

        if (startnumber == item.dataset.number) {
            clearInterval(stop)
        }
    }

    let stop = setInterval(function () {
        counterup()
    }, 90)

})


// scroll to show animation
const sr = ScrollReveal({
    distance: '10px',
    reset: true,
    duration: 500,
    delay: 300
});
sr.reveal('.slide');
ScrollReveal().reveal('.scaleUp', {
    scale: 0.9,
    reset: true
})
ScrollReveal().reveal('.parant', {
    scale: 0.9,
    reset: true
})

const slide = ScrollReveal({
    distance: '10px',
    reset: true,
    duration: 500,
    delay: 300
});
slide.reveal('.parentslide');

const right = ScrollReveal({
    distance: '30px',
    reset: true,
    duration: 500,
    delay: 300,
    origin: 'right' // Set the origin to 'right' for sliding in from the right
});

slide.reveal('.rightSlide');


const left = ScrollReveal({
    distance: '30px',
    reset: true,
    duration: 500,
    delay: 300,
    origin: 'left' // Set the origin to 'right' for sliding in from the right
});

slide.reveal('.leftSlide');







function forFaq() {
    const accordionSections = document.querySelectorAll(".faq-item");

    accordionSections.forEach((section) => {
        const accordionItemHeaders = section.querySelectorAll(
            ".accordion-item-header"
        );

        if (accordionItemHeaders.length > 0) {
            const firstAccordionItemHeader = accordionItemHeaders[0];
            const firstAccordionItemBody =
                firstAccordionItemHeader.nextElementSibling;

            firstAccordionItemHeader.classList.add("active");
            firstAccordionItemBody.style.maxHeight =
                firstAccordionItemBody.scrollHeight + "px";
        }

        accordionItemHeaders.forEach((accordionItemHeader) => {
            accordionItemHeader.addEventListener("click", (event) => {
                const accordionItemBody = accordionItemHeader.nextElementSibling;
                accordionItemHeaders.forEach((item) => {
                    if (item !== accordionItemHeader) {
                        item.classList.remove("active");
                        item.nextElementSibling.style.maxHeight = 0;
                    }
                });
                accordionItemHeader.classList.toggle("active");
                if (accordionItemHeader.classList.contains("active")) {
                    accordionItemBody.style.maxHeight =
                        accordionItemBody.scrollHeight + "px";
                } else {
                    accordionItemBody.style.maxHeight = 0;
                }
            });
        });
    });
}
forFaq();









window.addEventListener("load", () => {
    setTimeout(() => {
        languageModal.style.display = 'flex'; // Show modal
        localStorage.setItem("modalShown", "true"); // Mark as shown
    }, 10000);
});



let langButton = document.getElementById('langButton');
const languageModal = document.getElementById('languageModal');
const closeModal = document.getElementById('closeModal');
const langOptions = document.querySelectorAll('.lang-option');


// Show the modal when the button is clicked
langButton.addEventListener('click', () => {
    languageModal.style.display = 'flex';
});

// Hide the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === languageModal) {
        languageModal.style.display = 'none';
    }
});

// Close the modal when the "Close" button is clicked
closeModal.addEventListener('click', () => {
    languageModal.style.display = 'none';
});

// Handle language selection from the modal
let selectedLanguage = "English"; // Default language

langOptions.forEach(option => {
    option.addEventListener('click', () => {
        selectedLanguage = option.getAttribute('data-lang');
        langButton.textContent = selectedLanguage; // Update langButton text
        languageModal.style.display = 'none'; // Close the modal
  
    });
});

// Page load behavior: show the modal only once after 10 seconds












