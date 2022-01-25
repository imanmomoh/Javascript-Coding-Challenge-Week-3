function exercise(activity) {
    function doExercise() {
        return `Today's exercise : ${activity}`
    }
    return doExercise;
}

var run = exercise('running');
console.log(run()); 
var swim = exercise('swimming');
console.log(swim()); 
