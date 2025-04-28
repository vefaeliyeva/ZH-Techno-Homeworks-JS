const inpt = document.getElementById("inpt");
const btn = document.getElementById("btn");
const phoneCard = document.getElementById("phone-card");

const phones = [
    {
      brand: "Apple",
      model: "iPhone 15 Pro",
      price: 1200,
      storage: "256GB",
      ram: "8GB",
      camera: "48MP",
      battery: "3274mAh",
      processor: "A17 Pro",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fkontakt.az%2Fru%2Fiphone-15-pro-max-256-gb-blue-ru&psig=AOvVaw3-cxta8UymuEiXgmblRRiF&ust=1745912975027000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMDM5OOe-owDFQAAAAAdAAAAABAE"
    },
    {
      brand: "Samsung",
      model: "Galaxy S24 Ultra",
      price: 1300,
      storage: "512GB",
      ram: "12GB",
      camera: "200MP",
      battery: "5000mAh",
      processor: "Snapdragon 8 Gen 3",
      image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fqiymeti.net%2Ftelefon%2Fsamsung-galaxy-s24-ultra%2F&psig=AOvVaw2J6Y5HsSu3wMjwNVY3Oz9Z&ust=1745913055113000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCTnIqf-owDFQAAAAAdAAAAABAJ"
    },
    {
      brand: "Xiaomi",
      model: "13 Pro",
      price: 900,
      storage: "256GB",
      ram: "12GB",
      camera: "50MP",
      battery: "4820mAh",
      processor: "Snapdragon 8 Gen 2",
      image: "https://i01.appmifile.com/webfile/globalimg/products/pc/xiaomi-13-pro/specs-header.png"
    },
    {
      brand: "OnePlus",
      model: "12",
      price: 850,
      storage: "256GB",
      ram: "16GB",
      camera: "50MP",
      battery: "5400mAh",
      processor: "Snapdragon 8 Gen 3",
      image: "https://image01.oneplus.net/ebp/202401/02/1-m00-2c-3f-cpgmimx6vweae44naacnwevklr0675_840_840.png"
    },
    {
      brand: "Google",
      model: "Pixel 8 Pro",
      price: 1000,
      storage: "128GB",
      ram: "12GB",
      camera: "50MP",
      battery: "5050mAh",
      processor: "Google Tensor G3",
      image: "https://store.google.com/product/images/phones/pixel_8_pro/ObsidianFrontBack.png"
    },
    {
      brand: "Huawei",
      model: "P60 Pro",
      price: 950,
      storage: "256GB",
      ram: "8GB",
      camera: "48MP",
      battery: "4815mAh",
      processor: "Snapdragon 8+ Gen 1 4G",
      image: "https://consumer.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/phones/p60-pro/img/p60-pro-kv-img.png"
    },
    {
      brand: "Motorola",
      model: "Edge 40 Pro",
      price: 800,
      storage: "256GB",
      ram: "12GB",
      camera: "50MP",
      battery: "4600mAh",
      processor: "Snapdragon 8 Gen 2",
      image: ""
    }
];

btn.addEventListener("click", () => {
    const index = inpt.value;
    if(index < 0 || index >= phones.length || index === "") {
        phoneCard.innerHTML = "<p style='color: red;'>Düzgün indeks daxil et!</p>";
        return;
    }

    const selectedPhone = phones[index];

    phoneCard.innerHTML = `
        <img src="${selectedPhone.image}" alt="" />
        <h2>${selectedPhone.brand} - ${selectedPhone.model}</h2>
        <p><strong>Price:</strong> ${selectedPhone.price}</p>
        <p><strong>Storage:</strong> ${selectedPhone.storage}</p>
        <p><strong>RAM:</strong> ${selectedPhone.ram}</p>
        <p><strong>Camera:</strong> ${selectedPhone.camera}</p>
        <p><strong>Battery:</strong> ${selectedPhone.battery}</p>
        <p><strong>Processor:</strong> ${selectedPhone.processor}</p>
    `;
});
