//Function that can be used to run JavaScript on the page
function knowledgeRunner(){

}
knowledgeRunner()


/* CONTENT */
class Content {
    constructor(title, jumbotron, content) {
        this.title = title;
        this.jumbotron = jumbotron;
        this.content = content;
    }
    load() {
        let jumbotronNode = document.getElementById('jumbotron');
        let contentNode = document.getElementById('content');
        jumbotronNode.innerHTML = this.jumbotron;
        contentNode.innerHTML = this.content;
    }
}

var titleExt = " - Empower Ability Labs";

// navigation object to map pages to
var contents = {
    home: new Content('' ,'', ''),
    services: new Content('' ,'', ''),
    contact: new Content('' ,'', '')
};

// contents of 'home' page
// modal
contents.home = new Content(
    // title
    `Home`,
    `<h1 class="h2" tabindex="-1">Welcome to Empower Ability Labs! </h1>
        <p>Empower Ability Labs is a hub for learning and empathy-building.  We are on a mission to foster understanding and promote inclusive digital experiences for all. We offer a range of services designed to promote accessibility awareness, drive inclusivity, and enhance the user experience. And help you find answers on How do people with disabilities use technology and navigate the digital world? What tools do they employ?</p>
        <p><a href="#" onclick="openModal(event)">Meet the Empower Community! </a></p>`, 
    // content
    `<div class="row">
        <div class="col-md-4">
            <h2 class="h5">Our Approach</h2>
            <p>Empower Ability Labs utilizes a hands-on approach to raise awareness and promote empathy. Our immersive workshops and lab days provide participants with a unique opportunity to step into the shoes of individuals with disabilities and navigate the world from their perspective.</p>
            <p><a href="https://www.google.com/search/howsearchworks/our-approach/" title="Learn more about our approach">Learn more <span class="wb-inv">about our approach</span></a></p>
        </div>
        <div class="col-md-4">
            <h2 class="h5">Services</h2>
            <p>Promote accessibility awareness and enhance the user experience.</p>
            <ul>
                <li>Empathy lab days and workshops</li>
                <li>Go beyond WCAG compliance!</li>
                <li>Inspirational speakers.</li>
            </ul>
            <p><a href="https://www.elevenways.be/en/services" title="Learn more about our services">Learn more <span class="wb-inv">about our services</span></a></p>
        </div>
        <div class="col-md-4">
            <h2 class="h5">Testimonials</h2>
            <p>Invite a speaker with disabilities to share their unique journey. This captivating addition to your upcoming event will offer insights that resonate,  inspire, educate, and enrich your team's understanding of inclusion.</p>
            <p><a href="https://dictionary.cambridge.org/us/dictionary/english/testimonial" title="Learn more about testimonials">Learn more <span class="wb-inv">about testimonials</span></a></p>
        </div>
    </div>`
);

