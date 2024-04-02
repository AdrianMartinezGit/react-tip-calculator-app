import logo from '@/assets/logo.svg'
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex items-center flex justify-center'>
    <Image src={logo} alt='Logo'/>
    </main>
  );
}
