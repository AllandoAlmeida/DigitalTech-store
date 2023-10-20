import Image from "next/image";

export const ImageCatalog = ({
  src,
  alt
}: {
  src: string;
  alt:string
}) => {
  return (
    <div className="mt-5">
      <Image
        src={src}
        height={0}
        width={0}
        sizes="100vw"
        alt={alt}
        className="h-auto max-h-[70%] w-auto max-w-[80%]"
        style={{
          objectFit: 'contain',
        }}
      />
    </div>
  );
};
