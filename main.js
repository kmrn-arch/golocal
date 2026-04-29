// Init language
(function(){
  const saved = localStorage.getItem("golocal_lang") || "en";
  const sw = document.getElementById("langSwitcher");
  if(sw){
    sw.value = saved;
    sw.addEventListener("change", e => applyLang(e.target.value));
  }
  if(typeof applyLang === "function") applyLang(saved);
})();

// Mobile menu
const mt = document.getElementById("menuToggle");
if(mt){
  mt.addEventListener("click", () => {
    document.getElementById("mainNav").classList.toggle("open");
  });
}

// Waitlist demo
const wf = document.getElementById("waitlistForm");
if(wf){
  wf.addEventListener("submit", e=>{
    e.preventDefault();
    document.getElementById("waitlistMsg").textContent = "✓ Thanks! We'll be in touch.";
    wf.reset();
  });
}

// Generic forms
document.querySelectorAll("form.demo-form").forEach(f=>{
  f.addEventListener("submit", e=>{
    e.preventDefault();
    const msg = f.querySelector(".form-msg");
    if(msg) msg.textContent = "✓ Submitted! We'll get back to you soon.";
    f.reset();
  });
});