contents.services = new Content(
    // title
    `Services`,
    `  <!-- Banner Section -->
       <section id="content1" class="container">
          <h1 class="h1" tabindex="-1">Welcome to Empower Ability Labs Services!</h1>
          <img id="thumbsEmoji" src="images/services.png" alt = ""> 
          <p>Dedicated space or programs designed to cultivate empathy and understanding among individuals towards the challenges faced by people with disabilities in using technology and interacting with various environments.</p>
        </section>
    `,
    // content
    `   <!-- 1st Content Section -->
        <section id="content2" class="container">
          <h2 class="h2">Empathy Lab days and workshops</h2>
          <p>The lab days and workshops typically provide hands-on experiences, simulations, and interactions with assistive technologies, tools, and scenarios that replicate the obstacles individuals with disabilities encounter daily.</p>
        </section>

        <!-- 2nd Content Section -->
        <section id="content3" class="container">
          <h2 class="header3">Inspirational speakers</h2>
          <p>Invite a speaker with disabilities to take share their unique journey. This captivating addition to your upcoming event will offer insights that resonate, inspire, educate, and enrich your team collective understanding of inclusion.</p>
        </section>

        <!-- 3rd Content Section -->
        <section id="content4" class="container">
          <h2 class="header4">Usability testing</h2>
          <p>Go beyond WCAG! Involve individuals with disabilities in usability testing to gather valuable insights for refining product strategy and identifying accessibility concerns at an early stage when solutions are more feasible and cost-effective. You have access to a diverse community of people with disabilities, who use various assistive technologies. With technical expertise ranging from novice to expert, our community can support your product lifecycle from user research, to design, to QA.</p>
        </section>`,
);
// contact page
contents.contact = new Content(
      // title
      `Schedule a Call`,
      `<h1 class="h2" tabindex="-1">Schedule a Call</h1>
          <img id="callerEmoji" src="images/scheduleacall.png" alt = ""> 
          <p>At Empower Ability Labs, we’re excited to connect with you! Whether you’re looking to enhance accessibility, invite an inspiring speaker, or explore usability testing, we’re here to help. Fill out the form below to schedule a call and take the first step toward creating inclusive digital experiences.</p>
        `,
      // content
      `
       <div class="container">
           <!-- ARIA live region for dynamic alerts -->
               <!-- Live Region for Screen Readers -->
            <div id="screenreader-notification" aria-live="polite" class="sr-only"></div>
            <!-- We don't need aria-live here because we are moving focus to the alert. with aria-live, it gets read twice -->
           <div id="alert-region" class="alert-region">
                <!-- Alerts will be dynamically injected here -->
            </div>
   
           <form id="contact-form" novalidate>
               <!-- Business Name -->
               <div class="form-group">
                    <p>Required fields are denoted by a <span style = "color:#B20000;">*</span></p> 
                   <label for="business-name">Business Name <span aria-hidden="true" style = "color:#B20000;">*</span>:</label>
                   <input type="text" class="form-control" id="business-name" placeholder="Enter your business name" aria-required="true">
               </div>
   
               <!-- Phone Number -->
               <div class="form-group">
                   <label for= "phone-number">Phone Number <span aria-hidden="true" style = "color:#B20000;">*</span>:</label>
                   <input type="tel" class="form-control" id="phone-number" placeholder="Enter your phone number" aria-required="true">
               </div>
   
               <!-- Email -->
               <div class="form-group">
                   <label for="email">Email <span aria-hidden="true" style = "color:#B20000;">*</span>:</label>
                   <input type="email" class="form-control" id="email" placeholder="Enter your email" aria-required="true">
               </div>
   
               <!-- Topics -->
               <div class="form-group">
                   <label>What would you like to talk about? <span aria-hidden="true" style = "color:#B20000;">*</span></label>
                   <div class="form-check">
                       <input type="checkbox" class="form-check-input" id="awareness">
                       <label class="form-check-label" for="awareness">Awareness lab days and workshops</label>
                   </div>
                   <div class="form-check">
                       <input type="checkbox" class="form-check-input" id="speaker">
                       <label class="form-check-label" for="speaker">Invite a speaker with disabilities to your event</label>
                   </div>
                   <div class="form-check">
                       <input type="checkbox" class="form-check-input" id="usability">
                       <label class="form-check-label" for="usability">Usability testing</label>
                   </div>
               </div>
   
                <!-- Event Details --> 
                <div class="form-group" id="event-details-group" style="display: none;">
                    <label for="event-details">Tell us about your event <span class="required-indicator" aria-hidden="true" style="display: none;">*</span>:</label>
                    <textarea class="form-control" id="event-details" rows="4" placeholder="Provide details about your event"></textarea>
                </div>
   
                <!-- Email Updates Toggle Switch -->
                <div class="form-group">
                    <label for="email-updates">Receive emails about updates and services:</label>
                    <div class="toggle-switch">
                        <input type="checkbox" id="email-updates" name="email-updates" role="switch" aria-checked="false">
                        <span class="slider" aria-hidden="true"></span>
                    </div>
                </div>   
               <!-- Submit Button -->
               <button type="submit" class="btn btn-dark">Schedule a Call</button>
           </form>
       </div>
      `
   );

/**
 * 
 * {string} page 
 */
