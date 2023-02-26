const time = document.querySelector('.time');
const date = new Date();
const currentTime = date.toLocaleTimeString();


const dates = document.querySelector('.date');
const options = {weekday: 'long', month: 'long', day: 'numeric'};
const currentDate = date.toLocaleDateString('en-En', options);

const greeting = document.querySelector('.greeting');
const hours = date.getHours();
const name = document.querySelector('.name');
const body = document.querySelector('body');

let bgNum = getRandomNum(1, 20) 
let timeOfDay = getTimeOfDay()

const slideNext = document.querySelector('.slide-next');
const slidePrev = document.querySelector('.slide-prev');


// function showtime

function showTime() {
    const time = document.querySelector('.time');
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    
    time.textContent = currentTime;
    setTimeout(showTime, 1000)
    showDate()
    showGreeting()
    
  }
  showTime()
// function showdate
 
function showDate() {
    const time = document.querySelector('.time');
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    dates.textContent = currentDate;
  }

//   greetings
 
 

  function showGreeting() {
       getTimeOfDay()
        greeting. textContent = `Good ${getTimeOfDay()}`
  }

  function getTimeOfDay(){
    if(hours >= 6 && hours < 12){
       return "morning" 
    }else if(hours >= 12 && hours < 18){
        return "afternoon"
    }else if(hours >= 18 && hours < 24){
        return "evening"
    }else if(hours >= 0 && hours < 6){
        return "night"
    }
  }



  function setLocalStorage() {
    localStorage.setItem('name', name.value);
  }
  window.addEventListener('beforeunload', setLocalStorage)

  function getLocalStorage() {
    if(localStorage.getItem('name')) {
      name.value = localStorage.getItem('name');
    }
  }
  window.addEventListener('load', getLocalStorage)

    function getRandomNum(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()* (max - min)) + min
  }

  function setBg() {
     timeOfDay = getTimeOfDay()
     bgNum  = getRandomNum(1, 20) 
    if(bgNum < 10){
        bgNum = `0${bgNum}`
    }
   
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/AnyStepanyan/momentumimages/main/Desktop/momentum%20images/${timeOfDay}/${bgNum}.WebP')`;

  }

  setBg()



    
 

  slideNext.addEventListener('click', function(){
   
    
   if(bgNum >= 9 && bgNum < 20){
       bgNum = Number(bgNum) + 1
       body.style.backgroundImage = `url('https://raw.githubusercontent.com/AnyStepanyan/momentumimages/main/Desktop/momentum%20images/${timeOfDay}/${bgNum}.WebP')`;

   }else if(bgNum < 9){
    bgNum = `0${Number(bgNum[1]) +1}`
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/AnyStepanyan/momentumimages/main/Desktop/momentum%20images/${timeOfDay}/${bgNum}.WebP')`;
}else if(bgNum === 20){
  bgNum = '01'
  body.style.backgroundImage = `url('https://raw.githubusercontent.com/AnyStepanyan/momentumimages/main/Desktop/momentum%20images/${timeOfDay}/${bgNum}.WebP')`;

}


  

   

  })


  slidePrev.addEventListener('click', function(){
    if(bgNum > 10 && bgNum < 21){
      bgNum = Number(bgNum) -1
      body.style.backgroundImage = `url('https://raw.githubusercontent.com/AnyStepanyan/momentumimages/main/Desktop/momentum%20images/${timeOfDay}/${bgNum}.WebP')`;
    }else if(bgNum < 10 && bgNum > 01){
      bgNum = `0${Number(bgNum[1]) - 1}`
      body.style.backgroundImage = `url('https://raw.githubusercontent.com/AnyStepanyan/momentumimages/main/Desktop/momentum%20images/${timeOfDay}/${bgNum}.WebP')`;
  }else if(bgNum == 10){
    bgNum = '09'
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/AnyStepanyan/momentumimages/main/Desktop/momentum%20images/${timeOfDay}/${bgNum}.WebP')`;

  }else if(bgNum == 01){
    bgNum = 20
    body.style.backgroundImage = `url('https://raw.githubusercontent.com/AnyStepanyan/momentumimages/main/Desktop/momentum%20images/${timeOfDay}/${bgNum}.WebP')`;
  
  }
  
 
 
  })

  function load() {  
    const img = new Image();
    img.src =`https://raw.githubusercontent.com/AnyStepanyan/momentumimages/main/Desktop/momentum%20images/${timeOfDay}/${bgNum}.WebP`;

    img.onload = () => {      
      body.style.backgroundImage = `url('https://raw.githubusercontent.com/AnyStepanyan/momentumimages/main/Desktop/momentum%20images/${timeOfDay}/${bgNum}.WebP')`;
    }; 
  }
  load()
    console.log(bgNum )

   

    let quotes = [
      {
        "text": "Пишите код так, как будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете",
        "author": "Стив Макконнелл"
      },
      {
        "text": "Сложность программы растет до тех пор, пока не превысит способности программиста",
        "author": "Артур Блох. Законы Мэрфи"
      },
        {
        "text": "Ходить по воде и разрабатывать программы, следуя ТЗ, очень просто… если они заморожены",
        "author": "И. Берард"
      },
      {
        "text": "Что разум человека может постигнуть и во что он может поверить, того он способен достичь",
        "author": "Наполеон Хилл, журналист и писатель"
      },
      {
        "text": "Стремитесь не к успеху, а к ценностям, которые он дает​",
        "author": "Альберт Эйнштейн"
      },
      {
        "text": "Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других",
        "author": "Флоренс Найтингейл"
      },
      {
        "text": "За свою карьеру я пропустил более 9000 бросков, проиграл почти 300 игр",
        "author": "Майкл Джордан"
      },
      {
        "text": "Сложнее всего начать действовать, все остальное зависит только от упорства",
        "author": "Амелия Эрхарт"
      },
      {
        "text": "Надо любить жизнь больше, чем смысл жизни",
        "author": "Федор Достоевский"
      },
      {
        "text": "Жизнь - это то, что с тобой происходит, пока ты строишь планы",
        "author": "Джон Леннон"
      },
      {
        "text": "Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно",
        "author": "Альберт Эйнштейн"
      },
      {
        "text": "Через 20 лет вы будете больше разочарованы теми вещами, которые вы не делали, чем теми, которые вы сделали",
        "author": "Марк Твен"
      },
      {
        "text": "Начинать всегда стоит с того, что сеет сомнения",
        "author": "Борис Стругацкий"
      },
    ]  

    const quote = document.querySelector(".quote")
    const author = document.querySelector(".author")
    const changeQuote = document.querySelector(".change-quote")



     let quotesVal = getRandomNum(1, 13) 
  
      quote.textContent = quotes[quotesVal]['text']
      author.textContent = quotes[quotesVal]['author']
    
      changeQuote.addEventListener('click', function(){
        let quotesVal = getRandomNum(1, 13) 
  
      quote.textContent = quotes[quotesVal]['text']
      author.textContent = quotes[quotesVal]['author']
      })




      
      
      
      //audioplayer

      const btnPlay = document.querySelector(".play")
      const btnPause = document.querySelector(".pause")
      const audioSong = document.querySelector(".audio")
      const audioDuration = document.querySelector(".audio-duration") 
      const btnPrev = document.querySelector(".play-prev")   
      const btnNext = document.querySelector(".play-next")
      const songName = document.querySelector(".song-name")
     
      

      function toggleBtn() {
        btnPlay.classList.toggle('pause');
      }
      
   
      
      let playlist = [
        'Aqua Caelestis',
        'Ennio Morricone',
        'River Flows In You',
        'Summer Wind',
    ];

    let treck; 
 
    window.onload = function() {
    treck = 0; 
  
   }

   function switchTreck (numTreck) {
    audioSong.src = './assets/sounds/' + playlist[numTreck] +'.mp3';
    audioSong.currentTime = 0;
    audioSong.play();
    songName.textContent = playlist[numTreck]
   
}
let currentAudioTime = document.querySelector(".currentAudioTime")
let totalAudioDuration = document.querySelector(".totalAudioDuration")


