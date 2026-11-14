(() => {
  const year = document.querySelectorAll("[data-year]");
  year.forEach(el => el.textContent = new Date().getFullYear());
  const menu = document.getElementById("menu");
  const nav = document.getElementById("nav");
  if (menu && nav) {
    menu.addEventListener("click", () => {
      const opened = nav.classList.toggle("open");
      menu.setAttribute("aria-expanded", String(opened));
      menu.setAttribute("aria-label", opened ? "Close navigation" : "Open navigation");
    });
    nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
      nav.classList.remove("open"); menu.setAttribute("aria-expanded","false");
    }));
  }
  const search = document.getElementById("search");
  if (search) {
    const cards = [...document.querySelectorAll("[data-searchable]")];
    const empty = document.getElementById("empty");
    search.addEventListener("input", () => {
      const q = search.value.toLowerCase().trim();
      let count = 0;
      cards.forEach(card => {
        const show = (card.dataset.search || card.textContent).toLowerCase().includes(q);
        card.classList.toggle("hidden", !show); if (show) count++;
      });
      if (empty) empty.classList.toggle("hidden", count > 0);
    });
  }
  const cfg = window.SITE_CONFIG || {};
  const email = document.getElementById("emailLink");
  if (email && cfg.email) { email.href = "mailto:" + cfg.email; email.textContent = cfg.email; email.classList.remove("disabled"); }
  const links = [["githubLink",cfg.github,"GitHub profile"],["linkedinLink",cfg.linkedin,"LinkedIn profile"]];
  links.forEach(([id,url,label]) => { const a=document.getElementById(id); if(a && url){a.href=url;a.textContent="Open "+label+" ↗";a.target="_blank";a.rel="noopener noreferrer";a.classList.remove("disabled");}});
  const form = document.getElementById("mailForm");
  if (form && cfg.email) {
    const submit = document.getElementById("mailSubmit");
    const status = document.getElementById("formStatus");
    if (submit) { submit.disabled = false; submit.textContent = "Open email draft"; }
    if (status) status.textContent = "Submitting opens your email application with a prefilled draft. The website does not send or store the message.";
    form.addEventListener("submit", e => {
      e.preventDefault();
      const data = new FormData(form);
      const subject = encodeURIComponent("Website enquiry: " + (data.get("subject") || "General"));
      const body = encodeURIComponent("Name: "+data.get("name")+"\nReply email: "+data.get("reply")+"\n\n"+data.get("message"));
      window.location.href = "mailto:"+cfg.email+"?subject="+subject+"&body="+body;
    });
  }
})();
