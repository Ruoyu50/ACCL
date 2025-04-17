const questions = [
    {
      text: 'How is the weather today？',
      type: 'text',
      key: 'weather'
    },
    {
      text: 'What music do you like？',
      type: 'text',
      key: 'encourager'
    },
    {
      text: 'If you are tired today, what do you want to do to take a rest？',
      type: 'text',
      key: 'words'
    },
    {
      text: 'Where do you want to go today？',
      type: 'text',
      key: 'symbol'
    },
    {
      text: 'What is you favorite number？',
      type: 'number',
      key: 'score'
    },
    {
      text: 'If it is the end of the day, what would you do in the next hour？',
      type: 'text',
      key: 'challenge'
    },
    {
      text: 'Say something about such a day！',
      type: 'text',
      key: 'comfort'
    },
    {
      text: 'Write down one thing you want to do for today',
      type: 'text',
      key: 'action'
    }
  ];
  
  let current = 0;
  let answers = {};
  
  const container = document.getElementById('quiz-container');
  
  function renderQuestion() {
    if (current >= questions.length) {
      localStorage.setItem('restzoneAnswers', JSON.stringify(answers));
      location.href = '03.html';
      return;
    }
  
    const q = questions[current];
    container.innerHTML = `
      <h2>${q.text}</h2>
      <input type="${q.type}" id="answerInput" />
      <br><br>
      <button onclick="saveAnswer()">Next</button>
    `;
  }
  
  function saveAnswer() {
    const input = document.getElementById('answerInput');
    if (!input.value) return;
    answers[questions[current].key] = input.value;
    current++;
    renderQuestion();
  }
  
  if (container) renderQuestion();
  