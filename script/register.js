
class Pet {
    age;
    gender;
    breed;
    service;
    constructor(name, type = 'Basic') {
        this.name = name;
        this.type = type;
    }
}


console.log("Helo Word")

let pets = [];


// let cat = {
//     name:"Michi",
//     age:"5",
//     gender:"M",
//     breed:"siames"
// } 

// let dog = {
//     name:"Black",
//     age:"8",
//     gender:"M",
//     breed:"pastor "
// } 

// document.write(cat.name)
// document.write(dog.name)

// pets.push(cat,dog)

let cat = new Pet('michi');
cat.age=5;
cat.gender='M';

let dog = new Pet('black');
dog.age = 9;
dog.gender='F';

pets.push(cat,dog)

function displayPets(array)
{
    console.log("Total pets = "+array.length);
    for(let i=0;i<array.length;i++){
        console.log(array[i].name)
    }
}





displayPets(pets)

function Restister(){
    let name = document.getElementById('namePet').value
    let pet = new Pet(name);

    pet.age = document.getElementById('agePet').value
    pet.gender = document.getElementById('genderPet').value
    pet.breed = document.getElementById('breedPet').value
    pet.service = document.getElementById('servicePet').value
    pet.type = document.getElementById('typeSer').value



    if(validationNotNull(pet)){
        pets.push(pet)
        displaycards()
        displayRows()
    }
    else{
        alert("Fill the information")
    }
    
}

function validationNotNull(pet){
    let response = true;

    if(pet.name == "" || pet.age == "" ){
        response = false;
    }

    return response;
}

function displayRows(){
    const table = document.getElementById('tablePets');
    table.innerHTML='';

    for(let i=0;i<pets.length;i++){
        table.innerHTML += `
        <tr>
            <td>${pets[i].name}</td>
            <td>${pets[i].age}</td>
            <td>${pets[i].gender}</td>
        </tr>
        `
    }
}