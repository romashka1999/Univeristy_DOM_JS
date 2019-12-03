import { validator } from './validator';

export const drawStudents = (uni, students) => {
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
            drawStudents(uni, uni.getAllStudents());
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
