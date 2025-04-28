// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import reactLogo from "./images/react-svgrepo-com.svg";
import sassLogo from "./images/sass-svgrepo-com.svg";
import jsLogo from "./images/javascript-svgrepo-com.svg";
import devLogo from "./images/development.webp";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "maximelabonde";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Développeur Front-End passionné et créatif. Expertise dans l'utilisation du frameworks React. Compétent en intégration d'API, optimisation des performances et conception UX/UI. Soucieux du détail et de la qualité du code, je cherche toujours à créer des expériences utilisateur fluides et accessibles.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="mdi:language-html5" className="display-4" />,
    name: "HTML",
  },
  {
    id: 2,
    skill: <Icon icon="ion:logo-css3" className="display-4" />,
    name: "CSS",
  },
  {
    id: 3,
    skill: <Icon icon="fa6-brands:js" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 4,
    skill: <Icon icon="fa6-brands:sass" className="display-4" />,
    name: "Sass",
  },
  {
    id: 5,
    skill: <Icon icon="mdi:react" className="display-4" />,
    name: "React",
  },
  {
    id: 6,
    skill: <Icon icon="akar-icons:redux-fill" className="display-4" />,
    name: "Redux",
  },
  {
    id: 7,
    skill: <Icon icon="bxl:visual-studio" className="display-4" />,
    name: "VS Code",
  },
  {
    id: 8,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 9,
    skill: <Icon icon="fa6-brands:square-github" className="display-4" />,
    name: "GitHub",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://drive.google.com/file/d/1xQOZTABr_6D-s38Sw42-YLM-p_xWzz7L/view?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["ohmyfood-main-OC", "sophie-bluel-main-OC", "kasa-main-OC"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  {
    name: "ohmyfood-main-OC",
    image: sassLogo,
  },
  {
    name: "sophie-bluel-main-OC",
    image: jsLogo,
  },
  {
    name: "kasa-main-OC",
    image: reactLogo,
  },
  {
    name: "Portfolio",
    image: devLogo,
  }
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/YourEndpoint";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
