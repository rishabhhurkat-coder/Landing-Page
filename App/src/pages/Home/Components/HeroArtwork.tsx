import { CreditCard, FileText, Home, MoreHorizontal, Package, Plus, Share2, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const easing = [0.22, 1, 0.36, 1] as const

const candles = [
  [5, 58, 13], [17, 43, 20], [29, 51, 12], [41, 35, 17], [53, 42, 14], [65, 27, 18],
  [77, 34, 15], [89, 19, 18], [101, 30, 14], [113, 13, 20], [125, 22, 17], [137, 9, 19],
  [149, 30, 14], [161, 18, 17], [173, 39, 12], [185, 24, 19], [197, 46, 14], [209, 27, 16],
  [221, 36, 13], [233, 20, 18], [245, 31, 14], [257, 13, 20], [269, 24, 17], [281, 8, 19],
  [293, 19, 15], [305, 6, 18], [317, 27, 14], [329, 13, 20], [341, 4, 19], [353, 18, 15],
  [365, 8, 18], [377, 22, 13], [389, 5, 20], [401, 17, 17], [413, 2, 18], [425, 13, 15],
  [437, 0, 20], [449, 12, 16],
] as const

function DecorativeCurves() {
  return (
    <svg className="hero-artwork-curves" viewBox="0 0 900 650" aria-hidden="true" preserveAspectRatio="none">
      <path d="M-20 480C140 460 155 250 370 267S600 210 940 95" />
      <path d="M-25 512C145 492 170 282 385 299S645 245 945 128" />
      <path d="M-30 544C145 525 190 315 405 331S676 279 950 162" />
      <path d="M160 630C245 508 338 486 473 501S735 465 920 344" />
    </svg>
  )
}

function LiveTradesVisual() {
  return (
    <motion.div
      className="hero-artwork-live"
      initial={{ opacity: 0, y: 30, rotate: -4, rotateX: 2, rotateY: -3 }}
      animate={{ opacity: 1, y: 0, rotate: -4, rotateX: 2, rotateY: -3 }}
      transition={{ delay: 0.18, duration: 0.9, ease: easing }}
    >
      <article className="artwork-panel artwork-live-panel">
        <header className="artwork-panel-header">
          <strong>LIVE TRADES</strong>
          <span className="artwork-live-badge"><i /> LIVE</span>
        </header>
        <div className="artwork-market-grid">
          <div><small>NIFTY</small><b>24,856.40</b><em>+0.65%</em></div>
          <div><small>MTM</small><b className="artwork-positive">₹48,250.75</b><small>Positions</small><b>12</b></div>
          <div><small>BANKNIFTY</small><b>56,214.20</b><em>+1.21%</em></div>
          <div><small>P&amp;L</small><b className="artwork-positive">+2.35%</b></div>
        </div>
        <div className="artwork-market-chart">
          <svg viewBox="0 0 480 118" preserveAspectRatio="none" aria-label="Market chart">
            <g className="artwork-chart-grid">
              <path d="M0 16H480M0 47H480M0 78H480M0 109H480" />
              <path d="M80 0V118M160 0V118M240 0V118M320 0V118M400 0V118" />
            </g>
            <polyline className="artwork-price-line" points="4,86 17,69 29,76 40,60 52,66 63,49 74,57 85,39 96,52 108,31 119,43 130,24 141,38 153,19 165,47 177,35 189,56 201,47 212,66 224,45 236,58 248,47 260,52 271,69 283,56 295,62 307,49 319,61 331,39 343,51 355,30 367,43 379,19 391,38 403,24 415,47 427,34 439,50 451,31 463,43 476,17" />
            <polyline className="artwork-volume-line" points="4,102 18,99 30,101 43,96 54,99 67,95 80,97 93,93 106,95 119,91 132,94 145,91 158,95 171,90 184,93 197,87 210,91 223,88 236,92 249,86 262,90 275,88 288,92 301,87 314,90 327,86 340,91 353,88 366,92 379,87 392,90 405,87 418,91 431,88 444,92 457,89 476,91" />
            {candles.map(([x, y, h], index) => <rect key={x} className={index % 4 === 0 ? 'artwork-candle artwork-candle-red' : 'artwork-candle'} x={x} y={y} width="5" height={h} rx="1" />)}
          </svg>
          <div className="artwork-axis-times"><span>10:00</span><span>11:00</span><span>12:00</span><span>13:00</span><span>14:00</span><span>15:00</span></div>
          <div className="artwork-axis-values"><b>24,900</b><b>24,800</b><b>24,700</b><b>24,600</b></div>
        </div>
      </article>
    </motion.div>
  )
}

function StrategyAllocationVisual() {
  return (
    <motion.div
      className="hero-artwork-strategy"
      initial={{ opacity: 0, y: 35, rotate: 2, rotateX: 2, rotateY: -4 }}
      animate={{ opacity: 1, y: 0, rotate: 2, rotateX: 2, rotateY: -4 }}
      transition={{ delay: 0.4, duration: 0.9, ease: easing }}
    >
      <article className="artwork-panel artwork-strategy-panel">
        <strong className="artwork-section-label">STRATEGY ALLOCATION</strong>
        <div className="artwork-strategy-content">
          <svg className="artwork-donut" viewBox="0 0 120 120" aria-label="Strategy allocation donut chart">
            <circle cx="60" cy="60" r="39" fill="none" stroke="#edf1f7" strokeWidth="18" />
            <circle cx="60" cy="60" r="39" fill="none" stroke="#1599df" strokeWidth="18" strokeDasharray="86 159" transform="rotate(-90 60 60)" />
            <circle cx="60" cy="60" r="39" fill="none" stroke="#4636e7" strokeWidth="18" strokeDasharray="62 183" strokeDashoffset="-89" transform="rotate(-90 60 60)" />
            <circle cx="60" cy="60" r="39" fill="none" stroke="#e0a7a5" strokeWidth="18" strokeDasharray="49 196" strokeDashoffset="-154" transform="rotate(-90 60 60)" />
            <circle cx="60" cy="60" r="39" fill="none" stroke="#8fc9ba" strokeWidth="18" strokeDasharray="37 208" strokeDashoffset="-205" transform="rotate(-90 60 60)" />
            <circle cx="60" cy="60" r="39" fill="none" stroke="#f2a515" strokeWidth="18" strokeDasharray="24 221" strokeDashoffset="-244" transform="rotate(-90 60 60)" />
          </svg>
          <div className="artwork-legend">
            <span><i className="artwork-legend-blue" /> Iron Condor <b>35%</b></span>
            <span><i className="artwork-legend-mint" /> Short Straddle <b>25%</b></span>
            <span><i className="artwork-legend-rose" /> Bull Call Spread <b>20%</b></span>
            <span><i className="artwork-legend-indigo" /> Others <b>20%</b></span>
          </div>
        </div>
      </article>
    </motion.div>
  )
}

function InvoiceVisual() {
  return (
    <motion.div
      className="hero-artwork-invoice"
      initial={{ opacity: 0, y: 35, rotate: 1, rotateX: 1, rotateY: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 1, rotateX: 1, rotateY: -2 }}
      transition={{ delay: 0.3, duration: 0.9, ease: easing }}
    >
      <article className="artwork-panel artwork-invoice-panel">
        <header className="artwork-invoice-heading"><strong>INVOICE</strong><span>Paid</span></header>
        <strong className="artwork-invoice-number">#INV-10482</strong>
        <div className="artwork-invoice-rule" />
        <small>Customer</small><strong>ABC Textiles</strong>
        <small>Amount</small><strong>₹1,28,450.00</strong>
        <div className="artwork-invoice-line"><span>GST</span><b>₹23,121.00</b></div>
        <div className="artwork-invoice-total"><span>Total</span><b>₹1,51,571.00</b></div>
        <a href="/contact">View Invoice <span>↗</span></a>
      </article>
    </motion.div>
  )
}

const phoneRows = [
  { icon: <FileText />, label: 'Invoices', value: '120', tone: 'yellow' },
  { icon: <Users />, label: 'Customers', value: '85', tone: 'green' },
  { icon: <CreditCard />, label: 'Payments', value: '42', tone: 'blue' },
  { icon: <Package />, label: 'Products', value: '56', tone: 'purple' },
]

function MobileBillingVisual() {
  return (
    <motion.div
      className="hero-artwork-phone"
      initial={{ opacity: 0, x: 30, rotate: 4, rotateX: 1, rotateY: -5 }}
      animate={{ opacity: 1, x: 0, rotate: 4, rotateX: 1, rotateY: -5 }}
      transition={{ delay: 0.32, duration: 0.95, ease: easing }}
    >
      <div className="artwork-phone-shell">
        <div className="artwork-phone-screen">
          <div className="artwork-phone-status"><span>9:41</span><i /><span>▮▮▮ ◉</span></div>
          <strong className="artwork-phone-heading">H&amp;L BILLING</strong>
          <div className="artwork-receivable">
            <small>Total Receivable</small><strong>₹2,45,890</strong><span>+12.5%<br />+12.6%</span>
            <svg viewBox="0 0 160 48" aria-hidden="true"><polyline points="2,39 16,35 28,40 39,29 52,32 63,22 77,30 89,17 102,28 116,18 128,24 141,9 158,15" /></svg>
          </div>
          <div className="artwork-phone-list">{phoneRows.map(row => <div className="artwork-phone-row" key={row.label}><i className={`artwork-phone-icon artwork-phone-icon-${row.tone}`}>{row.icon}</i><b>{row.label}</b><strong>{row.value}</strong></div>)}</div>
          <div className="artwork-phone-nav"><span><Home /><small>Home</small></span><span><FileText /><small>Invoices</small></span><a href="/contact" aria-label="Contact sales"><Plus /></a><span><Share2 /><small>Reports</small></span><span><MoreHorizontal /><small>More</small></span></div>
        </div>
      </div>
    </motion.div>
  )
}

export function HeroArtwork({ className = '' }: { className?: string }) {
  return (
    <div className={`hero-artwork ${className}`.trim()} aria-label="H&L Software product previews">
      <DecorativeCurves />
      <InvoiceVisual />
      <LiveTradesVisual />
      <StrategyAllocationVisual />
      <MobileBillingVisual />
    </div>
  )
}