function loadContent(page) {
    contents[page].load();
    document.title = contents[page].title + titleExt;

    // Call the setupContactForm function if the contact page is loaded
    if (page === 'contact') {
        setupContactForm();
    }
}


function setupContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        // Get references to the elements
        const speakerCheckbox = document.getElementById('speaker');
        const eventDetailsGroup = document.getElementById('event-details-group');
        const eventDetailsField = document.getElementById('event-details');
        const requiredIndicator = eventDetailsGroup.querySelector('.required-indicator');
        const screenReaderNotification = document.getElementById('screenreader-notification'); // Get the live region

        // Function to toggle event details visibility
        function toggleEventDetails() {
            if (speakerCheckbox.checked) {
                // Show event details
                eventDetailsGroup.style.display = '';
                // Set required attribute
                eventDetailsField.setAttribute('aria-required', 'true');
                // Show required indicator
                requiredIndicator.style.display = '';
                // Announce to screen reader users
                updateLiveRegion(screenReaderNotification, "Event details field is now visible and required.");
            } else {
                // Hide event details
                eventDetailsGroup.style.display = 'none';
                // Remove required attribute
                eventDetailsField.removeAttribute('aria-required');
                // Hide required indicator
                requiredIndicator.style.display = 'none';
                // Announce to screen reader users
                updateLiveRegion(screenReaderNotification, "Event details field is now hidden.");
            }
        }

        // Call the function initially to set the correct visibility
        toggleEventDetails();

        // Add event listener
        speakerCheckbox.addEventListener('change', toggleEventDetails);

        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Clear previous alerts
            const alertRegion = document.getElementById('alert-region');
            alertRegion.innerHTML = '';
            alertRegion.className = 'alert-region'; // Reset classes

            // Gather form data
            const businessName = document.getElementById('business-name').value.trim();
            const phoneNumber = document.getElementById('phone-number').value.trim();
            const email = document.getElementById('email').value.trim();
            const awareness = document.getElementById('awareness').checked;
            const speaker = speakerCheckbox.checked;
            const usability = document.getElementById('usability').checked;
            const emailUpdates = document.getElementById('email-updates').checked;
            const eventDetails = eventDetailsField.value.trim();

            // Validation logic
            const errors = [];

            if (!businessName) {
                errors.push("Business name is required.");
            }

            const phonePattern = /^[\d\s-]{10,15}$/;
            if (!phoneNumber || !phonePattern.test(phoneNumber)) {
                errors.push("Phone number is required and must be 10-15 digits (e.g., 613-123-1234).");
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email || !emailPattern.test(email)) {
                errors.push("A valid email address is required (e.g., name@example.com).");
            }

            if (!awareness && !speaker && !usability) {
                errors.push("You must select at least one topic to talk about.");
            }

            // Only validate event details if speaker is checked
            if (speaker && !eventDetails) {
                errors.push("Event details are required.");
            }

            // Handle validation errors
            if (errors.length > 0) {
                // Apply alert classes to alertRegion
                alertRegion.className = 'alert alert-danger alert-region'; // Assuming 'alert' is a base class

                // Add ARIA attributes for accessibility
                alertRegion.setAttribute('aria-labelledby', 'alert-title');
                alertRegion.setAttribute('aria-describedby', 'alert-description');
                alertRegion.setAttribute('tabindex', '0'); // Make focusable and include in tab order

                // Build the alert content with proper accessible name and description
                alertRegion.innerHTML = `
                    <p id="alert-title" class="sr-only">Error Alert.</p>
                    <div id="alert-description">
                        <ul>
                            ${errors.map(err => `<li>${err}</li>`).join('')}
                        </ul>
                    </div>
                    <button type="button" class="close-btn" aria-label="Close alert">
                        <span aria-hidden="true">&times;</span>
                    </button>
                `;

                // Add event listener to close button
                const closeButton = alertRegion.querySelector('.close-btn');
                closeButton.addEventListener('click', () => {
                    // Clear the alert content
                    alertRegion.innerHTML = '';
                    alertRegion.className = 'alert-region'; // Reset classes
                    alertRegion.removeAttribute('aria-labelledby');
                    alertRegion.removeAttribute('aria-describedby');
                    alertRegion.removeAttribute('tabindex'); // Remove tabindex

                    // Update the live region with a unique message without exposing the timestamp
                    updateLiveRegion(screenReaderNotification, "The alert has been closed.");
                });

                // Set focus to the alert region to make it accessible via keyboard and screen readers
                alertRegion.focus();

                // Update the live region to announce the alert with a hidden timestamp
                updateLiveRegion(screenReaderNotification, "");

                return;
            }

            // Success message handling
            alertRegion.className = 'alert alert-success alert-region'; // Assuming 'alert' is a base class

            // Add ARIA attributes for accessibility
            alertRegion.setAttribute('aria-labelledby', 'alert-title');
            alertRegion.setAttribute('aria-describedby', 'alert-description');
            alertRegion.setAttribute('tabindex', '0'); // Make focusable and include in tab order

            alertRegion.innerHTML = `
                <p id="alert-title" class="sr-only">Success Alert.</p>
                <div id="alert-description">
                    <p>Thank you for scheduling a call! We will get in touch soon.</p>
                </div>
                <button type="button" class="close-btn" aria-label="Close alert">
                    <span aria-hidden="true">&times;</span>
                </button>
            `;

            const closeButtonSuccess = alertRegion.querySelector('.close-btn');
            closeButtonSuccess.addEventListener('click', () => {
                // Clear the alert content
                alertRegion.innerHTML = '';
                alertRegion.className = 'alert-region'; // Reset classes
                alertRegion.removeAttribute('aria-labelledby');
                alertRegion.removeAttribute('aria-describedby');
                alertRegion.removeAttribute('tabindex'); // Remove tabindex

                // Update the live region with a unique message without exposing the timestamp
                updateLiveRegion(screenReaderNotification, "The alert has been closed.");
            });

            // Set focus to the alert region to make it accessible via keyboard and screen readers
            alertRegion.focus();

            // Update the live region to announce the alert with a hidden timestamp
            updateLiveRegion(screenReaderNotification, "");

        });
    }
}

