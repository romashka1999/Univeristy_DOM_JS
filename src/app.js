import { personalId, firstName, lastName, age, code, name, credit, hours, createAlert, studentTable, subjectTable} from './selectHtmlElements';
import University from './Univeristy';

const uni = new University();

const validator = (statusCode, response) => {
    const alertDiv = document.createElement("div");
    if( statusCode === 200) {
        alertDiv.classList.add('alert', 'alert-success');
    } else if( statusCode === 400) {
        alertDiv.classList.add('alert', 'alert-danger');
    } else {
        alertDiv.classList.add('alert', 'alert-warning');
    }
    const textNode = document.createTextNode(response);
    alertDiv.appendChild(textNode);
    createAlert.innerHTML = '';
    createAlert.appendChild(alertDiv);
}



const drawStudents = (students) => {
    let arr = [];
    for(let student of students) {
        const tr = document.createElement('tr');
        function createTdElement(text) {
            const td = document.createElement('td');
            const textNode = document.createTextNode(text);
            td.appendChild(textNode);
            tr.appendChild(td);
        }
        const th = document.createElement("th");
        let textNode = document.createTextNode(student.personalId);
        th.appendChild(textNode);
        th.setAttribute('scope', 'row');
        tr.appendChild(th);
        createTdElement(student.firstName);
        createTdElement(student.lastName);
        createTdElement(student.age);
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('id', student.personalId);
        button.addEventListener('click', function () {
            const response = uni.removeStudent(this.getAttribute('id'));
            validator(response.statusCode, response.message);
            drawStudents(uni.getAllStudents());
        });
        button.classList.add('btn', 'btn-danger');
        textNode = document.createTextNode('Delete');
        button.appendChild(textNode);
        tr.appendChild(button);
        arr.push(tr);
    }
    studentTable.innerHTML = '';
    for(let tr of arr) {
        studentTable.appendChild(tr);
    }
}

const drawSubjects = (subjects) => {
    let arr = [];
    for(let subject of subjects) {
        const tr = document.createElement('tr');
        function createTdElement(text) {
            const td = document.createElement('td');
            const textNode = document.createTextNode(text);
            td.appendChild(textNode);
            tr.appendChild(td);
        }
        const th = document.createElement("th");
        let textNode = document.createTextNode(subject.code);
        th.appendChild(textNode);
        th.setAttribute('scope', 'row');
        tr.appendChild(th);
        createTdElement(subject.name);
        createTdElement(subject.credit);
        createTdElement(subject.hours);
        const button = document.createElement('button');
        button.setAttribute('type', 'button');
        button.setAttribute('id', subject.code);
        button.addEventListener('click', function () {
            const response = uni.removeSubject(this.getAttribute('id'));
            validator(response.statusCode, response.message);
            drawSubjects(uni.getAllsubjects());
        });
        button.classList.add('btn', 'btn-danger');
        textNode = document.createTextNode('Delete');
        button.appendChild(textNode);
        tr.appendChild(button);
        arr.push(tr);
    }
    subjectTable.innerHTML = '';
    for(let tr of arr) {
        subjectTable.appendChild(tr);
    }
}

document.getElementById('studentCreate').addEventListener('click', () => {

    if(personalId.value === '' || firstName.value === '' || lastName.value === '' || age.value === '') {
        validator(300, 'please fill all fields');
        return;
    }

    const parsedAge = parseInt(age.value);
    if(!parsedAge) {
        validator(300, 'age must be number');
        return;
    }

    const student = {
        firstName: firstName.value,
        lastName: lastName.value,
        age: age.value
    };

    const response = uni.addStudent(personalId.value, student);
    validator(response.statusCode, response.message);
    const students = uni.getAllStudents();
    drawStudents(students);

    personalId.value = '';
    firstName.value = '';
    lastName.value = '';
    age.value = '';
});



document.getElementById('subjectCreate').addEventListener('click', () => {

    if(code.value === '' || name.value === '' || credit.value === '' || hours.value === '') {
        validator(300, 'please fill all fields');
        return;
    }

    const parsedCredit = parseInt(credit.value);
    const parsedHours = parseInt(hours.value);
    if(!parsedCredit || !parsedHours) {
        validator(300, 'credit and  hours must be number');
        return;
    }

    const subject = {
        name: name.value,
        credit: credit.value,
        hours: hours.value
    };

    const response = uni.addSubject(code.value, subject);
    validator(response.statusCode, response.message);
    const subjects = uni.getAllsubjects();
    drawSubjects(subjects);

    personalId.value = '';
    firstName.value = '';
    lastName.value = '';
    age.value = '';
});