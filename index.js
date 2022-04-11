document.querySelector("#form-box").addEventListener("submit", takeInput);

function takeInput() {
  event.preventDefault();

  let contactList = JSON.parse(localStorage.getItem("contactList")) || [];

  let contactObj = {
    name: document.querySelector("#name").value,

    mobNumber: document.querySelector("#number").value,

    contactType: document.querySelector("#contactType").value,
  };

  contactList.push(contactObj);
  localStorage.setItem("contactList", JSON.stringify(contactList));
  alert("contact added succesfully");
}
