document.addEventListener("DOMContentLoaded", () => {
  // ============ splash ============
  const splash = document.getElementById("splashOverlay");

  if (splash) {
    window.addEventListener("load", () => {
      setTimeout(() => {
        splash.classList.add("is-hidden");
      }, 1400);

      setTimeout(() => {
        splash.style.display = "none";
      }, 2200);
    });
  }

  // ============ onboarding 카드 선택 ============
  const cards = document.querySelectorAll(".option-card");
  const nextBtn = document.querySelector(".onboarding-next-btn");

  if (cards.length > 0) {
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        cards.forEach((c) => c.classList.remove("is-selected"));
        card.classList.add("is-selected");
        if (nextBtn) nextBtn.disabled = false;
      });
    });
  }

  // ============ signin / signup 비밀번호 토글 ============
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

  // ============ home 원형 그래프 ============
  const ring = document.querySelector(".chart-ring");
  const percentText = document.querySelector(".chart-percent");

  if (ring && percentText) {
    let current = 0;
    const targetPercent = 57;
    const targetDeg = Math.round((360 * targetPercent) / 100);

    const animate = () => {
      if (current < targetDeg) {
        current += 3;
        if (current > targetDeg) current = targetDeg;

        ring.style.setProperty("--progress", current);

        const percent = Math.floor((current / 360) * 100);
        percentText.textContent = percent + "%";

        requestAnimationFrame(animate);
      } else {
        percentText.textContent = targetPercent + "%";
      }
    };

    animate();
  }

  // ============ record 금액 입력 ============
  const amountInput = document.getElementById("amount");
  const categoryChips = document.querySelectorAll(".category-chip");
  const emotionChips = document.querySelectorAll(
    ".emotion-select-chip:not(.add)",
  );
  const submitBtn = document.querySelector(".record-submit-btn");

  if (amountInput && submitBtn) {
    function checkFormValid() {
      const amountValue = amountInput.value.replace(/[^0-9]/g, "");
      const categorySelected = document.querySelector(
        ".category-chip.is-selected",
      );
      const emotionSelected = document.querySelector(
        ".emotion-select-chip.is-selected",
      );

      submitBtn.disabled = !(
        amountValue &&
        categorySelected &&
        emotionSelected
      );
    }

    amountInput.addEventListener("focus", () => {
      setTimeout(() => {
        amountInput.setSelectionRange(2, 2);
      }, 0);
    });

    amountInput.addEventListener("keydown", (e) => {
      const cursorPos = amountInput.selectionStart;

      if (e.key === "Backspace" && cursorPos <= 2) {
        e.preventDefault();
        return;
      }

      if (cursorPos < 2 && e.key.length === 1) {
        e.preventDefault();
        return;
      }

      const allowedKeys = [
        "Backspace",
        "ArrowLeft",
        "ArrowRight",
        "Tab",
        "Delete",
      ];

      if (allowedKeys.includes(e.key)) return;

      if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
      }
    });

    amountInput.addEventListener("input", () => {
      const raw = amountInput.value.replace(/[^0-9]/g, "");
      const formatted = raw.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      amountInput.value = "₩ " + formatted;
      checkFormValid();
    });

    categoryChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        categoryChips.forEach((c) => c.classList.remove("is-selected"));
        chip.classList.add("is-selected");
        checkFormValid();
      });
    });

    emotionChips.forEach((chip) => {
      chip.addEventListener("click", () => {
        emotionChips.forEach((c) => c.classList.remove("is-selected"));
        chip.classList.add("is-selected");
        checkFormValid();
      });
    });

    submitBtn.addEventListener("click", () => {
      alert("기록 완료!");
      location.reload();
    });

    checkFormValid();
  }
});
