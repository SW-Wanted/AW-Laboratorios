const title = document.getElementById("title");
const month = document.getElementById("month");
const dateMonth = document.getElementById("dateMonth");

const date = new Date();
const dayInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
const firstDayOfWeek = new Date(date.getFullYear(), date.getMonth(), 1).getDay() + 1;
const dateString = date.toLocaleDateString("pt-PT", { month: "long"});

dateMonth.textContent = dateString.charAt(0).toUpperCase() + dateString.slice(1) + " de " + date.getFullYear();

let week = document.createElement("tr");
week.classList.add("week");

for (let i = 1; i <= firstDayOfWeek - 1; i++) {
    const day = document.createElement("td");
    day.classList.add("day");
    week.appendChild(day);
}

for (let i = 1; i <= dayInMonth; i++) {
    const day = document.createElement("td");
    day.classList.add("day");
    day.textContent = i;
    if (i === date.getDate()) {
        day.classList.add("today");
    }
    week.appendChild(day);

    if ((i + (firstDayOfWeek - 1)) % 7 === 0) {
        month.appendChild(week);
        week = document.createElement("tr");
        week.classList.add("week");
    }
}

if (week.children.length > 0) {
    month.appendChild(week);
}

const days = document.querySelectorAll(".day");
days.forEach(day => {
    if (day.textContent)
        day.addEventListener("click", () => {
            const selected = document.querySelector(".selected");
            if (selected) {
                selected.classList.remove("selected");
            }
            day.classList.add("selected");
        });
});x