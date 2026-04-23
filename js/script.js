document.addEventListener("DOMContentLoaded", () => {
  // 온보딩
  const cards = document.querySelectorAll(".option-card");
  const nextBtn = document.querySelector(".onboarding-next-btn");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((c) => c.classList.remove("is-selected"));
      card.classList.add("is-selected");
      if (nextBtn) nextBtn.disabled = false;
    });
  });

  // 비밀번호 토글
  const toggles = document.querySelectorAll(".password-toggle");

  toggles.forEach((toggleBtn) => {
    const inputBox = toggleBtn.closest(".input-box");
    const input = inputBox.querySelector(".input-field");
    const eyeIcon = toggleBtn.querySelector(".eye-icon");

    toggleBtn.addEventListener("click", () => {
      const isHidden = input.type === "password";

      input.type = isHidden ? "text" : "password";
      eyeIcon.src = isHidden
        ? "assets/icons/eye_on.png"
        : "assets/icons/eye_off.png";
    });
  });
});
