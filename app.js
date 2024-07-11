let card_wrapper = document.querySelector(".card-wrapper");

let mobilePhones = [{
    modelName: "iPhone 13",
    brand: "Apple",
    os: "iOS 15",
    screenSize: "6.1 inches",
    batteryCapacity: "3240 mAh",
    camera: "12 MP Dual",
    processor: "A15 Bionic",
    storage: "128 GB",
    releaseYear: 2021,
    image: "images/iphone-13-pro-photography_01.jpg",
  },
  {
    modelName: "Galaxy S21",
    brand: "Samsung",
    os: "Android 11",
    screenSize: "6.2 inches",
    batteryCapacity: "4000 mAh",
    camera: "64 MP Triple",
    processor: "Exynos 2100",
    storage: "128 GB",
    releaseYear: 2021,
    image: "images/samsung-galaxy-s21-5g-r.jpg",
  },
  {
    modelName: "P40 Pro",
    brand: "Huawei",
    os: "Android 10 (no Google Play)",
    screenSize: "6.58 inches",
    batteryCapacity: "4200 mAh",
    camera: "50 MP Quad",
    processor: "Kirin 990 5G",
    storage: "256 GB",
    releaseYear: 2020,
    image: "images/huawei-p40-pro.jpg",
  },
  {
    modelName: "Mi 11",
    brand: "Xiaomi",
    os: "Android 11",
    screenSize: "6.81 inches",
    batteryCapacity: "4600 mAh",
    camera: "108 MP Triple",
    processor: "Snapdragon 888",
    storage: "128 GB",
    releaseYear: 2021,
    image: "images/xiaomi-mi11.jpg",
  },
  {
    modelName: "Find X3 Pro",
    brand: "Oppo",
    os: "Android 11",
    screenSize: "6.7 inches",
    batteryCapacity: "4500 mAh",
    camera: "50 MP Quad",
    processor: "Snapdragon 888",
    storage: "256 GB",
    releaseYear: 2021,
    image: "images/oppo-find-x3-pro.jpg",
  },
  {
    modelName: "X60 Pro",
    brand: "Vivo",
    os: "Android 11",
    screenSize: "6.56 inches",
    batteryCapacity: "4200 mAh",
    camera: "48 MP Quad",
    processor: "Exynos 1080",
    storage: "256 GB",
    releaseYear: 2021,
    image: "images/vivo-x60-pro-global-new.jpg",
  },
  {
    modelName: "OnePlus 9",
    brand: "OnePlus",
    os: "Android 11",
    screenSize: "6.55 inches",
    batteryCapacity: "4500 mAh",
    camera: "48 MP Triple",
    processor: "Snapdragon 888",
    storage: "128 GB",
    releaseYear: 2021,
    image: "images/oneplus-9-.jpg",
  },
  {
    modelName: "Xperia 1 II",
    brand: "Sony",
    os: "Android 10",
    screenSize: "6.5 inches",
    batteryCapacity: "4000 mAh",
    camera: "12 MP Triple",
    processor: "Snapdragon 865",
    storage: "256 GB",
    releaseYear: 2020,
    image: "images/sony-xperia-1-iii.jpg",
  },
  {
    modelName: "Pixel 5",
    brand: "Google",
    os: "Android 11",
    screenSize: "6.0 inches",
    batteryCapacity: "4080 mAh",
    camera: "12.2 MP Dual",
    processor: "Snapdragon 765G",
    storage: "128 GB",
    releaseYear: 2020,
    image: "images/google-pixel-5-5g.jpg",
  },
  {
    modelName: "Nokia 8.3 5G",
    brand: "Nokia",
    os: "Android 10",
    screenSize: "6.81 inches",
    batteryCapacity: "4500 mAh",
    camera: "64 MP Quad",
    processor: "Snapdragon 765G",
    storage: "128 GB",
    releaseYear: 2020,
    image: "images/nokia-83-5g.jpg",
  },
  {
    modelName: "Moto G100",
    brand: "Motorola",
    os: "Android 11",
    screenSize: "6.7 inches",
    batteryCapacity: "5000 mAh",
    camera: "64 MP Quad",
    processor: "Snapdragon 870",
    storage: "128 GB",
    releaseYear: 2021,
    image: "images/motorola-moto-g100-1.jpg",
  },
  {
    modelName: "LG Wing",
    brand: "LG",
    os: "Android 10",
    screenSize: "6.8 inches",
    batteryCapacity: "4000 mAh",
    camera: "64 MP Triple",
    processor: "Snapdragon 765G",
    storage: "128 GB",
    releaseYear: 2020,
    image: "images/lg-wing.jpg",
  },
  {
    modelName: "Lenovo Legion Phone Duel",
    brand: "Lenovo",
    os: "Android 10",
    screenSize: "6.65 inches",
    batteryCapacity: "5000 mAh",
    camera: "64 MP Dual",
    processor: "Snapdragon 865+",
    storage: "256 GB",
    releaseYear: 2020,
    image: "images/lenovo-legion-2-pro-phone-duel2-1.jpg",
  },
  {
    modelName: "Realme GT",
    brand: "Realme",
    os: "Android 11",
    screenSize: "6.43 inches",
    batteryCapacity: "4500 mAh",
    camera: "64 MP Triple",
    processor: "Snapdragon 888",
    storage: "128 GB",
    releaseYear: 2021,
    image: "images/realme-gt6.jpg",
  },
  {
    modelName: "ROG Phone 5",
    brand: "Asus",
    os: "Android 11",
    screenSize: "6.78 inches",
    batteryCapacity: "6000 mAh",
    camera: "64 MP Triple",
    processor: "Snapdragon 888",
    storage: "256 GB",
    releaseYear: 2021,
    image: "images/asus-rog-phone-5.jpg",
  },
  {
    modelName: "HTC U20 5G",
    brand: "HTC",
    os: "Android 10",
    screenSize: "6.8 inches",
    batteryCapacity: "5000 mAh",
    camera: "48 MP Quad",
    processor: "Snapdragon 765G",
    storage: "256 GB",
    releaseYear: 2020,
    image: "images/htc-u20-5g.jpg",
  },
  {
    modelName: "Axon 30 Ultra",
    brand: "ZTE",
    os: "Android 11",
    screenSize: "6.67 inches",
    batteryCapacity: "4600 mAh",
    camera: "64 MP Quad",
    processor: "Snapdragon 888",
    storage: "256 GB",
    releaseYear: 2021,
    image: "images/zte-axon-30-ultra.jpg",
  },
  {
    modelName: "Alcatel 3X",
    brand: "Alcatel",
    os: "Android 9.0",
    screenSize: "6.52 inches",
    batteryCapacity: "4000 mAh",
    camera: "16 MP Triple",
    processor: "Mediatek MT6763V",
    storage: "64 GB",
    releaseYear: 2020,
    image: "images/alcatel-3x-2020.jpg",
  },
  {
    modelName: "IN Note 1",
    brand: "Micromax",
    os: "Android 10",
    screenSize: "6.67 inches",
    batteryCapacity: "5000 mAh",
    camera: "48 MP Quad",
    processor: "Mediatek Helio G85",
    storage: "64 GB",
    releaseYear: 2020,
    image: "images/micromax-in-note1.jpg",
  },
  {
    modelName: "Camon 16",
    brand: "Tecno",
    os: "Android 10",
    screenSize: "6.8 inches",
    batteryCapacity: "5000 mAh",
    camera: "64 MP Quad",
    processor: "Mediatek Helio G70",
    storage: "64 GB",
    releaseYear: 2020,
    image: "images/tecno-camon-16.jpg",
  },
];

