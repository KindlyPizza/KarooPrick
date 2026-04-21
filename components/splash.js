// components/age-gate.js

window.showAgeGate = function showAgeGate(onPass, onFail) {
  // Idempotency guard — don't show two overlays
  if (document.querySelector('.age-gate')) return;

  var root = document.getElementById('age-gate-root');
  if (!root) return;

  var el = document.createElement('div');
  el.innerHTML = [
    '<div class="age-gate">',
    '  <div class="age-gate-inner">',
    '    <div class="wordmark">Karoo Prick</div>',
    '    <div class="small">\u2014 The Karoo Prick Co. \u2014</div>',
    '    <h2>A small question before we pour.</h2>',
    '    <p>Are you of legal drinking age?</p>',
    '    <div class="buttons">',
    '      <button class="btn primary" id="age-yes">Yes \u00b7 18+</button>',
    '      <button class="btn" id="age-no">Not yet</button>',
    '    </div>',
    '    <div class="motto">\u2014 Sit Bonum Tempora Volvunt \u2014</div>',
    '    <div class="disclaimer">',
    '      By entering you confirm you are of legal drinking age in your country.',
    '      Not for persons under 18. Please drink responsibly.',
    '    </div>',
    '  </div>',
    '</div>',
  ].join('');

  var ageGate = el.firstElementChild;
  root.appendChild(ageGate);

  function dismiss(callback) {
    ageGate.classList.add('hide');
    setTimeout(function () {
      if (ageGate.parentNode) ageGate.parentNode.removeChild(ageGate);
      callback();
    }, 420);
  }

  document.getElementById('age-yes').addEventListener('click', function () {
    dismiss(onPass);
  });

  document.getElementById('age-no').addEventListener('click', function () {
    dismiss(onFail);
  });
};
