export const initPiktogtams = () => {
    const piktogramsBtn = document.getElementById('piktogramsBtn');
    const hiddenPiktogtams = document.querySelectorAll('.piktogram--hidden');

    const handlePictogramsVisbility = (init: boolean) => {
        piktogramsBtn && hiddenPiktogtams.forEach(piktogtam => {
            !init && piktogtam.classList.toggle('visible');
            piktogtam.classList.contains('visible')
                ? piktogramsBtn.innerHTML = 'Zobrazit méně'
                : piktogramsBtn.innerHTML = 'Zobrazit více';
        })
    }

    handlePictogramsVisbility(true);

    piktogramsBtn && hiddenPiktogtams && piktogramsBtn.addEventListener('click', () => {
        handlePictogramsVisbility(false);
    })
}