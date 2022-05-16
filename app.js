  const departMinutes = 1
  let temps = departMinutes * 29
  

var timer = setInterval(() => {
  if(temps==0){
    stop();
  }
  const minutes = Math.floor(temps / 60)
  let secondes = temps % 60
  secondes = secondes < 10 ? "0" + secondes : secondes
  document.getElementById('root').innerHTML = `${minutes}:${secondes}`

  temps = temps <= 0 ? 0 : temps - 1;
}, 1000)

function stop(){
  document.getElementById('needle').classList.remove('start');
  clearInterval(timer);
}

