// Language pop-up, translations, and the photo wink.
// English lives in the HTML itself. Spanish and Italian are below,
// matched to each element by its data-i18n name.

const translations = {
  es: {
    "title.home": "Haley Johnson | Sistemas de Información Gerencial",
    "title.resume": "Haley Johnson | Currículum",
    "nav.profile": "Perfil",
    "nav.skills": "Habilidades",
    "nav.experience": "Experiencia",
    "nav.contact": "Contacto",
    "nav.resume": "Currículum",
    "nav.project": "Proyecto",

    "home.hi": "Hola, soy Haley.",
    "home.cta": "Contáctame",
    "home.p1": "Soy estudiante de Sistemas de Información Gerencial en LSU, me gradúo en diciembre de 2026, y donde más feliz estoy es en el lado técnico de los negocios. Ahora mismo estoy desarrollando habilidades y certificaciones en Python, ciberseguridad, IA y nube, y gestión de proyectos de TI.",
    "home.p2": "Como Analista de Operaciones de TI en LSU, trabajo con sistemas operativos, gestión de redes y soporte técnico, encontrando la raíz de cada problema y resolviéndolo rápido. Mis pasantías sumaron análisis de datos, reportes, SEO y gestión de proyectos. En Ford Gum tomé una tarea rutinaria que a nadie le gustaba, responder a mano una bandeja de entrada compartida, y la estoy convirtiendo en un flujo de trabajo con IA que responde los correos por sí solo.",
    "home.p3": "Busco una empresa que valore los retos, el aprendizaje continuo y la creatividad: un lugar donde pueda seguir encontrando las partes complicadas de un proceso y construir algo mejor.",
    "home.p4": "Echa un vistazo a mi <a href=\"resume.html\">currículum</a> y al <a href=\"project.html\">proyecto</a> del que estoy más orgullosa. ¡Me encantaría conectar!",
    "home.skills": "Habilidades",
    "home.experience": "Experiencia",
    "home.details": "Consulta los detalles en mi <a href=\"resume.html\">página de currículum</a>.",
    "home.contact": "Contacto",
    "home.based": "Con base en Houston, TX y Baton Rouge, LA",

    "skill.lang": "<strong>Lenguajes:</strong> Python (básico), SQL, HTML, CSS",
    "skill.tools": "<strong>Herramientas:</strong> n8n, Tableau, GitHub, MySQL, Google Analytics",
    "skill.systems": "<strong>Sistemas:</strong> Windows, Linux, macOS, Azure Cloud, seguridad de redes",
    "skill.certs": "<strong>Certificaciones:</strong> AWS Cloud, Azure AI-900, Network+ (en curso)",
    "exp.ford": "<strong>Pasante de Analítica/Marketing</strong>, Ford Gum (2025 – actualidad)",
    "exp.lsu": "<strong>Analista de Operaciones de TI</strong>, Louisiana State University (2024 – actualidad)",
    "exp.wet": "<strong>Pasante de Marketing Digital/Tecnología</strong>, Wet Sounds (verano de 2024)",

    "res.title": "Currículum",
    "res.education": "Educación",
    "res.degree": "Licenciatura (B.S.) en Sistemas de Información Gerencial, diciembre de 2026",
    "res.certs": "<strong>Certificaciones:</strong> AWS Cloud, Azure AI-900, Network+ (en curso)",
    "res.orgs": "<strong>Organizaciones:</strong> Association of IT Professionals (AITP), Security Society, LSU Mentor Program",
    "res.experience": "Experiencia",
    "res.ford.h": "Pasante de Analítica/Marketing, Ford Gum",
    "res.ford.d": "Junio de 2025 – actualidad, remoto",
    "res.ford.1": "Programé plantillas de correo personalizadas en HTML y CSS que mejoraron la experiencia del usuario y ayudaron a impulsar el tráfico web y las ventas",
    "res.ford.2": "Diseño e implemento un pipeline completo de analítica GA4 en Python que automatiza la extracción diaria de datos, los estructura y alimenta un dashboard dinámico en Tableau",
    "res.ford.3": "Desarrollo una automatización de flujos de trabajo con IA en n8n usando nodos de lógica condicional, disparadores IMAP y APIs de inferencia de IA",
    "res.ford.4": "Preparo una sesión de concientización en ciberseguridad sobre el compromiso de correo empresarial, que cubre robo de credenciales, descifrado de hashes y flujos de verificación seguros",
    "res.lsu.h": "Analista de Operaciones de TI, Louisiana State University",
    "res.lsu.d": "Abril de 2024 – actualidad, Baton Rouge, LA",
    "res.lsu.1": "Configuro directivas de grupo de Windows, ajustes de sistema en Linux y perfiles de configuración de macOS para mejorar la seguridad y el rendimiento",
    "res.lsu.2": "Diagnostico y resuelvo problemas de conectividad de red, manteniendo la configuración TCP/IP y HTTP/S funcionando en los sistemas de cada departamento",
    "res.lsu.3": "Lidero la renovación de hardware, reemplazando y configurando más de 100 computadoras en varios departamentos",
    "res.lsu.4": "Guío a los usuarios en la resolución de problemas técnicos, con un 98% de satisfacción",
    "res.wet.h": "Pasante de Marketing Digital/Tecnología, Wet Sounds",
    "res.wet.d": "Mayo de 2024 – agosto de 2024, Rosenberg, TX",
    "res.wet.1": "Diseñé, implementé y gestioné tres proyectos simultáneos en Asana, con el 100% entregado a tiempo",
    "res.wet.2": "Usé SEO, IA y pruebas A/B en una campaña de interacción con clientes que aumentó la tasa de apertura de correos en un 20%",
    "res.wet.3": "Analicé datos del sitio web y de interacción, generando conclusiones que mejoraron la tasa de conversión en un 15%",
    "res.wet.4": "Presenté nuevas estrategias en reuniones semanales, lo que llevó a dos mejoras de procesos en toda la empresa",
    "res.skills": "Habilidades",
    "res.os": "<strong>Sistemas operativos:</strong> Windows, Linux, Unix, macOS",
    "res.tools": "<strong>Herramientas:</strong> GitHub, n8n, VS Code, MySQL, Tableau, Google Analytics, Asana",
    "res.tech": "<strong>Conocimientos técnicos:</strong> Azure Cloud, flujos de datos, seguridad de redes, integración de APIs",

    "title.project": "Haley Johnson | Automatización de correo con IA",
    "proj.demo.h": "Pruébalo tú",
    "proj.demo.p": "Tú eres el flujo. Arrastra la flecha desde el correo hasta el nodo al que debería ir. (Una demo simplificada con datos de ejemplo. También puedes tocar un nodo.)",
    "proj.title": "Automatización de correo con IA",
    "proj.intro": "Un flujo de trabajo en n8n que lee los correos de clientes, busca los detalles de sus pedidos y redacta respuestas con IA, creado durante mi pasantía de Analítica/Marketing en Ford Gum.",
    "proj.problem.h": "El problema",
    "proj.problem": "Parte de mi pasantía de marketing consistía en revisar una bandeja de entrada compartida y responder a mano las mismas preguntas de los clientes, el tipo de trabajo repetitivo de una recepción. El trabajo en sí no me entusiasmaba, pero el problema detrás sí. Así que en lugar de solo hacer la tarea, la convertí en algo que quería construir: un asistente automatizado que lee cada mensaje, entiende lo que necesita el cliente y le responde.",
    "proj.look.h": "Un vistazo al proyecto",
    "proj.look": "Así se ve el flujo mientras lo construyo. Cada recuadro es un nodo: un disparador, una decisión, una llamada a una API o una acción. Estoy trazando el camino que sigue un correo por el sistema y luego configuro y pruebo cada rama, una por una, antes de conectarla con la siguiente. Los íconos de advertencia marcan los nodos que todavía necesitan credenciales o configuración.",
    "proj.how.h": "Cómo funciona",
    "proj.how.1": "<strong>Disparador:</strong> Un disparador de Microsoft Outlook inicia el flujo cada vez que llega un correo nuevo.",
    "proj.how.2": "<strong>Clasificación:</strong> La lógica condicional revisa si el correo trata sobre un pedido o es una pregunta general.",
    "proj.how.3": "<strong>Búsqueda:</strong> Para preguntas sobre pedidos, el flujo extrae el número de pedido y consulta la API de Square por HTTP para encontrarlo. Si no hay número de pedido, le escribe al cliente para pedírselo.",
    "proj.how.4": "<strong>Coincidencia:</strong> Las preguntas generales se comparan con una guía de respuestas que escribí, un documento con preguntas comunes y respuestas aprobadas.",
    "proj.how.5": "<strong>Redacción:</strong> Claude, el modelo de IA de Anthropic, escribe una respuesta personalizada con los detalles del pedido o la respuesta correspondiente.",
    "proj.how.6": "<strong>Verificación:</strong> Un control de confianza envía directamente al cliente las respuestas con 95% o más. Si la confianza es menor, se avisa al equipo para una revisión manual.",
    "proj.impact.h": "Para qué está diseñado",
    "proj.impact.1": "Responder preguntas rutinarias sin que nadie tenga que vigilar la bandeja de entrada",
    "proj.impact.2": "Consultar el estado de un pedido en segundos en lugar de buscarlo a mano",
    "proj.impact.3": "Mantener respuestas consistentes, porque todas salen de la misma guía aprobada",
    "proj.impact.4": "Mantener a una persona en el proceso: las respuestas de baja confianza van al equipo y no al cliente",
    "proj.role.h": "Mi rol",
    "proj.role": "Nadie me pidió automatizar la bandeja de entrada. Diseñé el flujo, construí cada nodo en n8n, escribí la guía de respuestas que usa la IA y configuré la búsqueda de pedidos con la API de Square. Ahora estoy configurando y probando cada rama para asegurarme de que las respuestas sean precisas antes de ponerlo en marcha.",
    "proj.tools.h": "Herramientas y habilidades",
    "proj.tools": "n8n, Microsoft Outlook, API de Square, solicitudes HTTP, Claude (Anthropic), lógica condicional, diseño de prompts, diseño de flujos de trabajo"
  },

  it: {
    "title.home": "Haley Johnson | Management Information Systems",
    "title.resume": "Haley Johnson | Curriculum",
    "nav.profile": "Profilo",
    "nav.skills": "Competenze",
    "nav.experience": "Esperienza",
    "nav.contact": "Contatti",
    "nav.resume": "Curriculum",
    "nav.project": "Progetto",

    "home.hi": "Ciao, sono Haley.",
    "home.cta": "Contattami",
    "home.p1": "Sono una studentessa di Management Information Systems alla LSU, mi laureo a dicembre 2026, e mi sento più a mio agio sul lato tecnico del business. In questo momento sto sviluppando competenze e certificazioni in Python, sicurezza informatica, IA e cloud, e gestione di progetti IT.",
    "home.p2": "Come IT Operations Analyst alla LSU lavoro con sistemi operativi, gestione di rete e supporto tecnico, trovando la radice di ogni problema e risolvendolo in fretta. I miei tirocini hanno aggiunto analisi dei dati, reportistica, SEO e project management. Da Ford Gum ho preso un compito di routine che nessuno amava, rispondere a mano a una casella email condivisa, e lo sto trasformando in un flusso di lavoro con IA che risponde alle email da solo.",
    "home.p3": "Cerco un'azienda che dia valore alle sfide, all'apprendimento continuo e alla creatività: un posto dove possa continuare a trovare le parti più caotiche di un processo e costruire qualcosa di meglio.",
    "home.p4": "Dai un'occhiata al mio <a href=\"resume.html\">curriculum</a> e al <a href=\"project.html\">progetto</a> di cui vado più fiera. Mi farebbe piacere entrare in contatto!",
    "home.skills": "Competenze",
    "home.experience": "Esperienza",
    "home.details": "Trovi i dettagli nella mia <a href=\"resume.html\">pagina del curriculum</a>.",
    "home.contact": "Contatti",
    "home.based": "Vivo tra Houston, TX e Baton Rouge, LA",

    "skill.lang": "<strong>Linguaggi:</strong> Python (base), SQL, HTML, CSS",
    "skill.tools": "<strong>Strumenti:</strong> n8n, Tableau, GitHub, MySQL, Google Analytics",
    "skill.systems": "<strong>Sistemi:</strong> Windows, Linux, macOS, Azure Cloud, sicurezza di rete",
    "skill.certs": "<strong>Certificazioni:</strong> AWS Cloud, Azure AI-900, Network+ (in corso)",
    "exp.ford": "<strong>Stagista Analytics/Marketing</strong>, Ford Gum (2025 – oggi)",
    "exp.lsu": "<strong>IT Operations Analyst</strong>, Louisiana State University (2024 – oggi)",
    "exp.wet": "<strong>Stagista Digital Marketing/Tecnologia</strong>, Wet Sounds (estate 2024)",

    "res.title": "Curriculum",
    "res.education": "Istruzione",
    "res.degree": "Laurea (Bachelor of Science) in Management Information Systems, dicembre 2026",
    "res.certs": "<strong>Certificazioni:</strong> AWS Cloud, Azure AI-900, Network+ (in corso)",
    "res.orgs": "<strong>Associazioni:</strong> Association of IT Professionals (AITP), Security Society, LSU Mentor Program",
    "res.experience": "Esperienza",
    "res.ford.h": "Stagista Analytics/Marketing, Ford Gum",
    "res.ford.d": "Giugno 2025 – oggi, da remoto",
    "res.ford.1": "Ho programmato template email personalizzati in HTML e CSS che hanno migliorato l'esperienza utente e contribuito ad aumentare traffico e vendite",
    "res.ford.2": "Progetto e realizzo una pipeline completa di analisi GA4 in Python che automatizza l'estrazione giornaliera dei dati, li struttura e alimenta una dashboard dinamica in Tableau",
    "res.ford.3": "Sviluppo un'automazione dei flussi di lavoro con IA in n8n, usando nodi di logica condizionale, trigger IMAP e API di inferenza IA",
    "res.ford.4": "Preparo una sessione di sensibilizzazione sulla sicurezza informatica dedicata alla compromissione delle email aziendali: furto di credenziali, cracking degli hash e procedure di verifica sicure",
    "res.lsu.h": "IT Operations Analyst, Louisiana State University",
    "res.lsu.d": "Aprile 2024 – oggi, Baton Rouge, LA",
    "res.lsu.1": "Configuro criteri di gruppo di Windows, impostazioni di sistema Linux e profili di configurazione macOS per migliorare sicurezza e prestazioni",
    "res.lsu.2": "Diagnostico e risolvo problemi di connettività di rete, mantenendo funzionanti la configurazione TCP/IP e HTTP/S nei sistemi dei vari dipartimenti",
    "res.lsu.3": "Coordino il rinnovo dell'hardware, sostituendo e configurando oltre 100 computer in più dipartimenti",
    "res.lsu.4": "Assisto gli utenti nella risoluzione dei problemi tecnici, con un tasso di soddisfazione del 98%",
    "res.wet.h": "Stagista Digital Marketing/Tecnologia, Wet Sounds",
    "res.wet.d": "Maggio 2024 – agosto 2024, Rosenberg, TX",
    "res.wet.1": "Ho progettato, realizzato e gestito tre progetti in parallelo su Asana, consegnati al 100% nei tempi",
    "res.wet.2": "Ho usato SEO, IA e A/B test in una campagna di coinvolgimento clienti che ha aumentato il tasso di apertura delle email del 20%",
    "res.wet.3": "Ho analizzato i dati del sito e del coinvolgimento, ricavando indicazioni che hanno migliorato il tasso di conversione del 15%",
    "res.wet.4": "Ho presentato nuove strategie nelle riunioni settimanali, portando a due miglioramenti dei processi a livello aziendale",
    "res.skills": "Competenze",
    "res.os": "<strong>Sistemi operativi:</strong> Windows, Linux, Unix, macOS",
    "res.tools": "<strong>Strumenti:</strong> GitHub, n8n, VS Code, MySQL, Tableau, Google Analytics, Asana",
    "res.tech": "<strong>Conoscenze tecniche:</strong> Azure Cloud, flussi di dati, sicurezza di rete, integrazione di API",

    "title.project": "Haley Johnson | Automazione email con IA",
    "proj.demo.h": "Provalo tu",
    "proj.demo.p": "Il flusso sei tu. Trascina la freccia dall'email al nodo dove dovrebbe andare. (Una demo semplificata con dati di esempio. Puoi anche toccare un nodo.)",
    "proj.title": "Automazione email con IA",
    "proj.intro": "Un flusso di lavoro in n8n che legge le email dei clienti, cerca i dettagli degli ordini e scrive le risposte con l'IA, creato durante il mio tirocinio in Analytics/Marketing da Ford Gum.",
    "proj.problem.h": "Il problema",
    "proj.problem": "Parte del mio tirocinio di marketing consisteva nel controllare una casella email condivisa e rispondere a mano sempre alle stesse domande dei clienti, il tipo di lavoro ripetitivo da reception. Il lavoro in sé non mi entusiasmava, ma il problema dietro sì. Così, invece di limitarmi a svolgere il compito, l'ho trasformato in qualcosa che volevo costruire: un assistente automatico che legge ogni messaggio, capisce di cosa ha bisogno il cliente e gli risponde.",
    "proj.look.h": "Uno sguardo al progetto",
    "proj.look": "Ecco il flusso mentre lo costruisco. Ogni riquadro è un nodo: un trigger, una decisione, una chiamata API o un'azione. Sto tracciando il percorso che un'email compie nel sistema, poi configuro e provo ogni ramo, uno alla volta, prima di collegarlo al successivo. Le icone di avviso indicano i nodi che hanno ancora bisogno di credenziali o configurazione.",
    "proj.how.h": "Come funziona",
    "proj.how.1": "<strong>Trigger:</strong> Un trigger di Microsoft Outlook avvia il flusso ogni volta che arriva una nuova email.",
    "proj.how.2": "<strong>Smistamento:</strong> La logica condizionale verifica se l'email riguarda un ordine o è una domanda generale.",
    "proj.how.3": "<strong>Ricerca:</strong> Per le domande sugli ordini, il flusso estrae il numero d'ordine e interroga l'API di Square via HTTP per trovarlo. Se manca il numero, scrive al cliente per chiederlo.",
    "proj.how.4": "<strong>Abbinamento:</strong> Le domande generali vengono confrontate con una guida di risposte che ho scritto, un documento con le domande più comuni e le risposte approvate.",
    "proj.how.5": "<strong>Bozza:</strong> Claude, il modello di IA di Anthropic, scrive una risposta personalizzata usando i dettagli dell'ordine o la risposta abbinata.",
    "proj.how.6": "<strong>Controllo:</strong> Un controllo di affidabilità invia direttamente al cliente le risposte con un punteggio del 95% o più. Sotto questa soglia, il team riceve un avviso per una revisione manuale.",
    "proj.impact.h": "A cosa serve",
    "proj.impact.1": "Rispondere alle domande di routine senza che nessuno debba tenere d'occhio la casella",
    "proj.impact.2": "Verificare lo stato di un ordine in pochi secondi invece di cercarlo a mano",
    "proj.impact.3": "Mantenere risposte coerenti, perché ognuna viene dalla stessa guida approvata",
    "proj.impact.4": "Tenere una persona nel processo: le risposte poco affidabili vanno al team e non al cliente",
    "proj.role.h": "Il mio ruolo",
    "proj.role": "Nessuno mi aveva chiesto di automatizzare la casella email. Ho progettato il flusso, costruito ogni nodo in n8n, scritto la guida di risposte usata dall'IA e impostato la ricerca degli ordini tramite l'API di Square. Ora sto configurando e provando ogni ramo per assicurarmi che le risposte siano precise prima di attivarlo.",
    "proj.tools.h": "Strumenti e competenze",
    "proj.tools": "n8n, Microsoft Outlook, API di Square, richieste HTTP, Claude (Anthropic), logica condizionale, progettazione di prompt, progettazione di flussi di lavoro"
  }
};

