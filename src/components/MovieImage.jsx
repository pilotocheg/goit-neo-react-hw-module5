const defaultImg =
  "https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg";

export default function MovieImage({ className, src, alt, width }) {
  const originalWidth = width === "original";

  return (
    <img
      className={className}
      src={
        src
          ? `https://image.tmdb.org/t/p/${
              originalWidth ? "original" : `w${width}`
            }${src}`
          : defaultImg
      }
      width={originalWidth ? undefined : width}
      alt={alt}
    />
  );
}
