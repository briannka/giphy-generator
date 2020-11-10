

// let rapidAPI = async() => {
//     fetch("https://random-words2.p.rapidapi.com/words?limit=10&lang=en", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-key": "451da810a6mshce8d85146360170p1d234fjsn0caad8efea7d",
// 		"x-rapidapi-host": "random-words2.p.rapidapi.com"
// 	}
// })
//     .then(res => {
//         res.json();
//         debugger;
//     })
//     .then(result => {
//         let targetWord = result.word;
//         console.log(targetWord);
//         console.log('This is the rapidAPI function');
//         let wordDOMLocation = document.getElementById("generated-word");
//         wordDOMLocation.innerHTML = `${targetWord}`;
//         giphyCall(targetWord);
//     })
//     .catch(err => console.error('Couldn\'t complete request', err));
//     // let randomWord = await(apiCall.word);
    // console.log(randomWord);
    
// }

// let giphyCall = async ({ id, word }) => {
//     //calls giphy once word is generated from wordnik
//     //calls with word from wordnik api 
//     let returnedWord = word;
//     let apiCall = fetch(`https://api.giphy.com/v1/gifs/search?api_key=KvzymYhJun6fPQXLkBeGrEPInVZLXTLj&q=${returnedWord}&limit=25&offset=0&rating=g&lang=en`);
//     let fetchedGif = await(apiCall);
//     fetchedGif
//     .then((response) => {
//         let result = response.json();
//         console.log(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }
//Send request to Giphy for getting gif relevant to randomly generated word.
let newGiphy = async(word) => {
    let newWord = word;
    let wordDOMLocation = document.getElementById("generated-word");
    wordDOMLocation.innerHTML = `${newWord}`;
    wordDOMLocation.style.padding = "10px";
await fetch(`https://api.giphy.com/v1/gifs/search?api_key=KvzymYhJun6fPQXLkBeGrEPInVZLXTLj&q=${newWord}&limit=25&offset=0&rating=g&lang=en`)
.then(res => {
    let response = res.json();
    return response;
})
.then(result => {
    let data = result.data;
    let firstGif = data[0].images.original.url;
    let gifLocationInDOM = document.getElementById('gif');
    gifLocationInDOM.src = firstGif;
})
.catch(err => 
    console.log('Couldnt complete request because of error: ', err));
};



//Identify submitted button
let bttn = document.getElementsByClassName("generate-bttn");

//Handle button submission
bttn[0].addEventListener("click", function(e) {
    let words = ["scooby doo", "singing", "cash", "spongebob", "flowers", "sad", "coding", "nerd"];
    let word = words[Math.floor(Math.random() * words.length)];
    newGiphy(word);
})