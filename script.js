// ВРЕМЕННЫЕ КНОПКИ ДЛЯ ПЕРЕКЛЮЧЕНИЯ МЕЖДУ ЭКРАНАМИ
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.add('hidden'));
  document.getElementById(id).classList.remove('hidden');
}

// Нажатие на строку кода
document.querySelectorAll('#code-block .code-line').forEach(line => {
  line.addEventListener('click', () => {

    document.querySelectorAll('#code-block .code-line').forEach(l => {
      l.classList.remove('correct', 'wrong');
    });

    const feedback = document.getElementById('feedback');
    const nextBtn = document.getElementById('next-btn');
    feedback.classList.remove('hidden', 'correct', 'wrong');

    if (line.dataset.line === '2') {
      // Правильная строка
      line.classList.add('correct');
      feedback.classList.add('correct');
      feedback.innerHTML = '<b>✓ Правильно!</b> В строке 2 стоит <code>=</code> (присваивание) вместо <code>==</code> (сравнение).';
    } else {
      // Неправильная строка
      line.classList.add('wrong');
      feedback.classList.add('wrong');
      feedback.innerHTML = '<b>✗ Неправильно.</b> Ошибка в строке 2: <code>=</code> вместо <code>==</code>.';
    }

    nextBtn.classList.remove('hidden');
  });
});