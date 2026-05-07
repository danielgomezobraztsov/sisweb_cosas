## EJ1 XQUERY

Dado el XML:
```xml
<?xml version="1.0"?>
<bib>
  <book year="1994">
    <title>TCP/IP Illustrated</title>
    <author>Stevens</author>
    <publisher>Addison-Wesley</publisher>
    <price>65.95</price>
  </book>
  <book year="1994">
    <title>Principles of Databases</title>
    <author>Abiteboul</author>
    <publisher>Addison-Wesley</publisher>
    <price>35.89</price>
  </book>
  <book year="1992">
    <title>Advanced Programming in the Unix environment</title>
    <author>Stevens</author>
    <publisher>Addison-Wesley</publisher>
        <price>65.95</price>
  </book>
  <book year="2000">
    <title>Data on the Web</title>
    <author>Abiteboul</author>
    <author>Buneman</author>
    <author>Suciu</author>
    <publisher>Morgan Kaufmann Publishers</publisher>
    <price> 39.95</price>
  </book>
  <book year="1992">
    <title>The Economics of Technology and Content for Digital TV</title>
    <editor>
    Gerbarg
    <affiliation>CITI</affiliation>
    </editor>
    <publisher>Kluwer Academic Publishers</publisher>
    <price>129.95</price>
  </book>
</bib>
```

---

1. Devuelve los títulos de todos los libros ordenados por precio de mayor a menor

```xquery
for $b in /bib/book
order by xs:decimal(normalize-space($b/price)) descending
return $b/title
```

Resultado:
```xml
<title>The Economics of Technology and Content for Digital TV</title>
<title>TCP/IP Illustrated</title>
<title>Advanced Programming in the Unix environment</title>
<title>Data on the Web</title>
<title>Principles of Databases</title>
```

---

2. ¿Cuántos libros ha escrito Abiteboul?

```xquery
count(/bib/book[author = "Abiteboul"])
```

Resultado:
```text
2
```

---

3. Haz un XML que indique para cada autor, cuántos libros ha escrito

```xquery

```

