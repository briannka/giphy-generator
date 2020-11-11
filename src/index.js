
// Fetch random word
let wordnikAPI = async() => {
    await fetch("https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&api_key=0ku91yyx2eh3914j7aitbvwnuj9x46ngp8p5ostu3kc0057hp")
    .then(async (res) => await res.json())
    .then((result) => {
        let targetWord = result.word;
        newGiphy(targetWord);
    })
    .catch((err) => {
        alert(`Couldn't complete due to ${err}`);
    })
}


//Send request to Giphy for getting gif relevant to randomly generated word.
let newGiphy = async(word) => {
    let newWord = word;
    console.log(newWord);
    let wordDOMLocation = document.getElementById("generated-word");
    wordDOMLocation.innerHTML = `${newWord}`;
    wordDOMLocation.style.padding = "10px";
await fetch(`https://api.giphy.com/v1/gifs/search?api_key=KvzymYhJun6fPQXLkBeGrEPInVZLXTLj&q=${newWord}&limit=25&offset=0&rating=g&lang=en`)
.then(res => {
    return res.json();
})
.then(result => {
    let data = result.data;
    let firstGif = data[0].images.original.url;
    let gifLocationInDOM = document.getElementById('gif');
    gifLocationInDOM.src = firstGif;
})
.catch(err => 
    console.log('Perhaps there is no word for that one... here is the error:', err));
};



//Identify submitted button
let bttn = document.getElementsByClassName("generate-word-bttn");

//Handle button submission
bttn[0].addEventListener("click", function(e) {
    wordnikAPI();
})
