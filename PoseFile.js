var Pose = {};

Pose["BASE"] = {
name: "BASE",
parts: [{"drawOrder":0,"drawFromLast":{"part":null,"site":null},"name":"torso","startPoint":[3,1],"midPoints":[[3,2]],"endPoint":[3,3],"tension":0},
{"drawOrder":1,"drawFromLast":{"part":"torso","site":"start"},"name":"neck","startPoint":[3,1],"midPoints":[[3,0.85]],"endPoint":[3,0.7],"tension":0},
{"drawOrder":2,"drawFromLast":{"part":"neck","site":"end"},"name":"head","startPoint":[3,0.7],"midPoints":[[3,0.35]],"endPoint":[3,0],"tension":0},
{"drawOrder":3,"drawFromLast":{"part":"torso","site":"start"},"name":"left_arm","startPoint":[3,1],"midPoints":[[4,1]],"endPoint":[5,1],"tension":0},
{"drawOrder":4,"drawFromLast":{"part":"torso","site":"start"},"name":"right_arm","startPoint":[3,1],"midPoints":[[2,1]],"endPoint":[1,1],"tension":0},
{"drawOrder":5,"drawFromLast":{"part":"left_arm","site":"end"},"name":"left_hand","startPoint":[5,1],"midPoints":[[5.25,1]],"endPoint":[5.5,1],"tension":0},
{"drawOrder":6,"drawFromLast":{"part":"right_arm","site":"end"},"name":"right_hand","startPoint":[1,1],"midPoints":[[0.75,1]],"endPoint":[0.5,1],"tension":0},
{"drawOrder":7,"drawFromLast":{"part":"torso","site":"end"},"name":"left_leg","startPoint":[3,3],"midPoints":[[4,4]],"endPoint":[5,5],"tension":0},
{"drawOrder":8,"drawFromLast":{"part":"torso","site":"end"},"name":"right_leg","startPoint":[3,3],"midPoints":[[2,4]],"endPoint":[1,5],"tension":0},
{"drawOrder":9,"drawFromLast":{"part":"left_leg","site":"end"},"name":"left_foot","startPoint":[5,5],"midPoints":[[5.25,5]],"endPoint":[5.5,5],"tension":0},
{"drawOrder":10,"drawFromLast":{"part":"right_leg","site":"end"},"name":"right_foot","startPoint":[1,5],"midPoints":[[0.75,5]],"endPoint":[0.5,5],"tension":0}]};

Pose["TEST"] = {
name: "TEST",
parts: [{"drawOrder":0,"drawFromLast":{"part":null,"site":null},"name":"torso","startPoint":[3,1],"midPoints":[[2.36,2]],"endPoint":[3,3],"tension":0},
{"drawOrder":1,"drawFromLast":{"part":"torso","site":"start"},"name":"neck","startPoint":[3,1],"midPoints":[[3,0.85]],"endPoint":[3,0.7],"tension":0},
{"drawOrder":2,"drawFromLast":{"part":"neck","site":"end"},"name":"head","startPoint":[3,0.7],"midPoints":[[2.56,0.35]],"endPoint":[3.12,0.08],"tension":0},
{"drawOrder":3,"drawFromLast":{"part":"torso","site":"start"},"name":"left_arm","startPoint":[3,1],"midPoints":[[3.9466666666666668,0.6533333333333333]],"endPoint":[5,1],"tension":0},
{"drawOrder":4,"drawFromLast":{"part":"torso","site":"start"},"name":"right_arm","startPoint":[3,1],"midPoints":[[2,1.36]],"endPoint":[1,1],"tension":0},
{"drawOrder":5,"drawFromLast":{"part":"left_arm","site":"end"},"name":"left_hand","startPoint":[5,1],"midPoints":[[5.25,1]],"endPoint":[5.5,1],"tension":0},
{"drawOrder":6,"drawFromLast":{"part":"right_arm","site":"end"},"name":"right_hand","startPoint":[1,1],"midPoints":[[0.75,1]],"endPoint":[0.66,0.7333333333333333],"tension":0},
{"drawOrder":7,"drawFromLast":{"part":"torso","site":"end"},"name":"left_leg","startPoint":[3,3],"midPoints":[[4.493333333333333,3.546666666666667]],"endPoint":[5,5],"tension":0},
{"drawOrder":8,"drawFromLast":{"part":"torso","site":"end"},"name":"right_leg","startPoint":[3,3],"midPoints":[[2.9466666666666668,4.466666666666667]],"endPoint":[1,5],"tension":0},
{"drawOrder":9,"drawFromLast":{"part":"left_leg","site":"end"},"name":"left_foot","startPoint":[5,5],"midPoints":[[5.25,5]],"endPoint":[5.5,5],"tension":0},
{"drawOrder":10,"drawFromLast":{"part":"right_leg","site":"end"},"name":"right_foot","startPoint":[1,5],"midPoints":[[0.75,5]],"endPoint":[0.5,5],"tension":0}]};

