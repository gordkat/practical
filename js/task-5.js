let country = prompt("В какую страну оформить доставку?");
let price;
let message;
if (country === null) {
  message = "Отменено пользователем!";
} else {
  country = country.toLowerCase();
  switch (country) {
    case "китай":
      price = 100;
      country = "Китай";
      break;
    case "чили":
      price = 250;
      country = "Чили";
      break;
    case "австралия":
      price = 170;
      country = "Австралию";
      break;
    case "индия":
      price = 80;
      country = "Индию";
      break;
    case "ямайка":
      price = 120;
      country = "Ямайку";
      break;
    default:
      message = "В вашей стране доставка не доступна";
  }
}
if (!message) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

alert(message);
