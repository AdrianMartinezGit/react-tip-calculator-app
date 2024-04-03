'use client';

import Logo from '@/assets/logo.svg';
import Image from 'next/image';
import Dollar from '@/assets/icon-dollar.svg';
import Person from '@/assets/icon-person.svg'
import { useState } from 'react';

export default function Home() {
  const [billValue, setBillValue] = useState<number>(0);
  const [tipValue, setTipValue] = useState<number>(0);
  const [peopleValue, setPeopleValue] = useState<number>(0);

  const [tipAmount, setTipAmount] = useState<string>('$0.00');
  const [total, setTotal] = useState<string>('$0.00');

  const handleBills = (e: any) => {
    e.preventDefault();
  }

  const handleTips = () => {

  }

  const handlePeople = (e: any) => {
    e.preventDefault();
  }

  const handleTipAmount = () => {

  }

  const handleTotalAmount = () => {

  }

  const handleReset = () => {

  }
  
  return (
    <>
      <div className='flex justify-center'>
        <div className='absolute mt-12 sm:mt-28'>
          <Image src={Logo} alt='Logo' />
        </div>
      </div>
      <div className='tip-outside'>
        <div className='tip-container drop-shadow-2xl h-full sm:h-[500px] p-6 sm:p-8 max-sm:mt-36'>
          <div className='flex justify-center h-full'>
            <div className='flex max-sm:flex-col max-sm:space-y-4 sm:flex-row sm:space-x-8 h-full'>
              <div className='sm:w-[27rem] h-full text-black p-2 sm:p-5'>
                <div className='max-sm:flex max-sm:flex-col max-sm:space-y-8 sm:grid sm:grid-rows-3 sm:gap-4 h-full'>
                  <div className='flex flex-col space-y-2'>
                    <p className='space-mono-bold text-[#5e7a7d]'>Bill</p>
                    <form onSubmit={handleBills}>
                      <Image src={Dollar} alt='Dollar Sign' className='absolute ml-2 mt-3'/>
                      <input type='number' className='bg-[#f4fafa] w-full h-10 text-right px-2 appearance-none space-mono-bold text-2xl text-[#00494d] focus:outline-[#26c0ab]' placeholder='0' min={0}/>
                    </form>
                  </div>
                  <div className='flex flex-col space-y-2'>
                    <p className='space-mono-bold text-[#5e7a7d]'>Select Tip %</p>
                    <div className='grid max-sm:grid-cols-2 max-sm:grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 gap-4'>
                      <button className='bg-[#00494d] text-white space-mono-regular text-2xl h-14 rounded-md hover:text-[#00494d] hover:bg-[#26c0ab] active:bg-[#c5e4e7]'>5%</button>
                      <button className='bg-[#00494d] text-white space-mono-regular text-2xl h-14 rounded-md hover:text-[#00494d] hover:bg-[#26c0ab] active:bg-[#c5e4e7]'>10%</button>
                      <button className='bg-[#00494d] text-white space-mono-regular text-2xl h-14 rounded-md hover:text-[#00494d] hover:bg-[#26c0ab] active:bg-[#c5e4e7]'>15%</button>
                      <button className='bg-[#00494d] text-white space-mono-regular text-2xl h-14 rounded-md hover:text-[#00494d] hover:bg-[#26c0ab] active:bg-[#c5e4e7]'>25%</button>
                      <button className='bg-[#00494d] text-white space-mono-regular text-2xl h-14 rounded-md hover:text-[#00494d] hover:bg-[#26c0ab] active:bg-[#c5e4e7]'>50%</button>
                      <input type='number' placeholder='Custom' className='bg-[#f4fafa] text-right px-2 space-mono-bold text-[#00494d] text-2xl h-14 rounded-md placeholder-shown:text-center placeholder:text-[#5e7a7d] focus:outline-[#26c0ab]'/>
                    </div>
                  </div>
                  <div className='flex items-end'>
                    <div className='w-full flex flex-col space-y-2'>
                      <p className='space-mono-bold text-[#5e7a7d]'>Number of People</p>
                      <form onSubmit={handlePeople}>
                        <Image src={Person} alt='Person Icon' className='absolute ml-2 mt-3'/>
                        <input type='number' className='bg-[#f4fafa] w-full h-10 text-right px-2 appearance-none space-mono-bold text-2xl text-[#00494d] focus:outline-[#26c0ab]' min={0} placeholder='0'/>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className='bg-[#00494d] sm:w-[27rem] h-full rounded-xl text-white px-5 pb-5 pt-10 sm:p-10'>
                <div className='grid grid-rows-3 gap-12 sm:gap-4 h-full'>
                  <div className='grid grid-cols-2'>
                    <div className='text-left'>
                      <p className='space-mono-bold'>Tip Amount</p>
                      <p className='space-mono-regular text-[#7f9c9f]'>/ person</p>
                    </div>
                    <div>
                      <p className='text-right text-5xl space-mono-bold text-[#26c0ab]'>{tipAmount}</p>
                    </div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='text-left'>
                      <p className='space-mono-bold'>Total</p>
                      <p className='space-mono-regular text-[#7f9c9f]'>/ person</p>
                    </div>
                    <div>
                      <p className='text-right text-5xl space-mono-bold text-[#26c0ab]'>{total}</p>
                    </div>
                  </div>
                  <div className='flex items-end'>
                    <button className='bg-[#3f9d95] text-[#3a5b5f] w-full h-12 rounded-lg space-mono-bold text-2xl hover:bg-[#26c0ab] hover:text-[#00494d] active:bg-[#c5e4e7]'>RESET</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}