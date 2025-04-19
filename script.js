// Array to store asset objects
let assetList = [];
let assetId = 1; // Simple ID counter

// When form is submitted
document.getElementById("assetForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // Get form input values
  const name = document.getElementById("assetName").value;
  const type = document.getElementById("assetType").value;
  const location = document.getElementById("location").value;
  const status = document.getElementById("status").value;

  // Create a new asset object
  const asset = {
    id: assetId++,
    name,
    type,
    location,
    status
  };

  // Add the asset to the array
  assetList.push(asset);

  // Re-render the table with new data
  renderTable();

  // Clear form inputs
  this.reset();
});

// Function to render the table
function renderTable() {
  const tbody = document.querySelector("#assetTable tbody");
  tbody.innerHTML = ""; // Clear previous rows

  assetList.forEach(asset => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${asset.id}</td>
      <td>${asset.name}</td>
      <td>${asset.type}</td>
      <td>${asset.location}</td>
      <td>${asset.status}</td>
      <td><button class="action-btn" onclick="deleteAsset(${asset.id})">Delete</button></td>
    `;

    tbody.appendChild(row);
  });
}

// Function to delete asset by ID
function deleteAsset(id) {
  assetList = assetList.filter(asset => asset.id !== id);
  renderTable();
}
