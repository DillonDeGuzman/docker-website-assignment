class WebsiteController {
  constructor() {
    this.messageElement = document.getElementById("message");
    this.deployButton = document.getElementById("deployButton");
    this.resetButton = document.getElementById("resetButton");

    this.defaultMessage = "The website is running.";
    this.deploymentMessage =
      "Success! The Docker website has been deployed.";

    this.addButtonEvents();
  }

  addButtonEvents() {
    this.deployButton.addEventListener("click", () => {
      this.showDeploymentMessage();
    });

    this.resetButton.addEventListener("click", () => {
      this.resetMessage();
    });
  }

  showDeploymentMessage() {
    this.messageElement.textContent = this.deploymentMessage;
  }

  resetMessage() {
    this.messageElement.textContent = this.defaultMessage;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new WebsiteController();
});