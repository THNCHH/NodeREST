function digitalClock(seconds) {
    const hours = Math.floor(seconds / 3600) % 24;
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formatTime = (time) => time.toString().padStart(2, '0');

    return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(remainingSeconds)}`;
}


console.log(digitalClock(5025)); 
console.log(digitalClock(61201)); 
console.log(digitalClock(87000)); 