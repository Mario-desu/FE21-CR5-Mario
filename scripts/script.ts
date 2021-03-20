// Location class:
let travelArray:Array<Locations> = [];

class Locations {
    attraction:string;
    adress:string;
    image:string;
    created: Date;

    constructor(attraction, adress, image, created) {
        this.attraction = attraction;
        this.adress = adress;
        this.image = image;
        this.created = created;

        travelArray.push(this);
        // console.table(travelArray);
    }
    display() {
        let generator =
        `
        <div class="col">
         <div class="card h-100 shadow">
            <div class="card-body">
              <h5 class="card-title">${this.attraction}</h5>
              <p class="card-text">${this.adress}</p>
              <p class="created-style card-text text-mute fst-italic"">Created: ${this.created}</p>
            </div>
         <img src="${this.image}" class="card-img-top d-none d-sm-block img-style" alt="card-image">
         </div>
        </div>
       `
       return generator

    }

}

let reichstag = new Locations("Reichstag", "Platz der Republik 1, 11011 Berlin", "img/reichstag.jpg", new Date("Wed Sep 29 2021 14:25:28"));
let ddrMuseum = new Locations("DDR Museum", "Karl-Liebknecht-Str. 1, 10178 Berlin", "img/ddrmuseum.jpg", new Date("Mon Oct 18 2021 07:44:57"));
let fernsehturm = new Locations("Berliner Fernsehturm", "Panoramastraße 1A, 10178 Berlin", "img/fernsehturm.jpg", new Date("Thu Oct 21 2021 21:35:08"));
let brandenburg = new Locations("Brandenburger Tor", "Pariser Platz, 10117 Berlin", "img/brandenburg.jpg", new Date("Sun Oct 10 2021 12:15:10"))



//loop for Locations-Section, you have to put it here, otherwise it will also display the children here

for (let value of travelArray){

 
  document.getElementById("inputLocations").innerHTML += value.display();
  
}



//Ascending-Function for Locations-Section  

function sortingAscendLocation(){
  document.getElementById("inputLocations").innerHTML ="";

  travelArray.sort(function(a,b){

  return new Date(a.created) - new Date(b.created);
});

  for (let value of travelArray){


  document.getElementById("inputLocations").innerHTML += value.display();
  
  }

}

document.getElementById("ascendingLocation").addEventListener("click", sortingAscendLocation);


  //---End Ascend-Function Locations-Section----



// Descending-Function for Locations-Section 

function sortingDescendLocation(){
  document.getElementById("inputLocations").innerHTML ="";

  travelArray.sort(function(a,b){

  return new Date(b.created) - new Date(a.created);
});



for (let value of travelArray){


  document.getElementById("inputLocations").innerHTML += value.display();
  
  }

}

document.getElementById("descendingLocation").addEventListener("click", sortingDescendLocation);

//--end Descend-Function Locations-Section---------------   











// Restaurant class: 


let restaurantArray:Array<Restaurant> = [];


class Restaurant extends Locations {
    phone:string;
    cuisine:string
    website:string

    constructor(attraction, adress, phone, cuisine, website, image, created) {
        super(attraction, adress, image, created);
        this.phone = phone;
        this.cuisine = cuisine;
        this.website = website;

        restaurantArray.push(this);
    }
    displayRestaurant() {
        let generator = 
        `
        <div class="col">
          <div class="card h-100 shadow">
            <div class="card-body">
              <h5 class="card-title">${this.attraction}</h5>
              <p class="card-text">${this.adress}</p>
              <p class="card-text">${this.phone}</p>
              <p class="card-text">${this.cuisine} cuisine</p>
              <p><a class="card-text">${this.website}</a></p>
              <p class="created-style card-text text-mute fst-italic"">Created: ${this.created}</p>
            </div>
          <img src="${this.image}" class="card-img-top d-none d-sm-block img-style" alt="card-image">
          </div>
        </div>
        `
      return generator;
    }

}


let skykitchen = new Restaurant("Skykitchen", "Landsberger Allee 106, 10369 Berlin", "+49 30 4530532620", "International", "https://www.skykitchen.berlin", "img/skykitchen.jpg", new Date("Tue Sep 21 2021 08:34:48"));
let upperBurgerGrill = new Restaurant("Upper Burger Grill", "Rankestraße 3, 10789 Berlin", "+49 30 55221733", "American", "https://upperburgergrill.com", "img/upperburger.jpg", new Date("Fri Oct 08 2021 07:08:57"));
let caocao = new Restaurant("Cao Cao Restaurant", "Marburger Str. 2, 10789 Berlin", "+49 30 21915415", "Vietnamese", "https://www.cao-cao.de/", "img/caocao.jpg", new Date("Fri Oct 15 2021 11:11:22"))
let iimori = new Restaurant("Iimori Ramen", "Mulackstraße 29, 10119 Berlin", "+493033905188", "Japanese", "https://nipponya.de/iimori-ramen-mitte", "img/iimori.jpg", new Date("Fri Oct 22 2021 01:22:11"))