function update_time(current_time, audio_duration){
  currentAudioTime.textContent = format_time(current_time);
  totalAudioDuration.textContent = format_time(audio_duration);
}

function format_time(audio_duration){
  let sec
  window.onload = function(){
    sec = '0'
  }
  let min 
   sec =  Math.floor( audio_duration );
   min =  Math.floor( sec / 60 );
   min = min >= 10 ? min : '0' + min;
   sec = Math.floor( sec % 60 );
   sec = sec >= 10 ? sec : '0' + sec;
   return min + ":" + sec ;
 }



 const songList1 = document.querySelector(".songList1")
 const songList2 = document.querySelector(".songList2")
 const songList3 = document.querySelector(".songList3")
 const songList4 = document.querySelector(".songList4")



 



btnPlay.addEventListener("click", function() {

  let audioPlay
  toggleBtn()
  if(audioSong.paused) {
    audioSong.play();
}
else {
  audioSong.pause();
  clearInterval(audioPlay)
}

let audioTime = audioSong.currentTime;
let audioLength = audioSong.duration
update_time(audioTime, audioLength)
  audioPlay = setInterval(function() {
    let audioTime = Math.round(audioSong.currentTime);
    let audioLength = Math.round(audioSong.duration)
      audioDuration.style.width = (audioTime * 100) / audioLength + '%';
      if (audioTime == audioLength && treck < 3) {
          treck++; // 
          switchTreck(treck); 
      } else if (audioTime == audioLength && treck >= 3) {
          treck = 0; 
          switchTreck(treck); 
      }
  }, 10)
});
btnPrev.addEventListener("click", function() {

  btnPlay.classList.remove('pause');

  if (treck > 0) {
      treck--; 
      switchTreck(treck); 
  } else { 
      treck = 3; 
      switchTreck(treck); 
  }
});

