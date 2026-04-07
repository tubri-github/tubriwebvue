<template>
  <!-- FIRST VIEWPORT -->
  <div class="front">
    <div class="hero">
      <img src="/img/JAR_SPECIMENS-0938.JPG" alt="">
      <div class="hero-ov"></div>
      <div class="hero-inner">
        <div class="hero-text">
          <h1>Royal D. Suttkus Fish Collection</h1>
          <p>Documenting the ichthyological diversity of the Gulf South and beyond</p>
        </div>
      </div>
    </div>

    <div class="spread">
      <div class="sp-a">
        <div class="sp-a-img">
          <img src="/img/JAR_SPECIMENS-1006.JPG" alt="">
        </div>
        <div class="sp-a-body">
          <h3>Tulane University Biodiversity Research Institute</h3>
        </div>
      </div>
      <div class="sp-c">
        <img src="/img/IMG_7320.jpg" alt="">
        <div class="sp-c-ov">
          <h3></h3>
        </div>
      </div>
    </div>
  </div>

  <!-- CONTINUOUS CONTENT -->
  <div class="content-flow">
    <div class="flow-about">
      <div class="flow-about-text">
        <p>The Tulane University Biodiversity Research Institute (TUBRI) is a private, non-profit zoological research center affiliated with <a href="https://www.tulane.edu/" target="_blank">Tulane University</a>. TUBRI contains two main divisions: the <router-link to="/collection">Royal D. Suttkus Fish Collection</router-link>, and <router-link to="/informatics">Biodiversity Informatics</router-link>. The former contains approximately eight million preserved specimens enabling discovery and study of the ichthyological diversity of the Gulf South and beyond. The latter develops the cyberinfrastructure needed to document, synthesize, and analyze biodiversity knowledge from natural history collections worldwide. TUBRI is an administrative unit of the <a href="https://sse.tulane.edu/" target="_blank">Tulane University School of Science and Engineering</a>. Brian L. Sidlauskas, Professor of Ecology and Evolutionary Biology serves as TUBRI Director. TUBRI physically occupies part of the F. Edward Hebert "Riverside" Research Center in the English Turn region of the Mississippi River, near Belle Chasse, Louisiana. <router-link to="/about">&rarr;</router-link></p>
      </div>
      <div class="flow-about-video">
        <iframe src="https://www.youtube.com/embed/OwXQr1f887U" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </div>

  <section class="col-section">
    <div class="col-head">
      <h2>The Collection</h2>
    </div>
    <div class="col-grid">
      <router-link to="/collection" class="col-feature">
        <img src="/img/RD Suttkus Collection-5232.JPG" alt="">
        <div class="col-feature-ov">
          <h3>Royal D. Suttkus Fish Collection</h3>
          <p>The world's largest collection of preserved postlarval fishes</p>
        </div>
      </router-link>
      <div class="col-side">
        <router-link to="/collection" class="col-card">
          <img src="/img/JAR_SPECIMENS-2243.JPG" alt="">
          <div class="col-card-ov"><h3>Fluid Preserved</h3></div>
        </router-link>
        <router-link to="/collection" class="col-card">
          <img src="/img/Suttkus_Fish_Collection_RC1_9001.jpg" alt="">
          <div class="col-card-ov"><h3>Skeletal Collection</h3></div>
        </router-link>
        <router-link to="/collection" class="col-card">
          <img src="/img/736b12a2-cd22-4dab-abda-dc3d86e9b804.png" alt="">
          <div class="col-card-ov"><h3>Future Collections</h3></div>
        </router-link>
      </div>
    </div>
  </section>

  <section class="research-band">
    <div class="research-band-head">
      <h2>Research &amp; Informatics</h2>
      <router-link to="/informatics">All projects &rarr;</router-link>
    </div>
    <router-link to="/informatics/tools#geolocate" class="r-card">
      <span class="tag">Software</span><h3>GEOLocate</h3>
      <p>The leading georeferencing application for collection event data worldwide.</p>
    </router-link>
    <router-link to="/informatics/tools#fishnet" class="r-card">
      <span class="tag">Network</span><h3>FishNet 2</h3>
      <p>Global network connecting ichthyology collections with unified specimen data access.</p>
    </router-link>
    <router-link to="/informatics/tools#imageomics" class="r-card">
      <span class="tag">Research</span><h3>Imageomics</h3>
      <p>Machine learning to extract biological traits from images of organisms.</p>
    </router-link>
    <router-link to="/informatics/tools#hydroclim" class="r-card">
      <span class="tag">Software</span><h3>HydroClim</h3>
      <p>Streamflow and water temperature predictions for ecological research.</p>
    </router-link>
  </section>

  <div class="wide-img">
    <img src="/img/TUBRI-3 Wild Boar Road-1041.JPG" alt="">
    <span class="wide-img-cap">F. Edward H&eacute;bert "Riverside" Research Center, Belle Chasse, LA</span>
  </div>

  <div class="donate">
    <div class="donate-icon"><img src="/img/SFClogo2012_small.jpg" alt="SFC Logo"></div>
    <div>
      <h3>Royal D. Suttkus Memorial Fund</h3>
      <p>Proceeds are used solely to support the Fish Collection and associated ichthyological literature.</p>
    </div>
    <router-link to="/opportunities/donating" class="donate-btn">Donate</router-link>
  </div>
