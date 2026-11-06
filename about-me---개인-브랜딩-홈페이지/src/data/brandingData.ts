export interface ExperienceItem {
  id: string;
  title: string;
  category: string;
  period: string; // User configurable
  role: string;
  summary: string;
  description: string;
  learnings: string[];
  tags: string[];
  image?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  englishTitle: string;
  subtitle: string;
  category: string;
  summary: string;
  description: string;
  image: string;
  keyFeatures: string[];
  deliverables: string[];
  quote?: string;
  linkText?: string;
  tags: string[];
}

export interface ArchiveItem {
  id: string;
  title: string;
  category: 'DAILY' | 'READING' | 'WRITING' | 'EDUCATION' | 'DESIGN' | 'GROWTH';
  date: string;
  caption: string;
  imageUrl: string;
  details?: string;
}

export interface PraiseSong {
  id: string;
  title: string;
  artist: string;
  meaning: string;
  favoriteLyrics: string;
  theme: string;
}

export interface ScriptureItem {
  id: string;
  verse: string;
  reference: string;
  reflection: string;
}

export interface PersonalBrandingData {
  owner: {
    name: string;
    englishName: string;
    role: string;
    tagline: string;
    subTagline: string;
    introProse: string[];
    email: string;
    blogUrl: string;
    instagramUrl: string;
    otherSnsUrl: string;
    location: string;
  };
  keywords: string[];
  aboutDetails: {
    personality: {
      title: string;
      desc: string;
    }[];
    strengths: string[];
    favorites: string[];
    coreValues: {
      title: string;
      desc: string;
    }[];
    futureGoals: string[];
  };
  experiences: ExperienceItem[];
  projects: ProjectItem[];
  archive: ArchiveItem[];
  faith: {
    story: string;
    worshipLeaderReflection: string;
    learnings: string[];
    gratitudeNote: string;
    praises: PraiseSong[];
    scriptures: ScriptureItem[];
  };
}

