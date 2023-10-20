import { Button } from "./button";

export const NavigationMenuAuth = ({
  onClick,
  icon: Icon,
  text,
}: {
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  icon: React.ElementType;
  text: string;
}) => {
  const IconComponent = Icon as unknown as React.FC<{ size: number }>;
  return (
    <Button
      onClick={onClick}
      variant={"outline"}
      className="w-full justify-start gap-2"
    >
      {Icon && <IconComponent size={16} />}
      {text}
    </Button>
  );
};
