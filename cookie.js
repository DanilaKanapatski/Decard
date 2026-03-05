(() => {
    const KEY = "cookieConsent";
    const el = document.getElementById("cookie");
    if (!el) return;

    const open = () => {
        el.classList.add("is-open");
        el.setAttribute("aria-hidden", "false");
    };

    const close = () => {
        el.classList.remove("is-open");
        el.setAttribute("aria-hidden", "true");
    };

    // show only if no decision yet
    const saved = localStorage.getItem(KEY);
    if (!saved) open();

    el.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-cookie]");
        if (!btn) return;

        const action = btn.dataset.cookie;

        if (action === "accept") {
            localStorage.setItem(KEY, "accepted");
            close();
        }

        if (action === "decline") {
            localStorage.setItem(KEY, "declined");
            close();
        }

        if (action === "close") {
            // закрыть без выбора — баннер появится снова при следующем заходе
            close();
        }
    });
})();