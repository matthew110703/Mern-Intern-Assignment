import { List, ListItem } from "@mui/material"

const skills = {
    frontend: [
        "HTML", 
        "CSS",
        "JavaScript",
        'React.js',
        'Tailwind CSS',
        'Material UI',
        'Figma'
    ],
    backend: [
        'Node.js',
        'Express.js',
        'MongoDB',
        'Postman',
        'MySQL'
    ],
    tools: [
        'Git/GitHub',
        'Version Control',
        'Motion'
    ]
}

const Skills = () => {
    return (
      <section id='#skills' className='  items-center w-1/2 conatiner mx-auto'>
        <h2 className="text-2xl font-semibold">My Skills</h2>
        <div className="space-y-2 grid grid-cols-3 gap-8">

        <List>
            <h5 className="font-semibold text-gray-500">Frontend</h5>
            {skills.frontend.map((item) => (
                <ListItem key={item}>{item}</ListItem>
            ))}
        </List>
        <List>
        <h5 className="font-semibold text-gray-500">Backend</h5>
            {skills.backend.map((item) => (
                <ListItem key={item}>{item}</ListItem>
            ))}
        </List>
        <List>
        <h5 className="font-semibold text-gray-500">Tools</h5>
            {skills.tools.map((item) => (
                <ListItem key={item}>{item}</ListItem>
            ))}
        </List>
            </div>
      </section>
    )
}

export default Skills;