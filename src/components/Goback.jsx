import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function GoBack() {
  const navigate = useNavigate();
  return (
    <Button
      className=""
      onClick={() => {
        navigate(-1);
      }}
    >
      GoBack
    </Button>
  );
}

export default GoBack;
