/* 토닥토닥 전시 이야기 — 데이터 & 모달 탭 */

const grandmothersData = [
  {
    name: "김옥순",
    stories: [
      {
        title: "학교 가는 길",
        content:
          "나무를 그려보라는 말에, 잎이 푸르고 무성한 나무 한 그루를 그렸습니다.\n\n일제시대 때 학교를 오고 가던 길, 열매를 따며 놀던 그 나무.\n그 나무가 제 기억 속 한 켠에 가지를 뻗고 자리해 있습니다.",
      },
      {
        title: "해바라기를 생각하며",
        content:
          "느긋한 오후의 햇빛과 굽이 굽이 흐르는 강물의 물결, 물길을 따라 앉은 해바라기들\n\n어느 날의 풍경",
      },
      {
        title: "봄, 꽃",
        content:
          "화분에서 고개를 내민 새빨간 봄 꽃\n\n예쁜 걸 아는지 활짝 피어 고개를 내민다. 그 모습이 썩 마음에 든다.\n세 달 전 우리집에 갑자기 찾아온 그 아이.\n\n말을 걸어도 한 번을 안 웃더니, 봄이 찾아오니 활짝 웃는다.\n\n봄 꽃.",
      },
      {
        title: "생애 이야기",
        content:
          "'서울 마포구 도화동에 살다가 4.19 혁명이 났다.\n이듬해 봄, 27살에 연천으로 왔는데 총소리와 탱크소리가 끊임없이 났다.\n\n집도 절도 없는데 군인들이 너무 많았다.\n문을 잠그고 싶었는데 문을 잠그려면 못에 묶어서 문을 닫아야 한다.\n\n너무 무서웠다.'\n15년 동안 손주를 키우고 손주가 크고 나서는 배움의 꿈을 이루고자 노인대학에 입학했습니다.",
      },
    ],
  },
  {
    name: "박영희",
    stories: [
      {
        title: "가족",
        content:
          "9년동안 나와 함께 지내고 있는 반려견 심쿵이.\n\n귀여운 모습을 잘 담고 싶은 마음에 여러 번 연습해서 그렸는데\n그릴 때마다 강아지가 아니라 양처럼 보여서 속상했어요.\n\n이제 강아지처럼 보이나요?",
      },
      {
        title: "의미",
        content:
          "2시간이 훌쩍 시간 가는 줄 몰랐다. 마무리도 못하고 집에 돌아와 마저 그렸다.\n\n그림이 어렵게 느껴지다가도 정말 뜻깊은 시간이었음을 상기한다.\n다음 작품을 그리는 시간이 기다려진다.",
      },
      {
        title: "봄의 풍경",
        content:
          "꽃과 나무가 춤을 추는 봄의 풍경, 그 푸릇푸릇함이 너무 청명해서 마음이 정화되었다.\n\n그림에 풍경을 다 담아내지는 못했지만, 계속 그림을 그리고 싶다.",
      },
      {
        title: "생애 이야기",
        content:
          "'어느 날, 따뜻한 눈빛을 가진 한 남자를 만났습니다. 우리는 긴 미래를 함께 걸어가기로 했습니다.\n아이들이 태어났고, 아이들의 웃음 소리는 제 삶의 행복이 되었습니다.\n\n우리 가족은 저에게 인생에서 꽃 길이 무엇인지 알려주었어요. 영원히 아이들과 남편과 꽃 길만 걷고 싶어요.'\n\n그림을 그리면서, 일상의 사소함에 대해서 알게 되었습니다.\n평소에는 그냥 지나쳐갔던 풍경, 예쁘다고 생각해 본 적 없던 민들레, 반찬을 담는 용도였던 그릇까지…\n\n풍경은 한 폭의 주제가 되었고, 민들레는 작품 같았습니다. 그릇에 그려진 그림을 눈여겨 본 이후로는\n예쁜 그릇에 신경써서 반찬을 담아먹었어요. 그림을 그린다는 건 세상을 아름답게 보는 안경을 쓰는 것 같아요.",
      },
    ],
  },
  {
    name: "조항년",
    stories: [
      {
        title: "캠핑",
        content:
          "꽃과 나무가 춤을 추는 봄의 풍경, 그 푸릇푸릇함이 너무 청명해서 마음이 정화되었다.\n\n그림에 풍경을 다 담아내지는 못했지만, 계속 그림을 그리고 싶다.",
      },
      {
        title: "풀밭에서 숨바꼭질",
        content: "아이들의 어릴 적 모습",
      },
      {
        title: "엄마의 의자",
        content:
          "다리가 아파 늘 의자에 앉아 계셨던 엄마를 떠올리며 만든 작품이다.\n시골의 한적한 풍경과 그 속에 놓인 의자는 나에게 고향과 엄마를 상기시킨다.\n\n엄마, 보고 싶어요.",
      },
      {
        title: "생애 이야기",
        content:
          "'살기 위해 연천으로 오게 되었습니다. 논과 밭이 넓게 펼쳐져 있고, 조용하고 평화로운 분위기가 마음에 들었습니다.\n남편과 저는 이곳에서 터전을 잡고 농사를 지으며 살았습니다.\n\n처음에는 모든 것이 낯설고 힘들었지만, 서서히 이곳의 삶에 적응해 갔습니다.'\n\n복지관에 들어와 여러 사람들을 만나며 나 자신을 찾아가는 느낌을 받았습니다.",
      },
    ],
  },
  {
    name: "김명희",
    stories: [
      {
        title: "들켰다.",
        content:
          '그 시절 그 나이엔 다 그랬다. 눈만 마주쳐도 얼굴이 발그레해지고, 좋아하는 마음을 감추려 해도 숨겨지지 않던 때.\n\n어느 날, 같이 길을 걷다가 동네 사람과 마주쳤다.\n"어라, 둘이 무슨 사이야?" 하는 말에 당황해서 손사래를 쳤지만, 내 부끄러운 표정 때문에 이미 다 들통나 버렸다.\n\n그때는 그게 왜 그리 창피하고 쑥스러웠는지… 지금 생각하면 참 예쁜 추억이다.',
      },
      {
        title: "네가 행복하니 나도 행복하다.",
        content:
          '자식이 웃으면 세상이 다 환해지는 것 같았다. 추운 날 따뜻한 밥 한 그릇 먹이고, 예쁜 옷 입혀 내보내는 게 내 삶의 전부였다.\n\n어느덧 다 자란 자식이 "엄마, 나 지금 너무 행복해" 하고 웃을 때, 내 지난 고생은 눈 녹듯 사라졌다.\n\n네가 행복하니, 나도 참 행복하다.',
      },
      {
        title: "농약 조심!",
        content:
          '농사짓던 시절, 일손은 부족하고 날은 뜨거운데 농약 치는 일은 늘 위험하고 조심스러웠다.\n"약 칠 때 꼭 마스크 쓰고 바람 등지고 서야 해!" 서로 신신당부하며 일했던 기억.\n\n땅을 일구며 살아온 우리네 고단함과 땀방울이 그 농약병 하나에도 서려 있다.',
      },
      {
        title: "생애 이야기",
        content:
          "'어릴 적 고향을 떠나 이곳으로 이사 왔을 때, 온통 낯선 풍경뿐이었습니다.\n배고프고 힘든 시절이었지만, 하루하루 열심히 살다 보니 어느덧 세월이 이렇게 흘렀습니다.\n\n남편을 만나 가정을 이루고, 아이들을 키우며 웃고 울던 시간들이 스쳐 지나갑니다.'\n\n늦게나마 글을 배우고 그림을 그리며 내 삶을 돌돌 말아 펼쳐보는 지금이 참 귀하고 감사한 봄날입니다.",
      },
    ],
  },
  {
    name: "최삼순",
    stories: [
      {
        title: "가족",
        content:
          "서로 기대어 살아온 세월. 좋을 때나 힘들 때나 늘 곁을 지켜준 가족이 있어 오늘이 있습니다.",
      },
      {
        title: "친구",
        content:
          "마음 털어놓을 친구 한 명 있다는 게 인생의 큰 복입니다. 만나면 옛날 이야기로 웃음꽃을 피웁니다.",
      },
      {
        title: "안녕, 나의 작은 새",
        content:
          "창가에 찾아와 지저귀던 작은 새처럼, 내 삶에 잠시 머물다 간 고운 추억들에게 인사를 건넵니다.",
      },
      {
        title: "생애 이야기",
        content:
          "'어려운 시절을 견디며 살아왔지만, 돌이켜보면 감사한 일들이 더 많습니다.\n글을 쓰며 지난날을 돌아보니 내 삶도 한 편의 아름다운 이야기였음을 깨닫습니다.'",
      },
    ],
  },
  {
    name: "서순분",
    stories: [
      {
        title: "무성한 나무에서 나비가 날아다니는 상상",
        content:
          "푸른 나무 그늘 아래 앉아 바람을 맞으며, 알록달록 나비들이 날아다니는 풍경을 상상해 봅니다.",
      },
      {
        title: "『경옥』 엄마와 동생들",
        content: "따뜻했던 엄마의 품, 그리고 시끌벅적했던 동생들과의 어린 시절 추억.",
      },
      {
        title: "나의 살던 고향은",
        content: "눈 감으면 떠오르는 그리운 고향 풍경. 과수원길과 정든 동네 어귀.",
      },
      {
        title: "생애 이야기",
        content:
          "'한 평생 가족을 위해 헌신하며 살아왔습니다. 이제는 나를 위한 그림을 그리고 글을 쓰며 삶의 기쁨을 느낍니다.'",
      },
    ],
  },
  {
    name: "이경분",
    stories: [
      {
        title: "꽃동산",
        content: "알록달록 피어난 꽃들을 보면 마음이 먼저 봄을 맞이합니다.",
      },
      {
        title: "행복한 우리집",
        content: "소박하지만 온기가 가득한 우리 집. 식구들 웃음소리가 가장 큰 행복입니다.",
      },
      {
        title: "사랑하는 연인들의 모습",
        content: "젊은 날의 두근거림과 고운 사랑의 기억을 담았습니다.",
      },
      {
        title: "생애 이야기",
        content:
          "'세월은 참 빠르게 흘러갔지만, 함께 나눈 따뜻한 기억들은 여전히 가슴속에 남아 피어납니다.'",
      },
    ],
  },
  {
    name: "심향숙",
    stories: [
      {
        title: "내 실력이 늘었지",
        content:
          "처음엔 붓 잡기도 어색했는데, 자꾸 그리다 보니 조금씩 예쁜 모양이 나옵니다. 스스로가 대견합니다.",
      },
      {
        title: "신비로운 나무",
        content: "커다란 나무가 주는 포근함과 신비로운 기운을 담아보았습니다.",
      },
      {
        title: "커다란 해바라기",
        content: "해를 향해 환하게 웃는 해바라기처럼 내 인생도 늘 밝기를 바랍니다.",
      },
      {
        title: "생애 이야기",
        content:
          "'새로운 것을 배우고 표현하는 기쁨을 알게 되었습니다. 내 삶의 멋진 한 장을 기록해 나갑니다.'",
      },
    ],
  },
  {
    name: "남영숙",
    stories: [
      {
        title: "우리 시골집",
        content: "흙냄새 나고 정겹던 시골집 정경.",
      },
      {
        title: "시골집",
        content: "마루에 앉아 바라보던 하늘과 마당 구석의 정겨운 풍경들.",
      },
      {
        title: "댄스의 집",
        content: "신나게 춤추며 웃던 즐거운 순간의 에너지.",
      },
      {
        title: "생애 이야기",
        content:
          "'지나온 날들 모두 소중한 내 삶의 조각들입니다. 앞으로의 날들도 활기차고 행복하게 살아가고 싶습니다.'",
      },
    ],
  },
  {
    name: "장애정",
    stories: [
      {
        title: "화분",
        content: "작은 화분에서 자라나는 초록 잎사귀처럼, 매일 조금씩 성장하는 기쁨.",
      },
      {
        title: "화분",
        content: "정성껏 물을 주고 보살피는 마음.",
      },
      {
        title: "엄마의 말",
        content: "지치고 힘들 때마다 나를 일으켜 세워주던 어머니의 따뜻한 한마디.",
      },
      {
        title: "생애 이야기",
        content:
          "'마음속 깊이 간직했던 이야기들을 그림과 글로 세상에 꺼내놓습니다. 참 따뜻하고 감사한 시간입니다.'",
      },
    ],
  },
];

