/* CURRENTLY IN: javascript/main.js */

(() => { // protect the lemmings!

    // this function will remove the specified class
    const removeClass = (selector, classToRemove) => {
        const actives = document.querySelectorAll(selector)
        for(const active of actives) {
            active.classList.remove(classToRemove);
        }
    };  // removeClass

    // this function will remove the specified class
    const addClass = (selector, classToRemove) => {
        const actives = document.querySelectorAll(selector)
        for(const active of actives) {
            active.classList.add(classToRemove);
        }
    };  // removeClass

    const boxes = Array.from(document.querySelectorAll('.js-box'));

    boxes.forEach((box, index) => {
        box.addEventListener('click', (e) => {
            const currentBox = e.target;

            // see what other boxes are active
            removeClass('.cw-grid-box--active', 'cw-grid-box--active');

            // add active class to our box
            currentBox.classList.add('cw-grid-box--active');

            // figure out my row
            const row = Math.floor((index)/5);

            // see what other boxes are active
            removeClass('.cw-grid-box', 'cw-grid-box--row-active');

            // see what other boxes are active
            addClass('.js-row-' + row, 'cw-grid-box--row-active');
        });
    });

})();

/*

    // grab all boxes
    const boxes = document.querySelectorAll('.js-box');

    // since we have more than one, loop thru EACH
    // and add a click handler
    for ( let i = 0; i < boxes.length; i++ ) {
        const box = boxes[i];

        // this is us adding a click handler to EACH box
        box.addEventListener('click', (e) => {
            // when this box is clicked, grab the EXACT box that was clicked
            // the event object will tell us this
            const currentBox = e.target;
            console.log(i);

            // see what other boxes are active
            removeClass('.cw-grid-box--active', 'cw-grid-box--active');

            // add active class to our box
            currentBox.classList.add('cw-grid-box--active');


        });
    }
*/
