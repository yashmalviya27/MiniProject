console.log("Hello This is My first mini Project Using DOM (Dicument Object Model)")
var box1 = document.querySelector('#colourBox1');
var box2 = document.querySelector('#colourBox2');
var box3 = document.querySelector('#colourBox3');
var box4 = document.querySelector('#colourBox4');
var button = document.querySelector('button');
button.addEventListener(('click'), function () {
    let ans1 = Math.floor(Math.random() * 300);
    let ans2 = Math.floor(Math.random() * 300);
    let ans3 = Math.floor(Math.random() * 300);
    let color1 = box1.style.backgroundColor = `rgb(${(ans1) - 10}, ${(ans2) - 50}, ${(ans3) - 90})`;
    let color2 = box2.style.backgroundColor = `rgb(${(ans1) - 20}, ${(ans2) - 60}, ${(ans3) - 100})`;
    let color3 = box3.style.backgroundColor = `rgb(${(ans1) - 30}, ${(ans2) - 70}, ${(ans3) - 120})`;
    let color4 = box4.style.backgroundColor = `rgb(${(ans1) - 40}, ${(ans2) - 80}, ${(ans3) - 130})`;
    button.style.backgroundColor = `rgb(${(ans1) - 50}, ${(ans2) - 90}, ${(ans3) - 140})`;
    button.style.color = `rgb(${(ans1) - 5}, ${(ans2) - 10}, ${(ans3) - 15})`;
    box1.innerHTML = color1;
    box2.innerHTML = color2;
    box3.innerHTML = color3;
    box4.innerHTML = color4;

})

