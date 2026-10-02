const CHAPTERS = [
  'A small autumn experiment',
  'Chapter I · The first prediction',
  'Chapter II · The safe answer',
  'Chapter III · The swallowed sentence',
  'Chapter IV · The eyes behind the glass',
  'Chapter V · The details',
  'Chapter VI · The quiet world',
  'The rain is still there'
];

const questions = [
  {
    id: 'q1', chapter: 1, number: '01', title: 'Rain makes people choose differently.',
    prompt: 'It is raining outside. You have coffee nearby and nothing you must do for the next hour. What do you choose?',
    prediction: 'My prediction: you will choose the safe answer, but you will want the beautiful one.',
    options: [
      { text: 'Stay somewhere warm and familiar', tags: ['control', 'warmth'], response: 'I knew you would choose comfort. You like surprises much more when they arrive somewhere safe.' },
      { text: 'Watch the rain and think', tags: ['mystery', 'nostalgia'], response: 'That sounds like you: close enough to the world to watch it, far enough away to keep your thoughts private.' },
      { text: 'Sleep a little longer', tags: ['comfort'], response: 'A practical answer. I respect it. The rain can continue without you.' },
      { text: 'Find someone I trust and talk', tags: ['warmth', 'observation'], response: 'You do not give everyone access to your thoughts. But the people you trust receive your attention completely.' },
      { text: 'Something else', tags: ['surprise'], response: 'That was not one of the answers I prepared. Good. I was hoping you would make the list incomplete.' }
    ], input: true, placeholder: 'Or write the answer I did not prepare...'
  },
  {
    id: 'q2', chapter: 1, number: '02', title: 'The coffee is getting cold.',
    prompt: 'This is not a metaphor yet. What are you doing?',
    prediction: 'I think coffee is less of a drink for you and more of a recurring event.',
    options: [
      { text: 'Drinking it before it gets colder', tags: ['coffee', 'control'], response: 'Yes. There it is. Coffee returns, and apparently so does your loyalty to it.' },
      { text: 'Making another one', tags: ['coffee', 'comfort'], response: 'One coffee is an event. Two coffees are a routine. I am beginning to understand the scale of this.' },
      { text: 'Forgetting it exists', tags: ['surprise'], response: 'You forgot the coffee? I will record this as an unlikely event.' },
      { text: 'Complaining that it is cold', tags: ['coffee', 'playfulness'], response: 'A reasonable response. The coffee has failed to maintain its part of the agreement.' },
      { text: 'Something else', tags: ['surprise'], response: 'The coffee remains important, but not necessarily in the way I expected.' }
    ], input: true, placeholder: 'Tell me the real answer...'
  },
  {
    id: 'q3', chapter: 1, number: '03', title: 'You are harder to predict when you know you are being watched.',
    prompt: 'If I predict your answer before you choose, what are you more likely to do?',
    prediction: 'I predict that part of you will want to prove me wrong simply because I made the prediction visible.',
    options: [
      { text: 'Prove you right', tags: ['warmth', 'control'], response: 'A generous choice. Or a very convincing disguise.' },
      { text: 'Prove you wrong', tags: ['surprise', 'playfulness'], response: 'There it is. You saw the prediction coming and stepped around it.' },
      { text: 'Choose the answer you wanted anyway', tags: ['warmth'], response: 'You can let someone be right without giving them the satisfaction of knowing it.' },
      { text: 'Pretend you did not predict anything', tags: ['mystery', 'playfulness'], response: 'A strong strategy. I will pretend to believe that this was not a strategy.' },
      { text: 'Type what I really think', tags: ['directness', 'surprise'], response: 'That is dangerous. Not because it is wrong. Because it is honest.' }
    ], input: true, placeholder: 'Or make your own answer difficult to predict...'
  },
  {
    id: 'q4', chapter: 2, number: '04', title: 'You like surprises. Carefully prepared ones.',
    prompt: 'Something unexpected is about to happen. What do you want first?',
    prediction: 'I suspect you would like the surprise more after checking whether it is dangerous.',
    options: [
      { text: 'Information', tags: ['control'], response: 'Of course. A surprise is more enjoyable once you have checked whether it is dangerous.' },
      { text: 'Time to think', tags: ['control', 'mystery'], response: 'You do not panic. You investigate privately first.' },
      { text: 'Someone I trust nearby', tags: ['warmth'], response: 'You do not ask everyone for help. But the right person changes the whole situation.' },
      { text: 'A way out', tags: ['control'], response: 'A sensible answer. Having an exit does not mean you plan to use it.' },
      { text: 'The surprise itself', tags: ['surprise', 'playfulness'], response: 'Interesting. You want the unknown, as long as it remains kind.' }
    ], input: true, placeholder: 'What would you really want first?'
  },
  {
    id: 'q5', chapter: 2, number: '05', title: 'Your mind visits every ending first.',
    prompt: 'When your mind starts predicting the worst, what helps most?',
    prediction: 'I think knowing the facts would help. Or at least give your thoughts something more useful to do.',
    options: [
      { text: 'Knowing the facts', tags: ['control', 'observation'], response: 'You like the shape of a problem better once you can see its edges.' },
      { text: 'Making a plan', tags: ['control'], response: 'A plan cannot control everything. But it can make the unknown feel less loud.' },
      { text: 'Talking to someone I trust', tags: ['warmth'], response: 'You do not open every door. The people behind the right ones matter a great deal.' },
      { text: 'Distracting myself', tags: ['comfort'], response: 'Sometimes the mind needs a different room before it can return to the first one.' },
      { text: 'Pretending I am not worried', tags: ['mystery'], response: 'A familiar disguise. Not always a successful one.' }
    ], input: true, placeholder: 'Or explain what really helps...'
  },
  {
    id: 'q6', chapter: 2, number: '06', title: 'You have a small talent for making theories inconvenient.',
    prompt: 'If you wanted to surprise me on purpose, what would you change first?',
    prediction: 'I suspect the surprise would be planned long before it appeared.',
    options: [
      { text: 'The way you dress', tags: ['playfulness', 'surprise'], response: 'I have seen enough evidence to suspect that some of your surprises begin before anyone else notices.' },
      { text: 'The answer you give', tags: ['surprise', 'playfulness'], response: 'A reliable method. Especially when you know I think I know you.' },
      { text: 'Your timing', tags: ['mystery', 'playfulness'], response: 'You would make the waiting part of the surprise. That feels suspiciously effective.' },
      { text: 'Your expression', tags: ['observation', 'mystery'], response: 'You already hide expressions well. Choosing when to reveal one would be unfair.' },
      { text: 'The thing you pretend not to notice', tags: ['mystery', 'observation'], response: 'That answer has more hiding inside it than you are admitting.' }
    ], input: true, placeholder: 'What would you change?'
  },
  {
    id: 'q7', chapter: 3, number: '07', title: 'Some words arrive as something else.',
    prompt: 'If the green frog swallowed one sentence today, what kind of sentence would it be?',
    prediction: 'I will not ask you to retrieve it. Some sentences need somewhere safe to exist first.',
    options: [
      { text: 'Something I want to say', tags: ['directness', 'warmth'], response: 'Small sentence. Possibly not a small meaning.' },
      { text: 'Something I do not want to explain', tags: ['mystery'], response: 'The frog has accepted the assignment. It is refusing to provide further comment.' },
      { text: 'Something embarrassing', tags: ['mystery', 'playfulness'], response: 'A sensible place to put an embarrassing sentence. The frog looks trustworthy.' },
      { text: 'Something dangerous to admit', tags: ['mystery', 'directness'], response: 'Then it can stay swallowed until it decides it is safe.' }
    ], input: true, placeholder: 'You can type the sentence, or only describe it...', suggestions: ['Something I want to say', 'Something I cannot explain', 'The frog is not telling you']
  },
  {
    id: 'q8', chapter: 3, number: '08', title: 'Some sentences are not ready for the room.',
    prompt: 'Which is easier?',
    prediction: 'I think writing gives a thought more time to decide whether it wants to be seen.',
    options: [
      { text: 'Writing what I mean', tags: ['directness', 'mystery'], response: 'Sometimes the sentence is not ready to be said aloud. That does not make it less real.' },
      { text: 'Saying what I mean', tags: ['directness'], response: 'That is braver than most people make it sound.' },
      { text: 'Making a joke around it', tags: ['playfulness', 'mystery'], response: 'A joke can be a doorway. It can also be a very elegant escape route.' },
      { text: 'Letting someone notice', tags: ['mystery', 'observation'], response: 'You leave clues and let the right person decide whether to follow them.' },
      { text: 'Not answering yet', tags: ['mystery'], response: 'Not answering yet is still a kind of answer. It says the timing matters.' }
    ], input: true, placeholder: 'Which is easier for you?'
  },
  {
    id: 'q9', chapter: 3, number: '09', title: 'Silence has more than one translation.',
    prompt: 'When you become quiet, what should someone who knows you understand?',
    prediction: 'I will keep this as a possibility, not a permanent translation.',
    options: [
      { text: 'I am angry', tags: ['mystery'], response: 'Quiet does not always mean calm. I will remember that.' },
      { text: 'I am thinking', tags: ['observation', 'mystery'], response: 'There is usually a whole private conversation happening before you answer.' },
      { text: 'I am hurt', tags: ['warmth', 'mystery'], response: 'Some feelings become quiet because they are trying not to become larger.' },
      { text: 'I am tired', tags: ['comfort'], response: 'A quiet room is sometimes the kindest answer.' },
      { text: 'I am trying not to say something', tags: ['mystery', 'directness'], response: 'That is the kind of silence that makes a green frog nervous.' },
      { text: 'You should not assume', tags: ['control', 'mystery'], response: 'Fair. Knowing someone means leaving room to be wrong about them.' }
    ], input: true, placeholder: 'What does your quiet mean?'
  },
  {
    id: 'q10', chapter: 3, number: '10', title: 'One word can do unreasonable amounts of work.',
    prompt: 'You use one word more than you may realize: “really.” Is it usually disbelief, emphasis, amusement, suspicion, or something else?',
    prediction: 'I suspect it changes meaning depending on the look that arrives with it.',
    options: [
      { text: 'Disbelief', tags: ['playfulness', 'observation'], response: 'So the word is not innocent. It has been questioning people this whole time.' },
      { text: 'Emphasis', tags: ['directness'], response: 'A small word carrying a surprisingly large amount of weight.' },
      { text: 'Amusement', tags: ['playfulness'], response: 'That sounds about right. The word arrives, then waits to see what trouble follows.' },
      { text: 'Suspicion', tags: ['observation', 'mystery'], response: 'I will be more careful around that word from now on.' },
      { text: 'It depends', tags: ['mystery', 'observation'], response: 'Of course it depends. Even one word is allowed to have several lives.' }
    ], input: true, placeholder: 'What does “really” mean when you use it?'
  },
  {
    id: 'q11', chapter: 4, number: '11', title: 'What the glass cannot hide.',
    prompt: 'If your eyes answered before you did, what would they reveal first?',
    prediction: 'I may be wrong sometimes. But your eyes have never seemed particularly interested in helping you keep secrets.',
    options: [
      { text: 'That I am happy', tags: ['warmth', 'observation'], response: 'That one is easier to notice than you think.' },
      { text: 'That I am nervous', tags: ['mystery', 'observation'], response: 'You may hide the rest of the evidence. Your eyes are less disciplined.' },
      { text: 'That I am thinking', tags: ['observation', 'mystery'], response: 'There is usually a whole private conversation happening before you answer.' },
      { text: 'That I am annoyed', tags: ['mystery'], response: 'Quiet does not always mean calm.' },
      { text: 'That I am hiding something', tags: ['mystery', 'directness'], response: 'I will not ask what it is. Not immediately.' },
      { text: 'They would deny everything', tags: ['playfulness', 'mystery'], response: 'A strong defense. Not necessarily a convincing one.' }
    ], input: true, placeholder: 'What would they reveal?'
  },
  {
    id: 'q12', chapter: 4, number: '12', title: 'You can choose the obvious answer. I will still wonder why.',
    prompt: 'What do you think I notice first?',
    prediction: 'I think you know which answer I am waiting for.',
    options: [
      { text: 'Your eyes', tags: ['eyes', 'observation'], response: 'I knew you would choose that. Or perhaps you knew I would want you to.' },
      { text: 'Your voice', tags: ['voice', 'warmth'], response: 'That is certainly not wrong. Some voices stay with a person after the conversation ends.' },
      { text: 'Your smile', tags: ['warmth'], response: 'That was part of it too. The first detail was never only one detail.' },
      { text: 'The way you dress', tags: ['surprise', 'observation'], response: 'You do know how to make a quiet entrance feel like a decision.' },
      { text: 'The trouble you are about to cause', tags: ['playfulness'], response: 'That one is a possibility I should not dismiss.' }
    ], input: true, placeholder: 'Or name the detail I forgot to include...'
  },
  {
    id: 'q13', chapter: 4, number: '13', title: 'You can read people too.',
    prompt: 'What do you notice about me before I say anything?',
    prediction: 'You probably notice the mood first. You usually see more than I make easy.',
    options: [
      { text: 'My mood', tags: ['observation', 'warmth'], response: 'You notice more than I make easy. I should probably be more careful.' },
      { text: 'Jealousy', tags: ['observation', 'playfulness'], response: 'That is an uncomfortable level of accuracy. I will say nothing more about it.' },
      { text: 'My eyes', tags: ['eyes', 'warmth'], response: 'So you read me the way I read you. That seems fair.' },
      { text: 'How much I am thinking about you', tags: ['warmth', 'observation'], response: 'That answer is dangerous in a very quiet way.' },
      { text: 'When I am pretending to be fine', tags: ['observation', 'warmth'], response: 'You notice the disguise, even when I think it is working.' }
    ], input: true, placeholder: 'What do you notice?'
  },
  {
    id: 'q14', chapter: 5, number: '14', title: 'You leave clues everywhere.',
    prompt: 'Which detail feels most like you tonight?',
    prediction: 'I do not think one detail defines you. I think certain ones keep returning.',
    options: [
      { text: 'Coffee', tags: ['coffee', 'comfort'], response: 'That answer feels familiar. Not because it defines you. Because I have seen it return more than once.' },
      { text: 'Rain', tags: ['rain', 'nostalgia'], response: 'Rain gives quiet thoughts somewhere to go.' },
      { text: 'Flowers', tags: ['flowers', 'warmth'], response: 'A soft answer. Not a simple one.' },
      { text: 'Blue', tags: ['blue', 'mystery'], response: 'You keep finding new versions of blue. I do not think you choose only one.' },
      { text: 'Diamonds', tags: ['diamonds', 'observation'], response: 'A little light, carefully kept.' },
      { text: 'Butterflies', tags: ['butterfly', 'surprise'], response: 'Something delicate that refuses to stay still.' },
      { text: 'Sleep', tags: ['sleep', 'comfort'], response: 'A respectable answer. The world can wait while you disappear into sleep.' }
    ], input: true, placeholder: 'Choose a detail or name your own...'
  },
  {
    id: 'q15', chapter: 5, number: '15', title: 'Blue can mean many things.',
    prompt: 'Which blue would you choose?',
    prediction: 'I think your answer will say more about the weather inside the moment than the color itself.',
    options: [
      { text: 'Rainy-window blue', tags: ['blue', 'rain', 'mystery'], response: 'A quiet blue. The kind that does not need to explain why it is beautiful.' },
      { text: 'Dress or clothing blue', tags: ['blue', 'surprise'], response: 'A blue that gets noticed without asking to be announced.' },
      { text: 'Deep night blue', tags: ['blue', 'mystery'], response: 'The kind of blue that keeps its best thoughts after dark.' },
      { text: 'Soft quiet blue', tags: ['blue', 'warmth'], response: 'That feels like a color meant to lower the volume of the world.' },
      { text: 'Bright impossible blue', tags: ['blue', 'playfulness', 'surprise'], response: 'You chose the blue that refuses to behave like the weather.' },
      { text: 'The blue I cannot describe', tags: ['blue', 'mystery'], response: 'That may be the most honest blue of all.' }
    ], input: true, placeholder: 'Describe your blue...'
  },
  {
    id: 'q16', chapter: 5, number: '16', title: 'The body is less interested in secrets than the mind.',
    prompt: 'Which small habit would give you away if you tried to pretend nothing was affecting you?',
    prediction: 'I suspect you would choose something small enough to deny afterward.',
    options: [
      { text: 'Tapping your fingers', tags: ['tapping', 'observation'], response: 'A quiet rhythm. Not quite a confession, but not entirely innocent either.' },
      { text: 'Looking away', tags: ['mystery'], response: 'A classic escape route. The eyes leave first, even when the thought stays.' },
      { text: 'Saying “really”', tags: ['really', 'playfulness'], response: 'There it is again. One word, carrying a whole expression behind it.' },
      { text: 'Becoming quiet', tags: ['mystery'], response: 'Silence is useful. It hides just enough to make someone pay closer attention.' },
      { text: 'Reaching for coffee', tags: ['coffee', 'comfort'], response: 'A reliable witness. Coffee has probably seen more than it is telling me.' },
      { text: 'Adjusting your glasses', tags: ['glasses', 'eyes', 'mystery'], response: 'A very elegant attempt to interrupt the evidence.' }
    ], input: true, placeholder: 'What gives you away?'
  },
  {
    id: 'q17', chapter: 5, number: '17', title: 'Some details are more dangerous than others.',
    prompt: 'Which is more dangerous?',
    prediction: 'I have evidence for several of these. I will not be presenting it to the court.',
    options: [
      { text: 'A beautiful outfit', tags: ['surprise', 'observation'], response: 'A quiet outfit can still cause a considerable amount of trouble.' },
      { text: 'A quiet look', tags: ['eyes', 'mystery'], response: 'Especially when it says more than the person wearing it intended.' },
      { text: 'A familiar voice', tags: ['voice', 'warmth'], response: 'Some voices make calm feel like a place.' },
      { text: 'A certain laugh', tags: ['warmth'], response: 'That one has already been documented as dangerous.' },
      { text: 'A knife emoji', tags: ['playfulness'], response: 'I was going to say something mature about sharing attention. Then I remembered the knife emoji and decided to remain cautious.' }
    ], input: true, placeholder: 'Choose carefully...'
  },
  {
    id: 'q18', chapter: 5, number: '18', title: 'Some songs become attached to people without asking permission.',
    prompt: 'What kind of memory belongs to your song?',
    prediction: 'I think the answer will be less about the song and more about the version of you that appears when it plays.',
    options: [
      { text: 'A person', tags: ['nostalgia', 'warmth'], response: 'Some songs keep a person nearby without needing to say their name.' },
      { text: 'A place', tags: ['nostalgia'], response: 'A place can return through sound before the rest of the memory catches up.' },
      { text: 'A season', tags: ['nostalgia', 'rain'], response: 'That sounds like a memory with weather in it.' },
      { text: 'A feeling', tags: ['warmth', 'mystery'], response: 'The feeling often survives longer than the explanation.' },
      { text: 'A version of myself', tags: ['nostalgia', 'observation'], response: 'That may be the most honest answer. Songs remember who we were.' }
    ], input: true, placeholder: 'You do not have to name the song...'
  },
  {
    id: 'q19', chapter: 6, number: '19', title: 'Somewhere between here and nowhere.',
    prompt: 'What makes the world feel far away?',
    prediction: 'I think your answer will involve either quiet or someone sitting close. Possibly both.',
    options: [
      { text: 'Rain', tags: ['rain', 'mystery'], response: 'Rain gives the world a softer border.' },
      { text: 'A quiet room', tags: ['comfort', 'mystery'], response: 'A quiet room can feel like permission to stop performing.' },
      { text: 'A long conversation', tags: ['warmth', 'directness'], response: 'The right conversation can make time forget to interrupt.' },
      { text: 'Music', tags: ['nostalgia', 'warmth'], response: 'Some sounds build a room around the people listening.' },
      { text: 'Someone sitting close', tags: ['warmth', 'nostalgia'], response: 'Sometimes distance disappears because someone is close enough.' },
      { text: 'A place from the past', tags: ['nostalgia'], response: 'The past has a way of opening a door without asking permission.' }
    ], input: true, placeholder: 'What makes the world quiet?'
  },
  {
    id: 'q20', chapter: 6, number: '20', title: 'A moment held at the highest point.',
    prompt: 'If one moment could pause like a swing at its highest point, what would you keep a little longer?',
    prediction: 'I will not assume the answer. Some moments belong to the person who remembers them.',
    options: [
      { text: 'A look', tags: ['eyes', 'nostalgia'], response: 'A look can be brief and still refuse to leave.' },
      { text: 'A laugh', tags: ['warmth', 'nostalgia'], response: 'Some laughter changes the shape of the room.' },
      { text: 'A conversation', tags: ['warmth', 'directness'], response: 'The right conversation makes the world feel briefly unnecessary.' },
      { text: 'A quiet space', tags: ['mystery', 'nostalgia'], response: 'Quiet is not empty when the right person is inside it.' },
      { text: 'Someone sitting close', tags: ['warmth', 'nostalgia'], response: 'There are moments when closeness feels like its own place.' },
      { text: 'I would not pause anything', tags: ['control', 'mystery'], response: 'That is allowed too. Not every moment needs to be preserved to have mattered.' }
    ], input: true, placeholder: 'What would you keep a little longer?'
  },
  {
    id: 'q21', chapter: 6, number: '21', title: 'A memory can remain yours without becoming an explanation.',
    prompt: 'Is a memory still yours if you never explain what it meant?',
    prediction: 'I think some memories are safer when they are allowed to remain partly unnamed.',
    options: [
      { text: 'Yes', tags: ['mystery', 'control'], response: 'Good. Then one memory can stay safe here.' },
      { text: 'No', tags: ['directness'], response: 'Maybe meaning becomes clearer when it is shared. Or maybe sharing only gives it a new shape.' },
      { text: 'It depends who is asking', tags: ['mystery', 'warmth'], response: 'That is the answer of someone who knows that trust changes a question.' },
      { text: 'Some memories should stay private', tags: ['control', 'mystery'], response: 'I agree. Knowing someone means leaving room for what they do not explain.' },
      { text: 'I do not know', tags: ['mystery'], response: 'You do not have to know yet.' }
    ], input: true, placeholder: 'What do you think?'
  },
  {
    id: 'q22', chapter: 6, number: '22', title: 'There was a swing.',
    prompt: 'I remember a swing. I remember how close the world felt to disappearing. No crowd. No noise. No distance that mattered. Just a quiet place, a little movement, and the feeling that I wanted to stay there longer. What do you want to do with this memory?',
    prediction: 'I remember what I felt. The rest is still yours to name—or leave unnamed.',
    options: [
      { text: 'Keep the memory quiet', tags: ['mystery', 'warmth'], response: 'Then it can stay safe here.' },
      { text: 'Tell me what you think it meant', tags: ['directness', 'nostalgia'], response: 'I am listening. You do not have to make the answer larger than it is.' },
      { text: 'Continue without answering', tags: ['control', 'mystery'], response: 'You do not have to turn every meaningful moment into an explanation.' }
    ], input: true, placeholder: 'You can write about it, rename it, or leave it unnamed...'
  },
  {
    id: 'q23', chapter: 7, number: '23', title: 'You may have guessed who has been speaking.',
    prompt: 'What do you think I noticed first?',
    prediction: 'The first detail was never only one detail. But I think your character and your eyes made it impossible not to pay attention.',
    options: [
      { text: 'Your eyes', tags: ['eyes', 'observation', 'warmth'], response: 'Yes. Your eyes made it difficult to pretend I was not paying attention.' },
      { text: 'Your character', tags: ['observation', 'warmth'], response: 'Yes. Before anything beautiful becomes familiar, character is what remains.' },
      { text: 'Your smile', tags: ['warmth'], response: 'That was part of it too. The first detail was never only one detail.' },
      { text: 'The way you carried yourself', tags: ['observation'], response: 'You had a way of entering a room that made the room feel different.' },
      { text: 'The way you spoke', tags: ['voice', 'warmth'], response: 'Your voice became familiar before I had decided it would.' },
      { text: 'Something you still have not told me', tags: ['mystery', 'surprise'], response: 'That is a very good way to keep the last answer yours.' }
    ], input: true, placeholder: 'What do you think it was?'
  },
  {
    id: 'q24', chapter: 7, number: '24', title: 'One last freedom.',
    prompt: 'Before this ends, is there anything you want to say, hide, change, correct, or leave as a mystery?',
    prediction: 'You do not have to give the story a perfect ending. You can leave one door closed.',
    options: [
      { text: 'I want to say something', tags: ['directness', 'warmth'], response: 'I am listening.' },
      { text: 'I want to leave it mysterious', tags: ['mystery'], response: 'Then the mystery has done its job.' },
      { text: 'I want to correct your prediction', tags: ['surprise', 'playfulness'], response: 'Good. I would rather know where I was wrong than be praised for guessing.' },
      { text: 'I have nothing to add', tags: ['control', 'mystery'], response: 'That is also an answer.' }
    ], input: true, placeholder: 'Say something, hide something, or leave it quiet...'
  }
];

