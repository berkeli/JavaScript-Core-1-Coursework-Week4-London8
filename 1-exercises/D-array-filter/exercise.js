/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/

const pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];

const pairsByIndex = pairsByIndexRaw.filter((e) => Array.isArray(e) && e.length === 2); // Complete this statement

const students = ["Islam", "Lesley", "Harun", "Rukmini"];
const mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

const pairs = pairsByIndex.map((indexes) => {
  const student = students[indexes[0]];
  const mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);

/* EXPECTED RESULT

  [ [ 'Islam', 'Luke' ], [ 'Lesley', 'Mozafar' ], [ 'Harun', 'Irina' ] ]
*/
