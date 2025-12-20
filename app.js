const requestBtn = document.getElementById("requestBtn");

// Replace this URL with your deployed Google Apps Script web app URL
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyLz1M2P-c_CJpqg0ll3D81XsHf_eMo0uWFq2u4cEs-lBND0F6VsVaAXDN5s8CgJrg/exec";

requestBtn.addEventListener("click", () => {
  // Open the Google Apps Script in a new tab
  window.open(GOOGLE_SCRIPT_URL, "_blank");
});

// Optional: PWA install prompt handler
let deferredPrompt;
window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  console.log("PWA install prompt available");
});

function showInstallPrompt() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the PWA install");
      }
      deferredPrompt = null;
    });
  }
}
