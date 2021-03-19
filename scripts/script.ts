
let carArray = [];

class Vehicles {
    model:string;
    kilometers:number;
    seatNumber:number;
    fuelType:string;
    productionYear:number;
    image:string;

    constructor(model, kilometers, seatNumber, fuelType, productionYear, image) {
        this.model = model;
        this.kilometers = kilometers;
        this.seatNumber = seatNumber;
        this.fuelType = fuelType;
        this.productionYear = productionYear;
        this.image = image;
        carArray.push(this);
        console.table(carArray);// no instance yet, so no output
    }
    createHTML() {
        let generator =
        `<div class="col">
    <div class="card h-100">
      <img src="${this.image}" class="card-img-top img-fluid" alt="card-image">
      <div class="card-body">
        <h5 class="card-title">${this.model}</h5>
        <p class="card-text">Mileage: ${this.kilometers}</p>
        <p class="card-text">Number of seats: ${this.seatNumber}</p>
        <p class="card-text">Type of fuel: ${this.fuelType}</p>
        <p class="card-text">Year of production: ${this.productionYear}</p>
      </div>
    </div>
  </div>`
  return generator

    }

}

let supra = new Vehicles("Toyota Supra", 20000, 2, "gasoline", 2020, "https://cdn.pixabay.com/photo/2021/01/04/07/58/jdm-5886801_960_720.jpg");
let f40 = new Vehicles("Ferrari F40", 80000, 2, "gasoline", 1990, "https://cdn.pixabay.com/photo/2017/02/24/05/28/model-car-2093995_960_720.jpg");


// console.log(supra.model);


class Motorbikes extends Vehicles {
    cubicCapacity:number;

    constructor(model, kilometers, seatNumber, fuelType, productionYear, image, cubicCapacity) {
        super(model, kilometers, seatNumber, fuelType, productionYear, image);
        this.cubicCapacity = cubicCapacity;
    }
    createHTML() {
        let generator = 
        `<div class="col">
    <div class="card h-100">
      <img src="${this.image}" class="card-img-top img-fluid" alt="card-image">
      <div class="card-body">
        <h5 class="card-title">${this.model}</h5>
        <p class="card-text">Mileage: ${this.kilometers}</p>
        <p class="card-text">Number of seats: ${this.seatNumber}</p>
        <p class="card-text">Type of fuel: ${this.fuelType}</p>
        <p class="card-text">Year of production: ${this.productionYear}</p>
        <p class="card-text">Cubic capacity: ${this.cubicCapacity}</p>
      </div>
    </div>
  </div>`
      return generator;
    }

}


let ninja = new Motorbikes("Kawasaki Ninja", 23000, 1, "gasoline", 2015, "https://cdn.pixabay.com/photo/2016/09/02/12/44/bike-1639091_960_720.jpg", 1400);
let hayabusa = new Motorbikes("Suzuki Hayabusa", 50000, 1, "gasoline", 2018, "https://cdn.pixabay.com/photo/2018/09/28/20/10/hayabusa-3710138_960_720.jpg", 1800);




class Trucks extends Vehicles {
    wheels:number;
    
    constructor(model, kilometers, seatNumber, fuelType, productionYear, image, wheels) {
        super(model, kilometers, seatNumber, fuelType, productionYear, image);
        this.wheels = wheels;
    }
    createHTML() {
        let generator =
        `<div class="col">
    <div class="card h-100">
      <img src="${this.image}" class="card-img-top img-fluid" alt="card-image">
      <div class="card-body">
        <h5 class="card-title">${this.model}</h5>
        <p class="card-text">Mileage: ${this.kilometers}</p>
        <p class="card-text">Number of seats: ${this.seatNumber}</p>
        <p class="card-text">Type of fuel: ${this.fuelType}</p>
        <p class="card-text">Year of production: ${this.productionYear}</p>
        <p class="card-text">Number of wheels: ${this.wheels}</p>
      </div>
    </div>
  </div>`
      return generator
    }

    
}


let r450 = new Trucks("Scania R450", 200000, 3, "diesel", 2015, "https://cdn.pixabay.com/photo/2015/07/08/10/38/truck-835863_960_720.jpg", 8); 
let actros = new Trucks("Mercedes Actros", 350000, 3, "diesel", 2013, "https://cdn.pixabay.com/photo/2019/01/03/03/42/truck-3910170_960_720.jpg", 8); 



    for (let value of carArray){

        // console.log(value);
        document.getElementById("input-cars").innerHTML += value.createHTML();
        
    }

    
    // for (let value of carArray){

    //     // console.log(value);
    //     document.getElementById("cars").innerHTML += value.createHTML();
    //     document.getElementById("trucks").innerHTML += r450.createHTMLTrucks();
    //     document.getElementById("bikes").innerHTML += ninja.createHTMLBikes();
        
    // }