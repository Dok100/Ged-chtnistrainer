
# Gedächtnistrainer
Trainings für das Kurzzeitgedächtnisss

## Installation
Install the npm packages:

```bash
npm install
```

## Lokalen Server starten
Starte den statischen Server mit:

```bash
npm start
```

Danach läuft die Anwendung unter <http://localhost:5000>.

## Hinweise
Die App besteht nur aus statischen Dateien. React und Babel werden über CDNs
eingebunden, daher ist kein Build-Schritt notwendig.
=======
# Konzept für die Kurzzeitgedächtnis-Trainings-Web-App

## 1. Überblick und Zielsetzung

Die Web-App soll ein wissenschaftlich fundiertes Training des Kurzzeitgedächtnisses ermöglichen, basierend auf den recherchierten und ausgewählten Methoden. Die App richtet sich an Nutzer jeden Alters, die ihr Arbeitsgedächtnis verbessern möchten, und bietet ein strukturiertes, progressives Trainingsprogramm mit personalisierten Anpassungen.

## 2. Technologische Grundlage

Da die App primär clientseitig funktionieren soll und keine komplexe Datenbankanbindung benötigt, wird React als Frontend-Framework verwendet. Dies ermöglicht:

- Reaktive Benutzeroberfläche mit schnellen Übergängen zwischen Übungen
- Komponentenbasierte Architektur für modulare Trainingseinheiten
- Gute Performance für zeitkritische Übungen
- Einfache Deployment-Möglichkeiten
- Responsive Design für verschiedene Endgeräte

## 3. Struktur und Funktionsumfang

### 3.1 Hauptbereiche der App

1. **Startseite/Dashboard**
   - Übersicht über Trainingsfortschritt
   - Empfohlene tägliche Übungen
   - Wissenschaftliche Hintergrundinformationen

2. **Trainingsbereich**
   - Kategorisierte Übungen nach Trainingsmethoden
   - Progressiver Schwierigkeitsgrad
   - Timer und Punktesystem

3. **Profil und Einstellungen**
   - Persönliche Trainingsstatistiken
   - Anpassung der Schwierigkeitsgrade
   - Einstellung von Trainingszielen

4. **Informationsbereich**
   - Wissenschaftliche Grundlagen
   - Erklärungen zu den Trainingsmethoden
   - Tipps zur Optimierung des Trainings

### 3.2 Trainingsmodule

Basierend auf den ausgewählten wissenschaftlichen Methoden werden folgende Trainingsmodule implementiert:

#### Modul 1: Gedächtnispalast (Loci-Methode)
- **Einführung**: Interaktives Tutorial zur Erstellung eines persönlichen Gedächtnispalastes
- **Übungen**: 
  - Einfache Listen merken (Anfänger)
  - Komplexe Informationen verknüpfen (Fortgeschritten)
  - Abstrakte Konzepte verorten (Experte)
- **Visualisierungshilfen**: Interaktive 3D-Umgebungen als Gedächtnispalast-Vorlagen

#### Modul 2: N-Back-Training
- **Varianten**:
  - Visuelles N-Back (Positionen, Farben, Formen)
  - Auditives N-Back (Buchstaben, Zahlen, Töne)
  - Dual N-Back (kombiniert visuell und auditiv)
- **Schwierigkeitsgrade**: 1-back bis 5-back, adaptiv anpassbar
- **Spielmechanik**: Schnelle Reaktionszeiten, Punktesystem für Motivation

#### Modul 3: Dual-Task-Training
- **Übungstypen**:
  - Visuelle Muster merken während auditiver Verarbeitung
  - Zahlenfolgen merken während visueller Aufgaben
  - Räumliche Navigation mit gleichzeitiger Informationsverarbeitung
- **Progression**: Zunehmende Komplexität beider Aufgabenkomponenten

#### Modul 4: Sequenztraining
- **Übungen**:
  - Zahlen-, Buchstaben- und Symbolsequenzen
  - Vorwärts- und Rückwärtswiederholung
  - Muster-Wiederholung (visuell-räumlich)
- **Anpassung**: Automatische Anpassung der Sequenzlänge basierend auf Leistung

#### Modul 5: Updating-Training
- **Übungstypen**:
  - Informationsfilterung (relevante vs. irrelevante Reize)
  - Kontinuierliche Aktualisierung von Informationen
  - Interferenzaufgaben mit konkurrierenden Informationen
