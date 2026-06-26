'use client'
import React from 'react'

export default function TapForMenu() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#09090b', color: '#ffffff', overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap');
        
        * { box-sizing: border-box; margin: 0; padding: 0; font-family: 'Inter', sans-serif; }
        
        /* Glass Navigation */
        .store-nav { padding: 20px 40px; display: flex; justify-content: space-between; align-items: center; position: fixed; top: 0; width: 100%; z-index: 100; background: rgba(9, 9, 11, 0.7); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(255,255,255,0.05); }
        .logo { font-size: 20px; color: #fff; letter-spacing: -0.5px; display: flex; align-items: center; text-decoration: none; font-weight: 700; }
        
        /* Buttons */
        .btn-primary { background-color: #ffffff; color: #09090b; padding: 14px 28px; border-radius: 4px; font-weight: 500; font-size: 15px; cursor: pointer; border: none; transition: all 0.3s ease; text-decoration: none; display: inline-block; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(255, 255, 255, 0.1); }
        
        .btn-outline { background-color: transparent; color: #ffffff; padding: 12px 26px; border-radius: 4px; font-weight: 500; font-size: 15px; cursor: pointer; border: 1px solid rgba(255,255,255,0.3); transition: all 0.3s ease; text-decoration: none; display: inline-block; }
        .btn-outline:hover { background-color: #ffffff; color: #09090b; }

        /* Cinematic Hero Section */
        .hero-section { min-height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; position: relative; padding: 100px 20px 40px 20px; background: linear-gradient(rgba(9, 9, 11, 0.6), rgba(9, 9, 11, 1)), url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2000&auto=format&fit=crop') center/cover; }
        .hero-content { position: relative; z-index: 10; max-width: 800px; margin: 0 auto; }
        .hero-badge { display: inline-block; padding: 6px 14px; border-radius: 50px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.15); font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 24px; color: #a1a1aa; }
        .hero-title { font-size: 72px; line-height: 1.05; margin-bottom: 24px; letter-spacing: -2.5px; font-weight: 700; color: #ffffff; }
        .hero-subtitle { font-size: 20px; color: #a1a1aa; line-height: 1.6; margin-bottom: 40px; font-weight: 300; max-width: 600px; margin-left: auto; margin-right: auto; }
        
        /* Section Containers */
        .section-padding { padding: 120px 20px; max-width: 1200px; margin: 0 auto; }
        .section-title { font-size: 48px; letter-spacing: -1.5px; margin-bottom: 20px; font-weight: 700; }
        
        /* Image Split Section */
        .split-section { display: flex; flex-wrap: wrap; gap: 60px; align-items: center; margin-bottom: 120px; }
        .split-text { flex: 1 1 400px; }
        .split-image { flex: 1 1 400px; height: 600px; border-radius: 8px; background: url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop') center/cover; position: relative; }
        
        /* Feature Grid */
        .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 40px; }
        .feature-card { padding: 40px; background-color: #18181b; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); transition: transform 0.3s, border-color 0.3s; }
        .feature-card:hover { transform: translateY(-5px); border-color: rgba(255,255,255,0.2); }
        .feature-number { font-size: 14px; color: #71717a; margin-bottom: 20px; font-weight: 700; letter-spacing: 2px; }

        /* Pricing Packages */
        .pricing-card { background-color: #18181b; padding: 50px 40px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); text-align: left; transition: all 0.3s; }
        .pricing-card:hover { border-color: rgba(255,255,255,0.2); }
        .pricing-card.premium { background: linear-gradient(145deg, #18181b, #27272a); border-color: rgba(255,255,255,0.2); position: relative; }
        .price-value { font-size: 48px; font-weight: 700; letter-spacing: -2px; margin: 20px 0; display: flex; align-items: baseline; gap: 8px; }

        @media (max-width: 768px) {
          .hero-title { font-size: 48px; }
          .section-title { font-size: 36px; }
          .split-image { height: 400px; }
        }
      `}</style>

      {/* --- NAVIGATION --- */}
      <nav className="store-nav">
        <a href="/" className="logo">
          TAPFORMENU
        </a>
        <a href="#packages" className="btn-outline" style={{ padding: '8px 20px', fontSize: '13px' }}>View Packages</a>
      </nav>

      {/* --- CINEMATIC HERO SECTION --- */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">The Future of Hospitality</div>
          <h1 className="hero-title">
            Your menu.<br />Just a tap away.
          </h1>
          <p className="hero-subtitle">
            Upgrade your venue with premium NFC technology. Customers tap their phone to the table, and your menu appears instantly. No apps. No hunting for Wi-Fi. 
          </p>
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#packages" className="btn-primary">Upgrade Your Tables</a>
          </div>
        </div>
      </section>

      {/* --- SPLIT SHOWCASE --- */}
      <section id="how-it-works" className="section-padding">
        <div className="split-section">
          <div className="split-text">
            <h2 className="section-title">Kill the QR Code.</h2>
            <p style={{ color: '#a1a1aa', fontSize: '18px', lineHeight: '1.6', marginBottom: '30px' }}>
              Sticky, peeling paper menus and blurry QR codes belong in the past. Powered by the Link Supply ecosystem, TapForMenu lets you place sleek, un-intrusive NFC tags across your venue.
            </p>
            <p style={{ color: '#a1a1aa', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px' }}>
              Changed your specials? 86'd a dish? Update the link in your dashboard, and all 50 tables update instantly in real-time without reprinting a single piece of paper.
            </p>
            <a href="#packages" className="btn-outline">See Pricing</a>
          </div>
          <div className="split-image"></div>
        </div>

        {/* --- FEATURE GRID --- */}
        <div className="feature-grid">
          <div className="feature-card">
            <div className="feature-number">01 // PLACEMENT</div>
            <h3 style={{ fontSize: '24px', marginBottom: '15px', fontWeight: '500' }}>Stick and Forget</h3>
            <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: '1.6' }}>
              Our durable, waterproof NFC tags mount seamlessly to tables, bar tops, or host stands, blending in perfectly with premium venue decor.
            </p>
          </div>
          
          <div className="feature-card">
            <div className="feature-number">02 // INTERACTION</div>
            <h3 style={{ fontSize: '24px', marginBottom: '15px', fontWeight: '500' }}>Instant Access</h3>
            <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: '1.6' }}>
              Guests simply hover their iPhone or Android over the tag. The native OS picks it up immediately—zero app downloads required.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-number">03 // CONTROL</div>
            <h3 style={{ fontSize: '24px', marginBottom: '15px', fontWeight: '500' }}>Live Updates</h3>
            <p style={{ color: '#a1a1aa', fontSize: '15px', lineHeight: '1.6' }}>
              Log into your Link Supply dashboard to redirect the tag instantly. Complete control over your entire floor's digital routing.
            </p>
          </div>
        </div>
      </section>

      {/* --- PRICING PACKAGES --- */}
      <section id="packages" className="section-padding" style={{ backgroundColor: '#000000' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px', maxWidth: '700px', margin: '0 auto 80px auto' }}>
          <h2 className="section-title">Hardware Packages</h2>
          <p style={{ color: '#a1a1aa', fontSize: '18px' }}>Includes premium NFC hardware and full access to the cloud management dashboard.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px', maxWidth: '1000px', margin: '0 auto' }}>
          
          {/* Cafe Package */}
          <div className="pricing-card">
            <h3 style={{ fontSize: '24px', color: '#a1a1aa', fontWeight: '400' }}>The Café</h3>
            <div className="price-value">15 <span style={{ fontSize: '20px', color: '#71717a', fontWeight: '400' }}>Tags</span></div>
            <p style={{ color: '#71717a', fontSize: '15px', marginBottom: '40px', paddingBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              Perfect for coffee shops, small pubs, and intimate venues.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', color: '#e4e4e7', fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: '#ffffff' }}>✦</span> 15 Waterproof Table Tags</li>
              <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: '#ffffff' }}>✦</span> Cloud Management Dashboard</li>
              <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: '#ffffff' }}>✦</span> Instant Link Routing</li>
              <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: '#ffffff' }}>✦</span> Basic Tap Analytics</li>
            </ul>
            
            <a href="https://linksupply.co.uk/register" className="btn-outline" style={{ width: '100%', textAlign: 'center' }}>Select Package</a>
          </div>

          {/* Restaurant Package */}
          <div className="pricing-card premium">
            <div style={{ position: 'absolute', top: '-12px', right: '30px', backgroundColor: '#ffffff', color: '#000000', fontSize: '12px', fontWeight: '700', padding: '6px 12px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Most Popular
            </div>
            <h3 style={{ fontSize: '24px', color: '#ffffff', fontWeight: '400' }}>The Restaurant</h3>
            <div className="price-value">50 <span style={{ fontSize: '20px', color: '#71717a', fontWeight: '400' }}>Tags</span></div>
            <p style={{ color: '#a1a1aa', fontSize: '15px', marginBottom: '40px', paddingBottom: '30px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              Designed for full-service restaurants and hospitality groups.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', color: '#e4e4e7', fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: '#ffffff' }}>✦</span> 50 Premium Table Tags</li>
              <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: '#ffffff' }}>✦</span> Custom Branding Options</li>
              <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: '#ffffff' }}>✦</span> Cloud Management Dashboard</li>
              <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: '#ffffff' }}>✦</span> Instant Link Routing</li>
              <li style={{ display: 'flex', gap: '10px' }}><span style={{ color: '#ffffff' }}>✦</span> Advanced Tap Analytics</li>
            </ul>
            
            <a href="https://linksupply.co.uk/register" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Select Package</a>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={{ backgroundColor: '#09090b', color: '#71717a', padding: '60px 20px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
        <a href="/" className="logo" style={{ color: '#ffffff', justifyContent: 'center', marginBottom: '20px', fontSize: '16px' }}>
          TAPFORMENU
        </a>
        <p style={{ fontSize: '14px' }}>Powered by Link Supply Ecosystem.</p>
        <p style={{ fontSize: '14px', marginTop: '10px' }}>© 2026 TapForMenu. All rights reserved.</p>
      </footer>
    </div>
  )
}
