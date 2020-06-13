//
// From: https://gist.github.com/sshrpe/1228841/00bdf8a77e8384062ead7e230759cefacc7724ce
//
if (window.FileReader) {
  // const rFilter = /^(image\/bmp|image\/cis-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x-cmu-raster|image\/x-cmx|image\/x-icon|image\/x-portable-anymap|image\/x-portable-bitmap|image\/x-portable-graymap|image\/x-portable-pixmap|image\/x-rgb|image\/x-xbitmap|image\/x-xpixmap|image\/x-xwindowdump)$/i;
  function doTest(arg) {
    console.log('doTest', arg);
    const myfile = arg || 'fileInput0';
    const files = document.getElementById(myfile).files;
    console.log('files', files);
    const items = [];
    let index = 0;
    for (file of files) {
      index++;
      console.log(index, 'file', file);
      const previewid = 'uploadPreview+_' + index;
      var reader = new FileReader();
      reader.onload = function (event) {
        const preview = document.getElementById(previewid);
        preview.src = event.target.result;
        // preview.style.display = 'block';
        preview.style.display = 'inline';
      };
      reader.readAsDataURL(file);
      items.push(
        '<img id="' + previewid + '" src="" width="200" style="display:none" />'
      );
    }
    document.getElementById('gallery').innerHTML = items.join('\n');
  }
} else {
  alert('FileReader object not found :( \nTry using Chrome, Firefox or WebKit');
}

// File {name: "IMG_0054.JPG",
// lastModified: 1518893576000,
// webkitRelativePath: "",
// size: 175584,
// type: "image/jpeg", …}

//     <img id="uploadPreview" src="" width="200" style="display:none" />
