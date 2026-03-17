// ExamNova Local Database

const DB_KEY = "examnova_database";

let ExamNovaDB = {
  questions: [],
  tests: [],
  results: []
};

function loadDB(){

 let saved = localStorage.getItem(DB_KEY);

 if(saved){
  ExamNovaDB = JSON.parse(saved);
 }

}

function saveDB(){

 localStorage.setItem(DB_KEY, JSON.stringify(ExamNovaDB));

}

// add question
function addQuestion(q){

 ExamNovaDB.questions.push(q);
 saveDB();

}

// add test
function addTest(t){

 ExamNovaDB.tests.push(t);
 saveDB();

}

// save result
function saveResult(r){

 ExamNovaDB.results.push(r);
 saveDB();

}

// init
loadDB();