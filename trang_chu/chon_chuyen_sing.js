// DATA VÉ
const flights = [
  {
    from: "TP.HCM",
    to: "Singapore",
    time: "08:00 - 10:10",
    airline: "Vietnam Airlines",
    economy: "4.850.000đ",
    premium: "6.450.000đ",
    business: "12.500.000đ"
  },
  {
    from: "TP.HCM",
    to: "Singapore",
    time: "09:30 - 11:40",
    airline: "VietJet Air",
    economy: "3.950.000đ",
    premium: "5.200.000đ",
    business: "10.900.000đ"
  },
  {
    from: "TP.HCM",
    to: "Singapore",
    time: "12:00 - 14:10",
    airline: "Bamboo Airways",
    economy: "4.200.000đ",
    premium: "5.600.000đ",
    business: "11.200.000đ"
  },
  {
    from: "TP.HCM",
    to: "Singapore",
    time: "14:30 - 16:40",
    airline: "Pacific Airlines",
    economy: "4.100.000đ",
    premium: "5.500.000đ",
    business: "10.800.000đ"
  },
  {
    from: "TP.HCM",
    to: "Singapore",
    time: "18:00 - 20:10",
    airline: "Singapore Airlines",
    economy: "5.800.000đ",
    premium: "7.200.000đ",
    business: "14.500.000đ"
  },
  {
    from: "TP.HCM",
    to: "Singapore",
    time: "21:00 - 23:10",
    airline: "Vietravel Airlines",
    economy: "3.800.000đ",
    premium: "5.100.000đ",
    business: "10.500.000đ"
  }
];

// LƯU LOCALSTORAGE
localStorage.setItem("flights", JSON.stringify(flights));

const form = document.getElementById("searchForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(e){
  e.preventDefault();

  const from = document.getElementById("from").value.trim();
  const to = document.getElementById("to").value.trim();

  const data = JSON.parse(localStorage.getItem("flights")) || [];

  const filtered = data.filter(f =>
    f.from.toLowerCase().includes(from.toLowerCase()) &&
    f.to.toLowerCase().includes(to.toLowerCase())
  );

  if(filtered.length === 0){
    result.innerHTML = "<p>Không tìm thấy chuyến bay</p>";
    return;
  }

result.innerHTML = filtered.map(f => `
  <div class="result-card">
    <div class="info">
      <div>
        <div class="time">${f.time}</div>
        <div class="city">${f.from} → ${f.to}</div>
        <div class="line"></div>
        <div class="detail">${f.airline}</div>
      </div>
    </div>

    <div class="ticket">
      <div class="box normal">
        <h3>Phổ thông</h3>
        <div>${f.economy}</div>
      </div>

      <div class="box special">
        <h3>Đặc biệt</h3>
        <div>${f.premium}</div>
      </div>

      <div class="box business">
        <h3>Thương gia</h3>
        <div>${f.business}</div>
      </div>
    </div>
  </div>
`).join("");
});
