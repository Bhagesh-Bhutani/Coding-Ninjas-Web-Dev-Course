var btn = $('.dog-btn');
var img = $('#image-renderer');

function textReplacer(){
    btn.text('Click Here!');
}

img.attr('onload','textReplacer()');

btn.click((e) => {
    var xhr = new XMLHttpRequest();
    xhr.open('get','https://dog.ceo/api/breeds/image/random',true);
    xhr.onload = function(){
        var obj = JSON.parse(xhr.response);
        img.attr('src',obj.message);
    };
    xhr.send();
    btn.text('Working on It...');
});