import { useCallback, useEffect, useState } from 'react'
import { ArrowUpRight, CheckCircle2, CircleAlert, RefreshCw, ShieldCheck } from 'lucide-react'
import { Container } from '../../Components/ui/Container'
import './Connections.css'

type ZerodhaStatus = 'loading' | 'connected' | 'disconnected' | 'error' | 'connecting'

type ZerodhaStatusResponse = {
  connected: boolean
  status: string
  message?: string
}

// Production always uses the public edge-router URL. A local override is
// available for development against a separately running router.
const configuredApiOrigin = import.meta.env.VITE_API_ORIGIN?.trim()
const publicApiOrigin = (configuredApiOrigin || window.location.origin).replace(/\/$/, '')
const connectionsApi = `${publicApiOrigin}/api/connections/zerodha`

function KiteMark({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 72 48" aria-hidden="true">
      <path d="M10 24 30 4h42L30 44Z" fill="#ff4f24" />
      <path d="M30 44 50 24l22 20Z" fill="#df382d" />
    </svg>
  )
}

export default function ConnectionsPage() {
  const [status, setStatus] = useState<ZerodhaStatus>('loading')
  const [message, setMessage] = useState('')

  const checkConnection = useCallback(async () => {
    setStatus('loading')
    setMessage('')
    try {
      const response = await fetch(`${connectionsApi}/status`)
      const contentType = response.headers.get('content-type') ?? ''
      if (!contentType.includes('application/json')) throw new Error('Zerodha API returned a non-JSON response')
      const body = await response.json() as ZerodhaStatusResponse
      if (!response.ok) throw new Error()
      setStatus(body.connected ? 'connected' : 'disconnected')
      setMessage(body.message ?? '')
    } catch {
      setStatus('error')
      setMessage('We could not check the Zerodha connection right now.')
    }
  }, [])

  useEffect(() => {
    const checkTimer = window.setTimeout(() => void checkConnection(), 0)
    return () => window.clearTimeout(checkTimer)
  }, [checkConnection])

  const connect = () => {
    setStatus('connecting')
    window.location.assign(`${connectionsApi}/login`)
  }

  const statusCopy = {
    loading: 'Checking connection…',
    connecting: 'Connecting…',
    connected: 'Connected',
    disconnected: 'Disconnected',
    error: 'Connection unavailable',
  }[status]

  return (
    <main className="connections-page">
      <section className="connections-landing-hero">
        <div className="connections-hero-lines" aria-hidden="true" />
        <Container>
          <div className="connections-hero-content">
            <div className="connections-pill"><span /> ZERODHA CONNECTION</div>
            <h1>Stay connected. <span>Keep moving.</span></h1>
            <p>Connect the tools that keep your workflow moving.</p>
          </div>
        </Container>
      </section>

      <section className="connections-showcase-section">
        <Container>
          <article className="zerodha-card" aria-live="polite">
            <div className="zerodha-card-visual" aria-hidden="true">
              <div className="zerodha-visual-grid" />
              <div className="zerodha-orbit zerodha-orbit-one" />
              <div className="zerodha-orbit zerodha-orbit-two" />
              <div className="zerodha-logo-panel">
                <KiteMark className="kite-mark-large" />
              </div>
              <span className="zerodha-visual-caption">KITE CONNECT</span>
              <span className="zerodha-visual-live"><i /> Secure connection</span>
            </div>

            <div className="zerodha-card-content">
              <div className="zerodha-card-heading">
                <div className="zerodha-card-number">01 / BROKER</div>
                <span className={`zerodha-status zerodha-status-${status}`}>
                  {status === 'connected' && <CheckCircle2 size={16} />}
                  {(status === 'disconnected' || status === 'error') && <CircleAlert size={16} />}
                  {statusCopy}
                </span>
              </div>

              <div className="zerodha-identity">
                <div className="zerodha-mark"><KiteMark className="kite-mark" /></div>
                <div>
                  <h2>Zerodha</h2>
                  <p>Connect your Zerodha account securely with H&amp;L Software.</p>
                </div>
              </div>

              {message && status !== 'connected' && <p className="zerodha-message">{message}</p>}

              <div className="zerodha-card-actions">
                {status === 'connected' ? (
                  <>
                    <button className="connection-button connection-button-secondary" type="button" onClick={() => void checkConnection()}>
                      <RefreshCw size={17} /> Test Connection
                    </button>
                    <button className="connection-button connection-button-primary" type="button" onClick={connect}>
                      Reconnect Zerodha <ArrowUpRight size={17} />
                    </button>
                  </>
                ) : (
                  <button className="connection-button connection-button-primary" type="button" onClick={status === 'error' ? () => void checkConnection() : connect} disabled={status === 'loading' || status === 'connecting'}>
                    {status === 'loading' ? <RefreshCw className="connection-spin" size={17} /> : status === 'error' ? <RefreshCw size={17} /> : <ShieldCheck size={17} />}
                    {status === 'loading' ? 'Checking…' : status === 'error' ? 'Try Again' : 'Connect Zerodha'}
                  </button>
                )}
              </div>
            </div>
          </article>
        </Container>
      </section>
    </main>
  )
}
