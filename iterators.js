import { SSL_OP_PKCS1_CHECK_1 } from "constants";

/*************************************
* logger(array)
*
* - Accepts an array
* - Logs every element of the array
************************************/
const logger = function(array) {
   array.forEach(ar => console.log(ar));
}

/*************************************
* toCelsius(temperatures)
*
* - Accepts an array of temperatures
*   in degrees Fahrenheit
* - Returns an array of temperatures
*   in degrees Celsius
*
* The conversion is:
*   C = (F - 32) * (5/9)
************************************/
const toCelsius = function(temperatures)  {
  return temperatures.map(temp => ((temp - 32) * (5/9)) );
  };

/**************************************
* hottestDays(temperatures, threshhold)
*
* - Accepts an array of temperatures
* - Accepts a threshhold temperature
* - Returns an array of temperatures
*   that exceed the threshhold
***************************************/
const hottestDays = function(temperatures, threshhold) {
  return temperatures.filter(temp => temp > threshhold);
}


/******************************************
* logHottestDays(temperatures, threshhold)
*
* - Accepts an array of temperatures
*   IN DEGREES FAHRENHEINT
* - Accepts a threshhold temperature
*   IN DEGREES FAHRENHEINT
* - Logs temperatures that exceed the
*   threshhold to the console
*   IN DEGREES CELSIUS
*
* hint: you can combine
*       all previous functions
*******************************************/
const logHottestDays = function(temperatures, threshhold) {
  logger(toCelsius(hottestDays(temperatures, threshhold)))
}


export {logger, toCelsius, hottestDays, logHottestDays}
