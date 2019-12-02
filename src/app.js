import University from './Univeristy';

const uni = new University();


const personalId = document.getElementById('personalId');
const firstName =  document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const age = document.getElementById('age');

document.getElementById('studentFormSubmit').addEventListener('click', () => {

    if(personalId.value === '' || firstName.value === '' || lastName.value === '' || age.value === '') {
        alert('please fill all fields');
        return;
    }


    const student = {
        firstName: firstName.value,
        lastname: lastName.value,
        age: age.value
    };

    console.log( uni.addStudent(personalId.value, student));

    personalId.value = '';
    firstName.value = '';
    lastName.value = '';
    age.value = '';

    console.log(uni.getAllStudents());
});


const code = document.getElementById('code');
const name =  document.getElementById('name');
const credit = document.getElementById('credit');
const hours = document.getElementById('hours');

document.getElementById('subjectFormSubmit').addEventListener('click', () => {

    if(code.value === '' || name.value === '' || credit.value === '' || hours.value === '') {
        alert('please fill all fields');
        return;
    }

    const subject = {
        name: name.value,
        credit: credit.value,
        hours: hours.value
    };

    console.log( uni.addSubject(code.value, subject));

    code.value = '';
    name.value = '';
    credit.value = '';
    hours.value = '';

    console.log(uni.getAllsubjects());
});