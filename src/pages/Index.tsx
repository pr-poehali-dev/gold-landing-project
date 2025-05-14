import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="bg-black text-white">
      {/* Верхняя панель навигации */}
      <header className="bg-[#1A1A1A] py-4 px-6 shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Icon name="Coins" className="h-8 w-8 mr-2 text-[#D4AF37]" />
            <h1 className="text-2xl font-montserrat font-bold">
              <span className="text-[#9B0000]">Золото</span>Скупка
            </h1>
          </div>
          <div className="hidden md:flex space-x-6 font-roboto">
            <a
              href="#prices"
              className="hover:text-[#D4AF37] transition-colors duration-300"
            >
              Цены
            </a>
            <a
              href="#services"
              className="hover:text-[#D4AF37] transition-colors duration-300"
            >
              Услуги
            </a>
            <a
              href="#advantages"
              className="hover:text-[#D4AF37] transition-colors duration-300"
            >
              Преимущества
            </a>
            <a
              href="#items"
              className="hover:text-[#D4AF37] transition-colors duration-300"
            >
              Изделия
            </a>
            <a
              href="#contact"
              className="hover:text-[#D4AF37] transition-colors duration-300"
            >
              Контакты
            </a>
          </div>
          <Button className="bg-[#9B0000] hover:bg-red-800">
            <Icon name="Phone" className="mr-2 h-4 w-4" />
            Связаться
          </Button>
        </div>
      </header>

      {/* Hero секция */}
      <section className="min-h-[90vh] relative flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-black opacity-70 z-10"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1610375461369-d613b564f4c4?q=80&w=2070")',
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "brightness(0.4)",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-montserrat font-bold mb-6">
              Выгодная скупка золота и старинных монет в вашем городе
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-roboto">
              Получите максимальную цену за ваши ценности уже сегодня.
              Бесплатная оценка и моментальный расчет.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#9B0000] hover:bg-red-800 text-lg"
              >
                Оценить стоимость
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black text-lg"
              >
                Узнать цены
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-8">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#D4AF37]">7+</span>
                <span className="text-sm">лет на рынке</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#D4AF37]">10к+</span>
                <span className="text-sm">довольных клиентов</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-[#D4AF37]">24/7</span>
                <span className="text-sm">на связи</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-12 text-center">
            Что мы <span className="text-[#9B0000]">принимаем</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-black border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-[#9B0000] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Necklace" className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-2">
                  Ювелирные изделия
                </h3>
                <p className="text-gray-300 font-roboto">
                  Кольца, серьги, цепочки, браслеты, подвески из золота любой
                  пробы. Принимаем изделия даже с повреждениями.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-[#9B0000] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Coins" className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-2">
                  Монеты и слитки
                </h3>
                <p className="text-gray-300 font-roboto">
                  Золотые инвестиционные, коллекционные и памятные монеты.
                  Оценка по каталогу с учетом нумизматической ценности.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-[#9B0000] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Crown" className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-2">
                  Старинные монеты
                </h3>
                <p className="text-gray-300 font-roboto">
                  Золотые монеты царской России, СССР и зарубежные. Компетентная
                  оценка редких экземпляров с учетом исторической ценности.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-[#9B0000] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Watch" className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-2">
                  Часы и технические изделия
                </h3>
                <p className="text-gray-300 font-roboto">
                  Золотые корпуса часов, технический золотой лом, детали
                  электроники, содержащие золото.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-[#9B0000] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Tooth" className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-2">
                  Зубные коронки
                </h3>
                <p className="text-gray-300 font-roboto">
                  Золотые зубные протезы и коронки, вышедшие из употребления.
                  Оценка с учетом состава и веса.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black border-[#D4AF37] hover:shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="bg-[#9B0000] w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon name="BadgeDollar" className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-montserrat font-bold mb-2">
                  Антикварные изделия
                </h3>
                <p className="text-gray-300 font-roboto">
                  Старинные золотые изделия, предметы роскоши, украшения с
                  исторической ценностью.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section
        id="advantages"
        className="py-20 bg-gradient-to-b from-black to-[#1A1A1A]"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-12 text-center">
            Наши <span className="text-[#9B0000]">преимущества</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-[#9B0000] w-12 h-12 rounded-full flex items-center justify-center">
                  <Icon name="Scale" className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-montserrat font-bold mb-2">
                  Высокая оценка
                </h3>
                <p className="text-gray-300 font-roboto">
                  Используем профессиональное оборудование для точного
                  определения пробы и веса. Предлагаем лучшие цены на рынке.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-[#9B0000] w-12 h-12 rounded-full flex items-center justify-center">
                  <Icon name="Banknote" className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-montserrat font-bold mb-2">
                  Моментальная выплата
                </h3>
                <p className="text-gray-300 font-roboto">
                  Расчет происходит сразу после оценки. Выплачиваем деньги
                  наличными или на карту в зависимости от ваших предпочтений.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-[#9B0000] w-12 h-12 rounded-full flex items-center justify-center">
                  <Icon name="FileCheck" className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-montserrat font-bold mb-2">
                  Легальность и безопасность
                </h3>
                <p className="text-gray-300 font-roboto">
                  Работаем официально, заключаем договор купли-продажи. Все
                  транзакции защищены и конфиденциальны.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-[#9B0000] w-12 h-12 rounded-full flex items-center justify-center">
                  <Icon name="Clock" className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-montserrat font-bold mb-2">
                  Удобный график
                </h3>
                <p className="text-gray-300 font-roboto">
                  Работаем ежедневно с 9:00 до 21:00, включая выходные и
                  праздники. Возможен выезд специалиста к вам.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-[#9B0000] w-12 h-12 rounded-full flex items-center justify-center">
                  <Icon name="Building" className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-montserrat font-bold mb-2">
                  Филиалы по всему городу
                </h3>
                <p className="text-gray-300 font-робoto">
                  Удобные пункты приема в разных районах города. Выбирайте
                  ближайший к вам офис.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="bg-[#9B0000] w-12 h-12 rounded-full flex items-center justify-center">
                  <Icon name="Heart" className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-montserrat font-bold mb-2">
                  Программа лояльности
                </h3>
                <p className="text-gray-300 font-roboto">
                  Повышенные ставки для постоянных клиентов. Специальные
                  предложения для крупных партий.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Галерея изделий */}
      <section id="items" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-12 text-center">
            Примеры <span className="text-[#9B0000]">принимаемых изделий</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=500"
                alt="Золотые кольца"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-montserrat">Золотые кольца</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=500"
                alt="Золотые цепочки"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-montserrat">
                  Золотые цепочки
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1629581678313-36cf745a9af9?w=500"
                alt="Золотые серьги"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-montserrat">Золотые серьги</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?w=500"
                alt="Старинные монеты"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-montserrat">
                  Старинные монеты
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1574765818843-f7256e645956?w=500"
                alt="Золотые часы"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-montserrat">Золотые часы</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1611235115922-72bd53d2ecf6?w=500"
                alt="Золотые слитки"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-montserrat">Золотые слитки</p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1619164816991-22d393238d8f?w=500"
                alt="Коллекционные монеты"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-montserrat">
                  Коллекционные монеты
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1590247818082-7431a2eac9ef?w=500"
                alt="Ювелирные украшения"
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 font-montserrat">
                  Ювелирные украшения
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Оценка и контакты */}
      <section id="contact" className="py-20 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                Узнайте{" "}
                <span className="text-[#9B0000]">
                  предварительную стоимость
                </span>
              </h2>
              <p className="text-gray-300 mb-8 font-roboto">
                Заполните форму, и наш специалист свяжется с вами для уточнения
                деталей и предварительной оценки. Окончательная оценка
                производится при личной встрече.
              </p>
              <form className="space-y-4">
                <div>
                  <Input
                    type="text"
                    placeholder="Ваше имя"
                    className="bg-black border-[#D4AF37] focus:border-[#D4AF37] text-white"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Номер телефона"
                    className="bg-black border-[#D4AF37] focus:border-[#D4AF37] text-white"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Опишите изделие (тип, примерный вес, проба)"
                    className="bg-black border-[#D4AF37] focus:border-[#D4AF37] text-white min-h-[120px]"
                  />
                </div>
                <div>
                  <Button className="w-full bg-[#9B0000] hover:bg-red-800">
                    Отправить на оценку
                  </Button>
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  Нажимая кнопку "Отправить на оценку", вы соглашаетесь с
                  политикой обработки персональных данных
                </p>
              </form>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-montserrat font-bold mb-6">
                Наши <span className="text-[#9B0000]">контакты</span>
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#9B0000] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-bold mb-2">
                      Адреса
                    </h3>
                    <p className="text-gray-300 font-roboto">
                      г. Москва, ул. Тверская, 15
                      <br />
                      г. Москва, Кутузовский проспект, 30
                      <br />
                      г. Москва, Ленинградский проспект, 80
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#9B0000] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-bold mb-2">
                      Время работы
                    </h3>
                    <p className="text-gray-300 font-roboto">
                      Ежедневно с 9:00 до 21:00
                      <br />
                      Без выходных и праздников
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#9B0000] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-bold mb-2">
                      Телефоны
                    </h3>
                    <p className="text-gray-300 font-roboto">
                      +7 (495) 123-45-67
                      <br />
                      +7 (800) 123-45-67 (бесплатно по России)
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-[#9B0000] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-montserrat font-bold mb-2">
                      Email
                    </h3>
                    <p className="text-gray-300 font-roboto">
                      info@zolotoskupка.ru
                      <br />
                      support@zolotoskupка.ru
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-black py-10 border-t border-[#D4AF37]/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Icon name="Coins" className="h-8 w-8 mr-2 text-[#D4AF37]" />
              <h1 className="text-2xl font-montserrat font-bold">
                <span className="text-[#9B0000]">Золото</span>Скупка
              </h1>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-6 md:mb-0 text-sm font-roboto">
              <a
                href="#services"
                className="hover:text-[#D4AF37] transition-colors duration-300"
              >
                Услуги
              </a>
              <a
                href="#advantages"
                className="hover:text-[#D4AF37] transition-colors duration-300"
              >
                Преимущества
              </a>
              <a
                href="#items"
                className="hover:text-[#D4AF37] transition-colors duration-300"
              >
                Изделия
              </a>
              <a
                href="#contact"
                className="hover:text-[#D4AF37] transition-colors duration-300"
              >
                Контакты
              </a>
              <a
                href="#"
                className="hover:text-[#D4AF37] transition-colors duration-300"
              >
                Политика конфиденциальности
              </a>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-[#1A1A1A] p-2 rounded-full hover:bg-[#9B0000] transition-colors duration-300"
              >
                <Icon name="Instagram" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-[#1A1A1A] p-2 rounded-full hover:bg-[#9B0000] transition-colors duration-300"
              >
                <Icon name="Facebook" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-[#1A1A1A] p-2 rounded-full hover:bg-[#9B0000] transition-colors duration-300"
              >
                <Icon name="MessageCircle" className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-[#1A1A1A] p-2 rounded-full hover:bg-[#9B0000] transition-colors duration-300"
              >
                <Icon name="Mail" className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} ЗолотоСкупка. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
