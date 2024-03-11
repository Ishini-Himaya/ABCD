import React from 'react';
import BP from '../icons/BP.jpg';
import LogoIcon from '../icons/logo.png';
import student from '../icons/student.avif';
import start from '../icons/start.png';

function Home() {
  const sectionStyle = {
    backgroundImage: `url(${BP})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '50px', // Adjust the padding to decrease the space between sections
    display: 'flex',
    justifyContent: 'space-between', // Align the two sections side by side
    marginBottom: '50px', // Add margin bottom to create space between sections
    overflowY: 'auto', // Make the section scrollable vertically
    maxHeight: '80vh', // Set a maximum height for the section
  };

  const logoStyle = {
    width: '450px', // Adjust the width of the logo
    height: 'auto', // Maintain aspect ratio
    marginTop: '50px', // Adjust margin top to move the logo downwards
    marginRight: '10px'
  };

  const buttonStyle = {
    fontSize: '30px', // Adjust the font size of the button
    padding: '20px 40px', // Adjust the padding of the button
    display: 'flex', // Make the button a flex container
    alignItems: 'center', // Center the content vertically
    justifyContent: 'center', // Center the content horizontally
  };

  const studentContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px', // Add margin bottom to create space below the student photo
  };

  return (
    <div style={{ height: '100vh', overflowY: 'auto' }}> {/* Make the page scrollable */}
      <div>
        <section className="banner-area relative blog-home-banner d-flex align-items-center justify-content-center" id="home" style={sectionStyle}>
          <div className="overlay overlay-bg"></div>
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="about-content blog-header-content col-lg-12 text-center">
                <h1 style={{ fontSize: '30px' }}>Insightfuul <br/> Productivity-Boosting <br/> Distraction-Aware </h1>
                <h2 className="text-uppercase text-white" style={{ fontSize: '18px' }}>
                  Elevate your Focus, Predict distractions <br/>  and boost productivity in your study sessions <br/>  with cutting-edge machine learning insights.
                </h2>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center" style={{ marginRight: '50px' }}> 
            <img src={LogoIcon} alt="Logo" style={logoStyle} />
          </div>
        </section>
      </div>
      <div>
        <div className="overlay overlay-bg"></div>
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="about-content blog-header-content col-lg-12 text-center">
              <h2 className="text-uppercase text-white" style={{ fontSize: '18px' }}>
                Unlock your focused study experience sign in and click start button to start the program 
              </h2>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center" style={{ marginRight: '50px' }}> 
          <div style={studentContainerStyle}>
            <img src={student} alt="Student" style={logoStyle} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
