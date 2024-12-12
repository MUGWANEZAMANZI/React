import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
  <div className="Backhome" >
    <p onClick={handleBack}>
      <img src="back.png" alt="back button" className="Back" />
    </p>
    <p>Back Home</p>
  </div>
  );
}

export default BackButton;
