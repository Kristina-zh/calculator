import { useState } from 'react'
import ReactTypingEffect from 'react-typing-effect';

import Carousel from '@/components/UI/Carousel';
import AuthForm from "@/components/auth/AuthForm";

const slides = [
  {
    image: "/home.jpg",
    alt: "home slide image"
  },
  {
    image: "/car.jpg",
    alt: "car slide image"
  },
  {
    image: "/trip.jpg",
    alt: "trip slide image"
  }
]

const StartingHero = () => {
  const [showForm, setShowForm] = useState(false);
  const [submitLabel, setSubmitLabel] = useState('');

  const handlerClick = (label: string) => {
    setSubmitLabel(label)
    setShowForm(true)
  }

  const closeForm = () => setShowForm(false)

  return <section
    className="d-flex flex-column justify-content-center align-items-center"
    style={{ "height": "100vh" }}
  >
    <div
      className="mx-auto mb-5"
      style={{ "maxWidth": "800px" }}
    >
      <Carousel slides={slides} />
    </div>
    <h1 className="display-6 fw-bold text-white mb-3">Save money for the future&nbsp;<span className="text-primary position-absolute">
      <ReactTypingEffect
        className="text-primary"
        eraseDelay={500}
        typingDelay={1450}
        text={["home", "auto", "trip"]}
      />
    </span>
    </h1>
    <div className="col-lg-6 mx-auto">
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button onClick={() => handlerClick("LOGIN")} type="button" className="btn btn-primary btn-md px-4 me-sm-3">LOGIN</button>
        <button onClick={() => handlerClick("REGISTER")} type="button" className="btn btn-outline-secondary btn-md px-4">REGISTER</button>
      </div>
    </div>
    {showForm && <AuthForm label={submitLabel} handleClose={closeForm} />}
  </section>
};

export default StartingHero