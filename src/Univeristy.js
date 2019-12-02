export default class University {

  constructor() {
    this.students = {};
    this.subjects = {};
  }

  registerStudentOnSubject(personalId, code){
      //regiser concrete student on concrete subject
      if( !this.students[personalId].subjects.includes(this.subjects[code])){
          this.students[personalId].subjects.push(this.subjects[code]);
          this.ubjects[code].students.push(this.students[personalId]);
          return `student with personalId: ${personalId} was successfully registered on the subject which code is ${code}`;
      } else {
          return `student is already registered on this subject`;
      }
  }

  deleteStudentFromSubject(personalId, code){
      //delete concrete student from concrete subject

      for(let i in this.students[personalId].subjects){
          if(this.students[personalId].subjects[i][code] === code){
            this.students[personalId].subjects.splice(i,1);
              break;
          }
      }
      for(let i in this.subjects[code].students){
          if(this.subjects[code].students[i][personalId] === personalId){
            this.subjects[code].students.splice(i,1);
              break;
          }
      }
  }

  allRegisteredStudentsOnSubject(code){
      //return all students who studies concrete subject
      if(this.subjects[code]){
          return Object.values(this.subjects[code].students);
      } else {
          return [];
      }
  }

  allRegisteredSubjectsOnStudent(personalId){
      //return all subjects ,where student is registered
      if(this.students[personalId]){
          return Object.values(this.students[personalId].subjects);
      } else {
          return [];
      }
  }

  addStudent(personalId, student){
      if(!this.students[personalId]){
          student.subjects = [];
          //create code property in subject object
          student.personalId = personalId;
          //create new subject object on concrete code property in subjects object
          this.students[personalId] = student;
          return { 
            message: `student successfully added in students object with personalId: ${personalId} personalId`,
            statusCode: 200
          }
      } else {
            return { 
              message: `student is already exists in students object with personalId: ${personalId} personalId`,
              statusCode: 400
            }
      }
  }
  
  updateStudent(personalId, updatedStudent){
      //update student data
      if(this.students[personalId]){
          let keys = Object.keys(this.students);
          let student = {};

          for (let key in keys) {
              if(key === personalId) {
                  student = this.students[key];
                  break;
              }
          }

          let studentKeys = Object.keys(student);
          for(let key in studentKeys) {
              if(updatedStudent.hasOwnProperty(key)) {
                this.students[personalId][key] = updatedStudent[key];
              }
          }
          return `student with personalId: ${personalId} was successfully updated`;
      } else {
          return `student with personalId: ${personalId} does not exist in students object`;
      }
  }

  getStudent(personalId){
      if(this.students[personalId]){
          //return concrete student from students object with personalId
          return this.students[personalId];
      } else {
          return `student with personalId: ${personalId} does not exist in students object`
      }
      
  }

  removeStudent(personalId){
      //delete student from students object with personalId
      if( this.students.hasOwnProperty(personalId)){
          delete this.students[personalId];
          return `successfully deleted student with personalId: ${personalId}`;
      } else {
          return `student with personalId: ${personalId} is not exist in students object`;
      }
  }

  getAllStudents(){
      //return all student from students object
      return Object.values(this.students);
  }

  addSubject(code, subject){
      if(!this.subjects[code]){
          subject.students = [];
          //create code property in subject object
          subject.code = code;
          //create new subject object on concrete code property in subjects object
          this.subjects[code] = subject;
          return { 
            message: `subject successfully added in subjects object with code: ${code} code`,
            statusCode: 200
          }
      } else {
        return { 
            message: `subject is already exists in subjects object with code: ${code} code`,
            statusCode: 400
          }
      }
  }

  updateSubject(code, updatedSubject){
      //update subject data
      if(this.subjects[code]){
          let keys = Object.keys(this.subjects);
          let subject = {};

          for (let key in keys) {
              if(key === code) {
                  subject = this.subjects[key];
                  break;
              }
          }

          let subjectKeys = Object.keys(subject);
          for(let key in subjectKeys) {
              if(updatedStudent.hasOwnProperty(key)) {
                this.subjects[code][key] = updatedSubject[key];
              }
          }
          return `subject with code: ${code} was successfully updated`;
      } else {
          return `subject with code: ${code} does not exist in subjects object`;
      }
  }

  getSubject(code){
      if(this.subjects[code]){
          //return concrete subject from subjects object with code
          return this.subjects[code];
      } else {
          return `subject with code: ${code} does not exist in subjects object`
      }
  }

  removeSubject(code){
      //delete subject from subjects object with code
      if( this.students.hasOwnProperty(code)){
          delete this.subjects[code];
          return `successfully deleted subject with code: ${code}`;
      } else {
          return `subject with code: ${code} is not exist in subjects object`;
      }
  }

  getAllsubjects(){
      //return all subject from students subjects
      return Object.values(this.subjects);
  }
 
}