import images from "../../../assets/images/index.js"
import './Header.css'

function Header() {
    const onOpen = (e) =>{
        const navbar = document.getElementsByClassName("navbar__page")[0]
        navbar.style = "display: flex;"
    }
    const onClose = (e) =>{
        if (e.target.className === "navbar__page") {
            e.target.style = "display: none;"
        }
    }

    return (
        <header>
            <div className="navbar">
                <div className="navbar__logo">Digital Agency</div>
                <div className="navbar__page" onClick={(e)=> onClose(e)}>
                    <div className="navbar__page__item">home</div>
                    <div className="navbar__page__item">About</div>
                    <div className="navbar__page__item">Testimonials</div>
                    <div className="navbar__page__item">contact</div>
                </div>
                <div className="menu__mobile">
                    <img src={images.menu} alt="menu" onClick={(e)=> onOpen(e)} />
                </div>
            </div>
        </header>
    )
}

export default Header