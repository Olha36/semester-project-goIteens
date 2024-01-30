1. Всі картинки поклади в папочку img і перейменуй їх
2. Додай justify-content, щоб розмістити картинки згідно макету
3. Треба трохи змінити верстку, тоді все запрацює суперово:
всередині секції має бути 2 батьківських елементи
<section class="soldats">
  
  <div class="container-img">
    <img src="Rectangle11.jpg" alt="Rectangle11">
    <img class="ZSU" src="Rectangle12.jpg" alt="Rectangle12">
  <div>

  <div class="container-description">
    <h2>Про нас</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
    </p>
  </div>

</section>

4. style.css

- В класі .soldats висота не треба. Можна жодати наступні параметри: display: flex; justify-content: center; padding: 32px 0 165px;

- В класі .container дісплей флекс не треба
- до першої картинки додай правий марджін (можеш їй дати клас)
- дай клас другій картинці та постав наступні свойства `position: relative; top: 50%;`

29.01.2024
Зроби ретинізацію для другої картинки за прикладом першої

