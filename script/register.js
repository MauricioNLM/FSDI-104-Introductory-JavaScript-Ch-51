console.log("Helo Word")

let pets = [];


let cat = {
    name:"Michi",
    age:"5",
    gender:"M",
    breed:"siames"
} 

let dog = {
    name:"Black",
    age:"8",
    gender:"M",
    breed:"pastor "
} 

document.write(cat.name)
document.write(dog.name)

pets.push(cat,dog)

function displayPets(array)
{
    console.log("Total pets = "+array.length);
    for(let i=0;i<array.length;i++){
        console.log(array[i].name)
    }
}

displayPets(pets)