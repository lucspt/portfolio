import spriveWebThumbnail from "../assets/Sprive-web-overview.png"
import spriveWebEmissions from "../assets/Sprive-web-emissions.png";
import spriveWebReductions from "../assets/Sprive-web-reductions.png";
import spriveWebProduct from "../assets/Sprive-web-product.png";
import { PythonLogo } from "../components/common/PythonLogo"
import { ReactLogo } from "../components/common/ReactLogo"
import { JavaScriptLogo } from "../components/common/JavaScriptLogo";
import { TypeScriptLogo } from "../components/common/TypeScriptLogo";
import { CSSLogo } from "../components/common/CSSLogo";
import { MongoDBLogo } from "../components/common/MongoDBLogo";

export const projects = [
  {
    name: "Sprive backend",
    url: "https://github.com/lucspt/sprive-backend",
    thumbnail: "https://placeholder.co/390x227",
    id: "sprive-backend",
    tools: [
      {
        name: "Python",
        LogoComponent: () => <PythonLogo />
      },
      {
        name: "MongoDB",
        LogoComponent: () => <MongoDBLogo width={40} height={40} />
      }
    ],
    description: (
      `Sprive backend is an api that gives access to carbon emissions data, calculations & tracking. 
      It powers other apps, like Sprive mobile and web, which are carbon footprint trackers.`
    )
  },
  {
    name: "Sprive web",
    url: "https://github.com/lucspt/sprive-web",
    thumbnail: spriveWebThumbnail,
    id: "sprive-web",
    tools: [
      {
        name: "React",
        LogoComponent: () => <ReactLogo />
      },
      {
        name: "JavaScript",
        LogoComponent: () => <JavaScriptLogo />
      },
      {
        name: "TypeScript",
        LogoComponent: () => <TypeScriptLogo />
      },
      {
        name: "CSS",
        LogoComponent: () => <CSSLogo />
      }
    ],
    description: (
      `Sprive web is an app that was made with the purpose of helping businesses measure their carbon emissions, and ultimately reduce them. 
      It offers emissions measurements from scope level down to the activity level, product footprint calculations, reduction simulating and more!`
    ),
    images: [spriveWebThumbnail, spriveWebProduct, spriveWebEmissions, spriveWebReductions]
  },
  {
    name: "Sprive mobile",
    url: "https://github.com/lucspt/sprive-mobile",
    thumbnail: "https://placeholder.co/390x227",
    id: "sprive-mobile",
    tools: [
      {
        name: "React Native",
        LogoComponent: () => <ReactLogo />
      },
      {
        name: "JavaScript", 
        LogoComponent: () => <JavaScriptLogo />,
      },
    ],
    description: (
      `Sprive mobile is an IOS & Android React Native application that allows users to track their carbon footprint, and helps them to reduce it. 
      Users can see the environmental impact of certain products, and record the emissions of the ones that they purchase. They can 
      also set pledges, which are personal goals to help them reduce their footprint.`
    )
  }
]