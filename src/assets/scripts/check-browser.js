'use strict';

const navigator = window.navigator;
const userAgent = navigator.userAgent.toLocaleLowerCase();

const isIe = (/trident/gi).test(userAgent) || (/msie/gi).test(userAgent);

if (isIe) {
  let template = '<div style="width: 100vw; height: 100vh; display: block; background-color: #e8eaf6;">' + '<div style="max-width: 640px; display: flex; flex-direction: column; align-items: center; margin: 0 auto; padding-top: 24px">' + '<div style="width: 400px; height: 250px;">' + '<img src="assets/images/simpson.png" alt="simpson" style="width: 100%; height: 100%;"></div>' + '<div style="text-align: center; margin-bottom: 16px;">' + '<h3>Упс! Ваш браузер устарел</h3><h4>Попробуйте открыть страницу в одном из следующих браузеров:</h4></div>' + '<div style="display: flex; justify-content: space-between; width: 100%;">' + '<a href="https://www.google.com/intl/ru_ru/chrome/" target="_blunc" style="font-size: 22px; color: #1b5e20;">Google Chrome</a>' + '    <a href="https://yandex.ru/promo/browser/brand/s/036?from=adwords_serp&utm_source=google&utm_medium=search&utm_campaign=brand_best_search_msk%3Aspb_last&utm_content=352483318931&utm_term=%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%20%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80&campaignid=1978534203&adgroupid=69359140485&creative=352483318931&keyword=%D1%8F%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%20%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80&gclid=CjwKCAiA4veMBhAMEiwAU4XRr7IVlIgy5nWVnc29OUU9m2vijJOSgq5GygEZjqufeZHxuUH0YlGfxRoCUAcQAvD_BwE" target="_blunc" style="font-size: 22px; color: #1b5e20;">Яндекс</a>' + '<a href="https://www.mozilla.org/ru/firefox/new/" target="_blunc" style="font-size: 22px; color: #1b5e20;">Firefox</a>' + '<a href="https://www.opera.com/ru" target="_blunc" style="font-size: 22px; color: #1b5e20;">Opera</a></div></div></div>';

  const body = document.querySelector('body');
  body.insertAdjacentHTML('afterbegin', template);
}
