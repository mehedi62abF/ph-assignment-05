//    Count code

let heartCount = 0;
let heartCountElement = document.getElementById("heart-count");

let heartIcons = document.querySelectorAll(".heart-icon");

for (let heart of heartIcons) {
  heart.addEventListener("click", function () {
    if (!heart.classList.contains("red")) {
      heart.classList.add("red");
      heart.classList.remove("fa-regular");
      heart.classList.add("fa-solid");

      heartCount++;
    } else {
      heart.classList.remove("red");
      heart.classList.remove("fa-solid");
      heart.classList.add("fa-regular");

      heartCount--;
    }

    heartCountElement.textContent = heartCount;
  });
}

//    Count code

let coin = 100;
const coinElement = document.getElementById("coin");

const callButtons = document.querySelectorAll(".call-btn");

for (const btn of callButtons) {
  btn.addEventListener("click", function () {
    const card = this.closest(".service-card");

    const serviceName = card.querySelector("h2").innerText;
    const serviceNumber = card.querySelector(".text-3xl").innerText;

    if (coin < 20) {
      alert("You don't have enough coins to make a call!");
      return;
    }

    coin -= 20;
    coinElement.innerText = coin;

    alert(`Calling ${serviceName} (${serviceNumber})`);

    const historyContainer = document.querySelector("#call-history");
    const newEntry = document.createElement("div");
    newEntry.classList.add("mb-2", "text-sm");
    newEntry.innerText = `${serviceName} (${serviceNumber})`;
    historyContainer.appendChild(newEntry);
  });
}
document.getElementById("btn-clear").addEventListener("click", function () {
  const historyElement = document.getElementById("call-history");
  historyElement.innerHTML = "";
});
