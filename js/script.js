document.addEventListener("DOMContentLoaded", () => {
  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("modal-overlay");
  modalOverlay.innerHTML = `
    <div class="modal-content" role="document" aria-modal="true" aria-labelledby="contactModalTitle" tabindex="-1">
      <h2 id="contactModalTitle">Contactez-nous</h2>
      <p>
        Pour toute demande ou question, merci de compléter le formulaire
        ci-dessous. Nous nous engageons à vous répondre rapidement.
      </p>
      <form id="contactForm" novalidate>
        <input type="text" name="name" placeholder="Nom complet" required />
        <input type="email" name="email" placeholder="Adresse e-mail" required />
        <textarea name="message" placeholder="Écrivez votre message ici" required></textarea>
        <div class="modal-buttons">
          <button type="submit">Envoyer</button>
          <button type="button" class="close-modal" aria-label="Fermer la fenêtre de contact">Fermer</button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(modalOverlay);

  // Відкриття модалки по кнопках з класом .contacts
  const contactButtons = document.querySelectorAll(".contacts");
  contactButtons.forEach(button => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      modalOverlay.classList.add("show");
      // Фокус на форму для доступності
      modalOverlay.querySelector("form").focus();
    });
  });

  // Закриття модалки
  modalOverlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      modalOverlay.classList.remove("show");
    }
  });

  // Закриття кнопкою "Fermer"
  modalOverlay.querySelector(".close-modal").addEventListener("click", () => {
    modalOverlay.classList.remove("show");
  });

  // Додатково: закриття клавішею Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("show")) {
      modalOverlay.classList.remove("show");
    }
  });

  // Простий валідатор (без відправки)
  const form = modalOverlay.querySelector("#contactForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (form.checkValidity()) {
      alert("Merci pour votre message. Nous vous répondrons bientôt.");
      form.reset();
      modalOverlay.classList.remove("show");
    } else {
      form.reportValidity();
    }
  });
});
