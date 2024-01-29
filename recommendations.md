Сонечко, ти велика умнічка!!! Чудово виконала десктопну верстку. Додай анімацію (можеш використовувати бібліотеку) і роби адаптив.

1. В класі .right_item забери width: 364px; height: 549px;  flex-shrink: 0;
2. В класі img_wrapper, left_item, left_top, left_bottom додай flex-wrap: wrap;
3. В класі .fourth_section забери все крім бекграунду і марджіну

29.01.2024

Умнічка, дуже якісно зробила код, мені надзвичайно сподобалась анімація. Сонце, зроби ще ретинізацію картинок за прикладом:
 <picture>
    <source srcset="./img/Rectangle 32.jpg 1x, ./img/Rectangle32.jpg 1x" media="(min-width: 1199px)">
    <source srcset="./img/Rectangle 32.jpg 1x, ./img/картинкаУФорматі2х.jpg 2x" media="(min-width: 700px)">
    <source srcset="./img/Rectangle 32.jpg, ./img/картинкаУФорматі3х.jpg 3x" media="(max-width: 699px)">
    <img class="left_top_left" src="./img/Rectangle 32.jpg" alt="#" />
  </picture>

  Цей приклад я тобі вставила в код на місце першої картинки. Тобі треба завантажити кожну картинку ще по 2 рази: перший раз у форматі 2х, а другий раз у форматі 3х і підставити в шлях, як в прикладі. Якщо будуть питання чи не вийде - пиши мені.