const box = document.getElementById('box');
const topLeftInput = document.getElementById('top-left-input');
const topRightInput = document.getElementById('top-right-input');
const bottomLeftInput = document.getElementById('bottom-left-input');
const bottomRightInput = document.getElementById('bottom-right-input');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const copySuccess = document.getElementById('copy-success');

function updateBox() {
  const borderRadius = `${topLeftInput.value} ${topRightInput.value} ${bottomLeftInput.value} ${bottomRightInput.value}`;
  box.style.borderRadius = borderRadius;
}

generateBtn.addEventListener('click', updateBox);

copyBtn.addEventListener('click', () => {
  const css = `border-radius: ${box.style.borderRadius};`;
  navigator.clipboard.writeText(css).then(() => {
    copySuccess.classList.remove('is-hidden');
    setTimeout(() => {
      copySuccess.classList.add('is-hidden');
    }, 2000);
  });
});
