import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ImageContainer = styled.div`
  object-fit: cover;
  width: 250px; /* Largura fixa para todas as imagens */
  height: 250px; /* Altura fixa para todas as imagens */
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

function ImageTexto({ times }) {  
  const navigate = useNavigate();

  return (
    <Container>
      {times && times.length > 0 ? (
        times.map((time, index) => (  
          <ImageContainer key={index}> 
            <img src={time.src} alt={time.alt} />
            <Text>{time.text}</Text>
            {/* Descomente abaixo para habilitar a navegação */}
            {/* <Button onClick={() => navigate(`/Patrocinador/${time.id}`)}>Saiba mais</Button> */}
          </ImageContainer>
        ))
      ) : (
        <p>Nenhum time encontrado.</p>  // Mensagem alternativa se 'times' estiver vazio ou indefinido
      )}
    </Container>
  );
}

ImageTexto.propTypes = {
  times: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      // Descomente se quiser usar 'id' para navegação
      // id: PropTypes.number.isRequired,
    })
  ),
};

export default ImageTexto;
