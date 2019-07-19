const btn = document.querySelector('.talking-phone');
const content = document.querySelector('.content');


const colorsList = [
    ['Wel Done', 'You are awesome person', 'Long live the dark souls'],
    ['You are a Dark soul, burn in Hell you Mother Fucker', "What the hell! Are you even a developer son!", "Chill bro don't be so girly!"]
];

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
    console.log('voice is activated');
};
//When you stop speaking
recognition.onresult = (event) => {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
}
btn.addEventListener('click', () => {
    recognition.start();
});

//To speak back from the browser

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = "What the hell you even mean! Please speak English";
    if (message.includes('dark' || 'black')) {
        speech.text = colorsList[0][Math.floor(Math.random() * colorsList[0].length)];
        document.body.style.backgroundColor = 'darkgrey';
    } else if (message.includes('light' || 'white')) {
        speech.text = colorsList[1][Math.floor(Math.random() * colorsList[1].length)];
        document.body.style.backgroundColor = "white";
    }

    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}