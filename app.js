
const tablinks= document.getElementsByClassName("tab-links") ; 
const tabcontents= document.getElementsByClassName("tab-contents") ; 

function opentab (tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }

    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

// **************for sidemenu********************

const sidemenu= document.getElementById("sidemenu")

function openmenu(){
    sidemenu.style.right="0"
}

function closemenu(){
    sidemenu.style.right="-200px"
}

// ******************for contact form ******************************
const scriptURL = 'https://script.google.com/macros/s/AKfycbxHC5UjLnAdNOqmoKC_TdTN6bu8Q0iJLV3VU8h0yrsSRGnO7Qn0uoliSJDSFPxck7WMyQ/exec'
// const scriptURL = `${process.env.SCRIPT_URL}`
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML= "Message sent succesfully"
        setTimeout(function(){
            msg.innerHTML=""
        }, 3000);
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})