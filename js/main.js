function AgeGate() {
    var errorMessage = document.getElementById("errorMessage");
    var error_minor = '<span style="color: red"><i class="icon-exclamation-sign"></i> Só para maiores de 18 anos. You need to be over 18 y.o.</span>'
    var error_wrongformat = '<span style="color: red"><i class="icon-exclamation-sign"></i> Introduza a data no formato correcto. Enter date in the correct format.</span>'
    var confirmed = '<span style="color: green"><i class="icon-ok-sign"></i> Idade confirmada. Age confirmed.</span>'
    var download_url = '//barahonapossollo.com/downloads/BGD_catalogo_2020.pdf'
    // get the date from the datepicker.
    var dateString = document.getElementById("datepicker").value;
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

    // check whether valid dd/MM/yyyy Date Format.
    if (regex.test(dateString)) {
        var parts = dateString.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var dtCurrent = new Date();
        errorMessage.innerHTML = error_minor
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
            return false;
        }
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {
            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }
            if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                if (dtCurrent.getDate() < dtDOB.getDate()) {
                    return false;
                }
            }
        }
        errorMessage.innerHTML = confirmed
        window.open(download_url)
        return true;
    } else {
        errorMessage.innerHTML = error_wrongformat
        return false;
    }
}
$("#datepicker").datepicker( {
    format: "dd/mm/yyyy",
    startView: "months", 
    minViewMode: "days"
});
function formSubmit() {
    document.getElementById("contact").submit();
}
jQuery(function($) {

    $.supersized({

        // functionality
        slide_interval: 3000, // length between transitions
        transition: 1, // 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
        transition_speed: 700, // speed of transition
        random: 1,
        image_protect: 1,
        vertical_center: 0,
        fit_width: 1,

        // components
        slide_links: 'blank', // individual links for each slide (Options: false, 'num', 'name', 'blank')
        slides: [ // slideshow Images
            {
                image: 'img/front/001.jpg',
                title: 'The Mighty Horned One, the Monkeys Moth and Barahona, plus the Infernal Dog'
            },
            {
                image: 'img/front/002.jpg',
                title: 'Y'
            },
            {
                image: 'img/front/003.jpg',
                title: 'Theseus'
            },
            {
                image: 'img/front/004.jpg',
                title: 'Venus and Vulcan'
            },
            {
                image: 'img/front/005.jpg',
                title: 'Saint Dismas'
            },
            {
                image: 'img/front/006.jpg',
                title: 'Hercules\' Hubris'
            },
            {
                image: 'img/front/007.jpg',
                title: 'Alois Senefelder'
            },
            {
                image: 'img/front/008.jpg',
                title: 'Hecate and her dogs'
            },
            {
                image: 'img/front/009.jpg',
                title: 'Bacchus'
            },
            {
                image: 'img/front/010.jpg',
                title: 'The Chain'
            },
            {
                image: 'img/front/011.jpg',
                title: 'The Witch'
            },
            {
                image: 'img/front/012.jpg',
                title: 'Mary Magdalen'
            },
            {
                image: 'img/front/013.jpg',
                title: 'Pelops and Poseidon'
            },
            {
                image: 'img/front/014.jpg',
                title: 'Temperance'
            },
            {
                image: 'img/front/015.jpg',
                title: 'Classic nocturnal landscape'
            },
            {
                image: 'img/front/016.jpg',
                title: 'The Wiseman'
            },
            {
                image: 'img/front/017.jpg',
                title: 'The Lamp'
            },
            {
                image: 'img/front/018.jpg',
                title: 'Mars chasing Cupid'
            },
            {
                image: 'img/front/019.jpg',
                title: 'King Sebastian as Ecce Homo'
            },
            {
                image: 'img/front/020.jpg',
                title: 'Autumn Faun'
            },
            {
                image: 'img/front/021.jpg',
                title: 'Egyptian Still Life'
            },
            {
                image: 'img/front/022.jpg',
                title: 'Night and her Sons'
            },
            {
                image: 'img/front/023.jpg',
                title: 'Antechamber'
            },
            {
                image: 'img/front/024.jpg',
                title: 'Refuge'
            },
            {
                image: 'img/front/025.jpg',
                title: 'The Lost Sphynx'
            },
            {
                image: 'img/front/026.jpg',
                title: 'The Ninth Circle II'
            },
            {
                image: 'img/front/E1.jpg',
                title: 'Acid'
            },
            {
                image: 'img/front/E37.jpg',
                title: 'Earth'
            },
            {
                image: 'img/front/E41.jpg',
                title: 'Faun with Pumpkin'
            },
            {
                image: 'img/front/E42.jpg',
                title: 'Beekeeping Faun'
            },
            {
                image: 'img/front/E43.jpg',
                title: 'Pinnacle'
            },
            {
                image: 'img/front/M68.jpg',
                title: 'Amorino Perduto'
            },
            {
                image: 'img/front/M87.jpg',
                title: 'Mater'
            },
            {
                image: 'img/front/V1.jpg',
                title: 'Bacino in Oro'
            },
            {
                image: 'img/front/V13.jpg',
                title: 'Piazzetta di Notte'
            },
            {
                image: 'img/front/V15.jpg',
                title: 'San Giorgio al Crepuscolo'
            },
            {
                image: 'img/front/V17.jpg',
                title: 'Redentore in Oro'
            },
            {
                image: 'img/front/V27.jpg',
                title: 'Zattere al Crepuscolo'
            },
            {
                image: 'img/front/V8.jpg',
                title: 'Madonna dell\'Orto'
            },
            {
                image: 'img/front/X95.jpg',
                title: 'Horizon'
            },
            {
                image: 'img/front/X99.jpg',
                title: 'Coach'
            }
        ]
    });
});
document.title = document.title + ' ' + new Date().getFullYear();
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-43847216-1', 'barahonapossollo.com');
ga('send', 'pageview');

