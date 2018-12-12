const counter = document.querySelector('#counter')
const minus = document.querySelector('#minus')
const plus = document.querySelector('#plus')
const likebutton = document.querySelector("#likes")
const comments = document.querySelector('.comments')
const pause = document.querySelector('#pause')
const commentsForm = document.querySelector('#comment-form')
const commentsInput = document.querySelector('#comment-id')

minus.addEventListener('click', function(event) {
  let counterValue = parseInt(counter.innerText)
  if (counterValue > 0) {
    counter.innerText = counterValue - 1
  }
});

plus.addEventListener('click', function(event) {
  let counterValuePlus = parseInt(counter.innerText);
  counter.innerText = counterValuePlus + 1;
});

function increment() {
  let counterValueInc = parseInt(counter.innerText)
  counter.innerText = counterValueInc + 1
}

let incr = setInterval(increment, 1000)

function likeClick() {
  likebutton.addEventListener("click", likeCounterIncrementToComments)
}

function likeCounterIncrementToComments() {
  let likesNum = 0
  likesNum += 1
  likeCounter = document.createElement('li')
  likeCounter.innerText = `${likesNum} like @ ${counter.innerText}`
  comments.append(likeCounter)
}


function init() {
  pause.addEventListener("click", pauseToButton)
}

function pauseToButton() {
    minus.disabled = true
    plus.disabled = true
    likebutton.disabled = true
    pause.innerText = `Resume`
    clearInterval(incr)
}

function formInIt() {
  commentsForm.addEventListener('submit', handleFormSubmit)
}

function handleFormSubmit(e) {
  e.preventDefault();
  const newComment = commentsInput.value

  const commentElement = document.createElement('li')
  commentElement.innerText = newComment

  comments.append(commentElement)

}

likeClick()

init()

formInIt()
