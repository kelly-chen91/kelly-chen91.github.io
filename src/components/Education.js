function EducationText() {
    return <h1>Education</h1>
}

function EducationTable() {
    return (
        <table>
            <th>Coursework</th>
            <th>Captured In</th>
            <tr>
                <td>System Fundamentals II</td>
                <td>Fall 2023</td>
            </tr>
            <tr>
                <td>Theory of Computation</td>
                <td>Fall 2023</td>
            </tr>
            <tr>
                <td>System Fundamentals I</td>
                <td>Spring 2023</td>
            </tr>
            <tr>
                <td>Programming Abstractions</td>
                <td>Spring 2023</td>
            </tr>
            <tr>
                <td>Data Structures</td>
                <td>Fall 2022</td>
            </tr>
            <tr>
                <td>Introduction to Object Oriented Programming</td>
                <td>Spring 2022</td>
            </tr>
            <tr>
                <td>Discrete Mathematics</td>
                <td>Fall 2021</td>
            </tr>
        </table>
    );
}

export default function EducationSection() {
    return (
        <div id="education">
            <EducationText />
            <EducationTable />
        </div>
    );
}