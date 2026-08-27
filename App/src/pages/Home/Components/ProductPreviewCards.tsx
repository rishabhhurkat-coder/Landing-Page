import { CreditCard, FileText, Home, MoreHorizontal, Package, Plus, Share2, Users } from 'lucide-react'
import { ExternalLink } from 'lucide-react'
import { Card } from '../../../Components/ui/Card'

export function LiveTradesCard() {
  return (
    <Card className="live-card">
      <div className="card-heading">
        <strong>LIVE TRADES</strong>
        <span className="live-pill">
          <i /> LIVE
        </span>
      </div>
      <div className="trade-metrics">
        <div>
          <label>NIFTY</label>
          <b>24,856.40</b>
          <em>+0.65%</em>
        </div>
        <div>
          <label>MTM</label>
          <b className="green-text">₹48,250.75</b>
          <label className="secondary-label">Positions</label>
          <b>12</b>
        </div>
        <div>
          <label>BANKNIFTY</label>
          <b>56,214.20</b>
          <em>+1.21%</em>
        </div>
        <div>
          <label>P&amp;L</label>
          <b className="green-text">+2.35%</b>
        </div>
      </div>
      <div className="market-chart">
        <svg viewBox="0 0 480 118" preserveAspectRatio="none" aria-label="Market chart">
          <g className="chart-grid">
            <path d="M0 16H480M0 47H480M0 78H480M0 109H480" />
            <path d="M84 0V118M168 0V118M252 0V118M336 0V118M420 0V118" />
          </g>
          <polyline
            className="price-line"
            points="4,86 17,69 29,76 40,60 52,66 63,49 74,57 85,39 96,52 108,31 119,43 130,24 141,38 153,19 165,47 177,35 189,56 201,47 212,66 224,45 236,58 248,47 260,52 271,69 283,56 295,62 307,49 319,61 331,39 343,51 355,30 367,43 379,19 391,38 403,24 415,47 427,34 439,50 451,31 463,43 476,17"
          />
          <polyline
            className="volume-line"
            points="4,102 18,99 30,101 43,96 54,99 67,95 80,97 93,93 106,95 119,91 132,94 145,91 158,95 171,90 184,93 197,87 210,91 223,88 236,92 249,86 262,90 275,88 288,92 301,87 314,90 327,86 340,91 353,88 366,92 379,87 392,90 405,87 418,91 431,88 444,92 457,89 476,91"
          />
          {Array.from({ length: 22 }).map((_, i) => (
            <rect
              key={i}
              className={i % 3 === 0 ? 'candle red' : 'candle'}
              x={i * 21 + 5}
              y={38 + ((i * 17) % 32)}
              width="5"
              height={10 + ((i * 7) % 15)}
              rx="1"
            />
          ))}
        </svg>
        <div className="axis-labels">
          <span>10:00</span>
          <span>11:00</span>
          <span>12:00</span>
          <span>13:00</span>
          <span>14:00</span>
          <span>15:00</span>
          <b>24,900</b>
          <b>24,800</b>
          <b>24,700</b>
          <b>24,600</b>
        </div>
      </div>
    </Card>
  )
}

export function InvoiceCard() {
  return (
    <Card className="invoice-card">
      <div className="invoice-title">
        INVOICE <span>Paid</span>
      </div>
      <strong className="invoice-number">#INV-10482</strong>
      <div className="invoice-rule" />
      <label>Customer</label>
      <strong>ABC Textiles</strong>
      <label>Amount</label>
      <strong>₹1,28,450.00</strong>
      <div className="invoice-detail">
        <span>GST</span>
        <b>₹23,121.00</b>
      </div>
      <div className="invoice-total">
        <span>Total</span>
        <b>₹1,51,571.00</b>
      </div>
      <button className="invoice-button">
        View Invoice <ExternalLink size={14} />
      </button>
    </Card>
  )
}

