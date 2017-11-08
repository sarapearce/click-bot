//small loop for dropping into console: made for tsi and mmr products

for (var i = 0; i < 15; i++) {

    setTimeout(function () {
        if ($(".e-answer-select")[0]) {
            $(".e-answer-select")[0].click();
            $("button.e-answer-save")[0].click();
        } else {
            console.log('test1');
        }
    }, 1500*i);



    setTimeout(function () {
        if ($("button.e-next")) {
            $("button.e-next").click();
        } else {
            console.log('test3');
        }
    }, 1700*i);
   
}
