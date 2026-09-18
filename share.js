const message = document.querySelector('#message');
const textLink = document.querySelector('#text-jason');
const status = document.querySelector('#share-status');
const appleDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
function updateDraft() {
  textLink.href = `sms:+17708755845${appleDevice ? '&' : '?'}body=${encodeURIComponent(message.value)}`;
}
message.addEventListener('input', updateDraft);
updateDraft();
document.querySelector('#copy-message').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(message.value);
    status.textContent = 'Message copied. Paste it into your messaging app.';
  } catch {
    message.focus();
    message.select();
    status.textContent = 'Select Copy on the highlighted message, then paste it into your messaging app.';
  }
});
