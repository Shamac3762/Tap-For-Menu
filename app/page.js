'use client'
import React from 'react'

export default function TapForMenu() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#FAF6F0', fontFamily: '"Georgia", serif', color: '#4A3B32', overflowX: 'hidden' }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        
        /* Typography */
        h1, h2, h3 { font-family: 'Georgia', serif; font-weight: 400; color: #2C221C; }
        p, a, button, span, ul, li { font-family: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif'; }
        
        /* Nav */
        .store-nav { padding: 25px 50px; display: flex; justify-content: space-between; align-items: center; background-color: transparent; position: absolute; top: 0; width: 100%; z-index: 50; }
        .logo { font-size: 24px; color: #2C221C; letter-spacing: 1px; display: flex; align-items: center; text-decoration: none; font-weight: 600; }
        
        /* Buttons */
        .btn-terracotta { background-color: #D97757; color: white; padding: 14px 28px; border-radius: 8px; font-weight: 600; font-size: 15px; cursor: pointer; border: none; transition: all 0.3s ease; text-decoration: none; display: inline-block; }
        .btn-terracotta:hover { background-color: #C16648; transform: translateY(-2px); box-shadow: 0 8px 15px rgba(217, 119, 87, 0.2); }
        
        .btn-outline { background-color: transparent; color: #4A3B32; padding: 12px 26px; border-radius: 8px; font-weight: 600; font-size: 15px; cursor: pointer; border: 2px solid #4A3B32; transition: all 0.3s ease; text-decoration: none; display: inline-block; }
        .btn-outline:hover { background-color: #4A3B32; color: #FAF6F0; }

        /* Hero */
        .hero-section { padding: 160px 20px 100px 20px; max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; gap: 60px; align-items: center; }
        .hero-text { flex: 1 1 500px; }
        .hero-title { font-size: 64px; line-height: 1.1; margin-bottom: 25px; letter-spacing: -1px; }
        .hero-subtitle { font-size: 18px; color: #69574D; line-height: 1.6; margin-bottom: 40px; font-weight: 400; max-width: 480px; }
        
        /* Wood/Image Frame Placeholder */
        .image-frame { flex: 1 1 400px; height: 550px; background: linear-gradient(145deg, #e6dace, #f5ebd9); border-radius: 20px; box-shadow: 0 20px 40px rgba(44, 34, 28, 0.08); position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center; border: 8px solid white; }
        
        /* Section Containers */
        .section-padding { padding: 100px 20px; max-width: 1200px; margin: 0 auto; }
        
        /* Feature Grid */
        .feature-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; margin-top: 60px; }
        .feature-card { padding: 40px; background-color: white; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,0.03); transition: transform 0.3s; }
        .feature-card:hover { transform: translateY(-5px); }
        .feature-icon { width: 50px; height: 50px; background-color: #FDF9F5; border-radius: 12px; display: flex; align-items: center; justify-content: center; font-size: 24px; margin-bottom: 20px; color: #D97757; }

        @media (max-width: 768px) {
          .store-nav { padding: 20px; }
          .hero-section { padding: 120px 20px 60px 20px; }
          .hero-title { font-size: 42px; }
          .image-frame { height: 400px; }
        }
      `}</style>

      {/* --- NAVIGATION --- */}
      <nav className="store-nav">
        <a href="/" className="logo">
          TapForMenu<span style={{ color: '#D97757' }}>.</span>
        </a>
        <a href="#packages" className="btn-outline" style={{ padding: '8px 20px' }}>View Packages</a>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="hero-section">
        <div className="hero-text">
          <span style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '2px', color: '#D97757', fontWeight: '700', marginBottom: '15px', display: 'block' }}>
            For Restaurants & Hospitality
          </span>
          <h1 className="hero-title">
            Your menu, <br />
            just a tap away.
          </h1>
          <p className="hero-subtitle">
            Upgrade your venue with beautiful, wooden-finish NFC tags. Customers simply tap their phone to the table to view your menu instantly. No apps, no blurry QR codes, no sticky paper menus.
          </p>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <a href="#packages" className="btn-terracotta">Upgrade Your Tables</a>
            <a href="#how-it-works" className="btn-outline" style={{ border: 'none', textDecoration: 'underline' }}>See how it works</a>
          </div>
        </div>

        {/* This is where your AI-generated image will go. Just replace this div with an <img src="/your-image.jpg" /> later */}
        <div className="image-frame">
          <div style={{ textAlign: 'center', padding: '40px' }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>📱✨🍽️</div>
            <p style={{ fontFamily: '"Segoe UI", sans-serif', color: '#8B7365', fontSize: '14px', lineHeight: '1.5' }}>
              [Insert Image Here: A warm, cinematic photo of an iPhone tapping a wooden NFC disk on a beautifully lit restaurant table, with the menu opening on the screen.]
            </p>
          </div>
        </div>
      </section>

      {/* --- HOW IT WORKS / VALUE PROP --- */}
      <section id="how-it-works" style={{ backgroundColor: '#2C221C', color: '#FAF6F0' }}>
        <div className="section-padding">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px auto' }}>
            <h2 style={{ fontSize: '42px', color: '#FAF6F0', marginBottom: '20px' }}>The modern dining experience.</h2>
            <p style={{ color: '#A89B93', fontSize: '18px', lineHeight: '1.6' }}>
              Powered by Link Supply technology, you can manage the menus for your entire venue from one simple dashboard.
            </p>
          </div>

          <div className="feature-grid">
            <div className="feature-card" style={{ backgroundColor: '#382D26', color: '#FAF6F0', boxShadow: 'none' }}>
              <div className="feature-icon" style={{ backgroundColor: '#4A3B32', color: '#FAF6F0' }}>1</div>
              <h3 style={{ color: '#FAF6F0', fontSize: '22px', marginBottom: '15px' }}>Place the Tags</h3>
              <p style={{ color: '#A89B93', fontSize: '15px', lineHeight: '1.6' }}>
                Stick our durable, waterproof NFC tags to your tables, bar top, or host stand. They blend perfectly with upscale decor.
              </p>
            </div>
            
            <div className="feature-card" style={{ backgroundColor: '#382D26', color: '#FAF6F0', boxShadow: 'none' }}>
              <div className="feature-icon" style={{ backgroundColor: '#4A3B32', color: '#FAF6F0' }}>2</div>
              <h3 style={{ color: '#FAF6F0', fontSize: '22px', marginBottom: '15px' }}>Customers Tap</h3>
              <p style={{ color: '#A89B93', fontSize: '15px', lineHeight: '1.6' }}>
                Guests simply hover their iPhone or Android over the tag. No app downloads required, and no hunting for Wi-Fi.
              </p>
            </div>

            <div className="feature-card" style={{ backgroundColor: '#382D26', color: '#FAF6F0', boxShadow: 'none' }}>
              <div className="feature-icon" style={{ backgroundColor: '#4A3B32', color: '#FAF6F0' }}>3</div>
              <h3 style={{ color: '#FAF6F0', fontSize: '22px', marginBottom: '15px' }}>Update Instantly</h3>
              <p style={{ color: '#A89B93', fontSize: '15px', lineHeight: '1.6' }}>
                Changed your specials? Log into your dashboard and update the routing link. All 50 tables update instantly without reprinting anything.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRICING PACKAGES --- */}
      <section id="packages" className="section-padding">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '42px', marginBottom: '15px' }}>Venue Packages</h2>
          <p style={{ color: '#69574D', fontSize: '18px' }}>Includes premium hardware and full access to the management dashboard.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '900px', margin: '0 auto' }}>
          
          {/* Cafe Package */}
          <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '16px', border: '1px solid #E6DACE', textAlign: 'center' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>The Café</h3>
            <div style={{ fontSize: '42px', color: '#2C221C', marginBottom: '20px' }}>15 Tags</div>
            <p style={{ color: '#69574D', fontSize: '15px', marginBottom: '30px', minHeight: '45px' }}>Perfect for coffee shops, small pubs, and intimate venues.</p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', textAlign: 'left', color: '#4A3B32', fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>✓ 15 Waterproof Table Tags</li>
              <li>✓ 1 Management Dashboard</li>
              <li>✓ Instant Link Updating</li>
              <li>✓ Tap Analytics</li>
            </ul>
            
            <a href="https://linksupply.co.uk/register" className="btn-outline" style={{ width: '100%', display: 'block' }}>Select Package</a>
          </div>

          {/* Restaurant Package */}
          <div style={{ backgroundColor: '#FAF6F0', padding: '40px', borderRadius: '16px', border: '2px solid #D97757', textAlign: 'center', position: 'relative', boxShadow: '0 20px 40px rgba(44, 34, 28, 0.05)' }}>
            <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#D97757', color: 'white', fontSize: '12px', fontWeight: '700', padding: '6px 16px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Most Popular
            </div>
            <h3 style={{ fontSize: '24px', marginBottom: '10px' }}>The Restaurant</h3>
            <div style={{ fontSize: '42px', color: '#2C221C', marginBottom: '20px' }}>50 Tags</div>
            <p style={{ color: '#69574D', fontSize: '15px', marginBottom: '30px', minHeight: '45px' }}>Designed for full-service restaurants and busy hospitality groups.</p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', textAlign: 'left', color: '#4A3B32', fontSize: '15px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>✓ 50 Waterproof Table Tags</li>
              <li>✓ Custom Branding Options</li>
              <li>✓ 1 Management Dashboard</li>
              <li>✓ Instant Link Updating</li>
              <li>✓ Advanced Analytics</li>
            </ul>
            
            <a href="https://linksupply.co.uk/register" className="btn-terracotta" style={{ width: '100%', display: 'block' }}>Select Package</a>
          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer style={{ backgroundColor: '#2C221C', color: '#A89B93', padding: '60px 20px', textAlign: 'center' }}>
        <a href="/" className="logo" style={{ color: '#FAF6F0', justifyContent: 'center', marginBottom: '20px' }}>
          TapForMenu<span style={{ color: '#D97757' }}>.</span>
        </a>
        <p style={{ fontSize: '14px' }}>Powered by Link Supply Ecosystem.</p>
        <p style={{ fontSize: '14px', marginTop: '10px' }}>© 2026 TapForMenu. All rights reserved.</p>
      </footer>
    </div>
  )
}
