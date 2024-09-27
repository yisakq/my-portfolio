import { FaCss3, FaGithub, FaHackerrank, FaHtml5, FaJs, FaReact, FaFigma, FaSass, FaDocker, } from "react-icons/fa"
import {BiLogoTailwindCss,BiLogoDjango, BiLogoTypescript, BiLogoCPlusPlus, BiLogoNodejs, BiLogoAmazon, BiDice2, BiLogoWordpress, BiLogoPostgresql, BiLogoCodepen, BiLogoGit, BiLogoDocker} from 'react-icons/bi'
import {DiMongodb, DiMysql} from 'react-icons/di'
import { SiInsomnia,SiSanity, SiSolidity } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { CodeIcon, DesignIcon, ProjectsIcon, github, linkedin } from "../icons"
import { derash, pictoria, ecommerce, design, talari, reve, mobile, login } from "../images"
import { FaF } from "react-icons/fa6"

const menuLinks=[
    {
        name:"Home",
        id:"#hero"
    },
    {
        name:"About Me",
        id:"#about"
    },
    {
        name:"Projects",
        id:"#projects"
    },
    {
        name:"Skills",
        id:"#skills"
    },
    {
        name:"Academics",
        id:"#academics"
    },
    {
        name:"Contact",
        id:"#Connect"
    },
]


const socialIcons=[
{    icon:github,
    link:"jf"
}  ,
{    icon:linkedin,
    link:"jf"
}  ,
]

const experienceCard=[
    {
        field:"Programmer",
        description:"Computer",
        logo:CodeIcon
    },
    {
        field:"Developer",
        description:"Smart Contract",
        logo:ProjectsIcon
    },
    {
        field:"Designer",
        description:"UI/UX",
        logo:DesignIcon
    },
]
const skillSet=[
    {
        field:"Developer",
        description:"Full-Stack"
    },
    {
        field:"Experiences",
        description:"Dozens of projects and"
    },
    {
        field:"UI/UX",
        description:"Figma & Canva"
    },
]

const projects=[
    {
        name:"Talari",
        discription:"A decentralized blockchain application that allows users to send and receive cryptocurrency quickly & securely. A MetaMask wallet is required for use.",
        projecLink:"https://talari.vercel.app",
        tags:["Solidity","React","Node"],
        img:talari,
        static:"dyn"
    },

    {
        name:"Pictoria",
        discription:"a social media platform and visual discovery engine where users can find, share, and save ideas through images.",
        projecLink:"https://picttoria.netlify.app/",
        tags:["React","Sanity", "Tailwind"],
        img:pictoria,
        static:"st"
    },

    {
        name:"Justo",
        discription:"An eCommerce site dedicated to headphones, offering a diverse selection of top-tier audio devices to suit every listener's needs.",
        projecLink:"https://github.com/yisakq/justo-store",
        tags:["Next","Sanity"],
        img:ecommerce,
        static:'st'
    },

    {
        name:"DerashFund",
        discription:"an online crowdfunding platform that allows individuals, groups, and organizations to raise money for various causes, projects, and personal needs.",
        projecLink:"https://github.com/yisakq/Derash",
        tags:["flutter",],
        img:derash,
        static:"st"
    },
    {
        name:"Reve Clothing",
        discription:"An eCommerce platform featuring a carefully curated selection of premium products at competitive prices, designed to make your shopping experience simple and enjoyable.",
        projecLink:"https://github.com/yisakq/Reve",
        tags:["PHP","MySQL"],
        img:reve,
        static:"dyn",
    },
]

const designs=[
    {
        issuer:"Hiking Guide",
        credId:"landing page",
        img:mobile,

    },
    {
        issuer:"Derash Fund",
        credId:"Mobile Header",
        img:design,

    },
    {
        issuer:"My Portfolio",
        credId:"Hero Section",
        img:login,

    },
   
]

const dailyTechs=[
    FaReact,
    BiLogoNodejs,
    FaJs,
    FaCss3,
    FaHtml5,
    FaFigma,
    FaGithub,
    BiLogoGit,
    SiInsomnia,
  
    
    
]
const usedTechs=[
    RiNextjsFill,
    BiLogoTypescript,
    SiSanity,
    BiLogoTailwindCss,
    FaSass,
    DiMysql,
    DiMongodb,
    BiLogoDocker,
    SiSolidity
  
   
    
    

]

const academics=[
    {
        heading:"Bachelor's degree in Computer Science",
        description:"Recently graduated from Bahir Dar University with a strong academic record, achieving a CGPA of 3.77. This accomplishment reflects my dedication to my studies and my commitment to excellence in my field.",
        duration:"Oct/2019 · July/2024",
        
    },
    {
        heading:"UI/UX Design with Figma",
        description:"I earned a certification in UI/UX Design from Udemy, where I gained valuable skills in creating user-centered designs and enhancing user experiences.",
        duration:"Aug/2024",
        
    },
    {
        heading:"Canva Course for Graphics Design ",
        description:"Completed the Essential Canva Course on Udemy, gaining valuable skills in crafting striking visuals and graphics.",
        duration:"Nov/2023",
    
    },
    {
        heading:"Google Analytics Cerification ",
        description:"I received my certification in Google Data Analytics from Google, where I learned how to analyze and interpret data effectively.",
        duration:"Oct/2023",
    
    },
]
const career=[
    {
        heading:"Flutter Developer & UI Designer",
        description:"I spearheaded the design and development of a professional crowdfunding app using Flutter, focusing on creating responsive and user-friendly front-end interfaces for both web and mobile applications. I successfully designed and implemented the mobile application, ensuring optimal user experience and functionality. Collaborating with cross-functional teams, I gathered requirements and translated them into effective technical solutions. Additionally, I conducted thorough testing and debugging to guarantee the highest quality of deliverables.",
        duration:"July - September 2023",


        
    },{
        heading:"Self-Employed Project Developer",
        description:"Computer Science graduate skilled in React, Node.js, and modern web technologies. Proven ability to independently conceptualize, develop, and implement projects. Eager to apply expertise to dynamic, collaborative projects in a professional setting.",
        duration:"",
        date:"Ongoing"

    }
]


export {
    menuLinks,
    socialIcons,
    experienceCard,
    skillSet,
    projects,
    designs,
    usedTechs,
    dailyTechs,
    career,
    academics
}