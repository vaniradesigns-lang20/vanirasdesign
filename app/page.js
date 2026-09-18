'use client';

import { useState } from 'react';

const PHONE = '7021529200';
const WHATSAPP = '917021529200';
const MAP_LINK = 'https://share.google/qV5BbCNgkaPcEu63J';
const INSTAGRAM = 'https://www.instagram.com/vaniradesigns?stkn=d3o3aWg2Zm1hbWJ5';
const FACEBOOK = 'https://www.facebook.com/share/1DNK3bh7fd/';

const products = [
  {
    title: 'Signature Sarees',
    type: 'Sarees',
    tag: 'Timeless',
    images: [
      '/images/saree-1.jpg',
      '/images/saree-2.jpg',
      '/images/saree-3.jpg',
      '/images/saree-4.jpg',
      '/images/saree-5.jpg',
      '/images/saree-6.jpg'
    ]
  },
  {
    title: 'Bridal Lehengas',
    type: 'Lehengas',
    tag: 'Occasion',
    images: [
      '/images/lehenga-1.jpg',
      '/images/lehenga-2.jpg',
      '/images/lehenga-3.jpg',
      '/images/lehenga-4.jpg',
      '/images/lehenga-5.jpg',
      '/images/lehenga-6.jpg',
    ]
  },
  {
    title: "Traditional Kurti's",
    type: "Kurti's",
    tag: 'Classic',
    images: [
      '/images/kudati-1.jpg',
      '/images/kudati-2.jpg',
      '/images/kudati-3.jpg',
      '/images/kudati-4.jpg',
      '/images/kudati-5.jpg',
      '/images/kudati-6.jpg',
    ]
  }
];

function Icon({ name, size = 20 }) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    phone: <><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z"/></>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></>,
    facebook: <path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.55.45-1 1-1Z"/>,
    map: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    heart: <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z"/>,
    menu: <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>,
    close: <><path d="M6 6l12 12"/><path d="M18 6 6 18"/></>,
    spark: <><path d="m12 3-1.3 5.7L5 10l5.7 1.3L12 17l1.3-5.7L19 10l-5.7-1.3L12 3Z"/><path d="m19 15-.6 2.4L16 18l2.4.6L19 21l.6-2.4L22 18l-2.4-.6L19 15Z"/></>
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function Logo() {
  return (
    <a className="logo" href="#home" aria-label="Vanira Designs home">
      <img src="/images/logo.jpg" alt="Vanira Designs" className="logo-img" />
      <style jsx>{`
        .logo-img {
          height: 48px;
          width: auto;
          display: block;
        }
      `}</style>
    </a>
  );
}

function LogoBadge() {
  return (
    <span className="logo-badge">
      <img src="/images/logo.jpg" alt="Vanira Designs" />
      <style jsx>{`
        .logo-badge {
          display: block;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          overflow: hidden;
          background: #fffaf3;
        }
        .logo-badge img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 50%;
        }
      `}</style>
    </span>
  );
}

function CardImage({ src, alt, tag }) {
  return (
    <div className="product-image">
      <img src={src} alt={alt} />
      <span className="tag">{tag}</span>
      <style jsx>{`
        .product-image {
          background: #f2e9dc;
          overflow: hidden;
        }
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
      `}</style>
    </div>
  );
}

