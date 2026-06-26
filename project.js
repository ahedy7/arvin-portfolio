(() => {
  const data = {
    pudo: {
      category: 'Autonomous Mobility · Spatial Optimization',
      title: 'NYC AV PUDO Index',
      year: '2026',
      tag: 'NKDE · MCLP · Equity weighting',
      lead: 'Where should autonomous vehicles legally stop? Siting pick-up / drop-off zones across Manhattan from real demand, curb constraints, and road geometry.',
      live: 'https://ahedy7.github.io/nyc-av-pudo-index/',
      repo: 'https://github.com/ahedy7/nyc-av-pudo-index',
      repoLabel: 'ahedy7 / nyc-av-pudo-index',
      img: 'assets/pudo-dashboard-50.png',
      imgFit: 'contain',
      imgLink: 'https://ahedy7.github.io/nyc-av-pudo-index/',
      caption: 'The interactive dashboard: toggle Manhattan vs Porto, base vs equity optimization, and slide the station count to watch coverage update live.',
      overview: [
        'As Waymo and its competitors become real transportation infrastructure, a concrete problem appears: where do these vehicles actually stop? Curb space is scarce and contested, and unlike a human driver an autonomous vehicle needs a guaranteed, legal, predictable place to pull over. This is the siting decision that comes before operational simulation or fleet routing, not a replacement for one: it picks where those PUDO stations should go.',
        'Using 2010 NYC yellow-taxi pickups (the most recent public NYC ride data with true coordinates), OpenStreetMap road geometry, and curb-constraint layers from NYC Open Data, it builds a demand surface along the road network with Network Kernel Density Estimation, then solves a Maximal Coverage Location Problem to select the station set covering the most demand within a 500 m network walk.',
        'An equity-weighted variant reweights demand using ACS income and vehicle-access data toward transit-dependent, lower-income tracts, pulling stations toward the West Village, East Harlem, and the Lower East Side, and measures the coverage cost of that tradeoff at the neighborhood level. The whole pipeline is refactored to be config-driven, running on any city from lat/lon points alone, and is validated on 1.7M taxi trajectories in Porto, Portugal. It builds on Wang et al. (2025) and Hunter & Kockelman (2023), extended here with curb-constraint layers and an equity component they list as future work.'
      ],
      methods: ['Network Kernel Density Estimation (demand surface)', 'Maximal Coverage Location Problem (PuLP / CBC)', 'Curb-constraint candidate filtering', 'ACS income + vehicle-access equity weighting', 'Config-driven generalization (validated on Porto)'],
      results: [
        { label: 'Manhattan demand covered, 100 sites', value: '95.3%' },
        { label: 'Practical fleet-size knee', value: '~100' },
        { label: 'Generalized to a second city, zero code changes', value: 'Porto, 1.7M trips', hasSub: true, sub: '90.7% at 70 sites' }
      ],
      stack: ['Python', 'GeoPandas', 'osmnx', 'pandana', 'PuLP / CBC', 'deck.gl', 'PostGIS'],
      evaluation: [
        'Coverage is reported as an explicit demand-vs-sites curve, not a single number. The diminishing returns past ~100 sites is the real fleet-size signal.',
        'Scoped honestly: this is the siting decision that comes before operational simulation or fleet routing, not a replacement for one. Generalization stress-tested on 1.7M trips in Porto.'
      ]
    },
    tick: {
      category: 'Disease Ecology · Citizen-Science Bias Correction',
      title: 'Lone Star Tick Range Expansion',
      year: '2026',
      tag: 'Effort correction · Empirical Bayes · deck.gl',
      lead: 'The lone star tick is moving north — and its bite can trigger a red-meat allergy. A map you scrub through time to watch its leading edge climb, built to not fool itself.',
      live: 'https://ahedy7.github.io/lone-star-tick-spread/',
      repo: 'https://github.com/ahedy7/lone-star-tick-spread',
      repoLabel: 'ahedy7 / lone-star-tick-spread',
      img: 'https://raw.githubusercontent.com/ahedy7/lone-star-tick-spread/master/reports/figures/stage4_frontier_advance.gif',
      imgLink: 'https://ahedy7.github.io/lone-star-tick-spread/',
      caption: 'The corrected northern edge advancing over the decade. The climbing crimson line is the per-longitude 95th-percentile latitude of positive cells; the dashed line is the 2015–2017 baseline.',
      overview: [
        'The lone star tick used to be a Southern creature; over recent decades it has crept north into New York and New England. The practical question for anyone in the Northeast is simple: is it coming, and how fast? This project answers with a map you drag through time to watch the leading edge advance year by year.',
        'The hard part is that the underlying sightings come from citizen-science apps whose popularity has exploded — so a raw count of tick reports mostly measures where people are looking, not where the ticks are. The core move cancels that bias: for each H3 cell and rolling time window it measures the share of all hard-tick spotting that was lone star, so platform growth and observer density divide out. Empirical-Bayes shrinkage stabilizes thin, single-sighting cells.',
        'To keep itself honest, the result is checked against the CDC’s official county establishment records and an independent NEON drag-cloth survey, and the map auto-refreshes monthly behind a data-freshness guard. The transferable idea outlasts the ticks: the first question to ask of any crowdsourced map is not where the events are, but where they would be if everyone were looking equally hard.'
      ],
      methods: ['Effort-share bias correction (lone star / all hard ticks)', 'Beta-binomial empirical-Bayes shrinkage', 'H3 hexagonal binning + rolling windows', 'CDC + NEON independent validation', 'Monthly auto-refresh (GitHub Actions)'],
      results: [
        { label: 'Northern-edge advance per decade', value: '~66 km' },
        { label: 'CDC validation precision (lenient)', value: '93.7%' },
        { label: 'CDC validation precision (strict)', value: '77.6%' }
      ],
      stack: ['Python', 'GBIF / iNaturalist', 'H3', 'deck.gl', 'MapLibre', 'GitHub Actions'],
      evaluation: [
        'Validated against the CDC’s official county establishment records and an independent NEON drag-cloth survey — not self-graded.',
        'Stated plainly as a ~66 km/decade signal, not a dramatic migration; the recall gap tracks where people look, not where ticks are.'
      ],
      reception: 'Reached the front page of r/dataisbeautiful (250+ upvotes) and prompted extended public discussion of the finding’s public-health implications, including the rise in tick-borne illness and alpha-gal syndrome along the northeastern US.'
    },
    infra: {
      category: 'Urban Infrastructure · Composite Indexing',
      title: 'NYC Infrastructure Stress Index',
      year: '2026',
      tag: 'Composite index · Monte Carlo · Plotly Dash',
      lead: 'Where in New York is infrastructure under the most stress — and which neighborhoods turn disproportionately brittle under pressure relative to their own baseline?',
      live: 'https://nyc-infrastructure-stress.onrender.com',
      repo: 'https://github.com/ahedy7/nyc-infrastructure-stress',
      repoLabel: 'ahedy7 / nyc-infrastructure-stress',
      img: 'assets/infra-stress-dashboard.png',
      imgLink: 'https://nyc-infrastructure-stress.onrender.com',
      caption: 'The Plotly Dash dashboard, baseline-stress view — toggle to the event-week delta to see which neighborhoods spike hardest above their own norm. Deployed on Render.',
      overview: [
        'This tool answers one question: where in New York City is infrastructure under the most stress, and which neighborhoods become disproportionately brittle compared to their own baseline during high-stress periods? A planner reads it as where to prioritize capital; a technology company reads it as a neighborhood-level reliability signal for routing and simulation.',
        'Four independent failure signals — 311 infrastructure complaints, MTA subway delays, power-outage complaints, and FEMA flood-hazard exposure — are spatially joined to New York’s 262 Neighborhood Tabulation Areas, z-score standardized onto a common scale, and averaged with equal weights into one comparable baseline stress surface. Fordham Heights and the South Bronx emerge as most chronically stressed across all four dimensions at once.',
        'Chronic rankings alone miss the neighborhoods that fail hard only under pressure, so an event-week layer uses a Monte-Carlo bootstrap to model weekly variance and computes a per-NTA delta against each area’s own baseline. Midtown and the Financial District show low chronic stress but high event deltas — low-baseline systems that buckle under load — while Crown Heights South carries both, marking it the highest priority for resilience investment.'
      ],
      methods: ['Multi-source spatial join to 262 NTAs', 'Z-score composite stress index (equal weights)', 'Monte-Carlo event-week bootstrap', 'Per-NTA delta vs own baseline', 'Baseline / event toggle dashboard'],
      results: [
        { label: 'Most chronically stressed', value: 'Fordham Hts' },
        { label: 'Highest event delta', value: 'Midtown' },
        { label: 'Compounding (high + high)', value: 'Crown Hts S' }
      ],
      stack: ['Python', 'GeoPandas', 'Shapely', 'Plotly Dash', 'Render'],
      evaluation: [
        'Equal weights chosen deliberately to avoid arbitrary assumptions; the potential flood/outage double-counting is flagged openly rather than hidden.',
        'Event weeks are Monte-Carlo simulated, not yet tied to real calendar dates — documented as the next step rather than overstated.'
      ]
    },
    surveillance: {
      category: 'Research · Surveillance Studies',
      title: 'Who’s Accountable for the Sensing City? Trust, Not Awareness, Drives How Residents Accept Urban Surveillance',
      year: '2026',
      tag: 'Semi-structured interviews · 9 Montréal residents',
      lead: 'Residents can’t name the technologies monitoring them — yet their acceptance turns almost entirely on who holds the data.',
      hasLive: false,
      hasRepo: false,
      essay: true,
      footnote: 'SOCI 235 · Final paper · McGill University · 2026'
    }
  };

  const ORDER = ['pudo', 'tick', 'infra', 'surveillance'];
  const CYCLE = { pudo: 'tick', tick: 'infra', infra: 'pudo', surveillance: 'pudo' };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }

  function actionsHtml(p) {
    let out = '';
    if (p.hasLive) {
      out += `<a href="${esc(p.live)}" target="_blank" rel="noopener" class="btn-solid">Live dashboard <span style="font-size:13px;">↗</span></a>`;
    }
    if (p.hasRepo) {
      out += `<a href="${esc(p.repo)}" target="_blank" rel="noopener" class="btn-outline">GitHub repository <span style="font-size:13px;">↗</span></a>`;
    }
    return out;
  }

  function visualHtml(p) {
    if (!p.img) return '';
    return `
      <section class="visual">
        <div class="visual-frame">
          <a href="${esc(p.imgLink || p.img)}" target="_blank" rel="noopener" style="display:block;width:100%;height:100%;text-decoration:none;">
            <img src="${esc(p.img)}" alt="${esc(p.title)} dashboard" style="object-fit:${esc(p.imgFit || 'cover')};">
          </a>
        </div>
        <div class="visual-foot">
          <div class="caption">${esc(p.caption || '')}</div>
          ${p.hasLive ? `<a href="${esc(p.live)}" target="_blank" rel="noopener" class="open-live">Open it live →</a>` : ''}
        </div>
      </section>`;
  }

  function overviewHtml(p) {
    const paras = (p.overview || []).map((para) => `<p>${esc(para)}</p>`).join('');
    const note = p.hasRepo ? `<p class="repo-note">This page is a summary. For the full procedure — data sources, methodology, and detailed analysis — read the complete README on <a href="${esc(p.repo)}" target="_blank" rel="noopener">the project repository&nbsp;→</a></p>` : '';
    return `<div class="overview">${paras}${note}</div>`;
  }

  function sidebarHtml(p) {
    const hasResults = Array.isArray(p.results) && p.results.length > 0;
    const hasEval = Array.isArray(p.evaluation) && p.evaluation.length > 0;

    const methods = (p.methods || []).map((m) => `<div class="method-row"><span class="arrow">→</span><span>${esc(m)}</span></div>`).join('');

    const results = hasResults ? `
      <div>
        <h3>Key results</h3>
        ${p.results.map((r) => `
          <div class="result-row">
            <span class="label">${esc(r.label)}</span>
            <span class="val-wrap">
              <span class="val">${esc(r.value)}</span>
              ${r.hasSub ? `<span class="sub">${esc(r.sub)}</span>` : ''}
            </span>
          </div>`).join('')}
      </div>` : '';

    const evalSection = hasEval ? `
      <div>
        <h3>Evaluation &amp; honest limits</h3>
        ${p.evaluation.map((e) => `<p class="eval-item">${esc(e)}</p>`).join('')}
      </div>` : '';

    const stack = (p.stack || []).map((s) => `<span class="stack-chip">${esc(s)}</span>`).join('');

    const repoCard = p.hasRepo ? `
      <a href="${esc(p.repo)}" target="_blank" rel="noopener" class="repo-card">
        <div class="eyebrow">Source code</div>
        <div class="name">${esc(p.repoLabel)}<span>↗</span></div>
      </a>` : '';

    return `
      <aside>
        <div><h3>Methods</h3>${methods}</div>
        ${results}
        ${evalSection}
        <div><h3>Stack</h3><div class="stack-wrap">${stack}</div></div>
        ${repoCard}
      </aside>`;
  }

  function essayHtml(p) {
    return `
      <section class="essay">
        <p>Cities are deploying interconnected sensing infrastructure — cameras, plate readers, Bluetooth sensors, transit cards that log every tap — faster than they are building the legitimacy to sustain it. This study tests the academic “surveillance as social control” framework against how nine Montreal residents actually experience that infrastructure, through semi-structured interviews coded across awareness, framing, trust, and conditionality. The framework largely doesn’t hold, and the way it breaks is the finding.</p>

        <p>Awareness turns out to be shallow and reactive. Asked unprompted what monitors public space, all nine named cameras and little else; Opus logging, plate readers, and the city’s smart-city office were almost entirely unknown, and one lifelong transit user moved through the system daily without realizing it existed. What drives acceptance instead is institutional trust — residents calibrated their comfort to who held the data rather than what the technology did, reading government as accountable and private firms as unpredictable. That pattern held even for the one participant who inverted it, and it mirrors the quantitative literature on trust as a moderator of privacy concern.</p>

        <p class="pullquote">“Even apps we have that give us terms and conditions are kind of digital consent, but for some reason cameras and government surveillance don’t want to apply that.”<span class="attrib">— Thomas, interview participant</span></p>

        <p>The deeper result is about consent. Residents could intellectually accept that they live inside a system of control and still feel no friction within it. The sharpest critique reframed the problem entirely: the issue isn’t that people fail to realize they’ve consented, it’s that they never were asked. They’ve imported a consent expectation from digital platforms — the terms-of-service click — and apply it to urban infrastructure that offers no equivalent.</p>

        <p>That reframes public acceptance as a problem of accountability, not communication. Residents aren’t hostile to sensing because they misunderstand it; they’re uncomfortable when they can’t identify who’s accountable, when data use looks commercial, and when no path exists to participate in the decision. For anyone deploying location or sensing infrastructure, that reads less like a PR concern and more like an operating spec: be legible about what’s collected and by whom, and build an actual consent surface. The legitimacy gap closes through accountability, not education.</p>

        <div class="paper-row">
          <a href="assets/soci-235-surveillance-paper.pdf" download="soci-235-surveillance-paper.pdf" class="btn-outline">Read the full paper (PDF) <span style="font-size:13px;">↓</span></a>
        </div>

        <p class="companion">A companion to the observation-bias work in the <a href="project.html?p=tick">Lone Star Tick project</a>: both examine the gap between what gets recorded and what's real, mediated by who's doing the observing — one in the data, one in the city.</p>

        <p class="footnote">${esc(p.footnote || '')}</p>
      </section>`;
  }

  function render() {
    const params = new URLSearchParams(window.location.search);
    const pid = ORDER.includes(params.get('p')) ? params.get('p') : 'pudo';
    const p = data[pid];

    document.title = `${p.title} — Arvin Hedayat`;

    const hasLive = p.hasLive !== false;
    const hasRepo = p.hasRepo !== false;
    const essay = !!p.essay;
    const merged = { ...p, hasLive, hasRepo };

    const nextId = CYCLE[pid] || 'tick';
    const nextTitle = data[nextId].title;

    let html = `
      <section class="pheader">
        <div class="category">${esc(p.category)}</div>
        <h1 class="title">${esc(p.title)}</h1>
        <p class="lead">${esc(p.lead)}</p>
        <div class="meta">
          <span>${esc(p.year)}</span>
          <span class="dot"></span>
          <span class="tag">${esc(p.tag)}</span>
        </div>
        <div class="actions">${actionsHtml(merged)}</div>
      </section>`;

    if (!essay) {
      html += visualHtml(merged);
      html += `<section class="body-grid">${overviewHtml(merged)}${sidebarHtml(merged)}</section>`;
      if (p.reception) {
        html += `<p class="reception"><span class="eyebrow">Reception</span>${esc(p.reception)}</p>`;
      }
    } else {
      html += essayHtml(merged);
    }

    html += `
      <footer class="pagefoot">
        <a href="index.html">← All projects</a>
        <a class="next" href="project.html?p=${esc(nextId)}">Next — ${esc(nextTitle)} →</a>
      </footer>`;

    document.getElementById('app').innerHTML = html;
  }

  render();
})();
