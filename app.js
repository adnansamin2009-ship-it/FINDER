
async function loadPrograms() {
  const res = await fetch("./programs.json");
  return res.json();
}

function render(programs, query) {
  const q = query.trim().toLowerCase();
  const filtered = programs.filter(p => {
    const hay = `${p.name} ${p.field} ${p.audience} ${p.location} ${p.cost}`.toLowerCase();
    return hay.includes(q);
  });

  const results = document.getElementById("results");
  results.innerHTML = filtered.map(p => `
    <div class="card">
      <h3>${p.name}</h3>
      <div>${p.field} · ${p.audience} · ${p.location} · ${p.cost}</div>
      <div><a href="${p.link}" target="_blank" rel="noreferrer">Official link</a></div>
    </div>
  `).join("");
}

(async () => {
  const programs = await loadPrograms();
  const input = document.getElementById("q");
  render(programs, "");
  input.addEventListener("input", () => render(programs, input.value));
})();
