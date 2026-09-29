// Last year's photo slider (built from GALLERY data at runtime) and the curtain raiser YouTube link.
export default function Gallery() {
  return (
    <section className="sheet beyond dark-sec" id="gallery" aria-labelledby="gal-h">
 <div className="wrap gal-head">
  <div><span className="kick" style={{"color": "var(--marigold)"}}>Vijayawada Utsav, last year</span><h2 id="gal-h" className="sp" style={{"marginTop": "14px"}}>Last year's Utsav</h2></div>
  <div className="gal-ctrl"><span className="gal-count" id="galcount" aria-live="polite">01 / 24</span><button className="icon-btn" id="galprev" type="button" aria-label="Previous photo">←</button><button className="icon-btn" id="galnext" type="button" aria-label="Next photo">→</button></div>
 </div>
 <div className="gal rvm" id="gal" role="region" aria-label="Photos from last year's Vijayawada Utsav" tabIndex="0"></div>
 <div className="wrap">
  <div className="gal-prog" aria-hidden="true"><i id="galbar"></i></div>
  <a className="vid rv" href="https://www.youtube.com/live/2DurlDlOLL4?si=8_qszguu5W6IhUHT" target="_blank" rel="noopener" data-cursor="Watch">
   <span className="vid-play"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg></span>
   <span className="vid-txt"><small>Watch on YouTube</small><b>The 2026 curtain raiser</b><span>The launch of Vijayawada Utsav 2026, streamed live.</span></span>
   <span className="vid-logo" aria-hidden="true"><img className="logo-img" alt="" /></span>
  </a>
 </div>
</section>
  );
}
