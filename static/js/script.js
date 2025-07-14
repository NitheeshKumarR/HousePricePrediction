const steps = document.querySelectorAll('.step');
const nextBtn = document.getElementById('nextBtn');
const stepIndicator = document.getElementById('stepIndicator');
let currentStep = 0;

function showStep(index) {
    steps.forEach((step, i) => {
    step.classList.toggle('active', i === index);
    });
    stepIndicator.textContent = `Step ${index + 1} of ${steps.length}`;
    if (index === steps.length - 1) {
    nextBtn.textContent = 'Predict';
    nextBtn.type = 'submit';
    } else {
    nextBtn.textContent = 'Next';
    nextBtn.type="button";
    }
}

nextBtn.addEventListener('click', () => {
    const currentInput = steps[currentStep].querySelector('input, select');
    if (!currentInput.checkValidity()) {
    currentInput.reportValidity();
    return;
    }

    if (currentStep < steps.length - 1) {
    currentStep++;
    showStep(currentStep);
    } else {
    document.getElementById('multiStepForm').submit(); // or handle via JS
    }
});

showStep(currentStep);

