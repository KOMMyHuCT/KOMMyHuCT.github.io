function create_and_open_window_with_one_line(input_data){
	var newWindow = window.open('', '', "width=200,height=200");
	newWindow.document.write(input_data);
}

function remove_words_longer_than_5_characters_long(maxLenght){
	maxLenght++;
	var oldStringWords = document.getElementById("text_input").value.split(" ");
	var newStringWords = [];
	for(var i = 0; i < oldStringWords.length; i++){
		if(oldStringWords[i].length < 6) {
			newStringWords.push(oldStringWords[i]);
		}
	}
	var newString = newStringWords.join(" ");
	create_and_open_window_with_one_line(newString);
}

function remove_most_frequently_found_letter() {
	var string = document.getElementById("text_input").value;
	var stringCounts = {};
	var mostFrequentChar = '';
	for(var i = 0; i < string.length; i++){
		var char = string[i];
		if(!stringCounts[char]){
			stringCounts[char] = 0;
		}
		stringCounts[char]++;
		if(mostFrequentChar == '' || stringCounts[char] > stringCounts[mostFrequentChar]){
			mostFrequentChar = char;
		}
	}
	var newString = string.split(mostFrequentChar).join('');
	create_and_open_window_with_one_line(newString);
}

function remove_all_numbers(){
	var string = document.getElementById("text_input").value;
	var newString = string.replace(/[0-9]/g, '');
	create_and_open_window_with_one_line(newString);
}

function change_background_color(color){
	document.body.style.backgroundColor = color;
}

function scroll_text_once(){
	document.getElementById("autoscrolling_textarea").scrollBy(0, 20);
}

setInterval(scroll_text_once, 1000);

function change_title_to_running_clock(){
	var time = new Date();
	var timeString = time.toLocaleTimeString('ru-RU');
	document.title = timeString;
	setTimeout(change_title_to_running_clock, 1000);
}

function display_current_time_in_new_window(){
	var time = new Date();
	var timeString = time.toLocaleDateString('ru-RU');
	create_and_open_window_with_one_line(timeString);
}

function calculate(){
	var input = document.forms["calculator_form"].elements["calculator_input"];
	var output = document.forms["calculator_form"].elements["calculator_output"];
	output.value = eval(input.value);
}