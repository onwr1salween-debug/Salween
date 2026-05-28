// ข้อมูลระดับอำเภอ จ.ตาก (อุทกภัย)
const FLOOD_TAK = [
  {"amp":"แม่สอด","province":"ตาก","flood":111,"samsak4":41,"drought":111},
  {"amp":"ท่าสองยาง","province":"ตาก","flood":67,"samsak4":67,"drought":67},
  {"amp":"พบพระ","province":"ตาก","flood":55,"samsak4":4,"drought":55},
  {"amp":"แม่ระมาด","province":"ตาก","flood":39,"samsak4":12,"drought":39},
  {"amp":"เมืองตาก","province":"ตาก","flood":5,"samsak4":0,"drought":5}
];

// ข้อมูลระดับอำเภอ จ.แม่ฮ่องสอน (อุทกภัย)
const FLOOD_MS = [
  {"amp":"แม่สะเรียง","province":"แม่ฮ่องสอน","flood":77,"flood2568":72,"samsak4":30},
  {"amp":"เมืองแม่ฮ่องสอน","province":"แม่ฮ่องสอน","flood":75,"flood2568":49,"samsak4":30},
  {"amp":"แม่ลาน้อย","province":"แม่ฮ่องสอน","flood":69,"flood2568":35,"samsak4":21},
  {"amp":"ปาย","province":"แม่ฮ่องสอน","flood":63,"flood2568":24,"samsak4":21},
  {"amp":"สบเมย","province":"แม่ฮ่องสอน","flood":58,"flood2568":39,"samsak4":18},
  {"amp":"ขุนยวม","province":"แม่ฮ่องสอน","flood":43,"flood2568":37,"samsak4":0},
  {"amp":"ปางมะผ้า","province":"แม่ฮ่องสอน","flood":39,"flood2568":13,"samsak4":6}
];

// ข้อมูลระดับอำเภอ จ.ตาก (ภัยแล้ง)
const DROUGHT_TAK = [
  {"amp":"แม่สอด","drought":111,"samsak3":4},
  {"amp":"ท่าสองยาง","drought":67,"samsak3":1},
  {"amp":"พบพระ","drought":55,"samsak3":0},
  {"amp":"แม่ระมาด","drought":39,"samsak3":8},
  {"amp":"เมืองตาก","drought":5,"samsak3":0}
];

// ข้อมูลระดับอำเภอ จ.แม่ฮ่องสอน (ภัยแล้ง)
const DROUGHT_MS = [
  {"amp":"แม่สะเรียง","drought":194,"samsak_any":15},
  {"amp":"แม่ลาน้อย","drought":133,"samsak_any":41},
  {"amp":"สบเมย","drought":132,"samsak_any":13},
  {"amp":"เมืองแม่ฮ่องสอน","drought":126,"samsak_any":35},
  {"amp":"ปาย","drought":80,"samsak_any":35},
  {"amp":"ขุนยวม","drought":75,"samsak_any":17},
  {"amp":"ปางมะผ้า","drought":58,"samsak_any":5}
];

// ข้อมูลกราฟเทรนด์อื่นๆ
const TREND = {
  "drought_tak_by_year": [
    {"year":"ปี 65","high":106,"mid":0,"low":0},
    {"year":"ปี 66","high":48,"mid":0,"low":0},
    {"year":"ปี 67","high":7,"mid":96,"low":149},
    {"year":"ปี 68","high":28,"mid":50,"low":197},
    {"year":"ปี 69","high":49,"mid":40,"low":188}
  ],
  "flood_tak_samsak": [
    {"y":"0 ปี","c":25},{"y":"1 ปี","c":32},{"y":"2 ปี","c":49},{"y":"3 ปี","c":47},{"y":"4 ปี","c":124}
  ],
  "flood_ms_samsak": [
    {"y":"0 ปี","c":11},{"y":"1 ปี","c":57},{"y":"2 ปี","c":118},{"y":"3 ปี","c":112},{"y":"4 ปี","c":81},{"y":"5 ปี","c":45}
  ]
};

const AMPS_TAK = ['ท่าสองยาง','พบพระ','เมืองตาก','แม่ระมาด','แม่สอด'];
const AMPS_MS = ['ขุนยวม','ปางมะผ้า','ปาย','สบเมย','เมืองแม่ฮ่องสอน','แม่ลาน้อย','แม่สะเรียง'];