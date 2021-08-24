
inputNum.addEventListener('change', () => {
    let count = parseInt(inputNum.value)
    function updateValue(e)  {
        log.textContent = e.target.value
    }
    plus.onclick = () => {
        count += 1
        log.innerText = count
    } 
    minus.onclick = () => {
        count -= 1
        log.innerText = count
    }
    event.preventDefault();
})

