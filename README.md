# Diet Detective: Aplikacja Webowa do Kontroli Diety

![image](https://github.com/sebo21cc21/IB_DietDetective/assets/91903375/e6033f6b-d8ae-4be7-997f-0dc8c2dee4d2)


**Diet Detective** to innowacyjna aplikacja webowa, która pozwala na śledzenie i analizowanie diety, by podjąć zdrowsze decyzje żywieniowe.
Czy zastanawiałeś się kiedyś, co dokładnie zawiera się w twoim codziennym menu i jakie składniki odgrywają kluczową rolę w twojej diecie? Teraz masz szansę to sprawdzić dzięki aplikacji webowej Diet Detective! Ta innowacyjna platforma umożliwia śledzenie i analizowanie swojej diety, abyś mógł podejmować bardziej świadome i zdrowsze wybory żywieniowe.

## Narzędzia

- **React**: Responsywna aplikacja działająca na różnych urządzeniach.
- **Docker**: Łatwe wdrażanie i skalowanie.
- **Spring Boot**: Backend zapewniający stabilność i bezpieczeństwo.
- **PostgreSQL**: Efektywne zarządzanie danymi.
- **Swagger**: Dokumentacja i łatwa integracja API.
- **AWS EC2**: Niezawodny hosting.
- **Firebase Storage**: Zarządzanie multimedią.
- **Flyway Migrations**: Kontrola wersji bazy danych.
- **JUnit** Framework do testowania jednostkowego w języku Java. Spring Boot jest dobrze zintegrowany z JUnit, co pozwala na łatwe tworzenie testów jednostkowych dla komponentów Spring.
- **Lighthouse**: Audyt strony internetowej, które ocenia jej wydajność, dostępność, jakość SEO i inne aspekty. Pomaga w optymalizacji witryny dla użytkowników.
- **WebPageTest**:  Testowanie wydajności strony internetowej. Pozwala na ocenę, jak szybko wczytuje się strona na różnych urządzeniach i łączach internetowych.

## Jak Rozpocząć

### Wymagania

- Node.js
- Docker
- PostgreSQL
- JDK 19

### Uruchomienie lokalne

1. Klonowanie repozytorium:
   ```bash
   git clone https://github.com/sebo21cc21/IB_DietDetective.git
2. Instalacja zależności frontend
   ```bash
   npm install
3. Instalacja zależności backend
   ```bash
   mvn clean install
5. Uruchomienie Docker:
   ```bash
   docker-compose up
6. Uruchomienie lokalne:
   ```bash
   npm start
   cd DietDetective Spring
   docker compose up
   RUN DietDetectiveSpring Application

### Uruchomienie webowe
```bash
   http://dietdetective.live/
```
## Licencja
Rozpowszechniane na podstawie Licencji MIT. Zobacz [MIT LICENSE](https://github.com/sebo21cc21/IB_DietDetective/blob/main/LICENSE) po więcej informacji.
## Kontakt
- Link do repozytorium kodu projektu: https://github.com/sebo21cc21/IB_DietDetective
- Adres e-mail: 261662@student.pwr.edu.pl
#### © 2023 DietDetective | Powered by Full-Stack Developer Sebastian Bednarski

## Do naprawy
- [x] „poprawienie” dodawania wagi posiłków,
- [x] wydzielenie listy dodanych posiłków (tym samym usuwania) w inne miejsce,
- [x] możliwość edycji wagi już dodanych posiłków,
- [x] możliwość dodawania posiłków do ulubionych / zakładka z ostatnio dodawanymi,
- [ ] przeprojektowanie strony głównej, alternatywnie usunięcie jej,
- [x] przeniesienie zmiany docelowej wagi z profilu do monitorowania,
- [ ] usunięcie „Witaj Szymon” lub chociaż zmiana w interaktywny przycisk, by przenosiło do profilu,
- [x] usunięcie z zakładki „Monitorowanie”  okienka z „Miło Cię znów widzieć!”,
- [x] poprawka przycisków przy listach, by przycisk „Następna” i numer strony się nie przesuwały po przejściu na 2 stronę.
- [ ] dodanie komunikatu o braku wyników wyszukiwania,
- [ ] dodanie alfabetycznego sortowania,
- [ ] oznaczenie wymaganych pól przy rejestracji i wymagań, które hasło musi spełnić,
- [ ] zmiana wyboru daty i formatu w wywiadzie środowiskowym na polski,
- [x] nałożenie przycisku na ikony logowania i rejestracji,
- [x] możliwość dodania posiłku z poziomu przepisu,
- [ ] zmiana wykresu nawodnienia na słupkowy,
- [x] zmiana komunikatu przy dodawaniu/usuwaniu nawodnienia z informacji o zmianie od wejścia do zakładki na informację o łącznym, aktualnym stanie,
- [x] podświetlenie (zaznaczenie) zakładki, w której się obecnie znajduje. 