export function StrategyCard() {
  return (
    <Card className="strategy-card">
      <strong className="strategy-title">STRATEGY ALLOCATION</strong>
      <div className="strategy-body">
        <svg className="donut" viewBox="0 0 100 100" aria-label="Strategy allocation donut chart">
          <circle cx="50" cy="50" r="34" fill="none" stroke="#eef1f7" strokeWidth="17" />
          <circle
            cx="50"
            cy="50"
            r="34"
            fill="none"
            stroke="#1599df"
            strokeWidth="17"
            strokeDasharray="53.4 160.2"
            strokeDashoffset="0"
            transform="rotate(-90 50 50)"
          />
          <circle
            cx="50"
            cy="50"
            r="34"
            fill="none"
            stroke="#4636e7"
            strokeWidth="17"
            strokeDasharray="42.7 170.9"
            strokeDashoffset="-55"
            transform="rotate(-90 50 50)"
          />
          <circle
            cx="50"
            cy="50"
            r="34"
            fill="none"
            stroke="#e0a7a5"
            strokeWidth="17"
            strokeDasharray="34.1 179.5"
            strokeDashoffset="-99"
            transform="rotate(-90 50 50)"
          />
          <circle
            cx="50"
            cy="50"
            r="34"
            fill="none"
            stroke="#8fc9ba"
            strokeWidth="17"
            strokeDasharray="25.6 188"
            strokeDashoffset="-135"
            transform="rotate(-90 50 50)"
          />
          <circle
            cx="50"
            cy="50"
            r="34"
            fill="none"
            stroke="#f2a515"
            strokeWidth="17"
            strokeDasharray="17 196.6"
            strokeDashoffset="-164"
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="legend">
          <span>
            <i className="legend-blue" />
            Iron Condor <b>35%</b>
          </span>
          <span>
            <i className="legend-mint" />
            Short Straddle <b>25%</b>
          </span>
          <span>
            <i className="legend-rose" />
            Bull Call Spread <b>20%</b>
          </span>
          <span>
            <i className="legend-indigo" />
            Others <b>20%</b>
          </span>
        </div>
      </div>
    </Card>
  )
}

const phoneRows = [
  { icon: <FileText />, label: 'Invoices', value: '120', tone: 'yellow' },
  { icon: <Users />, label: 'Customers', value: '85', tone: 'green' },
  { icon: <CreditCard />, label: 'Payments', value: '42', tone: 'blue' },
  { icon: <Package />, label: 'Products', value: '56', tone: 'purple' },
]

export function PhoneMockup() {
  return (
    <div className="phone">
      <div className="phone-screen">
        <div className="phone-status">
          <span>9:41</span>
          <div className="dynamic-island" />
          <span className="signal">▮▮▮ ◉</span>
        </div>
        <strong className="phone-heading">H&amp;L BILLING</strong>
        <div className="receivable-card">
          <div>
            <small>Total Receivable</small>
            <strong>₹2,45,890</strong>
          </div>
          <span>
            +12.5%
            <br />
            +12.6%
          </span>
          <svg viewBox="0 0 160 48">
            <polyline points="2,39 16,35 28,40 39,29 52,32 63,22 77,30 89,17 102,28 116,18 128,24 141,9 158,15" />
          </svg>
          <small className="receivable-axis">₹</small>
        </div>
        <div className="phone-list">
          {phoneRows.map((row) => (
            <div className="phone-row" key={row.label}>
              <span className={`phone-row-icon ${row.tone}`}>{row.icon}</span>
              <b>{row.label}</b>
              <strong>{row.value}</strong>
            </div>
          ))}
        </div>
        <div className="phone-nav">
          <span>
            <Home />
            <small>Home</small>
          </span>
          <span>
            <FileText />
            <small>Invoices</small>
          </span>
          <button>
            <Plus />
          </button>
          <span>
            <Share2 />
            <small>Reports</small>
          </span>
          <span>
            <MoreHorizontal />
            <small>More</small>
          </span>
        </div>
      </div>
    </div>
  )
}
