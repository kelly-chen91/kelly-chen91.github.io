function AboutHeading() {
    return <h1 id="about"> About Me</h1>
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
        <div id="aboutSection">
            <AboutHeading />
            <AboutText />
        </div>
    );
}