let img = document.getElementById('image');

let cnt = 1;
function slider(){
    cnt=(cnt+1)%10;
    img.setAttribute('src', `images/img-${cnt}.jpg`)
}
setInterval(slider, 1500);