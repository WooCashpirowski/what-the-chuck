const gradients = [
  'linear-gradient(315deg, #130f40 0%, #000000 74%);',
  'linear-gradient(315deg, #2b4162 0%, #12100e 74%);',
  'linear-gradient(315deg, #182b3a 0%, #20a4f3 74%);',
  'linear-gradient(315deg, #485461 0%, #28313b 74%);',
  'linear-gradient(315deg, #000000 0%, #414141 74%);',
  'linear-gradient(147deg, #923cb5 0%, #000000 74%);',
  'linear-gradient(to right, #0f0c29, #302b63, #24243e);',
  'linear-gradient(to right, #141e30, #243b55);',
  'linear-gradient(147deg, #000000 0%, #04619f 74%)',
];

export const getGradient = () =>
  gradients[Math.floor(Math.random() * gradients.length)];
