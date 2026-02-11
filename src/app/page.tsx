export default function Home() {
  return (
    <main className="page">
      <article className="sheet">
        <header className="sheet-header">
          <h1>СЕРГЕЙ ПРОКОПЕНКО</h1>
          <p className="contacts">
            <span className="vacancy-line">
              Вакансия: Производственная практика. Технологическая
              (проектно-технологическая) практика
            </span>
            <span className="contact-line">
              Моб: +7 914 566 98-08 | E-mail:{" "}
              <a href="mailto:prokopenko.si@dvfu.ru">prokopenko.si@dvfu.ru</a>
            </span>
          </p>
        </header>

        <section className="sheet-section">
          <p className="profile-text">
            Студент 3 курса направления «Информатика и вычислительная техника»,
            профиль «Цифровые двойники». Имею практический опыт разработки и
            прототипирования программных решений. Работал с REST API, SQL и
            современными инструментами разработки, участвовал в создании
            backend-сервисов и проектировании баз данных.
          </p>
        </section>

        <section className="sheet-section">
          <h2>ОПЫТ РАБОТЫ</h2>
          <p className="compact">
            Коммерческий опыт отсутствует.
            <br />В рамках обучения и самостоятельных проектов:
          </p>
          <ul>
            <li>
              Разрабатывал учебные и pet-проекты (backend-сервисы, базы данных,
              API), применяя современные технологии разработки.
            </li>
            <li>
              Проектировал и реализовывал приложения с клиент-серверной
              архитектурой.
            </li>
            <li>
              Работал с системами контроля версий (Git), структурировал код и
              документацию проектов.
            </li>
            <li>
              Закрывал полный цикл задач: анализ требований, проектирование,
              реализация, тестирование.
            </li>
          </ul>
        </section>

        <section className="sheet-section">
          <h2>ОБРАЗОВАНИЕ</h2>
          <p>
            <strong>2023 - 2027</strong> Дальневосточный федеральный университет,
            Информатика и вычислительная техника, профиль «Цифровые двойники»,
            студент 3 курса.
          </p>
        </section>

        <section className="sheet-section">
          <h2>ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ</h2>
          <dl className="info-grid">
            <dt>Скиллы</dt>
            <dd>
              Python, JavaScript, Kotlin, SQL (PostgreSQL), проектирование баз
              данных, REST API, Git, Docker (базовый уровень), алгоритмы и
              структуры данных, ООП.
            </dd>

            <dt>Языки</dt>
            <dd>English (B1), Russian (родной)</dd>

            <dt>Хобби</dt>
            <dd>
              Разработка pet-проектов, участие в технических сообществах,
              самостоятельное изучение новых технологий.
            </dd>
          </dl>
        </section>
      </article>
    </main>
  );
}
