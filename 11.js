const bankAccount = {
    ownerName: "rrr",
    accountNumber: 0909,
    balance: 1,

  deposit(denga) {
    this.balance += denga;
  },

  withdraw(denga) {
    this.balance -= denga;
  },
};

let continueTransaction;
do {
  const userChoice = confirm(
    "ok najmi"
  );

  if (userChoice === true) {
    const depositAmount = Number(
      prompt("denga")
    );
    bankAccount.deposit(depositAmount);
  } else {
    const withdrawAmount = Number(
      prompt("+denga")
    );
    bankAccount.withdraw(withdrawAmount);
  }

  continueTransaction = confirm(
    "o?"
  );
} while (continueTransaction === true);

console.log(bankAccount.balance);


let message;

const weather = {
  temperature: 7,
  humidity: 30,
  windSpeed: 5,

  checkTemperature(inputTemperature) {
    if (inputTemperature < 0) {
      message = "0";
    } else {
      message = "0=<";
    }
    return message;
  },
};
let continueChangingTemperature;
do {
  const inputTemperature = Number(prompt("tempa"));
  alert(weather.checkTemperature(inputTemperature));
  continueChangingTemperature = confirm("tempa?");
} while (continueChangingTemperature === true);


const user = {
    name: "kai",
    email: "kai_ninjago@gmail.com",
    password: "KaiKaiKai",
  
    login(inputEmail, inputPassword) {
      if (inputEmail !== this.email) {
        return "correct";
      }
      if (inputPassword !== this.password) {
        return "inc";
      }
      if (inputEmail !== this.email || inputPassword !== this.password) {
        return "all inc";
      }
      return "all correct";
    },
  };
  
  let userEmail;
  let userPassword;
  let tryAgain;
  
  do {
    userEmail = prompt("pochta");
    userPassword = prompt("password");
    const result = user.login(userEmail, userPassword);
    alert(result);
    
    tryAgain = result !== "all correct" && confirm("again?");
  } while (tryAgain);

const film = {
    name: "pers",
    directorName: "donald trush",
    releaseYear: 1966,
    filmRating: 9.9,
  
    verifyRating(rating) {
      if (rating > 8) {
        return true;
      } else {
        return false;
      }
    },
  };
  
  if (film.verifyRating(film.filmRating) === true) {
    alert("oka");
  } else {
    alert("drugoi");
  }
  
  alert(
    `rate - ${film.name}, regiser - ${film.directorName}, god - ${film.releaseYear}, rate - ${film.filmRating}`
  );