document.addEventListener('click',(e) => {
    console.log(e.target);
});

document.querySelector('.adder').addEventListener('click' , (e) => {
    let btn = document.createElement('div');
    btn.innerHTML = `<a href = "#">link</a>`;
    document.querySelector('.inner').append(btn);
});