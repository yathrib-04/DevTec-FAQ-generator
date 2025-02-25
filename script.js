document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', function () {
        let currentlyActive = document.querySelector('.faq-answer[style="display: block;"]');
        if (currentlyActive && currentlyActive !== this.nextElementSibling) {
            currentlyActive.style.display = 'none';
        }
        let answer = this.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
