
//Creates an array to store all of the listings
var houses = [];

window.onload = AddListing();

//Defines a House object
function House(hometype, address, price, size, bedrooms, bathrooms, yearbuilt, imgurl, description) {

    this.hometype = hometype;
    this.address = address;
    this.price = price;
    this.size = size;
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.yearbuilt = yearbuilt;
    this.imgurl = imgurl;
    this.description = description;

}




//Adds the new listing when user clicks submit on add house form
function AddListing() {

    var house = new House(
        document.getElementById("hometype").value,
        document.getElementById("address").value,
        document.getElementById("price").value,
        document.getElementById("size").value,
        document.getElementById("bedrooms").value,
        document.getElementById("bathrooms").value,
        document.getElementById("yearbuilt").value,
        document.getElementById("imgurl").value,
        document.getElementById("description").value
    );

    houses.push(House);

}

//Creates an instance of House object, and adds that specific object to the houses[] array
function AddHouse() {
    //instantiates variable 'house' and creates a new House object
    var house = new House(
        document.getElementById("hometype").value,
        document.getElementById("address").value,
        document.getElementById("price").value,
        document.getElementById("size").value,
        document.getElementById("bedrooms").value,
        document.getElementById("bathrooms").value,
        document.getElementById("yearbuilt").value,
        document.getElementById("imgurl").value,
        document.getElementById("description").value
    );


    houses.push(House);

}