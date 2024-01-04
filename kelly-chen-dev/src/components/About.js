function AboutHeading() {
    return <h1>About Me</h1>
}

function AboutText() {
    return (
        <p>
            I am Kelly Chen, a junior studying Computer Science at Stony Brook
            University.<br />
            I am interested in test automation, system software development, and
            DevOps!
        </p>
    );
}

export default function AboutSection() {
    return (
        <div id="about">
            <AboutHeading />
            <AboutText />
        </div>
    );
}