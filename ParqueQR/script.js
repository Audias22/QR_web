document.addEventListener("DOMContentLoaded", function () {
    function onScanSuccess(decodedText, decodedResult) {
        document.getElementById("qr-result").innerText = `Código escaneado: ${decodedText}`;
        console.log(decodedResult);
    }

    let html5QrCode = new Html5Qrcode("qr-reader"); // Inicializa el escáner
    html5QrCode.start(
        { facingMode: "environment" }, // Usa la cámara trasera
        {
            fps: 10, // Velocidad de escaneo
            qrbox: { width: 250, height: 250 }, // Tamaño del cuadro de escaneo
        },
        onScanSuccess
    ).catch(err => {
        console.error(err);
    });
});
