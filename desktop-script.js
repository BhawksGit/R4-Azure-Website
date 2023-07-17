function displayLatestRelease() {
  const content = document.querySelector('.content');
  content.innerHTML = '';
  content.innerHTML += '<h1><center><img src="dolphin.png" alt="dolphin" style="width: 1em; height: 1em; margin-right: 0.1em;"> Latest Release</center></h1>';
  fetch('updates.txt')
    .then(response => response.text())
    .then(data => {
      content.innerHTML += '<p><center>=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=</center></p>';
      content.innerHTML += '<p><center>' + data + '</center></p>';
      content.innerHTML += '<p><center>=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=</center></p>';
    });
}

function download() {
  const content = document.getElementById("content");
  content.innerHTML = ""; // clear content area
  const newButton = document.createElement("div"); // create new button element
  newButton.className = "tab"; // set class name to match existing tabs
  newButton.innerHTML = "AzureDS v1.0 Download"; // set button text
  newButton.style.textAlign = "center"; // set text-align to center
  newButton.onclick = function() {
    const link = document.createElement('a');
    link.href = './AzureDS.zip';
    link.download = 'AzureDS.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    content.innerHTML += '<section class="tutorial-steps"> <h2>Tutorial: How to Get the Firmware Working</h2> <div class="step"> <span class="step-number">Step 1:</span> <div class="step-description"> <p>Download the AzureDS kernel from the link above.</p> </div> </div> <div class="step"> <span class="step-number">Step 2:</span> <div class="step-description"> <p>Copy the downloaded zip file into the microSD card.</p> </div> </div> <div class="step"> <span class="step-number">Step 3:</span> <div class="step-description"> <p>Extract the contents of the zip file directly into the microSD card.</p> </div> </div><p>The microSD contents should look similar to this as a result:</p><img src="correctSDLayout.png"></img></section>';
  content.appendChild(newButton); // add button to content area

}

function contactForm() {
  const content = document.getElementById("content");
  content.innerHTML = `
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd63X026OBXsieIicHHKDoFNnDsHrKibqNSv0fohB1qXCkqIQ/viewform?embedded=true" width="640" height="709" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
  `;
}

function checkIfMobile() {
  if (screen.width <= 700) {
    document.location = "index_mobile.html";
}
}

window.onload = function() {
  checkIfMobile();
  displayLatestRelease();
};

document.querySelector('.tab:nth-of-type(1)').addEventListener('click', displayLatestRelease);
document.querySelector('.tab:nth-of-type(2)').addEventListener('click', download);
document.querySelector('.tab:nth-of-type(3)').addEventListener('click', contactForm);