export const initialBrandingData: PersonalBrandingData = {
  owner: {
    name: "기록하는 사람",
    englishName: "ABOUT ME",
    role: "아동 교육 & 콘텐츠 기록자",
    tagline: "나를 기록하고, 나답게 성장하다.",
    subTagline: "작은 경험 하나도 소중하게 생각하며, 사람과 함께 성장하고 새로운 이야기를 만들어 갑니다.",
    introProse: [
      "빠르지는 않아도 꾸준히 나만의 길을 걸어갑니다.",
      "저는 한 가지 일을 깊이 있게 생각하고, 맡은 일에 책임감을 가지고 임하는 사람입니다.",
      "때로는 새로운 도전이 조심스럽기도 하지만 작은 경험을 통해 배우고 성장하는 과정을 소중하게 생각합니다.",
      "사람과 함께하는 일, 글과 사진으로 기록하는 일, 새로운 콘텐츠를 만들어 가는 일을 좋아합니다."
    ],
    email: "bbji0831@gmail.com",
    blogUrl: "",
    instagramUrl: "",
    otherSnsUrl: "",
    location: "대한민국 (설정 가능)"
  },
  keywords: [
    "성실함",
    "꾸준함",
    "책임감",
    "신중함",
    "배움",
    "성장",
    "기록"
  ],
  aboutDetails: {
    personality: [
      {
        title: "성실함과 꾸준함",
        desc: "한 번에 커다란 도약을 노리기보다, 매일 조금씩 쌓아 올리는 정직한 시간을 믿습니다."
      },
      {
        title: "신중함과 깊은 배려",
        desc: "시작할 때는 꼼꼼히 살피고, 사람과의 관계에서는 다정한 경청과 세심한 주의를 기울입니다."
      },
      {
        title: "끝까지 해내는 책임감",
        desc: "주어진 역할과 약속을 소중히 여기며 어떤 상황에서도 맡은 바를 끝까지 책임지고 완수합니다."
      }
    ],
    strengths: [
      "아이들의 작은 감정 변화를 포착하고 따뜻하게 공감하는 정서적 교감 능력",
      "복잡한 생각과 일상의 경험을 체계적이고 담백한 글로 정리하는 기록력",
      "눈높이에 맞는 친근하고 알기 쉬운 교육 자료 및 PPT 기획 및 제작 역량",
      "예배 찬양팀에서 다년간 섬기며 다져진 협업과 공동체 소통 역량"
    ],
    favorites: [
      "차분한 아침 햇살 아래 마시는 따뜻한 차 한 잔과 조용한 독서",
      "아이들이 새로운 것을 깨닫고 눈을 반짝일 때 나누는 눈 맞춤",
      "책에서 발견한 마음에 남는 문장을 필사하고 사색하는 시간",
      "마음을 울리는 찬양의 멜로디와 어쿠스틱 기타 선율",
      "생각을 단정하게 시각화하는 감성적인 카드뉴스와 발표 자료 디자인"
    ],
    coreValues: [
      {
        title: "정직한 성장 (Growth)",
        desc: "겉치레나 조급함 대신, 나의 속도에 맞추어 진솔하게 배우고 내면을 다집니다."
      },
      {
        title: "사람과 동행 (Empathy)",
        desc: "사람의 성장을 돕고 곁을 지켜주는 일에서 가장 깊은 의미와 기쁨을 느낍니다."
      },
      {
        title: "일상의 기록 (Archive)",
        desc: "지나쳐버리기 쉬운 순간들을 글과 자료로 기록하여 소중한 의미로 남깁니다."
      },
      {
        title: "신앙과 감사 (Faith)",
        desc: "삶의 모든 자리에서 겸손하게 하나님의 은혜를 기억하고 감사를 고백합니다."
      }
    ],
    futureGoals: [
      "아이들의 정서와 성장을 보듬는 따뜻한 교육 콘텐츠 및 그림책 프로그램 기획",
      "'오늘의 책상' 독서 프로젝트를 꾸준히 연재하여 많은 이들에게 위로와 영감 제공",
      "나만의 진솔한 배움과 신앙의 여정을 엮은 독립 출판물 또는 에세이 완성",
      "아이들과 교사, 부모 모두가 행복해지는 정서 지원 나눔 프로젝트 확장"
    ]
  },
  experiences: [
    {
      id: "exp-childcenter",
      title: "지역아동센터 교육 및 돌봄 활동",
      category: "아동 복지 & 정서 지원",
      period: "기간을 입력할 수 있습니다 (예: 2023.03 - 2024.02)",
      role: "교육 및 학습 멘토링 / 정서 지원",
      summary: "방과 후 아동들의 학습 지도와 정서적 유대감 형성을 위한 돌봄 활동을 진행했습니다.",
      description: "아동센터를 찾는 아이들과 함께 호흡하며 기초 학습 지도뿐만 아니라, 아이들의 하루 일과와 마음을 나누는 정서적 지지자가 되어 주었습니다. 가정과 학교에서 다 표현하지 못한 감정을 경청하고 존중하는 시간을 가졌습니다.",
      learnings: [
        "아이들에게 필요한 것은 단순한 정답 가르침이 아니라, 흔들림 없이 믿어주는 어른의 존재라는 점을 체득",
        "각 아이마다 기질과 감정 표현 방식이 다르므로 개별 맞춤 눈높이 대화법의 중요성을 배움",
        "돌봄의 본질은 함께 머무르며 온기를 나누는 시간임을 깨달음"
      ],
      tags: ["아동돌봄", "정서지원", "학습지도", "경청"],
      image: "/src/assets/images/experience_childcare_art_1793930276333.jpg"
    },
    {
      id: "exp-kindergarten",
      title: "어린이집 보육 및 교육 활동",
      category: "영유아 보육 & 발달 지원",
      period: "기간을 입력할 수 있습니다 (예: 2022.03 - 2023.01)",
      role: "영유아 생활 지도 및 보육 지원",
      summary: "영유아의 일상 생활 습관 지도 및 놀이 중심 발달 지원 활동을 수행했습니다.",
      description: "영유아들이 안전하고 편안한 환경에서 하루를 보낼 수 있도록 식사, 위생, 낮잠 등 기본 생활 습관을 섬세히 도왔습니다. 다양한 오감 발달 놀이와 그림책 읽어주기를 통해 아이들의 언어 및 정서 발달을 촉진했습니다.",
      learnings: [
        "작은 위험 요인도 사전에 예방하는 꼼꼼한 관찰력과 안전 의식 함양",
        "비언어적 신호(표정, 울음, 손짓)를 민감하게 해석하고 빠르게 반응하는 돌봄 감수성 습득",
        "선생님 및 동료들과의 긴밀한 소통이 건강한 보육 환경의 핵심임을 학습"
      ],
      tags: ["영유아발달", "생활습관", "놀이교육", "안전관리"]
    },
    {
      id: "exp-content",
      title: "아동 교육 자료 및 활동 콘텐츠 제작",
      category: "교육 자료 & PPT 디자인",
      period: "상시 진행 (자료 개발 및 공유)",
      role: "교육 콘텐츠 기획 및 시각 자료 제작",
      summary: "아이들이 능동적으로 참여할 수 있는 눈높이 맞춤형 활동지와 PPT를 제작했습니다.",
      description: "아이들의 집중력과 흥미를 고려하여 직관적인 일러스트, 퀴즈, 빙고 게임 및 그림책 연계 질문 카드를 자체 제작했습니다. 글자를 모르는 유아부터 초등학생까지 쉽게 이해할 수 있는 시각적 레이아웃을 연구했습니다.",
      learnings: [
        "콘텐츠 제작 시 사용자의 연령대와 시각적 주의 집중 시간에 대한 깊은 이해 획득",
        "추상적인 개념을 구체적인 그림과 참여형 활동으로 변환하는 기획력 강화",
        "가르치는 사람의 준비성이 수업의 몰입도를 완전히 변화시킨다는 확신"
      ],
      tags: ["교육용PPT", "활동지제작", "그림책연계", "참여형교구"]
    },
    {
      id: "exp-worship",
      title: "교회 찬양팀 인도 및 예배 섬김",
      category: "찬양 인도 & 예배 기획",
      period: "기간을 입력할 수 있습니다 (장기 섬김)",
      role: "찬양팀 인도자 / 예배 섬김이",
      summary: "공동체 예배의 찬양을 인도하며 팀원들과의 음악적·영적 조화를 이끌어 왔습니다.",
      description: "매주 예배의 흐름과 말씀을 묵상하며 찬양 곡조를 선정하고, 보컬 및 연주팀과 함께 연습을 주관했습니다. 기술적인 완성도보다 진실한 마음으로 하나님께 예배드릴 수 있도록 팀원들을 격려하고 마음을 모았습니다.",
      learnings: [
        "앞에 나서는 리더보다 뒤에서 팀원들을 지탱하고 세워주는 섬김의 리더십 습득",
        "예기치 못한 상황에서도 침착하게 대처하고 영적인 중심을 지키는 내면의 평정심",
        "찬양 속에 담긴 고백을 일상의 삶으로 살아내야 한다는 성찰"
      ],
      tags: ["찬양인도", "예배기획", "팀리더십", "공동체섬김"],
      image: "/src/assets/images/faith_acoustic_worship_1793930277116.jpg"
    }
  ],
  projects: [
    {
      id: "proj-desk",
      title: "오늘의 책상",
      englishTitle: "TODAY'S DESK",
      subtitle: "책과 함께하는 사색과 성장의 기록 프로젝트",
      category: "READING & WRITING",
      summary: "독서와 책을 중심으로 하루의 생각과 마음을 정갈하게 정리하는 라이프스타일 독서 프로젝트입니다.",
      description: "바쁜 일상 속에서도 책상 앞에 앉아 책장을 넘기는 시간을 '쉼과 발견'의 순간으로 규정합니다. 단순한 줄거리 요약을 넘어, 책 속의 문장이 나의 삶에 던진 질문과 그에 대한 진솔한 고백을 기록으로 남깁니다.",
      image: "/src/assets/images/project_desk_reading_1793930277931.jpg",
      keyFeatures: [
        "이달의 추천 도서 선정 및 핵심 테마 큐레이션",
        "밑줄 친 책 속 문장과 필사 아카이빙",
        "책이 던진 질문에 대한 개인적 성찰 에세이 작성",
        "아동 문학과 그림책에 대한 어른의 시선 리뷰"
      ],
      deliverables: [
        "도서 서평 및 밑줄 아카이브 40+ 편",
        "책상 인테리어 및 독서 무드 사진 기록",
        "주제별 테마 도서 큐레이션 가이드"
      ],
      quote: "책을 읽는 시간은 단순히 지식을 쌓는 시간이 아니라, 흩어진 나 자신을 다시 정돈하는 시간입니다.",
      linkText: "독서 기록 보기",
      tags: ["독서기록", "필사", "오늘의책상", "에세이"]
    },
    {
      id: "proj-blog",
      title: "나의 일상과 신앙 블로그",
      englishTitle: "PERSONAL ARCHIVE BLOG",
      subtitle: "일상의 소소한 발견과 신앙적 성찰을 글로 엮는 공간",
      category: "BLOG & ESSAY",
      summary: "평소 좋아하는 글쓰기를 통해 삶의 흔적과 신앙적 고백, 성장의 여정을 진솔하게 기록합니다.",
      description: "누군가에게 보이기 위한 화려한 글보다는, 시간이 지난 후 읽었을 때 그때의 정직한 마음이 느껴지는 기록을 지향합니다. '기독교 100문 100답', 일상의 감사, 독서 노트 등을 꾸준히 연재하고 있습니다.",
      image: "/src/assets/images/hero_workspace_books_1793930276706.jpg",
      keyFeatures: [
        "일상의 작은 기쁨과 회고를 담은 잔잔한 일상 일기",
        "신앙의 근본적인 질문을 묻고 답하는 '기독교 100문 100답'",
        "스스로 배우고 실천한 자기계발 및 마음 관리 기록",
        "마음에 닿는 사진과 함께 담아낸 포토 에세이"
      ],
      deliverables: [
        "기독교 100문 100답 묵상 아카이브",
        "계절별 일상 회고 및 생각 노트 80+ 편",
        "신앙 서적 독후감 및 예배 묵상록"
      ],
      quote: "기록하지 않으면 흘러가 버리는 소중한 순간들을 정성껏 붙잡아 둡니다.",
      linkText: "블로그 바로가기",
      tags: ["블로그", "기독교100문100답", "포토에세이", "자기성찰"]
    },
    {
      id: "proj-education",
      title: "어린이를 위한 교육 자료 제작",
      englishTitle: "CREATIVE LEARNING LAB",
      subtitle: "아이들의 눈높이에서 출발하는 따뜻한 교육 콘텐츠",
      category: "EDUCATION & DESIGN",
      summary: "아이들의 능동적 참여와 정서적 안정을 이끄는 교육용 PPT 및 활동지 디자인 프로젝트입니다.",
      description: "아동센터와 어린이집에서의 현장 경험을 바탕으로, 아이들이 실제로 재미있어하고 몰입할 수 있는 자료를 만듭니다. 성경 이야기 자료, 그림책 연계 활동지, 빙고 게임 등 다양한 양질의 교구를 연구합니다.",
      image: "/src/assets/images/experience_childcare_art_1793930276333.jpg",
      keyFeatures: [
        "아이들의 집중력을 유지시키는 시각적 PPT 슬라이드",
        "연령별 난이도를 고려한 성경 이야기 시각 교재",
        "오감 자극형 그림책 독후 활동지 및 미로/빙고 게임",
        "교사들이 현장에서 즉시 활용할 수 있는 가이드라인"
      ],
      deliverables: [
        "교육용 인터랙티브 PPT 템플릿 20+ 세트",
        "어린이 성경 이야기 그림 카드 및 워크시트",
        "그림책 탐색 질문지 및 창의 표현 활동지"
      ],
      quote: "좋은 교육 자료는 아이의 마음에 닿아 스스로 질문을 던지게 만듭니다.",
      linkText: "자료 샘플 살펴보기",
      tags: ["교육용PPT", "성경교재", "활동지", "그림책수업"]
    },
    {
      id: "proj-design",
      title: "시각 디자인 및 창작 활동",
      englishTitle: "VISUAL CREATION & MEDIA",
      subtitle: "따뜻한 감성과 전달력을 담은 시각 콘텐츠 디자인",
      category: "VISUAL & MEDIA",
      summary: "아이디어를 매력적인 그래픽과 단정한 레이아웃으로 시각화하는 디자인 창작 활동입니다.",
      description: "SNS 카드뉴스, 발표용 프레젠테이션, 감성 일러스트 엽서 등 정보를 전달하면서도 보는 이의 마음에 온기를 남길 수 있는 디자인을 만듭니다. 미니멀하고 정갈한 여백의 미를 중시합니다.",
      image: "/src/assets/images/hero_workspace_books_1793930276706.jpg",
      keyFeatures: [
        "가독성과 감성을 동시에 잡은 SNS 카드뉴스 기획 및 제작",
        "학습 및 강연 목적에 최적화된 감각적인 발표 자료 디자인",
        "일상의 따스한 문장을 담은 텍스트 포스터 및 타이포그래피",
        "브랜드 아이덴티티와 컬러 팔레트 가이드 수립"
      ],
      deliverables: [
        "SNS 카드뉴스 시리즈 30+ 편 제작",
        "전문 프레젠테이션 디자인 템플릿",
        "디지털 굿즈 및 프린터블 서식 (독서 노트, 플래너)"
      ],
      quote: "디자인은 나의 생각을 가장 정돈된 언어로 전하는 또 하나의 방식입니다.",
      linkText: "창작물 갤러리 보기",
      tags: ["카드뉴스", "시각디자인", "발표자료", "SNS콘텐츠"]
    }
  ],
  archive: [
    {
      id: "arc-1",
      title: "오늘 아침의 책상과 따뜻한 차 한 잔",
      category: "DAILY",
      date: "2026.10.14",
      caption: "창가로 비치는 부드러운 가을 햇살을 마주하며, 따뜻한 차와 함께 하루를 시작했습니다. 작은 루틴이 마음을 든든하게 채워줍니다.",
      imageUrl: "/src/assets/images/hero_workspace_books_1793930276706.jpg",
      details: "기록의 시작은 작은 관찰에서 비롯됩니다. 오늘 하루 동안 만날 사람들에게 친절하고 온화한 태도를 지니기로 다짐했습니다."
    },
    {
      id: "arc-2",
      title: "어린이들과 함께 만든 숲속 동물 그림책",
      category: "EDUCATION",
      date: "2026.09.28",
      caption: "아이들이 색연필로 그린 알록달록한 그림들을 모아 작은 그림책으로 엮었습니다. 아이들의 순수한 상상력에 매번 놀랍니다.",
      imageUrl: "/src/assets/images/experience_childcare_art_1793930276333.jpg",
      details: "정형화된 틀 없이 자유롭게 색칠하고 이야기 지어내는 아이들의 눈빛에서 창작의 본질을 배웁니다."
    },
    {
      id: "arc-3",
      title: "조용한 밤, '멈춤'에 관한 문장 필사",
      category: "READING",
      date: "2026.09.11",
      caption: "‘빠름’을 강요하는 세상 속에서 나의 고유한 보폭을 잃지 않는 것. 오늘의 책상에 앉아 마음에 닿는 문장을 곱씹었습니다.",
      imageUrl: "/src/assets/images/project_desk_reading_1793930277931.jpg",
      details: "책의 한 줄이 때로는 긴 위로가 됩니다. 만년필로 천천히 써 내려간 글씨들이 마음에 단단한 평안을 줍니다."
    },
    {
      id: "arc-4",
      title: "주일 찬양 연습 후 남겨진 어쿠스틱 기타",
      category: "GROWTH",
      date: "2026.08.30",
      caption: "예배당의 따뜻한 조명 아래 찬양 연습을 마친 후. 소리 없는 악기조차 깊은 은혜를 기억하고 있는 듯한 평화로운 풍경입니다.",
      imageUrl: "/src/assets/images/faith_acoustic_worship_1793930277116.jpg",
      details: "음악적인 기술보다 중요한 것은 찬양을 부르는 사람의 진실한 마음이라는 사실을 다시 한번 마음에 새깁니다."
    },
    {
      id: "arc-5",
      title: "기독교 100문 100답 묵상 글을 블로그에 올리며",
      category: "WRITING",
      date: "2026.08.15",
      caption: "‘고난 속에서도 감사할 수 있는 이유는 무엇인가’에 대해 깊이 묵상하고 적어 내려간 글. 솔직한 고민을 나누는 소중한 여정입니다.",
      imageUrl: "/src/assets/images/hero_workspace_books_1793930276706.jpg",
      details: "신앙은 당연한 것을 의심 없이 받아들이는 것이 아니라, 의문 속에서도 하나님의 신실하심을 신뢰하는 것임을 배웁니다."
    },
    {
      id: "arc-6",
      title: "새 학기 아이들을 맞이하는 맞춤 교구 기획",
      category: "DESIGN",
      date: "2026.07.22",
      caption: "첫 만남의 어색함을 녹여줄 빙고 게임과 감정 표현 카드 디자인 작업. 아이들의 입가에 미소가 번지기를 기대합니다.",
      imageUrl: "/src/assets/images/experience_childcare_art_1793930276333.jpg",
      details: "아이들의 손에 쥐어질 카드 하나의 모서리 라운딩과 폰트 크기까지 고민하는 과정에서 디자인의 즐거움을 느낍니다."
    }
  ],
  faith: {
    story: "저에게 신앙은 삶의 거창한 자랑이나 과시가 아닌, 매일의 호흡이자 나를 지탱해 주는 따스한 안식처입니다. 불완전한 내가 온전하신 하나님의 사랑 안에 거하며, 실수 속에서도 다시 일어설 수 있는 힘을 얻습니다.",
    worshipLeaderReflection: "오랫동안 찬양팀 인도자로 섬기며 배운 가장 큰 교훈은 ‘무대 위의 인도자’가 아니라 ‘가장 낮은 자리의 예배자’가 되어야 한다는 점이었습니다. 화려한 화음이나 세련된 진행보다, 상한 마음으로 예배당을 찾은 한 영혼이 주님의 음성을 듣고 위로받는 것이 찬양의 참된 목적임을 깨닫습니다.",
    learnings: [
      "기다림의 시간 역시 하나님의 섬세한 섭리 안에 있음을 신뢰하는 인내",
      "내 기준과 고집을 내려놓고 공동체의 소리에 귀 기울이는 겸손함",
      "보이지 않는 작은 일과 이름 없는 헌신에 더욱 깃들어 있는 하나님의 기쁨",
      "모든 상황 속에서 먼저 감사를 선택할 때 열리는 마음의 평안"
    ],
    gratitudeNote: "오늘도 숨 쉴 수 있는 생명을 주시고, 사랑하는 사람들과 함께 걷게 하심에 감사합니다. 내가 가진 작은 재능으로 누군가의 하루에 온기를 더할 수 있기를 기도합니다.",
    praises: [
      {
        id: "praise-1",
        title: "은혜 (Grace)",
        artist: "손경민",
        meaning: "내가 누려왔던 모든 것, 지나왔던 모든 시간이 당연한 것이 아니라 오직 은혜였음을 고백하는 찬양입니다.",
        favoriteLyrics: "모든 것이 은혜 은혜 은혜 한없는 은혜 / 내 삶에 당연한 건 하나도 없었던 것을 모든 것이 은혜였소",
        theme: "감사와 은혜"
      },
      {
        id: "praise-2",
        title: "선한 능력으로 (Von guten Mächten)",
        artist: "디트리히 본회퍼 / 나무엔",
        meaning: "어떤 고난과 불안 속에서도 주님의 선한 능력에 감싸여 담대히 내일을 맞이할 힘을 주는 고백입니다.",
        favoriteLyrics: "그 선한 힘이 우릴 감싸시니 믿음으로 일어날 일 기대하네 / 주 언제나 우리와 함께 계셔 하루 또 하루가 늘 새로워",
        theme: "위로와 소망"
      },
      {
        id: "praise-3",
        title: "꽃들도 (Hanamozora)",
        artist: "JWorship",
        meaning: "창조된 모든 자연 만물이 주를 찬양하듯, 우리 삶의 모든 호흡으로 주님을 예배하길 바라는 마음입니다.",
        favoriteLyrics: "꽃들도 구름도 바람도 넓은 바다도 / 찬양하라 찬양하라 예수를",
        theme: "찬양과 기쁨"
      },
      {
        id: "praise-4",
        title: "주의 손에 나의 손을 포개고",
        artist: "주리",
        meaning: "내 뜻과 욕심을 내려놓고 오직 주님의 십자가 사랑과 인도하심에 나의 삶을 온전히 맡기는 기도입니다.",
        favoriteLyrics: "주 섬김의 자리로 나아가며 나의 삶을 주께 드립니다",
        theme: "헌신과 결단"
      }
    ],
    scriptures: [
      {
        id: "scrip-1",
        verse: "우리가 알거니와 하나님을 사랑하는 자 곧 그의 뜻대로 부르심을 입은 자들에게는 모든 것이 합력하여 선을 이루느니라",
        reference: "로마서 8장 28절",
        reflection: "때로는 이해되지 않는 순간이나 흔들리는 날에도, 하나님께서 모든 과정을 합하여 선한 길로 인도하심을 믿습니다."
      },
      {
        id: "scrip-2",
        verse: "오직 사랑 안에서 참된 것을 하여 범사에 그에게까지 자랄지라 그는 머리니 곧 그리스도라",
        reference: "에베소서 4장 15절",
        reflection: "지식이나 말뿐만이 아니라, 진실한 사랑 안에서 매일 조금씩 예수님의 성품을 닮아 자라가길 소망합니다."
      },
      {
        id: "scrip-3",
        verse: "너의 길을 여호와께 맡기라 그를 의지하면 그가 이루시고 네 의를 빛 같이 나타내시며 네 공의를 정오의 빛 같이 하시리로다",
        reference: "시편 37편 5-6절",
        reflection: "조급한 마음이 들 때마다 나의 모든 길과 미래를 주님 손에 맡겨 드리는 평안을 구합니다."
      }
    ]
  }
};
