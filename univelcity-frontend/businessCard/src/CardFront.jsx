import {BsLinkedin, BsPhoneFlip, BsArrowRepeat} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import image from './assets/profile.jpg'
import Stack from './Stack'
import Footer from './Footer'

export default function CardFront({handleFront}) {
    const emailLink = 'Mailto:Mishakmanuel@gmail.com?subject=Hello'
    const linkedinProfile = "https://www.linkedin.com/in/mishak-mosimabale-1a937b119/"

    const openLink = () => {
    window.open( emailLink, '_blank'); // Opens the link in a new tab
  };

  const openLinkedin = () => {
    window.open(linkedinProfile, '_blank');
  }

  return (
<>
    <div className="card-front">
        <button className='flipbtn' onClick={handleFront} ><BsArrowRepeat /></button>
        <div className="img-container">
            <img src={image} alt="Personal Photo" />
        </div>
    <div className="content">
        <div className="profile-info">
            <h1>Mishak Mosi</h1>
            <h3>FrontEnd Web Developer</h3>
            <p>landing page, websites etc</p>
        </div>
        <div className="btns">
          <button onClick={openLink}> <MdEmail className='btn-icon'/>Email</button>
          <button onClick={openLinkedin} id='blue'><BsLinkedin className='btn-icon'/>Linkdln</button>
        </div>
        <section className="about">
          <h3>About:</h3>
          <p>I am a dynamic and dedicated front-end web developer with a passion for crafting 
            visually appealing and intuitive user experiences. 
            With a strong aesthetic sense and a keen eye for detail, 
            I pride myself on creating websites that seamlessly blend form and function.
            </p>
        </section>
        <section className="stack">
        <h3>Stack:</h3>
          <div className="stack-icons">
          <Stack />
          </div>
        </section>
        <section className="interests">
          <h3>Interests:</h3>
          <p> Problem-solving, Technology, Open-source Projects, Collaborations, Testing and Quality Assurance.
            </p>
        </section>
    </div>
    <Footer />
    </div>
</>
  )
}
