
      function exponentialPopulationgrowth() {
         let initialPopulation = parseFloat(prompt ("Enter initial population: "));
         let rateOfgrowth = parseFloat(prompt( "Enter rate of growth: "));
         let timeOfhours = parseFloat( prompt ( "Enter time(hrs): "));
          
         
         let finalPopulation = Math.round(initialPopulation* Math.pow(Math.E, (rateOfgrowth * timeOfhours)));
         
         let location = propmt('Enter location of the monster: ');
         let monsterName = propmt(' Enter monster name: ');

         let monsterNameAndlocation = location.concat("",monsterName).toUpperCase();

         
         document.getElementById("result").innerHTML=" After " + timeHours + "hour/s, the population of " + nameAndlocation + "has risend to " + finalPopulation; 
      
      }
     
   
  

