async function submitForm() {
  const btn = document.getElementById("submitBtn");
  btn.disabled = true;
  const data = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    pickup: document.getElementById("pickup").value,
    destination: document.getElementById("destination").value,
    time: document.getElementById("time").value
  };

  try {
    const res = await fetch("https://script.google.com/macros/s/AKfycbyJ69vdx-qdVHhN-UrN5ZG1Fz4Ptdme8wBM5yA_ZEzKR4zDYpUAYJf8dr5-DjhePItg/exec", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const result = await res.json();
    if(result.success){
      document.getElementById("success").innerText = "Request received. We’ll contact you shortly on WhatsApp.";
      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("pickup").value = "";
      document.getElementById("destination").value = "";
      document.getElementById("time").value = "";
    } else {
      throw new Error("Server returned failure");
    }
  } catch(err){
    console.error("Submit error:", err);
    document.getElementById("success").innerText = "There was an error submitting your request. Please try again.";
  } finally {
    btn.disabled = false;
  }
}
