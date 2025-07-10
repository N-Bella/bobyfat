
function calculate() {
  const gender = document.getElementById("gender").value;
  const age = parseInt(document.getElementById("age").value);
  const height = parseFloat(document.getElementById("height").value) / 100;
  const weight = parseFloat(document.getElementById("weight").value);

  const bmi = weight / (height * height);
  const sexValue = gender === "male" ? 1 : 0;
  const bodyFat = 1.2 * bmi + 0.23 * age - 5.4 - 10.8 * sexValue;

  document.getElementById("bmiValue").textContent = `BMI：${bmi.toFixed(1)}`;
  document.getElementById("bodyFatValue").textContent = `體脂肪率：約 ${bodyFat.toFixed(1)}%`;

  // 標準比對與警示
  const bmiStd = bmi < 18.5 ? "過輕" : bmi < 24 ? "正常" : bmi < 27 ? "過重" : "肥胖";
  document.getElementById("bmiStandard").textContent = `BMI 標準：${bmiStd}`;

  let fatNormal = gender === "male"
    ? age < 40 ? [8, 19] : age < 60 ? [11, 22] : [13, 25]
    : age < 40 ? [21, 33] : age < 60 ? [23, 34] : [24, 36];

  let bfElem = document.getElementById("bodyFatStandard");
  bfElem.textContent = `體脂肪率標準：${fatNormal[0]}% ~ ${fatNormal[1]}%`;
  if (bodyFat < fatNormal[0] || bodyFat > fatNormal[1]) {
    bfElem.classList.add("red");
  } else {
    bfElem.classList.remove("red");
  }
}

function toggleLang() {
  alert("尚未實作語言切換功能（後續版本將加入）");
}
function shareWeChat() {
  alert("請使用微信掃描本頁面網址分享（或可整合QRCode分享工具）");
}
