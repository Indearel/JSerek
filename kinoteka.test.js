import { Selector } from 'testcafe';

fixture `Getting Started kinoteka`
    .page `http://kinoteka.pl`;

test('My first test', async t =>
 {
    await t
        .click ("#menu > li:nth-child(2) > a")
        .click ("#left > div > div > div.repertuar-rep > a")
        .typeText ("#formNewsletter > fieldset > div > input[type=text]:nth-child(1)", "John")
    });
