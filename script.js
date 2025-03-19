const rankDetails = {
    "VIP": `
        <strong>Feature:</strong><br>
        ▨ /clan create Command<br>
        ▨ /repair Command<br>
        ▨ /food Command<br>
        ▨ /kit vip<br>
    `,
    "MVP": `
        <strong>Feature:</strong><br>
        ▨ /ec Command<br>
        ▨ /feed Command<br>
        ▨ /nick Command<br>
        ▨ /kit mvp Command<br>
        ▨ Termasuk fitur VIP<br>
    `,
    "ELITE": `
        <strong>Feature:</strong><br>
        ▨ /ec Command<br>
        ▨ /nick Command<br>
        ▨ /repair Command<br>
        ▨ /feed Command<br>
        ▨ /kit elite Command<br>
        ▨ Termasuk fitur MVP<br>
    `,
    "LEGEND": `
        <strong>Feature:</strong><br>
        ▨ /ec Command<br>
        ▨ /nick Command<br>
        ▨ /repair Command<br>
        ▨ /kit legend Command<br>
        ▨ Termasuk fitur ELITE<br>
    `,
    "SULTAN": `
        <strong>Feature:</strong><br>
        ▨ /ec Command<br>
        ▨ /beezooka Command<br>
        ▨ /feed Command<br>
        ▨ /nick Command<br>
        ▨ /repair Command<br>
        ▨ /kit sultan Command<br>
        ▨ Termasuk fitur LEGEND<br>
    `,
    "SUPREME": `
        <strong>Feature:</strong><br>
        ▨ /ec Command<br>
        ▨ /feed Command<br>
        ▨ /repair Command<br>
        ▨ /nick Command<br>
        ▨ /craft Command<br>
        ▨ /head Command<br>
        ▨ /beezooka Command<br>
        ▨ /kit supreme<br>
        ▨ Termasuk fitur SULTAN<br>
    `
};

function showPopup(rank) {
    document.getElementById("rank-title").innerText = rank;
    document.getElementById("rank-details").innerHTML = rankDetails[rank];
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
