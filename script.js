var total;
function clearBoard(){
  $(".floatingDiv").remove();
}

function setUpBoard() {
  var input = prompt('How many squares per side? (1-100)');
	input = parseInt(input);
	while (isNaN(input) || input < 1 || input > 100) {
		input = prompt('Please type a valid number between 1 and 100.');
		input = parseInt(input);
	}
  var squareSize = 600/input;
  total = input*input;
  for(var i = 0; i < total; i++) {
    var div = $("<div class=\"floatingDiv\"></div>");
    $("#etch").append(div);
    /*var size = 100/total;
    size = size.toString();
    size = size + "px";
    $(".floatingDiv").css("height", size);
    $(".floatingDiv").css("width", size);*/
  }
  $(".floatingDiv").css({'width': squareSize, 'height': squareSize});
  $(".floatingDiv").hover(function(){
    $(this).addClass("hovered");
    //$(this).css("background-color", "black");
  }, function(){});
}

$(document).ready(function() {


  //changeSize();

  setUpBoard();

  $("#clear").click(function() {
    $(".floatingDiv").removeClass("hovered");
  });
  $("#resize").click(function() {
      clearBoard();
      setUpBoard();

  });
});
