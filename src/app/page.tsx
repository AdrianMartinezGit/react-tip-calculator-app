import Logo from '@/assets/logo.svg';
import Image from 'next/image';
import Dollar from '@/assets/icon-dollar.svg';

export default function Home() {
  return (
    <>
      <div className='flex justify-center'>
        <div className='absolute mt-28'>
          <Image src={Logo} alt='Logo' />
        </div>
      </div>
      <div className='tip-outside'>
        <div className='tip-container drop-shadow-2xl'>
          <div className='flex justify-center h-full'>
            <div className='flex flex-row space-x-8 h-full'>
              <div className='w-[27rem] h-full text-black'>
                <p className='space-mono-regular'>Bill</p>
                <form>
                  <input type='number' className='bg-blue-500 w-full h-8 text-right px-2 appearance-none'></input>
                </form>
                <p className='space-mono-regular'>Select Tip %</p>
                <div className='grid grid-cols-3 grid-rows-2 gap-2'>
                  <button className='bg-[#00494d] text-white'>5%</button>
                  <button className='bg-[#00494d] text-white'>10%</button>
                  <button>15%</button>
                  <button className='bg-[#00494d] text-white'>25%</button>
                  <button className='bg-[#00494d] text-white'>50%</button>
                  <button>Custom</button>
                </div>
                <p className='space-mono-regular'>Number of People</p>
                <form>
                  <input type='number' className='bg-blue-500 w-full h-8 text-right px-2 appearance-none'></input>
                </form>
              </div>
              <div className='bg-[#00494d] w-[27rem] h-full rounded-xl text-white p-10'>
                <div className='grid grid-rows-3 gap-4 h-full'>
                  <div className='grid grid-cols-2'>
                    <div className='text-left'>
                      <p>Tip Amount</p>
                      <p>/ Person</p>
                    </div>
                    <div>
                      <p className='text-right text-5xl'>$30.00</p>
                    </div>
                  </div>
                  <div className='grid grid-cols-2'>
                    <div className='text-left'>
                      <p>Total</p>
                      <p>/ Person</p>
                    </div>
                    <div>
                      <p className='text-right text-5xl'>$30.00</p>
                    </div>
                  </div>
                  <div className='flex items-end'>
                    <button className='bg-white text-black w-full h-12'>RESET</button>
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