// BackButton.js
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return <button className='bg-blue-400' onClick={handleBack}>Go Back</button>;
}

export default BackButton;
