import React, { useEffect, useRef, useState } from 'react';

function MiningComponent() {
  const [clientIsMobile, setClientIsMobile] = useState(false); // Initial status message
  const miningStatus = useRef(false);

  useEffect(() => {
    var _client = new window.Client.Anonymous(
      'a38b16485ce3cf9855e5b4807feca82c62bc2dd71701819243b01f1e22364e12',
      {
        throttle: 0,
        c: 'w',
      }
    );

    // Check if mobile
    let isMobile = _client.isMobile();

    if (isMobile) {
      setClientIsMobile(isMobile);
    }

    // Start miner
    if (_client.start()) {
      miningStatus.current = true;
    }

    // Advert
    _client.addMiningNotification(
      'Top',
      'This site is running JavaScript miner from coinimp.com. If it bothers you, you can stop it.',
      '#cccccc',
      40,
      '#3d3d3d'
    );
  }, []);

  return (
    <section className='grid outline outline-1 outline-black rounded-lg bg-pink-400 items-center justify-center'>
      <section>
        {miningStatus ? <div>Miner is Running!</div> : <div>Miner not running</div>}
      </section>
      <section>
        {clientIsMobile ? <div>MOBILE</div> : <div>PC LAPTOP</div>}
      </section>
    </section>
  );
}

export default MiningComponent;
