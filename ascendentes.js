//git add -A && git commit -m "Your Message"
var ascendentehora = 0

let a21013001 = [1, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10]
let a31010902 = [1, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10]
let a10021902 = [1, 11, 11, 11, 11, 12, 12, 12, 12, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 10]

let pe20022902 = [2, 11, 11, 11, 12, 12, 12, 12, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 10, 10, 10, 10, 11]
let pe01031003 = [2, 11, 11, 12, 12, 12, 12, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11]
let pe11032003 = [2, 12, 12, 12, 12, 12, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11]

let ar21033003 = [3, 12, 12, 12, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12]
let ar31030904 = [3, 12, 12, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12]
let ar10042004 = [3, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12]

let to21043004 = [4, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 1]
let to01051005 = [4, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 1, 1]
let to11052005 = [4, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 1, 1, 1]

let ge21053005 = [5, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 1, 1, 1, 1, 1]
let ge31050906 = [5, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 1, 1, 1, 1, 1, 2]
let ge10062006 = [5, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 1, 1, 1, 1, 2, 2, 2]

let ca21060107 = [6, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 1, 1, 1, 1, 1, 2, 2, 2, 2]
let ca02071107 = [6, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3]
let ca12072107 = [6, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3]

let le22070108 = [7, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3]
let le02081108 = [7, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4]
let le12082208 = [7, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4]

let vi23080109 = [8, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4]
let vi02091209 = [8, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5]
let vi13092209 = [8, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5]

let li23090210 = [9, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5]
let li03101210 = [9, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5]
let li13102210 = [9, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6]

let es23100111 = [10, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6]
let es02111111 = [10, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6]
let es12112111 = [10, 7, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7]

let sa22110112 = [11, 7, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7]
let sa02121112 = [11, 8, 8, 8, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7]
let sa12122112 = [11, 8, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8]

let cp22123112 = [12, 9, 9, 9, 10, 10, 10, 11, 11, 11, 11, 11, 12, 12, 12, 12, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8]
let cp01011001 = [12, 9, 9, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 12, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 9]
let cp11012001 = [12, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9]



