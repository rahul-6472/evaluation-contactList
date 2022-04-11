document.querySelector("#form-box").addEventListener("submit", takeInput);

function takeInput() {
  event.preventDefault();

  let contactDetails = JSON.parse(localStorage.getItem("contactDetails")) || [];

  let contactObj = {
    name: document.querySelector("#name").value,

    mobNumber: document.querySelector("#number").value,

    contactType: document.querySelector("#contactType").value,
  };

  contactDetails.push(contactObj);
  localStorage.setItem("contactDetails", JSON.stringify(contactDetails));
  alert("contact added succesfully");
}
