import {
    backend,
    chessEngineDemo,
    creator,
    css,
    docker,
    firebase,
    git,
    html,
    java,
    javascript,
    jira,
    linux,
    monitoringSystem,
    python,
    reactjs,
    sql,
    tailwind,
    tauri,
    tbz,
    typescript,
    web,
    webmen,
    rust
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

export const externalLinks = [
    {
        name: "Github",
        to: "https://github.com/Tanzkalmar35"
    }
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Desktop app developer",
        icon: creator,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
];

const technologies = [
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Rust",
        icon: rust,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
    {
        name: "Sql",
        icon: sql,
    },
    {
        name: "Tauri",
        icon: tauri,
    },
    {
        name: "Linux",
        icon: linux,
    },
    {
        name: "Jira",
        icon: jira,
    },
];

const experiences = [
    {
        title: "Studying computer science",
        company_name: "TBZ-Mitte",
        icon: tbz,
        iconBg: "#383E56",
        date: "August 2021 - Juli 2024",
        points: [
            "I just finished school, majoring in computer science and English.",
            "Going to study Software Engineering soon.",
        ],
    },
    {
        title: "Junior developer",
        company_name: "WebMen",
        icon: webmen,
        iconBg: "#E6DEDD",
        date: "August 2022 - now",
        points: [
            "Writing automated test cases in Java using Selenium",
            "Learning a lot about big-scale systems and writing good code",
            "Having this job while also studying at the same time",
        ],
    },
];

const projects = [
    {
        name: "Chess Engine",
        description:
            "A Chess engine made in JavaScript that is able to play pretty good chess. In this application you play" +
            " vs the chess engine and I personally never won against the finished version. ",
        tags: [
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
            {
                name: "netlify",
                color: "green-text-gradient",
            },
        ],
        image: chessEngineDemo,
        source_code_link: "https://github.com/Tanzkalmar35/Js-Chess-Engine",
    },
    {
        name: "Air quality monitoring system",
        description:
            "A system that is connected to multiple sensors to display the received data in a desktop app or a" +
            " website. The goal of this project is to help you make your environment healthier through showing for" +
            " example when you should open the window with a future prognosis.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "pink-text-gradient",
            },
            {
                name: "tailwind",
                color: "blue-text-gradient",
            },
            {
                name: "tauri",
                color: "green-text-gradient",
            },
        ],
        image: monitoringSystem,
        source_code_link: "https://github.com/Tanzkalmar35/AbiProjekt",
    },
];

export {services, technologies, experiences, projects};