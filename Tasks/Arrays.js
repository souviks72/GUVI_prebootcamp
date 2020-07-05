var myarray=[11,22,33,44,55];
let c = 0;
myarray.forEach((a)=> c++);
console.log(c);

let friends = ["Mari","MarryJane","CaptainAmerica","Jeff","AAK Chandran" ];
function dataHandling(input){
    for (var i = 0; i < input.length; i++) {
        if(input[i]==='Mari')
            input[i] = "Munnabhai";
    }
}
dataHandling(friends);

function printTillCaptainAmerica(input){
    let i = 0;
    while(input[i]!=='CaptainAmerica')
        console.log(input[i]);
}
printTillCaptainAmerica(friends);

function friendOrNot(input){
    let flag=0;
    input.forEach((friend)=>{
        if(friend===input){
            flag=1;
            break;
        }
    });
    if(flag===1)
        console.log('friend');
    else
        console.log('Not friend');
}
friendOrNot(friends);

var friends2 = ["Tonystark","Loki","PeterParker","Banner","Bruce"];
function combineAndSort(arr1,arr2){
    let arr = [];
    arr1.forEach((a)=>{arr.push(a)});
    arr2.forEach((a)=>{arr.push(a)});
    arr.sort();
    console.log(arr);
}

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let arr = arr1.join('')+arr2.join('');
console.log(arr.split(''));

const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
let sum = 0;
friendsInfo.forEach((a)=>{
    if(typeof a === "number")
        sum+=a;
});

console.log(sum);

var input = [
    [“0001”, “Roman Alamsyah”, “Bandar Lampung”, “21/05/1989”, “Membaca”],
    [“0002”, “Dika Sembiring”, “Medan”, “10/10/1992”, “Bermain Gitar”],
    [“0003”, “Winona”, “Ambon”, “25/12/1965”, “Memasak”],
    [“0004”, “Bintang Senjaya”, “Martapura”, “6/4/1970”, “Berkebun”]
    ]
function dataHandling2(input){
    for (var i = 0; i < input.length; i++) {
        let arr = input[i];
        arr.forEach(a => console.log(a));
    }
}
dataHandling2(input);

