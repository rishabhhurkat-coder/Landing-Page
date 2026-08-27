export function BackgroundEffects() {
  return (
    <div className="background-effects" aria-hidden="true">
      <div className="blue-orb orb-one" />
      <div className="purple-orb orb-two" />
      <svg className="hero-curves" viewBox="0 0 900 650" fill="none" preserveAspectRatio="none">
        <path
          d="M22 476C176 509 136 316 285 280C409 250 371 145 567 143C702 141 747 55 925 72"
          stroke="url(#curveA)"
          strokeWidth="1.25"
        />
        <path
          d="M22 501C191 534 157 350 300 314C443 277 386 181 579 170C726 162 754 86 925 93"
          stroke="url(#curveB)"
          strokeWidth="1.25"
        />
        <path
          d="M73 537C206 547 192 385 329 341C461 299 442 226 594 205C718 187 798 109 932 115"
          stroke="url(#curveA)"
          strokeWidth="1"
        />
        <defs>
          <linearGradient id="curveA" x1="10" y1="500" x2="920" y2="90">
            <stop stopColor="#2b78f5" stopOpacity="0" />
            <stop offset=".4" stopColor="#6b52f0" stopOpacity=".55" />
            <stop offset="1" stopColor="#b5c7ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="curveB" x1="20" y1="500" x2="890" y2="80">
            <stop stopColor="#9c8aff" stopOpacity="0" />
            <stop offset=".42" stopColor="#49a0ff" stopOpacity=".35" />
            <stop offset="1" stopColor="#8c74fc" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
