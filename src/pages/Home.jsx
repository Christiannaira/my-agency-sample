

function Home() {
    return (
        <>
            <div className="container my-5">


                <section className="row">
                    <div className="col-md-7 my-auto">
                        <h1 className="fw-bold">Welcome to my Agency</h1>
                        <p>We provide the best services for you and your business</p>
                    </div>
                    <div className="col-md-5">
                        <img src="https://www.cj.com/hubfs/Agency_HeroImage.png" alt="" className="img-fluid" />
                    </div>
                </section>

                <section className="row bg-light p-4 mt-4">
                    <div className="col-md-12">
                        <h4 className="fw-bold text-center">Our Services</h4>
                        <div className="row-mt-5">
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body text-center">
                                        React Development
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body text-center">
                                        asd
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Home;