const burger = document.getElementById('burger'), links = document.getElementById('links');
burger.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));
document.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('on')); t.classList.add('on');
    const f = t.dataset.f;
    document.querySelectorAll('#gallery .ph').forEach(p => p.hidden = !(f === 'todo' || p.dataset.c === f));
}));