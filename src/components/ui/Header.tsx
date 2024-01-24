import { Card } from "./card";

const Header = () => {
  return (
    <Card className="p-3 m-0 border-2 border-background-foreground rounded-t-none">
      <div>
        <p className="text-primary font-bold text-xl">
          {"<"}
          <span className="">MatheusBorges</span>
          {"/>"}
        </p>
      </div>
    </Card>
  );
};

export default Header;
