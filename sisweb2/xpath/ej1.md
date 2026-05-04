## EJ 1 XPATH - hamlet.xml

### 1. Los títulos de todas las escenas del segundo acto

```xpath
/PLAY/ACT[TITLE='ACT II']/SCENE/TITLE/text()
```

Resultado
```text
Text='SCENE I.  A room in POLONIUS' house.'
Text='SCENE II.  A room in the castle.'
```
---
### 2. ¿Cuántas veces habla Hamlet?

```xpath
count(//SPEECH[SPEAKER='HAMLET'])
```

Resultado
```text
359
```
---
### 3. El texto de las líneas que contengan la palabra "king"

```xpath
//LINE[contains(text(), 'king')]/text()
```

Resultado
```text
103
```
---
### 4. El segundo diálogo (speech) de Bernardo en el tercer acto

```xpath
/PLAY/ACT[TITLE='ACT III']//SPEECH[SPEAKER='BERNARDO']
```

Resultado: No habla en el acto 3 o he hecho algo mal.
---
### 5. Número de líneas de cada diálogo (speech)

```xpath

```

Resultado
```text

```
---
### 6. Número de líneas del diálogo (speech) con más líneas

```xpath

```

Resultado
```text

```
---
### 7. Todos los diálogos (speech) de la tercera PERSONA del primer PGROUP dentro de PERSONAE

```xpath

```

Resultado
```text

```