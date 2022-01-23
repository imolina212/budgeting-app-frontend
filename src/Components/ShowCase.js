import make_it_rain from "../make_it_rain.svg"

export default function ShowCase() {
    return (
        <section className="bg-light text-dark p-5 text-center">
            <div className="container">
                <div>
                    <h1>Manage Your Finances<span className="text-success"> Efficiently</span ></h1>
                </div>
                <img src={make_it_rain} alt=""/>
            </div>
        </section>
    )
}
