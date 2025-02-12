
      function exponentialPopulationgrowth() {
         let initialPopulation = parseFloat(prompt ("Enter initial population: "));
         let rateOfgrowth = parseFloat(prompt( "Enter rate of growth: "));
         let timeOfhours = parseFloat( prompt ( "Enter time(hrs): "));
          
         
         let finalPopulation = Math.round(initialPopulation* Math.pow(Math.E, (rateOfgrowth * timeOfhours)));
         
         let location = propmt('Enter location of the monster: ');
         let monster = propmt(' Enter monster name: ');

         let monsterAndlocation = location.concat(" ",monsterName).toUpperCase();

         
         document.getElementById("result").innerHTML=" After " + timeOfHours + "hour/s, the population of " + monsterAndlocation + "has risend to " + finalPopulation; 
      
      }
     
   
  

