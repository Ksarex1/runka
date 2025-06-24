import { createI18n } from 'vue-i18n'

const messages = {
    en: {
        header: {
            about: "About us",
            events: "Events",
            products: "Products",
            services: "Services",
            contacts: "Contacts",
            search: "Search...",
            login: "Login",
            register: "Register",
            account: "My Account",
            logout: "Logout",
            adress: "Nizhny Novgorod, 9 Nesterova St., office 804",
            sections: {
                about: {
                    statuses: "Company statuses and certificates",
                    letters: "Letters of appreciation",
                    jobs: "Jobs at Runa S",
                    policy: "Personal data policy",
                    consent: "Consent to data processing"
                },
                events: {
                    news: "News",
                    calendar: "Events calendar"
                },
                products: {
                    gov: "1C solutions for government",
                    healthcare: "1C healthcare solutions",
                    licenses: "Client licenses",
                    server: "Server licenses"
                },
                services: {
                    support: "1C support",
                    training: "Certified training center"
                },
                info: {
                    answers: "1C answers",
                    releases: "Current releases",
                    configs: "Configuration check"
                },
                kubik: {
                    info: "KUBiK Training Center",
                    webinars: "Webinars",
                    courses: "Courses"
                }
            }
        },

        welcome: {
            title: "Precise solutions for effective accounting",
            paragraph: "We solve the most difficult automation tasks in government institutions in the simplest ways. We are ready to take on any task from the simplest to the most difficult",
            button1: "More details",
            button2: "More details",
        },

        category: {
            title: "Popular Categories",
            sections: {
                card1: {
                    title: "1C Solutions for Government Institutions",
                    text: "1C Solutions for Government Institutions are specialized products for accounting and management in public sector organizations..."
                },
                card2: {
                    title: "1C Solutions for Healthcare",
                    text: "1C Solutions for Healthcare are software products designed for automation of medical institutions and healthcare management..."
                },
                card3: {
                    title: "1C Services",
                    text: "1C Services are additional online tools and services that extend the functionality of 1C products..."
                },
                card4: {
                    title: "1C Training at KUBiK Education Center",
                    text: "KUBiK Education Center is a professional training center specializing in 1C software education and certification..."
                }
            }
        },

        about: {
            "title": "More About the Company",
            "paragraph1": "The company \"Runa S\" was founded in 2002 by consultants in budget accounting with experience in implementing budget projects since 1997.",
            "paragraph2": "Continuous professional development allows us to always be at the forefront of the budget sphere. Our specialists understand accountants and their tasks.",
            "button_consult": "Order a Consultation",
            "button_more": "More Details"
        },

        contacts: {
            "title": "Contact Us",
            "subtitle": "Leave a request and we will contact you shortly",
            "social_alt": {
                "vk": "VKontakte",
                "tg": "Telegram",
                "ok": "Odnoklassniki"
            },
            "contact_email": {
                "label": "Email us at",
                "email": "runa_post@mail.ru"
            },
            "contact_phone": {
                "label": "Call us",
                "phones": [
                    "+7 963-232-82-23",
                    "+7 920-253-21-36"
                ]
            },
            "form": {
                "subject": "New request from website",
                "fields": {
                    "fullName": {
                        "label": "Full name",
                        "placeholder": "Dmitry Kucherov..."
                    },
                    "email": {
                        "label": "Email address",
                        "placeholder": "example@mail.ru"
                    },
                    "phone": {
                        "label": "Phone number",
                        "placeholder": "(123) 456 78-90"
                    },
                    "company": {
                        "label": "Company name",
                        "placeholder": "Runa S"
                    },
                    "message": {
                        "label": "Message",
                        "placeholder": "Enter your message here..."
                    }
                },
                "consents": {
                    "consent1": "By clicking \"Submit\", I consent to the processing of personal data in accordance with Federal Law No. 152-FZ of July 27, 2006 \"On Personal Data\", under the terms and for the purposes specified in the PRIVACY POLICY.",
                    "consent2": "By clicking \"Submit\", I give my CONSENT TO THE PROCESSING OF PERSONAL DATA."
                },
                "submit_button": "Submit",
                "validation_message": "Please confirm the consents before submitting."
            }
        },

        why_choose: {
            "title": "Why choose Runa S",
            "subtitle": "We've been helping businesses grow since 2002",
            "slides": [
                { "title": "10+ years of experience" },
                { "title": "Individual approach" },
                { "title": "Fast implementation" },
                { "title": "Repeat 1" },
                { "title": "Repeat 2" },
                { "title": "Repeat 3" },
                { "title": "Repeat 1" },
                { "title": "Repeat 2" },
                { "title": "Repeat 3" }
            ]
        },

        "news": {
            "title": "Latest News",
            "card1": {
                "title": "Happy Spring Holiday!",
                "subtitle": "Dear, lovely, tender, most beautiful, kind, smart...",
                "but": "Read more"
            },
            "card2": {
                "title": "2025 Offer from the Club of Unique Accountants and Consultants 'Stay Informed'",
                "but": "Read more"
            },
            "card3": {
                "title": "Happy New Year 2025 and Merry Christmas!",
                "subtitle": "Dear colleagues, partners and employees! We congratulate you on...",
                "but": "Read more"
            },
            "card4": {
                "title": "Information Base Check",
                "subtitle": "In November and December, we offer all clients to check...",
                "but": "Read more"
            }
        },

        "footer": {
            "title": "Precision solutions for efficient accounting",
            "but": "Request a consultation",
            "podrobnee": "Learn more",
            "copyr": "© 2025 Runa S LLC | All rights reserved"
        },

        rating: {
            title: "What our customers say about us",
        },

        faq: {
            title: "Frequently Asked Questions",
            subtitle: "Short answers to popular questions"
        },



    },
    ru: {
        header: {
            about: "О нас",
            events: "События",
            products: "Продукты",
            services: "Услуги",
            contacts: "Контакты",
            search: "Поиск...",
            login: "Войти",
            register: "Регистрация",
            account: "Личный кабинет",
            logout: "Выйти",
            adress: "г. Н. Новгород, ул. Нестерова, дом 9, офис 804",
            sections: {
                about: {
                    statuses: "Статусы и сертификаты компании",
                    letters: "Благодарственные письма",
                    jobs: "Работа в Руна С",
                    policy: "Политика обработки ПДн",
                    consent: "Согласие на обработку данных"
                },
                events: {
                    news: "Новости",
                    calendar: "Календарь мероприятий"
                },
                products: {
                    gov: "Решения 1С для госучреждений",
                    healthcare: "Решения 1С для здравоохранения",
                    licenses: "Клиентские лицензии",
                    server: "Серверные лицензии"
                },
                services: {
                    support: "Сопровождение 1С",
                    training: "Центр сертифицированного обучения"
                },
                info: {
                    answers: "Ответы 1С",
                    releases: "Актуальные релизы",
                    configs: "Проверка конфигурации"
                },
                kubik: {
                    info: "Учебный центр КУБиК",
                    webinars: "Вебинары",
                    courses: "Курсы"
                }
            }
        },

        welcome: {
            title: "Точные решения для эффективной бухгалтерии",
            paragraph: "Мы решаем самые трудные задачи автоматизации в государственных учреждениях самыми простыми способами. Мы готовы взять на себя решение любых задач от самых простых и до самых сложных",
            button1: "Подробнее",
            button2: "Подробнее",
        },

        category: {
            title: "Популярные категории",
            sections: {
                card1: {
                    title: "Решения 1С для госучреждений",
                    text: "Решения 1С для госучреждений — это специализированные продукты для учета..."
                },

                card2: {
                    title: "Решения 1С для здравоохранения",
                    text: "Решения 1С для здравоохранения — это программные продукты для автоматизации медицинских..."
                },

                card3: {
                    title: "Cервисы 1С",
                    text: "Сервисы 1С — это дополнительные онлайн-инструменты и сервисы, расширяющие..."
                },

                card4: {
                    title: "Обучение 1C Учебный центр КУБиК",
                    text: "Учебный центр КУБиК — это центр профессионального обучения, специализирующийся на..."
                },
            }
        },

        about: {
            "title": "Подробнее О Компании",
            "paragraph1": "Компания «Руна С» основана в 2002 году консультантами по бюджетному учету, имеющими опыт внедрения бюджетных проектов с 1997 года.",
            "paragraph2": "Постоянное повышение квалификации позволяет нам быть всегда в центре событий бюджетной сферы. Наши специалисты понимают бухгалтеров и их задачи.",
            "button_consult": "Заказать консультацию",
            "button_more": "Подробнее"
        },

        contacts: {
            "title": "Связаться с нами",
            "subtitle": "Оставьте заявку, и мы свяжемся с вами в ближайшее время",
            "social_alt": {
                "vk": "ВКонтакте",
                "tg": "Телеграм",
                "ok": "Одноклассники"
            },
            "contact_email": {
                "label": "Напишите нам на почту",
                "email": "runa_post@mail.ru"
            },
            "contact_phone": {
                "label": "Позвоните нам",
                "phones": [
                    "+7 963-232-82-23",
                    "+7 920-253-21-36"
                ]
            },
            "form": {
                "fields": {
                    "fullName": {
                        "label": "Полное имя",
                        "placeholder": "Дмитрий Кучеров..."
                    },
                    "email": {
                        "label": "Адрес эл. почты",
                        "placeholder": "example@mail.ru"
                    },
                    "phone": {
                        "label": "Номер телефона",
                        "placeholder": "(123) 456 78-90"
                    },
                    "company": {
                        "label": "Название компании",
                        "placeholder": "Руна С"
                    },
                    "message": {
                        "label": "Сообщение",
                        "placeholder": "Введите ваше сообщение здесь..."
                    }
                },
                "consents": {
                    "consent1": "Нажимая кнопку «Отправить», я даю свое согласие на обработку персональных данных, в соответствии с Федеральным законом от 27.07.2006 года №152-ФЗ «О персональных данных», на условиях и для целей, определенных в Политике конфиденциальности.",
                    "consent2": "Нажимая кнопку «Отправить», я даю свое согласие на обработку персональных данных."
                },
                "submit_button": "Отправить",
                "validation_message": "Пожалуйста, подтвердите согласия перед отправкой."
            }
        },

        why_choose: {
            "title": "Почему выбирают Руна С",
            "subtitle": "Мы помогаем расти бизнесу с 2002 года",
            "slides": [
                { "title": "Опыт 10+ лет" },
                { "title": "Индивидуальный подход" },
                { "title": "Быстрое внедрение" },
                { "title": "Повтор 1" },
                { "title": "Повтор 2" },
                { "title": "Повтор 3" },
                { "title": "Повтор 1" },
                { "title": "Повтор 2" },
                { "title": "Повтор 3" }
            ]
        },

        news: {
            title: "Последние новости",
            card1: {
                title: "С Праздником Весны!",
                subtitle: "Дорогие, милые, трепетные, самые прекрасные, добрые, умные...",
                but: "Подробнее"
            },

            card2: {
                title: "Предложение на 2025 год от Клуба Уникальных Бухгалтеров и Консультантов «Будь в курсе»",
                but: "Подробнее"
            },

            card3: {
                title: "С Новым 2025 годом и Рождеством!",
                subtitle: "Дорогие коллеги, партнёры и сотрудники! Поздравляем с...",
                but: "Подробнее"
            },

            card4: {
                title: "Проверка информационной базы",
                subtitle: "В ноябре и декабре всем клиентам мы предлагаем проверку...",
                but: "Подробнее"
            },
        },

        footer: {
            title: "Точные решения для эффективной бухгалтерии",
            but: "Заказать консультацию",
            podrobnee: "Подробнее",
            copyr: "© 2025 г. ООО “Руна С” | Все права защищены"
        },

        rating: {
            title: "Что о нас говорят наши клиенты",
        },

        faq: {
            title: "Часто Задаваемые Вопросы",
            subtitle: "Краткие ответы на популярные вопросы"
        },

    }
}

const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'ru',
    fallbackLocale: 'ru',
    messages
})

export default i18n