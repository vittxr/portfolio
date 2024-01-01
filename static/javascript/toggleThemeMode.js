var themeModeBtn = document.querySelector(".theme-mode__button");

themeModeBtn.addEventListener("click", toggleThemeMode)

var currentMode = 'dark'
function toggleThemeMode() {
    switch (currentMode) {
        case 'dark':
              themeModeBtn.classList.add("light-mode--active")
              currentMode = 'light'
              break

        case 'light':      
              themeModeBtn.classList.remove("light-mode--active")
              currentMode = 'dark'
    }
}