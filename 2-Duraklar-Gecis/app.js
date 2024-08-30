const progress = document.getElementById('ilerleme');
const duraklar = document.querySelectorAll('.durak');
const ileri = document.getElementById('ileri');
const geri = document.getElementById('geri');


let aktifDurak = 1;

ileri.addEventListener('click', () => {
    aktifDurak++;
    
    if (aktifDurak > duraklar.length) {
        aktifDurak = duraklar.length;
    }

    update();
});

geri.addEventListener('click', () => {
    aktifDurak--;
    
    if (aktifDurak < 1) {
        aktifDurak = 1;
    }

    update();
});

function update() {
    duraklar.forEach((durak, index) => {
        if (index < aktifDurak) {
            durak.classList.add('active');
        } else {
            durak.classList.remove('active');
        }
    });

    const ilerleme = ((aktifDurak - 1) / (duraklar.length - 1)) * 100;
    progress.style.width = `${ilerleme}%`;

    ileri.disabled = aktifDurak === duraklar.length;
    geri.disabled = aktifDurak === 1;
}
