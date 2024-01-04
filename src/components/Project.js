function ProjectText() {
    return <h1 id="project">Projects</h1>
}

function ProjectList() {
    return (
        <ul>
            <li>Kelly's Personal Website</li>
            <li>(coming soon) Schedule Builder</li>
            <li>Dynamic Memory Allocator</li>
        </ul>
    );
}

export default function ProjectSection() {
    return (
        <div id="projectSection">
            <ProjectText />
            <ProjectList />
        </div>
    );
}