import React, {useEffect,useState} from 'react'
// import data from '../data.json'
import {BsBookmarkHeart, BsBookmarkHeartFill, BsFillSkipBackwardFill, BsFillSuitHeartFill, BsPauseCircle, BsPlayCircle, BsSkipForwardFill, BsSuitHeart, BsSuitHeartFill} from "react-icons/bs"
import {FiRepeat, FiShuffle} from 'react-icons/fi' 
import {RiSkipBackFill, RiSkipForwardFill} from "react-icons/ri"



export default function Player() {
const [like,setLike]=useState(0)
const [play,setPlay]=useState(true)
const [id,setId]=useState('0')



var data=[
  {
      "title":"Duniya by Arijit singh",
      "img":"./images/1.jpg",
      "mp3":"../songs/1.mp3",
      "id":"1"
  },
  {
      "title":"i Like Me Better",
      "img":"./images/2.jpg",
      "mp3":"./songs/2.mp3",
      "id":"2"
  },
  {
      "title":"Mast Magan",
      "img":"./images/6.jpg",
      "mp3":"./songs/7.mp3",
      "id":"3"
  },
  {
      "title":"Jaan Ban Gaye",
      "img":"./images/3.jpg",
      "mp3":"./songs/3.mp3",
      "id":"4"
  },
  {
      "title":"Kinna Sonna",
      "img":"./images/11.jpg",
      "mp3":"./songs/5.mp3",
      "id":"5"
  },
  {
      "title":"Teri Hogaiyaan",
      "img":"./images/10.jpg",
      "mp3":"./songs/11.mp3",
      "id":"6"
  },
  {
      "title":"Kesariyaa",
      "img":"./images/4.jpg",
      "mp3":"./songs/4.mp3",
      "id":"7"
  },
  {
      "title":"Love Me Like You do",
      "img":"./images/5.jpg",
      "mp3":"./songs/6.mp3",
      "id":"8"
  },
  {
      "title":"Pheli Dafa",
      "img":"./images/7.jpg",
      "mp3":"./songs/8.mp3",
      "id":"9"
  },
  {
      "title":"Rait Zara si",
      "img":"./images/8.jpg",
      "mp3":"./songs/10.mp3",
      "id":"11"
  },
  {
      "title":"Ranjhanna",
      "img":"./images/9.jpg",
      "mp3":"./songs/9.mp3",
      "id":"10"
  }
]



useEffect(()=>{
  document.getElementById(id).classList.add("active");
  document.title=data[parseInt(id)].title;
  handlePlay()
},[id])



const handleForward =()=>{
  // setPid(id);
  if(id==data.length-1){
    var list=document.getElementById(id).classList;
list.remove("active")
setPlay(false)
    setId('0')}
else{
  var i=parseInt(id);
  ++i;
i=i.toString()
var list=document.getElementById(id).classList;
list.remove("active")
setPlay(false)
  setId(i)
}}

const handleBackward=()=>{
  if(id==='0'){
    var list=document.getElementById('0').classList;
list.remove("active")
var i=data.length-1
i=i.toString()

setPlay(false)
    setId(i)}
else{
  var i=parseInt(id);
  --i;
i=i.toString()
var list=document.getElementById(id).classList;
list.remove("active")
setPlay(false)
  setId(i)
}
}



const handlePlay=()=>{
  if(play){document.getElementById("play").style.display='block'
  document.getElementById("pause").style.display='none'
  document.getElementById("play2").style.display='block'
  document.getElementById("pause2").style.display='none'
  var audio=document.getElementById('audio')
  setPlay(!play)
  audio.pause()
  }
  else{
  document.getElementById("play").style.display='none'
  document.getElementById("pause").style.display='block'
  document.getElementById("play2").style.display='none'
  document.getElementById("pause2").style.display='block'
  var audio=document.getElementById('audio')
  setPlay(!play)
  audio.play()
  
 
  }}

const handleLike=()=>{
if(like){document.getElementById("normal").style.display='block'
document.getElementById("fill").style.display='none'
setLike(0)
}
else{
document.getElementById("normal").style.display='none'
document.getElementById("fill").style.display='block'
setLike(1)
}}



const handleIndex= (event)=>{
  var list=document.getElementById(id).classList;
  const cd=event.currentTarget.id;
  if(id==cd){
    setPlay(!play)
    handlePlay()

  }
  else{
  list.remove("active")
  setId(cd);
  setPlay(false);}
}


  return (
    <div className=' body' style={{position:"relative"}}>
      <img width='65%' id='bgImage' src={ data[id].img} ></img>
  <div className='main flex' >


          <div className='coverArtBox flex '>
          <div className='coverArt' id='art' style={{backgroundImage: `url(${data[id].img})`}}>
                {/* <img className='art' src={img} width='100%' height='100%'/> */}
                 {/* <BsBookmarkHeart color='white' id='normal' className='heart' size="40px" onClick={handleLike}  fontWeight='bold'/>   
                         <BsBookmarkHeartFill color='white' id='fill' className='heart' size="40px"  onClick={handleLike} /> */}
                        <BsSuitHeartFill color='white' id='normal' className='heart' size="25px" onClick={handleLike}  fontWeight='bold'/>
                        <BsSuitHeart color='white' id='fill' className='heart' size="25px"  onClick={handleLike} />
           </div>
                 <div className='coverArtActionbar flex'>
                 {/* <BsFillSkipBackwardFill size='40px'/> */}
                 <FiShuffle  id='shuffle' size='30px'/>
                 <RiSkipBackFill id='backward' size='30px' onClick={handleBackward}/>
                  <BsPlayCircle id='play' size='45px' onClick={handlePlay}/>
                  <BsPauseCircle id='pause' size='45px' display='none' onClick={handlePlay} />
                  {/* <BsSkipForwardFill size='40px' /> */}
                  <RiSkipForwardFill id='forward' onClick={handleForward}  size='30px'/>
                  <FiRepeat id='repeat' size='30px'/>
                 </div>
          </div>


         <div className='playlist flex'>
              <div className='playlistHeaderBox flex'>
              <span id='albumTitle'>Rudra's Playlist ❤</span>
              <span id='albumDesc'>Songs</span>
              </div>
              <div className='playlistItems flex'>
              {data.map((e,i)=>(
              <div key={e.id} className = 'playlistItem flex' id={i} onClick={handleIndex} >
                
                {parseInt(id)==i ?                  
                <div className='songPlay flex'>
                 <BsPauseCircle id='pause2' display={'none'} size='25px'/>
                 <BsPlayCircle id='play2' size='25px'/>
                 </div>:
                 <div id="songNo">{i+1}</div>
                  }
                 {/* <img className='playlistItemIcon'   width={'30px'} height={'30px'}  src={e.img} alt='song icon'/> */}
               <div className="songName flex">{e.title}</div>
              
                 {play && parseInt(id)==i && <div className='songGif flex'> <img src='./images/play3.gif' height="100px"></img></div>}
               </div>
              ))
                }
              </div>

         </div>
<div>
<audio src={data[id].mp3} id="audio" autoPlay />

</div>

    </div>
    </div>

  )
}
