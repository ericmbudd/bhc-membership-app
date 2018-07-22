export const APP_STATE_TABLE = {
  fail: { prev: null, next: 'visit' },
  visit: { prev: null, next: 'references' },
  references: { prev: 'visit', next: 'interview' },
  interview: { prev: 'references', next: 'accepted' },
  accepted: { prev: 'interview', next: null },
}
