const homeScreen = document.getElementById("homeScreen");
const decisionScreen = document.getElementById("decisionScreen");
const showDecisionButton = document.getElementById("showDecision");
const acknowledgeButton = document.getElementById("acknowledge");

function showScreen(screenToShow) {
  const showHome = screenToShow === "home";
  homeScreen.hidden = !showHome;
  decisionScreen.hidden = showHome;
  homeScreen.classList.toggle("active", showHome);
  decisionScreen.classList.toggle("active", !showHome);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

showDecisionButton.addEventListener("click", () => showScreen("decision"));
acknowledgeButton.addEventListener("click", () => showScreen("home"));
