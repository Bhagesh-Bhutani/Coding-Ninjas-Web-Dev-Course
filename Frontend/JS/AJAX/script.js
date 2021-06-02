var btn = document.getElementsByClassName('dog-btn')[0];

function textReplace(){
    btn.textContent = "Click Here!";
}

var img = document.getElementById('image-renderer');
img.setAttribute('onload','textReplace()');

btn.addEventListener('click',function(e){
    btn.textContent = "Working on It...";
    var xhr = new XMLHttpRequest();
    xhr.open('get','https://dog.ceo/api/breeds/image/random',true);
    xhr.onload = function(){
        var JSONString = xhr.response;
        var JSONObject = JSON.parse(JSONString);
        img.setAttribute('src',JSONObject.message);
    };
    xhr.send();
});