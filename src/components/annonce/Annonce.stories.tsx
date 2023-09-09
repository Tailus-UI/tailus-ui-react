import AnnonceUI from "./Annonce";
import {annonce as annonceTheme} from "@tailus/themer-annonce"

export default {
  component: AnnonceUI,
  tags: ['autodocs'],
};

export const Annonce = () => (
    <a href="" className={annonceTheme.root}>
        <span className={annonceTheme.concern.primary}>New</span>
        <span className={annonceTheme.message}>Introducing a all new Tailus !</span>
    </a>
)