async function fetchGitHubUser() {
    const username = document.getElementById("username").value.trim();
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear previous results
  
    if (!username) {
      resultDiv.innerHTML = `<p class="error">Please enter a username.</p>`;
      return;
    }
  
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
  
      const userData = await response.json();
      resultDiv.innerHTML = `
        <img src="${userData.avatar_url}" alt="${userData.name || username}'s avatar" />
        <h2>${userData.name || "No Name Available"}</h2>
        
        <a href="${userData.html_url}" target="_blank">View Profile</a>`

      ;
    } catch (error) {
      resultDiv.innerHTML = `<p class="error">${error.message}</p>`;
    }
  }
  