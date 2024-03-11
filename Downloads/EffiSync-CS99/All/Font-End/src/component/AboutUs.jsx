import React, { useEffect } from 'react';
import Ishini from '../icons/Ishini.jpg';
import Hesha from '../icons/Hesha.jpg';
import Senuri from '../icons/Senuri.jpg';
import Ashely from '../icons/Ashely.jpg';
import Sandaru from '../icons/Sandaru.jpg';
import BP2 from '../icons/BP2.jpg';

function Home() {
  useEffect(() => {
    const container = document.getElementById('container');
    container.style.backgroundImage = `url(${BP2})`;
    container.style.backgroundSize = 'cover';
    container.style.backgroundPosition = 'center';
  }, []);

  return (
    <div id="container" style={{ overflowY: 'auto', height: '100vh' }}>
      <div style={{ textAlign: 'center', backgroundColor: '#333', color: '#fff', padding: '1rem' }}>
        <h1>About Us</h1>
        <p>We do balajkdbaslkdn lkewmlk;qwme;lqw</p>
      </div>

      <div style={{ textAlign: 'center', marginTop: '1rem' }}>
        <h2>Our Team</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '1rem' }}>

        <div style={{ maxWidth: '400px', margin: '0.5rem', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #333' }}>
            <img src={Ishini} alt="Ishini" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="container" style={{ marginLeft: '1rem', textAlign: 'left', flex: 1 }}>
            <p className="title" style={{ marginTop: '0.5rem' }}>Ishini Himaya</p>
            <p style={{ marginBottom: '0.5rem' }}>Team Leader</p>
            <p style={{ marginBottom: '0.5rem' }}>ishini.20222389@iit.ac.lk</p>
          </div>
        </div>

        <div style={{ maxWidth: '400px', margin: '0.5rem', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ marginRight: '1rem', textAlign: 'right', flex: 1 }}>
            <p className="title" style={{ marginTop: '0.5rem' }}>Hesha Edmon</p>
            <p style={{ marginBottom: '0.5rem' }}>hesha.20220552@iit.ac.lk</p>
          </div>
          <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #333' }}>
            <img src={Hesha} alt="Hesha" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        <div style={{ maxWidth: '400px', margin: '0.5rem', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #333' }}>
            <img src={Senuri} alt="Senuri" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="container" style={{ marginLeft: '1rem', textAlign: 'left', flex: 1 }}>
            <p className="title" style={{ marginTop: '0.5rem' }}>Senuri Weerasooriya</p>
            <p style={{ marginBottom: '0.5rem' }}>senuri.20220269@iit.ac.lk</p>
          </div>
        </div>

        <div style={{ maxWidth: '400px', margin: '0.5rem', display: 'flex', alignItems: 'center' }}>
          <div className="container" style={{ marginRight: '1rem', textAlign: 'right', flex: 1 }}>
            <p className="title" style={{ marginTop: '0.5rem' }}>Ashely Perera</p>
            <p style={{ marginBottom: '0.5rem' }}>ashley.20221899@iit.ac.lk</p>
          </div>
          <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #333' }}>
            <img src={Ashely} alt="Ashely" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        <div style={{ maxWidth: '400px', margin: '0.5rem', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #333' }}>
            <img src={Sandaru} alt="Sandaru" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="container" style={{ marginLeft: '1rem', textAlign: 'left', flex: 1 }}>
            <p className="title" style={{ marginTop: '0.5rem' }}>Sandaru Hansana</p>
            <p style={{ marginBottom: '0.5rem' }}>sandaru.20211314@iit.ac.lk</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
