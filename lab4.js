function validateForm() {
    var x = document.forms["addListing"]["price"].value;
    if(isNaN(x) || x < 1 || x > 10) {
        alert("Please enter a numerical value");
        return false;
    }



}