// imagemin.config.js
import imagemin from "imagemin"
import imageminMozjpeg from "imagemin-mozjpeg"
import imageminPngquant from "imagemin-pngquant"
import path from "path"

(async () => {
  const files = await imagemin(['docs/assets/images/*.{jpg,png}'], {
    destination: 'docs/images/assets/optimized',
    plugins: [
      imageminMozjpeg({ quality: 75 }),
      imageminPngquant({
        quality: [0.6, 0.8]
      })
    ]
  });

  console.log(files);
})();
