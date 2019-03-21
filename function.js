const myfunctions = {
  // Take out the tank capacity and return vehicle as well as tank capacity
 
  getTankCapacity: function(tankcapacity, vehicle) {
    console.log("Getting into getTankCapacityFunction");
 
    // Get random vehicle if vehicle is not defined
 
    if (vehicle === undefined) {
      var totalvehicle = Object.keys(tankcapacity).length;
 
      var rand = Math.floor(Math.random() * totalvehicle);
 
      // random vehicle name
 
      vehicle = Object.keys(tankcapacity)[rand];
    }
 
    // check the vehicle if it exists, and have a single vehicle name
 
    switch (vehicle) {
      case "HeroDuet":
        vehicle = "HeroDuet";
 
        break;
 
      case "HeroMaestro":
        vehicle = "HeroMaestro";
 
        break;
 
      case "HeroMaestroEdge":
        vehicle = "HeroMaestroEdge";
 
        break;
 
      case "HeroPleasure":
        vehicle = "HeroPleasure";
 
        break;
 
      case "HondaActive125":
        vehicle = "HondaActive125";
 
        break;
 
      case "HondaAviater":
        vehicle = "HondaAviater";
 
        break;
 
      case "Dio":
        vehicle = "Dio";
 
        break;
 
      case "MahindraDuro":
        vehicle = "MahindraDuro";
 
        break;
 
      case "MahindraGusto":
        vehicle = "MahindraGusto";
 
        break;
 
      case "MahindraRodeo":
        vehicle = "MahindraRodeo";
 
        break;
 
      case "SuzukiAccess":
        vehicle = "SuzukiAccess";
 
        break;
 
      case "SuzukiLets":
        vehicle = "SuzukiLets";
 
        break;
 
      case "SuzukiSwish":
        vehicle = "SuzukiSwish";
 
        break;
 
      case "TVSJupiter":
        vehicle = "TVSJupiter";
 
        break;
 
      case "YamahaAlpha":
        vehicle = "YamahaAlpha";
 
        break;
 
      case "YamahaFascino":
        vehicle = "YamahaFascino";
 
        break;
 
      case "YamahaRay":
        vehicle = "YamahaRay";
 
        break;
 
      case "Vespa":
        vehicle = "Vespa";
 
        break;
 
      case "KTMDuke":
        vehicle = "KTMDuke";
 
        break;
 
      case "RoyalEnfield":
        vehicle = "RoyalEnfield";
 
        break;
 
      case "TVS50":
        vehicle = "TVS50";
 
        break;
 
      case "Piaggio":
        vehicle = "Piaggio";
 
        break;
 
      case "HondaShine":
        vehicle = "HondaShine";
 
        break;
 
      case "HondaSplender":
        vehicle = "HondaSplender";
 
        break;
 
      case "HondaAchiver":
        vehicle = "HondaAchiver";
 
        break;
 
      case "HondaCliq":
        vehicle = "HondaCliq";
 
        break;
 
      case "Activa3G":
        vehicle = "Activa3G";
 
        break;
 
      case "Activa5G":
        vehicle = "Activa5G";
 
        break;
 
      case "Activa":
        vehicle = "Activa";
 
        break;
 
      case "HondaDreamyuga":
        vehicle = "HondaDreamyuga";
 
        break;
 
      case "YamahaCD100":
        vehicle = "YamahaCD100";
 
        break;
 
      case "TVSApache":
        vehicle = "TVSApache";
 
        break;
 
      case "YamahaFz":
        vehicle = "YamahaFz";
 
        break;
 
      case "Pulsar":
        vehicle = "Pulsar";
 
        break;
 
      default:
        vehicle = "Unknown";
    }
 
    // Get total tank capacity for the vehicle from the vehicle object
 
    var totaltankcapacity = tankcapacity[vehicle].length;
 
    // Select a random tankcapacity
 
    var randtankcapacity = Math.floor(Math.random() * totaltankcapacity);
 
    var tankcapacity1 = tankcapacity[vehicle][randtankcapacity];
 
    console.log("Return vehicle and tankcapacity");
 
    // return both the vehicle name and the tankcapacity as an array
 
    return [vehicle, tankcapacity1];
  }
};
 
module.exports = myfunctions;