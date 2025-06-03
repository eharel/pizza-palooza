import Footer from "./Footer";
import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import CartOverview from "../features/cart/CartOverview";
import { useEffect, useRef, useState } from "react";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const footerRef = useRef<HTMLDivElement>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [cartPosition, setCartPosition] = useState(0);

  useEffect(() => {
    // Function to update cart position based on footer visibility
    const updateCartPosition = () => {
      if (!footerRef.current) return;
      
      const footerRect = footerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if footer is in viewport
      const isVisible = footerRect.top < windowHeight;
      
      setIsFooterVisible(isVisible);
      
      if (isVisible) {
        // Calculate how much the cart should move up
        // We want the cart to sit just above the footer
        const cartHeight = 60; // Approximate height of CartOverview
        const newPosition = windowHeight - footerRect.top + cartHeight/2;
        setCartPosition(Math.max(0, newPosition));
      } else {
        setCartPosition(0);
      }
    };

    // Initial position update
    updateCartPosition();
    
    // Set up scroll listener for continuous updates
    window.addEventListener('scroll', updateCartPosition);
    window.addEventListener('resize', updateCartPosition);
    
    // Create an Intersection Observer as a backup method
    const observer = new IntersectionObserver(
      () => updateCartPosition(),
      { threshold: [0, 0.1, 0.5, 1] }
    );

    // Start observing the footer
    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', updateCartPosition);
      window.removeEventListener('resize', updateCartPosition);
      
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-surface">
      {isLoading && <Loader />}
      <Header />
      <main className="container mx-auto flex-1 overflow-y-auto overflow-x-hidden px-4 py-8 pb-20 md:px-8">
        <Outlet />
      </main>

      {!isLoading && (
        <div 
          className="fixed left-0 right-0 z-50 transition-all duration-200"
          style={{
            bottom: isFooterVisible ? `${cartPosition}px` : 0,
          }}
        >
          <CartOverview />
        </div>
      )}

      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
