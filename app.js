let raceNumber = Math.floor(Math.random() * 1000); let registeredEarly; let runnerAge; if(runnerAge > 18){ registeredEarly = true; }else { registeredEarly = false; } if (runnerAge > 18 && registeredEarly) { raceNumber += 1000; } if (runnerAge > 18 && registeredEarly){ console.log("they will race at 9:30 am and your race number is: " + raceNumber ); }else if (runnerAge > 18 && !registeredEarly){ console.log("they will race at  11:00am and your race number is: " + raceNumber); }else if (runnerAge < 18){ console.log("they will race at  12:30 pm and your race number is: " + raceNumber); }else{ console.log("the runner to see the registration desk"); }