const state = {
  screen: 'opening',
  runSeed: Math.floor(Math.random() * 2147483647),
  questionIndex: -1,
  answered: false,
  traits: {
    warmth: 0,
    playfulness: 0,
    directness: 0,
    mystery: 0,
    surprise: 0,
    control: 0,
    observation: 0,
    nostalgia: 0
  },
  answers: []
};

const scenePanel = document.getElementById('scenePanel');
const sceneContent = document.getElementById('sceneContent');
const chapterStatus = document.getElementById('chapterStatus');
const progressDots = document.getElementById('progressDots');
const progressNote = document.getElementById('progressNote');
const resetButton = document.getElementById('resetButton');

// Keep interaction reliable when the page is opened directly from a file,
// where some browser previews can be inconsistent with freshly-rendered listeners.
sceneContent.addEventListener('click', (event) => {
  const target = event.target instanceof Element ? event.target : null;
  if (!target) return;

  const suggestion = target.closest('[data-suggestion]');
  if (suggestion && state.screen === 'question') {
    const input = document.getElementById('textAnswer');
    if (input) {
      input.value = suggestion.dataset.suggestion || '';
      input.focus();
    }
  }
});

window.answerOption = function answerOption(optionIndex) {
  if (state.screen !== 'question') return;
  const question = questions[state.questionIndex];
  const option = question?.options[Number(optionIndex)];
  if (question && option) submitAnswer(question, option.text, option);
};

