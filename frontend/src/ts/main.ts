console.log("Frontend loaded successfully");

async function fetchUsers() {
  try {
    const response = await fetch("http://localhost:3000/api/user");
    const data = await response.json();
    console.log("Users:", data);
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

fetchUsers();
