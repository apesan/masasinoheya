const quiz = [
  { 
    question: "一番イケてるのはこのうち誰？",
    answers: [
      "新田真剣佑",
      "横浜流星",
      "ブラッド・ピット",
      "斎藤将司"
    ],
    correct: "斎藤将司"
  },
  {
    question: "斎藤将司の恋愛対象年齢は？",
    answers: [
      "0~6",
      "7~12",
      "13~18",
      "18以上"
    ],
    correct: "7~12"
  },
  {
    question: "斎藤将司は結婚できるのか？",
    answers: [
      "できる",
      "できない",
      "もちろんできない",
      "捕まる"
    ],
    correct: "捕まる"
  },
  {
    question: "斎藤将司は山岡家で何を食べる？",
    answers: [
      "味噌ラーメン",
      "特製味噌ラーメン",
      "プレミアム塩豚骨",
      "何も食べず券売機を漁る"
    ],
    correct: "何も食べず券売機を漁る"
  }, {
    question: "最後の質問！斎藤将司をどう思っている？",
    answers: [
      "大好き",
      "好き",
      "嫌い",
      "けんちゃんと仲いいなぁ"
    ],
    correct: "けんちゃんと仲いいなぁ"
  }
   
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//定数の文字列をhtmlに反映させる
const setupQuiz = () => {
  document.getElementById("js-question").textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert("正解"); 
    score++;
  } else {
    window.alert("ドンマイ");
  }
  
  quizIndex++;

  if(quizIndex < quizLength){
    //問題があればこちらを実行
    setupQuiz();
  } else {
    //問題数がもうなければこちらを実行
    window.alert("終了！あなたの正解数は" + score + "/" + quizLength + "です!これからも斎藤将司をよろしくお願い致します!")
  }
};
//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener("click", (e) => {
    clickHandler(e);
    
  });
  handlerIndex++;
}
