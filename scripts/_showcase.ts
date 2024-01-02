export const initShowcase = () => {
    const buttons = document.querySelectorAll(".showcase__buttons > button");
    const images = document.querySelectorAll(".showcase__img > img");

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => {
                btn.classList.remove('active');
            });

            button.classList.add('active');

            images.forEach(image => {
                image.classList.remove('active');
            });

            images[index].classList.add('active');
        });
    });
}