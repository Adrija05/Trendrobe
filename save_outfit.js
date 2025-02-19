// const SUPABASE_URL = "https://your-project-url.supabase.co";
// const SUPABASE_KEY = "your-anon-key";

// const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


const SUPABASE_URL = "https://smsrjmsolxqrlfyizldq.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNtc3JqbXNvbHhxcmxmeWl6bGRxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk2MzgxNzQsImV4cCI6MjA1NTIxNDE3NH0.IIjRgC8csUnaCqmeQ0-pce46feBh1p1pmfCHrQ6jLwM";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

async function fetchData() {
  let { data, error } = await supabase.from("outfit_plans").select("*"); // Fetch all records

  if (error) console.error("Error:", error);
  else console.log("Data:", data);
}

fetchData();
document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.getElementById("saveOutfit");
    if (saveButton) {
        saveButton.addEventListener("click", saveOutfit);
    }

    fetchOutfits();
});

async function saveOutfit() {
    const date = document.getElementById("date").value;
    const outfit = document.getElementById("outfit").value;
    console.log("Date:", date);
    console.log("Outfit:", outfit);
    if (!date || !outfit) {
        alert("Please select a date and enter an outfit.");
        return;
    }

    const userId = "12345"; // Replace with actual user ID

    const { data, error } = await supabase.from("outfit_plans").insert([
        {  date: date, outfit_items: [outfit] }
    ]);

    if (error) {
        alert("Error: " + error.message);
    } else {
        alert("Outfit Saved!");
        fetchOutfits();
    }
}

