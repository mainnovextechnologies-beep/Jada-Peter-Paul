import { useEffect, useState } from 'react'
import { Scale, Menu, X, ArrowUpRight, ShieldCheck, MessageCircle, Phone, MapPin, ChevronRight, ChevronLeft, CheckCircle2, Copy, Clock3, FileText, Gavel, Landmark, Search, Users, BriefcaseBusiness, LockKeyhole } from 'lucide-react'
import office from './assets/advocate-office.webp'
import courtroom from './assets/advocate-courtroom.webp'
import desk from './assets/advocate-desk.webp'
import paperwork from './assets/advocate-paperwork.webp'
import community from './assets/legal-community.webp'
import highcourt from './assets/high-court.webp'

const PHONE = '+919676074671'
const WA_NUMBER = '919676074671'
const ADDRESS = 'Vasavi Nagar, Chilakaluripet, Raithu Bazar, Chilakaluripeta – 522616, Near Grandhalayam, Palnadu District, Andhra Pradesh, India.'

const practiceAreas = [
  // Criminal matters
  { category: 'Criminal Law', icon: ShieldCheck, title: 'Criminal Defence & Trial Representation', text: 'Case-focused assistance for people facing criminal allegations, including understanding the accusation, procedural rights, available defence options and court process.' },
  { category: 'Criminal Law', icon: LockKeyhole, title: 'Regular Bail & Anticipatory Bail', text: 'Guidance on bail-related procedures, relevant factors, supporting documents and preparation for a court hearing. Outcomes depend on law and case circumstances.' },
  { category: 'Criminal Law', icon: FileText, title: 'FIR, Police Enquiry & Investigation', text: 'Assistance with understanding an FIR, notices, police enquiries, investigation-stage procedure and lawful options available under applicable law.' },
  { category: 'Criminal Law', icon: Gavel, title: 'Criminal Complaints & Private Complaints', text: 'Guidance on preparing and pursuing appropriate criminal complaints, understanding jurisdiction and following the required procedural steps.' },
  { category: 'Criminal Law', icon: Landmark, title: 'Criminal Court Proceedings', text: 'Procedural guidance for hearings, applications, evidence-related stages and other steps in criminal court proceedings, subject to engagement and case review.' },
  { category: 'Criminal Law', icon: Search, title: 'Criminal Appeals & Revision', text: 'Initial assessment of possible appellate or revisional remedies, relevant limitation periods and records required for legal review.' },
  { category: 'Criminal Law', icon: BriefcaseBusiness, title: 'Cybercrime & Financial Offences', text: 'Enquiry-based assistance for allegations involving online fraud, digital activity, financial transactions or other technology-related criminal matters.' },
  { category: 'Criminal Law', icon: Users, title: 'Quashing & Related Criminal Remedies', text: 'Discuss whether any legally available procedural remedy may be relevant after reviewing the facts, case status and applicable law.' },
  // Civil matters
  { category: 'Civil Law', icon: FileText, title: 'Civil Suits & General Civil Disputes', text: 'Guidance on civil claims, pleadings, supporting records, jurisdiction, limitation and the stages involved in pursuing or defending a civil suit.' },
  { category: 'Civil Law', icon: Landmark, title: 'Property, Land & Boundary Disputes', text: 'Assistance with property-related disagreements, title and possession concerns, boundaries, access, and review of available property records.' },
  { category: 'Civil Law', icon: BriefcaseBusiness, title: 'Injunctions & Interim Relief', text: 'Guidance on seeking or responding to appropriate interim orders to preserve rights or property while a dispute is being considered by a court.' },
  { category: 'Civil Law', icon: FileText, title: 'Contracts, Agreements & Recovery', text: 'Legal review enquiries involving contractual disputes, breach of agreement, unpaid dues, recovery claims and available civil remedies.' },
  { category: 'Civil Law', icon: Users, title: 'Money Recovery & Debt Disputes', text: 'Understand possible legal routes for recovery claims, disputed payments, documentation and the procedural steps that may apply.' },
  { category: 'Civil Law', icon: Scale, title: 'Declaration, Partition & Possession', text: 'Enquiries about declaration of rights, partition of jointly held property, possession claims and related civil proceedings.' },
  { category: 'Civil Law', icon: Search, title: 'Legal Notices & Documentation', text: 'Guidance on the purpose and process of legal notices, replies, document review and identifying records relevant to a dispute.' },
  { category: 'Civil Law', icon: Gavel, title: 'Civil Appeals & Execution', text: 'Initial guidance about challenging civil orders or judgments and understanding execution procedure, subject to records and limitation.' },
  // Family matters
  { category: 'Family Law', icon: Users, title: 'Divorce & Matrimonial Disputes', text: 'Sensitive, case-specific guidance about contested or mutual-consent divorce procedures, matrimonial disputes, documentation and court process.' },
  { category: 'Family Law', icon: Users, title: 'Child Custody, Guardianship & Visitation', text: 'Enquiries involving child custody, guardianship, visitation or parenting arrangements, with the child’s welfare and applicable law central to the process.' },
  { category: 'Family Law', icon: ShieldCheck, title: 'Maintenance & Financial Support', text: 'Guidance on maintenance-related applications, responses, relevant financial information and procedural requirements under applicable law.' },
  { category: 'Family Law', icon: LockKeyhole, title: 'Domestic Violence Matters', text: 'Information about available legal protections, applications and court procedures for people seeking help in domestic violence matters.' },
  { category: 'Family Law', icon: FileText, title: 'Dowry Harassment & Matrimonial Cruelty', text: 'Enquiry-based guidance on understanding legal options and procedures relating to allegations of dowry harassment or matrimonial cruelty.' },
  { category: 'Family Law', icon: Scale, title: 'Restitution of Conjugal Rights', text: 'General procedural guidance about petitions and responses relating to restitution of conjugal rights, where applicable.' },
  { category: 'Family Law', icon: BriefcaseBusiness, title: 'Stridhan, Jewellery & Personal Belongings', text: 'Guidance on documenting concerns and understanding legal routes concerning stridhan, jewellery, personal belongings or related disputes.' },
  { category: 'Family Law', icon: CheckCircle2, title: 'Marriage Registration & Family Settlements', text: 'Enquiries about marriage-related documentation, family settlements and formalising agreed arrangements through appropriate legal procedures.' },
  { category: 'Family Law', icon: Gavel, title: 'Family Court Cases & Appeals', text: 'Guidance on family-court procedures, responding to applications, interim requests and possible appellate steps, subject to review.' },
]

