const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbyJ69vdx-qdVHhN-UrN5ZG1Fz4Ptdme8wBM5yA_ZEzKR4zDYpUAYJf8dr5-DjhePItg/exec";

async function submitForm() {
  const data = {
    name: name.value,
    phone: phone.value,
    pickup: pickup.value,
    destination: destination.value,
    time: time.value
  };

  try {
    const res = await fetch(WEB_APP_URL, {
      method: "POST",
      body: JSON.stringify(data)
    });

    const result = await res.json();

    if (result.success) {
      success.innerText = "Request received. We’ll contact you shortly.";
    } else {
      throw new Error("Submission failed");
    }
  } catch (err) {
    success.innerText = "Error submitting request. Try again.";
    console.error(err);
  }
}
