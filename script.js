document.querySelectorAll('.switch-tab').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('data-target');
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    document.querySelector(target).classList.add('active');

    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelector(`.tab-btn[data-target="${target}"]`).classList.add('active');
  });
});
