import { validator } from './validator';

export const drawSubjects = (uni, subjects) => {
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
            const res =  window.confirm('are you sure ? do you want delete ?', )
            if(res) {
                const response = uni.removeSubject(this.getAttribute('id'));
                validator(response.statusCode, response.message);
                drawSubjects(uni, uni.getAllsubjects());
            }
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