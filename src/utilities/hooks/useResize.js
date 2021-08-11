import {useState, useEffect} from 'react'

export default function useResize(fn) {
    let [size, setSize] = useState({
      width: null,
      height: null,
    })
    useEffect(() => {
      const onResize = () => {
        const newSize = {
          width: window.innerWidth,
          height: window.innerHeight,
        }
        // Always use the first `size` object.
        setSize(size => {
          Object.assign(size, newSize)
          return size
        })
        if (fn) fn(newSize)
      }
      window.addEventListener('resize', onResize)
      return () => window.removeEventListener('resize', onResize)
    }, [fn])
    return size
  }