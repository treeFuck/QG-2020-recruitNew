import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    startD1: 'M -44,-50 C -52.71,28.52 15.86,8.186 184,14.69 383.3,22.39 462.5,12.58 638,14 835.5,15.6 987,6.4 1194,13.86 1661,30.68 1652,-36.74 1582,-140.1 1512,-243.5 15.88,-589.5 -44,-50 Z',
    endD1: 'M -44,-50 C -137.1,117.4 67.86,445.5 236,452 435.3,459.7 500.5,242.6 676,244 873.5,245.6 957,522.4 1154,594 1593,753.7 1793,226.3 1582,-126 1371,-478.3 219.8,-524.2 -44,-50 Z',
    startD2: 'M 73.3,178.6 C 101.7,363.8 76.38,735 118.7,813.8 161,892.7 327.3,946.7 381.1,853.3 434.9,759.9 427.2,488.9 436.8,341.5 443.3,241.3 447.3,33.05 516.1,36.19 574.9,38.88 611.6,214.9 622.3,429.7 633,644.6 614.7,796.1 688.1,849 761.6,901.8 860.7,873.7 897.6,850 982.3,795.5 951.2,639.3 961.1,506.1 970.9,372.9 958.5,43.53 1023,43.47 1063,43.43 1085,173.6 1095,370.7 1105,567.8 1082,804.3 1165,842.6 1197,857.5 1304,901 1342,833 1380,765 1354,413.7 1379,156.2 1407,-137.5 1719,-12.96 1719,-12.96 L -53.5,-44.66 C -53.5,-44.66 44.91,-6.65 73.3,178.6 Z',
    endD2: 'M 105.3,190.6 C 159.7,353.8 143.2,774.2 149.1,779.5 155,784.8 159.4,782 164.8,778.2 170.2,774.4 168.90000000000003,242.8 240.3,125 311.7,7.2050000000000125 430.7,2.3069999999999986 564.2,13.560000000000002 707.9,25.67 806,166.3 800.5,376 804.7,587.3 801.2,773.9 807.1,782.7 813,791.4 816.8,792.7 821.4,786 826.4,778.8 819.4,566.3 820.3,498.1 821.2,429.9 781.4,95.51 992.5,74.58 1108,63.14 1235,166.4 1250,359.4 1265,552.4 1248,763.7 1271,781.4 1277,786 1281,786.2 1286,779.7 1292,773.2 1260,251.3 1355,103.9 1441,-30.349999999999994 1610,-117.6 1610,-117.6 L -110.1,-132.3 C -110.1,-132.3 50.91,27.35 105.3,190.6 Z',
    startD3: 'M -65.11,-1.008 C -38.79,8.492 -48.8,43.89 -24.09,59.91 -17.38,64.25 -7.411,68.1 2.397,67.74 19.94,67.09 30.89,61.16 46.62,50.39 64.99,37.82 92.16,36.57 112.8,41.49 141.9,48.44 153.5,80.16 178.5,78.34 194.6,77.17 205.3,67.96 216.8,48.87 224.6,35.89 230.6,20.21 251.4,19.41 278.8,18.35 288.2,28.98 298.5,67.48 303.6,86.48 308.2,97.24 316.3,102.6 329.4,111.3 340.7,106 350.5,100.2 377.5,84.13 369.6,23.41 401.2,20.7 415.9,19.43 431.7,33.86 449.9,57.07 462.7,73.41 475.5,91.96 494.9,96.72 503.8,98.9 513,97.38 521.6,90.13 532.1,81.21 532.2,62.36 551.7,62.17 565.7,62.03 569.6,72.01 575.9,89 580.5,101.3 598.1,139.1 628.6,117.5 649.1,103 641.6,81.95 658,80.67 674.4,79.39 692.2,136.3 720.8,141.4 738.9,144.6 763.5,132 771.2,119.3 782.1,101.2 783.6,81.7 799.1,81.97 829.3,82.49 818.2,122.8 838.2,143.8 858.1,164.8 875.7,158.9 886.4,155.8 910.4,149 913.1,122.8 939.2,119.6 953.9,117.9 964.8,130.2 979.7,131.6 997.3,133.3 1016,132.6 1027,121 1038,109.3 1038,80.15 1054,79.92 1071,79.67 1073,89.94 1079,106.8 1084,119.5 1089,133.9 1101,141.1 1111,147.3 1124,146.3 1136,145 1150,143.4 1160,132.7 1177,130.8 1194,128.8 1219,128.2 1236,138.8 1257,151.6 1271,147.7 1280,137.3 1291,124.1 1294,92.34 1316,90.47 1344,88.04 1348,163.9 1380,183.1 1401,195.1 1428,196.6 1451,190.6 1478,183.7 1503,161.8 1518,143 1544,109.1 1550,43.89 1551,32.49 1568,-303.4 -510,-224.1 -65.11,-1.008 Z',
    endD3: 'M -35.73,45.41 C -9.411999999999999,61.010000000000005 -30.93,379.4 -17.31,545.8 -12.26,607.5 -54.94,740.4 6.142,730.1 63.67,720.4 26.97,284.9 27.01,202.3 27.060000000000002,104.29999999999998 51.66,29.07 106,54.36 160.3,79.65 103.7,491.69999999999993 187.7,465.70000000000005 231.9,452 156.6,99.89 249.4,94.08 285.7,91.81 299.9,127.5 305,190.9 316,327.7 328.6,462.6 321.1,598.3 315.8,695.4 294.5,776.7 353.9,773.6 415.6,770.4 379.8,650.7 368.7,588.8 337.4,415 369.6,190.1 391.1,111 412.5,31.92 457,96.83 463.3,127.19999999999999 480.9,212.1 493.9,307.8 489,396.1 487.4,425.69999999999993 482.1,460.1 517.1,455.2 548.5,450.7 476.2,166 550.9,168.9 594.8,170.6 591.6,626.8 586.3,663.5 578.4,717.8 609.1,742.4 633.9,700.6 651.9,670.2 578.3,209.7 650.8,194.1 723.2,178.5 700.8,277.9 687.6,401.1 680.2,470 766.1,486.3 756,414.3 750.3,373.5 703.1,145.6 793.4,146.1 939.9,146.8 846.2,556.8 844,601.8 841.9,646.8 878.6,682.8 903.3,630.6 928,578.4 863.2,264.8 891.7,178.8 920.2,92.81 997.3,215.6 972,292.8 946.6,370 1030,353.1 999,295.7 985.9,271.6 977.1,119.1 1048,117.8 1119,116.5 1127,634.6000000000001 1123,682.6 1119,730.6 1110,749.8 1118,771.3 1134,815.5 1173,803.5 1164,734 1155,664.5 1139,665.8 1143,418.4 1148,170.9 1225,122 1240,215 1249,273 1202,413 1282,391.7 1324,380.70000000000005 1280,165.5 1316,159.6 1362,152 1296,358.2 1379,361.2 1462,364.2 1312,753 1444,751.2 1592,749.2 1484,458.5 1505,312.2 1518,221.3 1544,58.44 1545,39.57 1562,-514.4 -480.6,-322.6 -35.73,45.41 Z',
    startD4: 'M -30.45,-43.86 -30.45,0 53.8,0 53.8,0 179.5,0 179.5,0 193.3,0 193.3,0 253.1,0 253.1,0 276.1,0 276.1,0 320.6,0 320.6,0 406.5,0 406.5,0 435.6,0 435.6,0 477,0 477,0 527.6,0 527.6,0 553.7,0 553.7,0 592,0 592,0 742.3,0 742.3,0 762.2,0 762.2,0 776,0 776,0 791.3,0 791.3,0 852.7,0 852.7,0 871.1,0 871.1,0 878.7,0 878.7,0 891,0 891,0 923.2,0 923.2,0 940.1,0 940.1,0 976.9,0 976.9,0 1031,0 1031,0 1041,0 1041,0 1176,0 1176,0 1192,0 1192,0 1210,0 1210,0 1225,0 1225,0 1236,0 1236,0 1248,0 1248,0 1273,0 1273,0 1291,0 1291,0 1316,0 1316,0 1337,0 1337,0 1356,0 1356,0 1414,0 1414,0 1432,0 1432,0 1486,0 1486,-43.86 Z',
    endD4: 'M -30.45,-57.86 -30.45,442.6 53.8,443.8 53.8,396.3 179.5,396.3 179.5,654.7 193.3,654.7 193.3,589.1 253.1,589.1 253.1,561.6 276.1,561.6 276.1,531.2 320.6,531.2 320.6,238.6 406.5,238.6 406.5,213.9 435.6,213.9 435.6,246.2 477,246.2 477,289.9 527.6,289.9 527.6,263.3 553.7,263.3 553.7,280.4 592,280.4 592,189.2 742.3,189.2 742.3,259.5 762.2,259.5 762.2,103.7 776,103.7 776,77.11 791.3,77.11 791.3,18.21 852.7,18.21 852.7,86.61 871.1,86.61 871.1,231 878.7,240.5 878.7,320.3 891,320.3 891,434.3 923.2,434.3 923.2,145.5 940.1,145.5 940.1,117 976.9,117 976.9,139.8 1031,139.8 1031,284.2 1041,284.2 1041,242.4 1176,242.4 1176,282.3 1192,282.3 1192,641.4 1210,641.4 1210,692.7 1225,692.7 1225,599.6 1236,599.6 1236,527.4 1248,527.4 1248,500.8 1273,500.8 1273,523.6 1291,523.6 1291,652.8 1316,652.8 1316,533.1 1337,533.1 1337,502.7 1356,502.7 1356,523.6 1414,523.6 1414,491.3 1432,491.3 1432,523.6 1486,523.6 1486,-57.86 Z',
    playD: "M332 2787 c-18 -12 -41 -37 -52 -55 -20 -32 -20 -56 -20 -1233 0 -1181 0 -1200 20 -1239 43 -85 136 -113 215 -65 22 14 47 28 55 32 8 4 80 46 160 93 80 47 152 89 160 93 8 4 29 16 45 27 17 11 39 24 50 30 11 6 34 19 50 30 17 11 39 24 50 30 11 5 27 14 35 20 8 5 96 57 195 115 99 58 187 110 195 115 8 6 24 15 35 20 11 6 34 19 50 30 17 11 39 24 50 30 11 6 34 19 50 30 17 11 37 23 45 27 8 4 80 46 160 93 80 47 152 89 160 93 8 4 29 16 45 27 17 11 39 24 50 30 11 6 34 19 50 30 17 11 39 24 50 30 11 5 27 14 35 20 8 5 96 57 195 115 99 58 187 110 195 115 8 6 25 14 37 20 12 5 36 28 53 51 59 82 32 164 -78 237 -32 21 -64 41 -72 45 -8 4 -28 16 -45 27 -16 11 -39 24 -50 30 -11 6 -32 18 -47 28 -15 9 -70 44 -123 77 -53 33 -109 68 -123 77 -15 10 -36 22 -47 28 -11 6 -33 19 -50 30 -16 11 -39 24 -50 30 -11 6 -32 18 -47 28 -15 9 -81 51 -148 92 -67 41 -133 83 -148 92 -15 10 -36 22 -47 28 -11 6 -33 19 -50 30 -16 10 -40 25 -52 32 -12 7 -83 50 -156 96 -115 70 -141 82 -178 82 -49 0 -85 -20 -121 -65 -31 -40 -31 -130 1 -171 19 -24 92 -78 132 -97 8 -4 28 -16 44 -27 17 -11 39 -24 50 -30 11 -6 34 -19 50 -30 17 -11 39 -24 50 -30 11 -6 32 -18 47 -28 14 -9 70 -44 123 -77 53 -33 108 -68 123 -77 15 -10 36 -22 47 -28 11 -6 34 -19 50 -30 17 -10 40 -25 52 -32 25 -14 249 -153 291 -180 45 -28 76 -46 97 -56 11 -5 28 -19 38 -30 18 -20 18 -21 -15 -38 -18 -10 -42 -24 -53 -31 -11 -7 -29 -17 -40 -23 -11 -6 -33 -19 -50 -30 -16 -11 -37 -23 -45 -27 -16 -8 -355 -207 -380 -223 -8 -6 -24 -15 -35 -20 -11 -6 -33 -19 -50 -30 -16 -11 -39 -24 -50 -30 -11 -6 -33 -19 -50 -30 -16 -11 -37 -23 -45 -27 -17 -8 -307 -178 -330 -193 -8 -6 -24 -15 -35 -20 -11 -6 -33 -19 -50 -30 -16 -11 -39 -24 -50 -30 -11 -6 -33 -19 -50 -30 -16 -11 -37 -23 -45 -27 -8 -4 -93 -53 -188 -110 -96 -57 -178 -101 -183 -97 -5 3 -9 437 -9 1055 l0 1049 -22 33 c-49 75 -139 99 -206 54z",
    browserName: '',
    equipment: ''
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
