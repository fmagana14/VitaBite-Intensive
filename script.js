function updateSliderValue(id, value){
    console.log(id) 
    document.getElementById(id).innerHTML = value
}

const calorieSliders = document.querySelectorAll ('.calorie-slider');
const calorieChart = document.getElementById ('calorie-chart');

calorieSliders.forEach(slider => {
    console.log(slider)
    slider.addEventListener('input', updateCalories);
    slider.addEventListener('change', updateCalories)
})

function updateCalories() {
    const totalCalories = Array.from(calorieSliders).reduce((total, slider) => total + parseInt(slider.value), 0);
    console.log(totalCalories)
    document.getElementById('calorie-chart').style.width = (totalCalories / 4000 * 100) + '%';
}

function open(tabContent){
    var i, x;
    x = docutment.getElementbyClassName("nav-item");

}


function addFood() {
    const mealSelector = document.getElementById("meals");
    const selectedMeal = mealSelector.value;
    const foodInput = document.getElementById("site-search");
    const caloriesInput = parseInt(foodInput.value); 

    const spanId = `calorie-${selectedMeal.toLowerCase()}-slider`;
    const span = document.getElementById(spanId);
    console.log(spanId) 
    
    const sliderId = `${selectedMeal.toLowerCase()}-slider`;
    const slider = document.getElementById(sliderId)
    console.log(sliderId)
    slider.value = caloriesInput;

    updateCalories()


    const caloriesDisplay = document.getElementById(`calorie-${selectedMeal.toLowerCase()}-slider`);
    caloriesDisplay.textContent = caloriesInput;

    foodInput.value = "";
}
