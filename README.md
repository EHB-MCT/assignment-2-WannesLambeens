# Voetbal Dagboek

Welkom bij het Voetbal Dagboek! Dit project is een applicatie waarmee je jouw gevoel na elke voetbalwedstrijd kunt bijhouden en een persoonlijke beoordeling kunt geven. De applicatie berekent automatisch welke teams jouw favoriete teams zijn op basis van jouw beoordelingen.

## Concept

De applicatie is ontworpen als een hulpmiddel voor nieuwe voetbalfans om hun ervaringen met verschillende teams te volgen. Het concept is eenvoudig:

- Je vult een formulier in met de volgende gegevens:
  - **Ploeg 1**: De eerste ploeg in de wedstrijd.
  - **Ploeg 2**: De tweede ploeg in de wedstrijd.
  - **Score**: Jouw persoonlijke beoordeling van de wedstrijd (op een schaal van 1 tot 5).
- Beide ploegen krijgen de door jou ingevoerde score.
- Het klassement toont de gemiddelde score van elke ploeg op basis van alle wedstrijden waarin ze hebben gespeeld.

## Functionaliteiten

- **Formulier**: Voer gemakkelijk je gegevens in na een wedstrijd.
- **Klassement**: Bekijk een overzicht van alle ploegen en hun gemiddelde score.
- **Persoonlijke voorkeur**: Ontdek welke ploegen je het leukst vindt om te volgen.

## Technische Specificaties

### Backend

- **Node.js** met **Express** voor het servergedeelte.
- **MongoDB** als database voor het opslaan van wedstrijden en scores.
- RESTful API voor interactie met de frontend.

### Frontend

- **React.js** voor een interactieve gebruikersinterface.
- Gebruik van **Axios** voor communicatie met de backend.

### Configuratiebestanden

- **`package.json`**: Bevat projectafhankelijkheden.
- **`.env`**: Bevat gevoelige gegevens zoals de MongoDB-URI en poortinstellingen.

## Installatie en Gebruik

### Vereisten

- Node.js en npm geïnstalleerd.
- MongoDB-instance (bijvoorbeeld lokaal of via MongoDB Atlas).

### Stappen

1. **Backend installeren en starten**:
   ```bash
   cd backend
   npm install
   node server.js
   
2. **Frontend installeren en starten**:
   ```bash
   cd frontend
   npm install
   npm run dev
3. **Open je browser en navigeer naar http://localhost:5173/ om de applicatie te gebruiken.**


## Gebruik van ChatGPT

Tijdens de ontwikkeling van dit project is **ChatGPT** gebruikt om technische problemen op te lossen en ideeën te structureren. Hier zijn enkele voorbeelden:

- Het oplossen van API-fouten zoals 404 (Not Found) en `undefined` variabelen.
- Het debuggen van React-componenten en het corrigeren van state management.
- Het herstructureren van de backend voor een betere gegevensverwerking.

## Toekomstige Verbeteringen

- **Authenticatie**: Voeg gebruikersaccounts toe om persoonlijke voorkeuren per gebruiker op te slaan.
- **Responsiviteit**: Optimaliseer de frontend voor mobiele apparaten.
- **Extra gegevens**: Voeg meer statistieken toe, zoals totaal aantal wedstrijden per ploeg.

## Licentie

Zie de MIT-license

