/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generate() {
    let person = [
      {
        name: "maria",
        lastName: "rodriguez"
      },
      {
        name: "pedro",
        lastName: "perez"
      },
      {
        name: "juan jose",
        lastName: "ruiz"
      }
    ];
    let address = [
      {
        cp: 2080,
        dir: {
          city: "madrid",
          avenida: "alcalá"
        }
      },
      {
        cp: 2085,
        dir: {
          city: "barcelona",
          avenida: "rua"
        }
      },
      {
        cp: 2087,
        dir: {
          city: "murcia",
          avenida: "atocha"
        }
      }
    ];
    let job = [
      {
        company: "Google",
        position: {
          job: "fullstack developer",
          level: "junior"
        },
        antiquity: 5
      },
      {
        company: "Amazon",
        position: {
          job: "back-end developer ",
          level: "senior"
        },
        antiquity: 5
      },
      {
        company: "Google",
        position: {
          job: "front-end developer ",
          level: "senior"
        },
        antiquity: 5
      }
    ];

    let randNum1 = Math.floor(Math.random() * 3);
    let randNum2 = Math.floor(Math.random() * 3);
    let randNum3 = Math.floor(Math.random() * 3);

    let personQualities =
      person[randNum1].name +
      " " +
      person[randNum1].lastName +
      " cuyo codigo postal es " +
      address[randNum2].cp +
      " y vive en la ciudad de " +
      address[randNum2].dir.city +
      " especificamente en " +
      address[randNum2].dir.avenida +
      ". Trabaja en " +
      job[randNum3].company +
      " como " +
      job[randNum3].position.level +
      " " +
      job[randNum3].position.job +
      " con una antiguedad de " +
      job[randNum3].antiquity +
      " años?";

    return personQualities;
  }
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generate();
  });

  console.log("Hello Rigo from the console!");
};
