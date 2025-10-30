import React, { useEffect, useRef, useState } from 'react'
import Video from '../components/home/Video'
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
    <div>
    <div className='h-screen w-screen fixed'>
      <Video />
    </div>
    <div className='h-screen w-screen relative flex flex-col justify-between'>
      <HomeHeroText/>
      <HomeBottomText />

    </div>
    {/* Floating music control with animated icon */}
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