const AllData = () => {
  mobilePhones.forEach((values) => {
    card_wrapper.innerHTML += `
      <div class="card" style="width: 18rem;">
        <div class="img-wrapper">
          <img src="${values.image}" class="card-img-top" alt="${values.modelName}">
        </div>
        <div class="card-body">
          <h5 class="card-title">${values.modelName}</h5>
          <p class="card-text"><strong>Brand:</strong> ${values.brand}</p>
          <p class="card-text"><strong>Camera:</strong> ${values.camera}</p>
          <p class="card-text"><strong>Processor:</strong> ${values.processor}</p>
          <p class="card-text"><strong>Storage:</strong> ${values.storage}</p>
          <p class="card-text"><strong>Release Year:</strong> ${values.releaseYear}</p>
  
          <div class="btn-wrapper">
          <a href="#" class="btn">Checkout Details</a>
          </div>
        </div>
      </div>
    `;
  });
}

AllData();

let search = document.getElementById('search');
let error = document.getElementById('error');

const searchingData = () => {
  if (search.value.trim() === "") {
    AllData();
    return;
}

  let filterdData = mobilePhones.filter((values) => {
    return values.brand.toLowerCase() === search.value.toLowerCase();
  })

  
  if(filterdData.length < 1){
    error.innerText = "Not Found!";
    setTimeout(()=>{
      error.innerText = "";
    }, 2000);
  }
  else{
    error.innerText = "";
    filterdData.forEach((values) => {
      card_wrapper.innerHTML = "";
      card_wrapper.innerHTML += `
        <div class="card" style="width: 18rem;">
          <div class="img-wrapper">
            <img src="${values.image}" class="card-img-top" alt="${values.modelName}">
          </div>
          <div class="card-body">
            <h5 class="card-title">${values.modelName}</h5>
            <p class="card-text"><strong>Brand:</strong> ${values.brand}</p>
            <p class="card-text"><strong>Camera:</strong> ${values.camera}</p>
            <p class="card-text"><strong>Processor:</strong> ${values.processor}</p>
            <p class="card-text"><strong>Storage:</strong> ${values.storage}</p>
            <p class="card-text"><strong>Release Year:</strong> ${values.releaseYear}</p>
    
            <div class="btn-wrapper">
            <a href="#" class="btn">Checkout Details</a>
            </div>
          </div>
        </div>
      `;
    });
  }
}
