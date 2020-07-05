myobject = {
    1:"one",
    11:1,
    name:"arun"
};

console.log(myobject["11"]); 
console.log(myobject.name);

myobject["ten"] = "ten";

console.log(myobject);

/*Guvi, Geek, 6, IIT-M RP,Chennai.
Amazon, Inc, 31, SP Infocity, Chennai.
Google, Alphabet, 34 Amphitheater Parkway, MountainView.
Tesla, Inc , 32, 333 Santana Row,San Jose.*/

var address = {
    GUVI: {
        type: 'Geek',
        address: '6, IIT-M RP,Chennai'
    },
    Amazon: {
        type: 'Inc',
        address: '31, SP Infocity, Chennai'
    },
    Google: {
        type: 'Alphabet',
        address: '34 Amphitheater Parkway, MountainView'
    },
    Tesla: {
        type: 'Inc',
        address:  '32, 333 Santana Row,San Jose'
    }
}