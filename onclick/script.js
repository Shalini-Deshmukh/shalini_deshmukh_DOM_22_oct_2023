let user = {};
let diceClicks = 0;
let diceTotal = 0;

document.getElementById('img1').addEventListener('click', function() {
    document.getElementById('registerForm').style.display = 'block';
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    user.name = document.getElementById('name').value;
    user.email = document.getElementById('email').value;
    user.username = document.getElementById('username').value;
});
alert("register first")
document.getElementById('img2').addEventListener('click', function() {
    if (user.name && user.username) {
        document.getElementById('userInfo').innerText = `Name: ${user.name}, Username: ${user.username}`;
        document.getElementById('userInfo').style.display = 'block';
    }
});

document.getElementById('img3').addEventListener('click', function() {
    if (diceClicks < 2) {
        let diceValue = Math.floor(Math.random() * 6) + 1;
        diceTotal += diceValue;
        document.getElementById('diceResult').innerText = `Dice Value: ${diceValue}, Total: ${diceTotal}`;
        document.getElementById('diceResult').style.display = 'block';
        diceClicks++;
    } else if (diceTotal > 10) {
        document.getElementById('img4').style.display = 'block';

    }
  
    else {
        document.getElementById('diceResult').innerText = 'Try again after scoring more than 10';
    }
   
    }
);

document.getElementById('img4').addEventListener('click', function() {
    if (diceTotal > 10) {
        let couponCode = Math.random().toString(36).substring(2, 14);
        document.getElementById('couponCode').innerText = `Coupon Code: ${couponCode}`;
        document.getElementById('couponCode').style.display = 'block';
    } else {
        document.getElementById('couponCode').innerText = 'Bad luck';
    }
});

