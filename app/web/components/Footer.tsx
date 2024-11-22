'use client'
import { Container, Row, Col } from 'react-bootstrap'
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          {/* About Column */}
          <Col md={3} className="mb-4">
            <h5 className="mb-3 font-bold">About Us</h5>
            <p className="text-light-emphasis">
              <b>European Visual Arts Gallery</b><br></br>

              Europe&apos;s first AI-Powered Web3 Gallery for professional Artists and Gallerists.


            </p>
            <div className="d-flex gap-3 mt-3">
              <a target='_blank' href="https://www.facebook.com/evagallery.eu"><Facebook size={20} className="cursor-pointer hover:text-primary" /></a>
              <a target='_blank' href="https://www.instagram.com/evagalleryeu"><Instagram size={20} className="cursor-pointer hover:text-primary" /></a>
              <a target='_blank' href="https://www.youtube.com/@E.V.A.Gallery"><Youtube size={20} className="cursor-pointer hover:text-primary" /></a>
              <a target='_blank' href="https://github.com/eva-gallery"><Twitter size={20} className="cursor-pointer hover:text-primary" /></a>
            </div>
          </Col>

          {/* Quick Links Column */}
          <Col md={3} className="mb-4">
            <h5 className="mb-3 font-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-decoration-none hover:text-primary">Home</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none hover:text-primary">Artworks</a>
              </li>
              <li className="mb-2">
                <a href="/artists" className="text-decoration-none hover:text-primary">Artists</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none hover:text-primary">Exhibitions</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-decoration-none hover:text-primary">Blog</a>
              </li>
            </ul>
          </Col>

          {/* Contact Info Column */}
          <Col md={3} className="mb-4">
            <h5 className="mb-3 font-bold">Contact Info</h5>
            <ul className="list-unstyled">
              <li className="mb-3 d-flex align-items-center gap-2">
                <MapPin size={18} />
                <span className="text-light-emphasis"><a target='_blank' href="https://www.euforion.sk">euforion.sk</a></span>
              </li>
              <li className="mb-3 d-flex align-items-center gap-2">
                <Phone size={18} />
                <span className="text-light-emphasis"><a href="tel:+421907796660">+421 907 796 660</a></span>
              </li>
              <li className="mb-3 d-flex align-items-center gap-2">
                <Mail size={18} />
                <span className="text-light-emphasis"><a href="mailto:info@evagallery.eu">info@evagallery.eu</a></span>
              </li>
            </ul>
          </Col>

          {/* Newsletter Column */}
          <Col md={3} className="mb-4">
            <h5 className="mb-3 font-bold">Newsletter</h5>
            <p className="text-light-emphasis mb-3">
              Subscribe to our newsletter for updates on new artworks and exhibitions.
            </p>
            <div className="d-flex flex-column gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="form-control bg-dark text-light border-secondary"
              />
              <button className="btn btn-primary">
                Subscribe
              </button>
            </div>
          </Col>
        </Row>

        {/* Copyright */}
        <Row className="mt-4 pt-4 border-top border-secondary">
          <Col className="text-center text-light-emphasis">
            <p className="mb-0">© {new Date().getFullYear()} E.V.A Gallery. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer