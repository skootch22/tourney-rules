// =============================================
//  TOURNAMENT RULES - CONFIGURATION FILE
//  Update SHEET_URL to point to your published
//  Google Sheet (File > Share > Publish to web,
//  choose CSV format for the correct sheet tab).
// =============================================

const CONFIG = {
  // Publish your Google Sheet as CSV:
  //   File → Share → Publish to web → Sheet1 → CSV → Publish
  // Then paste that URL below.
  SHEET_URL: "https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/pub?gid=0&single=true&output=csv",

  // Column order must match your sheet exactly (0-indexed)
  COLUMNS: {
    ACTIVE:          0,
    TOURNAMENT:      1,
    LOCATION:        2,
    TIME_LIMIT:      3,
    INNINGS:         4,
    MERCY_RULE:      5,
    PITCHING_LIMITS: 6,
    BALKS:           7,
    COURTESY_RUNNER: 8,
    EXTRA_INNING:    9,
    TIE_BREAKER:     10,
    RULES_URL:       11,
  }
};
