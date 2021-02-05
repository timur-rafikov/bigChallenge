/* 
    +++ - 3
    ++  - 2
    +   - 1
    +-  - 0
    --  - -1
*/

var illness = [
    {
        name: "Грипп",       // название болезни - Грипп
        temperature: 3,      // температура - 3 балла (симптом сильно выражен)
        headache: 2,         // боль в голове - 2 балла (симптом выражен умеренно)
        musclePain: 3,       // боль в мышцах/миалгия - 3 балла (симптом сильно выражен)
        intoxication: 3,     // нарушение сознания, восприятия/интоксикация - 3 балла (симптом сильно выражен)
        weakness: 2,         // слабость/вялость - 2 балла (симптом выражен умеренно)
        soarThroat: 0,       // боль в горле - 0 баллов (симптом редко проявляется)
        snot: 0,             // ринорея/сопли - 0 баллов (симптом редко проявляется)
        cough: 2,            // кашель - 2 балла (симптом выражен умеренно)
        painInTheEyes: 0     // боль в глазах - 0 баллов (симптом редко проявляется)
    },
    
    {
        name: "Парагрипп",
        temperature: 1,
        headache: -1,
        musclePain: -1,
        intoxication: 1,
        weakness: 0,
        soarThroat: 2,
        snot: -1,
        cough: 1,
        painInTheEyes: -1
    },

    {
        name: "Аденовирусная инфекция",
        temperature: 3,
        headache: 0,
        musclePain: -1,
        intoxication: 1,
        weakness: 0,
        soarThroat: 2,
        snot: 3,
        cough: 1,
        painInTheEyes: -1
    },

    {
        name: "Респираторно-синцитиальная инфекция",
        temperature: 1,
        headache: 0,
        musclePain: 0,
        intoxication: 2,
        weakness: 0,
        soarThroat: 0,
        snot: 0,
        cough: 2,
        painInTheEyes: -1
    },

    {
        name: "Риновирусная инфекция",
        temperature: 1,
        headache: -1,
        musclePain: -1,
        intoxication: -1,
        weakness: 0,
        soarThroat: 1,
        snot: 3,
        cough: 1,
        painInTheEyes: -1
    },

    {
        name: "Коронавирус",
        temperature: 1,
        headache: 0,
        musclePain: 1,
        intoxication: 1,
        weakness: 3,
        soarThroat: 1,
        snot: 1,
        cough: 2,
        painInTheEyes: -1
    }
]

//var symptoms = ["Температура", "Головная боль", "Миалгия/артралгия (боль в мышцах)", "Интоксикация (нарушение сознания, восприятия)", "Слабость", "Боль в горле", "Ринорея (обильные слизистые (водянистые) выделения из полости носа)", "Кашель", "Боль в глазах"];

var userSymptoms = {
    temperature: undefined,
    headache: undefined,
    musclePain: undefined,
    intoxication: undefined,
    weakness: undefined,
    soarThroat: undefined,
    snot: undefined,
    cough: undefined,
    painInTheEyes: undefined,
    verdict: undefined
}

function Input() {
    userSymptoms.temperature = prompt("Enter temperature: ");
    userSymptoms.headache = prompt("Enter headache: ");
    userSymptoms.musclePain = prompt("Enter musclePain: ");
    userSymptoms.intoxication = prompt("Enter intoxication: ");
    userSymptoms.weakness = prompt("Enter weakness: ");
    userSymptoms.soarThroat = prompt("Enter soarThroat: ");
    userSymptoms.snot = prompt("Enter snot: ");
    userSymptoms.cough = prompt("Enter cough: ");
    userSymptoms.painInTheEyes = prompt("Enter painInTheEyes: ");

    process();
    return 0;
}

var variousStr = "Грипп Парагрипп Аденовирусная инфекция Респираторно-синцитиальная инфекция Риновирусная инфекция Коронавирус ";

// так как данные могут быть неточными, сделаем точность до 1

function process() {
    for (let i = 0; i < 6; ++i) {
        if (Math.abs(illness[i].temperature - userSymptoms.temperature) > 1 || Math.abs(illness[i].headache - userSymptoms.headache) > 1 || Math.abs(illness[i].musclePain - userSymptoms.musclePain) > 1 || Math.abs(illness[i].intoxication - userSymptoms.intoxication) > 1 || Math.abs(illness[i].weakness - userSymptoms.weakness) > 1 || Math.abs(illness[i].soarThroat - userSymptoms.soarThroat) > 1 || Math.abs(illness[i].snot - userSymptoms.snot) > 1 || Math.abs(illness[i].cough - userSymptoms.cough) > 1 || Math.abs(illness[i].painInTheEyes - userSymptoms.painInTheEyes) > 1) variousStr = variousStr.replace(illness[i].name + " ", "");
    }
    console.log(variousStr);
    return 0;
}

Input()
alert(variousStr);
