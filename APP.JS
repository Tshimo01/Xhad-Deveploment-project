// Function to switch between pages
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
  document.getElementById(pageId).classList.add('active');
}

// Handle quote form submission
document.getElementById("quoteForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const description = document.getElementById("description").value;

  try {
    await db.collection("quotes").add({
      name,
      email,
      service,
      description,
      timestamp: new Date()
    });

    document.getElementById("quoteMessage").textContent = "Quote submitted successfully!";
    document.getElementById("quoteForm").reset();
  } catch (error) {
    document.getElementById("quoteMessage").textContent = "Error submitting quote.";
    console.error(error);
  }
});
