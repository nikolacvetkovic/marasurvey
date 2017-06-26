var decisionOn1 = document.querySelector("#decisionOn1");
var decisionOn2 = document.querySelector("#decisionOn2");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var specialRadio = document.querySelector("#special-radio");

// decisionOn1.addEventListener("click", function showOption1(){
//     option1.style.display = "block";
//     var radios = document.querySelectorAll("#option2 input");
//     radios.forEach(function(radio){
// 	    radio.checked = false;
//     });
//     option2.style.display = "none";
// });

// decisionOn2.addEventListener("click", function showOption1(){
//     option2.style.display = "block";
//     var radios = document.querySelectorAll("#option1 input");
//     radios.forEach(function(radio){
// 	    radio.checked = false;
//     });
//     option1.style.display = "none";
// });

// specialRadio.addEventListener("click", function() {
//     var radios = document.querySelectorAll("#option1 input");
//     radios.forEach(function(radio){
//         radio.checked = false;
//     });
//     var special = document.querySelector("#special-radio input");
//     special.checked = true;
// });

//-------------------------------------------------------------//

$("#decisionOn1").click(function(){
    $("#option1").slideDown(1000, function(){
        $("#option2").slideUp(1000,function(){
            var radios = document.querySelectorAll("#option2 input");
            radios.forEach(function(radio){
	            radio.checked = false;
            });
        });
    });
});

$("#decisionOn2").click(function(){
    $("#option2").slideDown(1000, function(){
        $("#option1").slideUp(1000, function(){
            var radios = document.querySelectorAll("#option1 input");
            radios.forEach(function(radio){
        	    radio.checked = false;
            });
        });
    });
});

$("#special-radio").click(function() {
    var radios = document.querySelectorAll("#option1 input");
    radios.forEach(function(radio){
        radio.checked = false;
    });
    $("#special-radio input").prop("checked", "true");
});

$("#option1 div.checkbox.ui.special").click(function() {
    document.querySelector("#special-radio input").checked = false;
});