// 온보딩 카드 선택 시
<script>
  const nextBtn = document.querySelector(".onboarding-next-btn");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((c) => c.classList.remove("is-selected"));
      card.classList.add("is-selected");

      nextBtn.disabled = false; 
    });
  });
</script>