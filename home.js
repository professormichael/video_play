
var leftStyle = getComputedStyle(document.getElementById('left_h'))
document.getElementById('menu').innerHTML = `<img src='hamburger-menu.svg' class="second-img">`
document.getElementById('menu').addEventListener('click', function(){
    
    if(leftStyle.display === 'none'){
        document.getElementById('left_h').style.display = 'block';
        document.getElementById('menu').innerHTML ='<i class="fa fa-times second-img" style="font-size:29px"></i>'


    }
    else{
        document.getElementById('left_h').style.display = 'none';
        document.getElementById('menu').innerHTML = `<img src='hamburger-menu.svg' class="second-img">`
    }
})
function setCookie(name, value, expirationDays) {
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + expirationDays);
    const cookieValue = encodeURIComponent(value) + '; expires=' + expirationDate.toUTCString() + '; secure; samesite=strict;';
    document.cookie = name + '=' + cookieValue;
}

function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return decodeURIComponent(cookie.substring(name.length + 1));
        }
    }
    return null;
}
function deleteCookie(name) {
            document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; secure; samesite=strict;';
}
console.log(getCookie('title_real'))
if(JSON.parse(localStorage.getItem('username') != document.title)){
    document.addEventListener('DOMContentLoaded', function() {
        const popa = document.getElementById('new-body');
        const buttons = popa.querySelectorAll('button');

        buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log("heleleo")
            alert("Log In To Watch Video")
            window.location.href = 'sign in.html'
        });
    });
});


}

