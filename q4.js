var arr = [
  {
    name: 'Clark Kent',
    alterEgo: 'Superman',
    gender: 'Male',
    powers: ['super human strength', 'flight', 'x-ray vision', 'heat vision']
  },
  {
    name: 'Barry Allen',
    alterEgo: 'The Flash',
    gender: 'Male',
    powers: ['super speed', 'phasing', 'time travel', 'dimensional travel']
  },
  {
    name: 'Diana Prince',
    alterEgo: 'Wonder Woman',
    gender: 'Female',
    powers: ['super human strength', 'super human reflexes', 'super human agility', 'flight']
  },
  {
    name: 'Bruce Banner',
    alterEgo: 'The Hulk',
    gender: 'Male',
    powers: ['super human strength', 'thunder clap', 'super healing factor']
  },
  {
    name: 'Wade Wilson',
    alterEgo: 'Deadpool',
    gender: 'Male',
    powers: ['super healing factor', 'super human agility']
  },
  {
    name: 'Jean Grey',
    alterEgo: 'Phoenix',
    gender: 'Female',
    powers: ['telepathy', 'telekinesis', 'rearrange matter at will']
  },
  {
    name: 'Wanda Maximoff',
    alterEgo: 'Scarlet Witch',
    gender: 'Female',
    powers: ['reality manipulation', 'astral projection', 'psionic']
  }
];

//Take only the alterEgo

var alterEgoArr = [];
for(var i=0; i<arr.length; i++) {
  alterEgoArr.push(arr[i].alterEgo);
}
console.log(alterEgoArr);
console.log();

//Expected Result : ['Superman', 'The Flash', 'Wonder Woman', 'The Hulk', 'Deadpool', 'Phoenix', 'Scarlet Witch']
//Result : [ 'Superman', 'The Flash', 'Wonder Woman', 'The Hulk', 'Deadpool', 'Phoenix', 'Scarlet Witch']

//Take only the powers

var powerArr = [];
for(var i=0; i<arr.length; i++) {
  powerArr = powerArr.concat(arr[i].powers);
}
var uniquePowerArr = function(arrArg){
  return arrArg.filter(function(elm, pos, arr) {
    return arr.indexOf(elm) == pos;
  })
};
console.log(uniquePowerArr(powerArr.sort()));
console.log();

//Expected Result : [ 'astral projection', 
                  // 'dimensional travel', 'flight', 
                  // 'heat vision', 'phasing', 'psionic', 
                  // 'reality manipulation', 'rearrange matter at will', 
                  // 'super healing factor', 'super human agility', 
                  // 'super human reflexes', 'super human strength', 
                  // 'super speed', 'telekinesis', 'telepathy', 
                  // 'thunder clap', 'time travel', 'x-ray vision' ]
//Result :  ["astral projection", "dimensional travel", "flight", "heat vision", "phasing", "psionic", "reality manipulation", "rearrange matter at will", "super healing factor", "super human agility", "super human reflexes", "super human strength", "super speed", "telekinesis", "telepathy", "thunder clap", "time travel", "x-ray vision"]


//Filter the array to list down, extracting only the Male ones

function genderFilter(gender) {
  return arr.filter(function (value) {
    return value.gender != null && value.gender.toLowerCase() === gender.toLowerCase();
  });
}

var maleArr = genderFilter('Male');
console.log(maleArr);
console.log();

//Result : [ { name: 'Clark Kent',
          //   alterEgo: 'Superman',
          //   gender: 'Male',
          //   powers: 
          //    [ 'super human strength',
          //      'flight',
          //      'x-ray vision',
          //      'heat vision' ] },
          // { name: 'Barry Allen',
          //   alterEgo: 'The Flash',
          //   gender: 'Male',
          //   powers: [ 'super speed', 'phasing', 'time travel', 'dimensional travel' ] },
          // { name: 'Bruce Banner',
          //   alterEgo: 'The Hulk',
          //   gender: 'Male',
          //   powers: 
          //    [ 'super human strength',
          //      'thunder clap',
          //      'super healing factor' ] },
          // { name: 'Wade Wilson',
          //   alterEgo: 'Deadpool',
          //   gender: 'Male',
          //   powers: [ 'super healing factor', 'super human agility' ] } ]

//Transform the array by grouping them by gender
var genderArr = [{ gender: 'Female', heroes: []} , { gender: 'Male', heroes: []}];
var femaleArr = genderFilter('Female');
//maleArr tidak perlu di declare lagi karna pada point sebelumnya menggunakan maleArr

function findGenderGroup(gender) {
  return genderArr.find(function(value) {
    return value.gender.toLowerCase() === gender.toLowerCase();
  });
}

var maleGroup = findGenderGroup('Male').heroes;
for(var i=0; i<maleArr.length; i++) {
  maleGroup.push({name: maleArr[i].name, alterEgo: maleArr[i].alterEgo, powers: maleArr[i].powers});
}

var femaleGroup = findGenderGroup('Female').heroes;
for(var i=0; i<femaleArr.length; i++) {
  femaleGroup.push({name: femaleArr[i].name, alterEgo: femaleArr[i].alterEgo, powers: femaleArr[i].powers});
}

console.log(genderArr);
console.log();

//Expected Result : { gender: 'Female' heroes: [ { name: 'Jean Grey', alterEgo: 'Phoenix', powers: ['telepathy', 'telekinesis', 'rearrange matter at will'] }, ... ] }, { gender: 'Male' heroes: [ { name: 'Wade Wilson', alterEgo: 'Deadpool', gender: 'Male', powers: ['super healing factor', 'super human agility'] } ... ] }
//Result : [ { gender: 'Female', 
           //  heroes: [ [Object], [Object], [Object] ] },
          // { gender: 'Male',
          //   heroes: [ [Object], [Object], [Object], [Object] ] } ]