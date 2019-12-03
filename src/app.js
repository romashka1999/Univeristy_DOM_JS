import { personalId, firstName, lastName, age, code, name, credit, hours, createAlert, studentTable, subjectTable} from './selectHtmlElements';
import University from './Univeristy';
import { validator } from './helpers/validator';
import { drawStudents } from './helpers/drawStudents';
import { drawSubjects } from './helpers/drawSubjects';
const uni = new University();


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

    personalId.value = '';
    firstName.value = '';
    lastName.value = '';
    age.value = '';
});