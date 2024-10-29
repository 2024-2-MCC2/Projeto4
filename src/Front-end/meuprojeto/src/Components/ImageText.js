import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
  margin-top: 20px;
`;

const ImageContainer = styled.main`
  object-fit: cover;
  width: 200px; /* Define uma largura fixa para todas as imagens */
  height: 150px; /* Define uma altura fixa para todas as imagens */
  margin: 0 5px;



  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`;

const Text = styled.p`
  text-align: center;
  margin: 10px 0;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #394c73;
  }
`;

function ImageText({ patrocinios }) {  
  const navigate = useNavigate();

  return (
    <div>
      <Container>
        {patrocinios && patrocinios.length > 0 ? ( // Verifica se 'patrocinios' é válido
          patrocinios.map((patrocinio, index) => (  
            <ImageContainer key={index}> 
              <img src={patrocinio.src} alt={patrocinio.alt} />
              <Text>{patrocinio.text}</Text>
              <Button onClick={() => navigate(`/Patrocinador/${patrocinio.id}`)}>Saiba mais</Button>
            </ImageContainer>
          ))
        ) : (
          <p>Nenhum patrocínio encontrado.</p>  // Fallback caso 'patrocinios' seja vazio ou indefinido
        )}
      </Container>
    </div>
  );
}

export default ImageText;