const gallery = [
  { src: office, alt: 'Advocate seated in a professional office with legal books', label: 'Office portrait' },
  { src: courtroom, alt: 'Advocate in formal black legal attire in a courtroom setting', label: 'Courtroom' },
  { src: desk, alt: 'Professional office desk with legal paperwork', label: 'Office desk' },
  { src: paperwork, alt: 'Advocate reviewing documents at an office desk', label: 'Case preparation' },
  { src: community, alt: 'Group portrait of legal professionals in formal attire', label: 'Legal community' },
  { src: highcourt, alt: 'Advocate outside a High Court building', label: 'Court exterior' },
]

function Header() {
  const [open, setOpen] = useState(false)
  const links = [['About', '#about'], ['Practice Areas', '#practice'], ['Our Approach', '#approach'], ['Gallery', '#gallery'], ['Contact', '#contact']]
  return <header className="site-header">
    <a className="brand" href="#home" aria-label="Advocate Jada Peter Paul home"><span className="brand-icon"><Scale size={25}/></span><span><strong>Jada Peter Paul</strong><small>ADVOCATE · CIVIL · CRIMINAL · FAMILY</small></span></a>
    <button className="menu-toggle" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">{links.map(([name, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{name}</a>)}<a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Contact Advocate <ArrowUpRight size={16}/></a></nav>
  </header>
}

