const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// ဂိမ်းအဓိက အချက်အလက်များ
let game = {
    turn: 1,
    gold: 2000,
    minerals: 50,
    drones: 5
};

// နယ်မြေများစာရင်း (Regions)
let regions = [
    { name: "ပြည်တွင်းဒေသ (Home)", owner: "Player", color: "#238636", x: 30, y: 30, w: 140, h: 100 },
    { name: "အနောက်ဘက် ရေနံကွင်း", owner: "Neutral", color: "#8b949e", x: 190, y: 30, w: 140, h: 100 },
    { name: "အရှေ့ဘက် နည်းပညာဇုန်", owner: "Enemy", color: "#da3633", x: 30, y: 150, w: 140, h: 100 },
    { name: "ဆိုက်ဘာဗဟိုချက်", owner: "Enemy", color: "#da3633", x: 190, y: 150, w: 140, h: 100 }
];

function updateUI() {
    document.getElementById("turn").innerText = game.turn;
    document.getElementById("gold").innerText = game.gold;
    document.getElementById("minerals").innerText = game.minerals;
    document.getElementById("drones").innerText = game.drones;
}

function setLog(message) {
    document.getElementById("game-log").innerText = message;
}

// မြေပုံဆွဲခြင်း
function drawMap() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    regions.forEach(reg => {
        ctx.fillStyle = reg.color;
        ctx.fillRect(reg.x, reg.y, reg.w, reg.h);
        
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 1;
        ctx.strokeRect(reg.x, reg.y, reg.w, reg.h);

        // စာသားများထည့်ရန်
        ctx.fillStyle = "#ffffff";
        ctx.font = "11px sans-serif";
        ctx.fillText(reg.name, reg.x + 8, reg.y + 30);
        ctx.font = "10px sans-serif";
        ctx.fillText("ပိုင်ရှင်: " + reg.owner, reg.x + 8, reg.y + 60);
    });
}

// ၁။ အရင်းအမြစ်ရှာဖွေခြင်း (Economy)
function collectResources() {
    game.gold += 300;
    game.minerals += 15;
    setLog("စီးပွားရေး လုပ်ငန်းများမှ အခွန်နှင့် သတ္တုရှားပါးများ ရရှိခဲ့သည်။");
    updateUI();
}

// ၂။ ဆိုက်ဘာစစ်ဆင်ရေး (Cyber Warfare)
function launchCyberAttack() {
    if (game.drones >= 2) {
        game.drones -= 1;
        // ရန်သူ့နယ်မြေတစ်ခုကို Neutral သို့မဟုတ် Player ဘက်ပြောင်းရန်
        let enemyRegion = regions.find(r => r.owner === "Enemy");
        if (enemyRegion) {
            enemyRegion.owner = "Player";
            enemyRegion.color = "#238636";
            setLog("ဆိုက်ဘာတိုက်ခိုက်မှု အောင်မြင်! " + enemyRegion.name + " ၏ အဓိက အဆောက်အအုံကို သိမ်းပိုက်လိုက်သည်။");
            drawMap();
        } else {
            setLog("ရန်သူ့နယ်မြေအားလုံးကို သိမ်းပိုက်ပြီးပါပြီ။");
        }
    } else {
        setLog("ဒရုန်းနှင့် ဆိုက်ဘာယူနစ် မလုံလောက်ပါ။");
    }
    updateUI();
}

// ၃။ နောက်တစ်လသို့ပြောင်းခြင်း (Next Turn)
function nextTurn() {
    game.turn += 1;
    game.gold += 150; // လစဉ်ပုံမှန်ဝင်ငွေ
    setLog("လအလှည့်ပြောင်းသွားပါပြီ (Turn " + game.turn + ")။ စစ်ရေးပြင်ဆင်မှုများ လုပ်ဆောင်ပါ။");
    updateUI();
}

// စတင် Run ခြင်း
updateUI();
drawMap();
