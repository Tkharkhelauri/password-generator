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