const track = document.getElementById("magazine-track");
const modal = document.getElementById("story-modal");
const modalRecordLabel = document.getElementById("modal-record-label");
const modalGrandmaName = document.getElementById("modal-grandma-name");
const storyTabs = document.getElementById("story-tabs");
const modalStoryTitle = document.getElementById("modal-story-title");
const modalStoryBody = document.getElementById("modal-story-body");

let activeGrandmotherIndex = 0;
let activeStoryIndex = 0;
let lastFocusedElement = null;

function padRecord(index) {
  return String(index + 1).padStart(2, "0");
}

function renderCards() {
  const fragment = document.createDocumentFragment();

  grandmothersData.forEach((grandma, index) => {
    const record = padRecord(index);
    const panelClass = `panel--${record}`;

    const button = document.createElement("button");
    button.type = "button";
    button.className = `panel ${panelClass}`;
    button.setAttribute("aria-label", `${grandma.name} 할머니의 이야기 열기`);
    button.dataset.index = String(index);
    button.innerHTML = `
      <span class="panel-face">
        <span class="panel-label">RECORD ${record}</span>
        <span class="panel-copy">
          <span class="panel-name">${grandma.name}</span>
        </span>
      </span>
    `;

    button.addEventListener("click", () => openModal(index));
    fragment.appendChild(button);
  });

  track.replaceChildren(fragment);
}

