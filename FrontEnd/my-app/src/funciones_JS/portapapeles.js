var clipboard = new Clipboard('.portapapeles');

clipboard.on('success', function(e) {
    alert("COPIADO EXITOSO!");
});

clipboard.on('error', function(e) {
	// Algo no salio como debia
});