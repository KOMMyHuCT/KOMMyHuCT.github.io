function text_to_image(canvas, text) {
	var context = canvas.getContext('2d');
	context.clearRect(0, 0, canvas.width, canvas.height);
	context.font = '40px Tahoma';
	context.fillText(text, 10, 30);
	return canvas;
}

function add_text_as_image(pdf, canvas, text, x, y) {
	pdf.addImage(text_to_image(canvas, text), 'PNG', x, y, canvas.width * 0.75 / 5, canvas.height * 0.75 / 5);
}

function generate_PDF(e) {
	e.preventDefault();
	var frame = new Image();
	frame.src = 'img/letter_blank.png';
	frame.onload = function() {
		var name = input_name.value;
		var city = 'г. ' + input_city.value;
		var age = input_age.value + ' лет/года';
		var letter = textarea_letter.value;
		for (let i = 0; i < letter.length; i++) {
			if (i % 46 == 0 && i != 0)
				letter = letter.slice(0, i + 1) + "\n" + letter.slice(i + 1);
		}
		letter = letter.split("\n");
		const pdf = new jsPDF();
    	pdf.addImage(frame, 'PNG', 0, 0, 210, 300);
    	add_text_as_image(pdf, canvas, name, 103, 183);
		add_text_as_image(pdf, canvas, city, 103, 197);
		add_text_as_image(pdf, canvas, age, 157, 183);
    	for (let i = 0; i < letter.length; i++) {
			add_text_as_image(pdf, canvas, letter[i], 20, 80 + 10 * i);
		}
		pdf.save('letter.pdf');
	};
}

document.forms[0].addEventListener("submit", generate_PDF);