function ProductModal({ item, onClose }) {
  if (!item) return null;

  const waLink = (i) =>
    `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
      `Hi Vanira Designs, I am interested in ${item.title} (design ${i + 1}).`
    )}`;

  return (
    <div className="product-modal-overlay" onClick={onClose}>
      <div className="product-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close gallery"><Icon name="close" /></button>
        <p className="kicker">{item.type}</p>
        <h3>{item.title}</h3>
        <p className="modal-hint">Tap any design to enquire on WhatsApp</p>
        <div className="modal-grid">
          {item.images.map((src, i) => (
            <a key={src} href={waLink(i)} target="_blank" rel="noreferrer" className="modal-image">
              <img src={src} alt={`${item.title} ${i + 1}`} />
              <span className="modal-image-cta"><Icon name="arrow" size={16} /></span>
            </a>
          ))}
        </div>
      </div>
      <style jsx>{`
        .product-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(20, 14, 8, 0.55);
          backdrop-filter: blur(3px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          z-index: 200;
        }
        .product-modal {
          position: relative;
          background: #fffaf3;
          border-radius: 18px;
          padding: 28px;
          max-width: 720px;
          width: 100%;
          max-height: 85vh;
          overflow-y: auto;
        }
        .product-modal h3 {
          margin: 2px 0 4px;
        }
        .modal-hint {
          margin: 0 0 18px;
          opacity: 0.7;
          font-size: 0.9rem;
        }
        .modal-close {
          position: absolute;
          top: 16px;
          right: 16px;
          background: rgba(0, 0, 0, 0.06);
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .modal-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 14px;
        }
        .modal-image {
          position: relative;
          display: block;
          border-radius: 12px;
          overflow: hidden;
          background: #f2e9dc;
        }
        .modal-image img {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          transition: transform 0.35s ease;
        }
        .modal-image:hover img {
          transform: scale(1.06);
        }
        .modal-image-cta {
          position: absolute;
          right: 8px;
          bottom: 8px;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1e1e1e;
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const go = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <header className="header">
        <div className="nav-wrap">
          <Logo />
          <nav className={open ? 'nav open' : 'nav'}>
            <button onClick={() => go('home')}>Home</button>
            <button onClick={() => go('collection')}>Collection</button>
            <button onClick={() => go('about')}>About</button>
            <button onClick={() => go('contact')}>Visit Us</button>
          </nav>
          <div className="nav-actions">
            <a className="nav-call" href={`tel:+91${PHONE}`}><Icon name="phone" size={17}/> Call</a>
            <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu"><Icon name={open ? 'close' : 'menu'} /></button>
          </div>
        </div>
      </header>

      <section id="home" className="hero">
        <div className="hero-glow glow-one"/><div className="hero-glow glow-two"/>
        <div className="hero-copy">
          <div className="eyebrow"><span/> Curated Indian Couture <span/></div>
          <h1>Tradition,<br/><em>tailored beautifully.</em></h1>
          <p>Discover expressive Indian fashion where timeless craftsmanship meets a modern point of view — made for the moments you will remember.</p>
          <div className="hero-actions">
            <button className="btn primary" onClick={() => go('collection')}>Explore Collection <Icon name="arrow" size={18}/></button>
            <a className="btn ghost" href={`https://wa.me/${WHATSAPP}?text=Hi%20Vanira%20Designs,%20I%20would%20like%20to%20know%20more%20about%20your%20collection.`} target="_blank" rel="noreferrer">WhatsApp Us</a>
          </div>
          <div className="hero-note"><Icon name="spark" size={18}/> Weddings · Festivals · Celebrations · Everyday elegance</div>
        </div>
        <div className="hero-visual">
          <div className="hero-card card-back" style={{ background: '#f2e9dc' }}><img src="/images/lehenga-1.jpg" alt="Vanira Designs bridal lehenga" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/></div>
          <div className="hero-card card-front" style={{ background: '#f2e9dc' }}><img src="/images/saree-1.jpg" alt="Vanira Designs ethnic wear" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/></div>
          <div className="floating-badge" style={{ padding: 0, background: '#fffaf3', overflow: 'hidden' }}><LogoBadge /></div>
        </div>
        <div className="scroll-cue">SCROLL <span/></div>
      </section>

      <section className="marquee" aria-label="Vanira Designs specialties"><div>SAARIS <i>✦</i> LEHENGAS <i>✦</i> KURTI&apos;S <i>✦</i> TRADITIONAL WEAR <i>✦</i> SAARIS <i>✦</i> LEHENGAS <i>✦</i></div></section>

      <section id="collection" className="section collection">
        <div className="section-head"><div><p className="kicker">THE COLLECTION</p><h2>Pieces with a <em>story.</em></h2></div><p className="section-intro">From graceful sarees to statement lehengas, find silhouettes that celebrate who you are.</p></div>
        <div className="product-grid">
          {products.map((item, index) => (
            <article
              className={`product-card p${index + 1}`}
              key={item.title}
              onClick={() => setActiveItem(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && setActiveItem(item)}
              style={{ cursor: 'pointer' }}
            >
              <CardImage src={item.images[0]} alt={item.title} tag={item.tag} />
              <div className="product-info">
                <div><small>{item.type}</small><h3>{item.title}</h3></div>
                <span aria-hidden="true"><Icon name="arrow" size={18}/></span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ProductModal item={activeItem} onClose={() => setActiveItem(null)} />

      <section id="about" className="about section">
        <div className="about-art"><div className="arch" style={{ background: '#f2e9dc' }}><img src="/images/lehenga-3.jpg" alt="Traditional bridal fashion at Vanira Designs" style={{ width: '100%', height: '100%', objectFit: 'contain' }}/></div><div className="seal" style={{ padding: 0, background: '#fffaf3', overflow: 'hidden' }}><LogoBadge /></div></div>
        <div className="about-copy"><p className="kicker">OUR STORY</p><h2>Where tradition meets <em>timeless elegance.</em></h2><p>Welcome to Vanira Designs — where traditional Indian fashion is reimagined with beautiful craftsmanship and a modern sensibility.</p><p>We believe every woman deserves to feel beautiful, confident, and uniquely herself. Our collection is thoughtfully selected for weddings, festivals, celebrations, special occasions, and everyday elegance.</p><div className="values"><div><b>01</b><span>Elegant &amp; unique<br/>designs</span></div><div><b>02</b><span>Quality fabrics &amp;<br/>finishing</span></div><div><b>03</b><span>Personalized fashion<br/>with love &amp; care</span></div></div><a className="text-link" href={`https://wa.me/${WHATSAPP}?text=Hi%20Vanira%20Designs,%20I%20would%20like%20to%20visit%20your%20boutique.`} target="_blank" rel="noreferrer">Start a conversation <Icon name="arrow" size={17}/></a></div>
      </section>

      <section className="occasion"><div className="occasion-inner"><p className="kicker">FOR EVERY OCCASION</p><h2>Dress for the <em>moment.</em></h2><div className="occasion-list"><span>Weddings</span><span>Festivals</span><span>Celebrations</span><span>Special occasions</span><span>Everyday elegance</span></div></div></section>

      <section id="contact" className="contact section">
        <div className="contact-copy"><p className="kicker">VISIT VANIRA DESIGNS</p><h2>Come discover your <em>signature style.</em></h2><p>We would love to help you find an outfit that feels unmistakably yours. Visit us in Dadar East or reach out directly.</p><div className="contact-details"><a href={`tel:+91${PHONE}`}><span className="detail-icon"><Icon name="phone"/></span><div><small>Call / WhatsApp</small><strong>+91 70215 29200</strong></div></a><a href={MAP_LINK} target="_blank" rel="noreferrer"><span className="detail-icon"><Icon name="map"/></span><div><small>Boutique address</small><strong>Flat 1401, Tower 3, New BDD Sankul,<br/>Naigaon, Dadar East, Mumbai 400014</strong></div></a></div><div className="socials"><a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram"/></a><a href={FACEBOOK} target="_blank" rel="noreferrer" aria-label="Facebook"><Icon name="facebook"/></a><a href={MAP_LINK} target="_blank" rel="noreferrer" aria-label="Google Maps"><Icon name="map"/></a></div></div>
        <div className="map-box"><iframe title="Vanira Designs location" src="https://www.google.com/maps?q=Flat%201401%2C%20Tower%203%2C%20New%20BDD%20Sankul%2C%20Naigaon%2C%20Dadar%20East%2C%20Mumbai%20400014&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/><a className="map-overlay" href={MAP_LINK} target="_blank" rel="noreferrer"><span><Icon name="map" size={16}/> Open in Google Maps</span><Icon name="arrow" size={16}/></a></div>
      </section>

      <footer><div className="footer-top"><Logo/><p>Indian fashion, thoughtfully chosen.<br/>Tradition with a modern soul.</p><a className="footer-cta" href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer">Enquire on WhatsApp <Icon name="arrow" size={17}/></a></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Vanira Designs. All rights reserved.</span><span>Mumbai · Maharashtra · India</span></div></footer>

      <div className="floating-contact"><a className="float-wa" href={`https://wa.me/${WHATSAPP}?text=Hi%20Vanira%20Designs,%20I%20would%20like%20to%20know%20more%20about%20your%20collection.`} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"><span className="float-label">WhatsApp</span><span className="wa-symbol">◔</span></a><a className="float-call" href={`tel:+91${PHONE}`} aria-label="Call Vanira Designs"><span className="float-label">Call us</span><Icon name="phone" size={22}/></a></div>
    </main>
  );
}