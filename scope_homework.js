// Episode 2
// const murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Will we get a TypeError, because murderer has already been assigned a string value outwith the changeMurderer function, so can't be reassigned.
// Code run outcome : TypeError

// Episode 3
// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// Are both First and Second Verdicts 'Mrs. Peacock'?  The murderer variable was declared outwith the function, so is available outwith the function, but it's value can be reassigned as it is a 'let' variable. It's value was reassigned in the declareMurderer function.
// Check: first verdict = Mrs. Peacock, second verdict = Proferssor Plum. 
// Second verdict is Prof Plum as secondVerdict variable did not call the function declareMurderer, so the inital assignment of the variable still stood.

// Episode 4
// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }

// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// Is it Mrs. Peacock - in the final line (line49), the function where suspectThree variable was changed, has not been called.  So it is still referenceing the initial value assigned to the value of suspectThree.
// Check: correct.

// Episode 5
// const scenario = {
//     murderer: 'Miss Scarlet',
//     room: 'Kitchen',
//     weapon: 'Candle Stick'
//   };
  
//   const changeWeapon = function(newWeapon) {
//     scenario.weapon = newWeapon;
//   }
  
//   const declareWeapon = function() {
//     return `The weapon is the ${scenario.weapon}.`;
//   }
  
//   changeWeapon('Revolver');
//   const verdict = declareWeapon();
//   console.log(verdict);

// Output would be: "The weapon is the Revolver", because we are able to modify mutable parts of a const variable which is what happens in the declareWeapon function.  We have replaced the value 'Candle Stick' with 'Revolver' where the key is weapon. 
// Check: correct output. 

// Episode 6
// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Expected outcome: 'The murderer is Mr. Green.'  The variable murderer was declared at the start of the code block, as a let variable so can be re-assigned.  In the first function, the murderer variable is re-assigned and held in a variable with the const assignation so can't be re-assigned from that point.  plotTwist() comes later, so can't re-assign the murderer value, and isn't invoked in the final section of code either. 
// Check: Wrong!  Answer was Mrs White. I hand't spotted that the plotTwist was a function within a function! But am still surprised that the murderer variable coudl be further reassigned after the changeMurderer function.

// Episode 7
// let murderer = 'Professor Plum';

// const changeMurderer = function() {
// murderer = 'Mr. Green';

// const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//     murderer = 'Miss Scarlet';
//     }

//     unexpectedOutcome();
// }

// plotTwist();
// }

// const declareMurderer = function() {
// return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Expected outcome: 'The murderer is Colonel Mustard'
// The murderer variable is initially set, with block scope, to Prof Plum.  At the start of the changeMurderer function, it is re-assigned the value of Mr Green, with global scope. Then it is changed to Miss Scarlet when unexpectedOutcome() is invoked, again with global scope.  Then it is re-assigned to Colonel Mustard when plotTwist() is invoked.  I'm going with the thought that becuase the murderer variable was initially declared outwith the changeMurderer() code block, we can access the re-assigned value outwith that code block?! Even though in plotTwist, the murderer varaible is given a 'let' assignation....
// Check: Wrong again!  Answer was Mr Green.

// Episode 8
const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
}; 
const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
    // console.log(scenario.murderer)

    const plotTwist = function(room) {
    if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
    }

    const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
        scenario.weapon = 'Candle Stick';
        }
    }

unexpectedOutcome('Colonel Mustard');
console.log(scenario.murderer);
console.log(scenario.weapon)
}

plotTwist('Dining Room');
}

const declareWeapon = function() {
return `The weapon is ${scenario.weapon}.`
}

changeScenario();
const verdict = declareWeapon();
console.log(verdict);

// Expected outcome: 'The weapon is Lead Pipe'.  
// Outcome check: Wrong again.  The weapon is Candle Stick.
// Have used console.log() to work out the flow and where I went wrong - I'm not getting how Colonel Mustard was the murderer after unexpectedOutcome() was called, because plotTwist() hadn't been called prior to it, so I thought the murderer at this point was still Mrs Peacock.

// 
