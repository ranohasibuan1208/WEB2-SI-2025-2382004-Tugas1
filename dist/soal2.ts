function gradingStudents(grades: number[]): number[] {
    return grades.map(grade => {
        if (grade < 38) {
            return grade;
        } else {
            const nextMultiple = Math.ceil(grade / 5) * 5;
            return nextMultiple - grade < 3 ? nextMultiple : grade;
        }
    });
}


const grades = [73, 67, 38, 33];
console.log(gradingStudents(grades));  