const labels = { en: "EN", es: "ES", it: "IT" };

function saveLanguage(lang) {
  try { localStorage.setItem("lang", lang); } catch (e) {}
}

function loadLanguage() {
  try { return localStorage.getItem("lang"); } catch (e) { return null; }
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
    const text = lang === "en" ? null : translations[lang][el.dataset.i18n];
    el.innerHTML = text || el.dataset.en;
  });
  document.querySelectorAll("[data-set-lang]").forEach(function (b) {
    b.classList.toggle("active", b.dataset.setLang === lang);
    b.setAttribute("aria-pressed", b.dataset.setLang === lang);
  });
}

function playWink() {
  const photo = document.querySelector(".photo-wrap");
  if (!photo) return; // only the home page has the photo
  photo.classList.remove("wink");
  void photo.offsetWidth; // restart the animation
  photo.classList.add("wink");
  photo.addEventListener("animationend", function () {
    photo.classList.remove("wink");
  }, { once: true });
}

function showLanguagePopup() {
  const overlay = document.createElement("div");
  overlay.className = "lang-overlay";
  overlay.innerHTML =
    '<div class="lang-card" role="dialog" aria-modal="true" aria-labelledby="lang-title">' +
      '<h2 id="lang-title">Welcome!</h2>' +
      '<p>What language would you like?</p>' +
      '<p class="lang-sub">¿Qué idioma prefieres? · Che lingua preferisci?</p>' +
      '<div class="lang-options">' +
        '<button type="button" data-lang="en">English</button>' +
        '<button type="button" data-lang="es">Español</button>' +
        '<button type="button" data-lang="it">Italiano</button>' +
      '</div>' +
    '</div>';
  document.body.appendChild(overlay);

  overlay.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const lang = btn.dataset.lang;
      saveLanguage(lang);
      applyLanguage(lang);
      overlay.classList.add("closing");
      setTimeout(function () {
        overlay.remove();
        playWink();
      }, 350);
    });
  });
}

