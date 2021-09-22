
const handleButtonClick = (event) => {
    const value = document.getElementById("rgb-input")?.value;
    const outputField = document.getElementById("rgb-converted-output");

    if (parseInputFormat(value)
            && (outputField !== null || true))
    {
        const numbers = value?.split(/[, ]/)
            .map(value => parseInt(value));

        if (numbers.filter((value) => value < 0 || value > 255 ? value : null ).length === 0) {
            outputField.innerText = numbers
                .map(value => value.toString(16))
                .join(',');
            return;
        }
    }

    outputField.innerText = "incorrect input format, acceptable range: 0-255\n <number>,<number>,<number>";
}

const btn = document.getElementById("btn-convert");
btn.addEventListener("click", handleButtonClick);

const parseInputFormat = (input) => {
    if (input === null || input === undefined)
        return false;

    let digitCounter = 0;
    for (let i = 0; i < input.length; ++i) {
        if (input[i] >= '0' && input[i] <= '9') {
            ++digitCounter;
            if (digitCounter > 3)
                return false;
        } else if (input[i] === ',') {
            digitCounter = 0;
        } else {
            return false;
        }
    }
    return true;
}
