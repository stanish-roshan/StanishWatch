const hr_hand = document.getElementById("hour_hand");
const min_hand = document.getElementById("minute_hand");
const sec_hand = document.getElementById("second_hand");
const dt = document.getElementById('date');
const options = { weekday: 'short', month: 'short', day: 'numeric' };
let indicator = document.getElementById('indicator')

setInterval(() => {

    let date = new Date();
    dt.firstElementChild.innerText = date.toLocaleDateString('en-US', options);

    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    // h = h > 9 ? h : '0' + h
    // m = m > 9 ? m : '0' + m
    // s = s > 9 ? s : '0' + s

    if (h > 12) {
        h = h - 12;
        indicator.innerText = 'PM';
    }
    else {
        indicator.innerText = 'AM';
    }

    let ah = 30 * h + m / 2 + s / 120;
    let am = 6 * m + s / 10;
    let as = 6 * s;

    hr_hand.style.transform = `translateY(-95%) rotate(${ah}deg)`;
    min_hand.style.transform = `translateY(-95%) rotate(${am}deg)`;
    sec_hand.style.transform = `translateY(-85%) rotate(${as}deg)`;
    val[0].innerText = h;
    val[1].innerText = m;
    val[2].innerText = s;

}, 1000)