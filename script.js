document.getElementById('generate-btn').addEventListener('click', function() {
    var data = document.getElementById('data').value;
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    var format = document.getElementById('format').value;
    var qrColor = document.getElementById('qr-color').value;
    var bgColor = document.getElementById('bg-color').value;
  
    var qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?data=' + data +
                    '&size=' + width + 'x' + height +
                    '&format=' + format +
                    '&color=' + qrColor.substr(1) +
                    '&bgcolor=' + bgColor.substr(1);
  
    var downloadLink = document.getElementById('download-btn');
    downloadLink.href = qrCodeUrl;
    downloadLink.style.display = 'inline-block';
  });
  