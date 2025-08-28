
function hideElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.add("d-none");
        console.info(`hideElement: #${elementId} is now hidden.`);
    } else {
        console.warn(`hideElement: Element with ID '${elementId}' not found.`);
    }
}


function showElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.classList.remove("d-none");
        console.info(`showElement: #${elementId} is now visible.`);
    } else {
        console.warn(`showElement: Element with ID '${elementId}' not found.`);
    }
}


function buildLib() {
    const pluralNounValue = getValue('PluralNoun');
    const noun1Value = getValue('Noun1');
    const noun2Value = getValue('Noun2');
    const songValue = getValue('Song');
    const verbValue = getValue('Verb');

    const story = `
        Learning to drive is a tricky process. There are a few rules you must follow.

        1. Keep two ${pluralNounValue} on the steering wheel at all times.

        2. Step on the ${noun1Value} to speed up and the ${noun2Value} to slow down.

        3. Your parents will just LOVE it if you play "${songValue}" on the radio.

        4. Make sure to honk your horn when you see ${verbValue} on a street sign.
    `;

    setText('storyOutput', story);


    showElement('madLibStory');
    hideElement('inputFormContainer');
}

function resetLib() {

    setValue("PluralNoun", "");
    setValue("Noun1", "");
    setValue("Noun2", "");
    setValue("Song", "");
    setValue("Verb", "");


    setText("storyOutput", "");


    hideElement('madLibStory');
    showElement('inputFormContainer');
}


onEvent("submitButton", "click", buildLib);


onEvent("resetButton", "click", resetLib);