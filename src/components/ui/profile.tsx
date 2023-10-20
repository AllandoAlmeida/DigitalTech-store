import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "@radix-ui/react-separator";
import { useSession } from "next-auth/react";

export const Profile = () => {    
  
  const { status, data } = useSession();
    return ( 
        <>
        {status == "authenticated" && data?.user && (
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 py-5">
                  <Avatar>
                    <AvatarFallback>
                      {data.user.name?.[0].toUpperCase()}
                    </AvatarFallback>
                    {data.user.image && (
                      <AvatarImage
                        src={data.user.image}
                        className="rounded-md"
                      ></AvatarImage>
                    )}
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="font-medium">{data.user.name}</p>
                    <p className="text-sm opacity-75">Boas Compras!</p>
                  </div>
                </div>
                <Separator />
              </div>
            )}
        </>
     );
}