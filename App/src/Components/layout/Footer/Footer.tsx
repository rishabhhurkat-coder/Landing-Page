import { Link } from 'react-router-dom'
import { Container } from '../../ui/Container'

export function Footer() {
  return (
    <footer className="site-footer">
      <Container className="footer-inner">
        <Link to="/" className="footer-brand">
          H&amp;L Software
        </Link>
        <span className="footer-copy">Software that runs your world.</span>
      </Container>
    </footer>
  )
}