- **Schwierigkeitsgrade**: Zunehmende Informationsdichte und Ablenkungsreize

## 4. Benutzeroberfläche und User Experience

### 4.1 Design-Prinzipien
- Klares, ablenkungsfreies Interface für optimale Konzentration
- Konsistente Farbcodierung für verschiedene Trainingsmodule
- Responsive Design für Desktop und mobile Geräte
- Barrierefreiheit nach WCAG-Standards

### 4.2 Nutzerführung
- Onboarding-Prozess mit Einführung in die wissenschaftlichen Grundlagen
- Stufenweise Freischaltung von Übungen basierend auf Fortschritt
- Tägliche Trainingsempfehlungen basierend auf bisherigen Leistungen
- Regelmäßige Fortschrittsberichte und Leistungsanalysen

### 4.3 Gamification-Elemente
- Punktesystem für abgeschlossene Übungen
- Fortschrittsbalken und Level-System
- Badges für erreichte Meilensteine
- Optionale Herausforderungen für zusätzliche Motivation

## 5. Personalisierung und Adaptivität

### 5.1 Personalisierungsmechanismen
- Initialer Leistungstest zur Bestimmung des Ausgangsniveaus
- Automatische Anpassung der Schwierigkeit basierend auf Leistungsdaten
- Berücksichtigung von Lernkurven und Plateauphasen
- Personalisierte Trainingsempfehlungen

### 5.2 Adaptiver Algorithmus
- Kontinuierliche Leistungsanalyse während des Trainings
- Dynamische Schwierigkeitsanpassung innerhalb einer Übung
- Berücksichtigung von Tagesform und Ermüdungseffekten
- Ausbalancierung verschiedener kognitiver Fähigkeiten

## 6. Datenerfassung und -analyse

### 6.1 Leistungsdaten
- Reaktionszeiten
- Fehlerraten
- Kapazitätsgrenzen (z.B. maximale Sequenzlänge)
- Lernkurven über Zeit

### 6.2 Nutzungsdaten
- Trainingsfrequenz und -dauer
- Bevorzugte Übungstypen
- Abbruchraten bei verschiedenen Schwierigkeitsgraden
- Tageszeit-Effekte

### 6.3 Datenschutz
- Lokale Speicherung der Daten im Browser (localStorage/IndexedDB)
- Keine Übermittlung personenbezogener Daten
- Optionale Exportfunktion für persönliche Fortschrittsdaten

## 7. Technische Implementierung

### 7.1 Architektur
- Single-Page-Application mit React
- Modulare Komponenten für Trainingseinheiten
- Zustandsverwaltung mit React Context oder Redux
- Responsive Design mit Tailwind CSS

### 7.2 Kernfunktionalitäten
- Präzise Zeitmessung für Reaktionszeiten
- Zufallsgeneratoren für Trainingsmaterial
- Algorithmen zur adaptiven Schwierigkeitsanpassung
- Datenvisualisierung für Fortschrittsberichte

### 7.3 Performance-Optimierung
- Effiziente Rendering-Zyklen für zeitkritische Übungen
- Vorladung von Assets für unterbrechungsfreies Training
- Optimierung für mobile Geräte (Touch-Interaktionen)

## 8. Entwicklungs- und Implementierungsplan

1. **Setup der Entwicklungsumgebung**
   - React-Projekt initialisieren
   - Komponenten-Struktur aufbauen
   - Routing und Grundlayout implementieren

2. **Implementierung der Kernfunktionalitäten**
   - Trainingsalgorithmen entwickeln
   - Datenmodell für Fortschrittsverfolgung erstellen
   - Adaptiven Schwierigkeitsalgorithmus implementieren

3. **Entwicklung der Trainingsmodule**
   - Modul für Modul implementieren, beginnend mit einfacheren Übungen
   - Einheitliche Schnittstelle für Leistungsmessung
   - Integration in das Gesamtsystem

4. **UI/UX-Implementierung**
   - Responsive Layouts für alle Bildschirmgrößen
   - Animationen und visuelle Feedback-Mechanismen
   - Barrierefreiheit sicherstellen

5. **Testing und Optimierung**
   - Funktionale Tests aller Trainingsmodule
   - Performance-Optimierung
   - Usability-Tests und Anpassungen

6. **Deployment und Bereitstellung**
   - Build-Prozess optimieren
   - Deployment auf Hosting-Plattform
   - Finale Tests in Produktionsumgebung

