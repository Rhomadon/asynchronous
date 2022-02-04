function getData(url, cb) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      return cb(JSON.parse(xhr.responseText));
    }
  };
  xhr.open("GET", url);
  xhr.send();
}

const dataTable = getData("https://jsonplaceholder.typicode.com/users", function (dataTable) {
  console.log(dataTable);

  const tableBody = document.getElementById("tableData");
  let dataTHead = '<thead><tr><th scope="col">Id</th><th scope="col">Name</th><th scope="col">Username</th><th scope="col">Email</th><th scope="col">Address</th><th scope="col">Company</th></tr></thead>';
  let dataTBody = "";

  for (let person of dataTable) {
    dataTBody +=
      '<tbody><tr><th scope="row">' +
      person.id +
      "</th><td>" +
      person.name +
      "</td><td>" +
      person.username +
      "</td><td>" +
      person.email +
      "</td><td>" +
      person.address.street +
      ", " +
      person.address.suite +
      ", " +
      person.address.city +
      "</td><td>" +
      person.company.name +
      "</td></tr></tbody>";
  }

  tableBody.innerHTML = dataTHead + dataTBody;
});
