var x = false
var solar_escolhido = "nenhum"

function restartcolor() {
    if (x != true) {

        var imgsignos = document.querySelectorAll('.img_signos');
        imgsignos.forEach(element => {
            element.style.filter = 'grayscale(0)';
        });

    }
}

function signoescolhido(signo) {

    if (x != true) {

        switch (String(signo)) {

            case 'AQUÁRIO':


                document.querySelector('img#img_peixes').style.filter = "grayscale(90%)";
                document.querySelector('img#img_aries').style.filter = "grayscale(90%)";
                document.querySelector('img#img_touro').style.filter = "grayscale(90%)";
                document.querySelector('img#img_gemeos').style.filter = "grayscale(90%)";
                document.querySelector('img#img_cancer').style.filter = "grayscale(90%)";
                document.querySelector('img#img_leao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_virgem').style.filter = "grayscale(90%)";
                document.querySelector('img#img_libra').style.filter = "grayscale(90%)";
                document.querySelector('img#img_escorpiao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_sargitario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_capricornio').style.filter = "grayscale(90%)";
                break;

            case 'ÁRIES':


                document.querySelector('img#img_aquario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_peixes').style.filter = "grayscale(90%)";
                document.querySelector('img#img_touro').style.filter = "grayscale(90%)";
                document.querySelector('img#img_gemeos').style.filter = "grayscale(90%)";
                document.querySelector('img#img_cancer').style.filter = "grayscale(90%)";
                document.querySelector('img#img_leao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_virgem').style.filter = "grayscale(90%)";
                document.querySelector('img#img_libra').style.filter = "grayscale(90%)";
                document.querySelector('img#img_escorpiao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_sargitario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_capricornio').style.filter = "grayscale(90%)";
                break;

            case 'PEIXES':
                document.querySelector('img#img_aquario').style.filter = "grayscale(90%)";

                document.querySelector('img#img_aries').style.filter = "grayscale(90%)";
                document.querySelector('img#img_touro').style.filter = "grayscale(90%)";
                document.querySelector('img#img_gemeos').style.filter = "grayscale(90%)";
                document.querySelector('img#img_cancer').style.filter = "grayscale(90%)";
                document.querySelector('img#img_leao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_virgem').style.filter = "grayscale(90%)";
                document.querySelector('img#img_libra').style.filter = "grayscale(90%)";
                document.querySelector('img#img_escorpiao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_sargitario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_capricornio').style.filter = "grayscale(90%)";
                break;

            case 'TOURO':

                document.querySelector('img#img_aquario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_peixes').style.filter = "grayscale(90%)";
                document.querySelector('img#img_aries').style.filter = "grayscale(90%)";

                document.querySelector('img#img_gemeos').style.filter = "grayscale(90%)";
                document.querySelector('img#img_cancer').style.filter = "grayscale(90%)";
                document.querySelector('img#img_leao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_virgem').style.filter = "grayscale(90%)";
                document.querySelector('img#img_libra').style.filter = "grayscale(90%)";
                document.querySelector('img#img_escorpiao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_sargitario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_capricornio').style.filter = "grayscale(90%)";

                break;

            case 'GÊMEOS':

                document.querySelector('img#img_aquario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_peixes').style.filter = "grayscale(90%)";
                document.querySelector('img#img_aries').style.filter = "grayscale(90%)";
                document.querySelector('img#img_touro').style.filter = "grayscale(90%)";

                document.querySelector('img#img_cancer').style.filter = "grayscale(90%)";
                document.querySelector('img#img_leao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_virgem').style.filter = "grayscale(90%)";
                document.querySelector('img#img_libra').style.filter = "grayscale(90%)";
                document.querySelector('img#img_escorpiao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_sargitario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_capricornio').style.filter = "grayscale(90%)";

                break;

            case 'CANCER':

                document.querySelector('img#img_aquario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_peixes').style.filter = "grayscale(90%)";
                document.querySelector('img#img_aries').style.filter = "grayscale(90%)";
                document.querySelector('img#img_touro').style.filter = "grayscale(90%)";
                document.querySelector('img#img_gemeos').style.filter = "grayscale(90%)";

                document.querySelector('img#img_leao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_virgem').style.filter = "grayscale(90%)";
                document.querySelector('img#img_libra').style.filter = "grayscale(90%)";
                document.querySelector('img#img_escorpiao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_sargitario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_capricornio').style.filter = "grayscale(90%)";

                break;

            case 'LEÃO':

                document.querySelector('img#img_aquario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_peixes').style.filter = "grayscale(90%)";
                document.querySelector('img#img_aries').style.filter = "grayscale(90%)";
                document.querySelector('img#img_touro').style.filter = "grayscale(90%)";
                document.querySelector('img#img_gemeos').style.filter = "grayscale(90%)";
                document.querySelector('img#img_cancer').style.filter = "grayscale(90%)";

                document.querySelector('img#img_virgem').style.filter = "grayscale(90%)";
                document.querySelector('img#img_libra').style.filter = "grayscale(90%)";
                document.querySelector('img#img_escorpiao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_sargitario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_capricornio').style.filter = "grayscale(90%)";

                break;

            case 'VIRGEM':

                document.querySelector('img#img_aquario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_peixes').style.filter = "grayscale(90%)";
                document.querySelector('img#img_aries').style.filter = "grayscale(90%)";
                document.querySelector('img#img_touro').style.filter = "grayscale(90%)";
                document.querySelector('img#img_gemeos').style.filter = "grayscale(90%)";
                document.querySelector('img#img_cancer').style.filter = "grayscale(90%)";
                document.querySelector('img#img_leao').style.filter = "grayscale(90%)";

                document.querySelector('img#img_libra').style.filter = "grayscale(90%)";
                document.querySelector('img#img_escorpiao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_sargitario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_capricornio').style.filter = "grayscale(90%)";

                break;

            case 'LIBRA':

                document.querySelector('img#img_aquario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_peixes').style.filter = "grayscale(90%)";
                document.querySelector('img#img_aries').style.filter = "grayscale(90%)";
                document.querySelector('img#img_touro').style.filter = "grayscale(90%)";
                document.querySelector('img#img_gemeos').style.filter = "grayscale(90%)";
                document.querySelector('img#img_cancer').style.filter = "grayscale(90%)";
                document.querySelector('img#img_leao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_virgem').style.filter = "grayscale(90%)";

                document.querySelector('img#img_escorpiao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_sargitario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_capricornio').style.filter = "grayscale(90%)";

                break;

            case 'ESCORPIÃO':

                document.querySelector('img#img_aquario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_peixes').style.filter = "grayscale(90%)";
                document.querySelector('img#img_aries').style.filter = "grayscale(90%)";
                document.querySelector('img#img_touro').style.filter = "grayscale(90%)";
                document.querySelector('img#img_gemeos').style.filter = "grayscale(90%)";
                document.querySelector('img#img_cancer').style.filter = "grayscale(90%)";
                document.querySelector('img#img_leao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_virgem').style.filter = "grayscale(90%)";
                document.querySelector('img#img_libra').style.filter = "grayscale(90%)";

                document.querySelector('img#img_sargitario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_capricornio').style.filter = "grayscale(90%)";

                break;

            case 'SARGITÁRIO':

                document.querySelector('img#img_aquario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_peixes').style.filter = "grayscale(90%)";
                document.querySelector('img#img_aries').style.filter = "grayscale(90%)";
                document.querySelector('img#img_touro').style.filter = "grayscale(90%)";
                document.querySelector('img#img_gemeos').style.filter = "grayscale(90%)";
                document.querySelector('img#img_cancer').style.filter = "grayscale(90%)";
                document.querySelector('img#img_leao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_virgem').style.filter = "grayscale(90%)";
                document.querySelector('img#img_libra').style.filter = "grayscale(90%)";
                document.querySelector('img#img_escorpiao').style.filter = "grayscale(90%)";

                document.querySelector('img#img_capricornio').style.filter = "grayscale(90%)";

                break;

            case 'CAPRICÓRNIO':

                document.querySelector('img#img_aquario').style.filter = "grayscale(90%)";
                document.querySelector('img#img_peixes').style.filter = "grayscale(90%)";
                document.querySelector('img#img_aries').style.filter = "grayscale(90%)";
                document.querySelector('img#img_touro').style.filter = "grayscale(90%)";
                document.querySelector('img#img_gemeos').style.filter = "grayscale(90%)";
                document.querySelector('img#img_cancer').style.filter = "grayscale(90%)";
                document.querySelector('img#img_leao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_virgem').style.filter = "grayscale(90%)";
                document.querySelector('img#img_libra').style.filter = "grayscale(90%)";
                document.querySelector('img#img_escorpiao').style.filter = "grayscale(90%)";
                document.querySelector('img#img_sargitario').style.filter = "grayscale(90%)";


                break;

            default:
                break;
        }
    }


}

