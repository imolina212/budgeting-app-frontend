import make_it_rain from "../make_it_rain.svg"

export default function ShowCase() {
    return (
        <section className="bg-light text-dark p-5 text-center">
            <div className="container">
                <div className="d-flex">
                    <div>
                        <h1>Manage Your Finances<span className="text-success"> Efficiently</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit dictum, porttitor curae erat feugiat per duis id posuere, maecenas proin aliquam viverra bibendum enim vestibulum. Litora dis libero accumsan ac id nec suspendisse habitasse fames, aenean hendrerit nullam bibendum sem cubilia nostra.</p>
                    </div>
                </div>
                <img className="img-fluid" src={make_it_rain} alt=""/>
            </div>
        </section>
    )
}
