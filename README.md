# Kata JS Torneo Boolkaichi

## 📖 Descrizione
Questo progetto simula un torneo chiamato **Boolkaichi**, dove i combattenti vengono valutati in base alla loro potenza e all’arma assegnata.  
Il torneo è diviso in cinque fasi:  
1. Scelta dell’arma  
2. Allenamento  
3. Qualificazione  
4. Combattimento  
5. Premiazione  

Il progetto è stato realizzato usando **JavaScript**, **DOM manipulation** e **array methods** (`map`, `filter`, `sort`, `splice`, `push`) per allenare logica e manipolazione dei dati.

---

## ⚡ Funzionalità
- Assegnazione casuale delle armi ai combattenti.  
- Incremento della potenza durante l’allenamento.  
- Esclusione dei combattenti non qualificati.  
- Combattimenti a coppie con determinazione del vincitore.  
- Premiazione dei **3 migliori combattenti**.  
- Visualizzazione dinamica del torneo in una pagina HTML tramite **tabelle**.  
- Pulsanti interattivi di **Start** e **Reset** torneo.  
- Design semplice con tabelle e bottoni stilizzati.  

---

## 🛠️ Tecnologie
- **HTML5**  
- **CSS3**  
- **JavaScript (vanilla)**  
- Console del browser per debug e test  

---

## 🔑 Logica implementata
- Creazione di copie indipendenti degli array originali (`fighters` e `weapons`) per non modificare i dati di partenza.  
- Uso di `Math.random()` per assegnare casualmente armi e potenze.  
- Filtraggio dei combattenti non qualificati tramite `filter()`.  
- Ordinamento dei vincitori e selezione del podio tramite `sort()` e `slice()`.  
- Creazione dinamica di **tabelle HTML** tramite `createElement` e `appendChild`.  

---

## 🎁 Bonus
- Visualizzazione grafica dei combattenti e del podio.  
- Interattività tramite pulsanti di **Start** e **Reset**.  
- Possibile implementazione di **animazioni CSS** (hover glow, pulse) sui combattenti e sul podio.  
