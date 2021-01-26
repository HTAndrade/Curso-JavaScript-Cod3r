function fn() {
    log('Hoisting de função');

    function log(value) {
        console.log(value);
    }
}

fn();

/*function fn() {
    log('Hoisting de função');

    function log(value) {
        console.log(value);
    }
}
*/