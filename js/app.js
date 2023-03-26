// Toggle Menu Icon
const navToggler = document.querySelector("[data-nav-toggler]");
const menu = document.getElementById("nav");

navToggler.addEventListener("click", () => {
	menu.classList.toggle("show-menu");

	if (menu.className === "show-menu") {
		navToggler.innerHTML = `<i class="fa-solid fa-x"></i>`;
        navToggler.style.color = `var(--color-on-primary)`
	} else {
		navToggler.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        navToggler.style.color = "var(--color-menu-btn)"
	}
});



// Scrolling Text
const navItems = document.querySelectorAll(".nav-item");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

navItems.forEach(scrollingText)

function scrollingText (element) {

        element.onmouseover = event => {
            let iterations = 0;

            const interval = setInterval(() => {
                event.target.innerText = event.target.innerText.split('')
                .map((letter, index) => {
                    if (index < iterations) {
                        return event.target.dataset.value[index]
                    }

                    return letters[Math.floor(Math.random() * 26)]
                })
                .join('');

                if (iterations >= event.target.dataset.value.length) {
                    clearInterval(interval);
                }

                iterations += 1 / 5;
            }, 30);
        }
}