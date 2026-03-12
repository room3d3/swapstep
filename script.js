const rickrollUrl = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

for (const card of document.querySelectorAll(".product-card")) {
  card.addEventListener("click", () => {
    window.location.href = rickrollUrl;
  });

  card.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      window.location.href = rickrollUrl;
    }
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
