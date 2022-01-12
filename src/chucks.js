const chucks = [
  'https://pbs.twimg.com/profile_images/685007143385329664/fWD0ymmt_400x400.jpg',
  'https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png',
  'https://pbs.twimg.com/profile_images/652165345134923777/ytr2UJm7_400x400.jpg',
  'https://pbs.twimg.com/profile_images/665950872938106880/xdEhuW7U_400x400.jpg',
  'https://pbs.twimg.com/profile_images/613603473997697024/0VW39DbC_400x400.jpg',
  'https://ontabs.com/uploads/images/8272/nonstop-chuck-norris-256.png',
  'https://myket.ir/app-icon/0e0e3315-c721-4d28-9f2b-e10a05dc0ade_.png',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU_yd-dzc2QxzJYupH43utcZYpEGluhtEJyg&usqp=CAU',
  'https://i.iplsc.com/chuck-norris-zdj-z-1993-roku/0007IXOGTFLR0RV6-C122-F4.jpg',
  'https://bi.im-g.pl/im/92/0f/18/z25228434V,Chuck-Norris--Straznik-Teksasu-.jpg',
  'https://play-lh.googleusercontent.com/i1Fm2xddwtBxlcCpcSvdR53nXOTjhmdsQVcADsAqjPwmG3KNmU1LNgumtEAL4bS853MS=s128-rw',
];

export const getChuck = () => chucks[Math.floor(Math.random() * chucks.length)];
