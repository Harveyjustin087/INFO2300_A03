function changeDrop() {
    var select = document.getElementById('cardChooser');
    var value = select.options[select.selectedIndex].value;
    var synopsis = document.getElementById('synopsis');
    var batman = document.getElementById('batman');
    var superman = document.getElementById('superman');
    var wonder = document.getElementById('wonderWoman');
    var harley = document.getElementById('harley');
    var joker = document.getElementById('joker');
    if(value === 'default'){
        document.getElementById('pictureBox').src = "../img/dcCard.jpg"
        document.getElementById('eventBox1').src = "../img/dcCard.jpg";
        document.getElementById('eventBox2').src = "../img/dcCard.jpg";
        document.getElementById('eventBox3').src = "../img/dcCard.jpg";
    }else if(value === 'superman'){
        document.getElementById('pictureBox').src = "../img/supermanHero.png";
        document.getElementById('eventBox1').src = "../img/eventSupermanOne.png";
        document.getElementById('eventBox2').src = "../img/eventSupermanTwo.png";
        document.getElementById('eventBox3').src = "../img/eventSupermanThree.png";
        batman.hidden = true;
        superman.hidden = false;
        wonder.hidden = true;
        harley.hidden = true;
        joker.hidden = true;
    }else if(value === 'wonderWoman'){
        document.getElementById('pictureBox').src = "../img/wonderWomanHero.png";
        document.getElementById('eventBox1').src = "../img/eventWWOne.png";
        document.getElementById('eventBox2').src = "../img/eventWWTwo.png";
        document.getElementById('eventBox3').src = "../img/eventWWThree.png";
        batman.hidden = true;
        superman.hidden = true;
        wonder.hidden = false;
        harley.hidden = true;
        joker.hidden = true;
    }else if(value === 'batman'){
        document.getElementById('pictureBox').src = "../img/batmanHero.png";
        document.getElementById('eventBox1').src = "../img/eventBatmanOne.png";
        document.getElementById('eventBox2').src = "../img/eventBatmanTwo.png";
        document.getElementById('eventBox3').src = "../img/eventBatmanThree.png";
        batman.hidden = false;
        superman.hidden = true;
        wonder.hidden = true;
        harley.hidden = true;
        joker.hidden = true;
    }else if(value === 'harley'){
        document.getElementById('pictureBox').src = "../img/harleyHero.png";
        document.getElementById('eventBox1').src = "../img/eventHarleyOne.png";
        document.getElementById('eventBox2').src = "../img/eventHarleyTwo.png";
        document.getElementById('eventBox3').src = "../img/eventHarleyThree.png";
        batman.hidden = true;
        superman.hidden = true;
        wonder.hidden = true;
        harley.hidden = false;
        joker.hidden = true;
    }else if(value === 'joker'){
        document.getElementById('pictureBox').src = "../img/jokerHero.png";
        document.getElementById('eventBox1').src = "../img/eventJokerOne.png";
        document.getElementById('eventBox2').src = "../img/eventJokerTwo.png";
        document.getElementById('eventBox3').src = "../img/eventJokerThree.png";
        batman.hidden = true;
        superman.hidden = true;
        wonder.hidden = true;
        harley.hidden = true;
        joker.hidden = false;
    }

    if(value ==='default'){
        synopsis.hidden = true;
    }else{
        synopsis.hidden = false;
    }
}
function cardFlipDC(){
    let deck = ['../img/DCPowerOne.jpg','../img/DCPowerTwo.jpg','../img/DCPowerThree.jpg','../img/DCPowerFour.jpg','../img/DCPowerFive.jpg','../img/DCPowerSix.jpg','../img/DCPowerSeven.jpg']
    let num = Math.floor(Math.random() * 7);
    document.getElementById('powerBox').src = deck[num];
}
function changeDropMarv(){
    var select = document.getElementById('cardChooserMarv');
    var value = select.options[select.selectedIndex].value;
    var synopsis = document.getElementById('synopsisMarv');
    var spider = document.getElementById('spiderMan');
    var iron = document.getElementById('ironMan');
    var doom = document.getElementById('docDoom');
    var wolverine = document.getElementById('wolverine');
    var venom = document.getElementById('venom');
    if(value === 'defaultMarv'){
        document.getElementById('pictureBoxMarv').src = "../img/marvCard.jpg"
        document.getElementById('eventMarv1').src = "../img/marvCard.jpg";
        document.getElementById('eventMarv2').src = "../img/marvCard.jpg";
        document.getElementById('eventMarv3').src = "../img/marvCard.jpg";
    }else if(value === 'spiderMan'){
        document.getElementById('pictureBoxMarv').src = "../img/SpiderManHero.jpg";
        document.getElementById('eventMarv1').src = "../img/eventSpiderOne.png";
        document.getElementById('eventMarv2').src = "../img/eventSpiderTwo.png";
        document.getElementById('eventMarv3').src = "../img/eventSpiderThree.png";
        iron.hidden = true;
        spider.hidden = false;
        doom.hidden = true;
        wolverine.hidden = true;
        venom.hidden = true;
    }else if(value === 'wolverine'){
        document.getElementById('pictureBoxMarv').src = "../img/wolverineHero.jpg";
        document.getElementById('eventMarv1').src = "../img/eventWolverineOne.png";
        document.getElementById('eventMarv2').src = "../img/eventWolverineTwo.png";
        document.getElementById('eventMarv3').src = "../img/eventWolverineThree.png";
        spider.hidden = true;
        doom.hidden = true;
        wolverine.hidden = false;
        venom.hidden = true;
        iron.hidden = true;
    }else if(value === 'docDoom'){
        document.getElementById('pictureBoxMarv').src = "../img/doomHero.jpg";
        document.getElementById('eventMarv1').src = "../img/eventDoomOne.png";
        document.getElementById('eventMarv2').src = "../img/eventDoomTwo.png";
        document.getElementById('eventMarv3').src = "../img/eventDoomThree.png";
        doom.hidden = false;
        spider.hidden = true;
        wolverine.hidden = true;
        venom.hidden = true;
        iron.hidden = true;
    }else if(value === 'venom'){
        document.getElementById('pictureBoxMarv').src = "../img/venomHero.jpg";
        document.getElementById('eventMarv1').src = "../img/eventVenomOne.png";
        document.getElementById('eventMarv2').src = "../img/eventVenomTwo.png";
        document.getElementById('eventMarv3').src = "../img/eventVenomThree.png";
        doom.hidden = true;
        spider.hidden = true;
        wolverine.hidden = true;
        venom.hidden = false;
        iron.hidden = true;
    }else if(value === 'ironMan'){
        document.getElementById('pictureBoxMarv').src = "../img/ironHero.jpg";
        document.getElementById('eventMarv1').src = "../img/eventIronOne.png";
        document.getElementById('eventMarv2').src = "../img/eventIronTwo.png";
        document.getElementById('eventMarv3').src = "../img/eventIronThree.png";
        venom.hidden = true;
        spider.hidden = true;
        wolverine.hidden = true;
        doom.hidden = true;
        iron.hidden = false;
    }

    if(value ==='defaultMarv'){
        synopsis.hidden = true;
    }else{
        synopsis.hidden = false;
    }
}