export const APP_STATE_TABLE = {
  fail: { prev: null, next: 'visit', component: 'Fail' },
  visit: { prev: null, next: 'references', component: 'Visit' },
  references: { prev: 'visit', next: 'interview', component: 'References' },
  interview: { prev: 'references', next: 'accepted', component: 'Interview' },
  accepted: { prev: 'interview', next: null, component: 'Accepted' },
}
