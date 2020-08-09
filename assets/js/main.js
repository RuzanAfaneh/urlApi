
const urlContainer = document.querySelector('#urlContainer');
const shortBtn = document.querySelector('#shortBtn');
const input = document.getElementById('usrInput');
const m= document.getElementById('msg');
console.log(input.value);

function downSizeIT(){
    if(input.value===""){
        if (input.className === "url") {
            input.className += " error";
            m.style.display="block";
          }
    }
    else {
    let shorten="//rel.ink/api/links/";
    let hashid="";

    fetch('https://rel.ink/api/links/', {
method: 'POST',
headers: {
'content-type': 'application/json'
},
body:
JSON.stringify({ url:input.value }),
})
.then(res => res.json())
.then((out) => {
console.log('Output: ', out);
shorten += out['hashid'] ;
 
var divUrl = document.createElement("div");
const longUrl = document.createElement("input")
const shortUrl = document.createElement('input')
const copyBtn = document.createElement("BUTTON");
 
longUrl.classList.add('longUrl');
shortUrl.classList.add('shortUrl');
divUrl.classList.add('divUrl');
copyBtn.classList.add('copyBtn');
 
shortUrl.value = shorten
longUrl.value = input.value;
copyBtn.value = shorten ;
urlContainer.append(divUrl)
divUrl.appendChild(longUrl)
divUrl.appendChild(shortUrl)
divUrl.appendChild(copyBtn);
 
copyBtn.setAttribute("id","copybtn");
copyBtn.innerHTML="Copy";
console.log(input.value);
 
//when the copy btn is pressed
if(copyBtn){
copyBtn.onclick = function() {
var copyTextarea = document.createElement("textarea");
copyTextarea.textContent =copyBtn.value;
document.body.appendChild(copyTextarea);
copyTextarea.select();
document.execCommand("copy");
document.body.removeChild(copyTextarea);
copyBtn.innerHTML = "Copied !"
copyBtn.style.background = "hsl(258, 35%, 47%)"
}
     //no error 
    input.className = "url";
    m.style.display="none";
}
else {
console.log(document.getElementById("copybtn").value);
 
console.log("BISh IS EMPTY , YEEEEEET")}
 
})
 
 
.catch(err => {
console.log(err)
})
}
}
 
shortBtn.addEventListener("click", downSizeIT);
 
 
function myFunction() {
    let x = document.getElementById("navbar");
    if (x.className === "nav-bar") {
      x.className += " responsive";
    } else {
      x.className = "nav-bar";
    }
  } 