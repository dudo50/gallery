'use client'
import React, { useState } from 'react';
import { format, isValid } from 'date-fns';
import { Container, Card, Form, Row, Col } from 'react-bootstrap';
import { Search } from 'lucide-react';

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

interface Artwork {
  slug: string;
  name: string;
  fromDate: string | Date;
  toDate: string | Date;
  // Add other artwork properties as needed
}

interface ArtworkGridProps {
  artworks: Artwork[];
}

const ArtworkGrid: React.FC<ArtworkGridProps> = ({ artworks }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const formatDate = (date: string | Date) => {
    const parsedDate = new Date(date);
    return isValid(parsedDate) ? format(parsedDate, 'dd.MM.yyyy') : '';
  };

  return (
    <Container className="py-5">
      {/* Header Row */}
      <Row className="mb-4 align-items-center">
        <Col>
          <h1 className="mb-0">Exhibitions</h1>
        </Col>
        <Col xs="auto">
          <div className="position-relative">
            <Form.Control
              type="search"
              placeholder="Search exhibitions..."
              className="ps-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '300px' }}
            />
            <Search 
              size={18} 
              className="position-absolute top-50 start-0 translate-middle-y ms-2 text-muted"
            />
          </div>
        </Col>
      </Row>

      <Row className="g-4">
        {artworks.slice(0, 24).map((artwork, index) => (
          <Col key={index} xs={12} sm={6} md={3}>
            <Card className="artwork-card h-100 border-0 shadow-sm">
              <div className="image-wrapper position-relative overflow-hidden" style={{ paddingTop: '100%' }}>
                <div className="image-container position-absolute top-0 start-0 w-100 h-100">
                  <Card.Img
                    variant="top"
                    src={`${backendUrl}/public/artwork/thumbnail?slug=${encodeURIComponent(artwork.slug)}`}
                    alt={artwork.name}
                    className="w-100 h-100 transition-transform duration-300"
                  />
                </div>
              </div>
              <Card.Body className="d-flex flex-column">
                <Card.Title className="fs-6 text-truncate">{artwork.name}</Card.Title>
                <Card.Text className="text-muted small mb-0 text-truncate">
                  {formatDate(artwork.fromDate)} - {formatDate(artwork.toDate)}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Styles */}
      <style jsx global>{`
        .artwork-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .artwork-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
        }

        .image-container {
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background-color: #f8f9fa;
        }

        .image-container img {
          object-fit: cover;
          object-position: center;
        }

        /* .artwork-card:hover .image-container img {
          transform: scale(1.1);
        } */
      `}</style>
    </Container>
  );
};

export default ArtworkGrid;