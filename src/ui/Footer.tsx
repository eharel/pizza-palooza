function Footer() {
  return (
    <footer className="bg-crust-dark text-surface-light py-6 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-pizza text-xl text-cheese mb-4">PizzaPalooza</h3>
            <p className="text-surface/80 mb-2">The best pizza in town, delivered to your door.</p>
            <p className="text-surface/80">&copy; {new Date().getFullYear()} Pizza Palooza</p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/menu" className="hover:text-cheese transition-colors">Our Menu</a></li>
              <li><a href="/about" className="hover:text-cheese transition-colors">About Us</a></li>
              <li><a href="/contact" className="hover:text-cheese transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Opening Hours</h4>
            <ul className="space-y-2 text-surface/80">
              <li>Monday - Thursday: 11am - 10pm</li>
              <li>Friday - Saturday: 11am - 11pm</li>
              <li>Sunday: 12pm - 9pm</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