// Start: use the saved language, or ask on the first visit
const saved = loadLanguage();
if (saved && labels[saved]) {
  applyLanguage(saved);
} else {
  showLanguagePopup();
}

document.querySelectorAll("[data-set-lang]").forEach(function (b) {
  b.addEventListener("click", function () {
    saveLanguage(b.dataset.setLang);
    applyLanguage(b.dataset.setLang);
  });
});

// Contact me button: scroll down, then make the contact box glow
const contactButton = document.querySelector(".contact-cta");
if (contactButton) {
  contactButton.addEventListener("click", function () {
    const contact = document.getElementById("contact");
    contact.classList.remove("highlight");
    setTimeout(function () {
      contact.classList.add("highlight");
    }, 600);
    contact.addEventListener("animationend", function () {
      contact.classList.remove("highlight");
    }, { once: true });
  });
}

// Apple-style reveal: sections and list items fade up as they scroll into view
(function () {
  if (!("IntersectionObserver" in window)) return;
  const targets = document.querySelectorAll("main section, main > h1, main > p, main li, main h3");
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  targets.forEach(function (el) {
    if (el.tagName === "LI") {
      const index = Array.prototype.indexOf.call(el.parentNode.children, el);
      el.style.transitionDelay = Math.min(index * 90, 450) + "ms";
    }
    el.classList.add("reveal");
    observer.observe(el);
  });
})();

