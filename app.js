<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>As'Vaye - Request a Ride</title>
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#22c55e">
  <style>
    body { font-family: system-ui, sans-serif; background: #0f172a; color: white; display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column; margin:0; }
    button { padding: 16px 32px; font-size: 1rem; border:none; border-radius:10px; background:#22c55e; color:white; cursor:pointer; }
    button:active { opacity: 0.7; }
  </style>
</head>
<body>
  <button onclick="openScript()">Request a Ride</button>

  <script>
    const scriptURL = "https://script.google.com/macros/s/AKfycbyLz1M2P-c_CJpqg0ll3D81XsHf_eMo0uWFq2u4cEs-lBND0F6VsVaAXDN5s8CgJrg/exec";
    function openScript() {
      window.location.href = scriptURL;
    }
  </script>
</body>
</html>