/**
 * Updates the live region to ensure screen readers announce the content.
 * Appends a timestamp within an aria-hidden span to make each message unique without being read aloud.
 * 
 * {HTMLElement} liveRegion - The live region element.
 * {string} message - The message to announce.
 */
function updateLiveRegion(liveRegion, message) {
    // Clear previous content
    liveRegion.innerHTML = '';

    // Use a timeout to ensure the screen reader registers the change
    setTimeout(() => {
        // Append the message with a unique identifier that is hidden from screen readers
        liveRegion.innerHTML = `${message} <span aria-hidden="true">${new Date().getTime()}</span>`;
    }, 100);
}

/**
 * Updates the live region to ensure screen readers announce the content.
 * Appends a timestamp within an aria-hidden span to make each message unique without being read aloud.
 */
function updateLiveRegion(liveRegion, message) {
    // Clear previous content
    liveRegion.innerHTML = '';

    // Use a timeout to ensure the screen reader registers the change
    setTimeout(() => {
        // Append the message with a unique identifier that is hidden from screen readers
        liveRegion.innerHTML = `${message} <span aria-hidden="true">${new Date().getTime()}</span>`;
    }, 100);
}


/* START MODAL */

let focusableElements = [];
let modalElement = null;
let lastFocusedElement = null;

/**
 * Function to close the modal
 */
function closeModal() {
    console.log('closeModal called'); // Debugging statement

    // Remove modal and overlay from the DOM
    const overlay = document.querySelector('.modal-overlay');
    const modal = document.querySelector('.modal-dialog');

    if (overlay) overlay.remove();
    if (modal) modal.remove();

    // Remove event listeners
    document.removeEventListener('keydown', trapTabKey);
    document.removeEventListener('focusin', maintainFocus);

    // Restore background scrolling
    document.body.style.overflow = '';

    // Return focus to the last focused element
    if (lastFocusedElement) {
        lastFocusedElement.focus();
    }

    // Reset modal references
    modalElement = null;
    focusableElements = [];
}

/**
 * Function to open the modal
 */
