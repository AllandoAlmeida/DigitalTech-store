import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export const AddProductCart = ({
  text,
  description,
  onClick1,
}: {
  text: string;
  description: string;
  onClick1?: () => void;
}) => {
  const { toast } = useToast();

  return (
    <div>
    <Button
      className="bg-primary mt-8 w-full uppercase"
      variant="outline"
      onClick={() => {
        toast({
          description: text,
        });
        if (onClick1) {
          onClick1();
        }
      }}
    >
      {description}
    </Button>

    </div>
  );
};
