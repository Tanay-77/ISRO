import React, { useEffect, useRef, useState } from 'react'
import Video from '../components/home/video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
import './Home.css'

const Home = () => {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // Create audio object on mount
    const audio = new Audio('/interstellar_chase_2.mp3') // file placed in public/
    audio.loop = true
    audio.volume = 0.3
    audioRef.current = audio

    // Try to autoplay; many browsers block this until user interaction
    audio.play()
      .then(() => setIsPlaying(true))
      .catch(() => {
        // Autoplay blocked; show control to start manually
        setIsPlaying(false)
      })

    // Cleanup on unmount: stop audio when navigating away
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
        audioRef.current = null
      }
    }
  }, [])

  const togglePlayback = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch (e) {
        // ignore; user gesture may still be required
      }
    }
  }
  return (
    <div className='h-screen w-screen bg-black overflow-hidden'>
      {/* Navigation Bar */}
      <nav className='absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-12 py-4'>
        <img src='https://www.firesafetysearch.com/wp-content/uploads/2016/07/Indian-Space-Agency-employs-Sharpeye.gif' alt='ISRO Logo' className='h-16 w-auto' />
        <div className='flex gap-8 text-white text-sm font-semibold tracking-wide'>
          <a href='#' className='hover:text-blue-400 transition'>MISSIONS</a>
          <a href='#' className='hover:text-blue-400 transition'>VEHICLES</a>
          <a href='#' className='hover:text-blue-400 transition'>ABOUT</a>
        </div>
      </nav>

      {/* Background Video */}
      <div className='absolute inset-0 pointer-events-none hidden'>
        <Video />
      </div>

      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/50 pointer-events-none'></div>

      {/* Main Content Container */}
      <div className='relative h-full w-full flex items-center'>
        {/* Left Side: Content */}
        <div className='w-1/2 z-10 px-16 flex flex-col justify-center'>
          <div className='space-y-8'>
            {/* Main Headline */}
            <div>
              <h1 className='text-7xl font-bold text-white leading-tight tracking-tight'>
                ADVANCING
                <br />
                <span className='text-orange-500'>SPACE</span> SCIENCE
              </h1>
            </div>

            {/* Description */}
            <p className='text-xl text-gray-300 max-w-lg leading-relaxed'>
              ISRO is dedicated to space exploration and scientific research. We push the boundaries of human knowledge and technology to explore the cosmos.
            </p>

            {/* Call-to-action Buttons */}
            <div>
              <HomeBottomText />
            </div>
          </div>
        </div>

        {/* Right Side: Decorative Space */}
        <div className='w-1/2 h-full relative pointer-events-none overflow-hidden'>
          {/* Video on right side */}
          <div className='absolute inset-0'>
            <Video />
          </div>
          {/* Optional glow effect overlay */}
          <div className='absolute bottom-12 right-12 w-80 h-80 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 blur-3xl'></div>
        </div>
      </div>

      {/* Music Control */}
    <button
      onClick={togglePlayback}
      className='fixed bottom-4 right-4 z-50 rounded-full bg-white/20 hover:bg-white/30 text-white border border-white/40 p-3 backdrop-blur-md transition-all duration-300'
      aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
    >
      {/* Animated sound waves icon */}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={isPlaying ? '' : 'opacity-50'}
      >
        <path d="M12 1v22" className={isPlaying ? 'sound-line line-1' : ''} />
        <path d="M4.5 4.5c-1 1-2 3-2 6.5 0 3.5 1 5.5 2 6.5" className={isPlaying ? 'sound-line line-2' : ''} />
        <path d="M19.5 4.5c1 1 2 3 2 6.5 0 3.5-1 5.5-2 6.5" className={isPlaying ? 'sound-line line-3' : ''} />
        <path d="M8 8c-.5.5-1 1.5-1 4 0 2.5.5 3.5 1 4" className={isPlaying ? 'sound-line line-4' : ''} />
        <path d="M16 8c.5.5 1 1.5 1 4 0 2.5-.5 3.5-1 4" className={isPlaying ? 'sound-line line-5' : ''} />
      </svg>
    </button>
    </div>
  )
}

export default Home