import Image from 'next/image'
import { HeroSection } from "@/components/hero-section"
import NavBar from '@/components/nav-bar'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col bg-gradient-to-r from-gray-700 via-gray-900 to-black mx-auto px-12 py-4'>
      <NavBar />
      <div className='container mt-24 mx-auto px-12 py-4'>
        <HeroSection />
      </div>
    </main>
  )
}
