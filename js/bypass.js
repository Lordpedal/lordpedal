function submitURL() {
  vidURL = document.getElementById("URL").value;
  vidURLSplit = vidURL.split("=")
  if(vidURLSplit.length < 2) {
    alert("Bad URL")
    return false;
  }
  cleanID = vidURLSplit[1].split("&")[0]
  if(cleanID.length != 11) {
    alert("Bad URL!")
    return false;
  }
  document.getElementById("contentMain").style.textAlign="center"
  document.getElementById("contentMain").innerHTML='<iframe width="560" height="315" src="https://www.youtube.com/embed/'+ cleanID +'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  return false;
}

/* For form */
document.getElementById("URL")
  .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      submitURL();
    }
  });