// Glitter sparkles around the menu tabs on hover
(function () {
  if (!window.matchMedia("(hover: hover)").matches) return;
  const star = '<svg viewBox="0 0 24 24"><path d="M12 0 L14 10 L24 12 L14 14 L12 24 L10 14 L0 12 L10 10 Z" fill="#fff"/></svg>';
  document.querySelectorAll(".site-header nav a").forEach(function (link) {
    let timer = null;
    function sparkle() {
      const s = document.createElement("span");
      s.className = "nav-sparkle";
      s.innerHTML = star;
      const size = 5 + Math.random() * 7;
      s.style.width = size + "px";
      s.style.height = size + "px";
      s.style.left = (Math.random() * 110 - 5) + "%";
      s.style.top = (Math.random() * 140 - 30) + "%";
      link.appendChild(s);
      setTimeout(function () { s.remove(); }, 700);
    }
    link.addEventListener("mouseenter", function () {
      sparkle();
      timer = setInterval(sparkle, 120);
    });
    link.addEventListener("mouseleave", function () {
      clearInterval(timer);
    });
  });
})();

// Click the project screenshot to see it bigger; click again or press Esc to close
(function () {
  const trigger = document.querySelector(".window-image");
  if (!trigger) return;
  trigger.addEventListener("click", function () {
    const box = document.createElement("div");
    box.className = "lightbox";
    box.innerHTML = '<img src="' + trigger.querySelector("img").src + '" alt="Enlarged workflow screenshot">';
    document.body.appendChild(box);
    function close() {
      box.remove();
      document.removeEventListener("keydown", onKey);
    }
    function onKey(e) { if (e.key === "Escape") close(); }
    box.addEventListener("click", close);
    document.addEventListener("keydown", onKey);
  });
})();

