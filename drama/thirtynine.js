const drama = {
  title: "서른, 아홉",
  en: "Thirty-Nine",
  year: 2022,
  genre: ["휴먼", "우정", "로맨스"],
  schedule: "수 · 목 / 오후 10:30",
  period: "2022.02.16 ~ 2022.03.31",
  episodes: "12부작",
  channel: "JTBC",
  production: "롯데컬처웍스",
  director: "김상호",
  writer: "유영아",
  cast: "채예진, 전미도, 김지현 外",
  streaming: "TVING · NETFLIX",
  rating: "15세 이상"
};

document.getElementById("infobox").innerHTML = `
  <h2>${drama.title}</h2>
  <div class="row"><span class="label">영제</span>${drama.en}</div>
  <div class="row"><span class="label">방영</span>${drama.schedule}</div>
  <div class="row"><span class="label">기간</span>${drama.period}</div>
  <div class="row"><span class="label">부작</span>${drama.episodes}</div>
  <div class="row"><span class="label">장르</span>${drama.genre.join(", ")}</div>
  <div class="row"><span class="label">연출</span>${drama.director}</div>
  <div class="row"><span class="label">극본</span>${drama.writer}</div>
  <div class="row"><span class="label">출연</span>${drama.cast}</div>
  <div class="row"><span class="label">스트리밍</span>${drama.streaming}</div>
  <div class="row"><span class="label">등급</span>${drama.rating}</div>
`;