//------Loop for restaurant section----------------

for (let value of restaurantArray){

  // console.log(value);
  document.getElementById("inputRestaurant").innerHTML += value.display();
  
}

//Ascending-Function for Restaurant-Section  

function sortingAscendRest(){
  document.getElementById("inputRestaurant").innerHTML ="";

  restaurantArray.sort(function(a,b){

  return new Date(a.created) - new Date(b.created);
});


for (let value of restaurantArray){


  document.getElementById("inputRestaurant").innerHTML += value.display();
  
  }

}

document.getElementById("ascendingRest").addEventListener("click", sortingAscendRest);


  //---End Ascend-Function Restaurant----



// Descending-Function for Restaurant-Section  

function sortingDescendRest(){
  document.getElementById("inputRestaurant").innerHTML ="";

  restaurantArray.sort(function(a,b){

  return new Date(b.created) - new Date(a.created);
});



for (let value of restaurantArray){


  document.getElementById("inputRestaurant").innerHTML += value.display();
  
  }

}

document.getElementById("descendingRest").addEventListener("click", sortingDescendRest);

//--end Descend-Function Restaurant---------------   











// Event class


let eventsArray:Array<Events> = [];


class Events extends Locations {
    eventDate:string;
    eventTime:string;
    ticketPrice:number;
    website:string;
    
    constructor(attraction, adress, eventDate, eventTime, ticketPrice, image, website, created) {
        super(attraction, adress, image, created)
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticketPrice = ticketPrice;
        this.website = website;

        eventsArray.push(this);
    }
    displayEvent() {
        let generator =
        `
        <div class="col">
          <div class="card h-100 shadow">
            <div class="card-body">
              <h5 class="card-title">${this.attraction}</h5>
              <p class="card-text">${this.adress}</p>
              <p><a class="card-text">${this.website}</a></p>
              <p class="card-text">Date: ${this.eventDate}</p>
              <p class="card-text">Time: ${this.eventTime}</p>
              <p class="card-text">Price: € ${(this.ticketPrice).toFixed(2)}</p>
              <p class="created-style card-text text-mute fst-italic"">Created: ${this.created}</p>
          </div>
          <img src="${this.image}" class="card-img-top d-none d-sm-block img-style" alt="card-image">
          </div>
        </div>        
        `
      return generator
    }
//class img-style for scss
    
}


let evanescence = new Events("Evanescence / Within Temptation", "Velodrom - Paul-Heyse-Straße 26, 10407 Berlin", "11.09.2021", "19:00", 67.90, "img/evanescence.jpg", "www.evanescence.com", new Date("Mon Sep 13 2021 06:44:57"));
let maximoPark = new Events("Maximo Park", "Astra Kulturhaus - Revaler Straße 99, 10245 Berlin", "17.09.2021", "20:00", 34.30, "img/maximopark.jpg", "www.maximopark.com", new Date("Sat Sep 18 2021 07:56:47"));
let biffyClyro = new Events("Biffy Clyro", "Velodrom - Paul-Heyse-Straße 26, 10407 Berlin", "25.10.21", "20.00", 49.25, "img/biffyclyro.jpg", "www.biffyclyro.com", new Date("Thu Oct 26 2021 03:33:52"));
let deepPurple = new Events("Deep Purple", "Max-Schmeling-Halle - Am Falkplatz 1, 10437 Berlin", "15.10.21", "19:30", 59.75, "img/deeppurple.jpg", "https://deeppurple.com", new Date("Sat Oct 16 2021 11:24:57"));


// ----Loop to for Event-Section-------------

  for (let value of eventsArray){

    // console.log(value);
    document.getElementById("inputEvents").innerHTML += value.display();
    
  }





//Ascending-Function for Event-Section  

function sortingAscendEvent(){
  document.getElementById("inputEvents").innerHTML ="";

  eventsArray.sort(function(a,b){

  return new Date(a.created) - new Date(b.created);
});
console.log(eventsArray);


for (let value of eventsArray){


  document.getElementById("inputEvents").innerHTML += value.display();
  
  }

}

document.getElementById("ascendingEvent").addEventListener("click", sortingAscendEvent);


  //---End Ascend-Function Event----



// Descending-Function for Event-Section  

function sortingDescendEvent(){
  document.getElementById("inputEvents").innerHTML ="";

  eventsArray.sort(function(a,b){

  return new Date(b.created) - new Date(a.created);
});
console.log(eventsArray);


for (let value of eventsArray){


  document.getElementById("inputEvents").innerHTML += value.display();
  
  }

}

document.getElementById("descendingEvent").addEventListener("click", sortingDescendEvent);

//--end Descend-Function Event---------------   