Pose["RICHARD_1"] = {
name: "RICHARD_1",
parts: [{"drawOrder":0,"drawFromLast":{"part":null,"site":null},"name":"torso","startPoint":[3,1],"midPoints":[[3,2]],"endPoint":[2.7333333333333334,3.026666666666667],"tension":0.2},
{"drawOrder":1,"drawFromLast":{"part":"torso","site":"start"},"name":"neck","startPoint":[3,1],"midPoints":[[3,0.85]],"endPoint":[3.013333333333333,0.8066666666666666],"tension":0},
{"drawOrder":2,"drawFromLast":{"part":"neck","site":"end"},"name":"head","startPoint":[3.013333333333333,0.8066666666666666],"midPoints":[[2.72,0.5388888888888888],[2.8666666666666667,-0.288888888888889],[3.013333333333333,-0.47666666666666674],[3.4266666666666667,-0.2777777777777779],[3.4266666666666667,0.4944444444444442]],"endPoint":[3.04,0.8],"numMidPoints":5,"tension":0.4},
{"drawOrder":3,"drawFromLast":{"part":"torso","site":"start"},"name":"left_arm","startPoint":[3,1],"midPoints":[[3.8133333333333335,2.2]],"endPoint":[3.066666666666667,3.5733333333333333],"tension":0},
{"drawOrder":4,"drawFromLast":{"part":"torso","site":"start"},"name":"right_arm","startPoint":[3,1],"midPoints":[[2.4,1.6044444444444441],[1.68,2.2355555555555555]],"endPoint":[2.48,3.3333333333333335],"numMidPoints":2,"tension":0.2},
{"drawOrder":5,"drawFromLast":{"part":"left_arm","site":"end"},"name":"left_hand","startPoint":[3.066666666666667,3.5733333333333333],"midPoints":[[3.3480000000000003,3.5813333333333337],[3.6560000000000006,3.6559999999999997],[3.630666666666667,3.9173333333333336],[3.272,3.885333333333333]],"endPoint":[3.0733333333333333,3.626666666666666],"numMidPoints":4,"tension":0.4},
{"drawOrder":6,"drawFromLast":{"part":"right_arm","site":"end"},"name":"right_hand","startPoint":[2.48,3.3333333333333335],"midPoints":[[2.006666666666667,3.3520000000000003],[1.8266666666666667,3.490666666666667],[1.9533333333333334,3.6426666666666665],[2.2133333333333334,3.6213333333333337]],"endPoint":[2.46,3.48],"numMidPoints":4,"tension":0.6},
{"drawOrder":7,"drawFromLast":{"part":"torso","site":"end"},"name":"left_leg","startPoint":[2.7333333333333334,3.026666666666667],"midPoints":[[3,3.9466666666666668],[3.0533333333333332,4.666666666666667],[3.1333333333333333,5.413333333333333]],"endPoint":[2.973333333333333,6.1866666666666665],"numMidPoints":3,"tension":0.4},
{"drawOrder":8,"drawFromLast":{"part":"torso","site":"end"},"name":"right_leg","startPoint":[2.7333333333333334,3.026666666666667],"midPoints":[[2.1866666666666665,4.466666666666667]],"endPoint":[2.28,6.1066666666666665],"tension":0},
{"drawOrder":9,"drawFromLast":{"part":"left_leg","site":"end"},"name":"left_foot","startPoint":[2.973333333333333,6.1866666666666665],"midPoints":[[3.3277777777777775,6.137777777777777],[3.762222222222222,6.142222222222223],[3.9833333333333325,6.386666666666667],[3.6444444444444444,6.564444444444444],[2.878888888888888,6.435555555555555]],"endPoint":[2.98,6.2],"numMidPoints":5,"tension":0.4},
{"drawOrder":10,"drawFromLast":{"part":"right_leg","site":"end"},"name":"right_foot","startPoint":[2.28,6.1066666666666665],"midPoints":[[1.9699999999999998,6.115555555555556],[1.553333333333333,6.2044444444444435],[1.4699999999999995,6.453333333333333],[1.9066666666666667,6.5422222222222235],[2.5566666666666666,6.364444444444445]],"endPoint":[2.433333333333333,6.12],"numMidPoints":5,"tension":0.4}]};

