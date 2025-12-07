
export default function Carrusel() {
    return(
        <section >
            <div className=" m-[0_auto] flex overflow-x-auto gap-[1em] hide-scrollbar">
                <div className="flex align-middle justify-center gap-[1em] animate-spin">
                    <div className="card"><img src="../../public/images/imgCarrusel/img1.jpg"></img></div>
                    <div className="card"><img src="../../public/images/imgCarrusel/img2.jpg"></img></div>
                    <div className="card"><img src="../../public/images/imgCarrusel/img3.jpg"></img></div>
                    <div className="card"><img src="../../public/images/imgCarrusel/img4.jpg"></img></div>
                    <div className="card"><img src="../../public/images/imgCarrusel/img5.jpg"></img></div>
                    <div className="card"><img src="../../public/images/imgCarrusel/img6.jpg"></img></div>
                    <div className="card"><img src="../../public/images/imgCarrusel/img7.jpg"></img></div>
                    <div className="card"><img src="../../public/images/imgCarrusel/img8.jpg"></img></div>
                </div>

                <div aria-hidden className="flex align-middle justify-center gap-[1em] animate-spin">
                    <div className="card"><img src="../../public/images/imgCarrusel/img1.jpg"></img></div>
                    <div className="card"><img src="../../public/images/imgCarrusel/img2.jpg"></img></div>
                    <div className="card"><img src="../../public/images/imgCarrusel/img3.jpg"></img></div>
                    <div className="card"><img src="../../public/images/imgCarrusel/img4.jpg"></img></div>
                    <div className="card"><img src="../../public/images/imgCarrusel/img5.jpg"></img></div>
                    <div className="card"><img src="../../public/images/imgCarrusel/img6.jpg"></img></div>
                    <div className="card"><img src="../../public/images/imgCarrusel/img7.jpg"></img></div>
                    <div className="card"><img src="../../public/images/imgCarrusel/img8.jpg"></img></div>
                </div>

            </div>
        </section>
    )
}
