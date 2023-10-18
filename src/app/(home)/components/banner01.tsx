import Image from "next/image";

export const BannerHm01 = () => {
    return ( 
        <Image
        src="/banner-home-01.png"
        height={0}
        width={0}
        className="h-auto w-full"
        sizes="100vw"
        alt="até 50% de desconto esse mês!"
      />
     );
}
