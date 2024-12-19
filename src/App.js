import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Importación de las imágenes de frutos rojos
import Arandanos from './assets/arandanos.png';
import Cerezas from './assets/cerezas.png';
import Frambuesas from './assets/frambuesas.png';
import Fresas from './assets/fresas.png';
import Moras from './assets/moras.png';

// Importación de las imágenes de información nutricional
import InfArandanos from './assets/infarandanos.png';
import InfCerezas from './assets/infcerezas.png';
import InfFrambuesas from './assets/infframbuesas.png';
import InfFresas from './assets/inffresas.png';
import InfMoras from './assets/infmoras.png';

// Importación de las imágenes de trazabilidad
import ProduccionArandano from './assets/produccionArandano.png';
import ProduccionCereza from './assets/produccionCereza.png';
import ProduccionFrambuesa from './assets/produccionFrambuesa.png';
import ProduccionFresa from './assets/produccionFresa.png';
import ProduccionMora from './assets/produccionMora.png';

import IndustriaAlimentariaArandano from './assets/IndustriaAlimentariaArandano.png';
import IndustriaAlimentariaCereza from './assets/IndustriaAlimentariaCereza.png';
import IndustriaAlimentariaFrambuesa from './assets/IndustriaAlimentariaFrambuesa.png';
import IndustriaAlimentariaFresa from './assets/IndustriaAlimentariaFresa.png';
import IndustriaAlimentariaMora from './assets/IndustriaAlimentariaMora.png';

import ComercializacionoVentaArandano from './assets/ComercializacionoVentaArandano.png';
import ComercializacionoVentaCereza from './assets/ComercializacionoVentaCereza.png';
import ComercializacionoVentaFrambuesa from './assets/ComercializacionoVentaFrambuesa.png';
import ComercializacionoVentaFresa from './assets/ComercializacionoVentaFresa.png';
import ComercializacionoVentaMora from './assets/ComercializacionoVentaMora.png';

import ConsumidoresArandano from './assets/ConsumidoresArandano.png';
import ConsumidoresCereza from './assets/ConsumidoresCereza.png';
import ConsumidoresFrambuesa from './assets/ConsumidoresFrambuesa.png';
import ConsumidoresFresa from './assets/ConsumidoresFresa.png';
import ConsumidoresMora from './assets/ConsumidoresMora.png';

// Estilos con styled-components
const PageWrapper = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const FruitCard = styled(Card)`
  margin: 20px;
  text-align: center;
  border: none;
  transition: transform 0.3s, box-shadow 0.3s;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const FruitImage = styled(Card.Img)`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 15px;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-size: 2.5em;
  color: #333;
`;

const StyledButton = styled(Link)`
  display: inline-block;
  text-align: center;
  padding: 10px;
  width: 100%;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 20px;
  color: #333;
  background-color: #f5f5f5;
  text-decoration: none;
  margin-top: 10px;
  &:hover {
    background-color: #333;
    color: #fff;
    border-color: #666;
  }
  &:focus {
    outline: none;
    border-color: #ccc;
    box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.1);
  }
  &:active {
    background-color: #666;
    border-color: #666;
  }
