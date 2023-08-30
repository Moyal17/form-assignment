
export const validationsArray = [
  {
    label: 'Valid characters: A-Z, a-z, 0-9, -',
    pattern: '^[A-Za-z0-9-]*$',
  },
  {
    label: 'Must start with A-Z',
    pattern: '^[A-Z]',
  },
  {
    label: 'Max length: 8',
    pattern: '^(?=.{0,8}$).*',
  },
];

export const validationsFunctionName = [
  {
    label: 'Valid characters: a–z, 0–9, –',
    pattern: '^[a-z0-9-]*$',
  },
  {
    label: 'Must begin and end with: a–z, 0–9',
    pattern: '^[a-z0-9].*[a-z0-9]$',
  },
  {
    label: 'Max length: 54',
    pattern: '^.{0,54}$',
  },
];

export const validationsServiceName = [
  {
    label: 'Valid characters: a–z, 0–9, –',
    pattern: '^[a-z0-9-]*$',
  },
  {
    label: 'Must begin: a–z',
    pattern: '^[a-z0-9].*$',
  },
  {
    label: 'Must end with: a–z, 0–9',
    pattern: '.*[a-z0-9]$',
  },
  {
    label: 'Max length: 53',
    pattern: '^.{0,53}$',
  },
];