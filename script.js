const minimumInput = document.querySelector('.minimum');
const maximumInput = document.querySelector('.maximum');
const progress = document.querySelector('.progress');
const minPriceInput = document.querySelectorAll('.MinimumNumber')[0];
const maxPriceInput = document.querySelectorAll('.MaximumNumber')[1];

// Function to update the progress bar based on slider values
function updateProgress() {
    const minValue = parseInt(minimumInput.value);
    const maxValue = parseInt(maximumInput.value);
    const minRange = minimumInput.getAttribute('min');
    const maxRange = maximumInput.getAttribute('max');

    const progressWidth = ((minValue - minRange) / (maxRange - minRange)) * 100;
    progress.style.left = `${progressWidth}%`;

    const progressWidth2 = ((maxValue - minRange) / (maxRange - minRange)) * 100;
    progress.style.right = `${100 - progressWidth2}%`;
}

// Update range inputs when number inputs change
minPriceInput.addEventListener('input', function () {
    minimumInput.value = minPriceInput.value;
    updateProgress();
});

maxPriceInput.addEventListener('input', function () {
    maximumInput.value = maxPriceInput.value;
    updateProgress();
});

// Update number inputs when range inputs change
minimumInput.addEventListener('input', function () {
    minPriceInput.value = minimumInput.value;
    updateProgress();
});

maximumInput.addEventListener('input', function () {
    maxPriceInput.value = maximumInput.value;
    updateProgress();
});

// Initial progress update
updateProgress();
