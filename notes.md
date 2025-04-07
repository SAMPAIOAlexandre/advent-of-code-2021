## 🧠 Notes sur le Jour 6 – Advent of Code 2021

Ce jour m’a permis de mieux comprendre plusieurs concepts clés :

---

### 🔍 Lecture attentive des consignes

Au début, je pensais que tous les poissons vieillissaient de la même façon, mais les règles spécifient que :

- Un poisson qui atteint 0 se réinitialise à 6 **et** fait naître un nouveau poisson à 8
- Le bébé **ne vieillit pas** le jour où il est créé

➡️ **Lire et relire l’énoncé** a été essentiel pour bien comprendre le fonctionnement.

---

### 🧱 Choisir la bonne structure

J’ai d’abord utilisé un tableau contenant tous les poissons individuellement.  
Ça fonctionnait pour 80 jours (partie 1), mais a totalement explosé en mémoire pour 256 jours.

➡️ J’ai appris à représenter les poissons par **un tableau de compteurs** (`timers[0]` à `timers[8]`)  
Cela permet de simuler leur reproduction sans gérer chaque individu.

---

### ⚙️ Optimisation et logique

J’ai mis en place une boucle pour faire "tourner" les timers chaque jour :

- Les poissons à 0 pondent et deviennent 6
- Les bébés vont à l’index 8

Cette approche m’a permis d’obtenir le bon résultat sans faire exploser la mémoire.

---

### 🛠️ Debugging et rigueur

J’ai utilisé `console.log`, vérifié les `typeof`, corrigé une erreur sur un `+=` à la place d’un `=`, et appris à être plus rigoureux dans les détails.

---

### 💡 Ce que je retiens

- Parfois, le problème n’est pas dans le code mais dans **la manière de penser le problème**
- Il vaut mieux avoir une structure simple et bien pensée qu’un code compliqué

---
