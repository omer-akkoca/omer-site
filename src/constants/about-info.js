const birtday = new Date("2000-04-17");
const currentTime = Date.now();
const age = Math.floor((currentTime-birtday) / (86400000 * 365));


const primary_school = [
    {
        id: 1,
        year : "2006 - 2014",
        school : "İkbaliye İlkokul ve Ortaokulu"
    }
]

const high_school = [
    {   
        id: 1,
        year : "2014 - 2016",
        school : "Madenler Mesleki ve Teknik Anadolu Lisesi"
    },
    {
        id: 2,
        year : "2016 - 2017",
        school : "Yakacık Mesleki ve Teknik Anadolu Lisesi"
    },
    {
        id: 3,
        year : "2017 - 2018",
        school : "Açık Öğretim Mezunu"
    }
]

const university = [
    {
        id: "university",
        year : "2018 - 2021",
        school : "Karadeniz Teknik Üniversitesi"
    }
]

export const about_text  = {
    personal_info : `Merhaba ben Ömer Akkoca. 2000 yılında Nisan ayının 17. gününde dünyaya geldim. Şuan ${age} yaşındayım. ${age} yıllık yaşamımda eğitim hayatımı aşağıda göreceksiniz. Senin için önemli olan nokta benim ne yaptığım. Evet ben bir yazılım mühendisiyim. Üniversiteye başladığımdan beri ve lise hayatımda hep web üzerine ilerlemek istemiştim. Şuanda da bu kişisel sitem ile de karşınızdayım.`,
    schools : [
        {
            id: 1,
            text : "İlk ve Ortaokul",
            icon : "fas fa-school",
            info : primary_school
        },
        {
            id: 2,
            text : "Lise",
            icon : "fas fa-graduation-cap",
            info : high_school
        },
        {
            id: 3,
            text : "Üniversite",
            icon : "fas fa-university",
            info : university
        } 
    ]
}