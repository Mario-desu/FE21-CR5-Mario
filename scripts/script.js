var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var travelArray = [];
var Locations = /** @class */ (function () {
    function Locations(attraction, adress, image) {
        this.attraction = attraction;
        this.adress = adress;
        this.image = image;
        travelArray.push(this);
        console.table(travelArray); // no instance yet, so no output
    }
    Locations.prototype.display = function () {
        var generator = "\n        <div class=\"col\">\n         <div class=\"card h-100 shadow\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">" + this.attraction + "</h5>\n              <p class=\"card-text\">" + this.adress + "</p>\n            </div>\n         <img src=\"" + this.image + "\" class=\"card-img-top d-none d-sm-block img-style\" alt=\"card-image\">\n         </div>\n        </div>\n       ";
        return generator;
    };
    return Locations;
}());
var reichstag = new Locations("Reichstag", "Platz der Republik 1, 11011 Berlin", "img/reichstag.jpg");
var ddrMuseum = new Locations("DDR Museum", "Karl-Liebknecht-Str. 1, 10178 Berlin", "img/ddrmuseum.jpg");
var fernsehturm = new Locations("Berliner Fernsehturm", "Panoramastraße 1A, 10178 Berlin", "img/fernsehturm.jpg");
var brandenburg = new Locations("Brandenburger Tor", "Pariser Platz, 10117 Berlin", "img/brandenburg.jpg");
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(attraction, adress, phone, cuisine, website, image) {
        var _this = _super.call(this, attraction, adress, image) || this;
        _this.phone = phone;
        _this.cuisine = cuisine;
        _this.website = website;
        return _this;
    }
    Restaurant.prototype.display = function () {
        var generator = "\n        <div class=\"col\">\n          <div class=\"card h-100 shadow\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">" + this.attraction + "</h5>\n              <p class=\"card-text\">" + this.adress + "</p>\n              <p class=\"card-text\">" + this.phone + "</p>\n              <p class=\"card-text\">" + this.cuisine + " cuisine</p>\n              <p class=\"card-text\">" + this.website + "</p>\n            </div>\n          <img src=\"" + this.image + "\" class=\"card-img-top d-none d-sm-block img-style\" alt=\"card-image\">\n          </div>\n        </div>\n        ";
        return generator;
    };
    return Restaurant;
}(Locations));
var skykitchen = new Restaurant("Skykitchen", "Landsberger Allee 106, 10369 Berlin", "+49 30 4530532620", "International", "https://www.skykitchen.berlin", "img/skykitchen.jpg");
var upperBurgerGrill = new Restaurant("Upper Burger Grill", "Rankestraße 3, 10789 Berlin", "+49 30 55221733", "American", "https://upperburgergrill.com", "img/upperburger.jpg");
var caocao = new Restaurant("Cao Cao Restaurant", "Marburger Str. 2, 10789 Berlin", "+49 30 21915415", "Vietnamese", "https://www.cao-cao.de/", "img/caocao.jpg");
var iimori = new Restaurant("Iimori Ramen", "Mulackstraße 29, 10119 Berlin", "+493033905188", "Japanese", "https://nipponya.de/iimori-ramen-mitte", "https://i2.wp.com/nipponya.de/wp-content/uploads/2020/07/iimori_ramen_3.jpg");
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(attraction, adress, eventDate, eventTime, ticketPrice, image) {
        var _this = _super.call(this, attraction, adress, image) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        return _this;
    }
    Events.prototype.display = function () {
        var generator = "\n        <div class=\"col\">\n          <div class=\"card h-100 shadow\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">" + this.attraction + "</h5>\n              <p class=\"card-text\">" + this.adress + "</p>\n              <p class=\"card-text\">Date: " + this.eventDate + "</p>\n              <p class=\"card-text\">Time: " + this.eventTime + "</p>\n              <p class=\"card-text\">Price: \u20AC " + (this.ticketPrice).toFixed(2) + "</p>\n          </div>\n          <img src=\"" + this.image + "\" class=\"card-img-top d-none d-sm-block img-style\" alt=\"card-image\">\n          </div>\n        </div>        \n        ";
        return generator;
    };
    return Events;
}(Locations));
var evanescence = new Events("Evanescence / Within Temptation", "Velodrom,Paul-Heyse-Straße 26, 10407 Berlin", "11.09.2021", "19:00", 67.90, "img/evanescence.jpg");
var maximoPark = new Events("Maximo Park", "Astra Kulturhaus, 	Revaler Straße 99, 10245 Berlin", "17.09.2021", "20:00", 34.30, "img/maximopark.jpg");
var biffyClyro = new Events("Biffy Clyro", "Velodrom,Paul-Heyse-Straße 26, 10407 Berlin", "25.10.21", "20.00", 49.25, "img/biffyclyro.jpg");
var deepPurple = new Events("Deep Purple", "Max-Schmeling-Halle, 	Am Falkplatz 1, 10437 Berlin", "15.10.21", "19:30", 59.75, "img/deeppurple.jpg");
for (var _i = 0, travelArray_1 = travelArray; _i < travelArray_1.length; _i++) {
    var value = travelArray_1[_i];
    // console.log(value);
    document.getElementById("inputContent").innerHTML += value.display();
}
// for (let value of carArray){
//     // console.log(value);
//     document.getElementById("cars").innerHTML += value.createHTML();
//     document.getElementById("trucks").innerHTML += r450.createHTMLTrucks();
//     document.getElementById("bikes").innerHTML += ninja.createHTMLBikes();
// }
