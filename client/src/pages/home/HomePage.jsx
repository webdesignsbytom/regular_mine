import React, { useContext, useEffect } from 'react';
import { ToggleContext } from '../../context/ToggleContext';
import { useNavigate } from 'react-router-dom';
// Components
// Images
import SvgBackground from '../../assets/images/pages/endless_constellation.svg';
import MiningComponent from '../../components/mining/MiningComponent';

function HomePage() {
  const { setActiveNav } = useContext(ToggleContext);

  return (
    <div>
      <header>MINE 2</header>

      <section>
        <MiningComponent />
      </section>
    </div>
  );
}

export default HomePage;
