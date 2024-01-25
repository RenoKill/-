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

const bal1 = document.querySelector('.bal1')
const bal2 = document.querySelector('.bal2')
const bal3 = document.querySelector('.bal3')
const bal4 = document.querySelector('.bal4')
const bal5 = document.querySelector('.bal5')
const bal6 = document.querySelector('.bal6')
const bal7 = document.querySelector('.bal7')
const bal8 = document.querySelector('.bal8')
const bal9 = document.querySelector('.bal9')
const bal10 = document.querySelector('.bal10')
const bal11 = document.querySelector('.bal11')
const bal12 = document.querySelector('.bal12')

bal1.addEventListener('click', () => {
    alert('Учень повинен чітко і повно відповідати на запитання вчителя, використовуючи правильну термінологію.');
});
bal2.addEventListener('click', () => {
    alert('Учень повинен вміти обґрунтувати свої відповіді, наводячи аргументи та приклади.');
});
bal3.addEventListener('click', () => {
    alert('Учень повинен вміти послідовно і логічно викладати свої думки, не відходячи від теми.');;
});
bal4.addEventListener('click', () => {
    alert('Учень повинен оформлювати свою роботу правильно і грамотно.');
});
bal5.addEventListener('click', () => {
    alert('Учень повинен брати активну участь у роботі на уроці, відповідати на запитання, задавати запитання, висловлювати власні думки.');
});
bal6.addEventListener('click', () => {
    alert('Учень повинен вміти працювати в групі, розподіляти обов\'язки, домовлятися з однокласниками.');
});
bal7.addEventListener('click', () => {
    alert('Учень повинен вміти виконувати завдання самостійно, без допомоги.');
});
bal8.addEventListener('click', () => {
    alert('Учень повинен вміти коригувати власні помилки, виправляючи їх у подальшій роботі.');
});
bal9.addEventListener('click', () => {
    alert('Учень повинен вміти використовувати додаткові джерела інформації, щоб отримати знання з теми.');
});
bal10.addEventListener('click', () => {
    alert('Учень повинен вміти презентувати результати своєї роботи, чітко і зрозуміло пояснюючи свої думки.');
});
bal11.addEventListener('click', () => {
    alert('Учень повинен вміти оцінювати власну роботу, визначаючи її сильні та слабкі сторони.');
});
bal12.addEventListener('click', () => {
    alert('Учень повинен самостійно планувати свою роботу, стежити за її виконанням і оцінювати результати.');
});




