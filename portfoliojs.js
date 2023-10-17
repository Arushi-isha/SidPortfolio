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

const slides=document.querySelectorAll(".slide");
var counter=0;
slides.forEach(
    (slides,index) => {
        slides.style.left= `${index*100}%`
    }
)
const goNext=() =>{
    counter++;
    slideImage();
}
const goPrev=() =>{
    counter--;
    slideImage();
}
const slideImage=() =>{
    slides.forEach(
        (slides)=> {
            slides.style.transform= `translateX(-${counter*100}%)`
        }
    )
}