var btn = $('.dog-btn');
var img = $('#image-renderer');

function textReplacer(){
    btn.text('Click Here!');
}

img.attr('onload','textReplacer()');

btn.click((e) => {
    btn.text('Working on It...');

    // Method 1 : $.ajax() method
    // $.ajax({
    //     url: "https://dog.ceo/api/breeds/image/random",
    //     method: "get",
    //     success: (data) => {
    //         console.log("Oh yeahh");
    //         img.attr('src',data.message);
    //     }
    // });

    // Method 2 : $.get() method
    $.get("https://dog.ceo/api/breeds/image/random",(data) => {
        console.log('Via jQuery get');
        img.attr('src',data.message);
    });
});

// btn.click((e) => {
//     var xhr = new XMLHttpRequest();
//     xhr.open('get','https://dog.ceo/api/breeds/image/random',true);
//     xhr.onload = function(){
//         var obj = JSON.parse(xhr.response);
//         img.attr('src',obj.message);
//     };
//     xhr.send();
//     btn.text('Working on It...');
// });