btnNext.addEventListener("click", function() {
  btnPlay.classList.remove('pause');

  if (treck < 3) { 
      treck++; 
      switchTreck(treck); 
  } else { 
      treck = 0; 
      switchTreck(treck);
  }
});
const muteButton = document.querySelector(".muteButton")
const soundVolume = document.querySelector(".soundVolume")
      
muteButton.onclick = function() {
  if (audioSong.muted === true) {
    muteButton.style.opacity = '1'
    audioSong.muted = false;
  } else {
    muteButton.style.opacity = '0.3'
    audioSong.muted = true;
  }
}

let currentVolume = 0.8

audioSong.volume = currentVolume

soundVolume.addEventListener('input', () => {
  const volume = parseFloat(soundVolume.value)

  audioSong.volume = currentVolume = volume
  currentVolume = volume

})



//weather 

const weatherIcon = document.querySelector('.weather-icon');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const weatherError = document.querySelector('.weather-error');
let city = document.querySelector('.city');


// weatherError.textContent = 'Error! City not found.'


async function getWeather() {  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=%D0%9C%D0%B8%D0%BD%D1%81%D0%BA&lang=en&appid=bc20aad2ba6c601d306cbbe559a8604b&units=metric`;
  const res = await fetch(url);
  const data = await res.json(); 
  weatherIcon.classList.add(`owf-${data.weather[0].id}`);
  temperature.textContent = `${Math.round(data.main.temp)}°C`;
  weatherDescription.textContent = data.weather[0].description;
  humidity.textContent = `Humidity: ${data.main.humidity}%`;
  wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;

}
getWeather()

city.addEventListener('change', function(){
  async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);

    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;

    console.log(data.weather[0].id, data.weather[0].description, data.main.temp);

  }
  getWeather()
  window.addEventListener('beforeunload', setLocalStorage)

  window.addEventListener('load', getLocalStorage)
})


function setLocalStorage() {
  localStorage.setItem('city', city.value);
  async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);

    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;

    console.log(data.weather[0].id, data.weather[0].description, data.main.temp);

  }
  getWeather()
}
window.addEventListener('beforeunload', setLocalStorage)


function getLocalStorage() {
  if(localStorage.getItem('city')) {
    city.value = localStorage.getItem('city');
  }
  async function getWeather() {  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=08f2a575dda978b9c539199e54df03b0&units=metric`;
    const res = await fetch(url);
    const data = await res.json(); 
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);

    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind speed: ${Math.round(data.wind.speed)} m/s`;

    console.log(data.weather[0].id, data.weather[0].description, data.main.temp);

  }
  getWeather()
}
window.addEventListener('load', getLocalStorage)