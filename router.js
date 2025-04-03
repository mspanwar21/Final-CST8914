const routes = {
    404: {
        template: "404",
        title: "404",
        description: "Page not found",
    },
    "home": {
        template: "home",
        title: "Home",
        description: "Empower Ability Labs home page with company description. ",
    },
    service: {
        template: "page2",
        title: "Our Services",
        description: "Our workshops, speakers, and testing services",
    },
    schedule: {
        template: "form",
        title: "Schedule a call",
        description: "Tell us your phone number and what you would like to talk about.",
    },
};

const locationHandler = async () => {
    
    // get the url path, replace hash with empty string
    var location = window.location.hash.replace("#", "");
    // if the path length is 0, set it to primary page route
    if (location.length == 0) location = "/";
    if(location == '/') location = 'home';

    // get the route object from the routes object
    const route = routes[location] || routes["404"];

    const html = loadPage(route.template);

    


    // set the content of the content div to the html
    document.getElementById("app").innerHTML = html;
    // set the title of the document to the title of the route
    document.title = route.title;   
    const liveRegion = document.getElementById("livetitle");         
    liveRegion.innerHTML = "Navigated to " + route.title + " page";
    //alert(liveRegion.innerHTML)
    document.getElementById("page1-link").ariaPressed = "true";
    // set the description of the document to the description of the route
    document
        .querySelector('meta[name="description"]')
        .setAttribute("content", route.description);
};
// var content = document.getElementById('app');

