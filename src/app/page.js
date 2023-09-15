
export default function Home() {
  return (
    <div className="container-fluid">

    <div className="carrosel-principal">
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                <img src="/images/carrossel_one.jpeg" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="/images/carrossel_two.jpeg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                <img src="../statics/images/carrosel_three.jpeg" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>

    <div className="title">
        <h2>Top Artists</h2>
    </div>
    <div className="hr"></div>
    <div className="container-cards">

        <div className="card">
            <img src="/images/justin_purpose.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Justin Bieber</h5>
                <p className="card-text">Purpose</p>
            </div>
            <div className="card-body">
                <a href="https://open.spotify.com/track/2IjyFRCRn8x1bEquOM3vxg" className="card-link">Go to songs</a>
            </div>
        </div>
        &nbsp;&nbsp;
        <div className="card" id="card">
            <img src="/images/ariana_positions.jpeg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Ariana Grande</h5>
                <p className="card-text">Positions</p>
            </div>
            <div className="card-body">
                <a href="https://open.spotify.com/track/35mvY5S1H3J2QZyna3TFe0" className="card-link">Go to songs</a>
            </div>
        </div>
        &nbsp;&nbsp;
        <div className="card" id="card">
            <img src="/images/prince_purple_rain.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Prince</h5>
                <p className="card-text">Purple Rain</p>
            </div>
            <div className="card-body">
                <a href="https://open.spotify.com/track/54X78diSLoUDI3joC2bjMz" class="card-link">Go to songs</a>
            </div>
        </div>
    </div>
    <div className="hr"></div>
    </div>
  )
}
