const number = document.getElementById('textBox')
const btn = document.getElementById('converter')

btn.addEventListener('click', () => {
    num = number.value
    console.log(numFormatter(num))
})

function numFormatter(num) {

    if(num > 999 && num < 1000000){
        return (num/1000).toFixed(1) + 'K' 
    }else if(num > 1000000){
        return (num/1000000).toFixed(1) + 'M' 
    }else if(num < 900){
        return num 
    }
}



