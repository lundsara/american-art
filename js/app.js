window.onload = function() {
  console.log('Brain is ready!');


  const questions = [
      {
        q : "Which female artist made this notable work?",
        answers: [
          {option: 'A: Agnes Martin'},
          {option: 'B: Georgia O\'Keeffe'},
          {option: 'C: Cindy Sherman'},
          {option: 'D: Yoko Ono'},
          ],
          correct: 'B: Georgia O\'Keeffe',
          questionImage: "assets/o'keeffe.jpg",
      },
      {
        q : "Name this Canadian born painter who widely considered an 'American Artist'",
        answers: [
          {option: 'A: Agnes Martin'},
          {option: 'B: Bruce Nauman'},
          {option: 'C: Sol Lewitt'},
          {option: 'D: Robert Smithson'},
          ],
          correct: 'A: Agnes Martin',
          questionImage: 'assets/martin.jpg',

        },
        {
        q : "This artist broke the records in 1971 when his work was sold at auction for over 13 million dollars",
        answers: [
          {option: 'A: Charles Demuth'},
          {option: 'B: Edward Hopper'},
          {option: 'C: Richard Diebenkorn'},
          {option: 'D: Marsden Hartley'},
          ],
          correct: 'C: Richard Diebenkorn',
          questionImage: "assets/diebenkorn.jpg",

        },
        {
        q : "This artist has produced over 250 portraits of his wife Ada",
        answers: [
          {option: 'A: Alex Katz'},
          {option: 'B: Stuart Davis'},
          {option: 'C: David Salle'},
          {option: 'D: Francesco Clemente'},
          ],
          correct: 'A: Alex Katz',
          questionImage: "assets/Katz.jpg",

        },
        {
        q : "This artist found fame by emulating iconic film stills",
        answers: [
          {option: 'A: Alex Katz'},
          {option: 'B: Stuart Davis'},
          {option: 'C: David Salle'},
          {option: 'D: Cindy Sherman'},
          ],
          correct: 'D: Cindy Sherman',
          questionImage: "assets/sherman.jpg",

        },
        {
        q : "This artist was heavily influenced by Clement Greenberg and was an important part of 'Post-Painterly Abstractionism' ",
        answers: [
          {option: 'A: Helen Frankenthaler'},
          {option: 'B: Franz Kline'},
          {option: 'C: Cy Twombly'},
          {option: 'D: Francesco Clemente'},
          ],
          correct: 'A: Helen Frankenthaler',
          questionImage: "assets/Frankenthaler 2.jpg",

        },
        {
        q : "The work of this conceptual artist engages with intertextuality",
        answers: [
          {option: 'A: Clyfford Still'},
          {option: 'B: Stuart Davis'},
          {option: 'C: Jackson Pollock'},
          {option: 'D: Glen Ligon'},
          ],
          correct: 'D: Glen Ligon',
          questionImage: "assets/ligon 2.jpg",

        },
        {
        q : "This watercolorist is known for his townscapes and landscapes",
        answers: [
          {option: 'A: Helen Frankenthaler'},
          {option: 'B: Charles Burchfield'},
          {option: 'C: David Salle'},
          {option: 'D: Francesco Clemente'},
          ],
          correct: 'B: Charles Burchfield',
          questionImage: "assets/Burchfield.jpg",

        },
        {
        q : "This artist began his career as an advertisting photographer",
        answers: [
          {option: 'A: Alfred Stieglitz'},
          {option: 'B: Richard Avedon'},
          {option: 'C: David Salle'},
          {option: 'D: Richard Prince'},
          ],
          correct: 'B: Richard Avedon',
          questionImage: "assets/Avedon.jpg",

        },
         {
        q : "This artist was inspired to create by an anatomy book he was given as a child",
        answers: [
          {option: 'A: Donald Judd'},
          {option: 'B: Frank Stella'},
          {option: 'C: Jean Michele Basquiat'},
          {option: 'D: Robert Rauschenberg'},
          ],
          correct: 'C: Jean Michele Basquiat',
          questionImage: "assets/Basquiat.jpg",

        },
         {
        q : "This German born artist is famous for his work on color theory in both the United States and Europe",
        answers: [
          {option: 'A: Josef Albers'},
          {option: 'B: Mark Rothko'},
          {option: 'C: Jean Michele Basquiat'},
          {option: 'D: Francesco Clemente'},
          ],
          correct: 'A: Josef Albers',
          questionImage: "assets/albers.jpg",

        },
         {
        q : "This artist made a notorious series of portraits from inside an sanatorium",
        answers: [
          {option: 'A: Martha Rosler'},
          {option: 'B: Willem de Kooning'},
          {option: 'C: Alice Neel'},
          {option: 'D: Francesco Clemente'},
          ],
          correct: 'C: Alice Neel',
          questionImage: "assets/neel.jpg",

        },
         {
        q : "Name this Harlem born artist and renowned muralist",
        answers: [
          {option: 'A: Charles Henry Alston'},
          {option: 'B: Richard Avedon'},
          {option: 'C: Jean Michele Basquiat'},
          {option: 'D: Barnett Newman'},
          ],
          correct: 'A: Charles Henry Alston',
          questionImage: "assets/alston.jpg",

        },
         {
        q : "This artist produced an iconic American painting called 'Nighthawks'",
        answers: [
          {option: 'A: Ed Ruscha'},
          {option: 'B: Andy Warhol'},
          {option: 'C: Edward Hopper'},
          {option: 'D: Francesco Clemente'},
          ],
          correct: 'C: Edward Hopper',
          questionImage: "assets/hopper2 2.jpg",

        },
         {
        q : "This artist is renowned for his mobile sculptures",
        answers: [
          {option: 'A: Alexander Calder'},
          {option: 'B: Carl Andre'},
          {option: 'C: Vito Acconci'},
          {option: 'D: Dan Flavin'},
          ],
          correct: 'A: Alexander Calder',
          questionImage: "assets/calder.jpg",

        }
     ];


  let input = '';

  let playerScore = 0;

  let currentIndex = 0;



  function renderQuestion() {
    //console.log(currentIndex);
    const question = document.querySelector('.question');
    const answers = document.querySelectorAll('.answer');
    const image = document.querySelector('#testImage');
    //console.log (image);
    question.innerHTML = questions[currentIndex].q;
    image.src = questions[currentIndex].questionImage;


    for (var n = 0; n <answers.length; n++) {
      //iterating through all of the node modules with the class answer using n as a counter
      //and giving each node a value , the value of an option in the data in the questions array above
      answers[n].innerHTML = questions[currentIndex].answers[n].option;
      question.style.color = 'white';
    }
    currentIndex++;
    //console.log(currentIndex);
  };
  renderQuestion();



function gameResults () {
  const answers = document.querySelectorAll('.answer');
  for(let i = 0; i <= answers.length; i++) {
    //console.log('added event listener')
    answers[i].addEventListener('click', function(event) {
    //  console.log('this got clicked --> ', event.target);

     const question = document.querySelector('.question');


       if (event.target.innerHTML === questions[currentIndex -1].correct) {

        event.target.style.color = 'green';
        playerScore ++;
        }

      else {

      event.target.style.color = 'firebrick';
         }
     });


  // show number of correct answers out of total
   let tally = document.querySelector('#tally');
   tally.innerHTML = (playerScore) + ' out of ' + questions.length;
  }
}


  var startGame = document.querySelector('#startPage');
  var gamePage = document.querySelector('#gamePage');
  var resultsPage = document.querySelector('#resultsPage');

  if (start){
  document.getElementById('submit').addEventListener('submit', startGame);

      function startGame (event){
        event.preventDefault();
        let username = document.querySelector('#username');
        let result = document.querySelector('#result');
        result.textContent = username.value + "'s results!";
        gamePage.style.visibility='visible';
        landingPage.style.visibility='hidden';
        resultsPage.style.visibility='hidden';
        gameResults();
        currentIndex = 0;
        playerScore = 0;
      }
    }
    if (next){
      document.getElementById('next').addEventListener('click', nextQuestion);
      function nextQuestion (){
        const answers = document.querySelectorAll('.answer');
        for (var i = 0; i <answers.length; i++) {
          answers[i].style.color = "white";
        }
        resultsPage.style.visibility='hidden';
        gamePage.style.visibility='visible';
        landingPage.style.visibility='hidden';
        checkGameCompletion ();
        renderQuestion();

        }
      }

    if (playAgain){
   document.getElementById('playAgain').addEventListener('click', reloadGame);

      function reloadGame (){
        resultsPage.style.visibility='hidden';
        gamePage.style.visibility='hidden';
        landingPage.style.visibility='visible';
        location.reload();
      }
    }
  //if player click exit, reset game
  if (exit){
    document.getElementById('exit').addEventListener('click', resetGame);

      function resetGame (){
        resultsPage.style.visibility='hidden';
        gamePage.style.visibility='hidden';
        landingPage.style.visibility='visible';
        currentIndex = 0;
        playerScore = 0;
        }
      }

    function checkGameCompletion (){
      if (questions.length === currentIndex) {
        resultsPage.style.visibility='visible';
        gamePage.style.visibility='hidden';
        landingPage.style.visibility='hidden';
        currentIndex = 0;
        gameResults();

          }
        }





} // windows.onload