function renderTabs(stories) {
  storyTabs.replaceChildren();

  stories.forEach((story, index) => {
    const tab = document.createElement("button");
    tab.type = "button";
    tab.className = "story-tab" + (index === activeStoryIndex ? " is-active" : "");
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", index === activeStoryIndex ? "true" : "false");
    tab.dataset.storyIndex = String(index);
    tab.innerHTML = `<span class="story-tab-index">${index + 1}</span>${story.title}`;
    tab.addEventListener("click", () => showStory(index));
    storyTabs.appendChild(tab);
  });
}

function showStory(storyIndex) {
  const grandma = grandmothersData[activeGrandmotherIndex];
  const story = grandma.stories[storyIndex];
  if (!story) return;

  activeStoryIndex = storyIndex;

  modalStoryTitle.textContent = story.title;
  // white-space: pre-wrap 으로 \n 줄바꿈 유지
  modalStoryBody.textContent = story.content;

  [...storyTabs.children].forEach((tab, index) => {
    const isActive = index === storyIndex;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", isActive ? "true" : "false");
  });

  modal.querySelector(".modal-book")?.scrollTo({ top: 0, behavior: "smooth" });
}

function openModal(grandmaIndex) {
  const grandma = grandmothersData[grandmaIndex];
  if (!grandma) return;

  lastFocusedElement = document.activeElement;
  activeGrandmotherIndex = grandmaIndex;
  activeStoryIndex = 0;

  modalRecordLabel.textContent = `RECORD ${padRecord(grandmaIndex)}`;
  modalGrandmaName.textContent = `${grandma.name} 할머니`;

  renderTabs(grandma.stories);
  showStory(0);

  modal.hidden = false;
  // 다음 프레임에 열어 페이드 인
  requestAnimationFrame(() => {
    modal.classList.add("is-open");
  });
  document.body.classList.add("is-modal-open");
  modal.querySelector(".modal-close")?.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  document.body.classList.remove("is-modal-open");

  window.setTimeout(() => {
    if (!modal.classList.contains("is-open")) {
      modal.hidden = true;
    }
  }, 300);

  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

modal.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-modal]")) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

renderCards();
