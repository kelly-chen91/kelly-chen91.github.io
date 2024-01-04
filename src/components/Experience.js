function ExperienceText() {
    return <h1 id="experience">Experience</h1>
}

function ExperienceTable() {
    return (
        <table>
            <th>Position</th>
            <th>Duration</th>
            <tr>
                <td>System Fundamentals I Teaching Assistant @ SBU</td>
                <td>Jan 2024 - Present</td>
            </tr>
            <tr>
                <td>
                    Client Support IT Technician @ SBU Division of Information Technology
                </td>
                <td>Feb 2022 - Present</td>
            </tr>
            <tr>
                <td>
                    Social Media Coordinator @ Society of Women Engineers Chapter at SBU
                </td>
                <td>Aug 2023 - Present</td>
            </tr>
            <tr>
                <td>Application Developer Intern @ NYC DEP</td>
                <td>June 2023 - August 2023</td>
            </tr>
        </table>
    );
}

export default function ExperienceSection() {
    return (
        <div id="experienceSection">
            <ExperienceText />
            <ExperienceTable />
        </div>
    );
}