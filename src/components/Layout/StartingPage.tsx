import { useState } from 'react';
//@ts-ignore
import ReactTypingEffect from 'react-typing-effect';

import Carousel from '@/components/UI/Carousel';

const StartingHero = () => {
  const [slideOrder, setSlideOrder] = useState(0);

  return <section className="d-flex flex-column justify-content-center align-items-center" style={{ "height": "100vh" }}>
    <div className="overflow-hidden mx-auto mb-5" style={{ "height": "400px", "width": "800px" }}>
      <Carousel />
    </div>
    <h1 className="display-6 fw-bold text-white mb-3 ">Let&apos;s save money for the future <span className="text-primary">
      <ReactTypingEffect
        className="text-primary"
        eraseDelay="500"
        typingDelay="1450"
        text={["home", "auto", "trip"]}
      />
    </span>
    </h1>
    <div className="col-lg-6 mx-auto">
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" className="btn btn-primary btn-md px-4 me-sm-3">Log in</button>
        <button type="button" className="btn btn-outline-secondary btn-md px-4">Sign Up</button>
      </div>
    </div>
  </section>
};

export default StartingHero