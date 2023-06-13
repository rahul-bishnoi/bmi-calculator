const calculateForm = document.getElementById('calculate-form'),
      calculateCm = document.getElementById('height-cm'),
      calculateKg = document.getElementById('weight-kg'),
      calculateMessage = document.getElementById('calculate-message')

const calculateBmi = (e)=>{
    e.preventDefault()

    if(calculateCm.value === ''|| calculateKg.value === ''){

        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        calculateMessage.textContent = 'Fill in the Height and Weight'

        //remover message after some time
        setTimeout(()=>{
            calculateMessage.textContent = ''
        }, 3000)
    } else{
        const cm = calculateCm.value / 100,
              kg = calculateKg.value,
              bmi = Math.round(kg / (cm * cm))

              if(bmi < 18.5){
               calculateMessage.classList.add('color-green')
               calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny`
              }else if(bmi < 25){
                calculateMessage.classList.add('color-green')
               calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`
              }else{
                calculateMessage.classList.add('color-green')
               calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`
              }

              calculateCm.value = ''
              calculateKg.value = ''

              //remover message after some time
              setTimeout(()=>{
                calculateMessage.textContent = ''
              }, 5000)
    }
}
calculateForm.addEventListener('submit',calculateBmi)