export default [
  {
    name: 'Aa',
    type: 'Corner Only',
    image: 'Aa.png',
    step: 'PLL',
    algorithm: ["x (R' U R') D2 (R U' R') D2 R2"]
  },
  {
    name: 'Ab',
    type: 'Corner Only',
    image: 'Ab.png',
    step: 'PLL',
    algorithm: ["x R2' D2 (R U R') D2 (R U' R)"]
  },
  {
    name: 'E',
    type: 'Corner Only',
    image: 'E.png',
    step: 'PLL',
    algorithm: ["x (R U' R') D (R U R') D' (R U R') D (R U' R') D'"]
  },
  {
    name: 'F',
    type: 'Edge and Corner',
    image: 'F.png',
    step: 'PLL',
    algorithm: ["R' U' F' (R U R' U') R' F (R2 U' R' U') (R U R' U) R"]
  },
  {
    name: 'Ga',
    type: 'Edge and Corner',
    image: 'Ga.png',
    step: 'PLL',
    algorithm: ["R2 U (R' U R' U') (R U' R2) D U' (R' U R) D'"]
  },
  {
    name: 'Gb',
    type: 'Edge and Corner',
    image: 'Gb.png',
    step: 'PLL',
    algorithm: ["(R U R') U D' (R2 U R' U) (R U' R U') R2 D"]
  },
  {
    name: 'Gc',
    type: 'Edge and Corner',
    image: 'Gc.png',
    step: 'PLL',
    algorithm: ["R2 U' R U' R U R' U R2 D' U R U' R' D"]
  },
  {
    name: 'Gd',
    type: 'Edge and Corner',
    image: 'Gd.png',
    step: 'PLL',
    algorithm: ["D' (R U R') U' D (R2 U' R) (U' R' U R') U R2"]
  },
  {
    name: 'Ja',
    type: 'Edge and Corner',
    image: 'Ja.png',
    step: 'PLL',
    algorithm: ["(R' U L') U2 (R U' R') U2 R r"]
  },
  {
    name: 'Jb',
    type: 'Edge and Corner',
    image: 'Jb.png',
    step: 'PLL',
    algorithm: ["(R U R' F') (R U R' U') R' F R2 U' R'"]
  },
  {
    name: 'Ra',
    type: 'Edge and Corner',
    image: 'Ra.png',
    step: 'PLL',
    algorithm: ["(R U' R' U') (R U R) D (R' U' R) D' (R' U2 R')"]
  },
  {
    name: 'Rb',
    type: 'Edge and Corner',
    image: 'Rb.png',
    step: 'PLL',
    algorithm: ["(R' U2 R') D' (R U' R') D (R U R U') (R' U' R)"]
  },
  {
    name: 'T',
    type: 'Edge and Corner',
    image: 'T.png',
    step: 'PLL',
    algorithm: ["(R U R' U') R' F (R2 U' R' U') (R U R') F'"]
  },
  {
    name: 'Na',
    type: 'Edge and Corner',
    image: 'Na.png',
    step: 'PLL',
    algorithm: ["r' D r U2 r' D r U2 r' D r U2 r' D r U2 r' D r"]
  },
  {
    name: 'Nb',
    type: 'Edge and Corner',
    image: 'Nb.png',
    step: 'PLL',
    algorithm: [
      "(R U R' U) Jb (R' U2 R U' R')",
      "(R U R' U) R U R' F' R U R' U' R' F R2 U' (R' U2 R U' R')"
    ]
  },
  {
    name: 'V',
    type: 'Edge and Corner',
    image: 'V.png',
    step: 'PLL',
    algorithm: []
  },
  {
    name: 'Y',
    type: 'Edge and Corner',
    image: 'Y.png',
    step: 'PLL',
    algorithm: []
  },
  {
    name: 'H',
    type: 'Edge Only',
    image: 'H.png',
    step: 'PLL',
    algorithm: ["M2' U M2' U2 M2' U M2"]
  },
  {
    name: 'Ua',
    type: 'Edge Only',
    image: 'Ua.png',
    step: 'PLL',
    algorithm: ["M2 U M U2 M' U M2"]
  },
  {
    name: 'Ub',
    type: 'Edge Only',
    image: 'Ub.png',
    step: 'PLL',
    algorithm: ["M2 U' M U2 M' U' M2"]
  },
  {
    name: 'Z',
    type: 'Edge Only',
    image: 'Z.png',
    step: 'PLL',
    algorithm: ["M' U (M2' U)2 M' (U2 M2' U')"]
  }
];
