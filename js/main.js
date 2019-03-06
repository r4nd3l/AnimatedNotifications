// Default DevCorner JavaScript Setting

// Default variables about each section in the container
var textDefault,titleDefault,textInfo,titleInfo,textSuccess,titleSuccess,textWarning,titleWarning,textDanger,titleDanger;

// notifier.show(title, msg, type, icon, timeout);

// Default Notifications
document.querySelector('#btn-default').addEventListener('click', function () {notifier.show(titleDefault, textDefault, '', '', 0);}, false);
document.querySelector('#btn-info').addEventListener('click', function () {notifier.show(titleInfo, textInfo, 'info', '', 0);}, false);
document.querySelector('#btn-success').addEventListener('click', function () {notifier.show(titleSuccess, textSuccess, 'success', '', 0);}, false);
document.querySelector('#btn-warning').addEventListener('click', function () {notifier.show(titleWarning, textWarning, 'warning', '', 0);}, false);
document.querySelector('#btn-danger').addEventListener('click', function () {notifier.show(titleDanger, textDanger, 'danger', '', 0);}, false);

// Notifications with icons
document.querySelector('#btn-default-i').addEventListener('click', function (){notifier.show(titleDefault, textDefault, '', 'img/svgs/regular/bell.svg', 0);}, false);
document.querySelector('#btn-info-i').addEventListener('click', function (){notifier.show(titleInfo, textInfo, 'info', 'img/svgs/solid/exclamation-circle.svg', 0);}, false);
document.querySelector('#btn-success-i').addEventListener('click', function (){notifier.show(titleSuccess, textSuccess, 'success', 'img/svgs/solid/check-circle.svg', 0);}, false);
document.querySelector('#btn-warning-i').addEventListener('click', function () {notifier.show(titleWarning, textWarning, 'warning', 'img/svgs/solid/exclamation-triangle.svg', 0);}, false);
document.querySelector('#btn-danger-i').addEventListener('click', function () {notifier.show(titleDanger, textDanger, 'danger', 'img/svgs/solid/ban.svg', 0);}, false);

// Auto close notifications
document.querySelector('#btn-default-temp').addEventListener('click', function () {notifier.show('Hello!', textDefault, '', 'img/svgs/regular/bell.svg', 4000);}, false);
document.querySelector('#btn-info-temp').addEventListener('click', function () {notifier.show('Update!', textInfo, 'info', 'img/svgs/solid/exclamation-circle.svg', 4000);}, false);
document.querySelector('#btn-success-temp').addEventListener('click', function () {notifier.show('Done!', textSuccess, 'success', 'img/svgs/solid/check-circle.svg', 4000);}, false);
document.querySelector('#btn-warning-temp').addEventListener('click', function () {notifier.show('Warning!', textWarning, 'warning', 'img/svgs/solid/exclamation-triangle.svg', 4000);}, false);
document.querySelector('#btn-danger-temp').addEventListener('click', function () {notifier.show('Error!', textDanger, 'danger', 'img/svgs/solid/ban.svg', 4000);}, false);
