import AnnonceUI from "./Annonce";
import { annonce as annonceTheme } from "@tailus/themer-annonce"
import { softAnnonce } from "@tailus/themer-annonce"

export default {
  component: AnnonceUI,
};

export const Annonce = () => (
    <a href="" className={annonceTheme.root}>
        <span className={annonceTheme.concern.primary}>New</span>
        <span className={annonceTheme.message}>Introducing a all new Tailus !</span>
    </a>
)

export const Soft = () => (
    <a href="" className={softAnnonce.root}>
        <span className={softAnnonce.concern.gray}>New</span>
        <span className={softAnnonce.message}>Introducing a all new Tailus !</span>
    </a>
)