Pose["RICHARD_2"] = {
name: "RICHARD_2",
parts: [{"drawOrder":0,"drawFromLast":{"part":null,"site":null},"name":"torso","startPoint":[3,1],"midPoints":[[3.16,1.34],[3.1466666666666665,1.8933333333333333],[2.7866666666666666,3.2333333333333334]],"endPoint":[2.6,3.4266666666666667],"numMidPoints":3,"tension":0.4},
{"drawOrder":1,"drawFromLast":{"part":"torso","site":"start"},"name":"neck","startPoint":[3,1],"midPoints":[[2.933333333333333,0.8366666666666667]],"endPoint":[2.88,0.6733333333333333],"tension":0},
{"drawOrder":2,"drawFromLast":{"part":"neck","site":"end"},"name":"head","startPoint":[2.88,0.6733333333333333],"midPoints":[[2.38,0.5122222222222221],[2.0533333333333332,-0.03555555555555543],[2.22,-0.5299999999999999],[2.7866666666666666,-0.4377777777777777],[3.0733333333333333,0.24111111111111125]],"endPoint":[2.8666666666666667,0.68],"numMidPoints":5,"tension":0.4},
{"drawOrder":3,"drawFromLast":{"part":"torso","site":"start"},"name":"left_arm","startPoint":[3,1],"midPoints":[[3.84,1.0666666666666667],[4.466666666666667,0.9466666666666667],[4.32,0.8666666666666667],[4.08,0.06666666666666667]],"endPoint":[3.96,-0.2],"numMidPoints":4,"tension":0.2},
{"drawOrder":4,"drawFromLast":{"part":"torso","site":"start"},"name":"right_arm","startPoint":[3,1],"midPoints":[[3.12,1.1733333333333333],[2.453333333333333,1.16],[1.4933333333333334,0.92],[1.3066666666666666,0.92],[0.5466666666666666,-0.02666666666666667]],"endPoint":[0.32,-0.29333333333333333],"numMidPoints":5,"tension":0.2},
{"drawOrder":5,"drawFromLast":{"part":"left_arm","site":"end"},"name":"left_hand","startPoint":[3.96,-0.2],"midPoints":[[3.694666666666667,-0.3280000000000001],[3.789333333333333,-0.6026666666666668],[4.204,-0.5573333333333333],[4.2586666666666675,-0.2853333333333333]],"endPoint":[4.006666666666667,-0.21333333333333335],"numMidPoints":4,"tension":0.4},
{"drawOrder":6,"drawFromLast":{"part":"right_arm","site":"end"},"name":"right_hand","startPoint":[0.32,-0.29333333333333333],"midPoints":[[-0.09833333333333333,-0.18],[-0.14333333333333334,-0.52],[0.225,-0.5933333333333334]],"endPoint":[0.35333333333333333,-0.30666666666666664],"numMidPoints":3,"tension":0.4},
{"drawOrder":7,"drawFromLast":{"part":"torso","site":"end"},"name":"left_leg","startPoint":[2.6,3.4266666666666667],"midPoints":[[4.76,2.5866666666666664]],"endPoint":[4.506666666666668,3.96],"tension":0},
{"drawOrder":8,"drawFromLast":{"part":"torso","site":"end"},"name":"right_leg","startPoint":[2.6,3.4266666666666667],"midPoints":[[4.426666666666668,3.1066666666666665]],"endPoint":[3.466666666666667,4.986666666666666],"tension":0},
{"drawOrder":9,"drawFromLast":{"part":"left_leg","site":"end"},"name":"left_foot","startPoint":[4.506666666666668,3.96],"midPoints":[[4.976666666666667,3.64],[5.3933333333333335,3.6],[5.236666666666668,3.9333333333333327],[4.786666666666667,4.253333333333333],[4.376666666666666,4.213333333333333]],"endPoint":[4.5,3.933333333333333],"numMidPoints":5,"tension":0.4},
{"drawOrder":10,"drawFromLast":{"part":"right_leg","site":"end"},"name":"right_foot","startPoint":[3.466666666666667,4.986666666666666],"midPoints":[[3.9677777777777776,4.682222222222221],[4.322222222222222,4.737777777777778],[3.93,5.153333333333334],[3.4844444444444442,5.435555555555556],[3.1855555555555557,5.304444444444445]],"endPoint":[3.3533333333333335,5.026666666666666],"numMidPoints":5,"tension":0.4}]};
