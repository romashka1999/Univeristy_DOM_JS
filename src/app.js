import { personalId, firstName, lastName, age, code, name, credit, hours, createAlert, 
    studentTable, subjectTable, studentSelect, subjectSelect, 
    registerStudent, studentTableSearch, subjectTableSearch, 
    studentsInput, subjectsInput } from './selectHtmlElements';
import University from './Univeristy';
import { validator } from './helpers/validator';
import { drawStudents } from './helpers/drawStudents';
import { drawSubjects } from './helpers/drawSubjects';
const uni = new University();

const addOptions = (arr, conf) => {
    for(let a of arr) {
        const option = document.createElement('option');
        if(conf === 'student') {
            var textNode = document.createTextNode(a.personalId);
        } else {
            var textNode = document.createTextNode(a.code);
        }
        option.appendChild(textNode);
        if(conf === 'student') {
            studentSelect.appendChild(option);
        } else {
            subjectSelect.appendChild(option);
        }
    }
}
document.getElementById('nav-registration-tab').addEventListener('click', () => {
    addOptions(uni.getAllStudents(), 'student');
    addOptions(uni.getAllsubjects(), 'subject');

});

document.getElementById('nav-subject-tab').addEventListener('click', () => {
    studentSelect.innerHTML = '';
    subjectSelect.innerHTML = '';
});
document.getElementById('nav-student-tab').addEventListener('click', () => {
    studentSelect.innerHTML = '';
    subjectSelect.innerHTML = '';
});

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
    drawStudents(uni, students);

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
    drawSubjects(uni, subjects);

    code.value = '';
    name.value = '';
    credit.value = '';
    hours.value = '';
});


document.getElementById('registerStudent').addEventListener('click', () => {
    const studentSelectValue = studentSelect.value;
    const subjectSelectValue = subjectSelect.value;
    const response = uni.registerStudentOnSubject(studentSelectValue, subjectSelectValue);
    validator(response.statusCode, response.message);
});

document.getElementById('searchSubjects').addEventListener('click', () => {
    if(subjectsInput.value === '') {
        validator(300, 'please enter personalId before searching');
        return;
    }
    const personalId = subjectsInput.value;
    const subjects = uni.allRegisteredSubjectsOnStudent(personalId);
    console.log(subjects);
});

document.getElementById('searchStudents').addEventListener('click', () => {
    if(studentsInput.value === '') {
        validator(300, 'please enter code before searching');
        return;
    }
    const code = studentsInput.value;
    const students = uni.allRegisteredStudentsOnSubject(code);
    console.log(students);

});