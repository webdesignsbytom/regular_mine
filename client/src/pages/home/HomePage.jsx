import React from 'react';
// Components
import MiningComponent from '../../components/mining/MiningComponent';

function HomePage() {
  return (
    <div className='grid h-screen overflow-hidden'>
      <div className='grid grid-rows-reg h-full w-full bg-slate-800 p-4 overflow-hidden'>
        <header className='grid'>
          <article className='grid justify-center items-center'>
            <div className='py-6'>
              <h1 className='text-white text-3xl font-bold'>Regular Looking Mine</h1>
            </div>
          </article>
        </header>

        <main className='grid w-2/3 mx-auto h-fit'>
          <MiningComponent />
        </main>
      </div>
    </div>
  );
}

export default HomePage;
