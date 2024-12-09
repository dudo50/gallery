// app/artworks/[...slug]/not-found.tsx
import Link from 'next/link'
import NavbarComponent from '@/app/web/components/NavbarComponent'
import Footer from '@/app/web/components/Footer'
import { Container } from 'react-bootstrap'
 
export default function NotFound() {
  return (
    <>
      <NavbarComponent />
      <Container className="py-5 text-center">
        <h2>Artwork Not Found</h2>
        <p>Could not find the requested artwork.</p>
        <Link href="/artworks" className="btn btn-primary mt-3">
          Back to Artworks
        </Link>
      </Container>
      <Footer />
    </>
  )
}