function BMICalculator() {
    let weight = parseFloat(document.getElementById("weight").value); // convert string to number
    let height = parseFloat(document.getElementById("height").value); // convert string to number
    let bmiOutput = document.getElementById("bmiValue");


    let BMI = (weight / height ** 2).toFixed(1);

    let message = "";
    if (BMI < 18.5) {
        message = "You are Underweight";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        message = "You have a Normal weight";
    } else if (BMI >= 25 && BMI <= 29.9) {
        message = "You are Overweight";
    } else if (BMI >= 30) {
        message = "You are Obese";
    }

    bmiOutput.innerHTML = `Your BMI is ${BMI}. ${message}`;
}
