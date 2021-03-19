
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
         <img src="${this.image}" class="card-img-top d-none d-sm-block img-style" alt="card-image">
         </div>
        </div>
       `
       return generator

    }

}

let reichstag = new Locations("Reichstag", "Platz der Republik 1, 11011 Berlin", "img/reichstag.jpg");
let ddrMuseum = new Locations("DDR Museum", "Karl-Liebknecht-Str. 1, 10178 Berlin", "img/ddrmuseum.jpg");
let fernsehturm = new Locations("Berliner Fernsehturm", "Panoramastraße 1A, 10178 Berlin", "img/fernsehturm.jpg")
let brandenburg = new Locations("Brandenburger Tor", "Pariser Platz, 10117 Berlin", "img/brandenburg.jpg")



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
              <p class="card-text">${this.cuisine} cuisine</p>
              <p class="card-text">${this.website}</p>
            </div>
          <img src="${this.image}" class="card-img-top d-none d-sm-block img-style" alt="card-image">
          </div>
        </div>
        `
      return generator;
    }

}


let skykitchen = new Restaurant("Skykitchen", "Landsberger Allee 106, 10369 Berlin", "+49 30 4530532620", "International", "https://www.skykitchen.berlin", "img/skykitchen.jpg");
let upperBurgerGrill = new Restaurant("Upper Burger Grill", "Rankestraße 3, 10789 Berlin", "+49 30 55221733", "American", "https://upperburgergrill.com", "img/upperburger.jpg");
let caocao = new Restaurant("Cao Cao Restaurant", "Marburger Str. 2, 10789 Berlin", "+49 30 21915415", "Vietnamese", "https://www.cao-cao.de/", "img/caocao.jpg" )
let iimori = new Restaurant("Iimori Ramen", "Mulackstraße 29, 10119 Berlin", "+493033905188", "Japanese", "https://nipponya.de/iimori-ramen-mitte", "https://i2.wp.com/nipponya.de/wp-content/uploads/2020/07/iimori_ramen_3.jpg")


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
              <p class="card-text">Date: ${this.eventDate}</p>
              <p class="card-text">Time: ${this.eventTime}</p>
              <p class="card-text">Price: € ${(this.ticketPrice).toFixed(2)}</p>
          </div>
          <img src="${this.image}" class="card-img-top d-none d-sm-block img-style" alt="card-image">
          </div>
        </div>        
        `
      return generator
    }
//class img-style for scss
    
}


let evanescence = new Events("Evanescence / Within Temptation", "Velodrom,Paul-Heyse-Straße 26, 10407 Berlin", "11.09.2021", "19:00", 67.90, "img/evanescence.jpg");
let maximoPark = new Events("Maximo Park", "Astra Kulturhaus, 	Revaler Straße 99, 10245 Berlin", "17.09.2021", "20:00", 34.30, "img/maximopark.jpg");
let biffyClyro = new Events("Biffy Clyro", "Velodrom,Paul-Heyse-Straße 26, 10407 Berlin", "25.10.21", "20.00", 49.25, "img/biffyclyro.jpg");
let deepPurple = new Events("Deep Purple", "Max-Schmeling-Halle, 	Am Falkplatz 1, 10437 Berlin", "15.10.21", "19:30", 59.75, "img/deeppurple.jpg")



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