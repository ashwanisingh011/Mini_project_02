function calculateBMI(){
    let weight = document.getElementById('weight').value 
    let height = document.getElementById('height').value 

    let bmi = weight / (height/100) ** 2

    let resultmsg = "Your BMI is " + bmi.toFixed(2)

    if(bmi<18.5){
        resultmsg = resultmsg + " (Under weight)"
    }
    else if(bmi >= 18.5 && bmi<25){
        resultmsg = resultmsg + " (Normal weight)"
    }
    else if(bmi >= 25 && bmi < 30){
        resultmsg = resultmsg + " (Overweight)"
    }
    else if(bmi>=30){
        resultmsg = resultmsg + " (Motaa)"
    }
    else{
        resultmsg = "Please enter valid height and weight"
    }

    let res = document.getElementById('result').innerHTML = resultmsg

    document.addEventListener('keydown', function(e){
        if(e.key === "Enter"){
            res()
        }
    })
}