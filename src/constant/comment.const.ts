export const CommentType = {
  SIMPLE: "간단한 코멘트",
  DETAIL: "자세한 코멘트",
} as const;

export const SeasonCheckboxList = {
  SPRING: "봄",
  SUMMER: "여름",
  FALL: "가을",
  WINTER: "겨울",
  DAY: "낮",
  NIGHT: "밤",
} as const;

export const MoodCheckboxList = {
  CUTE: "귀여운",
  SENSUAL: "관능적인",
  INNOCENT: "청순한",
  ELEGANT: "우아한",
  SEXY: "섹시한",
  SPORTY: "스포티한",
  DIGNIFIED: "중후한",
  MASCULINE: "마초적인",
  CASUAL: "캐쥬얼한",
  COMFORTABLE: "편안한",
  NEAT: "깔끔한",
  SOPHISTICATED: "세련된",
} as const;

export const PersistenceOptions = [
  { value: "1", label: `매우\n약함` },
  { value: "2", label: "약함" },
  { value: "3", label: "보통" },
  { value: "4", label: "오래감" },
  { value: "5", label: `매우\n오래감` },
];

export const ResidualScentOptions = [
  { value: "1", label: `향 여운이\n약함` },
  { value: "2", label: "보통" },
  { value: "3", label: `향 여운이\n강함` },
  { value: "4", label: `향 여운이\n매우 강함` },
];

export const GenderOptions = [
  { value: "1", label: "남성" },
  { value: "2", label: `남성에\n가까운` },
  { value: "3", label: "중성" },
  { value: "4", label: `여성에\n가까운` },
  { value: "5", label: "여성" },
];

// commentPage 자세한 코멘트 선택 리스트
export const FieldDefinitions = {
  rating: {
    label: "이 향수 어때요?",
    name: "rating",
    type: "number",
  },
  textReview: {
    label: "리뷰 한줄평",
    name: "textReview",
    type: "text",
  },
  persistence: {
    label: "지속력",
    name: "persistence",
    type: "radio",
    options: PersistenceOptions,
  },
  residualScent: {
    label: "시야주",
    name: "residualScent",
    type: "radio",
    options: ResidualScentOptions,
  },
  season: {
    label: "계절감/시간",
    name: "season",
    type: "checkbox",
    options: SeasonCheckboxList,
  },
  gender: {
    label: "성별",
    name: "gender",
    type: "radio",
    options: GenderOptions,
  },
  mood: {
    label: "향수에 어울리는 분위기",
    name: "mood",
    type: "checkbox",
    options: MoodCheckboxList,
  },
};
