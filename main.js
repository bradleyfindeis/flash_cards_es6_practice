let arr = [
  { question: "1 question", answer: "1 Answer" },
  { question: "2 question", answer: "2 Answer" },
  { question: "3 question", answer: "3 Answer" },
  { question: "4 question", answer: "4 Answer" },
  { question: "5 question", answer: "5 Answer" },
  { question: "6 question", answer: "6 Answer" },
  { question: "7 question", answer: "7 Answer" },
  { question: "8 question", answer: "8 Answer" },
  { question: "9 question", answer: "9 Answer" },

];

const div = (question, answer) => (

`<div class='col s12 m6'>
<div class="card" id="child">
<div class="card-content">
  <span class="card-title activator grey-text text-darken-4">Question<i class="material-icons right">more_vert</i></span>
  <p class="question"> ${question} </p>
</div>
<div class="card-reveal">
  <span class="card-title grey-text text-darken-4">Answer<i class="material-icons right">close</i></span>
  <p id="answer">${answer}</p>
</div>
</div>
</div>
</div>`
)

const cards = (someArr) =>{
  someArr.map((item, i) => {
    let box = div(item.question, item.answer)
    $('#gridMofo').append(box)
  })
}


$(document).ready( function() {
  cards(arr)
})