</template>

<style scoped>
.front {
  padding-top: 80px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.hero {
  position: relative;
  flex: 1 1 auto;
  min-height: 340px;
  overflow: hidden;
  background: var(--c-dark);
}
.hero img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: fill; transform: scaleY(1.5); transform-origin: bottom;
  opacity: 0.75;
}
.hero-ov {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%, rgba(0,0,0,0.15) 100%);
}
.hero-inner {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 32px 48px; z-index: 2;
  display: flex; justify-content: space-between; align-items: flex-end; gap: 40px;
}
.hero-text h1 {
  font-family: var(--f-heading);
  font-size: clamp(38px, 4.5vw, 64px);
  font-weight: 700; color: #fff; line-height: 1.08; margin-bottom: 8px;
}
.hero-text p {
  font-size: 17px; color: rgba(255,255,255,0.55);
  max-width: 600px; white-space: nowrap;
}
.spread {
  flex-shrink: 0;
  display: grid; grid-template-columns: 1.2fr 1fr;
  background: var(--c-surface);
}
.sp-a { display: flex; flex-direction: column; }
.sp-a-img { height: 180px; overflow: hidden; background: var(--c-placeholder-3); }
.sp-a-img img { width: 100%; height: 100%; object-fit: cover; object-position: center 70%; }
.sp-a-body { padding: 20px 24px 24px 48px; flex: 1; }
.sp-a-body h3 {
  font-family: var(--f-heading); font-size: 22px; font-weight: 700;
  line-height: 1.2; margin-bottom: 6px; color: #255c4e;
}
.sp-c {
  position: relative; overflow: hidden;
  background: var(--c-placeholder-1); min-height: 260px;
}
.sp-c img {
  position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.5s ease;
}
.sp-c:hover img { transform: scale(1.03); }
.sp-c-ov {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
  display: flex; flex-direction: column; justify-content: flex-end; padding: 24px;
}
.sp-c-ov h3 {
  font-family: var(--f-heading); font-size: 22px; font-weight: 700;
  color: #fff; line-height: 1.2;
}
.content-flow { background: var(--c-surface); }
.flow-about {
  display: grid; grid-template-columns: 1.2fr 1fr; gap: 0; padding-bottom: 48px;
}
.flow-about-text { padding: 48px 36px 0 48px; }
.flow-about-text p { font-size: 17px; line-height: 1.85; color: var(--c-text-secondary); }
.flow-about-text p + p { margin-top: 14px; }
.flow-about-text p a { color: var(--c-accent); font-weight: 500; }
.flow-about-video {
  position: relative; aspect-ratio: 16/10; background: #000; overflow: hidden; align-self: start;
}
.flow-about-video iframe {
  position: absolute; inset: 0; width: 100%; height: 100%; border: none;
}
.col-section { padding: 0 48px 56px; background: var(--c-surface); }
.col-head { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 28px; }
.col-head h2 {
  font-family: var(--f-heading); font-size: clamp(30px, 3.5vw, 46px);
  font-weight: 700; color: #255c4e;
}
.col-grid { display: grid; grid-template-columns: 56% 1fr; gap: 0; }
.col-feature {
  position: relative; overflow: hidden; aspect-ratio: 4/3; background: var(--c-placeholder-3);
}
.col-feature img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.col-feature-ov {
  position: absolute; bottom: 0; left: 0; right: 0; padding: 28px;
  background: linear-gradient(to top, rgba(0,0,0,0.65), transparent);
}
.col-feature-ov h3 { font-family: var(--f-heading); font-size: 28px; font-weight: 700; color: #fff; }
.col-feature-ov p { font-size: 15px; color: rgba(255,255,255,0.6); margin-top: 6px; line-height: 1.5; }
.col-side { display: grid; grid-template-rows: 2fr 2fr 1fr; gap: 0; }
.col-card { position: relative; overflow: hidden; background: var(--c-placeholder-1); }
.col-card:nth-child(2) { background: var(--c-placeholder-3); }
.col-card:nth-child(3) { background: var(--c-placeholder-2); }
.col-card img {
  position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.5s ease;
}
.col-card:hover img { transform: scale(1.03); }
.col-card-ov {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
  display: flex; flex-direction: column; justify-content: flex-end; padding: 24px;
}
.col-card-ov h3 {
  font-family: var(--f-heading); font-size: 22px; font-weight: 700;
  color: #fff; line-height: 1.2;
}
.research-band {
  background: var(--c-dark); color: #fff; padding: 56px 48px;
  display: grid; grid-template-columns: 1fr 1fr; gap: 24px;
}
.research-band-head {
  grid-column: 1/-1;
  display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 8px;
}
.research-band-head h2 { font-family: var(--f-heading); font-size: 38px; font-weight: 700; color: #fff; }
.research-band-head a { font-size: 15px; color: var(--c-accent-light); font-weight: 600; }
.r-card {
  padding: 28px; border: 1px solid rgba(255,255,255,0.08); transition: border-color 0.2s;
}
.r-card:hover { border-color: rgba(255,255,255,0.2); }
.r-card .tag {
  font-size: 10px; text-transform: uppercase; letter-spacing: 0.1em;
  color: var(--c-accent-light); font-weight: 700; margin-bottom: 10px; display: block;
}
.r-card h3 { font-family: var(--f-heading); font-size: 24px; font-weight: 700; margin-bottom: 8px; }
.r-card p { font-size: 15px; line-height: 1.65; color: rgba(255,255,255,0.5); }
.wide-img { position: relative; height: 38vh; min-height: 240px; overflow: hidden; }
.wide-img img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.wide-img-cap {
  position: absolute; bottom: 14px; right: 20px;
  font-size: 11px; color: rgba(255,255,255,0.5);
  background: rgba(0,0,0,0.25); padding: 4px 10px;
}
.donate {
  background: var(--c-accent); color: #fff; padding: 44px 48px;
  display: grid; grid-template-columns: auto 1fr auto; gap: 28px; align-items: center;
}
.donate-icon { width: 64px; height: 64px; overflow: hidden; border-radius: 50%; border: 2px solid rgba(255,255,255,0.2); }
.donate-icon img { width: 100%; height: 100%; object-fit: cover; }
.donate h3 { font-family: var(--f-heading); font-size: 24px; font-weight: 700; margin-bottom: 3px; }
.donate p { font-size: 15px; line-height: 1.6; color: rgba(255,255,255,0.7); max-width: 500px; }
.donate-btn {
  padding: 14px 28px; background: #fff; color: var(--c-accent);
  font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em;
}

@media (max-width: 1024px) {
  .spread { grid-template-columns: 1fr 1fr; }
  .research-band { grid-template-columns: 1fr; }
}
@media (max-width: 768px) {
  .hero-inner { flex-direction: column; align-items: flex-start; gap: 16px; padding: 24px; }
  .spread { grid-template-columns: 1fr; }
  .flow-about { grid-template-columns: 1fr; }
  .flow-about-text { padding: 32px 24px 0; }
  .col-section { padding: 36px 24px; }
  .col-grid { grid-template-columns: 1fr; gap: 0; }
  .col-feature { aspect-ratio: 16/9; }
  .col-side { grid-template-rows: 1fr 1fr 1fr; }
  .col-card { min-height: 180px; }
  .research-band { padding: 36px 24px; }
  .donate { grid-template-columns: 1fr; padding: 28px 24px; text-align: center; }
  .donate-icon { margin: 0 auto; }
}
</style>