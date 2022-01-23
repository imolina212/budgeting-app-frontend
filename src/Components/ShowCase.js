import make_it_rain from "../make_it_rain.svg"
import to_the_moon from "../to_the_moon.svg"

export default function ShowCase() {
    return (
        <>
        <section className="bg-light text-dark p-5 text-center">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <div>
                        <h1>Manage Your Finances<span className="text-success"> Efficiently</span></h1>
                        <p className="my-4">Lorem ipsum dolor sit amet consectetur adipiscing elit dictum, porttitor curae erat feugiat per duis id posuere, maecenas proin aliquam viverra bibendum enim vestibulum.</p>
                    </div>
                    <img className="img-fluid w-50 mx-2" src={make_it_rain} alt=""/>
                </div>
            </div>
        </section>
        <section className="bg-light text-dark p-5 text-center">
            <div className="container">
                <div className="d-flex align-items-center justify-content-between">
                    <img className="img-fluid w-50 mx-2" src={to_the_moon} alt=""/>
                    <div>
                        <h1>See Your Money grow 🚀</h1>
                        <p className="my-4">Lorem ipsum dolor sit amet consectetur adipiscing elit dictum, porttitor curae erat feugiat per duis id posuere, maecenas proin aliquam viverra bibendum enim vestibulum.</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container-fluid m-3">
                <div className="row text-center">
                    <div className="col-sm">
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <div className="h1 mb-3">
                                    <i className="bi bi-laptop"></i>
                                </div>
                                <h3 className="card-title">
                                    Join
                                </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dictum, porttitor curae erat feugiat per duis id posuere</p>
                                <a className="btn-sm btn-primary" style={{textDecoration: 'none'}}>Sign up</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <div className="h1 mb-3">
                                    <i className="bi bi-book"></i>
                                </div>
                                <h3 className="card-title">
                                    About us
                                </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dictum, porttitor curae erat feugiat per duis id posuere</p>
                                <a className="btn-sm btn-primary" style={{textDecoration: 'none'}}>Learn more</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className="card bg-light">
                            <div className="card-body text-center">
                                <div className="h1 mb-3">
                                    <i className="bi bi-headset"></i>
                                </div>
                                <h3 className="card-title">
                                    Need Help?
                                </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dictum, porttitor curae erat feugiat per duis id posuere</p>
                                <a className="btn-sm btn-primary" style={{textDecoration: 'none'}}>Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