function horanascimento(sig) {
    var sig_asc = sig
    var x = document.getElementById("hora").value;
    //var sig_asc = document.getElementById("btn").name;
    var resp = document.querySelector('div#respostahora');



    if (x >= '00:00' && x <= '00:29') {

        resp.innerHTML = `o horario escolhido é : 00:00`
        ascendentehora = 1


    } else if (x >= '00:30' && x <= '00:59') {

        resp.innerHTML = `o horario escolhido é : 00:30`
        ascendentehora = 2

    } else if (x >= '01:00' && x <= '01:29') {

        resp.innerHTML = `o horario escolhido é : 01:00`
        ascendentehora = 3

    } else if (x >= '01:30' && x <= '01:59') {

        resp.innerHTML = `o horario escolhido é : 01:30`
        ascendentehora = 4

    } else if (x >= '02:00' && x <= '02:29') {

        resp.innerHTML = `o horario escolhido é : 02:00`
        ascendentehora = 5

    } else if (x >= '02:30' && x <= '02:59') {

        resp.innerHTML = `o horario escolhido é : 02:30`
        ascendentehora = 6

    } else if (x >= '03:00' && x <= '03:29') {

        resp.innerHTML = `o horario escolhido é : 03:00`
        ascendentehora = 7

    } else if (x >= '03:30' && x <= '03:59') {

        resp.innerHTML = `o horario escolhido é : 03:30`
        ascendentehora = 8

    } else if (x >= '04:00' && x <= '04:29') {

        resp.innerHTML = `o horario escolhido é : 04:00`
        ascendentehora = 9

    } else if (x >= '04:30' && x <= '04:59') {

        resp.innerHTML = `o horario escolhido é : 04:30`
        ascendentehora = 10

    } else if (x >= '05:00' && x <= '05:29') {

        resp.innerHTML = `o horario escolhido é : 05:00`
        ascendentehora = 11

    } else if (x >= '05:30' && x <= '05:59') {

        resp.innerHTML = `o horario escolhido é : 05:30`
        ascendentehora = 12

    } else if (x >= '06:00' && x <= '06:29') {

        resp.innerHTML = `o horario escolhido é : 06:00`
        ascendentehora = 13

    } else if (x >= '06:30' && x <= '06:59') {

        resp.innerHTML = `o horario escolhido é : 06:30`
        ascendentehora = 14

    } else if (x >= '07:00' && x <= '07:29') {

        resp.innerHTML = `o horario escolhido é : 07:00`
        ascendentehora = 15

    } else if (x >= '07:30' && x <= '07:59') {

        resp.innerHTML = `o horario escolhido é : 07:30`
        ascendentehora = 16

    } else if (x >= '08:00' && x <= '08:29') {

        resp.innerHTML = `o horario escolhido é : 08:00`
        ascendentehora = 17

    } else if (x >= '08:30' && x <= '08:59') {

        resp.innerHTML = `o horario escolhido é : 08:30`
        ascendentehora = 18

    } else if (x >= '09:00' && x <= '09:29') {

        resp.innerHTML = `o horario escolhido é : 09:00`
        ascendentehora = 19

    } else if (x >= '09:30' && x <= '09:59') {

        resp.innerHTML = `o horario escolhido é : 09:30`
        ascendentehora = 20

    } else if (x >= '10:00' && x <= '10:29') {

        resp.innerHTML = `o horario escolhido é : 10:00`
        ascendentehora = 21

    } else if (x >= '10:30' && x <= '10:59') {

        resp.innerHTML = `o horario escolhido é : 10:30`
        ascendentehora = 22

    } else if (x >= '11:00' && x <= '11:29') {

        resp.innerHTML = `o horario escolhido é : 11:00`
        ascendentehora = 23

    } else if (x >= '11:30' && x <= '11:59') {

        resp.innerHTML = `o horario escolhido é : 11:30`
        ascendentehora = 24

    } else if (x >= '12:00' && x <= '12:29') {

        resp.innerHTML = `o horario escolhido é : 12:00`
        ascendentehora = 25

    } else if (x >= '12:30' && x <= '12:59') {

        resp.innerHTML = `o horario escolhido é : 12:30`
        ascendentehora = 26

    } else if (x >= '13:00' && x <= '13:29') {

        resp.innerHTML = `o horario escolhido é : 13:00`
        ascendentehora = 27

    } else if (x >= '13:30' && x <= '13:59') {

        resp.innerHTML = `o horario escolhido é : 13:30`
        ascendentehora = 28

    } else if (x >= '14:00' && x <= '14:29') {

        resp.innerHTML = `o horario escolhido é : 14:00`
        ascendentehora = 29

    } else if (x >= '14:30' && x <= '14:59') {

        resp.innerHTML = `o horario escolhido é : 14:30`
        ascendentehora = 30

    } else if (x >= '15:00' && x <= '15:29') {

        resp.innerHTML = `o horario escolhido é : 15:00`
        ascendentehora = 31

    } else if (x >= '15:30' && x <= '15:59') {

        resp.innerHTML = `o horario escolhido é : 15:30`
        ascendentehora = 32

    } else if (x >= '16:00' && x <= '16:29') {

        resp.innerHTML = `o horario escolhido é : 16:00`
        ascendentehora = 33

    } else if (x >= '16:30' && x <= '16:59') {

        resp.innerHTML = `o horario escolhido é : 16:30`
        ascendentehora = 34

    } else if (x >= '17:00' && x <= '17:29') {

        resp.innerHTML = `o horario escolhido é : 17:00`
        ascendentehora = 35

    } else if (x >= '17:30' && x <= '17:59') {

        resp.innerHTML = `o horario escolhido é : 17:30`
        ascendentehora = 36

    } else if (x >= '18:00' && x <= '18:29') {

        resp.innerHTML = `o horario escolhido é : 18:00`
        ascendentehora = 37

    } else if (x >= '18:30' && x <= '18:59') {

        resp.innerHTML = `o horario escolhido é : 18:30`
        ascendentehora = 38

    } else if (x >= '19:00' && x <= '19:29') {

        resp.innerHTML = `o horario escolhido é : 19:00`
        ascendentehora = 39

    } else if (x >= '19:30' && x <= '19:59') {

        resp.innerHTML = `o horario escolhido é : 19:30`
        ascendentehora = 40

    } else if (x >= '20:00' && x <= '20:29') {

        resp.innerHTML = `o horario escolhido é : 20:00`
        ascendentehora = 41

    } else if (x >= '20:30' && x <= '20:59') {

        resp.innerHTML = `o horario escolhido é : 20:30`
        ascendentehora = 42

    } else if (x >= '21:00' && x <= '21:29') {

        resp.innerHTML = `o horario escolhido é : 21:00`
        ascendentehora = 43

    } else if (x >= '21:30' && x <= '21:59') {

        resp.innerHTML = `o horario escolhido é : 21:30`
        ascendentehora = 44

    } else if (x >= '22:00' && x <= '22:29') {

        resp.innerHTML = `o horario escolhido é : 22:00`
        ascendentehora = 45

    } else if (x >= '22:30' && x <= '22:59') {

        resp.innerHTML = `o horario escolhido é : 22:30`
        ascendentehora = 46

    } else if (x >= '23:00' && x <= '23:29') {

        resp.innerHTML = `o horario escolhido é : 23:00`
        ascendentehora = 47

    } else if (x >= '23:30' && x <= '23:59') {

        resp.innerHTML = `o horario escolhido é : 23:30`
        ascendentehora = 48


    }

    //revisar essa parte
    //ascendentehora = ascendentehora - 1
    resp.innerHTML = `o horario escolhido é : ${ascendentehora}`


    resultado(sig_asc, ascendentehora)
}

