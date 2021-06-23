import {Carousel} from 'react-bootstrap';

const CarouselNav = () => {
    return (
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://thepost.net.ph/app/uploads/2021/05/TRESE-1896x800.jpg"
            alt="Trese"
          />
        </Carousel.Item>
        
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/4c/8e/26/4c8e267ee4446e733bb17564337083f7.jpg"
            alt="Your Name"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://coverfiles.alphacoders.com/349/34916.png"
            alt="Tokyo Ghoul"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/e4/f4/0f/e4f40fac850c91767d4c4453b6423e90.jpg"
            alt="Demon Slayer"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.pinimg.com/originals/e0/4f/b5/e04fb53e97ff1656bc0ddb9e50b139a6.jpg"
            alt="JJK"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            // className="d-block w-100"
            src="https://i.pinimg.com/originals/e1/be/8c/e1be8c2e9a6d8f87426d6a9f576e1556.png"
            alt="Your Lie in April"
            width='100%'
          />
        </Carousel.Item>
    </Carousel>
    )
}

export default CarouselNav;