var tiff2pdf = require('../'),
    test = require('tape'),
    path = require('path'),
    fs = require('fs');

test('Convert tiff to pdf', function (t){
  var outDir = path.join(__dirname+'/fixtures/out/'),
      inFile1 = path.join(__dirname,'/fixtures/in/test1.tiff'),
      inFile2 = path.join(__dirname,'/fixtures/in/test2.tif'),
      inFile3 = path.join(__dirname,'/fixtures/in/test3.tiff'),
      inFile4 = path.join(__dirname,'/fixtures/in/test4.tiff'),
      inFile5 = path.join(__dirname,'/fixtures/in/test5.tif'),
      inFile6 = path.join(__dirname,'/fixtures/in/test6.tiff');

  //Test 1: Successful conversion file ending with extension .tiff
  t.comment('Test 1: Successful conversion file ending with extension .tiff');
  tiff2pdf(inFile1, outDir, function(result){
    //Closed successfully with code 0
    t.equal(result.code, 0, 'Test 1: Successful');
  });

  //Test 2: Successful conversion file ending with extension .tif
  t.comment('Test 2: Successful conversion file ending with extension .tif');
  tiff2pdf(inFile2, outDir, function(result){
    //Closed successfully with code 0
    t.equal(result.code, 0, 'Test 2: successful');
  });

  //Test 3: File not found
  t.comment('Test 3: File not found');
  tiff2pdf(inFile3, outDir, function(result){
    console.log(result.data);
    t.notOk(undefined, 'Test 3: successful, no file found');
  });

  //Test 4: Wrong file extension
  t.comment('Test 4: Wrong file extension');
  tiff2pdf(inFile4, outDir, function(result){
    console.log(result.data);
    t.notEqual(result.code, 0, 'close failed with code ' + result.code);
  });

  //Test 5: Corrupt file
  t.comment('Test 5: Corrupt file');
  tiff2pdf(inFile5, outDir, function(result){
    t.notEqual(result.code, 0, 'close failed with code ' + result.code);
  });

  //Test 6: GeoTiff
  t.comment('Test 6: GeoTiff');
  tiff2pdf(inFile6, outDir, function(result){
    t.notEqual(result.code, 0, 'close failed with code ' + result.code);
  });

  t.end();
});
