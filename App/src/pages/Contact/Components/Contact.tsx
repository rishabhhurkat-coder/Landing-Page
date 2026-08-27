import { useEffect, useRef, useState, type FormEvent } from 'react'
import { ArrowRight, AtSign, Check, ChevronDown, Clock3, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react'
import './Contact.css'

const contactEmail = 'hlstocktraders@gmail.com'
const enquiryOptions = ['Product enquiry', 'Book a demo', 'Custom software', 'Partnership', 'General enquiry']

export function Contact() {
  const [sent, setSent] = useState(false)
  const [enquiry, setEnquiry] = useState(enquiryOptions[0])
  const [enquiryOpen, setEnquiryOpen] = useState(false)
  const enquiryRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!enquiryRef.current?.contains(event.target as Node)) setEnquiryOpen(false)
    }
    document.addEventListener('pointerdown', closeOnOutsideClick)
    return () => document.removeEventListener('pointerdown', closeOnOutsideClick)
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '')
    const email = String(form.get('email') ?? '')
    const phone = String(form.get('phone') ?? '')
    const company = String(form.get('company') ?? '')
    const message = String(form.get('message') ?? '')
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || 'Not provided'}`,
      `Company: ${company || 'Not provided'}`,
      `Enquiry type: ${enquiry}`,
      '',
      message,
    ].join('\n')

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(`${enquiry} from ${name}`)}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <main className="contact-page">
      <section className="container contact-content">
        <div className="contact-intro">
          <div className="contact-intro-heading">
            <span className="contact-icon contact-icon-blue"><Sparkles size={21} /></span>
            <div>
              <p className="contact-kicker">H&amp;L SOFTWARE</p>
              <h2>Start with a conversation.</h2>
            </div>
          </div>
          <p className="contact-intro-copy">Whether you need a trading workspace, business automation or a focused custom build, send us the context and we&apos;ll get back to you.</p>

          <div className="contact-details">
            <a href={`mailto:${contactEmail}`} className="contact-detail-card">
              <span className="contact-icon contact-icon-blue"><Mail size={19} /></span>
              <span><small>Email us</small><strong>{contactEmail}</strong></span>
              <ArrowRight size={17} />
            </a>
            <a href="tel:+918830483312" className="contact-detail-card">
              <span className="contact-icon contact-icon-green"><Phone size={19} /></span>
              <span><small>Call us</small><strong>+91 88304 83312</strong></span>
              <ArrowRight size={17} />
            </a>
          </div>

          <div className="contact-meta-grid">
            <div><MapPin size={17} /><span><small>Draft office location</small><strong>College Road, Nashik, Maharashtra</strong></span></div>
            <div><Clock3 size={17} /><span><small>Working time</small><strong>09:00 – 19:00</strong><b>Monday to Saturday</b></span></div>
            <a href="https://www.instagram.com/hlsoftware.in/" target="_blank" rel="noreferrer"><AtSign size={17} /><span><small>Instagram</small><strong>@hlsoftware.in</strong><b>Draft social handle</b></span></a>
          </div>

          <div className="contact-trust-card">
            <span className="contact-trust-dot" />
            <span><strong>Tell us the real problem.</strong><small>The clearer the context, the better we can help.</small></span>
          </div>
        </div>

        <div className="contact-form-card">
          <div className="contact-form-heading">
            <div><p className="contact-kicker">SEND AN ENQUIRY</p><h2>How can we help?</h2></div>
            <span className="contact-form-step">01 / 01</span>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <label>Name<input name="name" type="text" placeholder="Your full name" autoComplete="name" required /></label>
              <label>Email<input name="email" type="email" placeholder="you@company.com" autoComplete="email" required /></label>
            </div>
            <div className="contact-form-row">
              <label>Phone <span className="contact-optional">Optional</span><input name="phone" type="tel" placeholder="+91 00000 00000" autoComplete="tel" /></label>
              <label>Company <span className="contact-optional">Optional</span><input name="company" type="text" placeholder="Your company or team" autoComplete="organization" /></label>
            </div>
            <div className="contact-select-field" ref={enquiryRef}>
              <span className="contact-field-label">What are you looking for?</span>
              <input type="hidden" name="enquiry" value={enquiry} />
              <button className={`contact-select-trigger${enquiryOpen ? ' is-open' : ''}`} type="button" aria-haspopup="listbox" aria-expanded={enquiryOpen} onClick={() => setEnquiryOpen((value) => !value)}>
                <span>{enquiry}</span><ChevronDown size={17} aria-hidden="true" />
              </button>
              {enquiryOpen && <div className="contact-select-menu" role="listbox" aria-label="Enquiry type">
                {enquiryOptions.map((option) => <button className={`contact-select-option${option === enquiry ? ' is-selected' : ''}`} key={option} type="button" role="option" aria-selected={option === enquiry} onClick={() => { setEnquiry(option); setEnquiryOpen(false) }}>
                  <span>{option}</span>{option === enquiry && <Check size={16} aria-hidden="true" />}
                </button>)}
              </div>}
            </div>
            <label>Tell us a little about it<textarea name="message" rows={6} placeholder="Share your goals, current workflow or the problem you want to solve..." required /></label>
            <button type="submit" className="contact-submit">Send enquiry <Send size={17} /></button>
            <p className="contact-form-note">Draft mode: this prepares an email addressed to {contactEmail}.</p>
            {sent && <p className="contact-form-success" role="status">Your enquiry draft is ready in your email app.</p>}
          </form>
        </div>
      </section>
    </main>
  )
}
