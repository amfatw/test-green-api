# Тестовое задание для GREEN API

Тестовое задание на позицию фронтенд разработчика для [GREEN API](https://green-api.com/). Для использования приложения требуется иметь id и token, подробнее [тут](https://green-api.com/docs/before-start/).

## Описание работы

Первым делом валидируются введённые **id** и **token** (отправляется запрос на сервер).

После ввода корректных **id** и **token** начинается проверка входящих уведомлений. Что приходит во входящие уведомления зависит от настроек аккаунта. Приложение обрабатывает только **incomingMessageReceived** и **outgoingMessageReceived**, остальные уведомления удаяются. Если есть уведомление нужного типа, то для него автоматически создаётся диалог.\
Если уведомление найдено и обработано, сразу начинается следующая проверка. Если уведомления нет, планируется следующая проверка через 20 секунд.

Диалог можно добавить самостоятельно, введя номер получателя и нажав соответствующую кнопку. Предварительно будет выполнена проверка наличия на введённом номере WA.

При первом открытии диалога выполняется загрузка истории сообщений. Дальше в диалог добавляются отправленные сообщения и новые входящие.

## Инструкция для локального запуска

1. Скачать репозиторий

2. В корневой папке выполнить `npm run dev`

3. открыть в браузере страницу http://localhost:5173/