function data() {
    let pii = {
        name: 'Iman Momoh',
        ssn: 123456789
    }
    return {
        getName: function () {
            return `Hi my name is ${pii.name}`
        }
    }

}

let x = data();
console.log(x.getName());

