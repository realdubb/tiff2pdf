# tiff2pdf

[![build status](https://secure.travis-ci.org/cwhite911/tiff2pdf.png)](http://travis-ci.org/cwhite911/tiff2pdf)

Coverts tiff images to pdfs utilizing [libtiff](http://www.remotesensing.org/libtiff/man/tiff2pdf.1.html)


### `tiff2pdf(tiff, outPath)`

Converts tiff image into pdf document using tifflib (tiff2pdf).

### Parameters

| parameter | type   | description |
| --------- | ------ | ----------- |
| `tiff`   | string | input tiff image  |
| `outPath`  | string | output path   |


### Example

```js
tiff2pdf('test.tiff', 'c:/testing.pdf', function(result){
   console.log(result);
});
```

## Installation

Requires [nodejs](http://nodejs.org/).

```sh
$ npm install tiff2pdf
```

## Tests

```sh
$ npm test
```
