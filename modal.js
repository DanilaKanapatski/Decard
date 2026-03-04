(() => {
    const modal = document.getElementById('contact-modal');
    const openBtn = document.querySelector('[data-modal-open="contact"]');
    const closeEls = modal.querySelectorAll('[data-modal-close]');
    let lastActiveEl = null;

    function openModal() {
        if (!modal) return;
        lastActiveEl = document.activeElement;
        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');

        const closeBtn = modal.querySelector('.modal__close');
        closeBtn && closeBtn.focus();
        window.addEventListener('keydown', onKeyDown);
    }

    function closeModal() {
        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');

        window.removeEventListener('keydown', onKeyDown);
        if (lastActiveEl) lastActiveEl.focus();
    }

    function onKeyDown(e) {
        if (e.key === 'Escape') closeModal();
    }

    openBtn?.addEventListener('click', openModal);
    closeEls.forEach(el => el.addEventListener('click', closeModal));

    modal.querySelector('.modal__dialog').addEventListener('click', (e) => {
        e.stopPropagation();
    });
})();
