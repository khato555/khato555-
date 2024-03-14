/*1).დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (a,b) და დააბრუნებს შესაბამისს ტექსტს 
a:თუ რიცხვები ტოლია : a  და b ტოლია
b:თუ a მეტია b ze : a  მეტია b -ზე
c:თუ a ნაკლებია  b ze : a  ნაკლებია  b -ზე*/

let text = function (a, b) {
    if (a > b) return "a მეტია b-ზე ";
    else if (a < b) return "a ნაკლებია b-ზე";
    else return "a=b";
  };
  console.log(text(10, 10));
  /*2).დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ true თუ მათი ჯამი მეტია 100 ზე , 
  false , თუ არ არის მეტი 100 ზე
  */
  let a = 50,
    b = 40;
  function numbers(a, b) {
    c = a + b;
    if (c > 100) return "true";
    else return "false";
  }
  console.log(numbers(a, b));
  
  /*3).დაწერეთ ფუნქცია, რომელიც დაითვლის და დააბრუნებს კალათბურთის თამაშისას აღებულ ქულას ( ქულების ჯამს). ფუნქციას აქვს სამი პარამეტრი
  პირველი პარამეტრი - 1 ქულიანების რაოდენობა
  მეორე პარამეტრი -  2 ქულიანების რაოდენობა
  მესამე - 3 ქულიანების რაოდენობა*/
  
  let sum = function (პირველი, მეორე, მესამე) {
    sum = პირველი + მეორე + მესამე;
    return sum;
  };
  console.log(sum(1, 2, 3));
  
  /*4).დაწერეთ ფუნქცია ორი პარამეტრით start და end , ფუნქციას გადაეცემა ორი რიცხვი, უნდა შექმნათ  start დან 
  end-ჩათვლით  რიცხვების მასივი(მაგალითად თუ start არის 3 და end არის 6 მასივის ელემენტები უნდა იყოს [3,4,5,6] ) 
  ( arr.push()- მასივში ელემენტის დამატება)*/
  
  function masivi(star, end) {
    let mas = [];
  
    for (i = star; i <= end; i++) {
      mas.push(i);
    }
    return mas;
  }
  console.log(masivi(3, 10));
  
  /*5).ობიექტ person - ს აქვს შემდეგი properties: firstname, lastname, age, დაწერეთ ფუნქცია რომელიც პერსონის ასაკის 
  მიხედვით დაბეჭდავს 
  თუ 18  წელზე პატარაა - “პერსონის სახელი” არასრულწლოვანია
  თუ 18 და მეტია “პერსონის სახელი” - სრულწლოვანია 
  */
  
  //1)
  let person = {
    firstname: "nino",
    lastname: "bochorishvili",
    age: 34,
  };
  function me(age) {
    if (age <= 18) return "არასრულწლოვანია";
    else return "სრულწლოვანია";
  }
  console.log(person.firstname, me(person.age));
  
  //2)მგონი ორივე მეთოდით შეიძლება ()
  function person(firstname, lastname, age) {
    if (age < 18) {
      console.log(firstname, "არასრულწლოვანია");
    } else {
      console.log(firstname, "სრულწლოვანია");
    }
  }
  
  person("nino", "bochorishvili", 34);
  
  /*6).გამოაცხადეთ მასივი phones ელემენტებით : Iphone, Samsung, Pixel, Huawei, Xiaomi და დაბეჭდეთ. 
  Დაბეჭდეთ ელემენტები სათითაოდ ( გამოიყენეთ for ციკლი)
  */
  let phone = ["Iphone", "Samsung", "Pixel", "Huawei", "Xiaomi"];
  console.log(phone);
  for (const el of phone) {
    console.log(el);
  }
  
  /*7).Გამოაცხადეთ ცვლადი num სასურველი მნიშვნელობით ( მაგ. 23), 
  დაბეჭდეთ რიცხვები 1 დან num ის ჩათვლით ( გამოიყენეთ while ციკლი).
  */
  var num = 25;
  num = 1;
  
  while (num <= 25) {
    console.log(num);
    num++;
  }
  
  /*8).Გამოიყენეთ სასურველი ციკლი და დაბეჭდეთ ლუწი რიცხვები 2-დან 13 - ის ჩათვლით , 
  გამოიყენეთ სასურველი ციკლი ( for, while)*/
  
  let i = 13;
  console.log(i);
  for (i = 2; i <= 13; i++) {
    if (i % 2 == 1) continue;
    console.log(i);
  }
  
