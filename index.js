// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("play-tennis");

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };  
mondayWork("work from home");

function  wrapAdjective(special = "*"){
    return function(adjective = "a hard worker"){
     return `You are ${special}${adjective}${special}!`
  };
}    

wrapAdjective("||")("a dedicated programmer");