import Image from 'next/image';

const StartingHero = () => {
  return <section className="d-flex flex-column justify-content-center align-items-center" style={{ "height": "100vh" }}>
    <div className="overflow-hidden mx-auto" style={{ "height": "400px", "width": "800px" }}>
      <div id="carouselExampleControls" className="carousel slide" data-mdb-ride="carousel" data-mdb-interval="true">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="/house.png"
              width="800"
              height="400"
              className="d-block w-100"
              alt="Camera"
            />
            {/* 
            <Image
              src="/house.png"
              alt="House image"
              fill
              style={{ objectFit: "cover" }}
              // width="500"
              // height="200"
              className="d-block w-100"
              loading="lazy"
            /> */}
          </div>
          <div className="carousel-item">
            <Image
              src="/car.png"
              width="800"
              height="400"
              className="d-block w-100"
              alt="Camera"
            />          
          </div>
          <div className="carousel-item">
            <Image
              src="/trip.png"
              width="800"
              height="400"
              className="d-block w-100"
              alt="Camera"
            />          
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <h1 className="display-4 fw-bold text-white mb-3">Let`&apos;`s get started!</h1>
    <div className="col-lg-6 mx-auto">
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
        <button type="button" className="btn btn-primary btn-md px-4 me-sm-3">Log in</button>
        <button type="button" className="btn btn-outline-secondary btn-md px-4">Sign Up</button>
      </div>
    </div>
  </section>
};

export default StartingHero