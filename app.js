let songs = [
  {
    songName: "Backbone",
    url: "./songs/Backbone.mp3",
    img: "./images/backbone.jpg",
  },
  {
    songName: "Lamberghini",
    url: "./songs/Lamberghini.mp3",
    img: "./images/lamberghini.jpg",
  },
  {
    songName: "Let me love you",
    url: "./songs/Let me love you.mp3",
    img: "./images/let me love you.jpg",
  },
  {
    songName: "Nisthuri Mori",
    url: "./songs/Nisthuri Mori.mp3",
    img: "./images/nisturimori.jpg",
  },
  {
    songName: "Pani Da Rang",
    url: "./songs/Pani Da Rang.mp3",
    img: "./images/pani da rang.jpg",
  },
  {
    songName: "Pani Da Rang",
    url: "./songs/Pani Da Rang.mp3",
    img: "./images/pani da rang.jpg",
  },
  {
    songName: "Pani Da Rang",
    url: "./songs/Pani Da Rang.mp3",
    img: "./images/pani da rang.jpg",
  },
  {
    songName: "Pani Da Rang",
    url: "./songs/Pani Da Rang.mp3",
    img: "./images/pani da rang.jpg",
  },
  {
    songName: "Pani Da Rang",
    url: "./songs/Pani Da Rang.mp3",
    img: "./images/pani da rang.jpg",
  },
];

let allSongs = document.querySelector("#all-songs");
let poster = document.querySelector("#left");

let play = document.querySelector("#play");
let backward = document.querySelector("#backward");
let forward = document.querySelector("#forward");

let audio = new Audio();

let selectedSong = 0;

function allMusic() {
  let folder = "";
  songs.forEach(function (song, idx) {
    folder += `<div class="song-card" id=${idx}>
   <div class="part1">
     <img
       src="${song.img}"
       alt=""
     />
     <h2>${song.songName}</h2>
   </div>
   <h6>4:20</h6>
 </div>`;
  });

  console.log(songs);
  allSongs.innerHTML = folder;
  audio.src = songs[selectedSong].url;

  poster.style.backgroundImage = `url(${songs[selectedSong].img})`;
}

allMusic();

allSongs.addEventListener("click", function (e) {
  selectedSong = e.target.id;
  allMusic();
  play.innerHTML = `<i class="ri-pause-fill"></i>`;
  flag = 1;
  audio.play();
});

let flag = 0;
play.addEventListener("click", function () {
  if (flag === 0) {
    play.innerHTML = `<i class="ri-pause-fill"></i>`;
    allMusic();
    audio.play();
    flag = 1;
  } else {
    play.innerHTML = `<i class="ri-play-fill"></i>`;
    allMusic();
    audio.pause();
    flag = 0;
  }
});

forward.addEventListener("click", function () {
  if (selectedSong < songs.length - 1) {
    selectedSong++;
    allMusic();
    audio.play();
  } else {
    forward.style.opacity = 0.3;
  }
});

backward.addEventListener("click", function () {
  if (selectedSong > 0) {
    selectedSong--;
    allMusic();
    audio.play();
  } else {
    backward.style.opacity = 0.3;
  }
});
