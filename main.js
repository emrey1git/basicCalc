// Hesap makinesi işlemlerini bir fonksiyon içine alalım
function hesapMakinesi() {
    let firstNumber = Number(prompt('Lütfen ilk sayıyı girin:'));
    let secondNumber = Number(prompt('Lütfen ikinci sayıyı girin:'));
    let secilenIslem = prompt(`Yapmak istediğiniz işlemi seçin: \n1-Toplama \n2-Çıkarma \n3-Çarpma \n4-Bölme`);

    const toplam = `1`; 
    const cikan = `2`;
    const carp = `3`;
    const bol = `4`;

    let result;

    // İşlem kontrolü
    if (secilenIslem === toplam) {
        result = firstNumber + secondNumber;
    } else if (secilenIslem === cikan) {
        result = firstNumber - secondNumber;
    } else if (secilenIslem === carp) {
        result = firstNumber * secondNumber;
    } else if (secilenIslem === bol) {
        result = firstNumber / secondNumber;
    } else {
        alert('Geçerli bir işlem giriniz!');    
    }

    // Sonucu göster
    alert(`İşleminizin Sonucu: ${result}`);
    console.log(`Sonuç: ${result}`);

    // Tekrar hesaplama sorusu
    let tekrarHesapla = confirm(`Tekrar hesaplama yapmak ister misiniz?`);

    if (tekrarHesapla) {
        hesapMakinesi(); // Fonksiyonu tekrar çağır
    } else {
        alert(`Hesaplamadan çıkılıyor. Bizi tercih ettiğiniz için teşekkürler :)`);
    }
}

// Programı başlat
hesapMakinesi();