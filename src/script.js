//Language switcher
document.addEventListener("DOMContentLoaded", function () {
  const languageButton = document.getElementById("languageButton");
  const languageDropdown = document.getElementById("languageDropdown");
  const selectedFlag = document.getElementById("selectedFlag");
  const selectedLanguage = document.getElementById("selectedLanguage");
  const languageOptions = languageDropdown.querySelectorAll("button");

  languageButton.addEventListener("click", function () {
    languageDropdown.classList.toggle("hidden");
  });

  languageOptions.forEach((option) => {
    option.addEventListener("click", function () {
      const lang = this.getAttribute("data-lang");
      const flagSrc = this.getAttribute("data-flag");
      selectedFlag.src = flagSrc;
      selectedFlag.alt = lang + " flag";
      selectedLanguage.textContent = lang;
      languageDropdown.classList.add("hidden");
    });
  });

  window.addEventListener("click", function (event) {
    if (
      !event.target.matches("#languageButton") &&
      !event.target.closest("#languageButton")
    ) {
      languageDropdown.classList.add("hidden");
    }
  });
});

//Mobile Menu Functions
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const burgerIcon = document.querySelector(".burger-icon");
  const closeIcon = document.querySelector(".close-icon");

  function toggleMobileMenu() {
    mobileMenu.classList.toggle("hidden");
    burgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  }

  burgerMenu.addEventListener("click", function (event) {
    event.stopPropagation();
    toggleMobileMenu();
  });

  // Close mobile menu when a link is clicked
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", toggleMobileMenu);
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (
      !mobileMenu.classList.contains("hidden") &&
      !mobileMenu.contains(event.target) &&
      !burgerMenu.contains(event.target)
    ) {
      toggleMobileMenu();
    }
  });

  // Prevent clicks inside the mobile menu from closing it
  mobileMenu.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});

// custom select
document.addEventListener("DOMContentLoaded", function () {
  const customSelects = document.querySelectorAll(".custom-select");

  customSelects.forEach((selectContainer) => {
    const select = selectContainer.querySelector("select");
    const selected = selectContainer.querySelector(".select-selected");
    const items = selectContainer.querySelector(".select-items");
    const options = items.querySelectorAll("div");

    selected.addEventListener("click", function () {
      items.classList.toggle("hidden");
      selected.classList.toggle("select-arrow-active");
      closeAllSelect(selected);
    });

    options.forEach((option, index) => {
      option.addEventListener("click", function () {
        select.selectedIndex = index + 1;
        selected.innerHTML = option.innerHTML;
        options.forEach((opt) => opt.classList.remove("same-as-selected"));
        option.classList.add("same-as-selected");
        items.classList.add("hidden");
      });
    });
  });

  function closeAllSelect(current) {
    customSelects.forEach((selectContainer) => {
      const selected = selectContainer.querySelector(".select-selected");
      const items = selectContainer.querySelector(".select-items");
      if (selected !== current) {
        items.classList.add("hidden");
        selected.classList.remove("select-arrow-active");
      }
    });
  }

  document.addEventListener("click", function (e) {
    if (!e.target.classList.contains("select-selected")) {
      closeAllSelect(null);
    }
  });
});
