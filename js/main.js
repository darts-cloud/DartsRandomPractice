$(function(){
    let db = new DartsBoard();
    db.STROKE_STYLE = '#555555';
    db.DEFAULT_COLOR = '#FFFFEE';
    db.MULTI_COLOR_RED = '#FF6666';
    db.MULTI_COLOR_GREEN = '#66CC66';
    db.SINGLE_COLOR_WHITE = '#FFFFEE';
    db.SINGLE_COLOR_BLACK = '#555555';
    db.drawBoard();
    
    for (i=1; i<=3; i++) {
        let point = random(0, 20);
        let range = random(1, 2);
        let target = "";
        if (range == 1) {
            target = point + "D";
        } else {
            target = point + "T";
        }
        if (target == "0D") {
            target = "SB";
        }
        if (target == "0T") {
            target = "DB";
        }
        $("#dart" + i).text(target);
        db.drawColor(target, "yellow");
    }
    db.refresh();
});

function random(min, max) {
    return Math.floor(Math.random() * ( max + 1 - min ) + min);
}