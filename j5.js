am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var data = [
        {
          "Date": "1/1/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 550,
          "Total": 33000
        },
        {
          "Date": "1/1/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 17,
          "Total": 1275
        },
        {
          "Date": "1/1/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "1/2/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 526,
          "Total": 31560
        },
        {
          "Date": "1/2/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 14,
          "Total": 1050
        },
        {
          "Date": "1/2/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "1/3/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 551,
          "Total": 33060
        },
        {
          "Date": "1/3/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 12,
          "Total": 900
        },
        {
          "Date": "1/3/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "1/4/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 551,
          "Total": 33060
        },
        {
          "Date": "1/4/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 15,
          "Total": 1125
        },
        {
          "Date": "1/4/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "1/5/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 484,
          "Total": 29040
        },
        {
          "Date": "1/5/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 14,
          "Total": 1050
        },
        {
          "Date": "1/5/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "1/6/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 510,
          "Total": 30600
        },
        {
          "Date": "1/6/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 11,
          "Total": 825
        },
        {
          "Date": "1/6/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "1/7/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 450,
          "Total": 27000
        },
        {
          "Date": "1/7/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 17,
          "Total": 1275
        },
        {
          "Date": "1/7/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "1/8/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 480,
          "Total": 28800
        },
        {
          "Date": "1/8/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 12,
          "Total": 900
        },
        {
          "Date": "1/8/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "1/9/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 490,
          "Total": 29400
        },
        {
          "Date": "1/9/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 15,
          "Total": 1125
        },
        {
          "Date": "1/9/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "1/10/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 484,
          "Total": 29040
        },
        {
          "Date": "1/10/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 19,
          "Total": 1425
        },
        {
          "Date": "1/10/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "1/11/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 487,
          "Total": 29220
        },
        {
          "Date": "1/11/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 19,
          "Total": 1425
        },
        {
          "Date": "1/11/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "1/12/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 444,
          "Total": 26640
        },
        {
          "Date": "1/12/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 12,
          "Total": 900
        },
        {
          "Date": "1/12/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "1/13/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 485,
          "Total": 29100
        },
        {
          "Date": "1/13/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 20,
          "Total": 1500
        },
        {
          "Date": "1/13/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "1/14/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 490,
          "Total": 29400
        },
        {
          "Date": "1/14/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 12,
          "Total": 900
        },
        {
          "Date": "1/14/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "1/15/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 488,
          "Total": 29280
        },
        {
          "Date": "1/15/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 18,
          "Total": 1350
        },
        {
          "Date": "1/15/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "1/16/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 490,
          "Total": 29400
        },
        {
          "Date": "1/16/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 14,
          "Total": 1050
        },
        {
          "Date": "1/16/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "1/17/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 486,
          "Total": 29160
        },
        {
          "Date": "1/17/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 16,
          "Total": 1200
        },
        {
          "Date": "1/17/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "1/18/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 487,
          "Total": 29220
        },
        {
          "Date": "1/18/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 18,
          "Total": 1350
        },
        {
          "Date": "1/18/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "1/19/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 449,
          "Total": 26940
        },
        {
          "Date": "1/19/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 18,
          "Total": 1350
        },
        {
          "Date": "1/19/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "1/20/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 490,
          "Total": 29400
        },
        {
          "Date": "1/20/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 12,
          "Total": 900
        },
        {
          "Date": "1/20/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "1/21/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 489,
          "Total": 29340
        },
        {
          "Date": "1/21/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 13,
          "Total": 975
        },
        {
          "Date": "1/21/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "1/22/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 485,
          "Total": 29100
        },
        {
          "Date": "1/22/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 11,
          "Total": 825
        },
        {
          "Date": "1/22/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "1/23/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 485,
          "Total": 29100
        },
        {
          "Date": "1/23/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 15,
          "Total": 1125
        },
        {
          "Date": "1/23/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "1/24/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 488,
          "Total": 29280
        },
        {
          "Date": "1/24/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 16,
          "Total": 1200
        },
        {
          "Date": "1/24/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "1/25/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 469,
          "Total": 28140
        },
        {
          "Date": "1/25/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 18,
          "Total": 1350
        },
        {
          "Date": "1/25/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "1/26/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 428,
          "Total": 25680
        },
        {
          "Date": "1/26/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 19,
          "Total": 1425
        },
        {
          "Date": "1/26/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "1/27/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 471,
          "Total": 28260
        },
        {
          "Date": "1/27/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 18,
          "Total": 1350
        },
        {
          "Date": "1/27/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "1/28/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 471,
          "Total": 28260
        },
        {
          "Date": "1/28/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 17,
          "Total": 1275
        },
        {
          "Date": "1/28/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "1/29/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 463,
          "Total": 27780
        },
        {
          "Date": "1/29/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 15,
          "Total": 1125
        },
        {
          "Date": "1/29/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "1/30/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 461,
          "Total": 27660
        },
        {
          "Date": "1/30/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 15,
          "Total": 1125
        },
        {
          "Date": "1/30/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "1/31/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 457,
          "Total": 27420
        },
        {
          "Date": "1/31/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 12,
          "Total": 900
        },
        {
          "Date": "1/31/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "2/1/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 472,
          "Total": 28320
        },
        {
          "Date": "2/1/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 8,
          "Total": 600
        },
        {
          "Date": "2/1/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "2/2/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 430,
          "Total": 25800
        },
        {
          "Date": "2/2/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 7,
          "Total": 525
        },
        {
          "Date": "2/2/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "2/3/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 472,
          "Total": 28320
        },
        {
          "Date": "2/3/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 4,
          "Total": 300
        },
        {
          "Date": "2/3/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "2/4/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 471,
          "Total": 28260
        },
        {
          "Date": "2/4/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 4,
          "Total": 300
        },
        {
          "Date": "2/4/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "2/5/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 473,
          "Total": 28380
        },
        {
          "Date": "2/5/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 3,
          "Total": 225
        },
        {
          "Date": "2/5/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "2/6/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 473,
          "Total": 28380
        },
        {
          "Date": "2/6/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 4,
          "Total": 300
        },
        {
          "Date": "2/6/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "2/7/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 470,
          "Total": 28200
        },
        {
          "Date": "2/7/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 5,
          "Total": 375
        },
        {
          "Date": "2/7/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "2/8/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 479,
          "Total": 28740
        },
        {
          "Date": "2/8/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 0,
          "Total": 0
        },
        {
          "Date": "2/8/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "2/9/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 430,
          "Total": 25800
        },
        {
          "Date": "2/9/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 5,
          "Total": 375
        },
        {
          "Date": "2/9/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "2/10/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 474,
          "Total": 28440
        },
        {
          "Date": "2/10/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 4,
          "Total": 300
        },
        {
          "Date": "2/10/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "2/11/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 472,
          "Total": 28320
        },
        {
          "Date": "2/11/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 1,
          "Total": 75
        },
        {
          "Date": "2/11/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "2/12/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 479,
          "Total": 28740
        },
        {
          "Date": "2/12/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 9,
          "Total": 675
        },
        {
          "Date": "2/12/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "2/13/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 470,
          "Total": 28200
        },
        {
          "Date": "2/13/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 2,
          "Total": 150
        },
        {
          "Date": "2/13/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "2/14/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 477,
          "Total": 28620
        },
        {
          "Date": "2/14/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 0,
          "Total": 0
        },
        {
          "Date": "2/14/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "2/15/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 476,
          "Total": 28560
        },
        {
          "Date": "2/15/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 0,
          "Total": 0
        },
        {
          "Date": "2/15/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "2/16/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 432,
          "Total": 25920
        },
        {
          "Date": "2/16/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 0,
          "Total": 0
        },
        {
          "Date": "2/16/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "2/17/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 479,
          "Total": 28740
        },
        {
          "Date": "2/17/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 0,
          "Total": 0
        },
        {
          "Date": "2/17/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "2/18/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 474,
          "Total": 28440
        },
        {
          "Date": "2/18/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 0,
          "Total": 0
        },
        {
          "Date": "2/18/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "2/19/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 476,
          "Total": 28560
        },
        {
          "Date": "2/19/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 0,
          "Total": 0
        },
        {
          "Date": "2/19/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "2/20/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 470,
          "Total": 28200
        },
        {
          "Date": "2/20/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 0,
          "Total": 0
        },
        {
          "Date": "2/20/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "2/21/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 476,
          "Total": 28560
        },
        {
          "Date": "2/21/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 0,
          "Total": 0
        },
        {
          "Date": "2/21/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "2/22/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 471,
          "Total": 28260
        },
        {
          "Date": "2/22/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 0,
          "Total": 0
        },
        {
          "Date": "2/22/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "2/23/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 436,
          "Total": 26160
        },
        {
          "Date": "2/23/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 0,
          "Total": 0
        },
        {
          "Date": "2/23/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "2/24/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 471,
          "Total": 28260
        },
        {
          "Date": "2/24/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 0,
          "Total": 0
        },
        {
          "Date": "2/24/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "2/25/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 459,
          "Total": 27540
        },
        {
          "Date": "2/25/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 0,
          "Total": 0
        },
        {
          "Date": "2/25/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "2/26/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 458,
          "Total": 27480
        },
        {
          "Date": "2/26/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 0,
          "Total": 0
        },
        {
          "Date": "2/26/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "2/27/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 458,
          "Total": 27480
        },
        {
          "Date": "2/27/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 0,
          "Total": 0
        },
        {
          "Date": "2/27/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "2/28/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 464,
          "Total": 27840
        },
        {
          "Date": "2/28/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 0,
          "Total": 0
        },
        {
          "Date": "2/28/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "3/1/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 473,
          "Total": 28380
        },
        {
          "Date": "3/1/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 0,
          "Total": 0
        },
        {
          "Date": "3/1/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "3/2/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 438,
          "Total": 26280
        },
        {
          "Date": "3/2/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 7,
          "Total": 525
        },
        {
          "Date": "3/2/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "3/3/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 474,
          "Total": 28440
        },
        {
          "Date": "3/3/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 11,
          "Total": 825
        },
        {
          "Date": "3/3/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "3/4/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 470,
          "Total": 28200
        },
        {
          "Date": "3/4/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 13,
          "Total": 975
        },
        {
          "Date": "3/4/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "3/5/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 482,
          "Total": 28920
        },
        {
          "Date": "3/5/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 11,
          "Total": 825
        },
        {
          "Date": "3/5/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "3/6/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 488,
          "Total": 29280
        },
        {
          "Date": "3/6/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 19,
          "Total": 1425
        },
        {
          "Date": "3/6/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "3/7/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 496,
          "Total": 29760
        },
        {
          "Date": "3/7/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 15,
          "Total": 1125
        },
        {
          "Date": "3/7/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "3/8/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 496,
          "Total": 29760
        },
        {
          "Date": "3/8/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 20,
          "Total": 1500
        },
        {
          "Date": "3/8/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "3/9/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 452,
          "Total": 27120
        },
        {
          "Date": "3/9/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 20,
          "Total": 1500
        },
        {
          "Date": "3/9/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "3/10/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 500,
          "Total": 30000
        },
        {
          "Date": "3/10/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 20,
          "Total": 1500
        },
        {
          "Date": "3/10/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "3/11/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 492,
          "Total": 29520
        },
        {
          "Date": "3/11/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 12,
          "Total": 900
        },
        {
          "Date": "3/11/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "3/12/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 486,
          "Total": 29160
        },
        {
          "Date": "3/12/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 20,
          "Total": 1500
        },
        {
          "Date": "3/12/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "3/13/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 492,
          "Total": 29520
        },
        {
          "Date": "3/13/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 12,
          "Total": 900
        },
        {
          "Date": "3/13/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "3/14/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 486,
          "Total": 29160
        },
        {
          "Date": "3/14/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 13,
          "Total": 975
        },
        {
          "Date": "3/14/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "3/15/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 500,
          "Total": 30000
        },
        {
          "Date": "3/15/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 13,
          "Total": 975
        },
        {
          "Date": "3/15/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "3/16/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 450,
          "Total": 27000
        },
        {
          "Date": "3/16/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 19,
          "Total": 1425
        },
        {
          "Date": "3/16/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "3/17/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 482,
          "Total": 28920
        },
        {
          "Date": "3/17/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 17,
          "Total": 1275
        },
        {
          "Date": "3/17/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "3/18/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 488,
          "Total": 29280
        },
        {
          "Date": "3/18/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 18,
          "Total": 1350
        },
        {
          "Date": "3/18/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "3/19/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 482,
          "Total": 28920
        },
        {
          "Date": "3/19/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 23,
          "Total": 1725
        },
        {
          "Date": "3/19/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "3/20/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 496,
          "Total": 29760
        },
        {
          "Date": "3/20/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 25,
          "Total": 1875
        },
        {
          "Date": "3/20/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "3/21/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 482,
          "Total": 28920
        },
        {
          "Date": "3/21/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 29,
          "Total": 2175
        },
        {
          "Date": "3/21/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "3/22/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 500,
          "Total": 30000
        },
        {
          "Date": "3/22/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 24,
          "Total": 1800
        },
        {
          "Date": "3/22/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "3/23/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 458,
          "Total": 27480
        },
        {
          "Date": "3/23/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 23,
          "Total": 1725
        },
        {
          "Date": "3/23/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "3/24/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 490,
          "Total": 29400
        },
        {
          "Date": "3/24/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 23,
          "Total": 1725
        },
        {
          "Date": "3/24/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "3/25/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 490,
          "Total": 29400
        },
        {
          "Date": "3/25/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 30,
          "Total": 2250
        },
        {
          "Date": "3/25/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "3/26/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 477,
          "Total": 28620
        },
        {
          "Date": "3/26/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 25,
          "Total": 1875
        },
        {
          "Date": "3/26/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "3/27/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 481,
          "Total": 28860
        },
        {
          "Date": "3/27/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 34,
          "Total": 2550
        },
        {
          "Date": "3/27/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "3/28/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 475,
          "Total": 28500
        },
        {
          "Date": "3/28/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 31,
          "Total": 2325
        },
        {
          "Date": "3/28/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "3/29/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 462,
          "Total": 27720
        },
        {
          "Date": "3/29/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 31,
          "Total": 2325
        },
        {
          "Date": "3/29/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "3/30/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 422,
          "Total": 25320
        },
        {
          "Date": "3/30/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 34,
          "Total": 2550
        },
        {
          "Date": "3/30/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "3/31/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 466,
          "Total": 27960
        },
        {
          "Date": "3/31/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 34,
          "Total": 2550
        },
        {
          "Date": "3/31/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "4/1/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 498,
          "Total": 29880
        },
        {
          "Date": "4/1/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 33,
          "Total": 2475
        },
        {
          "Date": "4/1/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "4/2/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 498,
          "Total": 29880
        },
        {
          "Date": "4/2/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 38,
          "Total": 2850
        },
        {
          "Date": "4/2/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "4/3/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 486,
          "Total": 29160
        },
        {
          "Date": "4/3/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 34,
          "Total": 2550
        },
        {
          "Date": "4/3/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "4/4/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 500,
          "Total": 30000
        },
        {
          "Date": "4/4/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 41,
          "Total": 3075
        },
        {
          "Date": "4/4/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "4/5/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 498,
          "Total": 29880
        },
        {
          "Date": "4/5/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 43,
          "Total": 3225
        },
        {
          "Date": "4/5/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "4/6/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 486,
          "Total": 29160
        },
        {
          "Date": "4/6/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 46,
          "Total": 3450
        },
        {
          "Date": "4/6/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "4/7/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 530,
          "Total": 31800
        },
        {
          "Date": "4/7/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 49,
          "Total": 3675
        },
        {
          "Date": "4/7/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "4/8/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 530,
          "Total": 31800
        },
        {
          "Date": "4/8/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 50,
          "Total": 3750
        },
        {
          "Date": "4/8/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "4/9/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 520,
          "Total": 31200
        },
        {
          "Date": "4/9/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 48,
          "Total": 3600
        },
        {
          "Date": "4/9/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "4/10/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 530,
          "Total": 31800
        },
        {
          "Date": "4/10/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 50,
          "Total": 3750
        },
        {
          "Date": "4/10/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "4/11/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 522,
          "Total": 31320
        },
        {
          "Date": "4/11/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 46,
          "Total": 3450
        },
        {
          "Date": "4/11/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "4/12/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 512,
          "Total": 30720
        },
        {
          "Date": "4/12/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 44,
          "Total": 3300
        },
        {
          "Date": "4/12/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "4/13/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 482,
          "Total": 28920
        },
        {
          "Date": "4/13/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 41,
          "Total": 3075
        },
        {
          "Date": "4/13/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "4/14/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 514,
          "Total": 30840
        },
        {
          "Date": "4/14/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 54,
          "Total": 4050
        },
        {
          "Date": "4/14/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "4/15/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 512,
          "Total": 30720
        },
        {
          "Date": "4/15/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 60,
          "Total": 4500
        },
        {
          "Date": "4/15/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "4/16/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 524,
          "Total": 31440
        },
        {
          "Date": "4/16/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 58,
          "Total": 4350
        },
        {
          "Date": "4/16/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "4/17/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 512,
          "Total": 30720
        },
        {
          "Date": "4/17/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 54,
          "Total": 4050
        },
        {
          "Date": "4/17/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "4/18/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 526,
          "Total": 31560
        },
        {
          "Date": "4/18/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 58,
          "Total": 4350
        },
        {
          "Date": "4/18/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "4/19/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 530,
          "Total": 31800
        },
        {
          "Date": "4/19/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 60,
          "Total": 4500
        },
        {
          "Date": "4/19/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "4/20/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 476,
          "Total": 28560
        },
        {
          "Date": "4/20/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 53,
          "Total": 3975
        },
        {
          "Date": "4/20/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "4/21/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 516,
          "Total": 30960
        },
        {
          "Date": "4/21/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 53,
          "Total": 3975
        },
        {
          "Date": "4/21/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "4/22/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 514,
          "Total": 30840
        },
        {
          "Date": "4/22/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 57,
          "Total": 4275
        },
        {
          "Date": "4/22/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "4/23/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 520,
          "Total": 31200
        },
        {
          "Date": "4/23/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 52,
          "Total": 3900
        },
        {
          "Date": "4/23/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "4/24/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 528,
          "Total": 31680
        },
        {
          "Date": "4/24/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 55,
          "Total": 4125
        },
        {
          "Date": "4/24/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "4/25/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 520,
          "Total": 31200
        },
        {
          "Date": "4/25/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 52,
          "Total": 3900
        },
        {
          "Date": "4/25/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "4/26/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 515,
          "Total": 30900
        },
        {
          "Date": "4/26/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 64,
          "Total": 4800
        },
        {
          "Date": "4/26/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "4/27/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 471,
          "Total": 28260
        },
        {
          "Date": "4/27/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 69,
          "Total": 5175
        },
        {
          "Date": "4/27/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "4/28/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 511,
          "Total": 30660
        },
        {
          "Date": "4/28/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 65,
          "Total": 4875
        },
        {
          "Date": "4/28/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "4/29/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 492,
          "Total": 29520
        },
        {
          "Date": "4/29/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 67,
          "Total": 5025
        },
        {
          "Date": "4/29/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "4/30/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 508,
          "Total": 30480
        },
        {
          "Date": "4/30/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 63,
          "Total": 4725
        },
        {
          "Date": "4/30/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "5/1/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 516,
          "Total": 30960
        },
        {
          "Date": "5/1/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 67,
          "Total": 5025
        },
        {
          "Date": "5/1/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "5/2/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 528,
          "Total": 31680
        },
        {
          "Date": "5/2/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 66,
          "Total": 4950
        },
        {
          "Date": "5/2/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "5/3/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 520,
          "Total": 31200
        },
        {
          "Date": "5/3/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 74,
          "Total": 5550
        },
        {
          "Date": "5/3/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "5/4/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 482,
          "Total": 28920
        },
        {
          "Date": "5/4/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 77,
          "Total": 5775
        },
        {
          "Date": "5/4/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "5/5/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 537,
          "Total": 32220
        },
        {
          "Date": "5/5/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 75,
          "Total": 5625
        },
        {
          "Date": "5/5/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "5/6/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 540,
          "Total": 32400
        },
        {
          "Date": "5/6/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 77,
          "Total": 5775
        },
        {
          "Date": "5/6/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "5/7/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 528,
          "Total": 31680
        },
        {
          "Date": "5/7/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 72,
          "Total": 5400
        },
        {
          "Date": "5/7/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "5/8/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 537,
          "Total": 32220
        },
        {
          "Date": "5/8/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 78,
          "Total": 5850
        },
        {
          "Date": "5/8/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "5/9/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 537,
          "Total": 32220
        },
        {
          "Date": "5/9/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 80,
          "Total": 6000
        },
        {
          "Date": "5/9/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "5/10/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 543,
          "Total": 32580
        },
        {
          "Date": "5/10/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 75,
          "Total": 5625
        },
        {
          "Date": "5/10/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "5/11/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 488,
          "Total": 29280
        },
        {
          "Date": "5/11/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 79,
          "Total": 5925
        },
        {
          "Date": "5/11/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "5/12/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 531,
          "Total": 31860
        },
        {
          "Date": "5/12/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 71,
          "Total": 5325
        },
        {
          "Date": "5/12/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "5/13/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 540,
          "Total": 32400
        },
        {
          "Date": "5/13/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 72,
          "Total": 5400
        },
        {
          "Date": "5/13/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "5/14/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 534,
          "Total": 32040
        },
        {
          "Date": "5/14/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 73,
          "Total": 5475
        },
        {
          "Date": "5/14/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "5/15/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 543,
          "Total": 32580
        },
        {
          "Date": "5/15/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 72,
          "Total": 5400
        },
        {
          "Date": "5/15/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "5/16/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 546,
          "Total": 32760
        },
        {
          "Date": "5/16/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 73,
          "Total": 5475
        },
        {
          "Date": "5/16/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "5/17/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 552,
          "Total": 33120
        },
        {
          "Date": "5/17/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 71,
          "Total": 5325
        },
        {
          "Date": "5/17/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "5/18/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 494,
          "Total": 29640
        },
        {
          "Date": "5/18/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 76,
          "Total": 5700
        },
        {
          "Date": "5/18/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "5/19/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 546,
          "Total": 32760
        },
        {
          "Date": "5/19/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 75,
          "Total": 5625
        },
        {
          "Date": "5/19/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "5/20/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 540,
          "Total": 32400
        },
        {
          "Date": "5/20/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 73,
          "Total": 5475
        },
        {
          "Date": "5/20/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "5/21/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 552,
          "Total": 33120
        },
        {
          "Date": "5/21/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 76,
          "Total": 5700
        },
        {
          "Date": "5/21/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "5/22/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 537,
          "Total": 32220
        },
        {
          "Date": "5/22/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 79,
          "Total": 5925
        },
        {
          "Date": "5/22/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "5/23/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 537,
          "Total": 32220
        },
        {
          "Date": "5/23/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 74,
          "Total": 5550
        },
        {
          "Date": "5/23/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "5/24/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 537,
          "Total": 32220
        },
        {
          "Date": "5/24/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 76,
          "Total": 5700
        },
        {
          "Date": "5/24/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "5/25/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 500,
          "Total": 30000
        },
        {
          "Date": "5/25/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 79,
          "Total": 5925
        },
        {
          "Date": "5/25/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "5/26/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 513,
          "Total": 30780
        },
        {
          "Date": "5/26/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 73,
          "Total": 5475
        },
        {
          "Date": "5/26/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "5/27/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 537,
          "Total": 32220
        },
        {
          "Date": "5/27/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 72,
          "Total": 5400
        },
        {
          "Date": "5/27/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "5/28/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 516,
          "Total": 30960
        },
        {
          "Date": "5/28/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 73,
          "Total": 5475
        },
        {
          "Date": "5/28/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "5/29/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 529,
          "Total": 31740
        },
        {
          "Date": "5/29/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 73,
          "Total": 5475
        },
        {
          "Date": "5/29/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "5/30/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 523,
          "Total": 31380
        },
        {
          "Date": "5/30/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 77,
          "Total": 5775
        },
        {
          "Date": "5/30/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "5/31/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 510,
          "Total": 30600
        },
        {
          "Date": "5/31/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 73,
          "Total": 5475
        },
        {
          "Date": "5/31/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "6/1/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 509,
          "Total": 30540
        },
        {
          "Date": "6/1/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 73,
          "Total": 5475
        },
        {
          "Date": "6/1/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "6/2/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 564,
          "Total": 33840
        },
        {
          "Date": "6/2/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 75,
          "Total": 5625
        },
        {
          "Date": "6/2/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "6/3/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 543,
          "Total": 32580
        },
        {
          "Date": "6/3/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 76,
          "Total": 5700
        },
        {
          "Date": "6/3/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "6/4/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 570,
          "Total": 34200
        },
        {
          "Date": "6/4/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 66,
          "Total": 4950
        },
        {
          "Date": "6/4/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "6/5/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 570,
          "Total": 34200
        },
        {
          "Date": "6/5/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 68,
          "Total": 5100
        },
        {
          "Date": "6/5/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "6/6/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 552,
          "Total": 33120
        },
        {
          "Date": "6/6/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 62,
          "Total": 4650
        },
        {
          "Date": "6/6/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "6/7/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 552,
          "Total": 33120
        },
        {
          "Date": "6/7/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 68,
          "Total": 5100
        },
        {
          "Date": "6/7/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "6/8/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 521,
          "Total": 31260
        },
        {
          "Date": "6/8/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 60,
          "Total": 4500
        },
        {
          "Date": "6/8/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "6/9/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 561,
          "Total": 33660
        },
        {
          "Date": "6/9/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 69,
          "Total": 5175
        },
        {
          "Date": "6/9/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "6/10/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 549,
          "Total": 32940
        },
        {
          "Date": "6/10/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 65,
          "Total": 4875
        },
        {
          "Date": "6/10/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "6/11/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 546,
          "Total": 32760
        },
        {
          "Date": "6/11/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 61,
          "Total": 4575
        },
        {
          "Date": "6/11/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "6/12/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 561,
          "Total": 33660
        },
        {
          "Date": "6/12/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 62,
          "Total": 4650
        },
        {
          "Date": "6/12/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "6/13/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 546,
          "Total": 32760
        },
        {
          "Date": "6/13/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 68,
          "Total": 5100
        },
        {
          "Date": "6/13/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "6/14/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 549,
          "Total": 32940
        },
        {
          "Date": "6/14/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 65,
          "Total": 4875
        },
        {
          "Date": "6/14/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "6/15/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 521,
          "Total": 31260
        },
        {
          "Date": "6/15/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 63,
          "Total": 4725
        },
        {
          "Date": "6/15/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "6/16/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 552,
          "Total": 33120
        },
        {
          "Date": "6/16/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 63,
          "Total": 4725
        },
        {
          "Date": "6/16/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "6/17/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 570,
          "Total": 34200
        },
        {
          "Date": "6/17/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 61,
          "Total": 4575
        },
        {
          "Date": "6/17/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "6/18/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 555,
          "Total": 33300
        },
        {
          "Date": "6/18/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 68,
          "Total": 5100
        },
        {
          "Date": "6/18/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "6/19/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 549,
          "Total": 32940
        },
        {
          "Date": "6/19/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 68,
          "Total": 5100
        },
        {
          "Date": "6/19/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "6/20/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 567,
          "Total": 34020
        },
        {
          "Date": "6/20/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 69,
          "Total": 5175
        },
        {
          "Date": "6/20/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "6/21/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 567,
          "Total": 34020
        },
        {
          "Date": "6/21/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 61,
          "Total": 4575
        },
        {
          "Date": "6/21/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "6/22/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 506,
          "Total": 30360
        },
        {
          "Date": "6/22/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 69,
          "Total": 5175
        },
        {
          "Date": "6/22/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "6/23/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 552,
          "Total": 33120
        },
        {
          "Date": "6/23/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 67,
          "Total": 5025
        },
        {
          "Date": "6/23/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "6/24/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 543,
          "Total": 32580
        },
        {
          "Date": "6/24/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 63,
          "Total": 4725
        },
        {
          "Date": "6/24/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "6/25/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 543,
          "Total": 32580
        },
        {
          "Date": "6/25/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 60,
          "Total": 4500
        },
        {
          "Date": "6/25/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "6/26/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 534,
          "Total": 32040
        },
        {
          "Date": "6/26/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 63,
          "Total": 4725
        },
        {
          "Date": "6/26/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "6/27/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 543,
          "Total": 32580
        },
        {
          "Date": "6/27/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 68,
          "Total": 5100
        },
        {
          "Date": "6/27/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "6/28/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 546,
          "Total": 32760
        },
        {
          "Date": "6/28/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 69,
          "Total": 5175
        },
        {
          "Date": "6/28/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "6/29/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 492,
          "Total": 29520
        },
        {
          "Date": "6/29/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 63,
          "Total": 4725
        },
        {
          "Date": "6/29/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "6/30/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 538,
          "Total": 32280
        },
        {
          "Date": "6/30/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 74,
          "Total": 5550
        },
        {
          "Date": "6/30/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "7/1/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 598,
          "Total": 35880
        },
        {
          "Date": "7/1/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 76,
          "Total": 5700
        },
        {
          "Date": "7/1/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "7/2/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 574,
          "Total": 34440
        },
        {
          "Date": "7/2/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 77,
          "Total": 5775
        },
        {
          "Date": "7/2/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "7/3/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 606,
          "Total": 36360
        },
        {
          "Date": "7/3/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 71,
          "Total": 5325
        },
        {
          "Date": "7/3/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "7/4/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 610,
          "Total": 36600
        },
        {
          "Date": "7/4/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 76,
          "Total": 5700
        },
        {
          "Date": "7/4/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "7/5/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 598,
          "Total": 35880
        },
        {
          "Date": "7/5/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 75,
          "Total": 5625
        },
        {
          "Date": "7/5/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "7/6/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 550,
          "Total": 33000
        },
        {
          "Date": "7/6/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 75,
          "Total": 5625
        },
        {
          "Date": "7/6/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "7/7/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 594,
          "Total": 35640
        },
        {
          "Date": "7/7/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 77,
          "Total": 5775
        },
        {
          "Date": "7/7/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "7/8/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 606,
          "Total": 36360
        },
        {
          "Date": "7/8/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 75,
          "Total": 5625
        },
        {
          "Date": "7/8/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "7/9/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 598,
          "Total": 35880
        },
        {
          "Date": "7/9/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 74,
          "Total": 5550
        },
        {
          "Date": "7/9/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "7/10/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 574,
          "Total": 34440
        },
        {
          "Date": "7/10/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 75,
          "Total": 5625
        },
        {
          "Date": "7/10/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "7/11/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 610,
          "Total": 36600
        },
        {
          "Date": "7/11/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 74,
          "Total": 5550
        },
        {
          "Date": "7/11/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "7/12/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 606,
          "Total": 36360
        },
        {
          "Date": "7/12/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 80,
          "Total": 6000
        },
        {
          "Date": "7/12/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "7/13/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 570,
          "Total": 34200
        },
        {
          "Date": "7/13/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 78,
          "Total": 5850
        },
        {
          "Date": "7/13/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "7/14/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 578,
          "Total": 34680
        },
        {
          "Date": "7/14/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 71,
          "Total": 5325
        },
        {
          "Date": "7/14/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "7/15/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 574,
          "Total": 34440
        },
        {
          "Date": "7/15/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 73,
          "Total": 5475
        },
        {
          "Date": "7/15/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "7/16/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 590,
          "Total": 35400
        },
        {
          "Date": "7/16/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 79,
          "Total": 5925
        },
        {
          "Date": "7/16/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "7/17/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 586,
          "Total": 35160
        },
        {
          "Date": "7/17/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 74,
          "Total": 5550
        },
        {
          "Date": "7/17/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "7/18/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 610,
          "Total": 36600
        },
        {
          "Date": "7/18/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 78,
          "Total": 5850
        },
        {
          "Date": "7/18/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "7/19/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 578,
          "Total": 34680
        },
        {
          "Date": "7/19/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 79,
          "Total": 5925
        },
        {
          "Date": "7/19/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "7/20/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 534,
          "Total": 32040
        },
        {
          "Date": "7/20/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 75,
          "Total": 5625
        },
        {
          "Date": "7/20/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "7/21/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 586,
          "Total": 35160
        },
        {
          "Date": "7/21/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 78,
          "Total": 5850
        },
        {
          "Date": "7/21/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "7/22/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 582,
          "Total": 34920
        },
        {
          "Date": "7/22/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 73,
          "Total": 5475
        },
        {
          "Date": "7/22/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "7/23/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 594,
          "Total": 35640
        },
        {
          "Date": "7/23/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 78,
          "Total": 5850
        },
        {
          "Date": "7/23/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "7/24/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 598,
          "Total": 35880
        },
        {
          "Date": "7/24/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 71,
          "Total": 5325
        },
        {
          "Date": "7/24/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "7/25/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 594,
          "Total": 35640
        },
        {
          "Date": "7/25/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 71,
          "Total": 5325
        },
        {
          "Date": "7/25/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "7/26/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 587,
          "Total": 35220
        },
        {
          "Date": "7/26/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 74,
          "Total": 5550
        },
        {
          "Date": "7/26/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "7/27/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 547,
          "Total": 32820
        },
        {
          "Date": "7/27/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 71,
          "Total": 5325
        },
        {
          "Date": "7/27/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "7/28/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 583,
          "Total": 34980
        },
        {
          "Date": "7/28/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 79,
          "Total": 5925
        },
        {
          "Date": "7/28/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "7/29/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 554,
          "Total": 33240
        },
        {
          "Date": "7/29/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 73,
          "Total": 5475
        },
        {
          "Date": "7/29/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "7/30/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 570,
          "Total": 34200
        },
        {
          "Date": "7/30/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 79,
          "Total": 5925
        },
        {
          "Date": "7/30/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "7/31/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 552,
          "Total": 33120
        },
        {
          "Date": "7/31/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 80,
          "Total": 6000
        },
        {
          "Date": "7/31/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "8/1/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 650,
          "Total": 39000
        },
        {
          "Date": "8/1/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 78,
          "Total": 5850
        },
        {
          "Date": "8/1/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "8/2/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 615,
          "Total": 36900
        },
        {
          "Date": "8/2/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 80,
          "Total": 6000
        },
        {
          "Date": "8/2/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "8/3/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 605,
          "Total": 36300
        },
        {
          "Date": "8/3/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 75,
          "Total": 5625
        },
        {
          "Date": "8/3/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "8/4/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 615,
          "Total": 36900
        },
        {
          "Date": "8/4/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 71,
          "Total": 5325
        },
        {
          "Date": "8/4/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "8/5/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 625,
          "Total": 37500
        },
        {
          "Date": "8/5/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 88,
          "Total": 6600
        },
        {
          "Date": "8/5/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "8/6/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 620,
          "Total": 37200
        },
        {
          "Date": "8/6/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 90,
          "Total": 6750
        },
        {
          "Date": "8/6/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "8/7/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 615,
          "Total": 36900
        },
        {
          "Date": "8/7/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 87,
          "Total": 6525
        },
        {
          "Date": "8/7/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "8/8/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 615,
          "Total": 36900
        },
        {
          "Date": "8/8/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 90,
          "Total": 6750
        },
        {
          "Date": "8/8/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "8/9/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 660,
          "Total": 39600
        },
        {
          "Date": "8/9/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 82,
          "Total": 6150
        },
        {
          "Date": "8/9/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "8/10/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 575,
          "Total": 34500
        },
        {
          "Date": "8/10/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 89,
          "Total": 6675
        },
        {
          "Date": "8/10/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "8/11/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 635,
          "Total": 38100
        },
        {
          "Date": "8/11/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 86,
          "Total": 6450
        },
        {
          "Date": "8/11/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "8/12/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 620,
          "Total": 37200
        },
        {
          "Date": "8/12/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 82,
          "Total": 6150
        },
        {
          "Date": "8/12/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "8/13/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 655,
          "Total": 39300
        },
        {
          "Date": "8/13/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 84,
          "Total": 6300
        },
        {
          "Date": "8/13/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "8/14/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 645,
          "Total": 38700
        },
        {
          "Date": "8/14/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 81,
          "Total": 6075
        },
        {
          "Date": "8/14/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "8/15/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 635,
          "Total": 38100
        },
        {
          "Date": "8/15/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 86,
          "Total": 6450
        },
        {
          "Date": "8/15/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "8/16/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 655,
          "Total": 39300
        },
        {
          "Date": "8/16/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 88,
          "Total": 6600
        },
        {
          "Date": "8/16/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "8/17/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 600,
          "Total": 36000
        },
        {
          "Date": "8/17/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 86,
          "Total": 6450
        },
        {
          "Date": "8/17/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "8/18/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 630,
          "Total": 37800
        },
        {
          "Date": "8/18/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 87,
          "Total": 6525
        },
        {
          "Date": "8/18/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "8/19/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 650,
          "Total": 39000
        },
        {
          "Date": "8/19/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 84,
          "Total": 6300
        },
        {
          "Date": "8/19/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "8/20/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 660,
          "Total": 39600
        },
        {
          "Date": "8/20/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 86,
          "Total": 6450
        },
        {
          "Date": "8/20/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "8/21/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 650,
          "Total": 39000
        },
        {
          "Date": "8/21/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 83,
          "Total": 6225
        },
        {
          "Date": "8/21/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "8/22/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 620,
          "Total": 37200
        },
        {
          "Date": "8/22/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 82,
          "Total": 6150
        },
        {
          "Date": "8/22/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "8/23/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 630,
          "Total": 37800
        },
        {
          "Date": "8/23/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 84,
          "Total": 6300
        },
        {
          "Date": "8/23/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "8/24/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 580,
          "Total": 34800
        },
        {
          "Date": "8/24/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 85,
          "Total": 6375
        },
        {
          "Date": "8/24/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "8/25/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 660,
          "Total": 39600
        },
        {
          "Date": "8/25/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 88,
          "Total": 6600
        },
        {
          "Date": "8/25/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "8/26/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 630,
          "Total": 37800
        },
        {
          "Date": "8/26/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 90,
          "Total": 6750
        },
        {
          "Date": "8/26/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "8/27/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 620,
          "Total": 37200
        },
        {
          "Date": "8/27/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 85,
          "Total": 6375
        },
        {
          "Date": "8/27/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "8/28/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 600,
          "Total": 36000
        },
        {
          "Date": "8/28/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 85,
          "Total": 6375
        },
        {
          "Date": "8/28/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "8/29/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 610,
          "Total": 36600
        },
        {
          "Date": "8/29/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 83,
          "Total": 6225
        },
        {
          "Date": "8/29/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "8/30/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 600,
          "Total": 36000
        },
        {
          "Date": "8/30/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 84,
          "Total": 6300
        },
        {
          "Date": "8/30/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "8/31/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 545,
          "Total": 32700
        },
        {
          "Date": "8/31/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 85,
          "Total": 6375
        },
        {
          "Date": "8/31/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "9/1/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 620,
          "Total": 37200
        },
        {
          "Date": "9/1/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 88,
          "Total": 6600
        },
        {
          "Date": "9/1/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "9/2/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 630,
          "Total": 37800
        },
        {
          "Date": "9/2/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 84,
          "Total": 6300
        },
        {
          "Date": "9/2/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "9/3/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 630,
          "Total": 37800
        },
        {
          "Date": "9/3/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 83,
          "Total": 6225
        },
        {
          "Date": "9/3/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "9/4/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 650,
          "Total": 39000
        },
        {
          "Date": "9/4/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 86,
          "Total": 6450
        },
        {
          "Date": "9/4/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "9/5/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 680,
          "Total": 40800
        },
        {
          "Date": "9/5/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 90,
          "Total": 6750
        },
        {
          "Date": "9/5/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "9/6/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 660,
          "Total": 39600
        },
        {
          "Date": "9/6/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 89,
          "Total": 6675
        },
        {
          "Date": "9/6/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "9/7/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 635,
          "Total": 38100
        },
        {
          "Date": "9/7/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 86,
          "Total": 6450
        },
        {
          "Date": "9/7/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "9/8/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 655,
          "Total": 39300
        },
        {
          "Date": "9/8/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 87,
          "Total": 6525
        },
        {
          "Date": "9/8/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "9/9/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 700,
          "Total": 42000
        },
        {
          "Date": "9/9/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 83,
          "Total": 6225
        },
        {
          "Date": "9/9/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "9/10/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 655,
          "Total": 39300
        },
        {
          "Date": "9/10/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 83,
          "Total": 6225
        },
        {
          "Date": "9/10/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "9/11/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 700,
          "Total": 42000
        },
        {
          "Date": "9/11/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 82,
          "Total": 6150
        },
        {
          "Date": "9/11/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "9/12/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 685,
          "Total": 41100
        },
        {
          "Date": "9/12/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 83,
          "Total": 6225
        },
        {
          "Date": "9/12/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "9/13/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 665,
          "Total": 39900
        },
        {
          "Date": "9/13/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 87,
          "Total": 6525
        },
        {
          "Date": "9/13/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "9/14/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 660,
          "Total": 39600
        },
        {
          "Date": "9/14/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 86,
          "Total": 6450
        },
        {
          "Date": "9/14/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "9/15/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 685,
          "Total": 41100
        },
        {
          "Date": "9/15/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 81,
          "Total": 6075
        },
        {
          "Date": "9/15/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "9/16/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 685,
          "Total": 41100
        },
        {
          "Date": "9/16/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 87,
          "Total": 6525
        },
        {
          "Date": "9/16/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "9/17/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 700,
          "Total": 42000
        },
        {
          "Date": "9/17/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 83,
          "Total": 6225
        },
        {
          "Date": "9/17/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "9/18/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 690,
          "Total": 41400
        },
        {
          "Date": "9/18/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 85,
          "Total": 6375
        },
        {
          "Date": "9/18/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "9/19/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 655,
          "Total": 39300
        },
        {
          "Date": "9/19/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 90,
          "Total": 6750
        },
        {
          "Date": "9/19/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "9/20/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 685,
          "Total": 41100
        },
        {
          "Date": "9/20/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 86,
          "Total": 6450
        },
        {
          "Date": "9/20/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "9/21/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 620,
          "Total": 37200
        },
        {
          "Date": "9/21/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 83,
          "Total": 6225
        },
        {
          "Date": "9/21/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "9/22/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 675,
          "Total": 40500
        },
        {
          "Date": "9/22/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 86,
          "Total": 6450
        },
        {
          "Date": "9/22/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "9/23/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 665,
          "Total": 39900
        },
        {
          "Date": "9/23/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 87,
          "Total": 6525
        },
        {
          "Date": "9/23/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "9/24/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 685,
          "Total": 41100
        },
        {
          "Date": "9/24/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 87,
          "Total": 6525
        },
        {
          "Date": "9/24/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "9/25/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 700,
          "Total": 42000
        },
        {
          "Date": "9/25/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 88,
          "Total": 6600
        },
        {
          "Date": "9/25/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "9/26/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 650,
          "Total": 39000
        },
        {
          "Date": "9/26/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 81,
          "Total": 6075
        },
        {
          "Date": "9/26/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "9/27/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 680,
          "Total": 40800
        },
        {
          "Date": "9/27/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 89,
          "Total": 6675
        },
        {
          "Date": "9/27/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "9/28/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 600,
          "Total": 36000
        },
        {
          "Date": "9/28/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 86,
          "Total": 6450
        },
        {
          "Date": "9/28/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "9/29/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 665,
          "Total": 39900
        },
        {
          "Date": "9/29/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 86,
          "Total": 6450
        },
        {
          "Date": "9/29/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "9/30/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 650,
          "Total": 39000
        },
        {
          "Date": "9/30/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 84,
          "Total": 6300
        },
        {
          "Date": "9/30/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "10/1/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 665,
          "Total": 39900
        },
        {
          "Date": "10/1/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 90,
          "Total": 6750
        },
        {
          "Date": "10/1/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "10/2/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 685,
          "Total": 41100
        },
        {
          "Date": "10/2/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 90,
          "Total": 6750
        },
        {
          "Date": "10/2/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "10/3/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 700,
          "Total": 42000
        },
        {
          "Date": "10/3/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 87,
          "Total": 6525
        },
        {
          "Date": "10/3/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "10/4/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 695,
          "Total": 41700
        },
        {
          "Date": "10/4/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 82,
          "Total": 6150
        },
        {
          "Date": "10/4/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "10/5/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 650,
          "Total": 39000
        },
        {
          "Date": "10/5/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 87,
          "Total": 6525
        },
        {
          "Date": "10/5/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "10/6/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 705,
          "Total": 42300
        },
        {
          "Date": "10/6/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 89,
          "Total": 6675
        },
        {
          "Date": "10/6/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "10/7/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 710,
          "Total": 42600
        },
        {
          "Date": "10/7/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 84,
          "Total": 6300
        },
        {
          "Date": "10/7/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "10/8/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 730,
          "Total": 43800
        },
        {
          "Date": "10/8/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 81,
          "Total": 6075
        },
        {
          "Date": "10/8/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "10/9/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 690,
          "Total": 41400
        },
        {
          "Date": "10/9/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 76,
          "Total": 5700
        },
        {
          "Date": "10/9/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "10/10/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 735,
          "Total": 44100
        },
        {
          "Date": "10/10/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 70,
          "Total": 5250
        },
        {
          "Date": "10/10/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "10/11/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 695,
          "Total": 41700
        },
        {
          "Date": "10/11/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 70,
          "Total": 5250
        },
        {
          "Date": "10/11/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "10/12/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 665,
          "Total": 39900
        },
        {
          "Date": "10/12/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 70,
          "Total": 5250
        },
        {
          "Date": "10/12/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "10/13/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 710,
          "Total": 42600
        },
        {
          "Date": "10/13/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 78,
          "Total": 5850
        },
        {
          "Date": "10/13/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "10/14/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 695,
          "Total": 41700
        },
        {
          "Date": "10/14/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 79,
          "Total": 5925
        },
        {
          "Date": "10/14/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "10/15/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 690,
          "Total": 41400
        },
        {
          "Date": "10/15/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 72,
          "Total": 5400
        },
        {
          "Date": "10/15/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "10/16/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 695,
          "Total": 41700
        },
        {
          "Date": "10/16/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 71,
          "Total": 5325
        },
        {
          "Date": "10/16/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "10/17/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 730,
          "Total": 43800
        },
        {
          "Date": "10/17/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 78,
          "Total": 5850
        },
        {
          "Date": "10/17/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "10/18/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 700,
          "Total": 42000
        },
        {
          "Date": "10/18/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 76,
          "Total": 5700
        },
        {
          "Date": "10/18/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "10/19/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 695,
          "Total": 41700
        },
        {
          "Date": "10/19/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 73,
          "Total": 5475
        },
        {
          "Date": "10/19/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "10/20/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 735,
          "Total": 44100
        },
        {
          "Date": "10/20/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 72,
          "Total": 5400
        },
        {
          "Date": "10/20/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "10/21/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 695,
          "Total": 41700
        },
        {
          "Date": "10/21/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 75,
          "Total": 5625
        },
        {
          "Date": "10/21/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "10/22/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 730,
          "Total": 43800
        },
        {
          "Date": "10/22/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 77,
          "Total": 5775
        },
        {
          "Date": "10/22/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "10/23/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 705,
          "Total": 42300
        },
        {
          "Date": "10/23/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 75,
          "Total": 5625
        },
        {
          "Date": "10/23/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "10/24/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 720,
          "Total": 43200
        },
        {
          "Date": "10/24/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 76,
          "Total": 5700
        },
        {
          "Date": "10/24/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "10/25/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 700,
          "Total": 42000
        },
        {
          "Date": "10/25/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 78,
          "Total": 5850
        },
        {
          "Date": "10/25/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "10/26/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 655,
          "Total": 39300
        },
        {
          "Date": "10/26/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 75,
          "Total": 5625
        },
        {
          "Date": "10/26/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "10/27/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 675,
          "Total": 40500
        },
        {
          "Date": "10/27/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 72,
          "Total": 5400
        },
        {
          "Date": "10/27/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "10/28/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 715,
          "Total": 42900
        },
        {
          "Date": "10/28/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 73,
          "Total": 5475
        },
        {
          "Date": "10/28/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "10/29/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 690,
          "Total": 41400
        },
        {
          "Date": "10/29/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 70,
          "Total": 5250
        },
        {
          "Date": "10/29/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "10/30/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 690,
          "Total": 41400
        },
        {
          "Date": "10/30/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 73,
          "Total": 5475
        },
        {
          "Date": "10/30/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "10/31/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 665,
          "Total": 39900
        },
        {
          "Date": "10/31/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 75,
          "Total": 5625
        },
        {
          "Date": "10/31/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "11/1/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 695,
          "Total": 41700
        },
        {
          "Date": "11/1/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 75,
          "Total": 5625
        },
        {
          "Date": "11/1/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "11/2/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 665,
          "Total": 39900
        },
        {
          "Date": "11/2/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 70,
          "Total": 5250
        },
        {
          "Date": "11/2/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "11/3/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 710,
          "Total": 42600
        },
        {
          "Date": "11/3/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 71,
          "Total": 5325
        },
        {
          "Date": "11/3/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "11/4/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 735,
          "Total": 44100
        },
        {
          "Date": "11/4/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 74,
          "Total": 5550
        },
        {
          "Date": "11/4/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "11/5/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 775,
          "Total": 46500
        },
        {
          "Date": "11/5/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 67,
          "Total": 5025
        },
        {
          "Date": "11/5/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "11/6/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 770,
          "Total": 46200
        },
        {
          "Date": "11/6/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 67,
          "Total": 5025
        },
        {
          "Date": "11/6/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "11/7/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 775,
          "Total": 46500
        },
        {
          "Date": "11/7/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 70,
          "Total": 5250
        },
        {
          "Date": "11/7/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "11/8/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 740,
          "Total": 44400
        },
        {
          "Date": "11/8/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 69,
          "Total": 5175
        },
        {
          "Date": "11/8/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "11/9/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 705,
          "Total": 42300
        },
        {
          "Date": "11/9/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 65,
          "Total": 4875
        },
        {
          "Date": "11/9/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "11/10/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 750,
          "Total": 45000
        },
        {
          "Date": "11/10/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 71,
          "Total": 5325
        },
        {
          "Date": "11/10/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "11/11/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 755,
          "Total": 45300
        },
        {
          "Date": "11/11/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 71,
          "Total": 5325
        },
        {
          "Date": "11/11/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "11/12/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 775,
          "Total": 46500
        },
        {
          "Date": "11/12/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 70,
          "Total": 5250
        },
        {
          "Date": "11/12/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "11/13/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 740,
          "Total": 44400
        },
        {
          "Date": "11/13/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 66,
          "Total": 4950
        },
        {
          "Date": "11/13/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "11/14/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 755,
          "Total": 45300
        },
        {
          "Date": "11/14/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 67,
          "Total": 5025
        },
        {
          "Date": "11/14/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "11/15/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 745,
          "Total": 44700
        },
        {
          "Date": "11/15/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 71,
          "Total": 5325
        },
        {
          "Date": "11/15/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "11/16/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 745,
          "Total": 44700
        },
        {
          "Date": "11/16/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 89,
          "Total": 6675
        },
        {
          "Date": "11/16/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "11/17/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 755,
          "Total": 45300
        },
        {
          "Date": "11/17/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 90,
          "Total": 6750
        },
        {
          "Date": "11/17/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "11/18/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 770,
          "Total": 46200
        },
        {
          "Date": "11/18/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 83,
          "Total": 6225
        },
        {
          "Date": "11/18/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "11/19/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 745,
          "Total": 44700
        },
        {
          "Date": "11/19/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 82,
          "Total": 6150
        },
        {
          "Date": "11/19/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "11/20/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 785,
          "Total": 47100
        },
        {
          "Date": "11/20/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 84,
          "Total": 6300
        },
        {
          "Date": "11/20/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "11/21/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 755,
          "Total": 45300
        },
        {
          "Date": "11/21/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 90,
          "Total": 6750
        },
        {
          "Date": "11/21/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "11/22/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 785,
          "Total": 47100
        },
        {
          "Date": "11/22/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 83,
          "Total": 6225
        },
        {
          "Date": "11/22/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "11/23/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 700,
          "Total": 42000
        },
        {
          "Date": "11/23/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 86,
          "Total": 6450
        },
        {
          "Date": "11/23/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "11/24/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 740,
          "Total": 44400
        },
        {
          "Date": "11/24/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 86,
          "Total": 6450
        },
        {
          "Date": "11/24/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 9,
          "Total": 1080
        },
        {
          "Date": "11/25/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 740,
          "Total": 44400
        },
        {
          "Date": "11/25/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 87,
          "Total": 6525
        },
        {
          "Date": "11/25/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "11/26/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 765,
          "Total": 45900
        },
        {
          "Date": "11/26/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 90,
          "Total": 6750
        },
        {
          "Date": "11/26/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "11/27/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 770,
          "Total": 46200
        },
        {
          "Date": "11/27/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 83,
          "Total": 6225
        },
        {
          "Date": "11/27/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 13,
          "Total": 1560
        },
        {
          "Date": "11/28/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 760,
          "Total": 45600
        },
        {
          "Date": "11/28/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 90,
          "Total": 6750
        },
        {
          "Date": "11/28/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "11/29/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 725,
          "Total": 43500
        },
        {
          "Date": "11/29/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 89,
          "Total": 6675
        },
        {
          "Date": "11/29/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "11/30/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 725,
          "Total": 43500
        },
        {
          "Date": "11/30/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 86,
          "Total": 6450
        },
        {
          "Date": "11/30/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "12/1/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 740,
          "Total": 44400
        },
        {
          "Date": "12/1/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 90,
          "Total": 6750
        },
        {
          "Date": "12/1/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "12/2/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 755,
          "Total": 45300
        },
        {
          "Date": "12/2/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 90,
          "Total": 6750
        },
        {
          "Date": "12/2/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "12/3/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 770,
          "Total": 46200
        },
        {
          "Date": "12/3/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 86,
          "Total": 6450
        },
        {
          "Date": "12/3/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "12/4/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 758,
          "Total": 45480
        },
        {
          "Date": "12/4/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 87,
          "Total": 6525
        },
        {
          "Date": "12/4/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "12/5/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 758,
          "Total": 45480
        },
        {
          "Date": "12/5/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 81,
          "Total": 6075
        },
        {
          "Date": "12/5/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "12/6/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 752,
          "Total": 45120
        },
        {
          "Date": "12/6/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 89,
          "Total": 6675
        },
        {
          "Date": "12/6/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "12/7/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 715,
          "Total": 42900
        },
        {
          "Date": "12/7/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 81,
          "Total": 6075
        },
        {
          "Date": "12/7/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "12/8/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 761,
          "Total": 45660
        },
        {
          "Date": "12/8/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 90,
          "Total": 6750
        },
        {
          "Date": "12/8/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "12/9/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 767,
          "Total": 46020
        },
        {
          "Date": "12/9/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 89,
          "Total": 6675
        },
        {
          "Date": "12/9/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "12/10/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 755,
          "Total": 45300
        },
        {
          "Date": "12/10/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 88,
          "Total": 6600
        },
        {
          "Date": "12/10/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 14,
          "Total": 1680
        },
        {
          "Date": "12/11/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 715,
          "Total": 42900
        },
        {
          "Date": "12/11/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 83,
          "Total": 6225
        },
        {
          "Date": "12/11/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "12/12/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 745,
          "Total": 44700
        },
        {
          "Date": "12/12/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 70,
          "Total": 5250
        },
        {
          "Date": "12/12/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "12/13/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 725,
          "Total": 43500
        },
        {
          "Date": "12/13/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 78,
          "Total": 5850
        },
        {
          "Date": "12/13/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "12/14/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 680,
          "Total": 40800
        },
        {
          "Date": "12/14/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 74,
          "Total": 5550
        },
        {
          "Date": "12/14/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 15,
          "Total": 1800
        },
        {
          "Date": "12/15/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 710,
          "Total": 42600
        },
        {
          "Date": "12/15/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 74,
          "Total": 5550
        },
        {
          "Date": "12/15/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "12/16/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 720,
          "Total": 43200
        },
        {
          "Date": "12/16/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 71,
          "Total": 5325
        },
        {
          "Date": "12/16/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "12/17/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 730,
          "Total": 43800
        },
        {
          "Date": "12/17/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 77,
          "Total": 5775
        },
        {
          "Date": "12/17/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 11,
          "Total": 1320
        },
        {
          "Date": "12/18/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 755,
          "Total": 45300
        },
        {
          "Date": "12/18/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 45,
          "Total": 3375
        },
        {
          "Date": "12/18/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 10,
          "Total": 1200
        },
        {
          "Date": "12/19/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 710,
          "Total": 42600
        },
        {
          "Date": "12/19/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 46,
          "Total": 3450
        },
        {
          "Date": "12/19/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 6,
          "Total": 720
        },
        {
          "Date": "12/20/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 635,
          "Total": 38100
        },
        {
          "Date": "12/20/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 44,
          "Total": 3300
        },
        {
          "Date": "12/20/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 26,
          "Total": 3120
        },
        {
          "Date": "12/21/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 600,
          "Total": 36000
        },
        {
          "Date": "12/21/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 49,
          "Total": 3675
        },
        {
          "Date": "12/21/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 19,
          "Total": 2280
        },
        {
          "Date": "12/22/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 645,
          "Total": 38700
        },
        {
          "Date": "12/22/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 25,
          "Total": 1875
        },
        {
          "Date": "12/22/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 16,
          "Total": 1920
        },
        {
          "Date": "12/23/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 610,
          "Total": 36600
        },
        {
          "Date": "12/23/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 27,
          "Total": 2025
        },
        {
          "Date": "12/23/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 20,
          "Total": 2400
        },
        {
          "Date": "12/24/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 620,
          "Total": 37200
        },
        {
          "Date": "12/24/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 27,
          "Total": 2025
        },
        {
          "Date": "12/24/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 25,
          "Total": 3000
        },
        {
          "Date": "12/25/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 559,
          "Total": 33540
        },
        {
          "Date": "12/25/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 0,
          "Total": 0
        },
        {
          "Date": "12/25/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 32,
          "Total": 3840
        },
        {
          "Date": "12/26/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 522,
          "Total": 31320
        },
        {
          "Date": "12/26/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 4,
          "Total": 300
        },
        {
          "Date": "12/26/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 22,
          "Total": 2640
        },
        {
          "Date": "12/27/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 515,
          "Total": 30900
        },
        {
          "Date": "12/27/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 10,
          "Total": 750
        },
        {
          "Date": "12/27/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 8,
          "Total": 960
        },
        {
          "Date": "12/28/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 482,
          "Total": 28920
        },
        {
          "Date": "12/28/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 2,
          "Total": 150
        },
        {
          "Date": "12/28/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "12/29/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 538,
          "Total": 32280
        },
        {
          "Date": "12/29/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 7,
          "Total": 525
        },
        {
          "Date": "12/29/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 7,
          "Total": 840
        },
        {
          "Date": "12/30/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 517,
          "Total": 31020
        },
        {
          "Date": "12/30/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 2,
          "Total": 150
        },
        {
          "Date": "12/30/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        },
        {
          "Date": "12/31/2019",
          "Product line": "FRESH",
          "Unit price": 60,
          "Quantity": 535,
          "Total": 32100
        },
        {
          "Date": "12/31/2019",
          "Product line": "MALA",
          "Unit price": 75,
          "Quantity": 4,
          "Total": 300
        },
        {
          "Date": "12/31/2019",
          "Product line": "YORGURT",
          "Unit price": 120,
          "Quantity": 12,
          "Total": 1440
        }
       ]
    var weeklyData = [];
    var dailyData = [];
    
    var firstDay = new Date(data[0]["Date"]);
    firstDay = am4core.time.round(firstDay, "year", 1);
    var total = 0;
    
    // PREPARE DATA
    function prepareDistanceData(data) {
      for (var i = 0; i < 7; i++) {
        dailyData.push({ day: chart.dateFormatter.language.translate(chart.dateFormatter.weekdaysShort[i]) });
      }
    
      for (var i = 0; i < 53; i++) {
        weeklyData[i] = {};
        weeklyData[i].distance = 0;
        var date = new Date(firstDay);
        date.setDate(i * 7);
        am4core.time.round(date, "week", 1);
        var endDate = am4core.time.round(new Date(date), "week", 1);
    
        weeklyData[i].date = date;
        weeklyData[i].endDate = endDate;
      }
    
      am4core.array.each(data, function(di) {
        var date = new Date(di["Date"])
        var weekDay = date.getDay();
        var weekNumber = am4core.utils.getWeek(date);
    
        if (weekNumber == 1 && date.getMonth() == 11) {
          weekNumber = 53;
        }
    
        var distance = am4core.math.round(di["Quantity"] , 1);
    
        weeklyData[weekNumber - 1].distance += distance;
        weeklyData[weekNumber - 1].distance = am4core.math.round(weeklyData[weekNumber - 1].distance, 1);
        total += distance;
    
        dailyData.push({ date: date, day: chart.dateFormatter.language.translate(chart.dateFormatter.weekdaysShort[weekDay]), distance: distance, title: di["Activity Name"] });
      })
    }
    
    
    // CHART
    var chart = am4core.create("mydiv3", am4charts.RadarChart);
    prepareDistanceData(data);
    
    chart.innerRadius = am4core.percent(10);
    chart.radius = am4core.percent(95);
    chart.data = weeklyData;
    chart.fontSize = "11px";
    chart.startAngle = 95;
    chart.endAngle = chart.startAngle + 350;
    
    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.baseInterval = { timeUnit: "week", count: 1 };
    dateAxis.renderer.innerRadius = am4core.percent(40);
    dateAxis.renderer.minGridDistance = 5;
    dateAxis.renderer.labels.template.relativeRotation = 0;
    dateAxis.renderer.labels.template.location = 0.5;
    dateAxis.renderer.labels.template.radius = am4core.percent(-57);
    dateAxis.renderer.labels.template.fontSize = "8px";
    dateAxis.dateFormats.setKey("week", "w");
    dateAxis.periodChangeDateFormats.setKey("week", "w");
    dateAxis.cursorTooltipEnabled = false;
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.inversed = true;
    valueAxis.renderer.radius = am4core.percent(40);
    valueAxis.renderer.minGridDistance = 15;
    valueAxis.renderer.minLabelPosition = 0.05;
    valueAxis.renderer.axisAngle = 90;
    valueAxis.cursorTooltipEnabled = false;
    valueAxis.renderer.labels.template.fill = am4core.color("#ffffff");
    
    // Create series
    var columnSeries = chart.series.push(new am4charts.RadarColumnSeries());
    columnSeries.dataFields.dateX = "date";
    columnSeries.dataFields.valueY = "distance";
    columnSeries.columns.template.strokeOpacity = 0;
    columnSeries.columns.template.width = am4core.percent(95);
    columnSeries.fill = am4core.color("#00ff00");
    columnSeries.fillOpacity = 0.6;
    columnSeries.tooltip.fontSize = 10;
    columnSeries.tooltip.pointerOrientation = "down";
    columnSeries.tooltip.background.fillOpacity = 0.5;
    columnSeries.columns.template.tooltipText = "[bold]{date} - {endDate}\n[font-size:13px]Total {valueY} litres";
    columnSeries.cursorTooltipEnabled = false;
    
    // weekday axis
    var weekDayAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    weekDayAxis.dataFields.category = "day";
    weekDayAxis.data = dailyData;
    weekDayAxis.renderer.innerRadius = am4core.percent(50);
    weekDayAxis.renderer.minGridDistance = 10;
    weekDayAxis.renderer.grid.template.location = 0;
    weekDayAxis.renderer.line.disabled = true;
    weekDayAxis.renderer.axisAngle = 90;
    weekDayAxis.cursorTooltipEnabled = false;
    weekDayAxis.renderer.labels.template.fill = am4core.color("#ffffff");
    
    // bubble series
    var bubbleSeries = chart.series.push(new am4charts.RadarSeries())
    bubbleSeries.dataFields.dateX = "date";
    bubbleSeries.dataFields.categoryY = "day";
    bubbleSeries.dataFields.value = "distance";
    bubbleSeries.yAxis = weekDayAxis;
    bubbleSeries.data = dailyData;
    bubbleSeries.strokeOpacity = 0;
    bubbleSeries.maskBullets = false;
    bubbleSeries.cursorTooltipEnabled = false;
    bubbleSeries.tooltip.fontSize = 10;
    bubbleSeries.tooltip.pointerOrientation = "down";
    bubbleSeries.tooltip.background.fillOpacity = 0.4;
    
    var bubbleBullet = bubbleSeries.bullets.push(new am4charts.CircleBullet())
    bubbleBullet.locationX = 0.5;
    bubbleBullet.stroke = am4core.color("#b9ce37");
    bubbleBullet.fill = am4core.color("#b9cF37");
    bubbleBullet.tooltipText = "[bold]{date}, {value} litres\n[font-size:13px]{title}";
    bubbleBullet.adapter.add("tooltipY", function(tooltipY, target) {
      return -target.circle.radius;
    })
    
    bubbleSeries.heatRules.push({ target: bubbleBullet.circle, min: 1, max: 8, dataField: "value", property: "radius" });
    bubbleSeries.dataItems.template.locations.categoryY = 0.5;
    
    // add month ranges
    for (var i = 0; i < 13; i++) {
      var range = dateAxis.axisRanges.create();
      range.date = new Date(firstDay.getFullYear(), i, 0, 0, 0, 0);
      range.endDate = new Date(firstDay.getFullYear(), i + 1, 0, 0, 0, 0);
      if (i % 2) {
        range.axisFill.fillOpacity = 0.4;
      }
      else {
        range.axisFill.fillOpacity = 0.8;
      }
      range.axisFill.radius = -28;
      range.axisFill.adapter.add("innerRadius", function(innerRadius, target) {
        return dateAxis.renderer.pixelRadius + 7;
      })
      range.axisFill.fill = am4core.color("#b9ce37");
      range.axisFill.stroke = am4core.color("#5f6062");
      range.grid.disabled = true;
      range.label.text = chart.dateFormatter.language.translate(chart.dateFormatter.months[i])
      range.label.bent = true;
      range.label.radius = 10;
      range.label.fontSize = 10;
      range.label.paddingBottom = 5;
      range.label.interactionsEnabled = false;
      range.axisFill.interactionsEnabled = true;
      range.axisFill.cursorOverStyle = am4core.MouseCursorStyle.pointer;
      range.axisFill.events.on("hit", function(event) {
        if (dateAxis.start == 0 && dateAxis.end == 1) {
          dateAxis.zoomToDates(event.target.dataItem.date, event.target.dataItem.endDate);
        }
        else {
          dateAxis.zoom({ start: 0, end: 1 });
        }
      })
    }
    
    chart.cursor = new am4charts.RadarCursor();
    chart.cursor.innerRadius = am4core.percent(40);
    chart.cursor.lineY.disabled = true;
    
    
    var label = chart.radarContainer.createChild(am4core.Label);
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fill = am4core.color("#ffffff");
    label.fontSize = 12;
    label.fontWeight = "bold";
    label.text = "WEEKLY\nTOTALS";
    
    var title = chart.createChild(am4core.Label);
    title.fill = am4core.color("#b9ce37");
    title.fontSize = 20;
    title.isMeasured = false;
    title.valign = "top";
    title.align = "left";
    title.wrap = true;
    title.width = 200;
    title.text = "[bold]IN " + firstDay.getFullYear() + "\nJAYSON SOLD " + Math.round(total) + " LTRES OF MILK.\n[font-size:11; #ffffff]Each circle represents a bike ride. Size represents distance.";
    
    var link = chart.createChild(am4core.TextLink);
    link.fill = am4core.color("#ffffff");
    link.fontSize = 13;
    link.url = "https://www.instagram.com/brian_devine/";
    link.valign = "bottom";
    link.align = "right";
    link.marginRight = 10;
    link.text = "Chart design inspired by Nick Bor";
    
    }); // end am4core.ready()