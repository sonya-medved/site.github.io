function showPage(page) {
    const pages = ['home', 'test', 'exercises'];
    pages.forEach(p => {
        document.querySelector(`.${p}`).style.display = p === page ? 'block' : 'none';
    });
}

function showResult(level) {
    const resultText = document.getElementById("resultText");
    if (level === 'easy') {
        resultText.innerHTML = "Для начинающих подойдут легкие виды спорта, такие как йога, плавание или прогулки.";
    } else if (level === 'intermediate') {
        resultText.innerHTML = "Для любителей подойдут бег, велосипедные прогулки или силовые тренировки.";
    } else {
        resultText.innerHTML = "Для продвинутых подойдут интенсивные тренировки, такие как футбольные и баскетбольные матчи, тренировки с тяжестями.";
    }
}

function showLevel(level) {
    const levels = ['novice', 'intermediate', 'advanced'];
    levels.forEach(l => {
        document.getElementById(l).style.display = l === level ? 'block' : 'none';
    });
}

// Show home page by default
showPage('home');
