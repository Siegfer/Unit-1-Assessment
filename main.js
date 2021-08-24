
document.addEventListener('DOMContentLoaded', (e) => {
    const input = document.querySelector('input')
    let n = input.value
    let number = parseInt(n)
    let count = 0
    
    input.addEventListener('change', updateValue) 
    
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
