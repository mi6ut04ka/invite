const users = [
    { names: ['Мама', 'папа', 'Владислав'], id: 'c7af815e-84d5-4f51-b9b0-8c330edf91b3' },
    { names: ['Мама', 'папа', 'Антон'], id: 'e129094f-45a5-4424-b844-48479d61e72c' },
    { names: ['Наиля', 'Алексей'], id: 'e4889f8f-e772-41f0-815d-9aec6d2e934c' },
    { names: ['Бабушка'], id: 'c2daef47-1b83-4511-a061-728f70bdf4f1' },
    { names: ['Бабушка'], id: '7ec4220d-d903-44a7-a9ee-44cfc87f3c81' },
    { names: ['Екатерина', 'Антон', 'Игорь', 'Ярослав'], id: '7f49db3a-8a4d-4903-8b6a-df29a0b8b551' },
    { names: ['Елена', 'Александр', 'Ирина'], id: 'f519520f-b928-422c-bc51-3677bbecc6ea' },
    { names: ['Татьяна', 'Виктор'], id: 'bb52e31a-2e25-4808-95ee-79a052b49f69' },
    { names: ['Елена', 'Николай'], id: '3169fb98-58c7-45b0-963e-6e4aa23d8b51' },
    { names: ['Мария', 'Руслан'], id: 'b0ccac0a-9cb8-49a6-8cad-ea946959f74f' },
    { names: ['Александра', 'Александр', 'Максим'], id: '82d73e24-6531-4680-91d2-aa5ed97d655c' },
    { names: ['Вера', 'Андрей', 'Роман', 'Алёна', 'Ева'], id: '7fb9206a-3e55-4617-bb06-b27d4d1393c4' },
    { names: ['Елена', 'Константин'], id: '7e88017e-047a-4fd7-a9ae-10578db5bc78' },
    { names: ['Кристина', 'Константин'], id: '7342c722-8055-482a-8893-ea54779b9283' },
    { names: ['Наталья', 'Алексей', 'Алина', 'Анна'], id: '8f3f5c37-e82f-4bd0-ba3b-92039438b79e' },
    { names: ['Анна', 'Андрей', 'Софья'], id: 'a5779d6e-b5ef-404d-87a7-10b83bcda8a4' },
    { names: ['Валентина', 'Наталья'], id: '489a712d-caf7-4e06-9978-0ef24139c522' },
    { names: ['Татьяна', 'Анатолий'], id: '6e4ad7a5-9922-4cd9-8b20-ba4e81f5171b' },
    { names: ['Светлана', 'Сергей', 'Максим'], id: '4eb4606d-aa94-4725-8114-914333f938bc' },
    { names: ['Екатерина', 'Кирилл'], id: '26dc48d3-f38f-4218-be90-eb361bdd6e8e' },
    { names: ['Евгения', 'Сергей', 'Дмитрий'], id: 'b871d95e-5cc0-4d35-a040-9ec6590d20c5' },
    { names: ['Илья', 'Алиса'], id: 'c9e6849f-f55f-4a3b-a337-3811f9b3e58f' },
    { names: ['Наталья', 'Сергей'], id: 'c0c61ded-1488-4e1a-8ec1-f51076f58533' },
    { names: ['Ольга', 'Пётр'], id: 'b3ae6e24-d39f-45ea-8f92-b7ff87823784' },
    { names: ['Ольга'], id: '8483abca-7f04-4423-8b35-f72e88db3551' },
    { names: ['Анастасия', 'Глеб'], id: 'ded45260-7e2b-41bc-9880-49f486548bc5' },
    { names: ['Дарья', 'Никита'], id: '3c97ab8b-da0b-43c5-bfbc-90cdfc836666' },
    { names: ['Алла', 'Александр'], id: 'dd60e633-7e22-49ab-9f39-05bb9a53df8d' },
    { names: ['Анастасия', 'Семён'], id: '52e7a543-4526-4cb7-a097-a46d30c1275c' },
    { names: ['Снежана', 'Руслан'], id: '3a6006cc-334e-4c3d-92bc-a397f0a25749' },
    { names: ['Дарья'], id: '36f1892e-b153-4904-801e-cbcb9e4257e3' },
    { names: ['Юрий', 'Лия'], id: 'ea206abc-997c-421b-a571-7427e9555671' },
    { names: ['Денис', 'Татьяна'], id: 'ac317769-21e9-4e81-ad2e-7a4a161b2618' },
    { names: ['Юлия'], id: '0eb5acc3-d3ee-4642-a796-1a6cf12069e0'}
]
document.addEventListener('DOMContentLoaded', function() {
    const urlPath = window.location.pathname;
    const segments = urlPath.split('/');
    const userId = segments[segments.length - 1];
    console.log(urlPath, segments, userId)
    
    if (userId) {
        const user = users.find(user => user.id === userId);
        if (user) {
            const names = user.names.join(', ');
            const messageTitle = document.querySelector('.message-title');
            const messageName = document.querySelector('.message-name');
            const messageMessage = document.querySelector('.message-message');
            
            messageTitle.innerText = 'ДОРОГИЕ И ЛЮБИМЫЕ';
            messageName.innerText = names;
            messageMessage.innerText = 'Приглашаем Вас разделить с нами важный и значимый день нашей жизни - создание нашей семьи!';
        } else {
            console.error('User not found');
        }
    } else {
        console.error('User ID not provided in the URL');
    }
});

