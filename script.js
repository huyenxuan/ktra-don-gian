// đếm ngược thời gian
let timeInSeconds = 15 * 60 - 1;
const countdownElement = document.getElementById('time');
const actionButton = document.getElementById('actionButton');
let intervalId;
let isCounting = false;

function updateCountdown() {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    countdownElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timeInSeconds--;

    if (timeInSeconds < 0) {
        clearInterval(intervalId);
        countdownElement.textContent = "Hết thời gian!";
        calculateScore();
    }
}
function startCountdown() {
    isCounting = true;
    intervalId = setInterval(updateCountdown, 1000);
    actionButton.textContent = "Gửi bài";
    createQuestions();
}

// data
document.getElementById('scores').style.display = 'none';
var questionsData = [
    { question: "1. 5 + 9 = ", answer: 14 },
    { question: "2. 2 + 8 = ", answer: 10 },
    { question: "3. 7 + 49 = ", answer: 56 },
    { question: "4. 98 + 26 = ", answer: 124 },
    { question: "5. 23 + 23 = ", answer: 46 },
    { question: "6. 98 + 67 = ", answer: 165 },
    { question: "7. 79 + 44 = ", answer: 123 },
    { question: "8. 29 + 148 = ", answer: 177 },
    { question: "9. 63 + 958 = ", answer: 1021 },
    { question: "10. 996 - 123 = ", answer: 873 },
    { question: "11. 9 - 12 = ", answer: -3 },
    { question: "12. 7 - 4 = ", answer: 3 },
    { question: "13. 34 - 9 = ", answer: 25 },
    { question: "14. 58 - 8 = ", answer: 50 },
    { question: "15. 234 - 55 = ", answer: 179 },
    { question: "16. 879 - 565 = ", answer: 314 },
    { question: "17. 78 - 8 = ", answer: 70 },
    { question: "18. 8 - 12 = ", answer: -4 },
    { question: "19. 60 - 76 = ", answer: -16 },
    { question: "20. 23 - 188 = ", answer: -165 },
    { question: "21. 3 x 5 = ", answer: 15 },
    { question: "22. 2 x 9 = ", answer: 18 },
    { question: "23. 15 x 3 = ", answer: 45 },
    { question: "24. 8 x 30 = ", answer: 240 },
    { question: "25. 50  x 5 = ", answer: 250 },
    { question: "26. 38 x 10 = ", answer: 380 },
    { question: "27. 80 x 8 = ", answer: 640 },
    { question: "28. 12 x 12 = ", answer: 144 },
    { question: "29. 15 x 15 = ", answer: 225 },
    { question: "30. 36 x 12 = ", answer: 432 },
    { question: "31. 48 : 4 = ", answer: 12 },
    { question: "32. 48 : 8 = ", answer: 6 },
    { question: "33. 45 : 5 = ", answer: 9 },
    { question: "34. 175 : 5 = ", answer: 35 },
    { question: "35. 84 : 12 = ", answer: 7 },
    { question: "36. 88 : 22 = ", answer: 4 },
    { question: "37. 150 : 3 = ", answer: 50 },
    { question: "38. 121 : 11 = ", answer: 11 },
    { question: "39. 270 : 18 = ", answer: 15 },
    { question: "40. 880 : 40 = ", answer: 20 },
    { question: "41. 2 + 4 x 5 = ", answer: 22 },
    { question: "42. 0 x 1 x 2 x 3 x 4 x 5 = ", answer: 0 },
    { question: "43. 1 + 3 + 5 + 7 + 9 = ", answer: 25 },
    { question: "44. -4 x 9 : 3 = ", answer: -12 },
    { question: "45. 1.2 x 1.2 = ", answer: 1.44 },
    { question: "46. 1/4 + 1/4 = ", answer: 0.5 },
    { question: "47. 1/8 : 1/8 = ", answer: 1 },
    { question: "48. 36 : 18 : 2 : 1 = ", answer: 1 },
    { question: "49. 2 + 6 : 2 + 5 = ", answer: 10 },
    { question: "50. 1 + 3 x 2 + 5 = ", answer: 12 },    
];

function createQuestions() {
    var questionsContainer = document.getElementById('questions');
    questionsData.forEach(function (data, index) {
        var questionElement = document.createElement("p");
        questionElement.style.height = '10px'
        questionElement.style.marginTop = '5px'
        questionElement.textContent = data.question + " ";
        var inputElement = document.createElement("input");
        inputElement.style.width = '20px';
        inputElement.style.marginRight = '30px'
        inputElement.setAttribute("type", "text");
        inputElement.setAttribute("id", "answer" + index);
        questionsContainer.appendChild(questionElement);
        questionElement.appendChild(inputElement);
    });
    questionsContainer.style.display = 'flex';
}

// tính điểm
function calculateScore() {
    var score = 0;
    document.getElementById('scores').style.display = 'block';
    questionsData.forEach(function (data, index) {
        var answer = parseInt(document.getElementById("answer" + index).value);
        if (answer === data.answer) {
            score += 0.2;
        }
    });
    var roundedScore = score.toFixed(1);
    document.getElementById('scores').textContent = roundedScore;
    setTimeout(alert("Điểm của bạn là: "+roundedScore), 3000);
}

function handleActionButtonClick() {
    if (!isCounting) {
        startCountdown();
        document.getElementById('title').style.display = 'none';
    } else {
        // Thực hiện các hành động cần thiết khi nút "Gửi bài" được bấm
        clearInterval(intervalId);
        actionButton.disabled = true;
        calculateScore();
    }
}

// Bắt sự kiện click trên nút bắt đầu hoặc gửi bài
actionButton.addEventListener('click', handleActionButtonClick);

