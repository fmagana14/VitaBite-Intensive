function updateSliderValue(id, value){
    console.log(id) 
    document.getElementById(id).innerHTML = value
}

const calorieSliders = document.querySelectorAll ('.calorie-slider');
const calorieChart = document.getElementById ('calorie-chart');

console.log(calorieSliders)
calorieSliders.forEach(slider => {
    slider.addEventListener('input', updateCalories);
})

function updateCalories() {
    const totalCalories = Array.from(calorieSliders).reduce((total, slider) => total + parseInt(slider.value), 0);
    document.getElementById('calorie-chart').style.width = (totalCalories / 2000 * 100) + '%';
}

function open(tabContent){
    var i, x;
    x = docutment.getElementbyClassName("nav-item")

}

