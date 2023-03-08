var path = require('path');
var fs = require('fs');
var archiver = require('archiver');
var addSentence = function (param) {
    param += "\n";
    fs.appendFile('text.txt', param, function (err) {
        if (err) {
            console.log(err);
        }
        console.log('completed');
    });
};
var copyFile = function (source, destination) {
    if (!fs.existsSync(source)) {
        console.error("Kaynak dosya bulunamad\u0131: ".concat(source));
        return;
    }
    if (fs.existsSync(destination) && fs.lstatSync(destination).isDirectory()) {
        destination = "".concat(destination, "/").concat(source.split('/').pop());
    }
    try {
        fs.copyFileSync(source, destination);
        console.log("Dosya ba\u015Far\u0131yla kopyaland\u0131: ".concat(destination));
    }
    catch (error) {
        console.error("Dosya kopyalan\u0131rken hata olu\u015Ftu: ".concat(error));
    }
};
var zipFolder = function (folderPath) {
    var output = fs.createWriteStream(folderPath + '.zip');
    var archive = archiver('zip', { zlib: { level: 9 } });
    output.on('close', function () {
        console.log("\"".concat(folderPath, ".zip\" ZIP ar\u015Fivi olu\u015Fturuldu (").concat(archive.pointer(), " bayt)"));
    });
    archive.on('error', function (error) {
        console.error("ZIP ar\u015Fivi olu\u015Fturulurken bir hata olu\u015Ftu: ".concat(error));
    });
    archive.pipe(output);
    archive.directory(folderPath, false);
    archive.finalize();
};
zipFolder('C:/Users/EMREPC/Desktop/b');
copyFile('C:/Users/EMREPC/Desktop/a.txt', 'C:/Users/EMREPC/Desktop/projects/');
addSentence("hi sirr");
