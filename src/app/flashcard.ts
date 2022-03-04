export class Flashcard {
  char: string;
  translation: string;

  constructor(char: string, translation: string) {
    this.char = char;
    this.translation = translation;
  }

  get dakutenRomaji(): string {
    let rom = this.translation;
    if (rom === 'shi') {
      return 'ji';
    } else if (rom === 'tsu') {
      return 'dzu';
    } else if (rom === 'fu') {
      return 'bu';
    } else if (rom.startsWith('k')) {
      return rom.replace('k', 'g');
    } else if (rom.startsWith('s')) {
      return rom.replace('s', 'z');
    } else if (rom.startsWith('t')) {
      return rom.replace('t', 'd');
    } else if (rom.startsWith('h')) {
      return rom.replace('h', 'b');
    } else {
      return rom;
    }
  }

  get handakutenRomaji(): string {
    let rom = this.translation;
    if (rom === 'fu') {
      return 'pu';
    } else if (rom.startsWith('h')) {
      return rom.replace('h', 'p');
    } else {
      return rom;
    }
  }

  get dakutenCard(): Flashcard {
    if (KANA_CHARACTERS.dakuten.indexOf(this.translation) > -1) {
      return this;
    }

    let dakutenRomaji = this.dakutenRomaji;
    let dakutenKana = `${this.char}\u3099`;
    return new Flashcard(dakutenKana, dakutenRomaji);
  }

  get handakutenCard(): Flashcard {
    if (KANA_CHARACTERS.handakuten.indexOf(this.translation) > -1) {
      return this;
    }

    let handakutenRomaji = this.handakutenRomaji;
    let handakutenKana = `${this.char}\u3099`;
    return new Flashcard(handakutenKana, handakutenRomaji);
  }

  toString(): string {
    return `(${this.translation}, ${this.char})`;
  }
}

export const KANA_CHARACTERS: any = {
  hiragana: {
    a: '\u3042',
    i: '\u3044',
    u: '\u3046',
    e: '\u3048',
    o: '\u304A',
    ka: '\u304B',
    ki: '\u304D',
    ku: '\u304F',
    ke: '\u3051',
    ko: '\u3053',
    sa: '\u3055',
    shi: '\u3057',
    su: '\u3059',
    se: '\u305B',
    so: '\u305D',
    ta: '\u305F',
    chi: '\u3061',
    tsu: '\u3064',
    te: '\u3066',
    to: '\u3068',
    na: '\u306A',
    ni: '\u306B',
    nu: '\u306C',
    ne: '\u306D',
    no: '\u306E',
    ha: '\u306F',
    hi: '\u3072',
    fu: '\u3075',
    he: '\u3078',
    ho: '\u307B',
    ma: '\u307E',
    mi: '\u307F',
    mu: '\u3080',
    me: '\u3081',
    mo: '\u3082',
    ya: '\u3084',
    yu: '\u3086',
    yo: '\u3088',
    ra: '\u3089',
    ri: '\u308A',
    ru: '\u308B',
    re: '\u308C',
    ro: '\u308D',
    wa: '\u308F',
    wo: '\u3092',
    n: '\u3093',
  },
  katakana: {
    a: '\u30A2',
    i: '\u30A4',
    u: '\u30A6',
    e: '\u30A8',
    o: '\u30AA',
    ka: '\u30AB',
    ki: '\u30AD',
    ku: '\u30AF',
    ke: '\u30B1',
    ko: '\u30B3',
    sa: '\u30B5',
    shi: '\u30B7',
    su: '\u30B9',
    se: '\u30BB',
    so: '\u30BD',
    ta: '\u30BF',
    chi: '\u30C1',
    tsu: '\u30C4',
    te: '\u30C6',
    to: '\u30C8',
    na: '\u30CA',
    ni: '\u30CB',
    nu: '\u30CC',
    ne: '\u30CD',
    no: '\u30CE',
    ha: '\u30CF',
    hi: '\u30D2',
    fu: '\u30D5',
    he: '\u30D8',
    ho: '\u30DB',
    ma: '\u30DE',
    mi: '\u30DF',
    mu: '\u30E0',
    me: '\u30E1',
    mo: '\u30E2',
    ya: '\u30E4',
    yu: '\u30E6',
    yo: '\u30E8',
    ra: '\u30E9',
    ri: '\u30EA',
    ru: '\u30EB',
    re: '\u30EC',
    ro: '\u30ED',
    wa: '\u30EF',
    wo: '\u30F2',
    n: '\u30F3',
  },
  kanji_numbers: {
    ichi: '\u4E00',
    ni: '\u4E8C',
    san: '\u4E09',
    yon: '\u56DB',
    go: '\u4E94',
    roku: '\u516D',
    nana: '\u4E03',
    hachi: '\u516B',
    kuu: '\u4E5D',
    juu: '\u5341',
    hyaku: '\u767E',
    sen: '\u5343',
    man: '\u4E07',
    oku: '\u5104',
  },
  dakuten: [
    'ka',
    'ki',
    'ku',
    'ke',
    'ko',
    'sa',
    'shi',
    'su',
    'se',
    'so',
    'ta',
    'chi',
    'tsu',
    'te',
    'to',
    'ha',
    'hi',
    'fu',
    'he',
    'ho',
  ],
  handakuten: ['ha', 'hi', 'fu', 'he', 'ho'],
};
