const Alexa = require("ask-sdk");
 
const actions = require("./function");
 
const TankCapacities = {
  HeroDuet: ["6Litres."],
  HeroMaestro: ["5.3Litres."],
  HeroMaestroEdge: ["6Litres."],
  HeroPleasure: ["5Litres."],
  HondaActive125: ["5.3Litres."],
  HondaAviater: ["6Litres."],
  HeroDio: ["6Litres."],
  MahindraDuro: ["6.5Litres."],
  MahindraGusto: ["6Litres."],
  MahindraRodeo: ["6Litres."],
  SuzukiAccess: ["6Litres."],
  SuzukiLets: ["5.2Litres."],
  SuzukiSwish: ["6Litres."],
  TVSJupiter: ["5Litres."],
  TVSWego: ["5Litres."],
  YamahaAlpha: ["5.2Litres."],
  YamahaFascino: ["5.2Litres."],
  YamahaRay: ["5Litres."],
  Vespa: ["5.2Litres."],
  KTMDuke: ["6Litres."],
  RoyalEnfield: ["5Litres."],
  TVS50: ["5.3Litres."],
  Piaggio: ["6Litres."],
  HondaShine: ["6Litres."],
  HondaSplender: ["6.5Litres."],
  HondaAchiver: ["6Litres."],
  HondaCliq: ["4.5Litres."],
  Activa3G: ["6Litres."],
  Activa5G: ["5.2Litres."],
  HondaDreamyuga: ["6Litres."],
  YamahaCD100: ["5Litres."],
  TVSApache: ["6Litres."],
  Pulsar: ["5.2Litres."],
  YamahaFz: ["5.2Litres."],
  Activa: ["6Litres."],
  Dio: ["6Litres."],
  Pleasure: ["5Litres."]
};
 
// Launch Request Handler -- When a skill is launched
 
const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === "LaunchRequest";
  },
 
  handle(handlerInput) {
    console.log("Launch Request Handler Called");
 
    let speechText =
      "Hello, I am DAG. You can ask me to read out tankcapacity for different vehicles.";
 
    let repromptText =
      "I did not receive any input. You can say, tell me the tankcapacity.";
 
    return handlerInput.responseBuilder
 
      .speak(speechText)
 
      .reprompt(repromptText)
 
      .getResponse();
  }
};
 
// Handler for Random Tankcapacity
 
const RandomTankCapacity = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "RandomTankCapacity"
    );
  },
 
  handle(handlerInput) {
    console.log("RandomTankCapacity intent handler called");
 
    let getTankCapacity = actions.getTankCapacity(TankCapacities);
 
    let vehicle = getTankCapacity[0];
 
    let tankcapacity = getTankCapacity[1];
 
    let cardTitle = "Quotation from " + vehicle;
 
    let cardContent = tankcapacity;
 
    let speechText = vehicle + " said " + tankcapacity;
 
    return handlerInput.responseBuilder
 
      .speak(speechText)
 
      .withSimpleCard(cardTitle, cardContent)
 
      .getResponse();
  }
};
 //handler for vehicle tank capacity
 
const VehicleTankCapacity = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "VehicleTankCapacity"
    );
  },
 
  handle(handlerInput) {
    console.log("VehicleTankCapacity Intent handler called");
 
    // Get the vehicle Name
 
    let vehicle =
      handlerInput.requestEnvelope.request.intent.slots.vehicle.value;
 
    let getTankCapacity = actions.getTankCapacity(TankCapacities, vehicle);
 
    if (!getTankCapacity) {
      return UnhandledHandler.handle(handlerInput);
    }
 
    vehicle = getTankCapacity[0].toLowerCase();
 
    let tankcapacity = getTankCapacity[1];
 
    let cardTitle = "tankcapacity from " + vehicle;
 
    let cardContent = tankcapacity;
 
    let speechText = vehicle + " said " + tankcapacity;
 
    return handlerInput.responseBuilder
 
      .speak(speechText)
 
      .withSimpleCard(cardTitle, cardContent)
 
      .getResponse();
  }
};
 
// Unhandled Requests
 
const UnhandledHandler = {
  canHandle() {
    return true;
  },
 
  handle(handlerInput, error) {
    console.log(`Error Handler : ${error.message}`);
 
    return handlerInput.responseBuilder
 
      .speak(
        "Sorry, I am unable to understand what you said. You can ask me to say a RandomTankCapacity and VehicleTankCapacity"
      )
 
      .getResponse();
  }
};
 
exports.handler = Alexa.SkillBuilders.custom()
 
  .addRequestHandlers(
    LaunchRequestHandler,
 
    RandomTankCapacity,
 
    VehicleTankCapacity
  )
 
  .addErrorHandlers(UnhandledHandler)
 
  .lambda();
