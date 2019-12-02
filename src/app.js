import University from './Univeristy';

const uni = new University();
console.log('object');
let personalid = document.getElementById('personalId');
let firstname =  document.getElementById('firstname');
let lastname = document.getElementById('lastname');

document.getElementById('studentFormSubmit').addEventListener('click', () => {

    if(personalid.value === '' || firstname.value === '' || lastname.value === '') {
        alert('Please full in all');
        return;
    }

    const student = {
        firstname: firstname.value,
        lastname: lastname.value
    };

    console.log( uni.addStudent(personalid.value, student));

    personalid.value = '';
    firstname.value = '';
    lastname.value = '';

    console.log(uni.getAllStudents());
});


let code = document.getElementById('code');
let name =  document.getElementById('name');
let price = document.getElementById('price');

document.getElementById('subjectFormSubmit').addEventListener('click', () => {

    if(code.value === '' || name.value === '' || price.value === '') {
        alert('Please full in all');
        return;
    }

    const subject = {
        name: name.value,
        price: price.value
    };

    console.log( uni.addSubject(code.value, subject));

    code.value = '';
    name.value = '';
    price.value = '';

    console.log(uni.getAllsubjects());
});