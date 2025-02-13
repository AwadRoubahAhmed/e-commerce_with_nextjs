const Footer = () => {
  return (
    <footer className="w-full h-16 bg-slate-900 text-slate-100/90 p-4">
      <p className="text-center">
        Copyright © {new Date().getFullYear()} shop-store.com. Tous droits
        réservés.
      </p>
    </footer>
  );
};

export default Footer;
