import { FaGithub, FaLinkedin } from 'react-icons/fa';

const logoText = "SHAION";
const meta = {
    title: "Shaion Moghimi",
    description: "I’m Shaion Moghimi, software engineer _ Full stack devloper,currently working in Arizona",
};

const introData = {
    title: "I’m Shaion Moghimi",
    animated: [
        "Frontend specialist",
        "Javascript enthusiast",
    ],
    description: "I’m Shaion Moghimi, Software Engineer - Full stack devloper, currently working in Arizona",
    your_img_url: "https://cdn.discordapp.com/attachments/467183672290967554/1062525619369427015/ShinzBw.png",
};

const aboutMe = {
    title: "A bit about myself",
    text: [
        "Hi there, I'm Shaion Moghimi (pronounced 'Shy-on' 'Mo-gee-me')! I'm a software developer by day and jack of all trades by night. Learning is what motivates and drives me so if there is ever anything to be learned you can be sure im interested in it.",
        "I have been a professional software developer for 5 years now since I graduated from the University of Arizona in Winter 2017. I started my career at American Express where I joined as a Java developer. Soon after joining I was tasked with making a proof of concept updating our project and I decided to do it in React.js, which I promptly fell in love with.",
        "After having worked on frontend projects for a few years, I decided it was a good idea to round out my skills and get some experience working on a more backend focused project. I joined Silicon Valley Bank as a Java/SpringBoot developer and have been there for a little over a year now.",
        "Now that I've experienced both back and frontend I'm looking for a new role with a heavy emphasis in Javascript/React."
    ]
};

const resume = {
    jobInfo: [
        {
            company: "Silicon Valley Bank",
            jobtitle: "Software Engineer II",
            date: "Nov. 2021 - Feb. 2023",
            bullets: [
                "Developed and deployed APIs using Java/SpringBoot to enable teams to integrate with the banks internal systems.",
                "Migrated version control from Bitbucket to GitLabs and established automated build pipelines.",
                "Worked with other teams to build solutions when they needed to integrate with 3rd party vendors.",
            ]
        },
        {
            company: "American Express",
            jobtitle: "Software Engineer II",
            date: "Oct. 2019 - Nov. 2021",
            bullets: [
                "Developed new customer-facing features for a React.js webapp.",
                "Spearheaded the process to ensure codebase alignment with organizational standards."
            ]
        },
        {
            company: "American Express",
            jobtitle: "Software Engineer III/II",
            date: "Jan. 2018 - Oct. 2019",
            bullets: [
                "Designed and implemented UI features for international clients, ensuring compliance with banking regulations.",
                "Spearheaded a modernization initiative, rebuilding legacy web applications using React.js"
            ]
        },
        {
            company: "4D Technology",
            jobtitle: "Software Engineer Intern",
            date: "Apr. 2017 - Dec. 2017",
            bullets: [
                "Developed and implemented Python scripts to upgrade legacy C/C++ utilities and enhance user experience.",
                "Constructed an analytic tool for in-depth inspection of high-grade telescope and camera lenses."
            ]
        }
    ]
};

const skills = [{
    name: "React",
    value: 85,
},
{
    name: "Javascript",
    value: 80,
},
{
    name: "Java",
    value: 40,
},
{
    name: "Python",
    value: 40,
},
{
    name: "Git",
    value: 85,
},
];

const services = [{
    title: "UI & UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Mobile Apps",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
},
{
    title: "Wordpress Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
}];

const contactConfig = {
    YOUR_EMAIL: "ShaionMoghimi@gmail.com",
    YOUR_PHONE: "(623)742-5790",
    description: "If you'd like to get in touch with me you can reach me via email or phone.",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_id",
    YOUR_TEMPLATE_ID: "template_id",
    YOUR_USER_ID: "user_id",
};

const socialprofiles = [
    { url: "https://github.com/ShaionMoghimi", icon: <FaGithub />},
    { url: "https://www.linkedin.com/in/shaion-moghimi/", icon: <FaLinkedin />}
]

export {
    meta,
    aboutMe,
    resume,
    skills,
    services,
    introData,
    contactConfig,
    socialprofiles,
    logoText,
};
