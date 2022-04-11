let contacts = JSON.parse(localStorage.getItem("contactDetails")) || [];

let favourites = JSON.parse(localStorage.getItem("favourites")) || [];

function displayData(contacts) {
  document.querySelector("#tableBody").innerHTML = "";
  contacts.forEach((contact) => {
    let trow = document.createElement("tr");

    let td1 = document.createElement("td");
    td1.innerText = contact.name;

    let td2 = document.createElement("td");
    td2.innerText = contact.mobNumber;

    let td3 = document.createElement("td");
    td3.innerText = contact.contactType;

    let td4 = document.createElement("td");
    td4.innerText = "Add to Fav";
    td4.style.color = "red";
    td4.style.cursor = "pointer";

    td4.addEventListener("click", () => {
      favourites.push(contact);
      localStorage.setItem("favourites", JSON.stringify(favourites));
      alert("Added to Favourites");
    });

    trow.append(td1, td2, td3, td4);
    document.querySelector("#tableBody").append(trow);
  });
}

window.addEventListener("load", function () {
  displayData(contacts);
});

displayData(contacts);
