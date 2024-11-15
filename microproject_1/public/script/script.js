const getFetchBtn = document.getElementById("getFetch");
const getAsyncBtn = document.getElementById("getAsync");

function getDataFetch() {
  //alert("Fetch the data");

  const apiLink = "http://localhost:3000/cards";
  fetch(apiLink)
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);

      // for (const item in data) {
      //   console.log(data[item].name);
      // }

      // for (const element of data) {
      //   console.log(element.description);
      // }

      // for (let index = 0; index < data.length; index++) {
      //   console.log(data[index].rarity);
      // }

      let output = "<ul>";
      output +=
        "<p>--------------------------------FETCH---------------------------------</p>";
      for (const element of data) {
        output += "<li>" + element.name + "</li>";
        output += "<li>" + element.rarity + "</li>";
        output += "<li>" + element.effect + "</li>";
        output += "<li>" + element.description + "</li>";
        output +=
          "<p>-----------------------------------------------------------------------</p>";
      }
      output += "</ul>";

      document.getElementById("data").innerHTML = output;
    });
}

async function getDataAsync() {
  //alert("Async the data");
  const response = await fetch("http://localhost:3000/cards");
  const data = await response.json();
  //console.log(data);

  let output = "<ul>";
  output +=
    "<p><span style='color: red;'>--------------------------------ASYNC---------------------------------</span></p>";
  for (const element of data) {
    output += "<li>" + element.name + "</li>";
    output += "<li>" + element.rarity + "</li>";
    output += "<li>" + element.effect + "</li>";
    output += "<li>" + element.description + "</li>";
    output +=
      "<p><span style='color: red;'>-----------------------------------------------------------------------</span></p>";
  }
  output += "</ul>";

  document.getElementById("data").innerHTML = output;
}

getFetchBtn.addEventListener("click", getDataFetch);
getAsyncBtn.addEventListener("click", getDataAsync);
