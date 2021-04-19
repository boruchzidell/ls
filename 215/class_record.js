#! /usr/bin/env node

// ====================  Main Function  ==================== //
function generateClassRecordSummary(scores) {
  let classRawData = getClassRawData(scores);

  let studentScoresArray = getStudentScores(classRawData);

  let bundledExamData = examsTransformStudentToClass(classRawData);

  let classAggregateData = computeExamAggregates(bundledExamData);

  return {
    studentGrades: studentScoresArray,
    exams: classAggregateData,
  };
}

// ======================  Helper Functions  ================//
function getClassRawData(obj) {
  let scores = Object.values(obj);

  return scores.map(scoreObj => {
    return scoreObj.scores;
  });
}

function getStudentScores(rawData) {

  return rawData.map(obj => {
    return computeStudentScore(obj)
  })
}

function computeStudentScore(scoreObj) {
  let examWeight = computeExamWeight(scoreObj.exams);
  let exercisesWeight = computeExercisesWeight(scoreObj.exercises);

  let totalWeight = examWeight + exercisesWeight;
  let letterGrade = computeLetterGrade(totalWeight);

  return `${totalWeight} (${letterGrade})`;
}

function computeExamWeight(examArray) {
  const EXAM_WEIGHT = .65;
  let examTotal = examArray.reduce((total, exam) => total + exam, 0);
  let examAvg = examTotal / examArray.length;
  return Math.round(examAvg * EXAM_WEIGHT);
}

function computeExercisesWeight(exercisesArray) {
  const EXERCISES_WEIGHT = .35;
  let exercisesTotal = exercisesArray.reduce((total, exercise) => total + exercise, 0);
  return Math.round(exercisesTotal * EXERCISES_WEIGHT);
}

function computeLetterGrade(score) {
  if      (score > 92) return 'A'
  else if (score > 84) return 'B'
  else if (score > 76) return 'C'
  else if (score > 68) return 'D'
  else if (score > 59) return 'E'
  else                 return 'F'
}

function examsTransformStudentToClass(array) {
  let individualStudentExams = array.map(obj => {
    return obj.exams;
  });

  let numberOfExams = individualStudentExams[0].length;

  let individualExams = Array.from({ length: 4 });

  return individualExams.map((_, studentIndex) => {
    let exams = [];

    for (let i = 0; i <= numberOfExams; i += 1) {
      exams.push(individualStudentExams[i][studentIndex]);
    }

    return exams;
  });
}

function computeExamAggregates(examsList) {
  return examsList.map(exam => {
    let average = exam.reduce((sum, element) => sum + element, 0) / exam.length;
    let minimum = exam.reduce((min, element) => min <= element ? min : element);
    let maximum = exam.reduce((max, element) => max >= element ? max : element);

    return {
      average,
      minimum,
      maximum,
    };
  });
}

// ========================= Test Cases ===========================//
let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};

console.log(generateClassRecordSummary(studentScores));

// returns:
// {
//   studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
//   exams: [
//     { average: 75.6, minimum: 50, maximum: 100 },
//     { average: 86.4, minimum: 70, maximum: 100 },
//     { average: 87.6, minimum: 60, maximum: 100 },
//     { average: 91.8, minimum: 80, maximum: 100 },
//   ],
// }