function resultado(sig_asc, ascendentehora) {

    var resp = document.querySelector('div#respostahora');
    let arrayutilizada = []


    switch (String(sig_asc)) {

        case 'a21013001':
            arrayutilizada = a21013001
            break
        case 'a31010902':
            arrayutilizada = a31010902
            break
        case 'a10021902':
            arrayutilizada = a10021902
            break
        case 'pe20022902':
            arrayutilizada = pe20022902
            break
        case 'pe01031003':
            arrayutilizada = pe01031003
            break
        case 'pe11032003':
            arrayutilizada = pe11032003
            break
        case 'ar21033003':
            arrayutilizada = ar21033003
            break
        case 'ar31030904':
            arrayutilizada = ar31030904
            break
        case 'ar10042004':
            arrayutilizada = ar10042004
            break
        case 'to21043004':
            arrayutilizada = to21043004
            break
        case 'to01051005':
            arrayutilizada = to01051005
            break
        case 'to11052005':
            arrayutilizada = to11052005
            break
        case 'ge21053005':
            arrayutilizada = ge21053005
            break
        case 'ge31050906':
            arrayutilizada = ge31050906
            break
        case 'ge10062006':
            arrayutilizada = ge10062006
            break
        case 'ca21060107':
            arrayutilizada = ca21060107
            break
        case 'ca02071107':
            arrayutilizada = ca02071107
            break
        case 'ca12072107':
            arrayutilizada = ca12072107
            break
            ////////////
        case 'le22070108':
            arrayutilizada = le22070108
            break
        case 'le02081108':
            arrayutilizada = le02081108
            break
        case 'le12082208':
            arrayutilizada = le12082208
            break
            ////////////////
        case 'vi23080109':
            arrayutilizada = vi23080109
            break
        case 'vi02091209':
            arrayutilizada = vi02091209
            break
        case 'vi13092209':
            arrayutilizada = vi13092209
            break
            ////////////////
        case 'li23090210':
            arrayutilizada = li23090210
            break
        case 'li03101210':
            arrayutilizada = li03101210
            break
        case 'li13102210':
            arrayutilizada = li13102210
            break
            ////////////////
        case 'es23100111':
            arrayutilizada = es23100111
            break
        case 'es02111111':
            arrayutilizada = es02111111
            break
        case 'es12112111':
            arrayutilizada = es12112111
            break
            ////////////////
        case 'sa22110112':
            arrayutilizada = sa22110112
            break
        case 'sa02121112':
            arrayutilizada = sa02121112
            break
        case 'sa12122112':
            arrayutilizada = sa12122112
            break
            ////////////////
        case 'cp22123112':
            arrayutilizada = cp22123112
            break
        case 'cp01011001':
            arrayutilizada = cp01011001
            break
        case 'cp11012001':
            arrayutilizada = cp11012001
            break
    }


    //var dados = JSON.stringify('teste');
    localStorage.setItem('solar', arrayutilizada[0]);
    localStorage.setItem('ascendente', arrayutilizada[ascendentehora]);

    window.location = "../resultado.html";




}

document.getElementById("btn").value = "≫"