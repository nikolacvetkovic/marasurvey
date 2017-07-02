$("#gender").click(function(){
    $.get("/results/gender", function(data){
        if(data.mBr !== undefined){
        $("#results").html(
            '<h2 class="title">Raspodela po polu</h2>'+
            '<table class="ui very celled table">'+
                '<thead><tr><th></th><th>Broj ispitanika</th><th>Udeo</th></tr></thead>'+
                '<tbody><tr><td><h4 class="ui header"><div class="content">Muškarci</div></h4></td><td>'+data.mBr+'</td><td>'+data.mUd+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Žene</div></h4></td><td>'+data.zBr+'</td><td>'+data.zUd+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Ukupno</div></h4></td><td>'+data.uk+'</td><td></td></tr>'+
                '</tbody>'+
            '</table>');
            var ctx = $("#myChart")[0].getContext("2d");
            // var ctx = document.getElementById("myChart").getC
            var chart = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ["Muškarci", "Žene"],
                    datasets: [{
                        label: "",
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        borderWidth: 1,
                        data: [data.mBr, data.zBr]
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true
                            }
                            }]
                    },
                    scales: {
                        xAxes: [{
                            barThickness: 50
                            }]
                    }
                } 
            });
        } else {
            window.location.href= "/login";
        }
    });
});

$("#year").click(function(){
    $.get("/results/year", function(data){
        if(data.c1Br !== undefined){
        $("#results").html(
            '<h2 class="title">Raspodela po starosti</h2>'+
            '<table class="ui very celled table">'+
                '<thead><tr><th></th><th>Broj ispitanika</th><th>Udeo</th></tr></thead>'+
                '<tbody><tr><td><h4 class="ui header"><div class="content">18-35</div></h4></td><td>'+data.c1Br+'</td><td>'+data.c1Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">36-55</div></h4></td><td>'+data.c2Br+'</td><td>'+data.c2Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">56+</div></h4></td><td>'+data.c3Br+'</td><td>'+data.c3Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Ukupno</div></h4></td><td>'+data.uk+'</td><td></td></tr>'+
                '</tbody>'+
            '</table>');
        } else {
            window.location.href= "/login";
        }
    });
});

$("#education").click(function(){
    $.get("/results/education", function(data){
        if(data.c1Br !== undefined){
        $("#results").html(
            '<h2 class="title">Raspodela po obrazovanju</h2>'+
            '<table class="ui very celled table">'+
                '<thead><tr><th></th><th>Broj ispitanika</th><th>Udeo</th></tr></thead>'+
                '<tbody><tr><td><h4 class="ui header"><div class="content">IV stepen</div></h4></td><td>'+data.c1Br+'</td><td>'+data.c1Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">VI stepen</div></h4></td><td>'+data.c2Br+'</td><td>'+data.c2Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">VII stepen</div></h4></td><td>'+data.c3Br+'</td><td>'+data.c3Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Ukupno</div></h4></td><td>'+data.uk+'</td><td></td></tr>'+
                '</tbody>'+
            '</table>');
        } else {
            window.location.href= "/login";
        }
    });
});

$("#useEB").click(function(){
    $.get("/results/useEB", function(data){
        if(data.c1Br !== undefined){
        $("#results").html(
            '<h2 class="title">Stepen korišćenja elektronskog bankarstva</h2>'+
            '<table class="ui very celled table">'+
                '<thead><tr><th></th><th>Broj ispitanika</th><th>Udeo</th></tr></thead>'+
                '<tbody><tr><td><h4 class="ui header"><div class="content">Da</div></h4></td><td>'+data.c1Br+'</td><td>'+data.c1Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Ne</div></h4></td><td>'+data.c2Br+'</td><td>'+data.c2Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Ukupno</div></h4></td><td>'+data.uk+'</td><td></td></tr>'+
                '</tbody>'+
            '</table>');
        } else {
            window.location.href= "/login";
        }
    });
});

$("#serviceEB").click(function(){
    $.get("/results/serviceEB", function(data){
        if(data.c1Br !== undefined){
        $("#results").html(
            '<h2 class="title">Raspodela po vrstama usluga koje koriste</h2>'+
            '<table class="ui very celled table">'+
                '<thead><tr><th></th><th>Broj</th><th>Udeo</th></tr></thead>'+
                '<tbody>'+
                '<tr><td><h4 class="ui header"><div class="content">Uvid u trenutno stanje na računu</div></h4></td><td>'+data.c1Br+'</td><td>'+data.c1Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Pregled i štampu izvoda</div></h4></td><td>'+data.c2Br+'</td><td>'+data.c2Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Domaći platni promet</div></h4></td><td>'+data.c3Br+'</td><td>'+data.c3Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Međunarodni platni promet</div></h4></td><td>'+data.c4Br+'</td><td>'+data.c4Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Kupoprodaja deviza</div></h4></td><td>'+data.c5Br+'</td><td>'+data.c5Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Uvid u kursnu listu određene banke</div></h4></td><td>'+data.c6Br+'</td><td>'+data.c6Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Uvid u štednju, platne kartice i kredite</div></h4></td><td>'+data.c7Br+'</td><td>'+data.c7Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Evidenciju priliva i odliva sredstava</div></h4></td><td>'+data.c8Br+'</td><td>'+data.c8Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Pregled prometa za određeni period</div></h4></td><td>'+data.c9Br+'</td><td>'+data.c9Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Naručivanje čekova</div></h4></td><td>'+data.c10Br+'</td><td>'+data.c10Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Plaćanje računa</div></h4></td><td>'+data.c11Br+'</td><td>'+data.c11Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Sve od navedenog</div></h4></td><td>'+data.c12Br+'</td><td>'+data.c12Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Ukupno</div></h4></td><td>'+data.uk+'</td><td></td></tr>'+
                '</tbody>'+
            '</table>');
        } else {
            window.location.href= "/login";
        }
    });
});

