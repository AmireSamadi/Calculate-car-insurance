//class

class HtmlUi {
  displayYaer() {
    let maxYaer = this.maxYaer();
    let minYaer = maxYaer - 20;
    let selectYaer = document.querySelector("#year");
    for (let i = maxYaer; i >= minYaer; i--) {
      let option = document.createElement("option");
      option.value = i;
      option.innerHTML = i;
      selectYaer.appendChild(option);
    }
  }

  maxYaer() {
    let today = new Date()
      .toLocaleDateString("fa-IR")
      .replace(/([۰-۹])/g, (token) =>
        String.fromCharCode(token.charCodeAt(0) - 1728)
      );
    today = today.slice(0, 4);
    return today;
  }

  displayError(info) {
    let formGroup = document.querySelector(".form-group");
    let div = document.createElement("div");
    div.innerHTML = info;
    div.classList = "error";
    form.insertBefore(div, formGroup);
    setTimeout(() => {
      div.remove()
    }, 3000);
  }

  displayResult(price, info) {
    let result = document.querySelector("#result");
    let div = document.createElement("div");
    let spiner=document.querySelector("#loading img");
    spiner.style.display="block"
    let make = info.make;
    switch (make) {
      case "1":
        make = "پراید";
        break;

      case "2":
        make = "اپتیما";
        break;

      case "3":
        make = "پورشه";
        break;
    }

    let year = info.year;

    let level = info.level;
    if (level === "basic") {
      level = "ساده";
    } else {
      level = "کامل";
    }

    div.innerHTML = `
     <p class="header">فاکتور</p>
     <p>مدل خودرو:${make}</p>
     <p>سال ساخت:${year}</p>
     <p>نوع بیمه:${level} </p>
     <p>قیمت: ${price} </p>


    
    `;

    setTimeout(() => {
    result.appendChild(div);
    spiner.style.display="none"
      
    }, 3000);
  }
}

class Insurance {
  constructor(make, year, level) {
    this.make = make;
    this.year = year;
    this.level = level;
  }
  calcInsurance(info) {
    let make = info.make;
    this.clcPriceCar(make);

    let year = info.year;
    let calcYear = this.calcPriceYear(year, this.clcPriceCar(make));

    let level = info.level;
    let calcLevel = this.calcPriceLevel(level, calcYear);
    return calcLevel;
  }

  clcPriceCar(make) {
    let price = 2000;
    switch (make) {
      case "1":
        price = price * 1.2;
        break;

      case "2":
        price = price * 1.5;
        break;

      case "3":
        price = price * 2;
        break;
    }
    return price;
  }

  calcPriceYear(year, price) {
    let now = html.maxYaer();
    let difence = now - year;

    price = price - ((difence * 3) / 100) * price;
    return price;
  }
  calcPriceLevel(level, price) {
    if (level === "basic") {
      price = price * 1.2;
    } else {
      price = price * 1.5;
    }
    let fullPrice = price.toFixed(2);
    return fullPrice;
  }
}
