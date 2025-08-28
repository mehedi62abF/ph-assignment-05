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

//    coin code & Call History Section Code

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

    const time = new Date().toLocaleTimeString();
    newEntry.innerHTML = `
  <div class="flex justify-between items-center bg-gray-100 p-3 rounded-lg shadow-sm">
    <div>
      <h3 class="font-semibold text-sm">${serviceName}</h3>
      <p class="text-sm text-gray-700">${serviceNumber}</p>
    </div>
    <div class="text-xs text-gray-500">${time}</div>
  </div>
`;

    historyContainer.appendChild(newEntry);
  });
}
document.getElementById("btn-clear").addEventListener("click", function () {
  const historyElement = document.getElementById("call-history");
  historyElement.innerHTML = "";
});

//  Copy Count

let copyCount = 2;
const copyCounter = document.getElementById("copy-count");

const copyButtons = document.querySelectorAll(".service-card .btn");

for (let btn of copyButtons) {
  if (btn.querySelector(".fa-copy")) {
    btn.addEventListener("click", function () {
      const card = this.closest(".service-card");
      const number = card.querySelector(".text-3xl").innerText;

      navigator.clipboard
        .writeText(number)
        .then(() => {
          alert("Number copied!");
          copyCount++;
          copyCounter.innerText = copyCount;
        })
        .catch(() => {
          alert("Failed to copy.");
        });
    });
  }
}
