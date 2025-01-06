# Naming Conventions

In dit project hanteren we consistente en duidelijke naamgevingsconventies om de leesbaarheid, schaalbaarheid en samenwerking te verbeteren. Hieronder staan de richtlijnen voor naamgeving van verschillende componenten en bestanden.

## Bestanden en Mappen

- **CamelCase** wordt gebruikt voor componentbestanden (bijvoorbeeld: `UserProfile.jsx`).
- **kleine letters** worden gebruikt voor mappen en algemene bestanden (bijvoorbeeld: `styles/` of `index.css`).
- Gebruik **koppelteken** (`-`) voor bestandsnamen in configuratiebestanden (bijvoorbeeld: `code-of-conduct.md`).

## Variabelen

- Gebruik **camelCase** voor variabelen en functies in JavaScript (bijvoorbeeld: `userProfile` of `fetchData`).
- Gebruik **SCREAMING_SNAKE_CASE** voor constante waarden (bijvoorbeeld: `API_BASE_URL`).

## Componenten

- Gebruik **PascalCase** voor componenten in React (bijvoorbeeld: `DataList` of `FormInput`).

## API-routes

- Gebruik **kebob-case** voor REST API-routes (bijvoorbeeld: `/api/user-profile` of `/api/data-ranking`).

## CSS-klassen

- Gebruik **BEM**-conventies (Block, Element, Modifier):
  - `block__element--modifier` (bijvoorbeeld: `form__input--error`).

## Commit Messages

- Gebruik de volgende indeling:
<type>(<scope>): <korte beschrijving>
- **Type**: `feat`, `fix`, `docs`, `chore`, `style`, etc.
- **Scope**: Het specifieke deel van de code dat is aangepast.
- **Beschrijving**: Kort en krachtig uitleggen wat er is veranderd.

**Voorbeeld**:
feat(frontend): voeg formulier toe voor het invoeren van voetbalwedstrijden

## Overige

- Vermijd afkortingen tenzij algemeen bekend (bijvoorbeeld: `URL` in plaats van `uRl`).
- Gebruik Engelse termen voor consistentie, tenzij specifiek gericht op een Nederlandstalig publiek.

Met deze conventies zorgen we ervoor dat het project gestructureerd en gemakkelijk te onderhouden blijft.
