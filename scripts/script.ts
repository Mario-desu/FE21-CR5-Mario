
let travelArray:Array<Locations> = [];

class Locations {
    attraction:string;
    adress:string;
    image:string;

    constructor(attraction, adress, image) {
        this.attraction = attraction;
        this.adress = adress;
        this.image = image;
        travelArray.push(this);
        console.table(travelArray);// no instance yet, so no output
    }
    display() {
        let generator =
        `
        <div class="col">
         <div class="card h-100 shadow">
            <div class="card-body">
              <h5 class="card-title">${this.attraction}</h5>
              <p class="card-text">${this.adress}</p>
            </div>
         <img src="${this.image}" class="card-img-top img-fluid img-style" alt="card-image">
         </div>
        </div>
       `
       return generator

    }

}

let reichstag = new Locations("Reichstag", "Platz der Republik 1, 11011 Berlin", "img/reichstag.jpg");
let ddrMuseum = new Locations("DDR Museum", "Karl-Liebknecht-Str. 1, 10178 Berlin", "img/ddrmuseum.jpg");




class Restaurant extends Locations {
    phone:string;
    cuisine:string
    website:string

    constructor(attraction, adress, phone, cuisine, website, image) {
        super(attraction, adress, image);
        this.phone = phone;
        this.cuisine = cuisine;
        this.website = website;
    }
    display() {
        let generator = 
        `
        <div class="col">
          <div class="card h-100 shadow">
            <div class="card-body">
              <h5 class="card-title">${this.attraction}</h5>
              <p class="card-text">${this.adress}</p>
              <p class="card-text">${this.phone}</p>
              <p class="card-text">${this.cuisine}</p>
              <p class="card-text">${this.website}</p>
            </div>
          <img src="${this.image}" class="card-img-top img-fluid img-style" alt="card-image">
          </div>
        </div>
        `
      return generator;
    }

}


let skykitchen = new Restaurant("Skykitchen", "Landsberger Allee 106, 10369 Berlin", "+49 30 4530532620", "International", "https://www.skykitchen.berlin", "img/skykitchen.jpg");
let upperBurgerGrill = new Restaurant("Upper Burger Grill", "Rankestraße 3, 10789 Berlin", "+49 30 55221733", "American", "https://upperburgergrill.com", "img/upperburger.jpg");




class Events extends Locations {
    eventDate:string;
    eventTime:string;
    ticketPrice:number;
    
    constructor(attraction, adress, eventDate, eventTime, ticketPrice, image) {
        super(attraction, adress, image);
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticketPrice = ticketPrice;
    }
    display() {
        let generator =
        `
        <div class="col">
          <div class="card h-100 shadow">
            <div class="card-body">
              <h5 class="card-title">${this.attraction}</h5>
              <p class="card-text">${this.adress}</p>
              <p class="card-text">${this.eventDate}</p>
              <p class="card-text">${this.eventTime}</p>
              <p class="card-text">${this.ticketPrice}</p>
          </div>
          <img src="${this.image}" class="card-img-top img-fluid img-style" alt="card-image">
          </div>
        </div>        
        `
      return generator
    }
//class img-style for scss
    
}


let evanescence = new Events("Evanescence & Within Temptation", "Velodrom,Paul-Heyse-Straße 26, 10407 Berlin", "11.09.2021", "19:00", 67.90, "img/evanescence.jpg");
let maximoPark = new Events("Maximo Park", "Astra Kulturhaus, 	Revaler Straße 99, 10245 Berlin", "17.09.2021", "20:00", 34.30, "img/maximopark.jpg");




    for (let value of travelArray){

        // console.log(value);
        document.getElementById("inputContent").innerHTML += value.display();
        
    }

    
    // for (let value of carArray){

    //     // console.log(value);
    //     document.getElementById("cars").innerHTML += value.createHTML();
    //     document.getElementById("trucks").innerHTML += r450.createHTMLTrucks();
    //     document.getElementById("bikes").innerHTML += ninja.createHTMLBikes();
        
    // }