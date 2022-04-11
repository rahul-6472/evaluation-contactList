let favs = JSON.parse(localStorage.getItem("favourites")) || [];

function displayData(favs) {
  document.querySelector("#tableBody").innerHTML = "";
  favs.forEach((fav) => {
    let trow = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = fav.name;

    let td2 = document.createElement("td");
    td2.innerText = fav.mobNumber;

    let td3 = document.createElement("td");
    td3.innerText = fav.contactType;

    trow.append(td1, td2, td3);
    document.querySelector("#tableBody").append(trow);
  });
}

window.addEventListener("load", function () {
  displayData(favs);
});
displayData(favs);
