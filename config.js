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
  SHEET_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSHjqLhfHnbzQ5R3ZakS-viAWqTx5ACd1j9ivZ9XSswZG2Y2IU25Yy9viuDV3chJERQqA8c6up4YquS/pub?gid=0&single=true&output=csv",

  // Column order must match your sheet exactly (0-indexed)
COLUMNS: {
    ACTIVE:          "Active",
    TOURNAMENT:      "Tournament",
    LOCATION:        "Location",
    TIME_LIMIT:      "Time Limit",
    INNINGS:         "Innings",
    MERCY_RULE:      "Mercy Rule",
    PITCHING_LIMITS: "Pitching Limits",
    BALKS:           "Balks",
    COURTESY_RUNNER: "Courtesy Runner",
    EXTRA_INNING:    "Extra Innings",
    TIE_BREAKER:     "Tie Breakers",
    RULES_URL:       "Rules URL",
    NOTES:           "Notes",
    SORT_ORDER:      "Sort Order",
    START_DATE:      "Start Date",
    END_DATE:        "End Date",
    DROPPED_THIRD:   "Dropped Third Strike",
    STEALING:        "Stealing Rules",
    FIELD_TYPE:      "Field Type",
    SUBSTITUTION:    "Substitution Rules",
  }
};
