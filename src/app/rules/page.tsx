import Link from "next/link";
import React from "react";

const CompetitionRulesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="text-lg block mb-4 text-center font-normal text-primary-foreground"
      >
        {"< Назад"}
      </Link>
      <div className="max-w-4xl mx-auto bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-xl overflow-hidden">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-white mb-8 border-b border-blue-300 pb-4">
            Умови участі у змаганнях &quot;Найкращий френч&quot; та
            &quot;Корейський дизайн&quot; від Nail Moment 3.0
          </h1>
          <div className="text-sm text-gray-200 mb-6">
            м. Варшава Дата затвердження: 15.08.2024
          </div>
          <div className="space-y-6 text-gray-100">
            <p className="font-semibold italic">
              Вітаємо! Ти майстер нігтьового сервісу та обожнюєш свою справу?
              Запрошуємо тебе взяти участь у наших конкурсах &quot;Найкращий
              френч&quot; та &quot;Корейський дизайн&quot;! Це твій шанс
              продемонструвати свої вміння, надихнутися новими ідеями та
              отримати визнання від професійної спільноти.
            </p>
            <p className="font-semibold italic">
              Наш захід &ndash; це унікальна можливість показати свою творчість,
              навички та вміння у конкурентному середовищі. Не пропусти шанс
              взяти участь та позмагатися за звання найкращого!
            </p>

            <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-4">
              ЕТАПИ КОНКУРСУ
            </h2>
            <ol className="list-decimal list-inside space-y-4 pl-4">
              <li>
                <span className="font-bold">Реєстрація: </span>
                Для участі в конкурсах необхідно попередньо заповнити анкету на
                сайті під кожною номінацією, в якій бажаєш змагатися.
                <span className="font-bold">
                  {" "}
                  Кількість місць обмежена до 50 учасників у кожному конкурсі
                </span>
                , тому не зволікай з реєстрацією! Після реєстрації ти отримаєш
                деталі конкурсу.
              </li>
              <li>
                <span className="font-bold">Обладнання: </span>З собою можна
                взяти тільки улюблений пензлик. Усі інші матеріали будуть надані
                організаторами.
              </li>
            </ol>

            <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-4">
              ОПИС ЗМАГАНЬ
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  1. Конкурс &quot;Найкращий френч&quot;:
                </h3>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>
                    <span className="font-bold">Матеріали: </span>
                    Тіпси, Камуфлюючі бази, Білий лак або гель-фарба, Пензлик
                  </li>
                  <li>
                    <span className="font-bold">Завдання: </span>
                    Намалюй рівний та красивий френч на одній тіпсі за 5 хвилин.
                  </li>
                  <li>
                    <span className="font-bold">Критерії оцінювання: </span>
                    Рівномірність покриття, Співвідношення ширини лінії френчу
                    до основного покриття, Висота та якість промальовування
                    вусиків
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  2. Конкурс &quot;Корейський дизайн&quot;:
                </h3>
                <ul className="list-disc list-inside pl-4 space-y-2">
                  <li>
                    <span className="font-bold">Матеріали: </span>
                    Тіпси, Кольорові гель лаки, Пензлик, Бази, Втирка,
                    Об&apos;ємний гель, Поталь, Декор для дизайнів
                  </li>
                  <li>
                    <span className="font-bold">Завдання: </span>
                    За 5 хвилин створити креативний дизайн у корейському стилі
                    із запропонованих матеріалів.
                  </li>
                  <li>
                    <span className="font-bold">Критерії оцінювання: </span>
                    Креативність, Стиль дизайну
                  </li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-4">
              УМОВИ УЧАСТІ
            </h2>
            <p>
              У конкурсі можуть взяти участь майстри нігтьового сервісу з
              будь-якого міста. Без обмежень у віці.
            </p>

            <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-4">
              СУДДІ ТА НАГОРОДИ
            </h2>
            <p>
              Конкурси оцінюватимуть професійні судді. Переможці кожного
              змагання отримають приз та визнання на заході.
            </p>

            <h2 className="text-2xl font-bold text-blue-300 mt-8 mb-4">
              СТРОКИ
            </h2>
            <ul className="list-disc list-inside pl-4 space-y-2">
              <li>
                <span className="font-bold">20 серпня 2024 </span>
                &ndash; старт прийому заявок.
              </li>
              <li>
                <span className="font-bold">07 жовтня 2024 </span>
                &ndash; останній день прийому заявок або до заповнення всіх
                місць у кожній номінації.
              </li>
              <li>
                <span className="font-bold">13 жовтня 2024 </span>
                &ndash; день проведення конкурсів та оголошення переможців.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionRulesPage;
