// ဂိမ်းအချက်အလက်များ
let gameState = {
    gold: 1000,
    energy: 500,
    military: 50,
    year: 2026,
    selectedCountry: null
};

// နိုင်ငံရွေးချယ်ခြင်း
function selectCountry(countryName) {
    gameState.selectedCountry = countryName;
    document.getElementById("selected-country").innerText = countryName;
}

// မျက်နှာပြင် အချက်အလက်အသစ်ပြခြင်း
function updateUI() {
    document.getElementById("gold").innerText = gameState.gold;
    document.getElementById("energy").innerText = gameState.energy;
    document.getElementById("military").innerText = gameState.military;
    document.getElementById("year").innerText = gameState.year;
}

// စီးပွားရေးမြှင့်တင်ခြင်း
function buildEconomy() {
    if (!gameState.selectedCountry) {
        alert("ကျေးဇူးပြု၍ ပထမဆုံး မြေပုံပေါ်ရှိ နိုင်ငံတစ်ခုကို နှိပ်၍ ရွေးချယ်ပါ။");
        return;
    }
    gameState.gold += 200;
    gameState.energy += 100;
    alert(gameState.selectedCountry + " နိုင်ငံအတွက် စီးပွားရေး တည်ဆောက်ပြီးပါပြီ။");
    updateUI();
}

// စစ်တပ်စုဖွဲ့ခြင်း
function trainMilitary() {
    if (gameState.gold < 150) {
        alert("ရွှေ မလုံလောက်ပါ။");
        return;
    }
    gameState.gold -= 150;
    gameState.military += 15;
    alert("စစ်အင်အား တိုးချဲ့ပြီးပါပြီ။");
    updateUI();
}

// ဆိုက်ဘာစစ်ဆင်ရေး
function doCyberAttack() {
    if (!gameState.selectedCountry) {
        alert("ပစ်မှတ်ထားမည့် နိုင်ငံကို အရင်ရွေးချယ်ပါ။");
        return;
    }
    if (gameState.energy < 100) {
        alert("စွမ်းအင် မလုံလောက်ပါ။");
        return;
    }
    gameState.energy -= 100;
    gameState.gold += 300;
    alert(gameState.selectedCountry + " ဆီသို့ ဆိုက်ဘာတိုက်ခိုက်မှု အောင်မြင်သည်!");
    updateUI();
}

// အလှည့်ကျော်ခြင်း
function nextTurn() {
    gameState.year += 1;
    gameState.gold += 100;
    alert("ခုနှစ် တိုးမြှင့်ပြီးပါပြီ။");
    updateUI();
}
