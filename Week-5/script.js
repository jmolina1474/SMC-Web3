// Proceed to Checkout //

$( document ).ready(function() {

    $("#pay").click(function(){
        $("#form, #pay").toggle();
    })

    let uNinput = document.getElementById("firstname");
	let shNinput = document.getElementById("firstname2");
	let aNinput = document.getElementById("address1");
	let adNinput = document.getElementById("address2");

			uNinput.addEventListener("blur", function() {
				if (this.value != "") {
					shNinput.value = this.value;
				} else {
					alert("Please add a Name!");
				}

			})
});