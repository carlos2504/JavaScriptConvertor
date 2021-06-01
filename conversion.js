(function () {

    "use strict";

    let converType = "miles";
    const heading = document.querySelector('h1');
    const intro = document.querySelector('p');
    const answerDiv = document.getElementById('answer');
    const form = document.getElementById('convert');
    document.addEventListener('keydown', function (event) {
        //Determine which key does the user pressed
        let key = event.code;
        //Conditions if the user pressed key "K" or "M"
        if (key === 'KeyK') {
            heading.innerHTML = 'Kilometers to Miles Converter';
            intro.innerHTML = 'Type in a number of Kilometers and click the button to convert the distance to Miles.';
            converType = "kilometers";
        } else if (key === 'KeyM') {
            heading.innerHTML = 'Miles to Kilometers Converter';
            intro.innerHTML = 'Type in a number of Miles and click the button to convert the distance to Kilometers.';
            converType = "miles";
        }
    });

    form.addEventListener('submit', function (Ev) {
        //Prevents the form to go to the somephpfile.php file because it does not exist
        Ev.preventDefault();
        const distance = parseFloat(document.getElementById('distance').value);
        //Conditions that determine what would we do in case the user wants to convert kilometers or Miles
        if (distance) {
            let Result = 0;
            if (converType == 'miles') {
                Result = (distance * 1.609344).toFixed(3);
                answerDiv.innerHTML = `<h2>${distance} Miles are equal to ${Result} Kilometers</h2>`;
            } else if (converType == 'kilometers') {
                Result = (distance * 0.621371).toFixed(3);
                answerDiv.innerHTML = `<h2>${distance} Kilometers are equal to ${Result} Miles</h2>`;
            }

        } else {
            answerDiv.innerHTML = '<h2>Please enter a number !</h2>';
        }
    });
})();