window.submitOwnWords = function submitOwnWords() {
  if (state.screen !== 'question') return;
  const question = questions[state.questionIndex];
  const input = document.getElementById('textAnswer');
  if (question && input) submitAnswer(question, input.value.trim(), null);
};

function escapeText(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function setChapter(chapter) {
  chapterStatus.textContent = CHAPTERS[chapter] || CHAPTERS[0];
  const current = Math.max(0, Math.min(7, chapter));
  progressDots.innerHTML = Array.from({ length: 8 }, (_, index) =>
    `<span class="progress-dot ${index === current ? 'active' : ''}" aria-hidden="true"></span>`
  ).join('');
  progressNote.textContent = current === 0 ? 'Take your time with it.' : 'There are no wrong answers.';
}

function changeScene(render) {
  scenePanel.classList.add('is-changing');
  window.setTimeout(() => {
    render();
    scenePanel.classList.remove('is-changing');
  }, 220);
}

function renderOpening() {
  state.screen = 'opening';
  setChapter(0);
  sceneContent.className = 'scene-content is-centered';
  sceneContent.innerHTML = `
    <div class="intro-symbol" aria-hidden="true">✦</div>
    <p class="eyebrow">A small autumn experiment</p>
    <h1 class="title">After the Rain,<br><em>Before the Words</em></h1>
    <p class="copy">Some things are easy to remember.</p>
    <p class="copy">Coffee.<br>Rain.<br>Blue.</p>
    <p class="copy">Some things are harder to explain.</p>
    <p class="copy">A look that lasts half a second too long.<br>A sentence that becomes silence.<br>A detail someone notices and never mentions.</p>
    <div class="scene-divider"></div>
    <p class="copy">This is not a test.<br>You cannot fail it.</p>
    <button class="primary-button" id="startButton" type="button">Let me make one</button>
  `;
  document.getElementById('startButton').addEventListener('click', renderRule);
}

function renderRule() {
  state.screen = 'rule';
  setChapter(0);
  sceneContent.className = 'scene-content is-centered';
  sceneContent.innerHTML = `
    <p class="eyebrow">Before we begin</p>
    <h1 class="title">You are allowed<br>to <em>surprise me.</em></h1>
    <p class="copy">I may guess wrong.</p>
    <p class="copy">You are allowed to choose the answer I expect.<br>You are allowed to type something I did not think of.<br>You are even allowed to leave a question unanswered.</p>
    <p class="copy">The only rule is that you remain yourself.</p>
    <button class="primary-button" id="continueButton" type="button">Continue</button>
  `;
  document.getElementById('continueButton').addEventListener('click', () => renderQuestion(0));
}

function renderQuestion(index) {
  const question = questions[index];
  if (!question) {
    renderEnding();
    return;
  }

  state.screen = 'question';
  state.questionIndex = index;
  state.answered = false;
  setChapter(question.chapter);
  sceneContent.className = 'scene-content';

  const options = question.options.map((option, optionIndex) => `
    <button class="option-button" type="button" data-option-index="${optionIndex}" onclick="window.answerOption(${optionIndex})">
      <span class="option-letter">${String.fromCharCode(65 + optionIndex)}</span>${escapeText(option.text)}
    </button>
  `).join('');

  const suggestions = (question.suggestions || []).map((suggestion) =>
    `<button class="suggestion" type="button" data-suggestion="${escapeText(suggestion)}">${escapeText(suggestion)}</button>`
  ).join('');

  sceneContent.innerHTML = `
    <div class="question-header">
      <p class="question-number">${escapeText(question.number)} / 24</p>
      <h1 class="question-title">${escapeText(question.title)}</h1>
      <p class="copy">${escapeText(question.prompt)}</p>
    </div>
    ${question.prediction ? `<div class="prediction">${escapeText(question.prediction)}</div>` : ''}
    <div class="answer-area">
      <div class="option-list">${options}</div>
      ${question.input ? `
        <textarea class="text-answer" id="textAnswer" maxlength="800" placeholder="${escapeText(question.placeholder || 'Write your own answer...')}"></textarea>
        ${suggestions ? `<div class="suggestion-row" aria-label="Answer suggestions">${suggestions}</div>` : ''}
        <button class="text-submit" id="textSubmit" type="button" onclick="window.submitOwnWords()">Use my own words</button>
      ` : ''}
      <div id="responseArea"></div>
    </div>
  `;

}

function addTraits(tags) {
  tags.forEach((tag) => {
    if (Object.prototype.hasOwnProperty.call(state.traits, tag)) {
      state.traits[tag] += 1;
    }
  });
}

function removeTraits(tags) {
  tags.forEach((tag) => {
    if (Object.prototype.hasOwnProperty.call(state.traits, tag)) {
      state.traits[tag] = Math.max(0, state.traits[tag] - 1);
    }
  });
}

function recordAnswer(question, answerText, tags, source) {
  const existingIndex = state.answers.findIndex((answer) => answer.id === question.id);
  const entry = { id: question.id, number: question.number, prompt: question.prompt, text: answerText, tags, source };
  if (existingIndex >= 0) {
    removeTraits(state.answers[existingIndex].tags || []);
    state.answers[existingIndex] = entry;
  } else {
    state.answers.push(entry);
  }
  addTraits(tags);
}

function classifyText(text) {
  const value = text.toLowerCase();
  const tags = [];
  const groups = {
    coffee: ['coffee', 'cafe', 'latte', 'caffeine'],
    rain: ['rain', 'raining', 'storm', 'grey sky', 'gray sky'],
    blue: ['blue', 'navy', 'azure'],
    eyes: ['eye', 'eyes', 'glasses', 'look', 'stare'],
    voice: ['voice', 'speak', 'sound', 'talk'],
    warmth: ['warm', 'safe', 'close', 'hug', 'love', 'care', 'comfort', 'trust', 'trusted'],
    nostalgia: ['memory', 'remember', 'past', 'college', 'swing', 'years ago'],
    mystery: ['quiet', 'silence', 'secret', 'hide', 'unknown', 'private', 'nothing', 'think'],
    surprise: ['surprise', 'unexpected', 'different', 'wrong', 'tease', 'joke'],
    control: ['plan', 'know', 'prepare', 'safe', 'facts', 'control'],
    playfulness: ['funny', 'laugh', 'joke', 'tease', 'trouble'],
    directness: ['say', 'tell', 'honest', 'direct', 'admit']
  };

  Object.entries(groups).forEach(([tag, words]) => {
    if (words.some((word) => value.includes(word))) tags.push(tag);
  });
  return [...new Set(tags)];
}

function textResponse(question, text) {
  const categories = classifyText(text);

  if (!text) {
    return 'You do not have to answer every question. Some things are allowed to remain quiet.';
  }

  if (question.id === 'q7') {
    if (categories.includes('playfulness')) return 'The frog has accepted the assignment. It is refusing to provide further comment.';
    if (categories.includes('warmth') || categories.includes('directness')) return 'Small sentence. Possibly not a small meaning.';
    return 'You gave the sentence somewhere to exist without forcing it to become a conversation. That counts for something.';
  }

  if (question.id === 'q22') {
    if (categories.includes('nostalgia') || categories.includes('warmth')) return 'I am listening. You do not have to make the answer larger than it is.';
    return 'You do not have to turn every meaningful moment into an explanation.';
  }

  if (categories.includes('surprise') || categories.includes('playfulness')) {
    return 'That answer was not in my list. Which is slightly inconvenient for my theory of you. I like it better this way.';
  }

  if (categories.includes('mystery')) {
    return 'You left a door open without telling me whether I am allowed to enter. I will respect that.';
  }

  if (categories.includes('warmth') || categories.includes('nostalgia')) {
    return 'I did not prepare for those exact words. I am glad you chose them.';
  }

  if (categories.length === 0) {
    return 'I do not have a prepared interpretation for that. I could pretend I understand it perfectly, but that would ruin the point. I will let your answer remain yours.';
  }

  return 'I will remember that as one possibility, not a permanent translation.';
}

function disableAnswerControls() {
  sceneContent.querySelectorAll('button.option-button, button.suggestion, button.text-submit, textarea').forEach((control) => {
    control.disabled = true;
  });
}

function submitAnswer(question, text, option) {
  const answerText = text || '';
  const tags = option ? (option.tags || []) : classifyText(answerText);
  const source = option ? 'choice' : 'typed';
  recordAnswer(question, answerText, tags, source);
  state.answered = true;

  const response = option?.response || textResponse(question, answerText);
  const responseArea = document.getElementById('responseArea');
  responseArea.innerHTML = `
    <div class="response-card">
      <span class="response-label">The narrator replies</span>
      ${escapeText(response)}
      <small class="response-edit-note">You can still change your answer before continuing.</small>
    </div>
    <button class="primary-button continue-button" id="nextQuestion" type="button">${question.id === 'q24' ? 'Open the ending' : 'Continue'}</button>
  `;

  document.getElementById('nextQuestion').addEventListener('click', () => {
    if (question.id === 'q24') {
      renderEnding();
      return;
    }
    renderQuestion(nextQuestionIndex(question.id));
  });
}

function questionIndexFor(id) {
  return questions.findIndex((question) => question.id === id);
}

function nextQuestionIndex(id) {
  const route = {
    q1: 'q2',
    q2: 'q3',
    q4: 'q5',
    q5: 'q6',
    q6: 'q7',
    q8: 'q10',
    q9: 'q10',
    q10: 'q11',
    q11: 'q12',
    q12: 'q13',
    q13: 'q14',
    q14: 'q15',
    q15: 'q16',
    q17: 'q18',
    q18: 'q19',
    q19: 'q20',
    q20: 'q21',
    q21: 'q22',
    q22: 'q23',
    q23: 'q24'
  };

  // A control-heavy route explores planning and worst-case thinking.
  // A playful or surprising route moves more quickly toward the unsaid things.
  if (id === 'q3') {
    const control = state.traits.control;
    const playful = state.traits.playfulness + state.traits.surprise;
    return questionIndexFor(control >= playful ? 'q4' : 'q6');
  }

  // A more mysterious or direct reader gets a different version of the silence chapter.
  if (id === 'q7') {
    return questionIndexFor(state.traits.directness > state.traits.mystery ? 'q8' : 'q9');
  }

  // If she has already revealed a lot through observation, skip the extra blue prompt.
  if (id === 'q14' && state.traits.observation >= 3) {
    return questionIndexFor('q16');
  }

  // The playful route receives the knife-emoji tease; the quieter route receives the song memory.
  if (id === 'q16') {
    return questionIndexFor(state.traits.playfulness + state.traits.surprise >= 3 ? 'q17' : 'q18');
  }

  return questionIndexFor(route[id] || 'q24');
}

function strongestTrait() {
  return Object.entries(state.traits).sort((a, b) => b[1] - a[1])[0]?.[0] || 'warmth';
}

function countAnswerTags() {
  const counts = {};
  state.answers.forEach((answer) => {
    (answer.tags || []).forEach((tag) => {
      counts[tag] = (counts[tag] || 0) + 1;
    });
  });
  return counts;
}

function getAnswerPathIndex() {
  const signature = state.answers.map((answer) =>
    `${answer.id}:${answer.source}:${answer.text}:${(answer.tags || []).join(',')}`
  ).join('|');
  let hash = 17;
  for (let index = 0; index < signature.length; index += 1) {
    hash = (hash * 31 + signature.charCodeAt(index)) >>> 0;
  }
  return hash % 12;
}

function buildEndingProfile() {
  const answerCount = state.answers.length;
  const typedCount = state.answers.filter((answer) => answer.source === 'typed').length;
  const typedRatio = answerCount ? typedCount / answerCount : 0;
  const sourceMode = typedRatio >= .7 ? 'typed-heavy' : typedRatio <= .3 ? 'choice-heavy' : 'mixed';
  const tags = countAnswerTags();
  const memoryThreads = ['coffee', 'rain', 'eyes', 'blue', 'warmth', 'nostalgia'];
  const memoryThread = memoryThreads.sort((a, b) => (tags[b] || 0) - (tags[a] || 0))[0];
  const surpriseScore = state.traits.surprise + state.traits.playfulness;
  const surpriseLevel = surpriseScore >= 6 ? 'high' : surpriseScore >= 3 ? 'medium' : 'low';
  const closingIndex = (typedCount + state.traits.directness + state.traits.observation) % 4;

  return {
    answerCount,
    typedCount,
    sourceMode,
    dominantTrait: strongestTrait(),
    memoryThread,
    surpriseLevel,
    closingIndex,
    pathIndex: getAnswerPathIndex()
  };
}

function composeEnding() {
  const profile = buildEndingProfile();
  const sourceLines = {
    'typed-heavy': 'You did not let the choices speak for you. You gave the story your own words, which is more interesting than being easy to predict.',
    mixed: 'Some answers you chose. Some you built yourself. That feels like the most accurate way to know anyone.',
    'choice-heavy': 'You let me predict you sometimes. You also left enough room to remind me that a choice is never the whole person.'
  };
  const traitLines = {
    warmth: 'There is a warmth in the way you answer, even when you hide it behind something smaller.',
    playfulness: 'You left a little trouble in the margins. I noticed. I will pretend not to use it against you.',
    directness: 'When you chose directness, the quiet story became clearer for a moment.',
    mystery: 'You kept a few doors closed. I liked that. Not everything beautiful needs to be entered.',
    surprise: 'You changed the shape of my predictions more than once. I was hoping you would.',
    control: 'You looked for the edges before stepping into the unknown. I remembered that too.',
    observation: 'You read the details carefully. Perhaps that is why you noticed what I was doing.',
    nostalgia: 'You answered like someone who understands that the past can still be close.'
  };
  const memoryLines = {
    coffee: 'Coffee kept returning, as if it had its own place in the story.',
    rain: 'Rain kept making the world quieter around you.',
    eyes: 'The eyes remained the least obedient part of the mystery.',
    blue: 'Blue kept appearing like a small piece of evening that belonged only to you.',
    warmth: 'Warmth kept finding its way into answers that tried to stay guarded.',
    nostalgia: 'Memory kept turning up where the questions seemed to be asking about something else.'
  };
  const surpriseLines = {
    low: 'You did not need to surprise me to make the story worth remembering.',
    medium: 'You surprised me just enough to keep the answer from becoming too comfortable.',
    high: 'You made a sport of escaping the prediction. I should have expected that from you.'
  };
  const pathLines = [
    'You began with the quiet answer, then slowly let the story come closer.',
    'You kept choosing the beautiful answer, even when the safe one was waiting.',
    'You gave the predictions room to speak, then corrected them when they became too confident.',
    'You made the rain, the coffee, and the silence part of the same private weather.',
    'You answered like someone who notices the question beneath the question.',
    'You left enough mystery behind you to make the ending feel earned.',
    'You trusted a few prepared choices, but your own words changed the shape of everything.',
    'You treated every prediction like a challenge disguised as an invitation.',
    'You kept the story close to the window, where the rain could hide what needed hiding.',
    'You made the unexpected answers feel more like discoveries than interruptions.',
    'You answered carefully, then surprised me in the places that mattered most.',
    'You did not follow a straight line. That may be the most accurate answer about you.'
  ];
  const closings = [
    'Some moments do not need to become explanations. Some are already beautiful because they happened.',
    'You do not have to say everything for something to be real. Sometimes the quiet part is the part I remember most.',
    'I will keep the details, even the ones you tried to hide inside a joke.',
    'The best answer was never the one I predicted. It was the one you chose to give me.'
  ];
  const eyebrows = [
    'The answer kept changing',
    'A note left by the rain',
    'The part I remember',
    'After all your little answers',
    'A quiet result',
    'Before the words disappear'
  ];
  const titles = [
    'You left<br><em>more than clues.</em>',
    'The rain kept<br><em>your answer.</em>',
    'I was watching<br><em>the pattern.</em>',
    'You made the<br><em>ending yours.</em>',
    'Somehow, you<br><em>surprised me.</em>',
    'This is what<br><em>you left behind.</em>',
    'The quiet part<br><em>was yours.</em>',
    'You answered<br><em>in your own way.</em>'
  ];
  const openings = [
    'You did not give me one answer. You gave me a trail.',
    'The first answer was only the door. The rest of the story was in how you moved through it.',
    'I thought I was predicting choices. I was really watching the spaces between them.',
    'A rainy evening can make small decisions feel like evidence.',
    'The interesting part was never whether I guessed correctly.',
    'You kept leaving small pieces of yourself beside the questions.',
    'The answers changed, but the feeling underneath them kept returning.',
    'Somewhere between the coffee and the quiet, the test stopped being a test.',
    'I prepared questions. You kept making them more personal.',
    'You were allowed to surprise me, and you used that permission carefully.',
    'The story became different every time you changed your mind.',
    'There was no single correct path here. There was only the one you made.'
  ];
  const identityLines = [
    'I was not reading your mind. I was remembering you.',
    'I was not trying to know everything. I was trying to remember the details that mattered to me.',
    'I did not need every answer to recognize the person answering.',
    'The mystery was only a way of hiding something simple: I pay attention to you.',
    'I knew some of the details before this began. You gave the rest their meaning.',
    'The narrator was never as mysterious as it pretended to be.',
    'I was there in the questions, even when I let the rain speak first.',
    'The final answer was not hidden in one word. It was hidden in the whole path.'
  ];
  const signatures = [
    '— from the person who remembers the small things',
    '— from the person by the other side of the rain',
    '— from someone who has been paying attention',
    '— from the person who still remembers that swing',
    '— from someone who likes the way your answers change',
    '— from the person who left the blue butterfly there'
  ];
  const identityIndex = (profile.pathIndex + profile.typedCount + profile.closingIndex) % identityLines.length;
  const signatureIndex = (profile.pathIndex + (profile.dominantTrait.length || 0)) % signatures.length;

  return {
    ...profile,
    eyebrow: eyebrows[profile.pathIndex % eyebrows.length],
    title: titles[(profile.pathIndex + profile.closingIndex) % titles.length],
    opening: openings[profile.pathIndex],
    sourceLine: sourceLines[profile.sourceMode],
    identityLine: identityLines[identityIndex],
    traitLine: traitLines[profile.dominantTrait],
    memoryLine: memoryLines[profile.memoryThread],
    surpriseLine: surpriseLines[profile.surpriseLevel],
    pathLine: pathLines[profile.pathIndex],
    closing: closings[profile.closingIndex],
    signature: signatures[signatureIndex]
  };
}

function composeDistinctEnding() {
  const profile = buildEndingProfile();
  const routeSignals = [
    'You started by choosing shelter, then let the questions come closer.',
    'You preferred the lovely possibility, even while the sensible one waited nearby.',
    'You allowed the prediction to speak, then quietly reserved the right to disagree.',
    'You made weather, warmth, and silence feel like parts of one private room.',
    'You answered as though every question had a second question underneath it.',
    'You protected a little of yourself, which made the revealed parts feel more precious.',
    'Your own words altered the shape of the prepared story.',
    'You met each prediction with the kind of mischief that refuses to be cornered.',
    'You kept returning to the window, where rain could soften the edges of everything.',
    'You turned unexpected choices into discoveries instead of detours.',
    'You were careful at first and unexpectedly brave where it counted.',
    'You did not walk in a straight line; you made the route feel more like you.'
  ];
  const memoryDetails = {
    coffee: 'coffee kept appearing like a familiar companion that never needed an introduction',
    rain: 'the rain kept lowering its voice around the things you did not say',
    eyes: 'your eyes remained more honest than any answer could manage',
    blue: 'blue kept leaving its quiet colour along the edges of the evening',
    warmth: 'warmth kept finding the spaces where your teasing had left the door open',
    nostalgia: 'the past kept visiting without asking permission to stay'
  };
  const traitDetails = {
    warmth: 'the tenderness you hide inside ordinary gestures',
    playfulness: 'the mischief you use to keep sincerity from feeling exposed',
    directness: 'the rare moments when you let the sentence stand without a disguise',
    mystery: 'the private rooms you do not open merely because someone knocks',
    surprise: 'the impulse that changes the expected answer just to keep it alive',
    control: 'the care you take before allowing the unknown across the threshold',
    observation: 'the attention that notices what most people pass without seeing',
    nostalgia: 'the way an old moment can remain present without becoming heavy'
  };
  const surpriseDetails = {
    low: 'You did not need to perform a surprise; your quieter decisions already had character.',
    medium: 'You moved the furniture of the prediction just enough to make me look again.',
    high: 'You kept slipping past the obvious answer with a smile I can almost imagine.'
  };
  const voices = [
    {
      eyebrow: 'Rainwater on the window',
      title: 'The weather<br><em>remembered you.</em>',
      opening: 'The room became quieter as your answers gathered, the way a room changes when rain reaches the glass.',
      source: {
        'typed-heavy': 'You left the prepared doors open and walked through with your own language.',
        mixed: 'You borrowed a few doors from me, then built the rooms beyond them yourself.',
        'choice-heavy': 'You accepted some invitations, but never surrendered the right to choose the scenery.'
      },
      identity: 'I was never trying to trap you inside a prediction; I was leaving small lamps along a path I already wanted to walk with you.',
      pathLead: 'Your route through the questions said this:',
      memoryLead: 'Along the way,',
      traitLead: 'What stayed with me was',
      surpriseLead: 'And then, as if the evening needed one more turn,',
      closings: [
        'Some feelings are clearest when they are allowed to remain gentle.',
        'I would rather remember the atmosphere you made than pretend it can be reduced to one answer.',
        'The rain can keep the rest of the sentence for now.'
      ],
      signature: '— from the person who kept the window open'
    },
    {
      eyebrow: 'The coffee was keeping score',
      title: 'You made the<br><em>prediction work for it.</em>',
      opening: 'I prepared a neat little theory. You brought coffee, sarcasm, and several reasons for it to reconsider itself.',
      source: {
        'typed-heavy': 'You answered in a voice no list of options could imitate, which seems very like you.',
        mixed: 'You let the choices start the conversation and then added the parts they could not carry.',
        'choice-heavy': 'You played along with the menu, though I noticed you kept one hand on the edit button.'
      },
      identity: 'The mystery was only a playful disguise for something less complicated: I notice you because I love noticing you.',
      pathLead: 'Your particular kind of logic looked like this:',
      memoryLead: 'Naturally,',
      traitLead: 'The detail I could not ignore was',
      surpriseLead: 'For the record,',
      closings: [
        'If the coffee is cold by now, I am blaming the conversation.',
        'You remain gloriously difficult to summarise, and I mean that as a compliment.',
        'The answer may be finished, but I am still amused by the way you got here.'
      ],
      signature: '— from the person who would still make you another coffee'
    },
    {
      eyebrow: 'The swing outside time',
      title: 'For a moment,<br><em>nothing else was there.</em>',
      opening: 'There are moments that do not feel like memories while they are happening. They feel like the whole world has gone quiet to make room for two people.',
      source: {
        'typed-heavy': 'Your own words carried the weight here; they made the quiet world larger than the choices.',
        mixed: 'You gave me both the answer I expected and the answer only you could have written.',
        'choice-heavy': 'Even when you chose from the offered paths, the person choosing was unmistakably you.'
      },
      identity: 'I did not need to claim that I knew everything about you. I only wanted you to feel how carefully I have held the things I do know.',
      pathLead: 'The shape of your journey was:',
      memoryLead: 'Somewhere beneath it all,',
      traitLead: 'I kept returning to',
      surpriseLead: 'You also reminded me that',
      closings: [
        'That is enough for one evening: a little rain, a little warmth, and a memory that still knows where to find me.',
        'I will leave the quiet world intact. It was beautiful because neither of us had to explain it.',
        'Somewhere, that swing is still moving slightly, long after the rest of the world has gone home.'
      ],
      signature: '— from the person who remembers the swing'
    },
    {
      eyebrow: 'A blue hour in autumn',
      title: 'Your answers<br><em>changed colour.</em>',
      opening: 'At first the questions looked simple. Then each answer added another shade, until the evening had become something I could not have planned.',
      source: {
        'typed-heavy': 'You let your language change the palette completely; no prediction could have painted it for you.',
        mixed: 'You blended my guesses with your own words until the border between them disappeared.',
        'choice-heavy': 'You chose from the colours I placed there, but you decided what they meant.'
      },
      identity: 'The narrator was never a machine looking for certainty. It was me, hiding a familiar feeling inside a little autumn theatre.',
      pathLead: 'The colour of your route was:',
      memoryLead: 'All the while,',
      traitLead: 'The shade that kept returning was',
      surpriseLead: 'Even the changes had their own beauty;',
      closings: [
        'I hope the last colour you carry from this is the warm one.',
        'Not every beautiful thing needs a name before it can be felt.',
        'The page ends here, but the blue hour never really belonged to the page.'
      ],
      signature: '— from the person who kept looking for your colour'
    },
    {
      eyebrow: 'The quiet investigator',
      title: 'You left clues<br><em>and kept the key.</em>',
      opening: 'You answered like someone who knows that every apparent choice has a private reason standing just behind it.',
      source: {
        'typed-heavy': 'The typed answers were the strongest evidence: you would rather be understood in your own grammar.',
        mixed: 'The evidence was mixed, which is a polite way of saying you gave me clues and then rearranged them.',
        'choice-heavy': 'The selections formed a pattern, though the pattern never had permission to become a verdict.'
      },
      identity: 'I was not uncovering a secret you owed me. I was paying respect to the details you had already trusted me with.',
      pathLead: 'The evidence from your route suggests:',
      memoryLead: 'One recurring clue was that',
      traitLead: 'The strongest signal was',
      surpriseLead: 'The case became especially interesting when',
      closings: [
        'Case closed for tonight. The important evidence will remain safely with me.',
        'A good mystery does not disappear when it is solved; it becomes a reason to look more closely next time.',
        'I will not ask the locked door to open. I am grateful that you showed me the house.'
      ],
      signature: '— from the person who reads the clues kindly'
    },
    {
      eyebrow: 'A sentence the frog kept',
      title: 'You almost said it,<br><em>then made it beautiful.</em>',
      opening: 'Some answers arrived wearing jokes. Others hid behind a pause. I recognised the disguise, but I liked the way you wore it.',
      source: {
        'typed-heavy': 'Your words escaped the options and made their own little trouble, which is the most entertaining kind.',
        mixed: 'You let the choices speak first, then let your own voice have the last mischievous adjustment.',
        'choice-heavy': 'You chose the offered sentences with suspicious confidence, as though the frog had approved them in advance.'
      },
      identity: 'Behind the misdirection was something sincere: I know you are more than the expression you let the room see.',
      pathLead: 'Your trail of mischief went like this:',
      memoryLead: 'As usual,',
      traitLead: 'The part of you that kept showing through was',
      surpriseLead: 'Then you did the thing I should have predicted:',
      closings: [
        'Keep the unsaid sentence if you want. I like knowing it is safe somewhere.',
        'You can blame the frog for the missing words; I will know better than to argue with it.',
        'There is no need to confess the punchline. Your eyes probably gave it away anyway.'
      ],
      signature: '— from the person who listens when the frog goes quiet'
    },
    {
      eyebrow: 'The last page was warm',
      title: 'You were never<br><em>just an answer.</em>',
      opening: 'By the end, the questions had stopped asking who you were and started showing me how many ways you can be yourself.',
      source: {
        'typed-heavy': 'You chose freedom over convenience, and the story became unmistakably yours.',
        mixed: 'You moved between freedom and invitation, which is a more honest portrait than either one alone.',
        'choice-heavy': 'You accepted the structure without becoming predictable inside it.'
      },
      identity: 'I knew this was a game, but the care behind it was real. The clues came from years of seeing you, not from any trick.',
      pathLead: 'The answer your route gave me was:',
      memoryLead: 'What I will carry from it is that',
      traitLead: 'The most recognisable part of you was',
      surpriseLead: 'Still, you refused to make it too easy when',
      closings: [
        'Thank you for giving the questions a little piece of your evening.',
        'I do not need a perfect ending. I only wanted a true one, and this felt true to you.',
        'Whatever you answered, you made the evening feel more like a place than a test.'
      ],
      signature: '— from the person who loves the whole unfinished story'
    }
  ];
  const voiceIndex = (state.runSeed + profile.pathIndex + profile.typedCount * 3 + profile.closingIndex) % voices.length;
  const voice = voices[voiceIndex];

  return {
    ...profile,
    eyebrow: voice.eyebrow,
    title: voice.title,
    opening: voice.opening,
    sourceLine: voice.source[profile.sourceMode],
    pathLine: `${voice.pathLead} ${routeSignals[profile.pathIndex]}`,
    memoryLine: `${voice.memoryLead} ${memoryDetails[profile.memoryThread]}.`,
    identityLine: voice.identity,
    traitLine: `${voice.traitLead} ${traitDetails[profile.dominantTrait]}.`,
    surpriseLine: `${voice.surpriseLead} ${surpriseDetails[profile.surpriseLevel]}`,
    closing: voice.closings[profile.closingIndex % voice.closings.length],
    signature: voice.signature,
    voiceIndex
  };
}

function renderEnding() {
  state.screen = 'ending';
  setChapter(7);
  const ending = composeDistinctEnding();

  sceneContent.className = 'scene-content is-centered';
  sceneContent.innerHTML = `
    <div class="ending-symbols" aria-hidden="true">✦ 𓆩 𓆪 ✦</div>
    <p class="eyebrow">${escapeText(ending.eyebrow)}</p>
    <h1 class="title">${ending.title}</h1>
    <div class="scene-divider"></div>
    <p class="copy final-copy">${escapeText(ending.opening)}</p>
    <p class="copy final-copy">${escapeText(ending.sourceLine)}</p>
    <p class="copy final-copy">${escapeText(ending.pathLine)}</p>
    <p class="copy final-copy">${escapeText(ending.memoryLine)}</p>
    <p class="copy final-copy quiet-line">${escapeText(ending.identityLine)}</p>
    <p class="copy final-copy">${escapeText(ending.traitLine)}</p>
    <p class="copy final-copy">${escapeText(ending.surpriseLine)}</p>
    <p class="copy final-copy">${escapeText(ending.closing)}</p>
    <div class="scene-divider"></div>
    <p class="signature">${escapeText(ending.signature)}</p>
    <div class="ending-actions">
      <button class="primary-button" id="homeButton" type="button">Take me home</button>
    </div>
    <p class="share-status" id="shareStatus" aria-live="polite"></p>
  `;
  document.getElementById('homeButton').addEventListener('click', takeMeHome);
}

function buildShareText() {
  const ending = composeDistinctEnding();
  const lines = [
    'After the Rain, Before the Words',
    'A completed run',
    '',
    ...state.answers.map((answer) => `${answer.number}. ${answer.text || '(left unanswered)'} [${answer.source === 'typed' ? 'own words' : 'choice'}]`),
    '',
    `Typed answers: ${ending.typedCount}/${ending.answerCount}`,
    `Ending profile: ${ending.sourceMode}, ${ending.surpriseLevel} surprise, ${ending.dominantTrait} tone`,
    `Path reflection: ${ending.pathLine}`,
    '',
    'This report was prepared by the Take me home action. The site does not send answers automatically.'
  ];
  return lines.join('\\n');
}

async function takeMeHome() {
  const status = document.getElementById('shareStatus');
  const text = buildShareText();
  let message = 'Nothing was sent.';

  try {
    if (navigator.share) {
      await navigator.share({
        title: 'After the Rain, Before the Words — answers',
        text
      });
      message = 'The answer report was shared.';
    } else if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      message = 'The answers were copied. You can send them to me.';
    } else {
      const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'autumn-mind-reading-answers.txt';
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
      message = 'The answer report was downloaded.';
    }
  } catch (error) {
    message = 'Sharing was cancelled. Nothing was sent.';
  }

  if (status) status.textContent = `${message} Returning to the beginning...`;
  window.setTimeout(resetExperience, 700);
}

function resetExperience() {
  state.screen = 'opening';
  state.runSeed = Math.floor(Math.random() * 2147483647);
  state.questionIndex = -1;
  state.answered = false;
  state.answers = [];
  Object.keys(state.traits).forEach((key) => { state.traits[key] = 0; });
  changeScene(renderOpening);
}

resetButton.addEventListener('click', () => {
  if (state.screen === 'opening') return;
  const confirmed = window.confirm('Start the story again? Your answers from this visit will be cleared.');
  if (confirmed) resetExperience();
});

renderOpening();
