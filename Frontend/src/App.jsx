import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import main from './assets/main img.jpg'
import laptop from './assets/laptop.jpg'
import notes from './assets/notes.jpg'
import axios from 'axios'

function App() {
  async function send(){
    showsuccess(true)
    var sendMail=await axios.post('http://10.0.0.65:1000/',{
      username:document.getElementsByClassName('jasmeh')[0].value+document.getElementsByClassName('jasmeh')[0].value,
      email:document.getElementById('email').value,
      message:document.getElementsByTagName('textarea')[0].value
    })

  }
  var [bline,setbline]=useState('63.2%')
  var [cline,setcline]=useState()
  var [skills,showskills]=useState(true)
  var [edu,showedu]=useState(false)
  var [success,showsuccess]=useState(false)
  return (
    <>
   <section id="navbar">
    <h1 id='name'>
     <span>Jasmeh</span> Sidhu
    </h1>
    <hr id='hr1' style={{ left:bline}}></hr>
    <div id='links'>
      <a onClick={(e)=>{setbline(e.target.getBoundingClientRect().left,window.location.href='#home')}}>Home</a>
      <a  onClick={(e)=>{setbline(e.target.getBoundingClientRect().left, window.location.href='#about')}} >About</a>
      <a onClick={(e)=>{setbline(e.target.getBoundingClientRect().left),window.location.href='#projects'}}>Projects</a>
      <a onClick={(e)=>{setbline(e.target.getBoundingClientRect().left),window.location.href='#services'}}>Services</a>
      <a onClick={(e)=>{setbline(e.target.getBoundingClientRect().left,window.location.href='#contact')}}>Contact</a>
    </div>
    </section>
    <section id='home'>
    <div id='imgbox'><img id='jasmehpic' src={main}></img></div>
    <div id='maininfo'>
      <h1 id='hey'>Hey, It's</h1>
      <h1 id='mainame'>Jasmeh Sidhu</h1>
      <h1 id='designation'>I am a <span> Web developer</span> </h1>
      <p id='paragraph'>I'm a web architech based in Toronto, Ontario who is passionate about designing websites that are sleek, responsive, and user-friendly.</p>
      <button onClick={()=>{window.open('https://docs.google.com/document/d/1l93bERacZEh4d2n4w1MMzHBDEHnRD01wyguiQPyQX10/export?format=pdf')}} id='cv'>Download CV</button>
    </div>
    </section>
    <section id='about'>
      <div id='skillsinfo'>
        <div id='imgfor'><img id='laptop' src={laptop}></img>
        </div>
        <div id='info'>
        <h1 id='skillst'>
        Who am I?
      </h1>
      <p id='abp'>Skilled in online and app development, with a focus on React, React Native, and current front-end and back-end technologies.  Proficient in developing responsive websites and cross-platform mobile apps, with a heavy emphasis on performance and user experience.  Currently enrolled at Turner Fenton Secondary School (TFSS) in Brampton.
        .</p>
        <div id='links2'>
          <a onClick={(e)=>{setcline(e.target.getBoundingClientRect().left),showskills(true),showedu(false)}}>Skills</a>
          <a onClick={(e)=>{setcline(e.target.getBoundingClientRect().left, showskills(false),showedu(true))}}>Education</a>
        </div>
     {skills?    <div id='skills'>
       <div id='webdevs'>
        <h1 class='top' id='webdev'>Web Dev</h1>
        <h1 class='bottom' id='webdevr'>Full Stack Website Development in MERN Stack</h1>
       </div>
       <div id='appdevs'>
        <h1 class='top' id='webdev'>App Dev</h1>
        <h1 class='bottom' id='webdevr'>Full Stack Application Development using React Native</h1>
       </div>
       <div id='photo'>
        <h1 class='top' id='webdev'>Photoshop</h1>
        <h1 class='bottom' id='webdevr'>Image editing and manipulation with photoshop</h1>
       </div>
        </div>:null}
       {edu?  <div id='edu'>
       <div id='school'>
        <h1 class='top' id='webdev'>Schooling</h1>
        <h1 class='bottom' id='webdevr'>Turner Fenton Secondary School , Brampton, ON</h1>
       </div></div>:null}
        <hr style={{left:cline}} id='hr'></hr>
        </div>
      </div>
    </section>
    <section id='projects'>
     <h1 class='tprojects'>My <span>Projects</span></h1>
  <div id='prolist'>
  <div id='scrible'>
      <div class='first'>
        <h1 class='stitle'>Notes app</h1>
        <button class='icon'>Github </button>
      </div>
     </div>
     <div id='restraunt'>
      <div class='first'>
        <h1 class='stitle'>Restraunt Website</h1>
        <button onClick={()=>{window.open('https://github.com/jasmehsidhu/Restraunt-website-MERN')}} class='icon'>Github </button>
      </div>
     </div>
     <div id='url'>
      <div class='first'>
        <h1 class='stitle'>URL Shortner</h1>
        <button onClick={()=>{window.open('https://github.com/jasmehsidhu/URL-Shortener')}} class='icon'>Github </button>
      </div>
     </div>
     <div id='weather'>
      <div class='first'>
        <h1 class='stitle'>Weather App</h1>
        <button onClick={()=>{window.open('https://github.com/jasmehsidhu/Weather-Master')}} class='icon'>Github </button>
      </div>
     </div>
  </div>
    </section>
    <section id='services'>
      <h1 class='tprojects'>My <span>Services</span></h1>
      <div id='serlist'>
        <div class='webdevser'>
          <h1 class='stitles'>
          Website Development   <i class="fa-solid fa-code"></i>
          </h1>
          <p class='serpara'>Professional web development services designed to produce visually appealing portfolios, interactive business websites, and dynamic online apps.  Every website is designed with responsive design, performance, and user experience in mind, ensuring that it looks amazing and functions smoothly across all devices.  From front-end appearance to back-end functionality, clean and efficient code makes ideas a reality.  Whether it's a new website, enhancements to an existing one, or technical assistance, the correct solutions are available to satisfy every requirement.  Please contact us for further information, and let us work together to create something spectacular!</p>
        </div>
         <div class='webdevser'>
          <h1 class='stitles'>
          Application Development   <i class="fa-brands fa-android"></i>
          </h1>
          <p class='serpara'>Custom app development services using React Native to build high-performance, cross-platform mobile applications. Designed for both iOS and Android, each app delivers a seamless user experience with smooth performance and modern UI/UX. From intuitive interfaces to powerful backend integration, every project is crafted to meet unique business needs. Whether it's a brand-new mobile app, feature enhancements, or ongoing maintenance, the right solutions ensure scalability and efficiency. Contact us for further information and bring your app idea to life!</p>
        </div>
      </div>
    </section>
    <section id='contact'>
      <div id='contactme'>
        <h1 id='stitle'>Let's get in touch!</h1>
       <div id='contain'>
       <h1 class='emailname'><i style={{color:'mediumturquoise'}}class="fa-solid fa-paper-plane"></i><span style={{color:'black'}}>.....</span>jasmehsidhu@gmail.com</h1>
       <h1 class='emailname'><i style={{color:'mediumturquoise'}} class="fa-solid fa-square-phone"></i><span style={{color:'black'}}>.....</span>+1(647)-852-6035</h1>
       </div>
       <div id='socials'>
       <i onClick={()=>{window.open('https://www.instagram.com/jasmehsidhu')}} id='insta'  class="fa-brands fa-instagram"></i>
       <i onClick={()=>{window.open('https://www.github.com/jasmehsidhu')}} id='github'  class="fa-brands fa-github"></i>
       <i onClick={()=>{window.open('https://www.linkedin.com/in/jasmeh-singh-275bab270/')}} id='insta'  class="fa-brands fa-linkedin"></i>
       </div>
      </div>
      <form id='form'>
{success?         <div id='success'><p id='suc'>Your message was sent!</p></div>
:null}<div id='namenlast'>
<input class='jasmeh' placeholder='First name' id='names' type='text'></input>
<input class='jasmeh' placeholder='Last name' id='names' type='text'></input>
  </div>     
  <input placeholder='Email' id='email' type='text'></input> 
  <textarea placeholder='Message...' rows='10'></textarea>
  <button type='button' onClick={send} id='submit'>Send</button>
  </form>
    </section>
    </>
  )
}

export default App