function clicksigno(signo_click) {

    x = true

    solar_escolhido = signo_click
    switch (String(signo_click)) {


        case 'aquario':


            gray_all()
            document.querySelector('img#img_aquario').style.filter = "grayscale(0)";
            document.querySelector('label#solicitaçaosol').innerHTML = ` NASCIMENTO: `
            document.querySelector('div#solarescolhido').innerHTML = ` Seu signo solar é :<br> <strong>AQUÁRIO</strong> <br> `
            document.querySelector('div#tres_datas_ascendentes').innerHTML = '<div class="Grid-cell" id="periodo" onclick="link(`21013001`)"  >21/01 à 30/01</div>  <div class="Grid-cell" id="periodo" onclick="link(`31010902`)"   >31/01 à 09/02</div> <div class="Grid-cell" id="periodo" onclick="link(`10021902`)"   >10/02 à 19/02</div>'


            break;

        case 'peixes':

            gray_all()
            document.querySelector('img#img_peixes').style.filter = "grayscale(0)";
            document.querySelector('div#solarescolhido').innerHTML = ` Seu signo solar é :<br> <strong>PEIXES</strong> <br> `
            document.querySelector('div#tres_datas_ascendentes').innerHTML = '<div class="Grid-cell" id="periodo" onclick="link(`20022902`)" >20/02 à 29/02</div> <div class="Grid-cell"   id="periodo" onclick="link(`01031003`)" >01/03 à 10/03</div> <div class="Grid-cell"  id="periodo" onclick="link(`11032003`)" >11/03 à 20/03</div>'
            break;

        case 'aries':

            gray_all()
            document.querySelector('img#img_aries').style.filter = "grayscale(0)";
            document.querySelector('div#solarescolhido').innerHTML = ` Seu signo solar é :<br> <strong>ÁRIES</strong> <br> `
            document.querySelector('div#tres_datas_ascendentes').innerHTML = '<div class="Grid-cell" id="periodo" onclick="link(`21033003`)" >21/03 à 30/03</div> <div class="Grid-cell" id="periodo" onclick="link(`31030904`)" >31/03 à 09/04</div> <div class="Grid-cell" id="periodo" onclick="link(`10042004`)" >10/04 à 20/04</div>'

            break;

        case 'touro':
            gray_all()
            document.querySelector('img#img_touro').style.filter = "grayscale(0)";
            document.querySelector('div#solarescolhido').innerHTML = ` Seu signo solar é :<br> <strong>TOURO</strong> <br> `
            document.querySelector('div#tres_datas_ascendentes').innerHTML = '<div class="Grid-cell" id="periodo" onclick="link(`21043004`)" >21/04 à 30/04</div> <div class="Grid-cell" id="periodo" onclick="link(`01051005`)" >01/05 à 10/05</div> <div class="Grid-cell" id="periodo" onclick="link(`11052005`)" >11/05 à 20/05</div>'

            break;

        case 'gemeos':
            gray_all()
            document.querySelector('img#img_gemeos').style.filter = "grayscale(0)";
            document.querySelector('div#solarescolhido').innerHTML = ` Seu signo solar é :<br> <strong>GÊMEOS</strong> <br> `
            document.querySelector('div#tres_datas_ascendentes').innerHTML = '<div class="Grid-cell" id="periodo" onclick="link(`21053005`)" >21/05 à 30/05</div> <div class="Grid-cell" id="periodo" onclick="link(`31050906`)" >31/05 à 09/06</div> <div class="Grid-cell" id="periodo" onclick="link(`10062006`)" >10/06 à 20/06</div>'
            break;

        case 'cancer':
            gray_all()
            document.querySelector('img#img_cancer').style.filter = "grayscale(0)";
            document.querySelector('div#solarescolhido').innerHTML = ` Seu signo solar é :<br> <strong>CANCER</strong> <br> `
            document.querySelector('div#tres_datas_ascendentes').innerHTML = '<div class="Grid-cell" id="periodo" onclick="link(`21060107`)" >21/06 à 01/07</div> <div class="Grid-cell" id="periodo" onclick="link(`02071107`)" >02/07 à 11/07</div> <div class="Grid-cell" id="periodo" onclick="link(`12072107`)" >12/07 à 21/07</div>'
            break;

        case 'leao':
            gray_all()
            document.querySelector('img#img_leao').style.filter = "grayscale(0)";
            document.querySelector('div#solarescolhido').innerHTML = ' Seu signo solar é :<br> <strong >LEÂO</strong> <br>'
            document.querySelector('div#tres_datas_ascendentes').innerHTML = '<div class="Grid-cell" id="periodo" onclick="link(`22070108`)" >22/07 à 01/08</div> <div class="Grid-cell" id="periodo" onclick="link(`02081108`)" >02/08 à 11/08</div> <div class="Grid-cell" id="periodo" onclick="link(`12082208`)" >12/08 à 22/08</div>'


            break;

        case 'virgem':
            gray_all()
            document.querySelector('img#img_virgem').style.filter = "grayscale(0)";
            document.querySelector('div#solarescolhido').innerHTML = ` Seu signo solar é :<br> <strong>VIRGEM</strong> <br> `
            document.querySelector('div#tres_datas_ascendentes').innerHTML = '<div class="Grid-cell" id="periodo" onclick="link(`23080109`)" >23/08 à 01/09</div> <div class="Grid-cell" id="periodo" onclick="link(`02091209`)" >02/09 à 12/09</div> <div class="Grid-cell" id="periodo" onclick="link(`13092209`)" >13/09 à 22/09</div>'
            break;

        case 'libra':
            gray_all()
            document.querySelector('img#img_libra').style.filter = "grayscale(0)";
            document.querySelector('div#solarescolhido').innerHTML = ` Seu signo solar é : <br> <strong>LIBRA</strong> <br> `
            document.querySelector('div#tres_datas_ascendentes').innerHTML = '<div class="Grid-cell" id="periodo" onclick="link(`23090210`)" >23/09 à 02/10</div> <div class="Grid-cell" id="periodo" onclick="link(`03101210`)" >03/10 à 12/10</div> <div class="Grid-cell" id="periodo" onclick="link(`13102210`)" >13/10 à 22/10</div>'
            break;

        case 'escorpiao':
            gray_all()
            document.querySelector('img#img_escorpiao').style.filter = "grayscale(0)";
            document.querySelector('div#solarescolhido').innerHTML = ` Seu signo solar é : <br> <strong>ESCORPIÃO</strong> <br> `
            document.querySelector('div#tres_datas_ascendentes').innerHTML = '<div class="Grid-cell" id="periodo" onclick="link(`23100111`)" >23/10 à 01/11</div> <div class="Grid-cell" id="periodo" onclick="link(`02111111`)" >02/11 à 11/11</div> <div class="Grid-cell" id="periodo" onclick="link(`12112111`)" >12/11 à 21/11</div>'
            break;

        case 'sargitario':
            gray_all()
            document.querySelector('img#img_sargitario').style.filter = "grayscale(0)";
            document.querySelector('div#solarescolhido').innerHTML = ` Seu signo solar é : <br> <strong>SAGITÁRIO</strong> <br> `
            document.querySelector('div#tres_datas_ascendentes').innerHTML = '<div class="Grid-cell" id="periodo" onclick="link(`22110112`)" >22/11 à 01/12</div> <div class="Grid-cell" id="periodo" onclick="link(`02121112`)" >02/12 à 11/12</div> <div class="Grid-cell" id="periodo" onclick="link(`12122112`)" >12/12 à 21/12</div>'
            break;

        case 'capricornio':

            document.querySelector('img#img_capricornio').style.filter = "grayscale(0)";
            document.querySelector('div#solarescolhido').innerHTML = ` Seu signo solar é : <br> <strong>CAPRICÓRNIO</strong> <br> `
            document.querySelector('div#tres_datas_ascendentes').innerHTML = '<div class="Grid-cell" id="periodo" onclick="link(`22123112`)" >22/12 à 31/12</div> <div class="Grid-cell" id="periodo" onclick="link(`01011001`)" >01/01 à 10/01</div> <div class="Grid-cell" id="periodo" onclick="link(`11012001`)" >11/01 à 20/01</div>'
            break;


        default:
            break;
    }

    //document.querySelector('div#linha1signos').style.display = 'none';
    //document.querySelector('div#linha2signos').style.display = 'none';
    //document.querySelector('label#solicitaçaosol').style.display = 'none';
    //document.querySelector('div#solarescolhido').append(document.querySelector(`img#img_${signo_click}`))

    document.querySelector('div#tx1').innerHTML = " AGORA ESCOLHA O PERIODO DO SEU NASCIMENTO PARA SABER MAIS: <br><br>"
    window.scrollTo(0, 100)

}





