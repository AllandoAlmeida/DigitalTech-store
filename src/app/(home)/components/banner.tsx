import Image from "next/image";

export const Banner = ({
  src,
  discount,
  text
}: {
  src: string;
  discount: number;
  text?:string
}) => {
  return (
    <div className="mt-5 px-5">
      <Image
        src={src}
        height={0}
        width={0}
        className="h-auto w-full "
        sizes="100vw"
        alt={`até ${discount}% de desconto ${text}!`}
      />
    </div>
  );
};