function openModal(event) {
    event.preventDefault();

    // Save the element that had focus
    lastFocusedElement = document.activeElement;

    // Create the modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.setAttribute('role', 'presentation');
    overlay.setAttribute('aria-hidden', 'true');

    // Create the modal container
    const modal = document.createElement('div');
    modal.className = 'modal-dialog';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Meet the Empower Community dialog');
    modal.setAttribute('tabindex', '-1'); // Make modal focusable

    // Create modal content container
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Create modal header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';

    const modalTitle = document.createElement('h2');
    modalTitle.textContent = 'Meet the Empower Community';
    modalTitle.setAttribute('aria-hidden', 'true'); // Hide heading from screen readers

    modalHeader.appendChild(modalTitle);

    // Create modal body
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';

    const modalDescription = document.createElement('p');
    modalDescription.textContent =
        'We get "aha!" moments from product managers who try our services for the first time. We have hosted lab days, workshops, and usability testing services for organizations like:';

    const orgList = document.createElement('ul');
    const orgs = [
        'McGill University',
        'Walmart.ca',
        'Apple.ca',
        'Google.ca',
        'Government of Canada',
    ];

    orgs.forEach((org) => {
        const li = document.createElement('li');
        li.textContent = org;
        orgList.appendChild(li);
    });

    modalBody.appendChild(modalDescription);
    modalBody.appendChild(orgList);

    // Create modal footer
    const modalFooter = document.createElement('div');
    modalFooter.className = 'modal-footer';

    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.className = 'close-button';
    closeButton.textContent = 'Close';

    // Set accessible name for the close button
    closeButton.setAttribute('aria-label', 'Close');

    // Attach event listener to close button
    closeButton.addEventListener('click', closeModal);

    modalFooter.appendChild(closeButton);

    // Assemble modal content
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    // Append modal content to modal dialog
    modal.appendChild(modalContent);

    // Append modal and overlay to the body
    document.body.appendChild(overlay);
    document.body.appendChild(modal);

    // Save reference to the modal element
    modalElement = modal;

    // Collect all focusable elements inside the modal (excluding close button)
    focusableElements = Array.from(
        modal.querySelectorAll(
            'button:not([disabled]):not(.close-button), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
    );

    // Add focus trap event listeners
    document.addEventListener('keydown', trapTabKey);
    document.addEventListener('focusin', maintainFocus);

    // Prevent background scrolling
    document.body.style.overflow = 'hidden';

    // Focus the modal dialog container
    modal.focus();
}

/**
 * Function to trap focus within the modal
 */
function trapTabKey(event) {
    if (!modalElement) return;

    const focusable = Array.from(
        modalElement.querySelectorAll(
            'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
    );

    if (focusable.length === 0) {
        event.preventDefault();
        modalElement.focus();
        return;
    }

    const firstElement = focusable[0];
    const lastElement = focusable[focusable.length - 1];

    if (event.key === 'Tab' || event.keyCode === 9) {
        if (event.shiftKey) {
            // Backward tab
            if (
                document.activeElement === firstElement ||
                document.activeElement === modalElement
            ) {
                event.preventDefault();
                lastElement.focus();
            }
        } else {
            // Forward tab
            if (document.activeElement === lastElement) {
                event.preventDefault();
                firstElement.focus();
            }
        }
    } else if (event.key === 'Escape' || event.keyCode === 27) {
        closeModal();
    }
}

/**
 * Function to maintain focus within the modal
 */
function maintainFocus(event) {
    if (modalElement && !modalElement.contains(event.target)) {
        event.stopPropagation();
        modalElement.focus();
    }
}


//  END MODAL
/*  NAVIGATION */

/**
 * navlinks contains all the <a> marked by the class "nav-link"
 */
var navlinks = document.getElementsByClassName("nav-link");
for (let i=0; i<navlinks.length; i++) {
    navlinks.item(i).addEventListener("click", actionOnClick, false);
    navlinks.item(i).addEventListener("keyup", actionOnKeyUp, false);
}

/*
 * Event listener that handles page loading, using state object's "page" property.
 */
window.addEventListener("popstate", (event) => { 
    if (event.state !== null) {
        loadContent(event.state.page);
    }
});

function getPageFromHref(event) {
    let page = event.currentTarget.getAttribute('href');
    console.log('href='+page);
    return page.replace('#','');
}

/**
 * Prevent default behaviour, i.e. not navigating by href value
 * and tabbing behaviour.
 */
function actionOnClick(e) {
    e.preventDefault();
    let page = getPageFromHref(e);
    console.log('page='+page);
    window.history.pushState({page: page}, null, "#"+page);
    loadContent(page);
}

/*
 * This finds the index of the page by checking the 'href' values of the list and the passed element (target)
 */
function getIndexOfHTMLCollectionByAttribute(list, target, attributeToCheck) {
    for (let i = 0; i < list.length; i++) {
        if (list.item(i).getAttribute(attributeToCheck) == target.getAttribute(attributeToCheck)) {
            return i;
        }
    }
}

/*
 * collects all `<h1>` tags and makes the first in the list focusable.
 * 
 * **NOTE: h1 needs `tabindex="-1"` added to the html content to be focusable.**
 */
function findH1AndFocus() {
    let h1s = document.getElementsByTagName("h1");
    console.log(h1s + " length " + h1s.length);
    if (h1s != null && h1s.length > 0) {
        h1s.item(0).focus();
    }
}

/**
 * moves focus to new index, and changes tabindex of old and new navlinks
 */
function moveIndexAndSetTabindex(index, newindex) {
    navlinks[newindex].focus();
    navlinks[index].setAttribute("tabindex", "-1")
    navlinks[newindex].setAttribute("tabindex", "0");
}

/**
 * Detects key presses from *event paramater (e)*, listens for left/right keys, and changes to previous/next in list of global variable `navlinks`.
 */
function actionOnKeyUp(e) {
    let index = getIndexOfHTMLCollectionByAttribute(navlinks, e.target, 'href');
    let newindex = index;
    console.log("keyCode="+e.keyCode);
    if (e.keyCode == 39) { // right key
        newindex = (index + 1) % 3;
		moveIndexAndSetTabindex(index, newindex);
	} else if (e.keyCode == 37) { // left key
        newindex = ((index - 1) < 0 ? 2 : index - 1)
		moveIndexAndSetTabindex(index, newindex);
	} else if (e.keyCode == 36) { // home
        newindex = 0;
        moveIndexAndSetTabindex(index, newindex);
    } else if (e.keyCode == 35) { // end
        newindex = 2;
        moveIndexAndSetTabindex(index, newindex);
    } else if (e.keyCode == 13) { // enter
        findH1AndFocus();
    }
}

/* Menu */

var navbarToggleButton = document.getElementsByClassName("navbar-toggler").item(0); // there should only be one button fetched, so index is 0
var navbarDiv = document.getElementById("navbarSupportedContent");
var menuButton = document.getElementById("menutoggle");

/* This closes the menu, checks for open menu, then closes it (and updates aria-expanded for screenreader users). */
window.addEventListener("click", function (event) {
    if (navbarDiv.classList.contains("show")) {
        navbarDiv.classList.remove("show");
        navbarDiv.classList.add("collapse");
        menuButton.setAttribute("aria-expanded", "false");
    }
}, false);

/* This enables the menu and changes the aria-expanded so screen readers know it as well. */
navbarToggleButton.addEventListener("click", function (event) {
    event.stopPropagation();
    navbarDiv.classList.toggle("show");
    navbarDiv.classList.toggle("collapse");
    if (navbarDiv.classList.contains("show")) {
        menuButton.setAttribute("aria-expanded", "true");
    } else {
        menuButton.setAttribute("aria-expanded", "false");
    }
}, false);

// add history state and load content on refresh/load from url
let currentHref = (window.location.hash == null || window.location.hash == '') ? '#home' : window.location.hash;
console.log("currentHref="+currentHref);
let page = currentHref.replace('#','');
history.replaceState({page: page}, null, "./"+currentHref);
loadContent(page);


/* END NAVIGATION */
