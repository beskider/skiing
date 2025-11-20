import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [ windowSize, setWindowSize ] = useState([
    window.innerWidth, window.innerHeight
  ])

  const handleResize = () => {
    setWindowSize([ window.innerWidth, window.innerHeight ])
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useWindowSize
