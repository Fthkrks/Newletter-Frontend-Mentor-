const InputDOM = document.querySelector("#email-input");
const buttonDOM = document.querySelector("#button");
const InvaildDOM = document.querySelector(".invaild-email");
const NewsletterDOM = document.querySelector(".newsletter");
const SubsDOM = document.querySelector(".subs-wrapper");
const SubsdescDOM = document.querySelector(".subs-text");
const DismissDOM = document.querySelector(".dismiss-btn");


buttonDOM.addEventListener("click", (e)=>{
    e.preventDefault();
    let email = InputDOM.value;
    if(email.length ===0){
        InputDOM.classList.add("active");
        InvaildDOM.classList.add("active");

    }else if(!email.includes("@") && !email.includes(".com")){
        InputDOM.classList.add("active");
        InvaildDOM.classList.add("active");

    }else if(email.startsWith("@") || email.startsWith(".com") || !email.endsWith(".com")){
        InputDOM.classList.add("active");
        InvaildDOM.classList.add("active");

    }else{

        NewsletterDOM.style.display ="none";
        SubsDOM.style.opacity = "1";
        SubsDOM.style.visibility ="visible";

        let text =`A confirmation email has been sent to <br> <span>OurEmail</span> Please open
        it <br> and click the button inside to confirm your <br> subscription.`

        let repText = text.replace("OurEmail",email);


        SubsdescDOM.innerHTML = repText;

    }



})

DismissDOM.addEventListener("click",  (e)=>{
    location.reload()

})





