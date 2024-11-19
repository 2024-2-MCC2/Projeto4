import React, { useState } from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  font-family: Arial, sans-serif;
  text-align: center;
  margin: 50px;
  display: flex;
  justify-content: space-between;
`;

const CalendarWrapper = styled.div`
  display: inline-block;
  text-align: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
  width: 60%;
`;

const ConfirmedWrapper = styled.div`
  width: 30%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

const Button = styled.button`
  background-color: #0549b6;
  color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #043d92;
  }
`;

const Weekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 10px;
`;

const Weekday = styled.div`
  font-weight: bold;
  padding: 5px;
`;

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
`;

const Day = styled.div`
  padding: 20px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.2s;
  &.clickable {
    background-color: #b3d1f1;
  }
  &.selected {
    background-color: #0549b6;
    color: white;
  }
  &.empty {
    background-color: transparent;
  }
  &:not(.clickable) {
    cursor: not-allowed;
    color: #ccc;
  }
`;

const ConfirmButton = styled.button`
  background-color: #0549b6;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 15px 30px;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s;
  &:hover {
    background-color: #043d92;
  }
  &:disabled {
    background-color: #b3d1f1;
    cursor: not-allowed;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  background-color: #f44336;
  color: white;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
  z-index: 10;
  font-size: 1rem;
  width: 250px;
  max-width: 90%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.9;
`;

const ConfirmedDaysList = styled.div`
  margin-top: 20px;
  background-color: #eaf2fb;
  padding: 10px;
  border-radius: 5px;
`;

const ConfirmedDay = styled.div`
  background-color: #0549b6;
  color: white;
  padding: 10px;
  margin: 5px 0;
  border-radius: 5px;
`;
const Frase = styled.div`
font-size: 30px;
text-align: center;
justify-content: center;
font-weight: bold; 
`

const months = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

const Calendario = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [confirmedDays, setConfirmedDays] = useState([]);

  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    const startDay = date.getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < startDay; i++) {
      days.push(null);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  };

  const isPastDate = (day, month, year) => {
    const today = new Date();
    const selectedDate = new Date(year, month, day);
    return selectedDate < today;
  };

  const isSameDay = (day) => {
    const today = new Date();
    return (
      today.getDate() === day &&
      today.getMonth() === currentMonth &&
      today.getFullYear() === currentYear
    );
  };

  const handleDayClick = (day) => {
    if (day) {
      const dateObj = new Date(currentYear, currentMonth, day);
      const dayOfWeek = dateObj.getDay();

      if (dayOfWeek === 6 && !isPastDate(day, currentMonth, currentYear)) {
        const dateString = `${day}/${currentMonth + 1}/${currentYear}`;
        setSelectedDate(dateString);
        setErrorMessage('');
        setTooltipVisible(false);
      } else {
        setSelectedDate(null);
        setErrorMessage('As aulas são feitas somente de sábado e não podem ser no mesmo dia ou em dias passados.');
        setTooltipVisible(true);
      }
    }
  };

  const handleConfirm = () => {
    if (selectedDate && !isSameDay(parseInt(selectedDate.split('/')[0]))) {
      setConfirmedDays([...confirmedDays, selectedDate]);
      setSelectedDate(null);
      setTooltipVisible(false);
      setErrorMessage('');
    } else {
      setErrorMessage('Você não pode confirmar a aula para o mesmo dia.');
      setTooltipVisible(true);
    }
  };

  const days = getDaysInMonth(currentMonth, currentYear);

  return (
    <>
    <Frase>Seja Bem-vindo! Agora que você fez seu login agende sua aula conosco!</Frase>
    <CalendarContainer>
      <CalendarWrapper>
        <h1>A cada gol, um passo para o futuro!</h1>
        <p>{selectedDate ? `Você selecionou: ${selectedDate}` : 'Selecione um dia'}</p>

        <Header>
          <Button onClick={() => setCurrentMonth(currentMonth - 1)}>&lt;</Button>
          <h2>{`${months[currentMonth]} ${currentYear}`}</h2>
          <Button onClick={() => setCurrentMonth(currentMonth + 1)}>&gt;</Button>
        </Header>

        <Weekdays>
          {daysOfWeek.map((day) => (
            <Weekday key={day}>{day}</Weekday>
          ))}
        </Weekdays>

        <Days>
          {days.map((day, index) => (
            <Day
              key={index}
              className={`${day && !isPastDate(day, currentMonth, currentYear) ? 'clickable' : ''} 
                ${selectedDate === `${day}/${currentMonth + 1}/${currentYear}` ? 'selected' : ''}`}
              onClick={() => handleDayClick(day)}
            >
              {day || ''}
            </Day>
          ))}
        </Days>

        {tooltipVisible && <Tooltip>{errorMessage}</Tooltip>}

        <ConfirmButton
          onClick={handleConfirm}
          disabled={!selectedDate || isSameDay(parseInt(selectedDate.split('/')[0]))}
        >
          Confirmar sua presença!
        </ConfirmButton>
      </CalendarWrapper>

      <ConfirmedWrapper>
        <h2>Aulas Confirmadas</h2>
        <ConfirmedDaysList>
          {confirmedDays.length > 0 ? (
            confirmedDays.map((day, index) => <ConfirmedDay key={index}>{day}</ConfirmedDay>)
          ) : (
            <p>Nenhuma aula confirmada ainda.</p>
          )}
        </ConfirmedDaysList>
      </ConfirmedWrapper>
    </CalendarContainer>
    </>
  );
};

export default Calendario;