        
var leftStyle = getComputedStyle(document.getElementById('left_h'))
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
if(JSON.parse(localStorage.getItem('logged')) === 'true'){
    alert|(' the logged in is true')
    alert(JSON.parse(localStorage.getItem('logged')));
    alert(JSON.parse(localStorage.getItem('username')))      
    document.getElementById('title').innerText = JSON.parse(localStorage.getItem('username'));
    document.title = JSON.parse(localStorage.getItem('username'))    
    document.getElementById('button2').style.display = 'none';
    document.getElementById('button1').style.display = 'none';
    const login = document.getElementById("button3");
    login.style.display = 'grid';

}
else{
    document.getElementById("button3").style.display = 'none';

}

document.getElementById('upload').addEventListener('click', function(){
    if(JSON.parse(localStorage.getItem('logged')) ==='true'){
        alert('The Login Is True For '+ JSON.parse(localStorage.getItem('username')));
        localStorage.setItem('lockKey',JSON.stringify('true'))
        window.location.href = 'uploads.html';    
    }
    else{
        alert('Havent Logged In Yet Login First;')
        window.location.href = 'animae_signin.html';
    }
})
document.getElementById('myVideos').addEventListener('click', function(){
    if(JSON.parse(localStorage.getItem('logged')) ==='true'){
        alert('The Login Is True For '+ JSON.parse(localStorage.getItem('username')));
        localStorage.setItem('requestKey',JSON.stringify('true'))
        window.location.href = 'request1.html';    
    }
    else{
        alert('Havent Logged In Yet Login First;')
        window.location.href = 'animae_signin.html';
    }
})
if(JSON.parse(localStorage.getItem('logged')) !== 'true'){
}
    
const myButton5 = document.getElementById("button3");
myButton5.addEventListener("click", function () {
    myButton5.style.width = "100";
    localStorage.removeItem('logged');
    localStorage.removeItem('username');
    localStorage.removeItem('lock')
    localStorage.setItem('key',JSON.stringify('k'))
    alert(getComputedStyle(document.getElementById('button1')).display)
    alert('This is  ' + JSON.parse(localStorage.getItem('logged')));
    window.location.href = 'Superdev_hOME.html';


});

/*


    if(localStorage.getItem('key') === 'k') {
        console.log("hello")
        const myButton1 = document.getElementById("button1");
     

    } 
    
    if(JSON.parse(localStorage.getItem('key') === 'k')){
        
        const myButton2 = document.getElementById("button1");
         document.title = "SuperDev Home";
         myButton2.addEventListener("click", function () {
             console.log('Button clicked!'); // Log before redirect if needed
             window.location.href = 'animae_signin.html';
         });

    }
    else{

    }
  */  const signUp = document.getElementById("button1");

    signUp.addEventListener("click", function () {
        console.log('Button clicked!'); // Log before redirect if needed
        window.location.href = 'anime_signup.html';
    });
    const signIn = document.getElementById("button2");

    signIn.addEventListener("click", function () {
        console.log('Button clicked!'); // Log before redirect if needed
        window.location.href = 'animae_signin.html';
    });


// console.log(divs.innerHTML)
const new_body = document.getElementById('new_body');
let video_list = [['pics1.webp','JavaScript Tutorial for Beginners: Learn JavaScript in 1 Hour','Watch'],["hq720.webp",'JavaScript Full Course (2023) - Beginner to Pro - Part 1', 'Watch'],['pics3.webp','Learn JavaScript - Full Course for Beginners','Watch'],['hq720%20(1).webp','Learn JavaScript With This ONE Project!','Watch']]
addVideoToMain()
function addVideoToMain(){
    const xhr = new XMLHttpRequest();

    // Configure the XHR request
    xhr.open('GET', 'https://scratch-spangled-parcel.glitch.me/videos', true);

    // Set the onload callback to handle the response
    xhr.onload = function() {
        if (xhr.status >= 200 && xhr.status < 300) {
            // Parse the JSON response
            const data = JSON.parse(xhr.responseText);

            // Log the video list to the console
            console.log(data);

            // Get the video list container
            
            // Loop through each video and create a list item for it
            data.forEach(video => {
                const div = document.createElement('div');
                const video1 = document.createElement('video');
                const h3 = document.createElement('h3');
                const button = document.createElement('button');
                video1.src = video.src; // Display video file path (you can customize this)
                video1.controls=true;
                video1.currentTime = 5;
                video1.style.width = '300px'
                button.innerText = 'Watch';
                
                h3.innerText ='Title: ' +  video.title;
                h3.classList.add('video_title')
                div.appendChild(video1);
                div.classList.add('class')
                div.appendChild(h3);
                
                div.appendChild(button);
                
                new_body.appendChild(div);
            });
        } else {
            console.error('Error fetching videos:', xhr.statusText);
        }
    };

    // Set the onerror callback in case of network failure
    xhr.onerror = function() {
        console.error('Network error occurred');
    };

    // Send the XHR request
    xhr.send();
}

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


