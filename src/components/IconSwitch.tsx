import { Icon } from "@mui/material";

export const IconSwitch:React.FC<{icon: string, onSwitch: any}> = ({icon, onSwitch}) => {
  return (
    <div>
      <Icon onClick={onSwitch}>{icon}</Icon>
    </div>
  );
};
