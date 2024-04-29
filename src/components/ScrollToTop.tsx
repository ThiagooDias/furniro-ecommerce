import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  children: ReactNode
}

const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const location = useLocation();
  console.log(location);
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); 

  return (<>
    {children}
  </>) 
};

export default ScrollToTop;
