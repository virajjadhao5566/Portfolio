import About from '@/components/About/About'
import NumberSection from '@/components/NumberSection/NumberSection'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='font-mono'>
      <About/>
      <NumberSection/>
    </main>
  )
}
