import { useState, useEffect } from "react"

function useMobileComponent( mobileWidth: number): boolean {
    const [ isMobile, setIsMobile ] = useState(window.matchMedia(`(max-width: ${mobileWidth}px)`).matches);

    useEffect(() => {
      const mediaQuery = window.matchMedia(`(max-width: ${mobileWidth}px)`);
      const changeHandler = ({ matches }: { matches: boolean }) => setIsMobile(matches);
      mediaQuery.addEventListener("change", changeHandler);
    
      return () => mediaQuery.removeEventListener("change", changeHandler);
    }, [mobileWidth]);

    return isMobile;
}

export default useMobileComponent;
