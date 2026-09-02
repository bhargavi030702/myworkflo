export const internshipData = {
  user: {
    name: "Intern",
    role: "Automation Engineer Intern",
    company: "Riya Travel",
    startDate: "2026-08-01",
  },
  metrics: {
    hoursSaved: 120,
    projectsCompleted: 3,
    linesOfCode: 2150,
    coffeeCups: 52
  },
  tools: [
    { name: "Google Apps Script", icon: "📝", desc: "Backend automation & MIS generation" },
    { name: "Google Sheets", icon: "📊", desc: "Interactive dashboards & data rendering" },
    { name: "JavaScript", icon: "⚡", desc: "Core scripting logic & algorithms" },
    { name: "Python", icon: "🐍", desc: "Advanced data pipelines & scripting" },
    { name: "GitHub", icon: "🔧", desc: "Version control & code management" },
    { name: "Claude AI", icon: "🤖", desc: "AI-assisted development & problem solving" },
  ],
  activeProjects: [
    { name: "Regional Financial Canvas (Master Dash)", status: "Testing Phase", progress: 95, nextStep: "Wait for Deepa mam's testing & ERP integration with Phani" },
    { name: "Retail Store Automation", status: "Starting Soon", progress: 10, nextStep: "Kickoff following tech team meeting with Richard" }
  ],
  dailyLogs: [
    {
      date: "2026-09-02",
      project: "Master Dash & Executive Review",
      tasks: [
        "Developed the 'Master Dash' Google Sheet using Google Apps Script (900+ lines of code) to automate regional financial reporting.",
        "Discussed the dashboard layout and data with Deepa mam, Phani sir, and Nida.",
        "Presented the final product in a high-level meeting with Manoj sir (Director) and Ajay sir (CFO).",
        "Successfully implemented live changes to the project requested by Manoj sir.",
        "Handed over the sheet to Deepa mam for comparison testing before rolling it out to the regions.",
        "Discussed upcoming ERP addition phase to the sheets for the next meeting with Phani and Deepa mam."
      ],
      blockers: "None! The presentation was a success."
    },
    {
      date: "2026-09-01",
      project: "Project Reviews & Site Visits",
      tasks: [
        "Met with Ajay sir to showcase the previous automation project.",
        "Went with Richard to meet the tech team in M2 and the retail store to scope out the upcoming project."
      ],
      blockers: "None"
    }
  ]
};
