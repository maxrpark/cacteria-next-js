import { AlertMessageInt } from "../../ts/interfaces/interfaces";

const AlertMessage: React.FC<AlertMessageInt> = ({ message, type }) => {
  return (
    <div className={`border-${type}  border rounded my-2`}>
      <p className={`text-${type} m-1 text-center`}>
        <small>{message}</small>
      </p>
    </div>
  );
};

export default AlertMessage;
