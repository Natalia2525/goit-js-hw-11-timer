const refs = {
  days: document.querySelector('[data-value = "days"]'),
  hours: document.querySelector('[data-value = "hours"]'),
  mins: document.querySelector('[data-value = "mins"]'),
  secs: document.querySelector('[data-value = "secs"]'),
};

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = targetDate;
    this.timerRef = selector;
    setInterval(this.getTime, 1000);
  }
  getTime = () => {
    const now = Date.now();
    const time = this.targetDate - now;

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    refs.days.textContent = days;

    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    refs.hours.textContent = hours;

    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    refs.mins.textContent = mins;

    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    refs.secs.textContent = secs;

    function pad(value) {
      return String(value).padStart(2, '0');
    }
  };
}

new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Feb 01, 2021'),
});
