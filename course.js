let title= (localStorage.getItem('titlename'))
document.title = JSON.parse(title)
function first_video(){
const video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/W6NZfCO5SIk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>';
localStorage.setItem('video1', JSON.stringify(video));
window.location.href='video.html';
localStorage.setItem('name', JSON.stringify('JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour'))
localStorage.setItem('description', JSON.stringify( '<h3>10,677,368 views</h3>' + '<br/>'+' <h4>Apr 24, 2018 </h4>' +'<br/>'+'Back-end Development\n' +
'Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. \n' +
'🔥 Want to master JavaScript? Get my complete JavaScript course: <a target="_blank" href="https://bit.ly/3Uod3vF">https://bit.ly/3Uod3vF</a>\n' +
'👍 Subscribe for more tutorials like this: https://goo.gl/6PYaGF\n' +
'\n' +
'⭐️ Want to learn more from me? Check out these links: \n' +
'\n' +
'Courses: <a target="_blank" href=" https://codewithmosh.com\n"> https://codewithmosh.com\n</a>' +
'Twitter: <a target="_blank" href="https://twitter.com/moshhamedani">https://twitter.com/moshhamedani</a>\n' +
'Facebook: <a target="_blank" href="https://www.facebook.com/programmingw...">https://www.facebook.com/programmingw...</a>\n' +
'Blog: <a target="_blank" href="http://programmingwithmosh.com ">http://programmingwithmosh.com </a>\n' +
'\n' +
'JavaScript is one of the most popular programming languages in 2022. A lot of people are learning JavaScript to become front-end and/or back-end developers. '))
console.log(JSON.parse(localStorage.getItem('description')))
}
function first_video2(){
const video = ' <iframe width="560" height="315" src="https://www.youtube.com/embed/SBmSRK3feww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
localStorage.setItem('video1', JSON.stringify(video));
window.location.href='video.html';
localStorage.setItem('name', JSON.stringify('JavaScript Full Course (2023) - Beginner to Pro - Part 1'))

}
function first_video3() {
const video =  ' <iframe width="560" height="315" src="https://www.youtube.com/embed/PkZNo7MFNFg" title="YouTube video player"frameBorder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowFullScreen></iframe>';
localStorage.setItem('video1', JSON.stringify(video));
window.location.href='video.html';
localStorage.setItem('name', JSON.stringify('Learn JavaScript - Full Course for Beginners'))


}
function first_video4() {
const video =  ' <iframe width="560" height="315" src="https://www.youtube.com/embed/E3XxeE7NF30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
localStorage.setItem('video1', JSON.stringify(video));
window.location.href='video.html';
localStorage.setItem('name', JSON.stringify('Learn JavaScript With This ONE Project!'))



}
let searc1 = document.getElementById('search_input');
function search(){
let search_divss = document.getElementById('search-result')
const searc = document.getElementById('search_input').value;
let p_namez = document.getElementById('pz')
let p_namey = document.getElementById('py')
let p_namex = document.getElementById('px')
let p_namew = document.getElementById('pw')
let ex1 = document.getElementById('ex1')
let ex2 = document.getElementById('ex2')
let ex3 = document.getElementById('ex3')
let ex4 = document.getElementById('ex4')
let paragraph = document.getElementById('paragraph');

let result =""
const container = document.getElementById("search-result");



if(p_namez.innerText.includes(searc)){
paragraph.innerText = "Search Result";
const innerDiv = document.createElement("div");
innerDiv.classList.add("inner-div");
innerDiv.innerHTML = ex1.innerHTML;
container.appendChild(innerDiv);
}
if(p_namey.innerText.includes(searc)){
paragraph.innerText = "Search Result";
const innerDiv = document.createElement("div");
innerDiv.classList.add("inner-div");
innerDiv.innerHTML = ex2.innerHTML;
container.appendChild(innerDiv);

}
if(p_namex.innerText.includes(searc)){
paragraph.innerText = "Search Result";
const innerDiv = document.createElement("div");
innerDiv.classList.add("inner-div");
innerDiv.innerHTML = ex3.innerHTML;
container.appendChild(innerDiv);

}
if(p_namew.innerText.includes(searc)){
paragraph.innerText = "Search Result";
const innerDiv = document.createElement("div");
innerDiv.classList.add("inner-div");
innerDiv.innerHTML = ex4.innerHTML;
container.appendChild(innerDiv);


}

if(document.getElementById('search_input').value===""){
container.innerHTML = ""
}
if(document.getElementById('search_input').value===""){
paragraph.innerHTML = ""
}

paragraph.innerText ="Search Result:";
document.getElementById('search_input').value= "";


}

// function to detect keypress event
searc1.addEventListener("keypress", function (event) {
// detect event key
if (event.keyCode == 13) {
let search_divss = document.getElementById('search-result')
const searc = document.getElementById('search_input').value;
let p_namez = document.getElementById('pz')
let p_namey = document.getElementById('py')
let p_namex = document.getElementById('px')
let p_namew = document.getElementById('pw')
let ex1 = document.getElementById('ex1')
let ex2 = document.getElementById('ex2')
let ex3 = document.getElementById('ex3')
let ex4 = document.getElementById('ex4')
let paragraph = document.getElementById('paragraph');

let result =""
const container = document.getElementById("search-result");



if(p_namez.innerText.includes(searc)){
const innerDiv = document.createElement("div");
innerDiv.classList.add("inner-div");
innerDiv.innerHTML = ex1.innerHTML;
container.appendChild(innerDiv);
}
if(p_namey.innerText.includes(searc)){
const innerDiv = document.createElement("div");
innerDiv.classList.add("inner-div");
innerDiv.innerHTML = ex2.innerHTML;
container.appendChild(innerDiv);

}
if(p_namex.innerText.includes(searc)){
const innerDiv = document.createElement("div");
innerDiv.classList.add("inner-div");
innerDiv.innerHTML = ex3.innerHTML;
container.appendChild(innerDiv);

}
if(p_namew.innerText.includes(searc)){

const innerDiv = document.createElement("div");
innerDiv.classList.add("inner-div");
innerDiv.innerHTML = ex4.innerHTML;
container.appendChild(innerDiv);


}

if(document.getElementById('search_input').value===""){
container.innerHTML = ""
}
if(document.getElementById('search_input').value===""){
paragraph.innerHTML = ""
}

paragraph.innerText ="Search Result:";
document.getElementById('search_input').value= "";




}
});



// console.log(divs.innerHTML)
