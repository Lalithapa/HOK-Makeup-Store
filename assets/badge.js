class BadgeRotator {
    constructor(containerSelector, interval = 5000) {
      this.container = document.querySelector(containerSelector);
      if (!this.container) {
        console.error(`Container "${containerSelector}" not found.`);
        return;
      }
  
      this.badges = this.container.querySelectorAll(".custom_badges");
      this.currentIndex = 0;
      this.interval = interval;
      this.timer = null;
  
      // Initialize the rotator
      this.init();
    }
  
    init() {
      // Ensure there are badges to rotate
      if (this.badges.length === 0) {
        console.error("No badges found inside the container.");
        return;
      }
  
      // Start the rotation
      this.startRotation();
    }
  
    startRotation() {
      // Show the first badge immediately
      this.showBadge(this.currentIndex);
  
      // Start the loop
      this.timer = setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.badges.length;
        this.showBadge(this.currentIndex);
      }, this.interval);
    }
  
    showBadge(index) {
      this.badges.forEach((badge, idx) => {
        badge.style.opacity = idx === index ? "1" : "0";
      });
    }
  
    stopRotation() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
    }
  }