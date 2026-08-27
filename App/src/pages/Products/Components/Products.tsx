import { ArrowRight, BarChart3, CalendarDays, Code2, FileText, Mail, Smartphone } from 'lucide-react'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '../../../Components/ui/Button'
import { Container } from '../../../Components/ui/Container'
import '../../../styles/products.css'

type Destination = { href: string; external?: boolean }

const products = [
  { number: '01', title: 'Email Automation', description: 'Retrieve verification codes, manage assigned accounts and keep every sign-in moving.', cta: 'Open Email Automation', icon: Mail, tone: 'blue', preview: 'email', destination: { href: 'https://hnlsoftware.in/email-automation/', external: true } },
  { number: '02', title: 'Prop Trading Engine', description: 'A shared workspace for trade accounting, positions, allocations and live market context.', cta: 'Open Prop Trading Engine', icon: BarChart3, tone: 'blue', preview: 'trading', destination: { href: 'https://hnlsoftware.in/prop-trading-engine/', external: true } },
  { number: '03', title: 'Billing Software', description: 'Complete billing and accounting workflows for invoices, GST, customers and payments.', cta: 'Explore Billing', icon: FileText, tone: 'purple', preview: 'billing', destination: { href: '/contact' } },
  { number: '04', title: 'Mobile App', description: 'Manage your business operations on the go with a focused mobile workspace.', cta: 'Explore App', icon: Smartphone, tone: 'green', preview: 'mobile', destination: { href: '/contact' } },
  { number: '05', title: 'Custom Software', description: 'Tailored software solutions built around the way your team actually works.', cta: 'Build With Us', icon: Code2, tone: 'orange', preview: 'custom', destination: { href: '/contact' } },
] as const

function EmailPreview() {
  return <div className="product-preview product-preview-email"><img className="product-email-preview-image" src="/assets/product-previews/email-automation.png" alt="Email Automation preview" /></div>
}

function TradingPreview() {
  return <div className="product-preview product-preview-trading"><img className="product-trading-preview-image" src="/assets/product-previews/prop-engine-card.png" alt="Prop Trading Engine performance preview" /></div>
}

function BillingPreview() {
  const rows = [['INV-0425', '₹24,850', 'Paid'], ['INV-0424', '₹18,600', 'Paid'], ['INV-0423', '₹9,850', 'Pending'], ['INV-0422', '₹12,450', 'Paid']]
  return <div className="product-preview product-preview-billing"><div className="preview-title">Invoices</div>{rows.map(([id, amount, status]) => <div className="invoice-row" key={id}><span>{id}</span><span>{amount}</span><b className={status === 'Paid' ? 'status-ok' : 'status-pending'}>{status}</b></div>)}<div className="billing-total"><span>Total Receivable</span><strong>₹1,24,850</strong></div><svg className="billing-line" viewBox="0 0 180 32" preserveAspectRatio="none" aria-hidden="true"><polyline points="0,25 22,19 40,23 60,12 78,18 98,10 116,14 138,5 156,11 180,2" /></svg></div>
}

function MobilePreview() {
  return <div className="product-preview product-preview-mobile"><div className="mobile-sidebar"><strong>H&amp;L Mobile</strong><span className="active">Dashboard</span><span>Positions</span><span>Orders</span><span>Accounts</span><span>Reports</span></div><div className="mobile-performance"><div className="preview-title">Total P&amp;L</div><div className="preview-value">₹24,85,890 <b>+12.4%</b></div><small>vs last month</small><svg className="mini-chart" viewBox="0 0 200 86" preserveAspectRatio="none" aria-hidden="true"><polyline className="chart-line" points="0,72 20,61 38,68 58,45 76,55 94,36 112,43 132,23 150,32 169,17 186,28 200,12" /></svg><div className="preview-stats"><span><b>128</b>Trades</span><span><b>72%</b>Win Rate</span></div></div></div>
}

function CustomPreview() {
  return <div className="product-preview product-preview-custom"><div className="custom-overview"><div><div className="preview-title">Project Overview</div><div className="progress-ring"><strong>75%</strong></div></div><div className="project-counts"><span>In Progress <b>12</b></span><span>Completed <b>36</b></span><span>Pending <b>8</b></span></div></div><div className="active-projects"><strong>Active Projects</strong><span>Trading System <i className="dot-blue" /> In Progress</span><span>Risk Management <i className="dot-green" /> Completed</span><span>Analytics Platform <i className="dot-orange" /> In Progress</span></div></div>
}

function Preview({ type }: { type: (typeof products)[number]['preview'] }) {
  if (type === 'email') return <EmailPreview />
  if (type === 'trading') return <TradingPreview />
  if (type === 'billing') return <BillingPreview />
  if (type === 'mobile') return <MobilePreview />
  return <CustomPreview />
}

function DestinationLink({ destination, className, children }: { destination: Destination; className?: string; children: ReactNode }) {
  return destination.external ? <a href={destination.href} className={className}>{children}</a> : <Link to={destination.href} className={className}>{children}</Link>
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  const Icon = product.icon
  return <DestinationLink destination={product.destination} className={`product-showcase-card product-showcase-card-${product.tone}`}><span className="product-card-icon"><Icon aria-hidden="true" /></span><div className="product-card-copy"><h2>{product.title}</h2><p>{product.description}</p></div><Preview type={product.preview} /></DestinationLink>
}

export function Products() {
  return <div className="products-page"><section className="products-landing-hero"><div className="products-hero-lines" aria-hidden="true" /><Container><div className="products-hero-content"><div className="products-pill"><span /> OUR PRODUCTS</div><h1>Everything you need to <span>run</span> and <span>grow</span> your business.</h1><p>Powerful tools. Built for performance. Designed for you.</p></div></Container></section><section className="products-showcase-grid-section"><Container><div className="products-showcase-grid">{products.map((product) => <ProductCard key={product.number} product={product} />)}</div></Container></section><section className="products-bottom-cta"><Container><div className="products-bottom-cta-inner"><div className="cta-headset" aria-hidden="true">◡</div><div className="cta-copy"><h2>Not sure which product fits your needs?</h2><p>Talk to our team and find the right solution for your business.</p></div><div className="cta-actions"><Button variant="primary" to="/contact" icon={<CalendarDays size={18} strokeWidth={1.8} />}>Book a Demo</Button><Link to="/contact" className="cta-contact">Contact Us <ArrowRight aria-hidden="true" /></Link></div></div></Container></section></div>
}
