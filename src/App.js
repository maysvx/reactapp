import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Carousel, Container, ListGroup, Nav, Navbar, Col, Row } from 'react-bootstrap';
import Cartao from './components/Cartao';

function App() {
  return (
    <div>

      <Menu/> 
      <br></br>

      <Container>

        <Container>
          <Row>

            <Col>
              <Cartao img="https://th.bing.com/th/id/R.1ab7f342c18c8ded1fffc267d4dde714?rik=yck9ST6o3RUv3w&pid=ImgRaw&r=0" titulo="WandaVision" text="WandaVision é uma minissérie estadunidense criada para o Disney+ por Jac Schaeffer, baseada nos personagens Wanda Maximoff / Feiticeira Escarlate e Visão, da Marvel Comics. É a primeira série televisiva do Universo Cinematográfico Marvel produzida pelo Marvel Studios, compartilhando continuidade com os filmes"/>
            </Col>
            
            <Col>
             <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://popeek.com.br/wp-content/uploads/2020/07/aini-sadratdin-asset-952x1024.jpg" />
                <Card.Body>
                  <Card.Title>Duna</Card.Title>
                    <Card.Text>
                      Uma jornada do herói mítica e emocional, Duna conta a história de Paul Atreides, jovem talentoso e brilhante que nasceu com um destino grandioso, para além até da sua própria compreensão, e precisa viajar ao planeta mais perigoso do universo para garantir o futuro de sua família e de seu povo.
                    </Card.Text>
                 <Button variant="danger">Assista Agora</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col>
              <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP._9v4ahKC7ecdLOgAxEGVvAHaLH?pid=ImgDet&rs=1" />
              <Card.Body>
                <Card.Title>Saga Harry Potter</Card.Title>
                <Card.Text>
                Harry Potter é uma série de sete romances de fantasia escrita pela autora britânica J. K. Rowling. A série narra as aventuras de um jovem chamado Harry James Potter, que descobre aos 11 anos de idade …
                </Card.Text>
                <Button variant="danger">Assista agora</Button>
              </Card.Body>
              </Card>
            </Col>

            <Col>
             <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.A1iQ9NkGb8G-wudVXUwpiQHaLH?pid=ImgDet&rs=1" />
              <Card.Body>
                <Card.Title>Euphoria</Card.Title>
                <Card.Text>
                Euphoria é uma série de televisão americana de drama adolescente criada por Sam Levinson, baseada na minissérie israelense de mesmo nome, de 2012, dos roteiristas Ron Leshem, Daphna Levin e Tmira Yardeni. A série é protagonizada por Zendaya                
                </Card.Text>
                <Button variant="danger">Assista agora</Button>
              </Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>

        <Carousel>
            <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.alphalogicinc.com/wp-content/uploads/2019/02/React-BOOTSTRAP.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://th.bing.com/th/id/OIP.oiaD2U0vdZPk4rV3nOoqFgHaD4?pid=ImgDet&w=1200&h=630&rs=1"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.pinimg.com/736x/5c/02/8d/5c028dff3b0245cb016b31cddcd5df0b.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>

     </Container>
    </div>
  );
}

export default App;
