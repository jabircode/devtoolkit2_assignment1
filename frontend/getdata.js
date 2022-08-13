const mainUrl = 'https://young-woodland-43388.herokuapp.com'

function q1() {
  
  var requestOptions = {
    method: "GET",
    // redirect: "follow",
  };

  fetch(`${mainUrl}/shopping/q1`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        name: ${item.name}
        </li>`;
      });
      text += "</ul>";
      document.getElementById("mypanel").innerHTML = text;
    })
    .catch((error) => console.log("error", error));
}

function q2() {
  
  var requestOptions = {
    method: "GET",
    // redirect: "follow",
  };

  fetch(`${mainUrl}/shopping/q2`, requestOptions)
    .then((response) => response.json())
    .then((data) => {
      var text = "<ul>";
      data.forEach(function (item) {
        text += `<li>
        name: ${item.name}
        </li>`;
      });
      text += "</ul>";
      document.getElementById("mypanel").innerHTML = text;
    })
    .catch((error) => console.log("error", error));
}

