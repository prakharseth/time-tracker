import React from "react";
import ps from "./images/ps.jpg";
import cards from "./data.json";

function App() {
  console.log(cards);
  return (
    <div className='bg-[#0d1323] h-screen px-4 py-14 md:flex md:flex-row md:gap-3 md:items-center md:justify-center'>
      <UserInfo />
      <div className='md:grid md:grid-cols-3 '>
        {cards.map(cards => {
          return (
            <div
              className={`relative  z-0 my-6 ${cards.bgColor} font-rubik rounded-xl font-thin pt-10 overflow-hidden md:m-3`}
            >
              <div className='-z-10 absolute right-5 bottom-28 md:bottom-[9.5rem]'>
                <img className='opacity-60' src={cards.cardImg} alt='' />
              </div>
              <div>
                <div className='z-10 bg-[#232857] rounded-xl justify-between p-8'>
                  <div className='text-white flex justify-between'>
                    <div className='font-normal'>{cards.title}</div>
                    <div className='text-2xl text-[#bdc1ff]'>
                      &bull;&bull;&bull;
                    </div>
                  </div>
                  <div className=' flex justify-between md:flex-col'>
                    <div className='text-3xl text-white'>
                      {cards.timeframes.weekly.current}hrs
                    </div>
                    <div className='pt-2 text-lg text-[#bdc1ff]'>
                      Last week - {cards.timeframes.weekly.previous}hrs
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
function UserInfo() {
  return (
    <div className='font-rubik bg-[#232857] rounded-xl md:h-[27.5rem]'>
      {/*  */}
      <div className='bg-[#5746ea] flex p-8 md:p-5 gap-4 rounded-xl shadow md:flex md:flex-col md:w-44 md:pb-28'>
        <div>
          <img
            className='rounded-full  h-20 md:h-[4rem] border-2'
            src={ps}
            alt=''
          />
        </div>
        <div className='pt-4'>
          <div className='text-[#bdc1ff]  font-thin'>Report for</div>
          <div className='capitalize text-white text-2xl md:text-3xl font-thin md:flex md:flex-col '>
            <span>prakhar</span>
            <span> seth</span>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='flex justify-around text-[#bdc1ff] py-5  font-thin md:flex md:flex-col  md:pl-5'>
        <h1>Daily</h1>
        <h1 className='text-white'>Weekly</h1>
        <h1>Monthly</h1>
      </div>
    </div>
  );
}
// color used for cards
// bg-[#eca58d]
// bg-[#56c2e6]
// bg-[#ff5c7c]
// bg-[#4acf81]
// bg-[#7536d3]
// bg-[#bdc1ff]
