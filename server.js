const http = require("http");

const todos = [
  { id: 1, text: "Take out trash" },
  { id: 2, text: "Meeting with boss" },
  { id: 3, text: "Dentist appt" },
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  res.end(
    JSON.stringify({
      success: true,
      data: todos,
    })
  );
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