function ContactForm() {
  const [form, setForm] = useState({ name: '', mobile: '', method: 'WhatsApp', service: '', description: '', time: '', consent: false })
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')
  const [notice, setNotice] = useState('')
  const [copied, setCopied] = useState(false)
  const update = (key, value) => setForm(old => ({ ...old, [key]: value }))
  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your full name.'
    if (!/^(?:\+?91[\s-]?)?[6-9]\d{9}$/.test(form.mobile.replace(/[\s()-]/g, ''))) e.mobile = 'Enter a valid Indian mobile number.'
    if (!form.service) e.service = 'Please select the legal assistance required.'
    if (form.description.trim().length < 10) e.description = 'Please enter at least 10 characters.'
    if (form.description.length > 700) e.description = 'Keep the summary within 700 characters.'
    if (!form.consent) e.consent = 'Consent is required to prepare your WhatsApp enquiry.'
    setErrors(e)
    return Object.keys(e).length === 0
  }
  const submit = e => {
    e.preventDefault()
    if (!validate()) { setNotice('Please review the highlighted fields and try again.'); return }
    const msg = `Hello Advocate Jada Peter Paul,\n\nI would like to enquire about legal assistance.\n\nVisitor Details:\nFull Name: ${form.name.trim()}\nMobile Number: ${form.mobile.trim()}\nPreferred Contact Method: ${form.method}\n\nLegal Assistance Required:\n${form.service}\n\nBrief Description:\n${form.description.trim()}\n\nPreferred Contact Time: ${form.time || 'Not specified'}\n\nI have provided this information voluntarily for the purpose of receiving a response to my legal enquiry.\n\nThank you.`
    setMessage(msg)
    setNotice('Your enquiry is ready. WhatsApp will open with your details filled in. Please review the message and tap Send to contact the advocate.')
    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`
    const win = window.open(url, '_blank')
    if (win) win.opener = null
    else setNotice('Your enquiry is ready, but the browser blocked the new tab. Use the message below and open WhatsApp manually, or allow pop-ups for this page.')
  }
  const copyMessage = async () => {
    try { await navigator.clipboard.writeText(message); setCopied(true) }
    catch { setNotice('Clipboard access was unavailable. Please select and copy the message below.') }
  }
  return <div className="contact-layout">
    <div className="contact-copy">
      <span className="eyebrow eyebrow-light">START A CONVERSATION</span>
      <h2>Contact Advocate<br/><em>Jada Peter Paul</em></h2>
      <p>Share your contact details and a brief description of your legal enquiry. Your information will be prepared in a WhatsApp message so you can send it directly to the advocate.</p>
      <div className="contact-detail"><span><Phone size={19}/></span><div><small>Mobile / WhatsApp</small><strong>+91 96760 74671</strong></div></div>
      <div className="contact-detail"><span><MapPin size={19}/></span><div><small>Office address</small><strong>{ADDRESS}</strong></div></div>
      <div className="privacy-callout"><LockKeyhole size={19}/><p>Share only a brief summary. Do not include passwords, Aadhaar details, financial account details or confidential evidence.</p></div>
    </div>
    <form className="enquiry-form" onSubmit={submit} noValidate>
      <div className="form-heading"><span>LEGAL ENQUIRY</span><h3>How can we assist you?</h3><p>Fields marked * are required.</p></div>
      <div className="form-grid">
        <label>Full name *<input value={form.name} onChange={e => update('name', e.target.value)} autoComplete="name" aria-invalid={!!errors.name} placeholder="Enter your full name"/>{errors.name && <small className="field-error">{errors.name}</small>}</label>
        <label>Mobile number *<input value={form.mobile} onChange={e => update('mobile', e.target.value)} inputMode="tel" autoComplete="tel" aria-invalid={!!errors.mobile} placeholder="+91 9XXXXXXXXX"/>{errors.mobile && <small className="field-error">{errors.mobile}</small>}</label>
        <label>Preferred contact method<select value={form.method} onChange={e => update('method', e.target.value)}><option>WhatsApp</option><option>Phone</option></select></label>
        <label>Legal assistance required *<select value={form.service} onChange={e => update('service', e.target.value)} aria-invalid={!!errors.service}><option value="">Select a matter</option>{['Criminal Defence / Trial','Bail / Anticipatory Bail','FIR / Police Proceedings','Criminal Complaint','Criminal Court Proceedings','Criminal Appeal / Revision','Cybercrime / Financial Offence','Civil Suit / Civil Dispute','Property / Land / Boundary Dispute','Injunction / Interim Relief','Contract / Agreement / Money Recovery','Partition / Possession / Declaration','Legal Notice / Documentation','Civil Appeal / Execution','Divorce / Matrimonial Dispute','Child Custody / Guardianship / Visitation','Maintenance / Financial Support','Domestic Violence','Dowry Harassment / Matrimonial Cruelty','Restitution of Conjugal Rights','Stridhan / Jewellery / Personal Belongings','Marriage Registration / Family Settlement','Family Court Case / Appeal','Other Legal Enquiry'].map(x => <option key={x}>{x}</option>)}</select>{errors.service && <small className="field-error">{errors.service}</small>}</label>
        <label className="full-field">Brief description *<textarea rows="4" maxLength="700" value={form.description} onChange={e => update('description', e.target.value)} aria-invalid={!!errors.description} placeholder="Briefly describe the nature of your enquiry (10–700 characters). Please avoid confidential details."/><small className="character-count">{form.description.length}/700 characters</small>{errors.description && <small className="field-error">{errors.description}</small>}</label>
        <label className="full-field">Preferred contact time <select value={form.time} onChange={e => update('time', e.target.value)}><option value="">No preference</option><option>Morning</option><option>Afternoon</option><option>Evening</option></select></label>
      </div>
      <label className="consent-row"><input type="checkbox" checked={form.consent} onChange={e => update('consent', e.target.checked)}/><span>I agree to share the information entered above with Advocate Jada Peter Paul through WhatsApp for the purpose of responding to my enquiry. <a href="#privacy">Privacy notice</a>.</span></label>
      {errors.consent && <small className="field-error">{errors.consent}</small>}
      {notice && <div className={Object.keys(errors).length ? 'form-notice form-notice-error' : 'form-notice'} role="status">{notice}</div>}
      <button className="btn btn-gold submit-btn" type="submit"><MessageCircle size={18}/> Prepare WhatsApp Enquiry <ArrowUpRight size={17}/></button>
      <p className="form-footnote">WhatsApp will not send automatically. Review the prefilled message and tap Send yourself.</p>
      {message && <div className="message-fallback"><button type="button" className="copy-button" onClick={copyMessage}><Copy size={15}/>{copied ? 'Copied' : 'Copy message'}</button><pre>{message}</pre></div>}
    </form>
  </div>
}

export default function App() {
  const [lightbox, setLightbox] = useState(-1)
  const [copied, setCopied] = useState(false)
  const [practiceFilter, setPracticeFilter] = useState('All Areas')
  const filteredPracticeAreas = practiceFilter === 'All Areas' ? practiceAreas : practiceAreas.filter(area => area.category === practiceFilter)
  useEffect(() => {
    const key = e => { if (e.key === 'Escape') setLightbox(-1); if (lightbox >= 0 && e.key === 'ArrowRight') setLightbox(i => (i + 1) % gallery.length); if (lightbox >= 0 && e.key === 'ArrowLeft') setLightbox(i => (i - 1 + gallery.length) % gallery.length) }
    window.addEventListener('keydown', key)
    return () => window.removeEventListener('keydown', key)
  }, [lightbox])
  const copy = async value => { try { await navigator.clipboard.writeText(value); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { setCopied(false) } }
  return <>
    <Header/>
    <main>
      <section className="hero" id="home">
        <div className="hero-bg" style={{backgroundImage:`linear-gradient(90deg, rgba(7,22,42,.96) 0%, rgba(7,22,42,.84) 45%, rgba(7,22,42,.22) 100%), url(${courtroom})`}}/>
        <div className="hero-content">
          <div className="hero-kicker"><span/> CIVIL · CRIMINAL · FAMILY LAW <i/> CHILAKALURIPET, ANDHRA PRADESH</div>
          <h1>Your Legal Rights Matter.<br/><em>Get Clear Guidance</em><br/>for Your Next Step.</h1>
          <p>When facing a criminal allegation or legal challenge, understanding your rights and the legal process is essential. Get case-focused guidance based on your circumstances and applicable law.</p>
          <div className="hero-actions"><a className="btn btn-gold" href="#contact">Contact Advocate <ArrowUpRight size={17}/></a><a className="btn btn-outline" href="#practice">Explore Practice Areas <ChevronRight size={17}/></a></div>
          <div className="hero-proof"><div><Scale/><span><strong>Civil · Criminal · Family Law</strong><small>Areas of legal enquiry</small></span></div><div><MapPin/><span><strong>Chilakaluripet</strong><small>Palnadu, Andhra Pradesh</small></span></div></div>
        </div>
        <div className="hero-caption"><span className="caption-line"/> Professional legal information <span>01 / 04</span></div>
      </section>
      <section className="intro-strip"><div><span className="eyebrow">LEGAL SUPPORT, CLEARLY EXPLAINED</span><h2>Thoughtful guidance.<br/><em>Responsible representation.</em></h2></div><p>Every legal matter has its own facts and context. Start with a clear conversation about your concern, relevant procedures and possible next steps.</p><a href="#about" className="text-link">Meet the advocate <ArrowUpRight size={16}/></a></section>
      <section className="section about-section" id="about"><div className="about-image-wrap"><img src={office} alt="Advocate seated in a professional office with legal books" loading="lazy"/><div className="image-note"><Scale size={24}/><span><strong>Advocate Jada Peter Paul</strong><small>Civil, criminal and family-law practice</small></span></div></div><div className="about-copy"><span className="eyebrow">ABOUT THE ADVOCATE</span><h2>Professional legal guidance with a <em>focus on your case.</em></h2><p>Advocate Jada Peter Paul serves clients in and around Chilakaluripet, Andhra Pradesh. Visitors can enquire about civil disputes, criminal matters and family-law concerns, including property disputes, bail and criminal proceedings, divorce, maintenance, child custody and related court procedures. The specific scope of assistance is confirmed after understanding the facts and applicable law.</p><p>Each matter is different. Legal assistance begins with understanding the circumstances, reviewing available information and explaining relevant procedures in accordance with applicable law and professional obligations.</p><div className="value-list"><div><CheckCircle2/><span><strong>Case-focused approach</strong><small>Understand the facts before considering next steps.</small></span></div><div><CheckCircle2/><span><strong>Clear legal communication</strong><small>Understand procedures and available options.</small></span></div><div><CheckCircle2/><span><strong>Professional responsibility</strong><small>Guidance shaped by applicable law and the matter's facts.</small></span></div></div><a href="#contact" className="text-link">Discuss your enquiry <ArrowUpRight size={16}/></a></div></section>
      <section className="practice-section" id="practice"><div className="section-heading"><span className="eyebrow">AREAS OF PRACTICE</span><h2>Legal support for <em>life’s complex moments.</em></h2><p>Explore civil disputes, criminal matters and family-law concerns. Select an area to browse relevant topics, then use the enquiry form to describe your situation briefly.</p></div><div className="practice-filters" role="group" aria-label="Filter legal practice areas">{['All Areas','Civil Law','Criminal Law','Family Law'].map(category => <button type="button" key={category} className={practiceFilter === category ? 'practice-filter active' : 'practice-filter'} aria-pressed={practiceFilter === category} onClick={() => setPracticeFilter(category)}>{category}<span>{category === 'All Areas' ? practiceAreas.length : practiceAreas.filter(a => a.category === category).length}</span></button>)}</div><div className="practice-grid">{filteredPracticeAreas.map(({icon:Icon,title,text,category},i)=><article className="practice-card" key={title}><div className="practice-top"><span className="practice-icon"><Icon size={22}/></span><span className="practice-number">{String(i+1).padStart(2,'0')}</span></div><span className="practice-category">{category}</span><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Enquire about ${title}`} className="card-link">Enquire about this <ArrowUpRight size={16}/></a></article>)}</div><p className="practice-disclaimer">The topics above describe common legal enquiry categories and are not a representation that every service is currently offered. Confirm scope and availability directly with the advocate. No particular legal outcome is promised or guaranteed.</p></section>
      <section className="approach-section" id="approach"><div className="approach-image"><img src={paperwork} alt="Advocate reviewing paperwork at an office desk" loading="lazy"/><div className="approach-image-tag">A considered approach to every enquiry</div></div><div className="approach-content"><span className="eyebrow eyebrow-light">OUR APPROACH</span><h2>A clearer path through the <em>legal process.</em></h2><p className="approach-lead">Start with the information that matters. Understand the process before deciding how to proceed.</p><div className="steps">{[['01','Understand the matter','Discuss the broad circumstances and immediate concern.'],['02','Review relevant information','Identify what information may be relevant to the enquiry.'],['03','Explain possible legal options','Discuss applicable procedures and potential next steps.'],['04','Proceed with agreed assistance','Any further work is subject to agreement and professional requirements.']].map(([n,t,d])=><div className="step" key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></div>)}</div><small className="approach-note">Legal outcomes depend on facts, evidence, applicable law and decisions of competent authorities or courts.</small></div></section>
      <section className="gallery-section" id="gallery"><div className="section-heading gallery-heading"><span className="eyebrow">PHOTO GALLERY</span><h2>A professional view of <em>legal practice.</em></h2><p>Selected photographs from the supplied gallery. Select an image to view it in detail.</p></div><div className="gallery-grid">{gallery.map((item,i)=><button key={item.src} className={`gallery-item gallery-item-${i+1}`} onClick={()=>setLightbox(i)} aria-label={`View image: ${item.label}`}><img src={item.src} alt={item.alt} loading="lazy"/><span className="gallery-label">{item.label}<ArrowUpRight size={16}/></span></button>)}</div></section>
      <section className="contact-section" id="contact"><ContactForm/></section>
      <section className="location-section"><div><span className="eyebrow">VISIT / CONTACT</span><h2>Connect with the office.</h2><p>For an initial enquiry, use the contact form or the mobile number listed below.</p></div><div className="location-card"><div className="location-icon"><MapPin size={23}/></div><div><span className="eyebrow">OFFICE ADDRESS</span><h3>Advocate Jada Peter Paul</h3><p>{ADDRESS}</p><div className="location-actions"><button className="text-link button-link" onClick={()=>copy(ADDRESS)}><Copy size={15}/>{copied ? 'Copied address' : 'Copy address'}</button><button className="text-link button-link" onClick={()=>copy(PHONE)}><Copy size={15}/>Copy phone</button></div></div></div></section>
      <section className="privacy-section" id="privacy"><div className="privacy-icon"><LockKeyhole/></div><div><span className="eyebrow">PRIVACY & LEGAL NOTICE</span><h2>Your enquiry, handled with care.</h2><p>Information entered into the enquiry form is used to prepare a message for your review in WhatsApp. This website does not send form details to its own server or store them in browser storage. The message is not sent until you review and send it inside WhatsApp. Avoid sharing confidential or highly sensitive case information in an initial enquiry.</p><p>This website provides general information about legal services and is not a substitute for legal advice specific to your circumstances. Submitting an enquiry does not automatically establish an advocate-client relationship.</p></div></section>
    </main>
    <footer className="footer"><div className="footer-main"><div className="footer-brand"><a className="brand brand-footer" href="#home"><span className="brand-icon"><Scale size={24}/></span><span><strong>Jada Peter Paul</strong><small>ADVOCATE · CIVIL · CRIMINAL · FAMILY</small></span></a><p>Civil, criminal and family-law enquiry information for Chilakaluripet and surrounding areas.</p></div><div><h3>Explore</h3><a href="#about">About the Advocate</a><a href="#practice">Practice Areas</a><a href="#approach">Our Approach</a><a href="#gallery">Photo Gallery</a></div><div><h3>Contact</h3><span>+91 96760 74671</span><span>Chilakaluripet, Palnadu</span><a href="#contact">Send an enquiry</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Advocate Jada Peter Paul. All rights reserved.</span><span>Website designed and developed by <a href="https://mainnovextechnologies.lovable.app/" target="_blank" rel="noopener noreferrer">MA Innovex Technologies <ArrowUpRight size={12}/></a></span></div><p className="footer-disclaimer">General information only. No legal outcome is guaranteed. An enquiry does not automatically establish an advocate-client relationship.</p></footer>
    <div className="floating-actions" aria-label="Contact shortcuts"><a className="float-btn float-wa" href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer" aria-label="Chat with Advocate Jada Peter Paul on WhatsApp" title="WhatsApp"><MessageCircle/></a><a className="float-btn float-call" href={`tel:${PHONE}`} aria-label="Call Advocate Jada Peter Paul" title="Call advocate"><Phone/></a><a className="float-btn float-map" href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`} target="_blank" rel="noopener noreferrer" aria-label="Get directions to the advocate office" title="Office directions"><MapPin/></a></div>
    {lightbox >= 0 && <div className="lightbox" role="dialog" aria-modal="true" aria-label="Photo gallery" onMouseDown={e=>e.target===e.currentTarget&&setLightbox(-1)}><button className="lightbox-close" onClick={()=>setLightbox(-1)} aria-label="Close gallery"><X/></button><button className="lightbox-arrow lightbox-prev" onClick={()=>setLightbox(i=>(i-1+gallery.length)%gallery.length)} aria-label="Previous image"><ChevronLeft/></button><figure><img src={gallery[lightbox].src} alt={gallery[lightbox].alt}/><figcaption>{gallery[lightbox].label} · {lightbox+1} / {gallery.length}</figcaption></figure><button className="lightbox-arrow lightbox-next" onClick={()=>setLightbox(i=>(i+1)%gallery.length)} aria-label="Next image"><ChevronRight/></button></div>}
  </>
}