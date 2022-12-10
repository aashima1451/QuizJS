var quesDB = [
  {
    qQues: "How to write an IF statement in JavaScript?",
    qOptions: ["if (i == 5)", "if i == 5 then", "if i = 5", "if i = 5 then"],
    qRight_ans: "if (i == 5)",
  },
  {
    qQues: "Which event occurs when the user clicks on an HTML element?",
    qOptions: ["onclick", "onmouseover", "onchange", "onmouseclick"],
    qRight_ans: "onclick",
  },
  {
    qQues: "Which method is correct in JavaScript?",
      qOptions: ["forEach", "slice", "splice", "all"],
      qRight_ans: "all",
    },
    {
      qQues: "Which method returns new array?",
      qOptions: ["forEach", "sort", "slice", "map"],
      qRight_ans: "map",
    },
    {
      qQues: "DOM Manupulation is considered 'Expensive' in Javascript?",
      qOptions: ["yes", "no"],
      qRight_ans: "yes",
    },
    {
      qQues: "array.splice method can be used for?",
      qOptions: ["deleting elements", "adding elements", "both", "none"],
      qRight_ans: "both",
    },
    {
      qQues: "What is Node.js?",
      qOptions: [
        "Programming Language",
        "scripting language",
        "backend language",
        "platform",
      ],
      qRight_ans: "platform",
    },
    {
      qQues: "How can we add click event using DOM?",
      qOptions: ["onclick", "onClick", "addEventListener(click)", "none"],
      qRight_ans: "addEventListener(click)",
    },
  
    {
      qQues: "which of below method itetrates complete array?",
      qOptions: ["forEach", "sort", "slice", "map"],
      qRight_ans: "forEach",
    },
    {
      qQues: "which of the following sorts the array?",
      qOptions: ["forEach", "sort", "slice", "map"],
      qRight_ans: "sort",
    },
  ];
  
  var current_ques = 0;
  var score = 0;
  var ques_container = document.getElementById("ques_container");
  var title = document.getElementById("title");
  var options = document.getElementById("options"); //ul
  var next = document.getElementById("next");
  
  var fieldset = document.getElementById("fieldset");
  var restart = document.getElementById("restart");
  
  function createQuiz() {
    var question = quesDB[current_ques];
    // console.log(question.qQues);
    fieldset.disabled = false;
  
    title.innerHTML = question.qQues;
    next.style.display = "none";
    result.style.display = "none";
  
    question.qOptions.forEach(function (option, index) {
      var radio = document.createElement("input");
      radio.setAttribute("type", "radio");
      radio.setAttribute("name", "option");
      radio.setAttribute("value", option);
  
      var label = document.createElement("label");
      label.innerHTML = option;
  
      var list_li = document.createElement("li");
  
      list_li.appendChild(radio);
      list_li.appendChild(label);
  
      options.appendChild(list_li);
    });
  }
  
  createQuiz();
  
  submit.addEventListener("click", function (event) {
    var optionsCreated = document.getElementsByName("option");
  
    // console.log(optionsCreated)
    var checked_option = "";
  
    fieldset.disabled = true;
  
    optionsCreated.forEach(function (data, index) {
      if (data.checked) {
        checked_option = index;
      }
    });
  
    if (checked_option === "") {
      // console.log(checked_option);
      alert("SELECT AN OPTION");
      fieldset.disabled = false;
    }
  
    var selected_option = optionsCreated[checked_option].value;
  
    var is_right = quesDB[current_ques].qRight_ans === selected_option;
  
    if (is_right) {
      submit.style.display = "none";
  
      result.innerText = "Correct";
  
      result.classList.add("correct");
      result.style.backgroundColor = "green";
      result.style.display = "block";
  
      next.style.display = "block";
  
      score++;
    } else {
      submit.style.display = "none";
  
      result.innerText = "InCorrect";
      result.style.display = "block";
  
      result.classList.add("incorrect");
      result.style.backgroundColor = "red";
  
      next.style.display = "block";
    }
  });
  
  next.addEventListener("click", function () {
    result.setAttribute("class", "");
    result.innerHTML = "";
  
    options.innerHTML = "";
  
    next.style.display = "none";
    submit.style.display = "block";
  
    //questions.shift();
    current_ques++;
  
    if (quesDB[current_ques]) {
      createQuiz();
    } else {
      // answersheet.style.display = "block";
      // question_container.style.display = "none";
  
      // showAnswerSheet();
      answerKey();
      // console.log("ques end");
      // alert("ques end")
    }
  });
  
  function answerKey() {
    title.innerHTML = "";
    title.innerText = `Congratulations! You Scored: ${score}/ ${quesDB.length}`;
    title.style.textAlign = "center";
    result.style.backgroundColor = "rgba(220, 20, 60)";
  
    options.innerHTML = "Answer Key:";
    options.style.textAlign = "center";
    options.style.fontSize = "3rem";
    options.style.color = "Red";
  
    // console.log(ques_container)
    quesDB.forEach(function (data, index) {
      var lii = document.createElement("li");
      lii.innerText =
        index +
        1 +
        ". " +
        quesDB[index].qQues +
        "\nAns: " +
        quesDB[index].qRight_ans;
      result.appendChild(lii);
    });
  
    fieldset.disabled = true;
    submit.style.display = "none";
    restart.style.display = "block";
    restart.addEventListener("click", function () {
      location.reload();
    });
  }