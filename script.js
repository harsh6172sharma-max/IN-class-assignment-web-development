// Get all elements from HTML
const form = document.getElementById("eventForm");
const eventContainer = document.getElementById("eventContainer");
const clearBtn = document.getElementById("clearAllBtn");
const sampleBtn = document.getElementById("addSampleBtn");
const keyBox = document.getElementById("demoContent");


// ============================
// SHOW MESSAGE WHEN NO EVENTS
// ============================
function showEmptyMessage() {
  const message = document.createElement("div");
  message.className = "empty-state";
  message.textContent = "No events added yet!";
  eventContainer.appendChild(message);
}


// ============================
// REMOVE EMPTY MESSAGE
// ============================
function removeEmptyMessage() {
  const message = eventContainer.querySelector(".empty-state");
  if (message) {
    message.remove();
  }
}


// ============================
// ADD NEW EVENT
// ============================
form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  // Get values from form
  const title = document.getElementById("eventTitle").value;
  const date = document.getElementById("eventDate").value;
  const category = document.getElementById("eventCategory").value;
  const description = document.getElementById("eventDescription").value;

  // Simple validation
  if (title === "" || date === "" || category === "" || description === "") {
    alert("Please fill all fields");
    return;
  }

  // Remove empty message if exists
  removeEmptyMessage();

  // Create event card
  const card = document.createElement("div");
  card.className = "event";

  card.innerHTML = `
    <button class="delete">Delete</button>
    <h4>${title}</h4>
    <p><b>Date:</b> ${date}</p>
    <p><b>Category:</b> ${category}</p>
    <p>${description}</p>
  `;

  // Add card to container
  eventContainer.appendChild(card);

  // Clear form
  form.reset();
});


// ============================
// DELETE EVENT
// ============================
eventContainer.addEventListener("click", function (e) {

  // Check if delete button is clicked
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();

    // If no events left, show message
    if (eventContainer.children.length === 0) {
      showEmptyMessage();
    }
  }
});


// ============================
// CLEAR ALL EVENTS
// ============================
clearBtn.addEventListener("click", function () {
  eventContainer.innerHTML = "";
  showEmptyMessage();
});


// ============================
// ADD SAMPLE EVENTS
// ============================
sampleBtn.addEventListener("click", function () {

  eventContainer.innerHTML = "";

  const sampleEvents = [
    "Conference 2026",
    "Web Development Webinar",
    "College Meetup"
  ];

  sampleEvents.forEach(function (eventName) {

    const card = document.createElement("div");
    card.className = "event";

    card.innerHTML = `
      <button class="delete">Delete</button>
      <h4>${eventName}</h4>
      <p><b>Date:</b> Sample Date</p>
      <p><b>Category:</b> Sample Category</p>
      <p>Sample Description</p>
    `;

    eventContainer.appendChild(card);
  });

});


// ============================
// KEYBOARD DEMO
// ============================
document.addEventListener("keydown", function (e) {
  keyBox.textContent = "You pressed: " + e.key;
});


// Show empty message when page loads
if (eventContainer.children.length === 0) {
  showEmptyMessage();
}