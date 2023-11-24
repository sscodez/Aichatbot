import Image from 'next/image'
import ChatInterface from './components/Chat'
import Head from 'next/head';
export default function Home() {
  return (
  
    <div className='flex items-center justify-center bg-[#fefefe] w-[100%]'>
    <div className='flex items-center justify-center h-[100vh] w-[80%]'>
      <ChatInterface />
    </div>
    </div>
  )
}
