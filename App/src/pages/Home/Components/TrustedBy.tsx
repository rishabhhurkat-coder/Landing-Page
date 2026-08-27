import { Hexagon, Network, SquareDashedMousePointer, Triangle, Waypoints } from 'lucide-react'
import { Container } from '../../../Components/ui/Container'

export function TrustedBy() {
  return (
    <section className="trusted-section">
      <Container className="trusted-inner">
        <span className="trusted-label">TRUSTED BY BUSINESSES</span>
        <div className="trusted-brands">
          <span>
            <Hexagon /> IDEAL TRADES
          </span>
          <span>
            <Triangle /> MATALIA CODE
          </span>
          <span>
            <SquareDashedMousePointer /> LIVE TRADES
          </span>
          <span>
            <Waypoints /> H&amp;L BILLING
          </span>
          <span>
            <Network /> H&amp;L AUTOMATE
          </span>
        </div>
      </Container>
    </section>
  )
}
