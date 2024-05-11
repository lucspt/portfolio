import spriveWebThumbnail from "../assets/Sprive-web-overview.png";
import spriveWebEmissions from "../assets/Sprive-web-emissions.png";
import spriveWebReductions from "../assets/Sprive-web-reductions.png";
import spriveWebProduct from "../assets/Sprive-web-product.png";
import spriveMobileThumnail from "../assets/Sprive-mobile-thumbnail.png";
import spriveMobileScreens from "../assets/Sprive-mobile-screens.png";
import spriveMobilePage1 from "../assets/Sprive-mobile-page1.png";
import spriveMobilePage2 from "../assets/Sprive-mobile-page2.png";
import spriveBackendImage from "../assets/Sprive-backend.png";
import { PythonLogo } from "../components/common/PythonLogo";
import { ReactLogo } from "../components/common/ReactLogo";
import { JavaScriptLogo } from "../components/common/JavaScriptLogo";
import { TypeScriptLogo } from "../components/common/TypeScriptLogo";
import { CSSLogo } from "../components/common/CSSLogo";
import { MongoDBLogo } from "../components/common/MongoDBLogo";

export const projects = [
  {
    name: "Sprive web",
    url: "https://github.com/lucspt/sprive-web",
    thumbnail: spriveWebThumbnail,
    id: "sprive-web",
    tools: [
      {
        name: "React",
        LogoComponent: () => <ReactLogo />,
      },
      {
        name: "JavaScript",
        LogoComponent: () => <JavaScriptLogo />,
      },
      {
        name: "TypeScript",
        LogoComponent: () => <TypeScriptLogo />,
      },
      {
        name: "CSS",
        LogoComponent: () => <CSSLogo />,
      },
    ],
    description: `Sprive web is an app that was made with the purpose of helping businesses measure their carbon emissions, and ultimately reduce them. 
      It offers emissions measurements from scope level down to the activity level, product footprint calculations, reduction simulating and more!`,
    images: [
      {
        src: spriveWebThumbnail,
        alt: "An image of A Sprive web overview page with a bar chart showing emissions per category for 2023 and 2024.",
      },
      {
        src: spriveWebProduct,
        alt: "An image of a Sprive web product card page, displaying the emissions breakdown of a tub of protein powder.",
      },
      {
        src: spriveWebEmissions,
        alt: "An image of a Sprive web Emissions page including a doughnut chart displaying emissions per scope, a bar chart displaying emissions per month, and a table displaying an emissions breakdown.",
      },
      {
        src: spriveWebReductions,
        alt: "An image of a sprive web Reductions page, with a line chart simulating a carbon footprint reduction plan.",
      },
    ],
  },
  {
    name: "Sprive mobile",
    url: "https://github.com/lucspt/sprive-mobile",
    thumbnail: spriveMobileThumnail,
    id: "sprive-mobile",
    tools: [
      {
        name: "React Native",
        LogoComponent: () => <ReactLogo />,
      },
      {
        name: "JavaScript",
        LogoComponent: () => <JavaScriptLogo />,
      },
    ],
    description: `Sprive mobile is an IOS & Android React Native application that allows users to track their carbon footprint, and helps them to reduce it. 
      Users can see the environmental impact of certain products, and record the emissions of the ones that they purchase. They can 
      also set pledges, which are personal goals to help them lower their footprint.`,
    images: [
      {
        src: spriveMobileScreens,
        alt: "An image of three screens from the Sprive mobile applications. The screens go left-to-right as the history screen, home screen and search screen",
      },
      {
        src: spriveMobilePage1,
        alt: "An image of a a Sprive mobile product, displaying the emissions breakdown of A tub of protein powder"
      },
      {
        src: spriveMobilePage2,
        alt: "An image of the Sprive mobile pledge configuration page, where a user creates and updates their pledge"
      }
    ],
  },
  {
    name: "Sprive backend",
    url: "https://github.com/lucspt/sprive-backend",
    thumbnail: spriveBackendImage,
    id: "sprive-backend",
    tools: [
      {
        name: "Python",
        LogoComponent: () => <PythonLogo />,
      },
      {
        name: "MongoDB",
        LogoComponent: () => <MongoDBLogo width={40} height={40} />,
      },
    ],
    description: `Sprive backend is an api that gives access to carbon emissions data, calculations & tracking. 
      It powers other apps, like Sprive mobile and web, which are carbon footprint trackers.`,
    images: [
      {
        src: spriveBackendImage,
        alt: "An image with the writing Sprive centered in bold, and 'helping all life to thrive' under it in smaller writing"
      }
    ],
  },
];
