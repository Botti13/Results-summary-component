const data = [
    {
      "category": "Reaction",
      "score": 65,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 75,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 59,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ]

const [reaction, memory, verbal, visual] = data;

const reactionScore = reaction.score
const memoryScore = memory.score
const verbalScore = verbal.score
const visualScore = visual.score

const finalResult = Math.floor((reactionScore + memoryScore + verbalScore + visualScore)/4)

$(".reaction img").attr("src", reaction.icon);
$(".reaction span").text(reactionScore);

$(".memory img").attr("src", memory.icon);
$(".memory span").text(memoryScore);

$(".verbal img").attr("src", verbal.icon);
$(".verbal span").text(verbalScore);

$(".visual img").attr("src", visual.icon);
$(".visual span").text(visualScore);

$(".result-circle h1").text(finalResult)

