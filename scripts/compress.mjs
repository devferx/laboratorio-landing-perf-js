import imagemin from "imagemin";
import pngquant from "imagemin-pngquant";
import webp from "imagemin-webp";

const directory = "./public/images/*.{webp,png}";

(async () => {
  const files = await imagemin([directory], {
    destination: "./public/images/.",
    plugins: [pngquant({ quality: [0.9, 0.9] }), webp({ quality: 90 })],
  });
  console.log(files);
})();
