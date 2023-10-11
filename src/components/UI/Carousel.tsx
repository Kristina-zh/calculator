import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

const CarouselFade = () => {
  return (
    <Carousel fade style={{ "height": "100%" }}>
      <Carousel.Item interval={3000} style={{ "height": "400px", "width": "800px" }}>
        <Image
          src="/home.jpg"
          alt="home slide image"
          fill
          style={{ objectFit: "cover" }}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ "height": "400px", "width": "800px" }}>
        <Image
          src="/car.jpg"
          alt="car slide image"
          fill
          style={{ objectFit: "cover" }}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000} style={{ "height": "400px", "width": "800px" }}>
        <Image
          src="/trip.jpg"
          alt="trip slide image"
          fill
          style={{ objectFit: "cover" }}
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;