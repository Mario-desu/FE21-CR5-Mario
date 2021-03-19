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
var carArray = [];
var Vehicles = /** @class */ (function () {
    function Vehicles(model, kilometers, seatNumber, fuelType, productionYear, image) {
        this.model = model;
        this.kilometers = kilometers;
        this.seatNumber = seatNumber;
        this.fuelType = fuelType;
        this.productionYear = productionYear;
        this.image = image;
        carArray.push(this);
        console.table(carArray); // no instance yet, so no output
    }
    Vehicles.prototype.createHTML = function () {
        var generator = "<div class=\"col\">\n    <div class=\"card h-100\">\n      <img src=\"" + this.image + "\" class=\"card-img-top img-fluid\" alt=\"card-image\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">" + this.model + "</h5>\n        <p class=\"card-text\">Mileage: " + this.kilometers + "</p>\n        <p class=\"card-text\">Number of seats: " + this.seatNumber + "</p>\n        <p class=\"card-text\">Type of fuel: " + this.fuelType + "</p>\n        <p class=\"card-text\">Year of production: " + this.productionYear + "</p>\n      </div>\n    </div>\n  </div>";
        return generator;
    };
    return Vehicles;
}());
var supra = new Vehicles("Toyota Supra", 20000, 2, "gasoline", 2020, "https://cdn.pixabay.com/photo/2021/01/04/07/58/jdm-5886801_960_720.jpg");
var f40 = new Vehicles("Ferrari F40", 80000, 2, "gasoline", 1990, "https://cdn.pixabay.com/photo/2017/02/24/05/28/model-car-2093995_960_720.jpg");
// console.log(supra.model);
var Motorbikes = /** @class */ (function (_super) {
    __extends(Motorbikes, _super);
    function Motorbikes(model, kilometers, seatNumber, fuelType, productionYear, image, cubicCapacity) {
        var _this = _super.call(this, model, kilometers, seatNumber, fuelType, productionYear, image) || this;
        _this.cubicCapacity = cubicCapacity;
        return _this;
    }
    Motorbikes.prototype.createHTML = function () {
        var generator = "<div class=\"col\">\n    <div class=\"card h-100\">\n      <img src=\"" + this.image + "\" class=\"card-img-top img-fluid\" alt=\"card-image\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">" + this.model + "</h5>\n        <p class=\"card-text\">Mileage: " + this.kilometers + "</p>\n        <p class=\"card-text\">Number of seats: " + this.seatNumber + "</p>\n        <p class=\"card-text\">Type of fuel: " + this.fuelType + "</p>\n        <p class=\"card-text\">Year of production: " + this.productionYear + "</p>\n        <p class=\"card-text\">Cubic capacity: " + this.cubicCapacity + "</p>\n      </div>\n    </div>\n  </div>";
        return generator;
    };
    return Motorbikes;
}(Vehicles));
var ninja = new Motorbikes("Kawasaki Ninja", 23000, 1, "gasoline", 2015, "https://cdn.pixabay.com/photo/2016/09/02/12/44/bike-1639091_960_720.jpg", 1400);
var hayabusa = new Motorbikes("Suzuki Hayabusa", 50000, 1, "gasoline", 2018, "https://cdn.pixabay.com/photo/2018/09/28/20/10/hayabusa-3710138_960_720.jpg", 1800);
var Trucks = /** @class */ (function (_super) {
    __extends(Trucks, _super);
    function Trucks(model, kilometers, seatNumber, fuelType, productionYear, image, wheels) {
        var _this = _super.call(this, model, kilometers, seatNumber, fuelType, productionYear, image) || this;
        _this.wheels = wheels;
        return _this;
    }
    Trucks.prototype.createHTML = function () {
        var generator = "<div class=\"col\">\n    <div class=\"card h-100\">\n      <img src=\"" + this.image + "\" class=\"card-img-top img-fluid\" alt=\"card-image\">\n      <div class=\"card-body\">\n        <h5 class=\"card-title\">" + this.model + "</h5>\n        <p class=\"card-text\">Mileage: " + this.kilometers + "</p>\n        <p class=\"card-text\">Number of seats: " + this.seatNumber + "</p>\n        <p class=\"card-text\">Type of fuel: " + this.fuelType + "</p>\n        <p class=\"card-text\">Year of production: " + this.productionYear + "</p>\n        <p class=\"card-text\">Number of wheels: " + this.wheels + "</p>\n      </div>\n    </div>\n  </div>";
        return generator;
    };
    return Trucks;
}(Vehicles));
var r450 = new Trucks("Scania R450", 200000, 3, "diesel", 2015, "https://cdn.pixabay.com/photo/2015/07/08/10/38/truck-835863_960_720.jpg", 8);
var actros = new Trucks("Mercedes Actros", 350000, 3, "diesel", 2013, "https://cdn.pixabay.com/photo/2019/01/03/03/42/truck-3910170_960_720.jpg", 8);
for (var _i = 0, carArray_1 = carArray; _i < carArray_1.length; _i++) {
    var value = carArray_1[_i];
    // console.log(value);
    document.getElementById("input-cars").innerHTML += value.createHTML();
}
// for (let value of carArray){
//     // console.log(value);
//     document.getElementById("cars").innerHTML += value.createHTML();
//     document.getElementById("trucks").innerHTML += r450.createHTMLTrucks();
//     document.getElementById("bikes").innerHTML += ninja.createHTMLBikes();
// }
