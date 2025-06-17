type TechListProps = {
  title: string;
  children: React.ReactNode;
};
type TechGroupProps = {
  children: React.ReactNode;
};
type TechItemProps = {
  Icon: React.ComponentType;
  name: string;
};

const TechList = ({ children, title }: TechListProps) => (
  <div className="flex flex-col justify-start gap-2">
    <h4 className="md:text-2xl text-2xl font-semibold">{title}</h4>
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-2">{children}</div>
  </div>
);

const TechGroup = ({ children }: TechGroupProps) => (
  <div className="grid grid-cols-1 gap-2 xs:grid-cols-2 sm:col-span-2">{children}</div>
);

const TechItem = ({ Icon, name }: TechItemProps) => {
  return (
    <div
      className="px-4 sm:px-5 py-3 sm:py-4 border border-yellow border-opacity-50 bg-yellow bg-opacity-20 hover:bg-opacity-40 hover:border-opacity-70 
      dark:border-opacity-30 dark:bg-opacity-5 dark:hover:bg-opacity-10 dark:hover:border-opacity-35 
      rounded text-center flex items-center justify-center sm:justify-start gap-4 cursor-default"
    >
      <Icon />
      {name}
    </div>
  );
};

const TechStack = {
  List: TechList,
  Group: TechGroup,
  Item: TechItem,
};

export default TechStack;
