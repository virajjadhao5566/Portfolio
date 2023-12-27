'use client'
import Experience from '@/components/Experience/Experience'
import About from '@/components/About/About'
import Homes from '@/components/Home/Home'

export default function Home() {
  return (
    <main className='font-mono'>
      <Homes/>
      <About/>
      <Experience/>
    </main>
  )
}
