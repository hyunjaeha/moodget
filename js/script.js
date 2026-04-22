//온보딩 카드 선택 시
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".option-card");
  const nextBtn = document.querySelector(".onboarding-next-btn");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      // 기존 선택 제거
      cards.forEach((c) => c.classList.remove("is-selected"));

      // 선택
      card.classList.add("is-selected");

      // 버튼 활성화
      if (nextBtn) nextBtn.disabled = false;
    });
  });
});
