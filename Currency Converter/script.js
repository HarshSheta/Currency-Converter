const populate = async (value, currency) => {

    let myStr = ""

    // url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_YllHT6FnpVtLhX87Tbnah8kKJ7wyzjW7BYSyBUg2&base_currncy=" + currency
    // let response = await fetch(url)
    // let rJson = await response.json()

    let rJson = JSON.parse(`{
        "meta": {
        "last_updated_at": "2023-12-01T23:59:59Z"
        },
        "data": {
        "ADA": {
        "code": "ADA",
        "value": 0.0312568141
        },
        "AED": {
        "code": "AED",
        "value": 0.0440993674
        },
        "AFN": {
        "code": "AFN",
        "value": 0.8389342318
        },
        "ALL": {
        "code": "ALL",
        "value": 1.1106289111
        },
        "AMD": {
        "code": "AMD",
        "value": 4.8102355315
        },
        "ANG": {
        "code": "ANG",
        "value": 0.0214655441
        },
        "AOA": {
        "code": "AOA",
        "value": 9.8840855389
        },
        "ARB": {
        "code": "ARB",
        "value": 0.0116387954
        },
        "ARS": {
        "code": "ARS",
        "value": 4.3383538699
        },
        "AUD": {
        "code": "AUD",
        "value": 0.0179999876
        },
        "AVAX": {
        "code": "AVAX",
        "value": 0.0005496626
        },
        "AWG": {
        "code": "AWG",
        "value": 0.0215057887
        },
        "AZN": {
        "code": "AZN",
        "value": 0.020424492
        },
        "BAM": {
        "code": "BAM",
        "value": 0.0216303804
        },
        "BBD": {
        "code": "BBD",
        "value": 0.0240288142
        },
        "BDT": {
        "code": "BDT",
        "value": 1.3229899512
        },
        "BGN": {
        "code": "BGN",
        "value": 0.0214252948
        },
        "BHD": {
        "code": "BHD",
        "value": 0.0045174171
        },
        "BIF": {
        "code": "BIF",
        "value": 34.183023425
        },
        "BMD": {
        "code": "BMD",
        "value": 0.0120144071
        },
        "BNB": {
        "code": "BNB",
        "value": 0.0000509948
        },
        "BND": {
        "code": "BND",
        "value": 0.0160123241
        },
        "BOB": {
        "code": "BOB",
        "value": 0.0830039441
        },
        "BRL": {
        "code": "BRL",
        "value": 0.0586226238
        },
        "BSD": {
        "code": "BSD",
        "value": 0.0120144071
        },
        "BTC": {
        "code": "BTC",
        "value": 3.103e-7
        },
        "BTN": {
        "code": "BTN",
        "value": 0.9967003706
        },
        "BUSD": {
        "code": "BUSD",
        "value": 0.0120100579
        },
        "BWP": {
        "code": "BWP",
        "value": 0.1622702095
        },
        "BYN": {
        "code": "BYN",
        "value": 0.0395871802
        },
        "BYR": {
        "code": "BYR",
        "value": 395.8715224416
        },
        "BZD": {
        "code": "BZD",
        "value": 0.0240288142
        },
        "CAD": {
        "code": "CAD",
        "value": 0.0162170488
        },
        "CDF": {
        "code": "CDF",
        "value": 31.8546254679
        },
        "CHF": {
        "code": "CHF",
        "value": 0.0104452073
        },
        "CLF": {
        "code": "CLF",
        "value": 0.0002760911
        },
        "CLP": {
        "code": "CLP",
        "value": 10.2489407704
        },
        "CNY": {
        "code": "CNY",
        "value": 0.0857634136
        },
        "COP": {
        "code": "COP",
        "value": 47.650043405
        },
        "CRC": {
        "code": "CRC",
        "value": 6.3707794827
        },
        "CUC": {
        "code": "CUC",
        "value": 0.0120144071
        },
        "CUP": {
        "code": "CUP",
        "value": 0.2883457701
        },
        "CVE": {
        "code": "CVE",
        "value": 1.2176461753
        },
        "CZK": {
        "code": "CZK",
        "value": 0.2674939545
        },
        "DAI": {
        "code": "DAI",
        "value": 0.012017851
        },
        "DJF": {
        "code": "DJF",
        "value": 2.1352124419
        },
        "DKK": {
        "code": "DKK",
        "value": 0.0823069918
        },
        "DOP": {
        "code": "DOP",
        "value": 0.6824256611
        },
        "DOT": {
        "code": "DOT",
        "value": 0.0021973192
        },
        "DZD": {
        "code": "DZD",
        "value": 1.6233926704
        },
        "EGP": {
        "code": "EGP",
        "value": 0.3712881291
        },
        "ERN": {
        "code": "ERN",
        "value": 0.1802161063
        },
        "ETB": {
        "code": "ETB",
        "value": 0.6721040594
        },
        "ETH": {
        "code": "ETH",
        "value": 0.0000057504
        },
        "EUR": {
        "code": "EUR",
        "value": 0.0110401602
        },
        "FJD": {
        "code": "FJD",
        "value": 0.0266963771
        },
        "FKP": {
        "code": "FKP",
        "value": 0.0094598536
        },
        "GBP": {
        "code": "GBP",
        "value": 0.0094546192
        },
        "GEL": {
        "code": "GEL",
        "value": 0.0323594897
        },
        "GGP": {
        "code": "GGP",
        "value": 0.009459855
        },
        "GHS": {
        "code": "GHS",
        "value": 0.1437382248
        },
        "GIP": {
        "code": "GIP",
        "value": 0.0094598534
        },
        "GMD": {
        "code": "GMD",
        "value": 0.7003451557
        },
        "GNF": {
        "code": "GNF",
        "value": 102.7787251783
        },
        "GTQ": {
        "code": "GTQ",
        "value": 0.0939574802
        },
        "GYD": {
        "code": "GYD",
        "value": 2.5137375785
        },
        "HKD": {
        "code": "HKD",
        "value": 0.0938706166
        },
        "HNL": {
        "code": "HNL",
        "value": 0.2963759988
        },
        "HRK": {
        "code": "HRK",
        "value": 0.0846194006
        },
        "HTG": {
        "code": "HTG",
        "value": 1.6037837225
        },
        "HUF": {
        "code": "HUF",
        "value": 4.174816575
        },
        "IDR": {
        "code": "IDR",
        "value": 185.8425946964
        },
        "ILS": {
        "code": "ILS",
        "value": 0.044538854
        },
        "IMP": {
        "code": "IMP",
        "value": 0.0094598546
        },
        "INR": {
        "code": "INR",
        "value": 1
        },
        "IQD": {
        "code": "IQD",
        "value": 15.7051281606
        },
        "IRR": {
        "code": "IRR",
        "value": 504.6280359273
        },
        "ISK": {
        "code": "ISK",
        "value": 1.6679241045
        },
        "JEP": {
        "code": "JEP",
        "value": 0.0094598475
        },
        "JMD": {
        "code": "JMD",
        "value": 1.8823935106
        },
        "JOD": {
        "code": "JOD",
        "value": 0.008530229
        },
        "JPY": {
        "code": "JPY",
        "value": 1.7642861091
        },
        "KES": {
        "code": "KES",
        "value": 1.8406270312
        },
        "KGS": {
        "code": "KGS",
        "value": 1.0671186491
        },
        "KHR": {
        "code": "KHR",
        "value": 49.3309888509
        },
        "KMF": {
        "code": "KMF",
        "value": 5.44668496
        },
        "KPW": {
        "code": "KPW",
        "value": 10.8131333376
        },
        "KRW": {
        "code": "KRW",
        "value": 15.5305014671
        },
        "KWD": {
        "code": "KWD",
        "value": 0.0036859003
        },
        "KYD": {
        "code": "KYD",
        "value": 0.0100119659
        },
        "KZT": {
        "code": "KZT",
        "value": 5.5354079929
        },
        "LAK": {
        "code": "LAK",
        "value": 248.9940191191
        },
        "LBP": {
        "code": "LBP",
        "value": 180.356059583
        },
        "LKR": {
        "code": "LKR",
        "value": 3.916269671
        },
        "LRD": {
        "code": "LRD",
        "value": 2.2606364356
        },
        "LSL": {
        "code": "LSL",
        "value": 0.2247986075
        },
        "LTC": {
        "code": "LTC",
        "value": 0.0001677668
        },
        "LTL": {
        "code": "LTL",
        "value": 0.0381023085
        },
        "LVL": {
        "code": "LVL",
        "value": 0.0077555322
        },
        "LYD": {
        "code": "LYD",
        "value": 0.0576158216
        },
        "MAD": {
        "code": "MAD",
        "value": 0.1211150994
        },
        "MATIC": {
        "code": "MATIC",
        "value": 0.0150071047
        },
        "MDL": {
        "code": "MDL",
        "value": 0.2117341252
        },
        "MGA": {
        "code": "MGA",
        "value": 54.2263267317
        },
        "MKD": {
        "code": "MKD",
        "value": 0.6796574236
        },
        "MMK": {
        "code": "MMK",
        "value": 25.1731142018
        },
        "MNT": {
        "code": "MNT",
        "value": 41.3169640214
        },
        "MOP": {
        "code": "MOP",
        "value": 0.0962266434
        },
        "MRO": {
        "code": "MRO",
        "value": 4.2891412636
        },
        "MUR": {
        "code": "MUR",
        "value": 0.5309715157
        },
        "MVR": {
        "code": "MVR",
        "value": 0.1856969949
        },
        "MWK": {
        "code": "MWK",
        "value": 20.2272893776
        },
        "MXN": {
        "code": "MXN",
        "value": 0.2062722607
        },
        "MYR": {
        "code": "MYR",
        "value": 0.0561277164
        },
        "MZN": {
        "code": "MZN",
        "value": 0.7651322235
        },
        "NAD": {
        "code": "NAD",
        "value": 0.223294391
        },
        "NGN": {
        "code": "NGN",
        "value": 9.47356483
        },
        "NIO": {
        "code": "NIO",
        "value": 0.4417141792
        },
        "NOK": {
        "code": "NOK",
        "value": 0.1281560113
        },
        "NPR": {
        "code": "NPR",
        "value": 1.5922206691
        },
        "NZD": {
        "code": "NZD",
        "value": 0.01934476
        },
        "OMR": {
        "code": "OMR",
        "value": 0.004614494
        },
        "OP": {
        "code": "OP",
        "value": 0.0072446815
        },
        "PAB": {
        "code": "PAB",
        "value": 0.0120004724
        },
        "PEN": {
        "code": "PEN",
        "value": 0.0448976055
        },
        "PGK": {
        "code": "PGK",
        "value": 0.0448738158
        },
        "PHP": {
        "code": "PHP",
        "value": 0.666345187
        },
        "PKR": {
        "code": "PKR",
        "value": 3.4230578834
        },
        "PLN": {
        "code": "PLN",
        "value": 0.0476972025
        },
        "PYG": {
        "code": "PYG",
        "value": 89.4325360022
        },
        "QAR": {
        "code": "QAR",
        "value": 0.0437378568
        },
        "RON": {
        "code": "RON",
        "value": 0.0547567512
        },
        "RSD": {
        "code": "RSD",
        "value": 1.288981594
        },
        "RUB": {
        "code": "RUB",
        "value": 1.0881551805
        },
        "RWF": {
        "code": "RWF",
        "value": 14.9481878877
        },
        "SAR": {
        "code": "SAR",
        "value": 0.0450029721
        },
        "SBD": {
        "code": "SBD",
        "value": 0.1018170589
        },
        "SCR": {
        "code": "SCR",
        "value": 0.1738588317
        },
        "SDG": {
        "code": "SDG",
        "value": 7.2266658628
        },
        "SEK": {
        "code": "SEK",
        "value": 0.1246983848
        },
        "SGD": {
        "code": "SGD",
        "value": 0.0160222954
        },
        "SHP": {
        "code": "SHP",
        "value": 0.0094546187
        },
        "SLL": {
        "code": "SLL",
        "value": 272.4642720483
        },
        "SOL": {
        "code": "SOL",
        "value": 0.0002008823
        },
        "SOS": {
        "code": "SOS",
        "value": 6.8621603345
        },
        "SRD": {
        "code": "SRD",
        "value": 0.4529659414
        },
        "STD": {
        "code": "STD",
        "value": 270.3126001136
        },
        "SVC": {
        "code": "SVC",
        "value": 0.105126062
        },
        "SYP": {
        "code": "SYP",
        "value": 156.2098217862
        },
        "SZL": {
        "code": "SZL",
        "value": 0.2235099316
        },
        "THB": {
        "code": "THB",
        "value": 0.4190710083
        },
        "TJS": {
        "code": "TJS",
        "value": 0.1309469694
        },
        "TMT": {
        "code": "TMT",
        "value": 0.0420504248
        },
        "TND": {
        "code": "TND",
        "value": 0.0374027783
        },
        "TOP": {
        "code": "TOP",
        "value": 0.0280015015
        },
        "TRY": {
        "code": "TRY",
        "value": 0.346746662
        },
        "TTD": {
        "code": "TTD",
        "value": 0.0806488831
        },
        "TWD": {
        "code": "TWD",
        "value": 0.3762121207
        },
        "TZS": {
        "code": "TZS",
        "value": 30.1861626816
        },
        "UAH": {
        "code": "UAH",
        "value": 0.44093206
        },
        "UGX": {
        "code": "UGX",
        "value": 45.8778650174
        },
        "USD": {
        "code": "USD",
        "value": 0.0120144071
        },
        "USDC": {
        "code": "USDC",
        "value": 0.0120145405
        },
        "USDT": {
        "code": "USDT",
        "value": 0.0120076695
        },
        "UYU": {
        "code": "UYU",
        "value": 0.4705392701
        },
        "UZS": {
        "code": "UZS",
        "value": 147.8802609039
        },
        "VEF": {
        "code": "VEF",
        "value": 42642.5618518232
        },
        "VND": {
        "code": "VND",
        "value": 291.7735178153
        },
        "VUV": {
        "code": "VUV",
        "value": 1.4287312126
        },
        "WST": {
        "code": "WST",
        "value": 0.0323365127
        },
        "XAF": {
        "code": "XAF",
        "value": 7.2416512253
        },
        "XAG": {
        "code": "XAG",
        "value": 0.0004718415
        },
        "XAU": {
        "code": "XAU",
        "value": 0.0000057993
        },
        "XCD": {
        "code": "XCD",
        "value": 0.0324388991
        },
        "XDR": {
        "code": "XDR",
        "value": 0.00895518
        },
        "XOF": {
        "code": "XOF",
        "value": 7.2416515959
        },
        "XPD": {
        "code": "XPD",
        "value": 0.0000118986
        },
        "XPF": {
        "code": "XPF",
        "value": 1.3165890891
        },
        "XPT": {
        "code": "XPT",
        "value": 0.000012901
        },
        "XRP": {
        "code": "XRP",
        "value": 0.0195969045
        },
        "YER": {
        "code": "YER",
        "value": 3.0018907868
        },
        "ZAR": {
        "code": "ZAR",
        "value": 0.2238730203
        },
        "ZMK": {
        "code": "ZMK",
        "value": 108.1440810713
        },
        "ZMW": {
        "code": "ZMW",
        "value": 0.2873742035
        },
        "ZWL": {
        "code": "ZWL",
        "value": 69.3989095018
        }
        }
        }`)

    document.querySelector(".output").style.display = "block"

    for (let key of Object.keys(rJson["data"])) {
        myStr += `<tr>
                    <td>${key}</td>
                    <td>${rJson["data"][key]["code"]}</td>
                    <td>${rJson["data"][key]["value"] * value}</td>
                 </tr>`
    }

    const tableBody = document.querySelector("tbody");
    tableBody.innerHTML = myStr
}

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='quantity']").value);
    const currency = document.querySelector("select[name='currency']").value;
    populate(value, currency)
})