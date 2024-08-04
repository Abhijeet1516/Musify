console.log("Welcome to  musify");

// Initialize the variable

let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems =Array.from(document.getElementsByClassName('songItem'));








let songs=[
    {songName:"HAll of Fame" ,filePath:"2.mp3", coverPath:"1.jpg"},
    {songName:"salaam" ,filePath:"3.mp3", coverPath:"3.jpg"},
    {songName:"salaam" ,filePath:"4.mp3", coverPath:"4.jpg"},
    {songName:"salaam" ,filePath:"5.mp3", coverPath:"5.jpg"},
    {songName:"salaam" ,filePath:"6.mp3", coverPath:"6.jpg"},
    {songName:"salaam" ,filePath:"7.mp3", coverPath:"7.jpg"},
    {songName:"salaam" ,filePath:"2.mp3", coverPath:"5.jpg"},
    {songName:"salaam" ,filePath:"3.mp3", coverPath:"6.jpg"},
    {songName:"salaam" ,filePath:"4.mp3", coverPath:"7.jpg"},
    
    {songName:"salaam" ,filePath:"5.mp3", coverPath:"5.jpg"},
    
    


    
]

songItems.forEach((element ,i)=>{
    
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})



//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity= 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity= 0;

    }
})




//Listen to event

audioElement.addEventListener('timeupdate', ()=>{
    
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value = progress;


})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime =myProgressBar.value *audioElement.duration/100;
})

const makeAllPlays=()=>{
   
    Array.from(document.getElementsByClassName("songitemPlay")).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');

    })
}



Array.from(document.getElementsByClassName('songitemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
      
       songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src =`${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

        
    })
})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0}
        else{
            songIndex +=1;
        }
        audioElement.src =`${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0}
        else{
            songIndex -=1;
        }
        audioElement.src =`${songIndex}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime =0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })