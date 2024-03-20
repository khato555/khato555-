//1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს ,
//თუ რიცხვები ტოლია დააბრუნებს 0 -ს
function num1(m, n) {
    if (m > n) {
      return m;
    } else if (m == n) {
      return 0;
    } else {
      return n;
    }
  }
  console.log(num1(10, 5));
  //2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი
  //1)
  function namber(a, b) {
    c = a + b;
    return c;
  }
  console.log(namber(10, 7));
  
  //2)
  /*const namber=(c,v)=>{
      return c+v;
  }
  console.log(namber(10,9));*/
  
  //3.დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)
  
  function woman() {
    var firsname = "khato";
    lastname = "dzidzaria";
    console.log(firsname, lastname);
  }
  woman();
  //4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ
  //( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)
  function man(firsname, lastname) {
    return firsname + lastname;
  }
  console.log(man("Eduard ", " Beridze"));
  
  //5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე)
  //რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა,
  //დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას.
  //Პ.ს. Უნდა გამოიყენოთ თქვენთვის სასურველი ციკლი)
  function num(n1) {
    let y = 1,
      i = 1;
    while (i < n1) {
      i++;
      y *= i;
    }
    return y;
  }
  console.log(num(5));
  
  //Შემდეგი დავალებებისთვის გამოიყენეთ :ობიექტი student - რომელსაც აქვს შემდეგი properties: firstname, lastname, age,
  //marks (scores არის შემდეგი რიცხვების მასივი: 4,7,5,3,2) და მეთოდი რომელიც აბრუნებს სტუდენტის სრულ სახელს
  //( ობიექტი შეიცავს მეთოდს, ცალკე ფუნქციად არ უნდა დაწეროთ )
  
  //6. დაბეჭდეთ  სტუდენტის სრული სახელი ( გამოიყენეთ student ობიექტის მეთოდი)
  const student = {
    firstname: "niako",
    lastname: "Abashidze",
    age: 30,
    marks: [4, 7, 5, 3, 2],
    myMETHOD() {
      console.log(this.firstname, this.lastname);
    },
  };
  student.myMETHOD();
  //7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულება ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს
  function scores(student){
      let sum=0;
      for(c=0;c<student.marks.length;c++){
          sum+=student.marks[c]
      }
      return sum
  }
  console.log(scores(student));
  //8. დაბეჭდეთ სტუდენტის სახელი და ასაკი
  console.log(student.firstname, student.age);
  