type TechItemProps = {
  Icon: React.ComponentType;
  name: string;
};

const TechItem = ({ Icon, name }: TechItemProps) => {
  return (
    <div className="px-4 sm:px-5 py-3 sm:py-4 border  border-yellow border-opacity-50 dark:border-opacity-30 bg-yellow bg-opacity-20 dark:bg-opacity-5 rounded text-center flex items-center justify-center sm:justify-start gap-4">
      <Icon />
      {name}
    </div>
  );
};

export default TechItem;
