import { softAnnonce as annonceTheme } from "@tailus/themer-annonce"

const SoftAnnonce = () => (
    <a href="" className={annonceTheme.root}>
        <span className={annonceTheme.concern.danger}>New</span>
        <span className={annonceTheme.message}>Introducing a all new Tailus !</span>
    </a>
)

export default SoftAnnonce;