const toggle = document.getElementById('toggle');
const body = document.querySelector('body');

toggle.addEventListener('click', function () {
    if (this.classList.contains('fa-sun')) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }

    this.classList.toggle('fa-solid');
    this.classList.toggle('fa-moon');
    this.classList.toggle('fa-regular');
    this.classList.toggle('fa-sun');
});
const sub= document.getElementById('submit');
sub.addEventListener('click', Submission);
function Submission (){
    window.location.href="submission.html";
}