function link(pag) {

    switch (String(pag)) {

        case '21013001':
            window.location = "aq/21013001.html";
            break;
        case '31010902':
            window.location = "aq/31010902.html";
            break;
        case '10021902':
            window.location = "aq/10021902.html";
            break;
            /////////
        case '20022902':
            window.location = "pe/20022902.html"
            break;
        case '01031003':
            window.location = "pe/01031003.html";
            break;
        case '11032003':
            window.location = "pe/11032003.html";
            break;
            ////////
        case '21033003':
            window.location = "ar/21033003.html";
            break;
        case '31030904':
            window.location = "ar/31030904.html";
            break;
        case '10042004':
            window.location = "ar/10042004.html";
            break;
            /////////
        case '21043004':
            window.location = "to/21043004.html";
            break;
        case '01051005':
            window.location = "to/01051005.html";
            break;
        case '11052005':
            window.location = "to/11052005.html";
            break;
            /////////
        case '21053005':
            window.location = "ge/21053005.html";
            break;
        case '31050906':
            window.location = "ge/31050906.html";
            break;
        case '10062006':
            window.location = "ge/10062006.html";
            break;
            /////////
        case '21060107':
            window.location = "ca/21060107.html";
            break;
        case '02071107':
            window.location = "ca/02071107.html";
            break;
        case '12072107':
            window.location = "ca/12072107.html";
            break;
            //////////
        case '22070108':
            window.location = "le/22070108.html";
            break;
        case '02081108':
            window.location = "le/02081108.html";
            break;
        case '12082208':
            window.location = "le/12082208.html";
            break;
            ///////
        case '23080109':
            window.location = "vi/23080109.html";
            break;
        case '02091209':
            window.location = "vi/02091209.html";
            break;
        case '13092209':
            window.location = "vi/13092209.html";
            break;
            ///////
        case '23090210':
            window.location = "li/23090210.html";
            break;
        case '03101210':
            window.location = "li/03101210.html";
            break;
        case '13102210':
            window.location = "li/13102210.html";
            break;
            ///////
        case '23100111':
            window.location = "es/23100111.html";
            break;
        case '02111111':
            window.location = "es/02111111.html";
            break;
        case '12112111':
            window.location = "es/12112111.html";
            break;
            ///////
        case '22110112':
            window.location = "sa/22110112.html";
            break;
        case '02121112':
            window.location = "sa/02121112.html";
            break;
        case '12122112':
            window.location = "sa/12122112.html";
            break;
            ///////
        case '22123112':
            window.location = "cp/22123112.html";
            break;
        case '01011001':
            window.location = "cp/01011001.html";
            break;
        case '11012001':
            window.location = "cp/11012001.html";
            break;


    }



}







function gray_all() {
    var imgsignos = document.querySelectorAll('.img_signos');
    imgsignos.forEach(element => {
        element.style.filter = 'grayscale(1)';
    });



}