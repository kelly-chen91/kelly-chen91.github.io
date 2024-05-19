// School Profile
function SchoolProfile() {
  return (
    <div className="flex justify-center items-center mb-8">
      <div className="border border-plant-light rounded-lg flex justify-center items-center gap-4  p-4 ">
        <img className="w-40" src="sbu.png" alt="Stony Brook University logo" />
        <div className="text-plant-light md:text-2xl font-bold">
          <p>Women in Science & Engineering Honors</p>
          <p>BS/MS in Computer Science</p>
          <p>Expected Graduation: May 2026</p>
          <p>GPA: 3.93</p>
        </div>
      </div>
      <img
        className="w-3/12"
        src="educated-bear.png"
        alt="Educated Bear Emoji"
      />
    </div>
  );
}

function Coursework({ code, title, instructor }) {
  return (
    <tr key={code}>
      <td className="px-6 py-3 border border-plant-light">{code}</td>
      <td className="px-6 py-3 border border-plant-light">{title}</td>
      <td className="px-6 py-3 border border-plant-light">{instructor}</td>
    </tr>
  );
}

function CourseworksTable() {
  const courseworks = [
    {
      code: "CSE361",
      title: "Web Security",
      instructor: "Professor Nikiforakis",
    },
    {
      code: "CSE316",
      title: "Web Development",
      instructor: "Professor Kane",
    },
    {
      code: "CSE351",
      title: "Data Science",
      instructor: "Professor Tripathi",
    },
    {
      code: "CSE320",
      title: "System Fundamentals II",
      instructor: "Professor Stark",
    },
  ];

  return (
    <table className="border border-plant-light w-full text-skyblue text-base text-left rtl:text-right">
      <thead>
        <tr>
          <th className="px-6 py-3 border border-plant-light">Course Code</th>
          <th className="px-6 py-3 border border-plant-light">Course Name</th>
          <th className="px-6 py-3 border border-plant-light">Instructor</th>
        </tr>
      </thead>
      <tbody className="border border-plant-light">
        {courseworks.map((course) => (
          <Coursework {...course} />
        ))}
      </tbody>
    </table>
  );
}

export default function Courseworks() {
  return (
    <div className="h-screen grid grid-cols-6 grid-rows-6">
      <div className="row-span-6"></div>
      <div className="col-span-4 row-span-4 h-screen place-content-center">
        <SchoolProfile />
        <CourseworksTable />
      </div>
      <div className="row-span-6"></div>
    </div>
  );
}
