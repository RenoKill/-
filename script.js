function summariseMarks() {
    const summary = document.querySelector('.summary');
    const sumButton = document.querySelector('.summbtn');
    const inputs = Array.from(document.querySelectorAll('.mark'));

    sumButton.addEventListener('click', () => {
        let total = 0;
        for(const input of inputs) {
            if (input.checked) {
                total ++;
            }
            console.log(total)
        }
        
        summary.textContent = total;
    });
}
summariseMarks();