const textInput = document.getElementById("text");
const speakBtn = document.getElementById("speakBtn");

speakBtn.addEventListener("click", () => {
  const text = textInput.value.trim();

  if (!text) {
    alert("Please enter some text first!");
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
});