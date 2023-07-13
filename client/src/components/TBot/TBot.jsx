import React, { useState, useEffect, useRef } from 'react';
import { FaTelegramPlane } from 'react-icons/fa';

const TBot = ({ data }) => {
  const [isInputVisible, setInputVisible] = useState(false);
  const [chatId, setChatId] = useState('');
  const [responseMessage, setResponseMessage] = useState(null);
  const inputRef = useRef(null);

  const handleClick = () => {
    setInputVisible(prevIsInputVisible => !prevIsInputVisible);
  };

  const handleInputChange = (event) => {
    setChatId(event.target.value);
  };

  const handleSendClick = () => {
    fetch('https://nds-server.vercel.app/send-news', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, chatId }),
    })
      .then((response) => {
        response.ok ? setResponseMessage('Сообщение отправлено') : setResponseMessage('chat_id неверный, попробуйте еще раз');

        setTimeout(() => {
          setResponseMessage(null);
        }, 2000);
      })
      .catch((error) => {
        // Обработка ошибки
        // ...
      });

    setInputVisible(false);
    setChatId('');
  };

  useEffect(() => {
    if (isInputVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isInputVisible]);

  const handleInputBlur = () => {
    if (!inputRef.current.value) {
      setInputVisible(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && chatId.length > 0) {
      handleSendClick();
    }
  };

  return (
    <>
      <FaTelegramPlane fill="currentColor" className="icon_tg cursor-pointer" onClick={handleClick} />

      {isInputVisible && (
        <div className="flex absolute -top-4 left-0">
          <input
            className="font-search w-28 mr-2 h-6 rounded bg-base-200 pl-2 text-sm lg:text-xs focus:bg-base-100 focus:outline-0"
            type="text"
            placeholder="Ваш chat_id"
            value={chatId}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyUp={handleKeyPress}
            ref={inputRef}
          />
          <button onClick={handleSendClick}>Отправить</button>
        </div>
      )}
      {responseMessage && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white bg-base-500 dark:text-base-500 dark:bg-base-400 py-2 px-4 rounded z-50">
          {responseMessage}
        </div>
      )}
    </>
  );
};

export default TBot;
