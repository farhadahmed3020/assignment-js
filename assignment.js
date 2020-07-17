// feetTomile//

function feetTomile(num) {
    var mile=num/5280;
    return mile;
}
 var result =feetTomile(555678);
console.log(result);

//woodCalculatoe//

function woodCalculator(chair,table,bed) {
    var chairCount=chair*1;
    var tableCount=table*3;
    var bedCount=bed*5;
    var totelWood= chairCount + tableCount + bedCount;
    return totelWood;
    
}
var woodResult = woodCalculator(2,2,2);
console.log(woodResult);

//brickCalculator//

function brickCalculator(floor) {
    var feet=1000;
    var step1;
    var step2;
    var step3;
    if (floor <=10 ) {
        var step1 = feet*15*floor;
        return step1;
        
    }
    else if(floor>=11 && floor<=20){
        var step2 = feet*12*floor;
        return step2;
    }
    else if (floor>=21) {
        var step3 =feet*10*floor;
        return step3;
        
    }
}
var solution = brickCalculator(15);
console.log(solution);

//tinyFriend//

function tinyFriend(num){
    var shortest = undefined;

if (num.length > 0) {
    for (var i = 0; i < num.length; i++) {
      if (typeof num[i] === 'string' && (shortest == undefined ||num[i].length < shortest.length )) {
        shortest = num[i];
      }
    }
  }

  return shortest;
}


var output = tinyFriend(['f','two', 'fa','three']);
console.log(output);