function video2(num) {
    if (num=== '1'){
        const video = '<iframe width="560" height="315" src="https://www.youtube.com/embed/W6NZfCO5SIk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>';
        localStorage.setItem('video1', JSON.stringify(video));
        window.location.href = 'video.html';
        localStorage.setItem('name', JSON.stringify('JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour'))
        localStorage.setItem('description', JSON.stringify('<h3>10,677,368 views</h3>' + '<br/>' + ' <h4>Apr 24, 2018 </h4>' + '<br/>' + 'Back-end Development\n' +
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
    }
    if(num ==='2'){
        const video = ' <iframe width="560" height="315" src="https://www.youtube.com/embed/SBmSRK3feww" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        localStorage.setItem('video1', JSON.stringify(video));
        window.location.href = 'video.html';
        localStorage.setItem('name', JSON.stringify('JavaScript Full Course (2023) - Beginner to Pro - Part 1'))
    }
    if(num === '3'){
        const video = ' <iframe width="560" height="315" src="https://www.youtube.com/embed/PkZNo7MFNFg" title="YouTube video player"frameBorder="0"allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"allowFullScreen></iframe>';
        localStorage.setItem('video1', JSON.stringify(video));
        window.location.href = 'video.html';
        localStorage.setItem('name', JSON.stringify('Learn JavaScript - Full Course for Beginners'))
    }
    if(num ==='4'){
        const video = ' <iframe width="560" height="315" src="https://www.youtube.com/embed/E3XxeE7NF30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
        localStorage.setItem('video1', JSON.stringify(video));
        window.location.href = 'video.html';
        localStorage.setItem('name', JSON.stringify('Learn JavaScript With This ONE Project!'))

    }
}
let searc1 = document.getElementById('search_input');



document.addEventListener('DOMContentLoaded', ()=>{
    if(document.getElementById('button3').innerText === ''){
        
        document.getElementById('right').style.gridTemplateColumns = '1fr 1fr';    
        document.getElementById('button2').style.width = '100%';
        document.getElementById('button1').style.width = '100%';
    }
    else{
        document.getElementById('right').style.gridTemplateColumns = '1fr 1fr 1fr';    
        document.getElementById('button2').style.width = '100px';
        document.getElementById('button1').style.width = '100px';
    }
    
    
})

function search(){
    const div1 = document.createElement('div')
    let search_divss = document.getElementById('search-result')
    const searc = document.getElementById('search_input').value;
    let p_namez = document.getElementById('p1')
    let p_namey = document.getElementById('p2')
    let p_namex = document.getElementById('p3')
    let p_namew = document.getElementById('p4')
    let ex1 = document.getElementById('ex1')
    let ex2 = document.getElementById('ex2')
    let ex3 = document.getElementById('ex3')
    let ex4 = document.getElementById('ex4')
    let paragraph = document.getElementById('paragraph');

    let result =""
    const container = document.getElementById("search-result");
    container.innerHTML = getCookie('contain')
    document.querySelectorAll('.video_title').forEach(each =>{
        if(each.innerText.includes(searc)){
            const innerDiv = document.createElement("div");
            innerDiv.classList.add("inner-div");
            innerDiv.id = 'inner';
            innerDiv.innerHTML = each.parentElement.innerHTML;
            div1.appendChild(innerDiv);
            for(var i = 0; i<div1.children.length;i++){
                for(var j= 0 ; j<div1.children[i].getElementsByTagName('button').length; j++){
                    div1.children[i].getElementsByTagName('button')[j].addEventListener('click', function(each){
                     const l = each.target.className

                     video2(String(l.replace('b','')))        
                    })
                }
            }
            
        }
        
    })
    
    if(document.getElementById('search_input').value===""){
    div1.innerHTML = ""
    }
    if(document.getElementById('search_input').value===""){
    paragraph.innerHTML = ""
    }

    paragraph.innerText ="Search Result:";
    document.getElementById('search_input').value= "";
    container.appendChild(div1)
    
}

    // function to detect keypress event
    /*searc1.addEventListener("keyup", function (event) {
    // detect event key
    if (event.keyCode == 13) {
    let search_divss = document.getElementById('search-result')
    const searc = document.getElementById('search_input').value;
    let p_namez = document.getElementById('p1')
    let p_namey = document.getElementById('p2')
    let p_namex = document.getElementById('p3')
    let p_namew = document.getElementById('p4')
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
        div1.appendChild(innerDiv);
    }
    if(p_namey.innerText.includes(searc)){
        const innerDiv = document.createElement("div");
        innerDiv.classList.add("inner-div");
        innerDiv.innerHTML = ex2.innerHTML;
        div1.appendChild(innerDiv);

    }
    if(p_namex.innerText.includes(searc)){
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("inner-div");
    innerDiv.innerHTML = ex3.innerHTML;
    div1.appendChild(innerDiv);

    }
    if(p_namew.innerText.includes(searc)){

    const innerDiv = document.createElement("div");
    innerDiv.classList.add("inner-div");
    innerDiv.innerHTML = ex4.innerHTML;
    div1.appendChild(innerDiv);


    }

    if(document.getElementById('search_input').value===""){
        container.innerHTML = ""
    }
    if(document.getElementById('search_input').value===""){
        paragraph.innerHTML = ""
    }
    container.appendChild(div1)
    paragraph.innerText ="Search Result:";
    document.getElementById('search_input').value= "";
    }
});
*/
if(JSON.parse(localStorage.getItem('logged')) === true){
    document.title = JSON.parse(localStorage.getItem('username'));
}
    
    if (localStorage.getItem('looged')=== 'true') {
        document.getElementById('button2').innerText = ""
    }

    if(localStorage.getItem('looged') === 'true'){
        document.getElementById('button1').innerText = "";
    }

const myButton5 = document.getElementById("button3");
myButton5.addEventListener("click", function () {
    myButton5.style.width = "100";
    localStorage.removeItem('looged')
    
    window.location.href = 'Superdev_hOME.html';


});




    if(localStorage.getItem('key') === null) {
        console.log("hello")
        const myButton1 = document.getElementById("button1");
        myButton1_type = getComputedStyle(myButton1);
        window.onload = function () {
            if (myButton1_type.width === '270px') {
                alert("wrong pixel")
            }
        }
        myButton1.innerText = "Click Here To Sign Up";
        myButton1.style.width = '100px';
        myButton1.style.height = '40px';
        myButton1.style.fontSize = '15px'
        myButton1.style.border= 'thin #e0d817 solid';
        myButton1.style.cursor = 'pointer'
        myButton1.style.borderRadius = '2px';
        myButton1.addEventListener("click", function () {
            console.log('Button clicked!'); // Log before redirect if needed
            window.location.href = 'web/jsj.html'
        });

    }
    else{
        document.title = getCookie('title_real')
    }
    if(localStorage.getItem('key') === null){
         const myButton = document.getElementById('button3')
         myButton.innerText = "";
         myButton.style.width = '20px';
         const myButton2 = document.getElementById("button2");
         myButton2.innerText = "Click Here To Login";
         myButton2.style.width = '100px';
         myButton2.style.fontSize = '15px'

         myButton2.style.height = '40px';
         myButton2.style.right = '0';
         myButton2.style.border = 'thin #e0d817 solid';
         myButton2.style.cursor = 'pointer'
         myButton2.style.borderRadius = '2px';
         document.title = "SuperDev Home";
         myButton2.addEventListener("click", function () {
             console.log('Button clicked!'); // Log before redirect if needed
             window.location.href = 'web/sign in.html'
         });

    }
    else{

    }


// console.log(divs.innerHTML)
const new_body = document.getElementById('new_body');
let video_list = [['pics1.webp','JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour','Watch'],["hq720.webp",'JavaScript Full Course (2023) - Beginner to Pro - Part 1', 'Watch'],['pics3.webp','Learn JavaScript - Full Course for Beginners','Watch'],['hq720%20(1).webp','Learn JavaScript With This ONE Project!','Watch']]
for(var i = 0; i<video_list.length; i++){
    const div = document.createElement('div')
    div.classList.add(`class${i+1}`)
    div.id = `ex${i+1}`
    new_body.appendChild(div)
    const img = document.createElement('img')
    img.src = video_list[i][0]
    img.classList.add('img2')
    const p = document.createElement('p')
    p.innerText= video_list[i][1]
    p.classList.add('video_title')
    p.id = `p${i+1}`
    div.appendChild(img)
    div.appendChild(p)
    const button = document.createElement('button')
    button.classList.add(`b${i}`)
    
    div.appendChild(button)
}
  for(var i = 0 ;i<video_list.length; i++ ){
    const button = document.querySelectorAll(`.b${i}`).forEach(each=>{
        
          each.innerText = video_list[i][2]
          each.addEventListener('click', function(){
            alert('hello')
            video2(String(i))        
          
        })
})}


