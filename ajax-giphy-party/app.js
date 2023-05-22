"use strict";
"use strict";

let $searchInput = $("#gsearch");
let $gifSearchForm = $("#gsearch-form");
const $SUBMIT_BUTTON = $("#gsearch-submit");
const $DELETE_BUTTON = $("#delete-button");
const $gifContainer = $("#gif-container");

// function randomIndex(array){
//   return Math.floor(Math.random() * array.length)
// }


// async function getGif(input) {
//   let url = `http://api.giphy.com/v1/gifs/search?q=${input}&`;
//   let apiKey = "api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
//   let response = await axios.get(`${url}${apiKey}`);
//   console.log("got", response);
//   return response
// }

// async function handleSubmit(evt) {
//   evt.preventDefault();
//   let result = await getGif($searchInput.val());
//   console.log(result)

//   let url = result.data.data[2].images.original.url;

//   let newGif = $("<img>", { src: url });
//   $("#gif-container").append(newGif);
//   console.log(result);
// }

// $gifSearchForm.on('submit', handleSubmit);


// //delete
// function deleteGif(){
//    $gifContainer.empty();
// }
//  $DELETE_BUTTON.on('click',deleteGif);


const gifUrl = "http://api.giphy.com/v1/gifs/search";
const gifKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const $inputText = $("#search-box");
const $submit = $(".form");
const $delete = $(".delete-box");
const $divBox = $(".gif-box");
/\/random function

// function randomIndex(array){
//   return Math.floor(Math.random() * array.length);
// }

// //get the img from the API
async function getImg() {
  let inputValue = $inputText.val();
  let response = await axios.get(`http://api.giphy.com/v1/gifs/search${inputValue}MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`)
  console.log("gooot",response);
  return response;

}