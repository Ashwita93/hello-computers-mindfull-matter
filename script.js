const SpeechRecognition = webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "en-US";
var res;
var res2;
var res3;

//to start listen to our voices
function getSpeech(){
    recognition.onresult = (event) => {
        console.log(event);
        const speechResult = event.results[0][0].transcript;
        console.log(speechResult);
        var answer = document.getElementsByTagName("div")[0].getAttribute("id"); 
        // document.querySelector("#speech-div").textContent = speechResult;
        res = speechResult.toLowerCase();
        if(res === "anxious"){
            console.log("you are feeling " + res);
            document.getElementById("anxious").style.backgroundColor = "#FFF";
            document.getElementById("anxious").style.border = "3px solid #fd8c04";
            setTimeout(function(){window.location.hash = "section3"}, 2000);
            setTimeout(function(){window.location.hash = "section5"}, 12000);
            // getSpeech3();
            document.querySelector("#showres").textContent = speechResult;    
        }
        if(res === "stressed"){
            console.log("you are feeling " + res);
            document.getElementById("stressed").style.backgroundColor = "#FFF";
            document.getElementById("stressed").style.border = "3px solid #fd8c04";
            setTimeout(function(){window.location.hash = "section3"}, 2000);
            setTimeout(function(){window.location.hash = "section5"}, 12000);
            // getSpeech3();
            document.querySelector("#showres").textContent = speechResult;

        }
        if(res === "angry" || res === "upset" || res === "sad"){
            console.log("you are feeling " + res);
            document.getElementById("angry").style.backgroundColor = "#FFF";
            document.getElementById("angry").style.border = "3px solid #fd8c04";
            setTimeout(function(){window.location.hash = "section3"}, 2000);
            setTimeout(function(){window.location.hash = "section5"}, 12000);
            // getSpeech3();
            document.querySelector("#showres").textContent = speechResult;
        }
    };

    //when the session is over
    recognition.onend = () => {
        console.log("session is over");
        // recognition.start();
        // getSpeech3(); // to make the detection of speech going on and on
    };
}

function getSpeech2(){
    recognition.onresult = (event) => {
        console.log(event);
        const speechResult2 = event.results[0][0].transcript;
        console.log(speechResult2);
        var answer = document.getElementsByTagName("div")[0].getAttribute("id"); 
        // document.querySelector("#speech-div").textContent = speechResult;
        res2 = speechResult2.toLowerCase();
        if(res2 === "play games" || res2 === "relaxing games" || res2 === "play relaxing games"){
            console.log(res2);
            document.getElementById("games").style.backgroundColor = "#f9f9f9";
            document.getElementById("games").style.border = "3px solid #487d54";
            setTimeout(function(){window.location.href = "https://www.epicgames.com/store/en-US/product/journey/home"}, 2000);    
        }
        if(res2 === "listen to music" || res2 ==="music"  || res2 ==="play music" || res2 === "play relaxing music" || res2 === "relaxing music"){
            console.log(res2);
            document.getElementById("music").style.backgroundColor = "#f9f9f9";
            document.getElementById("music").style.border = "3px solid #487d54";
            setTimeout(function(){window.location.href = "https://open.spotify.com/playlist/6gCC8kozvUlLGTzl2YO2MR"}, 2000);
        }
        if(res2 === "meditate" || res2 === "try meditation" || res2 === "I want to mediate"){
            console.log(res2);
            document.getElementById("meditate").style.backgroundColor = "#f9f9f9";
            document.getElementById("meditate").style.border = "3px solid #487d54";
            setTimeout(function(){window.location.href = "https://www.headspace.com/blog/category/meditation/"}, 2000);
        }
    };

    //when the session is over
    recognition.onend = () => {
        console.log("session is over");
        recognition.stop();
        // getSpeech(); // to make the detection of speech going on and on
    };
}

function getSpeech3(){
    recognition.onresult = (event) => {
        console.log(event);
        const speechResult3 = event.results[0][0].transcript;
        console.log(speechResult3);
        var answer = document.getElementsByTagName("div")[0].getAttribute("id"); 
        // document.querySelector("#speech-div").textContent = speechResult;
        res3 = speechResult3.toLowerCase();
        if(res3 === "yes i feel better" || res3 === "i feel better " || res3 === "i'm feeling much better"){
            console.log(res3);
            document.getElementById("better").style.backgroundColor = "#f9f9f9";
            document.getElementById("better").style.border = "3px solid #59886b";  
        }
        if(res3 === "no i'm not" || res3 ==="i don't feel good"  || res3 ==="no not really" || res3 === "not really"){
            console.log(res3);
            document.getElementById("worse").style.backgroundColor = "#f9f9f9";
            document.getElementById("worse").style.border = "3px solid #f2d974";
            setTimeout(function(){window.location.hash = "section4"}, 2000);
            getSpeech2();
        }
    };

    //when the session is over
    recognition.onend = () => {
        console.log("session is over");
        // recognition.start();
        // getSpeech2(); // to make the detection of speech going on and on
    };
}


//getting the gif's from voice we speak
document.querySelector("#button1").onclick = ()=>{
    console.log("clicked");
    recognition.start();
    getSpeech();
};

document.querySelector("#button3").onclick = ()=>{
    console.log("clicked");
    recognition.start();
    getSpeech2();
};


