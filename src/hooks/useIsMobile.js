import { useState, useEffect } from "react";

const useIsMobile = (refWidth) => {
  const [isMobile,setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
    if (window.innerWidth < refWidth) {
      setIsMobile(true)
    }else{
      setIsMobile(false)
    }
    }

    window.addEventListener('resize', handleResize)
    
    handleResize()

    return ()=> window.removeEventListener('resize', handleResize)
  }, [refWidth])

  return isMobile
}

export default useIsMobile
