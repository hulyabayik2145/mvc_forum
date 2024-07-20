# kütüphaneler

- axios
- json-server
- react-router-dom
- tailwind

# MVC (Model-view- controller)

- Model:

* uygulamanın veri mantığını ve yapısını temsil eder
* bileşende tutulacak state in başlangıç değeri
* Verriyi formatlamaya yarayan gonksiyon
* api şsteklerş tutulabilir
* Genellikle Class yapısı ile tanımlanır

- View

* Son kullanıcının gördüğü tasarımdır.
* Bileşenin return satırına yazdığımız jsx elementleri burada tanımlanır

- Controller:

* view ile model arasındaki bağlantığı sağlar

- Kullanıcı etkileşimiyle tetiklenecek bütün fonksiyonlar burada tanımlanır

# MVC klasör yapısı

# #1. yol

- public

-src

-- pages
---MainPage
-----MainPAgecconttoller
-----MainPageModel
-----MainPageView

--- AuthPage
-----AuthPageController
-----AuthPageModel
-----AuthPageView

# #2.yol

- public
  -src
  -- controllers
  --- MainPageController
  --- AuthPageController
  --models
  --- MainPageModel
  --- AuthPageModel
  --vievs
  ---MainğageView
  ---AuthPageView
#   m v c _ f o r u m  
 