$("#serviceNoEB").click(function(){
    $.get("/results/serviceNoEB", function(data){
        if(data.c1Br !== undefined){
        $("#results").html(
            '<h2 class="title">Raspodela po razlozima zašto ne koriste elektronsko bankarstvo</h2>'+
            '<table class="ui very celled table">'+
                '<thead><tr><th></th><th>Broj ispitanika</th><th>Udeo</th></tr></thead>'+
                '<tbody>'+
                '<tr><td><h4 class="ui header"><div class="content">Nemate uslove za koriščenje ovih usluga</div></h4></td><td>'+data.c1Br+'</td><td>'+data.c1Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Preferirate tradicionalan način pružanja usluge</div></h4></td><td>'+data.c2Br+'</td><td>'+data.c2Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Nedovoljno poznavanje elektronskog bankarstva</div></h4></td><td>'+data.c3Br+'</td><td>'+data.c3Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Nedostatak sigurnosti u izvršenje transakcija</div></h4></td><td>'+data.c4Br+'</td><td>'+data.c4Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Mogućnost zloupotrebe sredstava</div></h4></td><td>'+data.c5Br+'</td><td>'+data.c5Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Ukupno</div></h4></td><td>'+data.uk+'</td><td></td></tr>'+
                '</tbody>'+
            '</table>');
        } else {
            window.location.href= "/login";
        }
            
    });
});

$("#opinion1EB").click(function(){
    $.get("/results/opinion1EB", function(data){
        if(data.c1Br !== undefined){
        $("#results").html(
            '<h2 class="title">Raspodela na osnovu mišljenja o sigurnosti novca</h2>'+
            '<table class="ui very celled table">'+
                '<thead><tr><th></th><th>Broj ispitanika</th><th>Udeo</th></tr></thead>'+
                '<tbody>'+
                '<tr><td><h4 class="ui header"><div class="content">Potpuno nesiguran</div></h4></td><td>'+data.c1Br+'</td><td>'+data.c1Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Više nesiguran nego siguran</div></h4></td><td>'+data.c2Br+'</td><td>'+data.c2Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Više siguran nego nesiguran</div></h4></td><td>'+data.c3Br+'</td><td>'+data.c3Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Potpuno siguran</div></h4></td><td>'+data.c4Br+'</td><td>'+data.c4Ud+'%</td></tr>'+
                    '<tr><td><h4 class="ui header"><div class="content">Ukupno</div></h4></td><td>'+data.uk+'</td><td></td></tr>'+
                '</tbody>'+
            '</table>');
        } else {
            window.location.href= "/login";
        }
    });
});

$("#opinion2EB").click(function(){
    $.get("/results/opinion2EB", function(data){
        if(data.c1Br !== undefined){
            $("#results").html(
                '<h2 class="title">Raspodela na osnovu stava o elektronskom bankarstvu</h2>'+
                '<table class="ui very celled table">'+
                    '<thead><tr><th></th><th>Broj ispitanika</th><th>Udeo</th></tr></thead>'+
                    '<tbody>'+
                    '<tr><td><h4 class="ui header"><div class="content">Koristim elektronske usluge već neko vreme</div></h4></td><td>'+data.c1Br+'</td><td>'+data.c1Ud+'%</td></tr>'+
                        '<tr><td><h4 class="ui header"><div class="content">Nisam znao/la za elektronsko bankarstvo ranije - sada sam veoma zainteresovan/a</div></h4></td><td>'+data.c2Br+'</td><td>'+data.c2Ud+'%</td></tr>'+
                        '<tr><td><h4 class="ui header"><div class="content">Znao/la sam za eletronsko bankarstvo i ranije - ne želim da ga koristim</div></h4></td><td>'+data.c3Br+'</td><td>'+data.c3Ud+'%</td></tr>'+
                        '<tr><td><h4 class="ui header"><div class="content">Znao/la sam i ranije za elektronsko bankarstvo - koristiću ga</div></h4></td><td>'+data.c4Br+'</td><td>'+data.c4Ud+'%</td></tr>'+
                        '<tr><td><h4 class="ui header"><div class="content">Nisam znao/la za elektronsko bankarstvo ranije i dalje me ne zanima</div></h4></td><td>'+data.c5Br+'</td><td>'+data.c5Ud+'%</td></tr>'+
                        '<tr><td><h4 class="ui header"><div class="content">Ukupno</div></h4></td><td>'+data.uk+'</td><td></td></tr>'+
                    '</tbody>'+
                '</table>');
        } else {
            window.location.href= "/login";
        }
    });
});