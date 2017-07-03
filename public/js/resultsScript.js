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
            new Chart(document.getElementById("myChart"), {
                type: 'bar',
                data: {
                  labels: ["Muškarci", "Žene"],
                  datasets: [
                    {
                      label: "Broj ispitanika",
                      data: [data.mBr, data.zBr],
                      fill: false,
                      backgroundColor: ["rgba(63, 127, 191, 0.4)", "rgba(195, 59, 95, 0.4)"],
                      borderColor: ["#3e95cd", "#8e5ea2"],
                      borderWidth: 1
                    }
                  ]
                },
                options: {
                  legend: { display: false },
                  title: {
                    display: true,
                    text: 'Raspodela ispitanika po polu'
                  },
                  scales: {
                      yAxes: [{
                        ticks: {
                            beginAtZero: "true"
                        } 
                      }],
                      xAxes: [{
                        barPercentage: 0.4
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
            var ctx = $("#myChart")[0].getContext("2d");
            new Chart(document.getElementById("myChart"), {
                type: 'bar',
                data: {
                  labels: ["18-35", "36-55", "56+"],
                  datasets: [
                    {
                      label: "Broj ispitanika",
                      data: [data.c1Br, data.c2Br, data.c3Br],
                      fill: false,
                      backgroundColor: ["rgba(63, 127, 191, 0.4)", "rgba(195, 59, 95, 0.4)", "rgba(239, 137, 35, 0.4)"],
                      borderColor: ["#3e95cd", "#8e5ea2", "rgb(184, 99, 13)"],
                      borderWidth: 1
                    }
                  ]
                },
                options: {
                  legend: { display: false },
                  title: {
                    display: true,
                    text: 'Raspodela ispitanika po starosti'
                  },
                  scales: {
                      yAxes: [{
                        ticks: {
                            beginAtZero: "true"
                        } 
                      }],
                      xAxes: [{
                        barPercentage: 0.4
                      }]
                  }
                }
            });
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
            var ctx = $("#myChart")[0].getContext("2d");
            new Chart(document.getElementById("myChart"), {
                type: 'bar',
                data: {
                  labels: ["IV stepen", "VI stepen", "VII stepen"],
                  datasets: [
                    {
                      label: "Broj ispitanika",
                      data: [data.c1Br, data.c2Br, data.c3Br],
                      fill: false,
                      backgroundColor: ["rgba(63, 127, 191, 0.4)", "rgba(195, 59, 95, 0.4)", "rgba(239, 137, 35, 0.4)"],
                      borderColor: ["#3e95cd", "#8e5ea2", "rgb(184, 99, 13)"],
                      borderWidth: 1
                    }
                  ]
                },
                options: {
                  legend: { display: false },
                  title: {
                    display: true,
                    text: 'Raspodela ispitanika po obrazovanju'
                  },
                  scales: {
                      yAxes: [{
                        ticks: {
                            beginAtZero: "true"
                        } 
                      }],
                      xAxes: [{
                        barPercentage: 0.4
                      }]
                  }
                }
            });
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
            var ctx = $("#myChart")[0].getContext("2d");
            new Chart(document.getElementById("myChart"), {
                type: 'bar',
                data: {
                  labels: ["Da", "Ne"],
                  datasets: [
                    {
                      label: "Broj ispitanika",
                      data: [data.c1Br, data.c2Br],
                      fill: false,
                      backgroundColor: ["rgba(63, 127, 191, 0.4)", "rgba(195, 59, 95, 0.4)"],
                      borderColor: ["#3e95cd", "#8e5ea2"],
                      borderWidth: 1
                    }
                  ]
                },
                options: {
                  legend: { display: false },
                  title: {
                    display: true,
                    text: 'Stepen korišćenja elektronskog bankarstva'
                  },
                  scales: {
                      yAxes: [{
                        ticks: {
                            beginAtZero: "true"
                        } 
                      }],
                      xAxes: [{
                        barPercentage: 0.4
                      }]
                  }
                }
            });
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
            var ctx = $("#myChart")[0].getContext("2d");
            new Chart(document.getElementById("myChart"), {
                type: 'bar',
                data: {
                  labels: [
                      "Uvid u trenutno stanje na računu",
                      "Pregled i štampu izvoda",
                      "Domaći platni promet",
                      "Međunarodni platni promet",
                      "Kupoprodaja deviza",
                      "Uvid u kursnu listu određene banke",
                      "Uvid u štednju, platne kartice i kredite",
                      "Evidenciju priliva i odliva sredstava",
                      "Pregled prometa za određeni period",
                      "Naručivanje čekova",
                      "Plaćanje računa",
                      "Sve od navedenog"
                    ],
                  datasets: [
                    {
                      label: "",
                      data: [data.c1Br, data.c2Br, data.c3Br, data.c4Br, data.c5Br, data.c6Br, data.c7Br, data.c8Br, data.c9Br, data.c10Br, data.c11Br, data.c12Br],
                      fill: false,
                      backgroundColor: ["rgba(63, 127, 191, 0.4)", "rgba(195, 59, 95, 0.4)", "rgba(239, 137, 35, 0.4)", "rgba(43, 185, 55, 0.4)","rgba(226, 69, 192, 0.4)", "rgba(69, 226, 194, 0.4)", "rgba(156, 150, 237, 0.4)", "rgba(24, 17, 232, 0.73)", "rgba(18, 16, 17, 0.4)", "rgba(87, 238, 150, 0.4)", "rgba(230, 251, 75, 0.4)", "rgba(75, 163, 251, 0.4)"],
                      borderColor: ["#3e95cd", "#8e5ea2", "rgb(184, 99, 13)", "rgb(184, 99, 13)", "rgb(184, 99, 13)", "rgb(184, 99, 13)", "rgb(184, 99, 13)", "rgb(184, 99, 13)", "rgb(184, 99, 13)", "rgb(184, 99, 13)", "rgb(184, 99, 13)", "rgb(184, 99, 13)"],
                      borderWidth: 1
                    }
                  ]
                },
                options: {
                  legend: { display: false },
                  title: {
                    display: true,
                    text: 'Raspodela po vrstama usluga koje koriste'
                  },
                  scales: {
                      yAxes: [{
                        ticks: {
                            beginAtZero: "true"
                        } 
                      }],
                      xAxes: [{
                        barPercentage: 0.4
                      }]
                  }
                }
            });
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
            var ctx = $("#myChart")[0].getContext("2d");
            new Chart(document.getElementById("myChart"), {
                type: 'bar',
                data: {
                  labels: ["Nemate uslove za koriščenje ovih usluga", "Preferirate tradicionalan način pružanja usluge", "Nedovoljno poznavanje elektronskog bankarstva", "Nedostatak sigurnosti u izvršenje transakcija", "Mogućnost zloupotrebe sredstava"],
                  datasets: [
                    {
                      label: "Broj ispitanika",
                      data: [data.c1Br, data.c2Br, data.c3Br, data.c4Br, data.c5Br],
                      fill: false,
                      backgroundColor: ["rgba(63, 127, 191, 0.4)", "rgba(195, 59, 95, 0.4)", "rgba(239, 137, 35, 0.4)", "rgba(43, 185, 55, 0.4)", "rgba(87, 238, 150, 0.4)"],
                      borderColor: ["#3e95cd", "#8e5ea2", "rgb(184, 99, 13)", "rgb(184, 99, 13)", "rgb(184, 99, 13)"],
                      borderWidth: 1
                    }
                  ]
                },
                options: {
                  legend: { display: false },
                  title: {
                    display: true,
                    text: 'Raspodela po razlozima zašto ne koriste elektronsko bankarstvo'
                  },
                  scales: {
                      yAxes: [{
                        ticks: {
                            beginAtZero: "true"
                        } 
                      }],
                      xAxes: [{
                        barPercentage: 0.4
                      }]
                  }
                }
            });
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
            var ctx = $("#myChart")[0].getContext("2d");
            new Chart(document.getElementById("myChart"), {
                type: 'bar',
                data: {
                  labels: ["Potpuno nesiguran", "Više nesiguran nego siguran", "Više siguran nego nesiguran", "Potpuno siguran"],
                  datasets: [
                    {
                      label: "Broj ispitanika",
                      data: [data.c1Br, data.c2Br, data.c3Br, data.c4Br],
                      fill: false,
                      backgroundColor: ["rgba(63, 127, 191, 0.4)", "rgba(195, 59, 95, 0.4)", "rgba(239, 137, 35, 0.4)", "rgba(87, 238, 150, 0.4)"],
                      borderColor: ["#3e95cd", "#8e5ea2", "rgb(184, 99, 13)", "rgb(184, 99, 13)"],
                      borderWidth: 1
                    }
                  ]
                },
                options: {
                  legend: { display: false },
                  title: {
                    display: true,
                    text: 'Raspodela na osnovu mišljenja o sigurnosti novca'
                  },
                  scales: {
                      yAxes: [{
                        ticks: {
                            beginAtZero: "true"
                        } 
                      }],
                      xAxes: [{
                        barPercentage: 0.4
                      }]
                  }
                }
            });
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
                var ctx = $("#myChart")[0].getContext("2d");
            new Chart(document.getElementById("myChart"), {
                type: 'bar',
                data: {
                  labels: ["Koristim elektronske usluge već neko vreme", "Nisam znao/la za elektronsko bankarstvo ranije - sada sam veoma zainteresovan/a", "Znao/la sam za eletronsko bankarstvo i ranije - ne želim da ga koristim", "Znao/la sam i ranije za elektronsko bankarstvo - koristiću ga", "Nisam znao/la za elektronsko bankarstvo ranije i dalje me ne zanima"],
                  datasets: [
                    {
                      label: "Broj ispitanika",
                      data: [data.c1Br, data.c2Br, data.c3Br, data.c4Br, data.c5Br],
                      fill: false,
                      backgroundColor: ["rgba(63, 127, 191, 0.4)", "rgba(195, 59, 95, 0.4)", "rgba(239, 137, 35, 0.4)", "rgba(43, 185, 55, 0.4)", "rgba(87, 238, 150, 0.4)"],
                      borderColor: ["#3e95cd", "#8e5ea2", "rgb(184, 99, 13)", "rgb(184, 99, 13)", "rgb(184, 99, 13)"],
                      borderWidth: 1
                    }
                  ]
                },
                options: {
                  legend: { display: false },
                  title: {
                    display: true,
                    text: 'Raspodela na osnovu stava o elektronskom bankarstvu'
                  },
                  scales: {
                      yAxes: [{
                        ticks: {
                            beginAtZero: "true"
                        } 
                      }],
                      xAxes: [{
                        barPercentage: 0.4
                      }]
                  }
                }
            });
        } else {
            window.location.href= "/login";
        }
    });
});