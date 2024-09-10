const ConferenceInfo = () => {
  return (
    <div className="grow">
      <div className="mx-auto mt-10 max-w-2xl rounded-lg bg-gray-900 p-8 text-gray-100 shadow-lg">
        <h2 className="mb-5 text-center text-xl font-semibold">
          Вітаємо на конференції Nail Moment 2024!
        </h2>
        <div className="mb-6">
          <p className="mb-4">
            Переходь в телеграм канал ⬇️ Там буде вся актуальна інформація
            <a
              href="https://t.me/+NXNyzuGV84AxYzdk"
              className="ml-2 inline-block text-blue-500 hover:text-blue-300"
            >
              Telegram Channel
            </a>
          </p>
          <p>
            Якщо будуть питання пиши нам в підтримку ⬇️
            <a
              href="https://t.me/+THVRcBRhyWc5OWY0"
              className="ml-2 inline-block text-blue-500 hover:text-blue-300"
            >
              Support
            </a>
          </p>
        </div>
        <div className="mb-6">
          <p className="font-medium">
            <span role="img" aria-label="Calendar">
              🗓
            </span>{" "}
            13 Жовтня
          </p>
          <p className="font-medium">
            <span role="img" aria-label="Clock">
              ⏰
            </span>{" "}
            09:00-18:00
          </p>
          <p className="font-medium">
            <span role="img" aria-label="Location">
              📌
            </span>{" "}
            Jozefa Szanajcy 17/19, 03-481 Warszawa
          </p>
        </div>
        <div className="text-center">
          <p className="mb-4">До зустрічі на Nail Moment 2024!</p>
          <p className="text-sm text-gray-400">З повагою,</p>
          <p className="text-sm text-gray-400">Організатори конференції.</p>
        </div>
      </div>
    </div>
  );
};

export default ConferenceInfo;
