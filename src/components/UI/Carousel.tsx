import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

interface Slide {
  image: string;
  alt: string;
}

interface CarouselFadeProps {
  slides: Slide[];
}

const CarouselFade: React.FC<CarouselFadeProps> = ({ slides }) => {
  return (
    <Carousel fade style={{ "height": "100%" }}>
      {slides.map((slide, index) => <Carousel.Item key={index} interval={3000} style={{ "height": "400px", "width": "800px" }}>
        <Image
          src={slide.image}
          alt={slide.alt}
          fill
          style={{ objectFit: "cover" }}
        />
      </Carousel.Item>)}
    </Carousel>
  );
}

export default CarouselFade;