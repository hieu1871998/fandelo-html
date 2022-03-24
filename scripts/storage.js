let firstName, lastName, email, shopName, shopUrl, password;

const Storage = (obj) => {
  localStorage.setItem(obj.username, JSON.stringify(obj));
}

const saveUser = () => {
  firstName = document.getElementById('firstNameInput').value;
  lastName = document.getElementById('lastNameInput').value;
  email = document.getElementById('emailInput').value;
  shopName = document.getElementById('shopNameInput').value;
  shopUrl = document.getElementById('shopUrlInput').value;
  password = document.getElementById('passwordInput').value;

  const user = {
    fName: firstName,
    lName: lastName,
    email: email,
    shopName: shopName,
    shopUrl: shopUrl,
    password: password
  }

  Storage(user);
}
