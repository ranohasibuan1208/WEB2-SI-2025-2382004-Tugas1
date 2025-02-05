
"use strict";
function angryProfessor(k, a) {
    let onTimeStudents = a.filter(time => time <= 0).length;
    return onTimeStudents >= k ? "NO" : "YES";
}
const testCases = [
    [3, [-1, -3, 4, 2]],
    [2, [0, -1, 2, 1]]
];
testCases.forEach(([k, a]) => {
    console.log(angryProfessor(k, a));
});
