document.getElementById('dataForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const formData = {
        nama: document.getElementById('nama').value,
        nik: document.getElementById('nik').value,
        ttl: document.getElementById('ttl').value,
        pendidikan: document.getElementById('pendidikan').value,
        tmt: document.getElementById('tmt').value,
        alamat: document.getElementById('alamat').value,
        unitKerja: document.getElementById('unitKerja').value
    };

    try {
        const response = await axios.post('https://script.google.com/macros/s/AKfycbyamk-7gpEILfn1SCjBS5QiIIN9pTdWruGb7RFizu_0xPkSOkw6YwYKxTJ7H4jht4lLuw/exec', formData);
        if (response.data.status === 'success') {
            alert('Data berhasil disimpan!');
            document.getElementById('dataForm').reset();
        } else {
            alert('Terjadi kesalahan: ' + response.data.message);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Gagal mengirim data. Silakan coba lagi.');
    }
});