`;

const StyledNextButton = styled(Button)`
  display: inline-block;
  text-align: center;
  padding: 10px;
  width: 150px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 20px;
  color: #333;
  background-color: #f5f5f5;
  text-decoration: none;
  margin-top: 10px;
  &:hover {
    background-color: #333;
    color: #fff;
    border-color: #666; // Cambiar el color del borde cuando el puntero esté encima
  }
  &:focus {
    outline: none;
    border-color: #ccc; 
    box-shadow: 0 0 0 0.2rem rgba(0, 0, 0, 0.1);
  }
  &:active {
    background-color: #666; // Cambiar el color al hacer clic
    border-color: #666; 
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: 500px;
`;

const TransitionImage = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
  position: absolute;
  transition: opacity 0.5s, transform 0.5s;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  animation: ${({ animateIn }) => (animateIn ? slideIn : slideOut)} 0.5s forwards;
`;

// Página principal con los frutos rojos
function HomePage() {
  const fruits = [
    { name: 'Fresas', path: 'fresas', image: Fresas },
    { name: 'Cerezas', path: 'cerezas', image: Cerezas },
    { name: 'Arándanos', path: 'arandanos', image: Arandanos },
    { name: 'Frambuesas', path: 'frambuesas', image: Frambuesas },
    { name: 'Moras', path: 'moras', image: Moras },
  ];

  return (
    <PageWrapper>
      <Title>Frutos Rojos</Title>
      <Container>
        <Row className="justify-content-center">
          {fruits.map((fruit) => (
            <Col md={4} sm={6} xs={12} key={fruit.name} className="d-flex align-items-stretch">
              <FruitCard>
                <FruitImage variant="top" src={fruit.image} alt={fruit.name} />
                <Card.Body>
                  <Card.Title>{fruit.name}</Card.Title>
                  <StyledButton to={`/informacion/${fruit.path}`}>
                    Información y Trazabilidad
                  </StyledButton>
                </Card.Body>
              </FruitCard>
              </Col>
          ))}
        </Row>
      </Container>
    </PageWrapper>
  );
}

// Página de información y trazabilidad
function InfoPage() {
  const { fruit } = useParams();

  const [currentStage, setCurrentStage] = useState(0);
  const [animateIn, setAnimateIn] = useState(true);

  const stages = ['produccion', 'industria', 'comercializacion', 'consumidores'];

  const handleNextStage = () => {
    setAnimateIn(false);
    setTimeout(() => {
      setCurrentStage((prevStage) => (prevStage + 1) % stages.length);
      setAnimateIn(true);
    }, 500);
  };

  // Mapear las imágenes de información nutricional
  const nutritionImages = {
    fresas: InfFresas,
    cerezas: InfCerezas,
    arandanos: InfArandanos,
    frambuesas: InfFrambuesas,
    moras: InfMoras,
  };

  // Mapear las imágenes de trazabilidad
  const traceabilityImages = {
    produccion: {
      fresas: ProduccionFresa,
      cerezas: ProduccionCereza,
      arandanos: ProduccionArandano,
      frambuesas: ProduccionFrambuesa,
      moras: ProduccionMora,
    },
    industria: {
      fresas: IndustriaAlimentariaFresa,
      cerezas: IndustriaAlimentariaCereza,
      arandanos: IndustriaAlimentariaArandano,
      frambuesas: IndustriaAlimentariaFrambuesa,
      moras: IndustriaAlimentariaMora,
    },
    comercializacion: {
      fresas: ComercializacionoVentaFresa,
      cerezas: ComercializacionoVentaCereza,
      arandanos: ComercializacionoVentaArandano,
      frambuesas: ComercializacionoVentaFrambuesa,
      moras: ComercializacionoVentaMora,
    },
    consumidores: {
      fresas: ConsumidoresFresa,
      cerezas: ConsumidoresCereza,
      arandanos: ConsumidoresArandano,
      frambuesas: ConsumidoresFrambuesa,
      moras: ConsumidoresMora,
    },
  };

  return (
    <PageWrapper>
      <Title>Información y Trazabilidad de {fruit}</Title>

      <section>
        <h2 style={{ textAlign: 'center', color: '#444' }}>Información Nutricional</h2>
        <div style={{ border: '1px solid #ddd', padding: '10px', maxWidth: '710px', margin: '20px auto', textAlign: 'center' }}>
          <img
            src={nutritionImages[fruit]}
            alt={`Información Nutricional de ${fruit}`}
            style={{ width: '100%', height: 'auto', objectFit: 'contain', borderRadius: '10px' }}
          />
        </div>
      </section>

      <section>
        <h2 style={{ textAlign: 'center', color: '#444' }}>Trazabilidad Del Fruto</h2>
        <ImageContainer>
          {stages.map((stage, index) => (
            <TransitionImage
              key={stage}
              visible={index === currentStage}
              src={traceabilityImages[stage][fruit]}
              alt={`${stage.charAt(0).toUpperCase() + stage.slice(1)} de ${fruit}`}
              animateIn={animateIn}
            />
          ))}
        </ImageContainer>
        <h3 style={{ textAlign: 'center', color: '#666' }}>
          {stages[currentStage].charAt(0).toUpperCase() + stages[currentStage].slice(1)}
        </h3>
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <StyledNextButton onClick={handleNextStage}>Siguiente</StyledNextButton>
        </div>
      </section>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <StyledButton to="/">Volver</StyledButton>
      </div>
    </PageWrapper>
  );
}

// App principal con las rutas
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/informacion/:fruit" element={<InfoPage />} />
      </Routes>
    </Router>
  );
}

export default App;

//Prueba de ingreso de codigo