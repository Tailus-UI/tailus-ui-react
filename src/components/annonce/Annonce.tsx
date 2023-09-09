import {annonce as annonceTheme} from "@tailus/themer-annonce"

const AnnonceUI = () => (
    <a href="" className={annonceTheme.root}>
        <span className={annonceTheme.concern.primary}>New</span>
        <span className={annonceTheme.message}>Introducing a all new Tailus !</span>
    </a>
)

export default AnnonceUI;