var slider = document.getElementById('slider')
var output = document.getElementById('value')

output.innerHTML = slider.value
slider.oninput = function () {
	output.innerHTML = this.value
}

slider.addEventListener('mousemove', function () {
	var x = slider.value
	var color =
		'linear-gradient(90deg, var(--col-green)' + x * 5 + '%, var(--col-black)' + x * 5 + '%)'
	slider.style.background = color
})

// const passwordBox = document.getElementById("password");
// const lenght = 12;
// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerCase = "abcdefghijklmnopqrstuvwxyz";
// const number = "0123456789";
// const symbol = "@#$ %^&* ( ) _+~|}{[]></-=";
// function createPassword(){
// let password =
// 11 11
// password += upperCase [Math.floor(Math.random()* upperCase.length)];
// password += lowerCase [Math.floor (Math.random() * lowerCase.length)];
// password += number [Math.floor(Math.random() * number.length)];
// password += symbol [Math.floor(Math.random() * symbol.length)];
// }