// Try It Yourself: drag the arrow from the email to the right node
(function () {
  const demo = document.querySelector(".demo");
  if (!demo) return;

  const text = {
    en: {
      label: "New email", next: "Next email", again: "Play again",
      targets: { lookup: "Look up order (Square API)", ask: "Ask for order #", answer: "Answer key" },
      claude: "Claude drafts", sent: "Sent ✓", review: "Team review",
      done: "Nice! You routed all three emails exactly like the workflow does.",
      rounds: [
        { email: "Where's my order #1042?", route: "lookup", review: false,
          hint: "Close! This email includes an order number, so the workflow can look it up.",
          win: "Correct! The order is found, Claude drafts a reply at 97% confidence, and it's sent automatically." },
        { email: "Where is my order?", route: "ask",
          hint: "Close! It's about an order, but there's no order number to look up yet.",
          win: "Correct! No order number, so the workflow emails the customer to ask for one. No AI needed." },
        { email: "Can I change my shipping address?", route: "answer", review: true,
          hint: "Close! This isn't about a specific order, so the workflow checks the answer key.",
          win: "Correct! Claude drafts a reply from the answer key, but confidence is 82%, so the team reviews it first." }
      ]
    },
    es: {
      label: "Correo nuevo", next: "Siguiente correo", again: "Jugar de nuevo",
      targets: { lookup: "Buscar pedido (API de Square)", ask: "Pedir n.º de pedido", answer: "Guía de respuestas" },
      claude: "Claude redacta", sent: "Enviado ✓", review: "Revisión del equipo",
      done: "¡Muy bien! Enviaste los tres correos exactamente como lo hace el flujo.",
      rounds: [
        { email: "¿Dónde está mi pedido #1042?", route: "lookup", review: false,
          hint: "¡Casi! Este correo incluye un número de pedido, así que el flujo puede buscarlo.",
          win: "¡Correcto! Se encuentra el pedido, Claude redacta una respuesta con 97% de confianza y se envía automáticamente." },
        { email: "¿Dónde está mi pedido?", route: "ask",
          hint: "¡Casi! Es sobre un pedido, pero todavía no hay número para buscar.",
          win: "¡Correcto! Sin número de pedido, el flujo le escribe al cliente para pedírselo. No hace falta IA." },
        { email: "¿Puedo cambiar mi dirección de envío?", route: "answer", review: true,
          hint: "¡Casi! No es sobre un pedido específico, así que el flujo revisa la guía de respuestas.",
          win: "¡Correcto! Claude redacta una respuesta con la guía, pero la confianza es del 82%, así que el equipo la revisa primero." }
      ]
    },
    it: {
      label: "Nuova email", next: "Email successiva", again: "Gioca ancora",
      targets: { lookup: "Cerca ordine (API di Square)", ask: "Chiedi n. ordine", answer: "Guida risposte" },
      claude: "Claude scrive", sent: "Inviata ✓", review: "Revisione del team",
      done: "Brava! Hai smistato tutte e tre le email esattamente come fa il flusso.",
      rounds: [
        { email: "Dov'è il mio ordine #1042?", route: "lookup", review: false,
          hint: "Quasi! Questa email contiene un numero d'ordine, quindi il flusso può cercarlo.",
          win: "Giusto! L'ordine viene trovato, Claude scrive una risposta con affidabilità del 97% e viene inviata in automatico." },
        { email: "Dov'è il mio ordine?", route: "ask",
          hint: "Quasi! Riguarda un ordine, ma non c'è ancora un numero da cercare.",
          win: "Giusto! Senza numero d'ordine, il flusso scrive al cliente per chiederlo. Nessuna IA necessaria." },
        { email: "Posso cambiare l'indirizzo di spedizione?", route: "answer", review: true,
          hint: "Quasi! Non riguarda un ordine specifico, quindi il flusso controlla la guida risposte.",
          win: "Giusto! Claude scrive una risposta dalla guida, ma l'affidabilità è dell'82%, quindi il team la controlla prima." }
      ]
    }
  };

  const board = demo.querySelector(".demo-board");
  const line = demo.querySelector(".demo-line");
  const handle = demo.querySelector(".demo-handle");
  const emailLabel = demo.querySelector(".demo-email-label");
  const emailText = demo.querySelector(".demo-email-text");
  const targets = demo.querySelectorAll(".demo-target");
  const after = demo.querySelector(".demo-after");
  const status = demo.querySelector(".demo-status");
  const nextBtn = demo.querySelector(".demo-next");
  let round = 0, solved = false, lockedTarget = null, dragging = false;

  function t() {
    const lang = document.documentElement.lang;
    return text[lang] || text.en;
  }

  function point(el, side) {
    const b = board.getBoundingClientRect(), r = el.getBoundingClientRect();
    if (side === "handle") return { x: r.left + r.width / 2 - b.left, y: r.top + r.height / 2 - b.top };
    const stacked = window.matchMedia("(max-width: 640px)").matches;
    return stacked ? { x: r.left + r.width / 2 - b.left, y: r.top - b.top }
                   : { x: r.left - b.left, y: r.top + r.height / 2 - b.top };
  }

  function draw(to) {
    const from = point(handle, "handle");
    const stacked = window.matchMedia("(max-width: 640px)").matches;
    const d = stacked
      ? "M" + from.x + "," + from.y + " C" + from.x + "," + (from.y + 40) + " " + to.x + "," + (to.y - 40) + " " + to.x + "," + to.y
      : "M" + from.x + "," + from.y + " C" + (from.x + 60) + "," + from.y + " " + (to.x - 60) + "," + to.y + " " + to.x + "," + to.y;
    line.setAttribute("d", d);
  }

  function render() {
    const tx = t(), r = tx.rounds[round];
    emailLabel.textContent = tx.label;
    emailText.textContent = "\u201C" + r.email + "\u201D";
    targets.forEach(function (b) { b.textContent = tx.targets[b.dataset.route]; });
    nextBtn.textContent = round === tx.rounds.length - 1 ? tx.again : tx.next;
  }

  function reset() {
    solved = false; lockedTarget = null;
    line.setAttribute("d", ""); line.classList.remove("locked");
    targets.forEach(function (b) { b.classList.remove("correct", "dim", "wrong", "hover"); });
    after.innerHTML = ""; status.textContent = ""; nextBtn.classList.remove("show");
    render();
  }

  function choose(target) {
    if (solved) return;
    const tx = t(), r = tx.rounds[round];
    if (target.dataset.route === r.route) {
      solved = true; lockedTarget = target;
      draw(point(target)); line.classList.add("locked");
      target.classList.add("correct");
      targets.forEach(function (b) { if (b !== target) b.classList.add("dim"); });
      const steps = r.route === "ask" ? [tx.sent] : [tx.claude, r.review ? tx.review : tx.sent];
      after.innerHTML = "";
      steps.forEach(function (s, i) {
        if (i > 0) { const a = document.createElement("span"); a.className = "arrow"; a.textContent = "→"; after.appendChild(a); }
        const el = document.createElement("span"); el.textContent = s;
        if (i === steps.length - 1) el.classList.add("final");
        after.appendChild(el);
      });
      after.querySelectorAll("span").forEach(function (el, i) {
        setTimeout(function () { el.classList.add("show"); }, 250 + i * 300);
      });
      setTimeout(function () {
        status.textContent = r.win + (round === tx.rounds.length - 1 ? " " + tx.done : "");
        nextBtn.classList.add("show");
      }, 250 + steps.length * 600);
    } else {
      line.setAttribute("d", "");
      target.classList.remove("wrong"); void target.offsetWidth; target.classList.add("wrong");
      status.textContent = r.hint;
    }
  }

  handle.addEventListener("pointerdown", function (e) {
    if (solved) return;
    dragging = true;
    handle.setPointerCapture(e.pointerId);
    e.preventDefault();
  });

  handle.addEventListener("pointermove", function (e) {
    if (!dragging) return;
    const b = board.getBoundingClientRect();
    draw({ x: e.clientX - b.left, y: e.clientY - b.top });
    const over = document.elementFromPoint(e.clientX, e.clientY);
    targets.forEach(function (tgt) { tgt.classList.toggle("hover", tgt === (over && over.closest(".demo-target"))); });
  });

  handle.addEventListener("pointerup", function (e) {
    if (!dragging) return;
    dragging = false;
    targets.forEach(function (tgt) { tgt.classList.remove("hover"); });
    const over = document.elementFromPoint(e.clientX, e.clientY);
    const target = over && over.closest(".demo-target");
    if (target) choose(target); else line.setAttribute("d", "");
  });

  targets.forEach(function (b) { b.addEventListener("click", function () { choose(b); }); });

  nextBtn.addEventListener("click", function () {
    round = (round + 1) % t().rounds.length;
    reset();
  });

  window.addEventListener("resize", function () { if (lockedTarget) draw(point(lockedTarget)); });
  document.querySelectorAll("[data-set-lang], .lang-options button").forEach(function (b) {
    b.addEventListener("click", function () { setTimeout(reset, 0); });
  });
  document.addEventListener("click", function (e) {
    if (e.target.closest && e.target.closest(".lang-options button")) setTimeout(reset, 0);
  });

  reset();
})();