function loadPage(page) {
    // alert("loadPage function router.js 50 called for page: " + page);
    // content.innerHTML = '';  // Clear current content
    var liveRegion = document.getElementById("livetitle");
    let returnHTML = "default 56";

    switch (page) {
      case 'home':       
        // document.title = "Home Page";             
        liveRegion.textContent = `Navigated to Home page.`;
        // document.getElementById("page1-link").ariaPressed = "true";

        returnHTML = `     
            <h2 id="homeheading">Welcome to Empower Ability Labs! </h2>
            <p>Empower Ability Labs is a hub for learning and empathy-building.  We are on a mission to foster understanding and 
            promote inclusive digital experiences for all. We offer a range of services designed to promote 
            accessibility awareness, drive inclusivity, and enhance the user experience. And help you find 
            answers on How do people with disabilities use technology and navigate the digital world? What tools do 
            they employ? 
            </p>
            <p>
              <button type="button" onclick="showLightbox()">Meet the Empower Community!</button>
            </p>
            <p>
              <a href="#">Instruction for “Meet the Empower Community!</a>
            </p> 
           
            <p>Instruction for Learn more links: </p>
            <div class="row">
              <div class="threecollayout">
                <article class="column">
                <h3>Our approach</h3>  
                <p>Empower Ability Labs utilizes a hands-on approach to raise awareness and promote empathy. 
                Our immersive workshops and lab days provide participants with a unique opportunity to 
                step into the shoes of individuals with disabilities and navigate the world from their 
                perspective.</p>
                Learn more goes to </p>
                <p><a href='https://www.google.com/search/howsearchworks/our-approach/'>Learn more</a></p>
                </article>

                <article class="column">
                <h3>Services</h3>
                <p>Promote accessibility awareness and enhance the user experience.</p>
                <ul>
                  <li>Empathy lab days and workshops</li>
                  <li>Go beyond WCAG compliance!</li
                  <li>Inspirational speakers.</li>
                </ul>
                <p><a href='#'>Learn more</a></p>
                </article>
                <article class="column">
                <h3>Testimonials</h3>
                <p>Invite a speaker with disabilities to share their unique journey. This captivating addition to your upcoming event will 
                offer insights that resonate,  inspire, educate, and enrich your team’s understanding of inclusion.</p>
                <p><a href='#'>Learn more</a></p>
                </article>
              </div>
            </div>
            <div class="row"></div>

            <div role="dialog" 
                 class="modal" 
                 id="lightboxmodal"
                aria-labelledby="dialoglabel"
                aria-model="true"
                >

              <h3 id="dialoglabel">Community Steering Committee </h3>
              <button type="button" class="close" onclick="closeModal()" aria-label="Close">
                <span aria-hidden="true">Close</span>
              </button>
              <p>We get an aha! moments from product managers who try our services for the first time. We offered many lab days, workshops and offered usability testing services to many companies and organizations including:</p>
              <ul>
              <li>McGill University </li>
              <li>Walmart.ca</li>
              <li>Apple.ca</li>
              <li>Google.ca</li>
              <li>Government of Canada</li>
              
            </div>`;
        break;

      case 'page2':
        // liveRegion.textContent = `Navigated to Services page.`;
        // document.title = "Services";
        //document.title.focus();
        returnHTML = `
                            <h2>Services content architecture</h2>
                            <p>Dedicated space or programs designed to cultivate empathy and understanding among individuals 
                                towards the challenges faced by people with disabilities in using technology and interacting with 
                                various environments.
                            </p>
                            <h3>Empathy Lab days and workshops </h3>
                            <p>The lab days and workshops typically provide hands-on experiences, simulations, and interactions 
                                with assistive technologies, tools, and scenarios that replicate the obstacles individuals with 
                                disabilities encounter daily.
                            </p>
                            <h3>Inspirational speakers</h3>
                            <p>Invite a speaker with disabilities to take share their unique journey. This captivating addition 
                               to your upcoming event will offer insights that resonate, inspire, educate, and enrich your team 
                               collective understanding of inclusion. 
                            </p>
                            <h3>Usability testing</h3>
                            <p>Go beyond WCAG! Involve individuals with disabilities in usability testing to gather valuable 
                            insights for refining product strategy and identifying accessibility concerns at an early stage when 
                            solutions are more feasible and cost-effective. You have access to a diverse community of people 
                            with disabilities, who use various assistive technologies. With technical expertise 
                            ranging from novice to expert, our community can support your product lifecycle from user research, 
                            to design, to QA.
                            </p>
                            `;
        document.getElementById('page2-link').setAttribute('aria-current', 'page');
        break;

      case 'form':
        // liveRegion.textContent = `Navigated to Schedule a call page.`;

        // document.title = "Schedule a call";
        //document.title.focus();
        returnHTML = `
          <h2>Schedule a call</h2>
          <p>At Empower Ability Labs, we are dedicated to cultivating empathy and driving positive change through immersive 
             experiences.  Fill out the form below and we’ll get back to you as soon as we can to schedule a call with our 
             sales team!
          </p>
          
          <form aria-label="Sample Form" id="scheduleForm">
            <label for="busname">Business Name:</label>
            <input type="text" id="busname" name="busname" required aria-required="true" aria-describedby="busnameerror" />
            <div id='busnameerror' class='errorMessage'><i class="fa fa-exclamation-triangle"></i>Busname error message</div>
            <br>
            <label for="phone">Phone number :</label>
            <!-- <input type="phone" id="phone" name="phone" required aria-required="true" placeholder="(XXX)-XXX-XXXX" title="10 digit area code" maxlength="15" /> -->
            <input type="text" id="phone" name="phone" required aria-required="true" placeholder="(XXX)-XXX-XXXX" title="10 digit area code"  />
            <div id='phoneerror' class='errorMessage'><i class="fa fa-car"></i>Phone error message</div>
            <br>
            <label for="email">Email: (required)</label>
            <input type="email" id="email" name="email" required aria-required="true" />
            <div id='emailerror' class='errorMessage'><i class="fa fa-car"></i>Mail error message</div>
            <br>
            <fieldset id="talkAboutGroup">
            <legend>What would you like to talk about:</legend>
              <div>
                <input type="checkbox" name="workshop" id="check_workshop" />
                <label for="check_workshop">Awareness lab days  and workshops</label>
                <br>
                <input type="checkbox" name="invite" id="check_invite" onclick="togglePleaseTellUs()" />
                <label for="check_invite">Invite a speaker with disabilities to your event</label>
                <br>
                <input type="checkbox" name="testing" id="check_testing" />
                <label for="check_testing">Usability testing</label>
              </div>
            </fieldset>

            <div id="pleaseTellUs" hidden>
                <label for="txtboxMultiline">Please tell us about your event </label>
                <textarea id="txtboxMultiline"></textarea>
            </div>
            <div id="receiveemails">Do you want to recieve emails?"</div>
            <label class="switch" tabindex="0">
                <input type="checkbox" id="toggle-switch" onchange="toggleSwitch(this)" aria-describedby="receiveemails" />
                <span class="slider"></span>
            </label>
            <br>
            <button onclick="validateForm()">Submit</button>
          </form>
         <div id="thankyou" class="thankyou">Thank you for submitting the form</div>
        `;
        document.getElementById('form-page-link').setAttribute('aria-current', 'page');
        break;
    }
    return returnHTML;
}

// create a function that watches the hash and calls the urlLocationHandler
window.addEventListener("hashchange", locationHandler);
// call the urlLocationHandler to load the page
locationHandler();
