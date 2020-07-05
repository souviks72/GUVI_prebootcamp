let square = Math.pow(4,2);

let a = 1;
let b = 2;
let c;
let swap = (a,b) =>{
    c = a;
    a = b; b = c;
}


let si = (principle,rate,time) => {return (principle * rate * time)/100};

let circle = (radius) => {
    return {
        diameter: 2*radius,
        area: Math.PI * Math.pow(radius,2),
        circumference: 2*Math.PI*radius
    }
};

console.log(`*****
*****
*****
*****
*****`);

let electricityBill = (units) => (units*10);


