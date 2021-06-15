#! /usr/bin/env node
/*
You volunteered to help out teaching a preschool in your area! You were given an array of all students and some important data about them, grouped by their teacher. Create a function that will ungroup every student so you can look at their details individually.

input - array of teacher objects. Each object has two properties: teacher's name and data (array of student objects)
output - array of student objects (the original student object, with addition of teachers' name property)
*/

function ungroupStudents(teacherList) {
  let studentArray = teacherList.map(teacherObj => {
    let studentsArray = teacherObj.data;
    return studentsArray.map(studentObj => {
      let studentCopy = {teacher: teacherObj.teacher, ...studentObj};
      return studentCopy;
    });
  });

  return studentArray.flat();
}


// simplest case:
let simplest =
  [
    {
      teacher: "Mr. Lamb",
      data: [
        {
          name: "Aaron",
          age: 3
        }
      ]
    }
  ];
console.log(ungroupStudents(simplest));
// [
//  {
//   teacher: 'Mr. Lamb',
//   name: "Aaron",
//   age: 3
//  }
// ]

let teachers =  [
  {
    teacher: "Ms. Car",
    data: [
      {
        name: "James",
        emergencyNumber: "617-771-1082",
      },
      {
        name: "Alice",
        alergies: ["nuts", "carrots"],
      }
    ],
  },

  {
    teacher: "Mr. Lamb",
    data: [
      {
        name: "Aaron",
        age: 3
      }
    ]
  }
]

console.log(ungroupStudents(teachers));
// [
//   {
//     teacher: "Ms. Car",
//     name: "James",
//     emergencyNumber: "617-771-1082",
//   },
//   {
//     teacher: "Ms. Car",
//     name: "Alice",
//     alergies: ["nuts", "carrots"],
//   },
//   {
//     teacher: "Mr. Lamb",
//     name: "Aaron",
//     age: 3,
//   }
// ]
