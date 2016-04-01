// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  delphes: require('../assets/delphes.jpg'),
  stex: require('../assets/stex.jpg'),
  asymptote: require('../assets/asymptote.png'),
  possessions: require('../assets/possessions.jpg'),
  digital: require('../assets/digital.jpg')
};

preloader(images);

const theme = createTheme({
  primary: "#2b4bf6",
  secondary: "#133253",
  tertiary: "#041d37"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>

          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="black">
              Rien de trop
            </Heading>
            <Heading size={1} fit caps textColor="white">
              De la frugalité comme style de vie
            </Heading>
            <Link href="https://twitter.com/bnjbvr">
              <Text bold caps textColor="secondary">@bnjbvr</Text>
            </Link>
          </Slide>

          <Slide transition={["slide"]} bgImage={images.delphes}
            notes="Rien de trop, sur la devanture du temple de delphes. Ne jamais tomber dans l'excès, écouter ses besoins."
          />

          <Slide transition={["slide"]} bgImage={images.stex}
            notes="La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer. cf Elegance du code, des preuves mathématiques, etc."
          />

          <Slide transition={["slide"]} bgDarken={0.75} notes="<ul><li>mauvaise répartition, inégalités, croissance infinie</li><li>impact sur planète</li><li>pour une croissance future, sacrifiez vous maintenant. La croissance toute puissante.</li><li>inégalités, entraide, etc.</li></ul>">

            <Heading size={1} caps fit textColor="secondary">
                Motivations
            </Heading>

            <Appear fid="1">
                <Heading size={1} caps fit textColor="tertiary">
                    Economiques
                </Heading>
            </Appear>

            <Appear fid="2">
                <Heading size={1} caps fit textColor="secondary">
                    Environnementales
                </Heading>
            </Appear>

            <Appear fid="3">
                <Heading size={1} caps fit textColor="tertiary">
                    Politiques
                </Heading>
            </Appear>

            <Appear fid="4">
                <Heading size={1} caps fit textColor="secondary">
                    Sociales
                </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="secondary">
            <Heading size={1} caps textColor="primary">
                Qui
            </Heading>
            <Image src={images.asymptote} width="100%" />
          </Slide>

          <Slide transition={["slide"]} bgImage={images.possessions} notes="ce que l'on a de trop => varie de personne a personne, notion de besoins, notion de besoin artificiel vs besoin absolu">
          </Slide>

          <Slide transition={["slide"]} bgDarken={0.75} notes="- si pas utilisé depuis 6 mois, out ! - cadeaux et attachement émotionnel; - leboncoin, bouquinistes; - bacs à vêtements, boîte à livres, assos, site de dons en ligne">
            <Appear fid="1">
                <Heading size={1} caps fit textColor="secondary">
                    Tri & Recyclage
                </Heading>
            </Appear>

            <Appear fid="2">
                <Heading size={1} caps fit textColor="tertiary">
                    Revente
                </Heading>
            </Appear>

            <Appear fid="3">
                <Heading size={1} caps fit textColor="secondary">
                    Don
                </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide", "spin"]} bgImage={images.digital} notes="email personnel des gens => à raison de 0.03$/Go/mois, de 10 Go par utilisateur, 40M utilisateurs en france => 12M$/mois; supprimer adresses 'spam', newsletter, supprimer mails notification/inutiles. Photos/videos, etc." />

          <Slide transition={["spin", "zoom"]} bgColor="secondary">
            <Heading size={1} caps fit textColor="white">
                Dans d'autres domaines
            </Heading>

            <Appear fid="1">
                <Heading size={1} caps fit textColor="white">
                    Relations ?
                </Heading>
            </Appear>

            <Appear fid="2">
                <Heading size={1} caps fit textColor="white">
                    Travail ?
                </Heading>
            </Appear>
          </Slide>

          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading size={1} caps fit textColor="white">
                Merci !
            </Heading>
            <Heading size={1} caps fit textColor="white">
                Discutons.
            </Heading>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
